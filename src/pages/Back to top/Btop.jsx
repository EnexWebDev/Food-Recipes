import React from 'react'
import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const Btop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={isVisible ? 'back-to-top-visible' : 'back-to-top-hidden'}
        >
            <FaArrowUp />
        </button>
    );
};

export default Btop