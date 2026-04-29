import mongoose from "mongoose";

const dbconfig = {
    url: 'mongodb://localhost:27017/solctext',
}
export async function connectDB() {
    try {
        await mongoose.connect(dbconfig.url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
export default mongoose;