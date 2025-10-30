(function() {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('toggle');
    const STORAGE_KEY = 'theme-preference';

    const getStored = () => localStorage.getItem(STORAGE_KEY);
    const setStored = (value) => localStorage.setItem(STORAGE_KEY, value);

    // Terapkan tema awal
    const saved = getStored() || 'light';
    root.setAttribute('data-theme', saved);

    toggleBtn.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        setStored(next);
        });
})();

const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2)
    const y = pointerY.toFixed(2)
    const xp = (pointerX / window.innerWidth).toFixed(2)
    const yp = (pointerY / window.innerHeight).toFixed(2)
    document.documentElement.style.setProperty('--x', x)
    document.documentElement.style.setProperty('--xp', xp)
    document.documentElement.style.setProperty('--y', y)
    document.documentElement.style.setProperty('--yp', yp)
}
document.body.addEventListener('pointermove', syncPointer)