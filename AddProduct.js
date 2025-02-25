 
import React, { useState } from "react";
import { addProduct } from "../services/api";

const AddProduct = () => {
    const [formData, setFormData] = useState({ name: "", category: "", price: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addProduct(formData);
            setMessage("Product added successfully!");
        } catch (error) {
            setMessage("Failed to add product. Try again.");
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
                <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
                <button type="submit">Add Product</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddProduct;
