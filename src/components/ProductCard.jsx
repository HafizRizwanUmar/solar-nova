
import React from 'react';
import { ShoppingCart, Zap, Shield } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-overlay" />
                <div className="product-badges">
                    <div className="badge">
                        <Zap className="badge-icon" />
                        {product.watts}W
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-header">
                    <h3 className="product-name">{product.name}</h3>
                    <span className="product-price">${product.price}</span>
                </div>

                <p className="product-description">{product.description}</p>

                <div className="product-actions">
                    <button className="btn btn-primary btn-card-primary">
                        Add to Cart
                    </button>
                    <button className="btn-card-icon">
                        <ShoppingCart size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
