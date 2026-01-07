const clickText = document.getElementById('clickText');
const envelope = document.getElementById('envelope');
const paper = document.getElementById('paper');
const typedText = document.getElementById('typed-text');
const cursor = document.getElementById('cursor');
const music = document.getElementById('bg-music');

const message = `WAKE UPPP BABYYYY! IT'S YOUR BIRTHDAY! 🎉💙

to youuu, my boo, my sunshine, my everything...

I LOVE JUST YOU!
HAPPY BIRTHDAY SAYANGGG! 🤍`;

let i = 0;
let opened = false;

clickText.addEventListener('click', () => {
    if (opened) return;
    opened = true;

    envelope.classList.add('shake');

    setTimeout(() => {
        envelope.classList.remove('shake');
        envelope.classList.add('open');

        music.volume = 0.5;
        music.play().catch(()=>{});

        setTimeout(typeChar, 1000);
    }, 400);

    clickText.style.display = 'none';
});

function typeChar() {
    if (i < message.length) {
        const span = document.createElement('span');
        span.textContent = message[i++];
        typedText.appendChild(span);

        paper.scrollTop = paper.scrollHeight;

        setTimeout(typeChar, 40);
    } else {
        cursor.style.display = 'none';
    }
}
