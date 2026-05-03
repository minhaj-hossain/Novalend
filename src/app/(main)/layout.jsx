
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;