import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';

const Add = () => {
    const { addProduct } = useContext(ShopContext);

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        price: '',
        image: null,
    });

    const [localProducts, setLocalProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setLocalProducts(storedProducts);
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFormData((prevData) => ({
                    ...prevData,
                    image: e.target.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.id || !formData.title || !formData.price || !formData.image) {
            alert('Please fill in all fields.');
            return;
        }

        const newProduct = {
            id: formData.id,
            name: formData.title,
            price: parseFloat(formData.price),
            image: [formData.image],
            category: 'Uncategorized',
            subCategory: 'Uncategorized',
        };

        addProduct(newProduct);

        const updatedProducts = [...localProducts, newProduct];
        setLocalProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        setFormData({
            id: '',
            title: '',
            price: '',
            image: null,
        });
        alert('Product added successfully!');
    };

    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', textAlign: 'center' }}>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input
                    type="text"
                    name="id"
                    placeholder="Enter product ID"
                    value={formData.id}
                    onChange={handleInputChange}
                    required
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    required
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>

            {formData.image && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Preview:</h2>
                    <img
                        src={formData.image}
                        alt="Uploaded Preview"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '400px',
                            border: '1px solid #ccc',
                            padding: '10px',
                        }}
                    />
                </div>
            )}

            {localProducts.length > 0 && (
                <div style={{ marginTop: '30px' }}>
                    <h2>Saved Products:</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {localProducts.map((product, index) => (
                            <li
                                key={index}
                                style={{
                                    border: '1px solid #ccc',
                                    marginBottom: '10px',
                                    padding: '10px',
                                    textAlign: 'left',
                                }}
                            >
                                <strong>ID:</strong> {product.id} <br />
                                <strong>Title:</strong> {product.name} <br />
                                <strong>Price:</strong> ${product.price.toFixed(2)} <br />
                                {product.image && (
                                    <img
                                        src={product.image[0]}
                                        alt="Product"
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '200px',
                                            marginTop: '10px',
                                        }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Add;

