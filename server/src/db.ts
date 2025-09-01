 import mongoose from 'mongoose';


    const connectDB = async () => {
        try {
            const mongoURI: string = 'mongodb://localhost:27017/projectA';  
            mongoose.connect(mongoURI);
            console.log('Connected');
        } catch (error) {
            console.error('error:', error);
            process.exit(1);
        }
    };

    export default connectDB;