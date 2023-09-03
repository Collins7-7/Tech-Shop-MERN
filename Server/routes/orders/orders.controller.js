const ordersDatabase = require("../../models/orders.model");

//CREATE ORDER
async function httpPostOrder(req, res) {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new ordersDatabase({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
}

// GET SINGLE ORDER

async function httpGetOrderById() {
  const order = await ordersDatabase
    .findById(req.params.id)
    .populate("user", "name", "email");

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
}

module.exports = {
  httpPostOrder,
  httpGetOrderById,
};
