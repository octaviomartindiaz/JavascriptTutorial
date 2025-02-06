const models = require('../models')
const { validationResult } = require('express-validator')
const moment = require('moment')

const Restaurant = models.Restaurant
const Order = models.order

/*
  app.route('/orders/:orderId/deliver')
    .patch(
      upload.none(),
      middlewares.isLoggedIn,
      middlewares.hasRole('owner'),
      middlewares.checkEntityExists(Order)  //new middleware
      middlewares.checkOrderOwnership,
      OrderValidation.deliver(),
      middlewares.handleValidationErrors //new middleware
      OrderController.deliver)
*/

exports.deliver = async function (req, res) {
  try {
    const order = await Order.findByPk(req.params.orderId)
    order.deliveredAt = new Date()
    const updatedOrder = await order.save()
    res.json(updatedOrder)
    updateRestaurantServiceTime(order.restaurantId)
  } catch (err) {
    res.status(500).send(err)
  }
}

async function updateRestaurantServiceTime (restaurantId) {
  const restaurant = await Restaurant.findByPk(restaurantId)
  const averageServiceTime = await restaurant.getAverageServiceTime()
  await Restaurant.update({ averageServiceMinutes: averageServiceTime }, { where: { id: restaurantId } })
}
