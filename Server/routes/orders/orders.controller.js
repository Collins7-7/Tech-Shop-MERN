const ordersDatabase = require("../../models/orders.model");

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

module.exports = {
  httpPostOrder,
};
