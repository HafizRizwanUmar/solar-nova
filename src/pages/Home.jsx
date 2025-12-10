import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCard from '../components/ProductCard';
import './Home.css';

const mockProducts = [
    {
        id: 1,
        name: "SolarPro X1 Panel",
        price: 299,
        image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&q=80&w=800",
        description: "High-efficiency monocrystalline solar panel for residential use.",
        watts: 400,
        warranty: "25 Years"
    },
    {
        id: 2,
        name: "PowerWall Battery",
        price: 5499,
        image: "https://images.unsplash.com/photo-1563986768305-6490fa6d7904?auto=format&fit=crop&q=80&w=800", // Placeholder for battery
        description: "Compact home battery backup system with smart monitoring.",
        watts: 13500,
        warranty: "10 Years"
    },
    {
        id: 3,
        name: "Smart Inverter S5",
        price: 1250,
        image: "https://images.unsplash.com/photo-1558449031-6e3e574da470?auto=format&fit=crop&q=80&w=800", // Generic tech background
        description: "Grid-tied solar inverter with 99% efficiency and app control.",
        watts: 5000,
        warranty: "12 Years"
    }
];

const Home = () => {
    return (
        <main>
            <Hero />
            <Features />

            {/* Featured Products */}
            <section className="home-section">
                <div className="container">
                    <div className="home-section-header">
                        <div>
                            <h2 className="home-section-title">Detailed Selection</h2>
                            <p className="home-section-subtitle">Top-rated solar essentials for your home.</p>
                        </div>
                        <a href="/products" className="home-view-all-link">
                            View All Products &rarr;
                        </a>
                    </div>

                    <div className="home-products-grid">
                        {mockProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="home-mobile-action">
                        <a href="/products" className="btn btn-secondary">View All Products</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
