import React from 'react';
import ProductCard from '../components/ProductCard';

// Extended mock data for the full products page
const products = [
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
        image: "https://images.unsplash.com/photo-1563986768305-6490fa6d7904?auto=format&fit=crop&q=80&w=800",
        description: "Compact home battery backup system with smart monitoring.",
        watts: 13500,
        warranty: "10 Years"
    },
    {
        id: 3,
        name: "Smart Inverter S5",
        price: 1250,
        image: "https://images.unsplash.com/photo-1558449031-6e3e574da470?auto=format&fit=crop&q=80&w=800",
        description: "Grid-tied solar inverter with 99% efficiency and app control.",
        watts: 5000,
        warranty: "12 Years"
    },
    {
        id: 4,
        name: "Solar Roof Tiles",
        price: 85,
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
        description: "Seamlessly integrated solar tiles that look just like normal roofing.",
        watts: 75,
        warranty: "30 Years"
    },
    {
        id: 5,
        name: "Portable Solar Kit",
        price: 499,
        image: "https://images.unsplash.com/photo-1548613053-220e36509930?auto=format&fit=crop&q=80&w=800",
        description: "Foldable 200W panel with power station for camping and travel.",
        watts: 200,
        warranty: "5 Years"
    },
    {
        id: 6,
        name: "EV Charger Pro",
        price: 699,
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
        description: "Fast level 2 charger optimized for solar energy surplus charging.",
        watts: 7000,
        warranty: "3 Years"
    }
];

const Products = () => {
    return (
        <div className="pt-24 pb-24">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Products</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Everything you need to power your independence.
                        From panels to batteries, we have the best solar tech.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
