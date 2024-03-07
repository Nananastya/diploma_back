import express from "express";
import "dotenv/config";
import "./db.js";

const app = express();

app.listen(8080, () => {
	console.log("app listens port 8080");
});
