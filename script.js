function showSection(sectionNumber) {
    document.querySelectorAll('.container').forEach(div => div.classList.add('hidden'));
    document.getElementById('section' + sectionNumber).classList.remove('hidden');
    
    if(sectionNumber === 2) {
        initGame();
    }
}

// Logika Game Memory Sederhana
const symbols = ['❤️', '⭐', '🌸', '❤️', '⭐', '🌸'];
function initGame() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    let shuffled = symbols.sort(() => 0.5 - Math.random());
    let flippedCards = [];
    let matchedCount = 0;

    shuffled.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.innerText = symbol;
        card.onclick = function() {
            if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
                this.classList.add('flipped');
                flippedCards.push(this);
                if (flippedCards.length === 2) {
                    if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
                        matchedCount += 2;
                        flippedCards = [];
                        if (matchedCount === symbols.length) {
                            document.getElementById('nextBtn').classList.remove('hidden');
                        }
                    } else {
                        setTimeout(() => {
                            flippedCards.forEach(c => c.classList.remove('flipped'));
                            flippedCards = [];
                        }, 1000);
                    }
                }
            }
        };
        board.appendChild(card);
    });
}

function revealReason(element) {
    const span = element.querySelector('span');
    span.style.display = (span.style.display === 'block') ? 'none' : 'block';
}
function showSection(sectionNumber) {
    // 1. Ambil semua elemen yang punya class 'container'
    const sections = document.querySelectorAll('.container');
    
    // 2. Sembunyikan SEMUA section terlebih dahulu
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // 3. Tampilkan hanya section yang dipilih
    const targetSection = document.getElementById('section' + sectionNumber);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // Jalankan game jika masuk ke section 2
    if(sectionNumber === 2) {
        initGame();
    }
}

// Data teks surat yang akan diketik
const message = `This isn’t a message meant to reopen old doors.

It’s simply a quiet acknowledgment of something that once mattered.

What we had was real, even if it didn’t last the way we once imagined.
And I’ve come to learn that not everything meaningful is meant to stay forever.

You were someone I cared for deeply, in a way that was honest and gentle.
And even now, I don’t look back with regret — only with respect.
Life moved us in different directions, and that’s okay.

I hope you’re becoming the person you’re meant to be.
Some people don’t remain in our lives,
but they remain a part of who we are.

You will always be one of those people to me.
I love you forever, my boy 💗`;

function showSection(sectionNumber) {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => section.classList.add('hidden'));
    
    const targetSection = document.getElementById('section' + sectionNumber);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    if(sectionNumber === 2) {
        initGame();
    }

    // Jika masuk ke bagian surat, jalankan fungsi mengetik
    if(sectionNumber === 4) {
        typeWriter('typewriter-text', message, 50); // Angka 50 adalah kecepatan (ms)
    }
}

function typeWriter(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Kosongkan dulu

    function typing() {
        if (i < text.length) {
            // Jika bertemu karakter baru (\n), ganti jadi <br> agar ganti baris
            if (text.charAt(i) === "\n") {
                element.innerHTML += "<br>";
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(typing, speed);
        } else {
            // Munculkan tombol replay setelah selesai mengetik
            document.getElementById('replayBtn').classList.remove('hidden');
        }
    }
    typing();
}


// ... masukkan fungsi initGame() dan revealReason() kamu di bawah sini ...
