import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected with mongo db ");
    } catch (err) {
        console.log("error in connecting db "+ err);
    }
}
export default connectDB;