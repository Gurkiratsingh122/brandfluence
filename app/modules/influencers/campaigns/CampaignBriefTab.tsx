'use client';

import { Download } from 'lucide-react';

export default function CampaignBriefTab() {
    return (
        <div>
            <div className="bg-white rounded-2xl border border-[#d9e2eb] p-6 space-y-6">
                {/* Product Info */}
                <div>
                    <h3 className="text-[18px] font-bold text-black mb-4">Product Info</h3>
                    <div className="flex gap-4">
                        <div className="w-25 h-25 rounded-lg overflow-hidden shrink-0">
                            <img src="/landscape_brand.jpg" alt="Product" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-[16px] font-semibold text-black mb-2">
                                Recycled Canvas Weekender Bag
                            </h4>
                            <p className="text-[14px] text-[#666] mb-2">
                                The new sneaker is made from 100% recycled materials and features a durable sole.
                            </p>
                            <a href="#" className="text-[14px] text-[#6c78ff] hover:underline">
                                View Product
                            </a>
                        </div>
                        <div className="flex flex-col items-end gap-2 text-[13px]">
                            <button className="flex items-center gap-2 text-[#6c78ff] hover:underline">
                                <span>Brand Logo (PDF)</span>
                                <Download className="w-4 h-4" />
                            </button>
                            <button className="flex items-center gap-2 text-[#6c78ff] hover:underline">
                                <span>Product Images (ZIP)</span>
                                <Download className="w-4 h-4" />
                            </button>
                            <button className="flex items-center gap-2 text-[#6c78ff] hover:underline">
                                <span>Campaign Guidelines (PDF)</span>
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pay Per 1,000 Views */}
                <div>
                    <h3 className="text-[16px] font-bold text-black mb-2">Pay Per 1,000 Views:</h3>
                    <p className="text-[16px] text-black">$120</p>
                </div>

                {/* Key Selling Points */}
                <div>
                    <h3 className="text-[16px] font-bold text-black mb-3">Key Selling Points:</h3>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#04b700] mt-2 shrink-0" />
                            <span className="text-[15px] text-black">Eco-friendly materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#04b700] mt-2 shrink-0" />
                            <span className="text-[15px] text-black">Water-resistant</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#04b700] mt-2 shrink-0" />
                            <span className="text-[15px] text-black">Durable and stylish</span>
                        </li>
                    </ul>
                </div>

                {/* Brand Guidelines */}
                <div>
                    <h3 className="text-[16px] font-bold text-black mb-3">Brand Guidelines:</h3>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6c78ff] mt-2 shrink-0" />
                            <span className="text-[15px] text-black">Tone of Voice: Minimalist, cool, honest</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6c78ff] mt-2 shrink-0" />
                            <span className="text-[15px] text-black">Required Hashtags: #EcoStyle #CanvasCarry</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6c78ff] mt-2 shrink-0" />
                            <span className="text-[15px] text-black">
                                Usage Restrictions: No profanity, nudity, or alcohol references
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6c78ff] mt-2 shrink-0" />
                            <span className="text-[15px] text-black">Call to Action: "Link in bio" or "Use code: SUMMER20"</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}