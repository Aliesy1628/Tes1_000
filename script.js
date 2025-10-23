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