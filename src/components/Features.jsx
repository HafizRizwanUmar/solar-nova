import React from 'react';
import { Sun, Battery, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Sun className="w-8 h-8 text-yellow-500" />,
        title: "High Efficiency Panels",
        description: "Our panels capture up to 25% more sunlight than standard models, ensuring maximum energy production even on cloudy days."
    },
    {
        icon: <Battery className="w-8 h-8 text-blue-500" />,
        title: "Smart Storage Solutions",
        description: "Store excess energy with our advanced batteries. Power your home at night or during outages with zero interruption."
    },
    {
        icon: <Leaf className="w-8 h-8 text-green-500" />,
        title: "Sustainable & Durable",
        description: "Built to last 25+ years with eco-friendly materials. Reduce your carbon footprint while saving on electricity bills."
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-surface/30">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-green-400 font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
                    <h2 className="text-4xl font-heading font-bold text-white mt-2 mb-4">
                        Energy Solutions for <span className="text-gradient">Tomorrow</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
