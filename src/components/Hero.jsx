import React from 'react';
import { ArrowRight, Sun, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* Background */}
            <div className="hero-bg">
                <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000"
                    alt="Solar Panels"
                    className="hero-bg-img"
                />
            </div>
            <div className="hero-overlay" />

            <div className="container">
                <div className="hero-content">
                    {/* Badge */}
                    <div className="hero-badge">
                        <Sun size={16} className="text-yellow-400" />
                        <span>#1 Rated Solar Provider</span>
                    </div>

                    {/* Heading */}
                    <h1 className="hero-title">
                        Power Your Future with <span className="text-gradient">Clean Energy</span>
                    </h1>

                    <p className="hero-description">
                        Transform your home into an energy-independent powerhouse.
                        Reduce bills, save the planet, and take control of your power.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-actions">
                        <Link to="/products" className="btn btn-primary">
                            Explore Products <ArrowRight size={20} className="ml-2" />
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Get a Free Quote
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-value">50k+</span>
                            <span className="stat-label">Installations</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">25y</span>
                            <span className="stat-label">Warranty</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">4.9/5</span>
                            <span className="stat-label">Customer Rating</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
