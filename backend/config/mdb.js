import mongoose from 'mongoose'
//connect to mongodb

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || process.env.MONGOLAB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
