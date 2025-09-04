import { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min.js';

function App() {
    const [count, setCount] = useState(0);

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
                // baseColor: 0xfafafa

                highlightColor: 0xffc300,
                midtoneColor: 0xff1f00,
                lowlightColor: 0x2d00ff,
                baseColor: 0xffebeb,
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
            <div className="main-container__inner">
                {/*<div ref={vantaRef} className="w-full h-[400px]" />;*/}

                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </div>
    );
}

export default App;
