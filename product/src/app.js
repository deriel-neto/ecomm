import express from "express";
import db from "./config/dbconnect.js";
import categories from "./models/Category.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log("conexão feita com sucesso")
})

const app = express();
app.use(express.json())

export default app;
