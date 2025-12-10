import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCard from '../components/ProductCard';

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
            <section className="py-24">
                <div className="container">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-2">Detailed Selection</h2>
                            <p className="text-gray-400">Top-rated solar essentials for your home.</p>
                        </div>
                        <a href="/products" className="text-yellow-400 hover:text-yellow-300 font-medium hidden md:block">
                            View All Products &rarr;
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <a href="/products" className="btn btn-secondary">View All Products</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
