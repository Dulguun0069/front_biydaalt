const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

const products = [];

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.post("/auth/products", (req, res) => {
    console.log("Received data:", req.body);
    const { id, name, price, colors, picture } = req.body;

    if (!id || !name || !price || !colors || !picture) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    products.push({ id, name, price, colors, picture });
    res.status(201).json({ message: "Product added successfully!" });
});

app.get("/auth/products", (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Backend server is running at: http://localhost:${PORT}`);
});