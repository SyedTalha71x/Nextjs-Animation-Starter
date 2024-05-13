"use client";
import React, { useEffect } from 'react';

const Page = () => {
    useEffect(() => {
        const handleMouseMove = (e: any) => {
            const cursor = document.querySelector('.cursor') as HTMLElement;
            const cursor2 = document.querySelector('.cursor2') as HTMLElement;
            if (cursor && cursor2) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
                cursor2.style.left = e.clientX + 'px';
                cursor2.style.top = e.clientY + 'px';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className='cursor'></div>
            <div className='cursor2'></div>
        </>
    );
};

export default Page;
