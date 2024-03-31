import Layout from '@/components/layout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <Layout>
            <h1>TheBOSS</h1>
        </Layout>
    );
}
