'use client';

export default function TermsRightsTab() {
    const terms = [
        {
            title: '1. Usage Rights',
            content:
                'The brand has the right to use your submitted content across paid media channels (such as social media ads, websites, and promotional emails) for 6 months from the date of approval. After that, these rights expire unless renewed.',
        },
        {
            title: '2. Exclusivity Clause',
            content:
                'You agree not to participate in or promote campaigns involving competing brands in the same product category (e.g., handbags) until July 1, 2025. This applies to sponsored posts and paid collaborations.',
        },
        {
            title: '3. Content Ownership',
            content:
                'You retain ownership of the content you create. However, by participating, you grant the brand a limited license to use your content as outlined above. You may still share this content on your personal channels unless otherwise specified.',
        },
    ];

    return (
        <div>
            <div className="bg-white rounded-2xl border border-[#d9e2eb] p-8 space-y-6">
                {terms.map((term, idx) => (
                    <div key={idx}>
                        <h3 className="text-[16px] font-bold text-black mb-2">{term.title}</h3>
                        <p className="text-[15px] text-[#494b51] leading-relaxed">{term.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
