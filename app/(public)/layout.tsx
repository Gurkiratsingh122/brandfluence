import React from 'react'
import { Header } from '../components/Layout/Header'
import { Footer } from '../components/Layout/Footer'

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default PublicLayout