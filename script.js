const clickText = document.getElementById('clickText');
const envelope = document.getElementById('envelope');
const paper = document.getElementById('paper');
const typedText = document.getElementById('typed-text');
const cursor = document.getElementById('cursor');
const music = document.getElementById('bg-music');

const message = `WAKE UPPP BABYYYY! IT'S YOUR BIRTHDAY! happy birthday

to youuu, my boo, my sunshine, my everything. hari ini hari kamu, dan aku mau kamu tau seberapa besar aku sayang dan cinta sama kamu. on your special day, i love you now, and always will. in every possible way. kamu itu tenang di saat aku marah, kamu itu peluk nyaman pas aku cape, kamu itu rumah buat hatiku yang sering nyasar. you are the one i care about most, lebih dari apa pun. kamu adalah cahaya yang terangin badaiku, dan aku harap kita bisa deket terus kaya gini selamanya. i can't even find the right words to explain how much you mean to me. rasanya tu, kalau pakai kata-kata malah ga cukup. kadang cinta itu terlalu besar buat dijelasin, tapi selalu bisa dirasain dan kamu pasti bisa ngerasain itu dari aku. so on your birthday, i just want to remind you again i choose you. setiap hari. setiap waktu. in every lifetime, i'd still choose you. and i'll say it again and again, karena ulang tahun kamu bukan cuma perayaan umur, tapi juga kesempatan buat aku bilang, I LOVE JUST YOU! hari ini, nikmatin setiap momen ya. tertawa, bahagia, dikelilingi cinta dari orang-orang terdekatmu

dan jangan lupa, ada aku yang paling depan, paling kenceng

teriaknya HAPPY BIRTHDAY SAYANGGG!🤍`;

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
