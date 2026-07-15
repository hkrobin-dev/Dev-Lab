import express from 'express';
import Bike from '../models/Bike.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const bikes = await Bike.find({ status: 'active' }).sort({ createdAt: -1 });
    res.json(bikes);
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch bikes.', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) return res.status(404).json({ message: 'Bike not found.' });
    res.json(bike);
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch bike.', error: error.message });
  }
});

router.post('/', authenticate, async (req, res) => {
  try {
    const bike = await Bike.create({ ...req.body, sellerId: req.user.id });
    res.status(201).json(bike);
  } catch (error) {
    res.status(500).json({ message: 'Unable to create bike.', error: error.message });
  }
});

router.put('/:id', authenticate, async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) return res.status(404).json({ message: 'Bike not found.' });
    if (bike.sellerId.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized.' });

    Object.assign(bike, req.body);
    await bike.save();
    res.json(bike);
  } catch (error) {
    res.status(500).json({ message: 'Unable to update bike.', error: error.message });
  }
});

router.delete('/:id', authenticate, async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) return res.status(404).json({ message: 'Bike not found.' });
    if (bike.sellerId.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized.' });

    await bike.remove();
    res.json({ message: 'Bike removed.' });
  } catch (error) {
    res.status(500).json({ message: 'Unable to delete bike.', error: error.message });
  }
});

export default router;
