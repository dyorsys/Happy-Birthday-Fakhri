const clickText = document.getElementById('clickText');
const envelope = document.getElementById('envelope');
const typedText = document.getElementById('typed-text');
const cursor = document.getElementById('cursor');
const music = document.getElementById('bg-music');

const message = `WAKE UPPP BABYYYY! IT'S YOUR BIRTHDAY! 🎉💙

Semoga semua mimpi kamu tercapai.
Sehat selalu dan bahagia terus 🤍`;

let i = 0;
let opened = false;

clickText.addEventListener('click', () => {
    if (opened) return;
    opened = true;

    envelope.classList.add('open');
    clickText.style.display = 'none';

    music.volume = 0.5;
    music.play().catch(()=>{});

    setTimeout(typeChar, 900);
});

function typeChar() {
    if (i < message.length) {
        const span = document.createElement('span');
        span.textContent = message[i++];
        typedText.appendChild(span);
        setTimeout(typeChar, 40);
    } else {
        cursor.style.display = 'none';
    }
}
