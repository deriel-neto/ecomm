import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/ecomm");

let db = mongoose.connection;

export default db;