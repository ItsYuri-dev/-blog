/* =========================================
   MENU MOBILE
========================================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================================
   COPY DISCORD
========================================= */

const copyDiscord = document.getElementById("copyDiscord");
const copyMessage = document.getElementById("copyMessage");

copyDiscord.addEventListener("click", async () => {

    const username = "yurizin00096";

    try {

        await navigator.clipboard.writeText(username);

        copyMessage.style.display = "block";

        copyDiscord.innerHTML = "[✓] Copiado";

        setTimeout(() => {

            copyMessage.style.display = "none";

            copyDiscord.innerHTML = "$ copy discord";

        }, 2500);

    } catch (error) {

        copyMessage.innerText =
            "[!] Não foi possível copiar automaticamente.";

        copyMessage.style.display = "block";

    }

});


/* =========================================
   REVEAL DAS SEÇÕES
========================================= */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


reveals.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   TERMINAL TYPING
========================================= */

const typingElement =
    document.querySelector(".typing-text");

const commands = [
    "python main.py",
    "sudo ./security",
    "git status",
    "npm run dev",
    "system.online",
    "sudo nmap -Sn 191.145.0.1"
];

let commandIndex = 0;
let characterIndex = 0;
let deleting = false;


function terminalTyping() {

    const currentCommand =
        commands[commandIndex];

    if (!deleting) {

        typingElement.textContent =
            currentCommand.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentCommand.length) {

            deleting = true;

            setTimeout(
                terminalTyping,
                1400
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentCommand.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            commandIndex =
                (commandIndex + 1) %
                commands.length;

        }

    }

    setTimeout(
        terminalTyping,
        deleting ? 45 : 90
    );

}


terminalTyping();


/* =========================================
   EFEITO GLITCH NO NOME
========================================= */

const title = document.querySelector(".hero h1");

setInterval(() => {

    title.style.transform =
        "translateX(-1px)";

    setTimeout(() => {

        title.style.transform =
            "translateX(0)";

    }, 80);

}, 5000);


/* =========================================
   CONSOLE
========================================= */

console.log(
    "%c[ SYSTEM ONLINE ]",
    "color:#00ff88;font-weight:bold;font-size:18px;"
);

console.log(
    "%croot@yuri:~$ welcome",
    "color:#00ff88;font-family:monospace;"
);

console.log(
    "%cEthical Hacker & Developer",
    "color:#8a9a91;font-family:monospace;"
);
function matrixEffect(canvas) {

    const ctx = canvas.getContext("2d");

    const letters =
        "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

    const fontSize = 16;

    let columns;
    let drops = [];

    function resize() {

        canvas.width = canvas.offsetWidth;
        canvas.height = window.innerHeight;

        columns = Math.floor(canvas.width / fontSize);

        drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -50;
        }
    }

    resize();

    window.addEventListener("resize", resize);

    function draw() {

        // Rastro
        ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        ctx.font =
            fontSize + 'px "JetBrains Mono", monospace';

        for (let i = 0; i < columns; i++) {

            const letra =
                letters[
                    Math.floor(
                        Math.random() *
                        letters.length
                    )
                ];

            const x = i * fontSize;
            const y = drops[i] * fontSize;

            // Brilho
            if (Math.random() > 0.95) {

                ctx.fillStyle = "#ffffff";
                ctx.shadowColor = "#00ff88";
                ctx.shadowBlur = 15;

            } else {

                ctx.fillStyle = "#00ff88";
                ctx.shadowColor = "#00ff88";
                ctx.shadowBlur = 5;
            }

            ctx.fillText(letra, x, y);

            ctx.shadowBlur = 0;

            // Velocidade
            drops[i] += 0.8 + Math.random() * 1.5;

            // Reinicia
            if (
                y > canvas.height &&
                Math.random() > 0.97
            ) {
                drops[i] = -20;
            }
        }

        requestAnimationFrame(draw);
    }

    draw();
}


const leftMatrix =
    document.getElementById("matrixLeft");

const rightMatrix =
    document.getElementById("matrixRight");


if (leftMatrix && rightMatrix) {

    matrixEffect(leftMatrix);
    matrixEffect(rightMatrix);

}
