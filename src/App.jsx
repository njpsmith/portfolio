import { useEffect, useRef } from 'react';
import './tailwind.css';
import Layout from './Layout';
import KonamiCode from './components/easter-eggs/KonamiCode';

function App() {
    useEffect(() => {
        const systemPrefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)',
        ).matches;

        const stored = localStorage.getItem('darkMode');
        const isDark = stored === 'true';

        if (systemPrefersDark || isDark) {
            document.body.classList.add('night');
        }

        const checkbox = document.getElementById('switch'); // Dark mode toggle checkbox
        checkbox.checked = isDark;
    }, []);

    return (
        <>
            <div className="main-container">
                <Layout />
            </div>
            <KonamiCode />
        </>
    );
}

export default App;
