import { Button } from 'antd';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold mb-4">Welcome to Brandfluence</h1>
            <Link href="/dashboard">
                <Button type="primary" size="large">
                    Go to Dashboard
                </Button>
            </Link>
        </div>
    );
}
