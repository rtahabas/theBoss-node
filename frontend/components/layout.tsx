import Footer from './Footer';
import Navbar from './navbar';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24 `}
            >
                {children}
            </main>
            <Footer />
        </>
    );
}
