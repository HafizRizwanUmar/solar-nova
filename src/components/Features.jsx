
import React from 'react';
import { DollarSign, ShieldCheck, Battery, Leaf } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: DollarSign,
        title: "Maximized Savings",
        description: "Slash your electricity bills by up to 90% with our high-efficiency systems tailored to your usage."
    },
    {
        icon: ShieldCheck,
        title: "25-Year Protection",
        description: "Rest easy with our industry-leading full system warranty covering panels, inverters, and labor."
    },
    {
        icon: Battery,
        title: "Energy Independence",
        description: "Protect your home from outages and rising rates with integrated battery backup solutions."
    },
    {
        icon: Leaf,
        title: "Eco-Friendly Impact",
        description: "Reduce your carbon footprint significantly and contribute to a cleaner, greener planet."
    }
];

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="features-header">
                    <h2 className="features-title">Why Choose SolarNova?</h2>
                    <p className="features-subtitle">We deliver premium technology combined with expert installation.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrapper">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="feature-card-title">{feature.title}</h3>
                            <p className="feature-card-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
