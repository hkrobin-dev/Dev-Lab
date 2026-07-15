import mongoose from 'mongoose';

const bikeSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  condition: { type: String, required: true },
  category: { type: String, default: 'Urban' },
  images: [{ type: String }],
  status: { type: String, enum: ['active', 'pending', 'sold'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
});

const Bike = mongoose.model('Bike', bikeSchema);
export default Bike;
