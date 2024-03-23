import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hellosss FWorld!");
});

app.listen(3001, () => console.log("🚀 Server ready at: http://localhost:3001"));
