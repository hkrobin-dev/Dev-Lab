import express from 'express';
import Order from '../models/Order.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  try {
    const orders = await Order.find({ buyerId: req.user.id }).populate('bikeId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch orders.', error: error.message });
  }
});

router.get('/seller', authenticate, async (req, res) => {
  try {
    const orders = await Order.find({}).populate('bikeId');
    res.json(orders.filter((order) => order.bikeId.sellerId.toString() === req.user.id));
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch seller orders.', error: error.message });
  }
});

export default router;
