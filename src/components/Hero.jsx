import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-[#0f172a] z-10" />
                {/* Placeholder for actual image/video - using CSS gradient for now */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
            </div>

            <div className="container relative z-20 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 border-yellow-500/30">
                        <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium text-yellow-100">The Future of Energy is Here</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                        Power Your World with <br />
                        <span className="text-gradient">Infinite Energy</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Premium solar solutions for modern homes and businesses.
                        Experience energy independence with SolarNova's advanced technology.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a href="/products" className="btn btn-primary flex items-center gap-2 text-lg px-8 py-4">
                            Shop Now <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="/solutions" className="btn btn-secondary text-lg px-8 py-4">
                            Explore Solutions
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />
        </section>
    );
};

export default Hero;
