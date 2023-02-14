import mongoose from "mongoose"

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://admin:secret@mongodb:27017/ecomm?authSource=admin");

let db = mongoose.connection;

export default db;