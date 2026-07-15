import express from 'express';
import Stripe from 'stripe';
import Order from '../models/Order.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-08-15' });

router.post('/create-session', authenticate, async (req, res) => {
  try {
    const { bikeId, amount } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Bike purchase',
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout?success=true`,
      cancel_url: `${process.env.CLIENT_URL}/checkout?canceled=true`,
      metadata: { bikeId, buyerId: req.user.id },
    });

    await Order.create({ buyerId: req.user.id, bikeId, amount, paymentIntentId: session.payment_intent || '', status: 'pending' });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ message: 'Unable to create checkout session.', error: error.message });
  }
});

export default router;
