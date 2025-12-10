import React from 'react';
import { ShoppingBag, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-panel p-4 rounded-2xl relative group overflow-hidden"
        >
            {/* Image Container */}
            <div className="h-64 rounded-xl overflow-hidden mb-4 relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="btn btn-primary flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <span className="text-yellow-400 font-bold text-lg">${product.price}</span>
                </div>

                <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>

                {/* Specs */}
                <div className="flex gap-4 pt-4 border-t border-gray-700/50 mt-4">
                    <div className="flex items-center gap-1 text-xs text-gray-300">
                        <Zap className="w-3 h-3 text-yellow-400" />
                        {product.watts}W Output
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-300">
                        <Award className="w-3 h-3 text-green-400" />
                        {product.warranty} Warranty
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
