import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import * as THREE from 'three';
import RINGS_MODULE from 'vanta/dist/vanta.rings.min';

import Header from "../components/common/Header";
import LandingPage from "../components/LandingPage";

function Portfolio() {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaFunction = RINGS_MODULE.default ? RINGS_MODULE.default : RINGS_MODULE;

        if (!vantaEffect && vantaRef.current && typeof vantaFunction === 'function') {
            try {
                setVantaEffect(
                    vantaFunction({
                        el: vantaRef.current,
                        THREE: THREE,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        backgroundColor: 0x0,
                        color: 0xffffff
                    })
                );
            } catch (error) {
                console.error("Vanta initialization failed:", error);
            }
        }

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
                setVantaEffect(null);
            }
        };
    }, [vantaEffect]);

    return (
        <BrowserRouter>
            <div ref={vantaRef} style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
                    <Header />
                    <LandingPage />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Portfolio;