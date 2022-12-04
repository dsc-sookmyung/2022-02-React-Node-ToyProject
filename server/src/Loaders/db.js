import mongoose from "mongoose";
import config from "./config/index.js";


const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURL, {useNewUrlParser: true});
        console.log('Mongoose Connected ...');
    }catch (error){
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;