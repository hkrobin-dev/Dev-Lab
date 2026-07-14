import { useMemo, useState } from 'react'
import { useAuth } from '../context/AuthContext'

const initialForm = {
  trackingNumber: '',
  senderName: '',
  senderPhone: '',
  receiverName: '',
  receiverPhone: '',
  pickupAddress: '',
  destinationAddress: '',
  weight: '',
  price: '',
  description: '',
}

function Parcels() {
  const { user } = useAuth()
  const [form, setForm] = useState(initialForm)
  const [parcels, setParcels] = useState([])
  const [message, setMessage] = useState('')

  const totalValue = useMemo(() => {
    return parcels.reduce((sum, parcel) => sum + Number(parcel.price || 0), 0)
  }, [parcels])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!user) {
      setMessage('Please log in to create a parcel.')
      return
    }

    const newParcel = {
      ...form,
      id: Date.now(),
      createdBy: user?.name || 'Customer',
      weight: `${form.weight} kg`,
      price: `${form.price} USD`,
    }

    setParcels([newParcel, ...parcels])
    setForm(initialForm)
    setMessage('Parcel created successfully.')
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Parcel Management</p>
          <h1 className="text-3xl font-semibold">Create a parcel request</h1>
          <p className="mt-2 text-base-content/70">
            Capture sender, receiver, delivery address, package weight, and pricing details in one place.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="input input-bordered w-full" placeholder="Tracking number" value={form.trackingNumber} onChange={(event) => setForm({ ...form, trackingNumber: event.target.value })} required />
            <input className="input input-bordered w-full" placeholder="Sender name" value={form.senderName} onChange={(event) => setForm({ ...form, senderName: event.target.value })} required />
            <input className="input input-bordered w-full" placeholder="Sender phone" value={form.senderPhone} onChange={(event) => setForm({ ...form, senderPhone: event.target.value })} required />
            <input className="input input-bordered w-full" placeholder="Receiver name" value={form.receiverName} onChange={(event) => setForm({ ...form, receiverName: event.target.value })} required />
            <input className="input input-bordered w-full" placeholder="Receiver phone" value={form.receiverPhone} onChange={(event) => setForm({ ...form, receiverPhone: event.target.value })} required />
            <input className="input input-bordered w-full" placeholder="Pickup address" value={form.pickupAddress} onChange={(event) => setForm({ ...form, pickupAddress: event.target.value })} required />
            <input className="input input-bordered w-full" placeholder="Destination address" value={form.destinationAddress} onChange={(event) => setForm({ ...form, destinationAddress: event.target.value })} required />
            <input className="input input-bordered w-full" placeholder="Weight (kg)" type="number" value={form.weight} onChange={(event) => setForm({ ...form, weight: event.target.value })} required />
            <input className="input input-bordered w-full" placeholder="Price (USD)" type="number" value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} required />
            <textarea className="textarea textarea-bordered md:col-span-2" placeholder="Parcel description" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} required />

            <button type="submit" className="btn btn-primary md:col-span-2">Create Parcel</button>
          </form>

          {message ? <p className="mt-4 text-sm text-success">{message}</p> : null}
        </div>
      </div>

      <div className="space-y-6">
        <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl">
          <div className="card-body">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Overview</p>
            <h2 className="text-2xl font-semibold">Parcel summary</h2>
            <div className="mt-4 rounded-2xl bg-base-100 p-4">
              <p className="text-sm text-base-content/70">Total parcel value</p>
              <p className="text-3xl font-bold text-primary">${totalValue}</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Recent parcels</p>
            {parcels.length === 0 ? (
              <p className="mt-4 text-sm text-base-content/70">No parcels created yet.</p>
            ) : (
              <div className="mt-4 space-y-3">
                {parcels.map((parcel) => (
                  <div key={parcel.id} className="rounded-2xl border border-base-300 bg-base-200/70 p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{parcel.trackingNumber}</p>
                      <span className="badge badge-primary">{parcel.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-base-content/70">{parcel.senderName} → {parcel.receiverName}</p>
                    <p className="text-sm text-base-content/70">Weight: {parcel.weight}</p>
                    <p className="text-sm text-base-content/70">Created by: {parcel.createdBy}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parcels
