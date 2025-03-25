import React, { useState, useEffect, useContext } from "react";
import { Card, Button, Spin, Alert } from "antd";
import { CartContext } from "../Pages/CartContext";
import Filter from "./Filter";
import ColorList from "./ColorList";
import Counter from "./Counter";
import "./index.css";

function Mycard() {
    const [filters, setFilters] = useState({ name: "", color: "", minPrice: "", maxPrice: "" });
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:3001/auth/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                console.log("Fetched data:", data);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Бүтээгдэхүүн татахад алдаа гарлаа.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <Filter filters={filters} setFilters={setFilters} />
            {loading && <Spin size="large" style={{ display: "block", margin: "20px auto" }} />}
            {error && <Alert message={error} type="error" showIcon style={{ margin: "20px" }} />}
            <div className="card-container">
                {!loading &&
                    !error &&
                    products.map((product) => (
                        <Card
                            key={product.id}
                            className="card"
                            cover={<img alt={product.name} src={product.picture} />}
                        >
                            <h2>{product.name}</h2>
                            <h3>Price {product.price}$</h3>
                            <ColorList colors={product.colors} />
                            <Counter />
                            <Button onClick={() => addToCart(product)} block>
                                Add to Cart
                            </Button>
                        </Card>
                    ))}
            </div>
        </div>
    );
}

export default Mycard;
