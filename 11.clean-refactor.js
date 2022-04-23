exports.create = async function (req, res) {
  const err = validationResult(req)

  if (err.errors.length > 0) {
    res.status(422).send(err)
  } else {
    let newOrder = Order.build(req.body)
    const restaurant = await Restaurant.findByPk(newOrder.restaurantId)
    newOrder.userId = req.user.id
    newOrder.price = 0
    const productLines = req.body.products
    let products
    try {
      products = await Product.findAll({
        where: {
          id: productLines.map(pl => pl.productId)
        }
      })
    } catch (err) { console.log(err) }

    // Ale! quiero el == jaja
    // eslint-disable-next-line eqeqeq
    try {
      productLines.forEach(pl => { pl.unityPrice = products.find(p => p.id == pl.productId).price })
      newOrder.price = productLines.reduce((acc, pl) => acc + pl.quantity * pl.unityPrice, 0)

      newOrder.shippingCosts = 0
      // RN: Pedidos de más de 10€ no tienen gastos de envío
      if (newOrder.price < 10) {
        newOrder.shippingCosts = restaurant.shippingCosts
        newOrder.price += newOrder.shippingCosts
      }
    } catch (err) { }
    const t = await models.sequelize.transaction()
    try {
      newOrder = await newOrder.save({ transaction: t })
      for (const pl of productLines) {
        await newOrder.addProduct(pl.productId, { through: { quantity: pl.quantity, unityPrice: pl.unityPrice }, transaction: t })
      }
      newOrder = await newOrder.reload({
        include: {
          model: Product,
          as: 'products'
        },
        transaction: t
      })
      await t.commit()
      res.json(newOrder)
    } catch (err) {
      await t.rollback()
      if (err.name.includes('ValidationError')) {
        res.status(422).send(err)
      } else {
        res.status(500).send(err)
      }
    }
  }
}