import mongoose from 'mongoose'

const machineSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    type:  { type: String },
    brand: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

const Machine = mongoose.model('Machine', machineSchema)

export default Machine