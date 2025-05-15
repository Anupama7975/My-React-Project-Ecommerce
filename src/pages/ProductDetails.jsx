import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";
import { useState } from "react";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [isHovering, setIsHovering] = useState(false);

    const styles = {
        container: {
            maxWidth: "800px",
            margin: "50px auto",
            padding: "30px",
            boxShadow: "0 0 25px rgba(187, 0, 255, 0.6)",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #1a1a2e, #2e004f)",
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center",
            color: "#fff",
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0 0 15px #bb00ff",
        },
        name: {
            fontSize: "2.5rem",
            marginBottom: "10px",
            color: "#e040fb",
            textShadow: "0 0 10px #bb00ff",
        },
        description: {
            fontSize: "1.2rem",
            marginBottom: "15px",
            color: "#ccc",
        },
        price: {
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: "#00ffae",
            marginBottom: "20px",
            textShadow: "0 0 8px #00ffaa",
        },
        button: {
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#8e2de2",
            backgroundImage: "linear-gradient(135deg, #8e2de2, #4a00e0)",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            boxShadow: isHovering
                ? "0 0 20px #ff00ff, 0 0 30px #00ffff"
                : "0 0 10px #bb00ff, 0 0 20px #4a00e0",
            transform: isHovering ? "scale(1.05)" : "scale(1)",
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
