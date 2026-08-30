// Переключение темы
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// Живые часы в подвале
function updateClock() {
    const now = new Date();
    document.getElementById('live-time').textContent = now.toLocaleTimeString('en-US', { hour12: false });
}
updateClock();
setInterval(updateClock, 1000);

// Имитация обновления статистики (с анимацией чисел)
function randomFloat(min, max) { return (Math.random() * (max - min) + min).toFixed(1); }

function updateStats() {
    document.getElementById('nodes').textContent = Math.floor(45 + Math.random() * 6);
    document.getElementById('latency').textContent = randomFloat(10, 20) + ' ms';
    document.getElementById('cache').textContent = randomFloat(92, 98) + '%';
    document.getElementById('bandwidth').textContent = randomFloat(1.1, 1.5) + ' Tbps';
}
setInterval(updateStats, 4000);

// Небольшой эффект появления карточек при загрузке (анимация)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.stat-card, .feature').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * i);
    });
});