import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            background: "linear-gradient(135deg, #1a1a2e, #8e2de2)",
            color: "#fff",
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif"
        },
        title: {
            fontSize: "3rem",
            color: "#e040fb",
            marginBottom: "20px",
            textShadow: "0 0 10px #bb00ff, 0 0 20px #e040fb",
        },
        message: {
            fontSize: "1.3rem",
            color: "#ccc",
            marginBottom: "30px",
            textShadow: "0 0 5px #bb00ff, 0 0 10px #00e0ff",
        },
        button: {
            padding: "12px 25px",
            fontSize: "1.1rem",
            backgroundColor: "#8e2de2",
            backgroundImage: "linear-gradient(135deg, #8e2de2, #4a00e0)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.2s ease",
            boxShadow: "0 0 10px #bb00ff, 0 0 20px #4a00e0",
            textDecoration: "none",
        },
        buttonHover: {
            transform: "scale(1.05)",
            boxShadow: "0 0 20px #ff00ff, 0 0 25px #00ffff",
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us. Your order is on its way!</p>
            <a
                href="/"
                style={styles.button}
                onMouseOver={(e) => {
                    Object.assign(e.target.style, styles.buttonHover);
                }}
                onMouseOut={(e) => {
                    Object.assign(e.target.style, styles.button);
                }}
            >
                Go to Home
            </a>
        </div>
    );
}
