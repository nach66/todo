import mongoose from 'mongoose'

const itemSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    }
  }
)

const Item = mongoose.model('Item', itemSchema)

export default Item