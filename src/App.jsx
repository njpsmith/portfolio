import { useEffect, useRef } from 'react';
import './tailwind.css';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min.js';
import Layout from './Layout';

function App() {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        if (!vantaEffect.current && vantaRef.current) {
            vantaEffect.current = FOG({
                el: vantaRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                minHeight: 200.0,
                minWidth: 200.0,

                // highlightColor: 0xffffff,
                // midtoneColor: 0xaaaaaa,
                // lowlightColor: 0x222222,
                // baseColor: 0x000000,

                // highlightColor: 0xf5f5f5,
                // midtoneColor: 0x898989,
                // lowlightColor: 0x414141,
                // baseColor: 0xfafafa,

                // highlightColor: 0xffc300,
                // midtoneColor: 0xff1f00,
                // lowlightColor: 0x2d00ff,
                // baseColor: 0xffebeb,

                highlightColor: 0x73bb2c,
                midtoneColor: 0x2a894f,
                lowlightColor: 0x42793,
                baseColor: 0xc9ebdc,

                blurFactor: 0.23,
            });
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <div className="main-container">
            <div className="background-visual" ref={vantaRef}></div>
            <Layout />
        </div>
    );
}

export default App;
