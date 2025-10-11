import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import openconnect from './tonmanager';
import confetti from 'canvas-confetti';


// openconnect();
// function connectUI() {
    
//     let dtts = document.querySelector('[data-tc-connect-button="true"]');
//     const svg = dtts.querySelector('svg');
//         if (svg) {
//             svg.style.display = 'none'; 
//         }
//     dtts.style.borderRadius = "31px";
//     dtts.style.width = "222px";
//     dtts.style.height = "33px";
//     const divd = dtts.querySelector('div');
//         if (divd) {
//             divd.innerText = 'Привязать кошелёк'; 
//             divd.style.textAlign = 'center';
//         }
//     // dtts.style.display = 'none';
// };

// window.setTimeout(connectUI, 3000);
let winner = 0;

let index_icons = 1;

let roullete_id = 1;


let bttn1 = document.getElementById("game1");
bttn1.addEventListener("click", (e) => {
    index_icons = 1;
    roullete_id = 1;
    setInitialItems();
});

let bttn2 = document.getElementById("game2");
bttn2.addEventListener("click", (e) => {
    index_icons = 2;
    roullete_id = 2;
    setInitialItems();
});
let bttn3 = document.getElementById("game3");
bttn3.addEventListener("click", (e) => {
    index_icons = 3;
    roullete_id = 3;
    setInitialItems();
});
let bttn4 = document.getElementById("game4");
bttn4.addEventListener("click", (e) => {
    index_icons = 4;
    roullete_id = 4;
    setInitialItems();
});

let bttn5 = document.getElementById("game5");
bttn5.addEventListener("click", (e) => {
    index_icons = 5;
    roullete_id = 5;
    setInitialItems();
});
let bttn6 = document.getElementById("game6");
bttn6.addEventListener("click", (e) => {
    index_icons = 6;
    roullete_id = 6;
    setInitialItems();
});




async function authe() {
const response = await fetch('http://localhost:8000/auth', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'X-Telegram-Init-Data': "query_id=AAGWAkobAAAAAJYCShvMPzxn&user=%7B%22id%22%3A457835158%2C%22first_name%22%3A%22.%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22fffZzzzap%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FzRrTopbSw7La8Fey17kZI8buAcHEkgBh6Zl4zu5DHRQ.svg%22%7D&auth_date=1757951606&signature=3VVvehY68hHi9Rs2SkKji_OwN1UNjor-qcpZFKJN-9_lyckpkoGUlBHSm2QhydNjDcIShGAZWudn3QtVKDHSBQ&hash=901c6d6d341b37037ffda335c6f4a7e5f95e1f87477409da98428d778aafcee2"

},
});

if (!response.ok) {
throw new Error('Server error');
}

const msg = await response.json();
}
//referal();
//authe();
const ICONS = {
    1:["https://fragment.com/file/gifts/plushpepe/thumb.webp",
       "https://fragment.com/file/gifts/durovscap/thumb.webp",
       "https://fragment.com/file/gifts/minioscar/thumb.webp",
       "1708965807_celes-club-p-znachok-perecherknutii-krug-vkontakte-15.webp",
        "1708965807_celes-club-p-znachok-perecherknutii-krug-vkontakte-15.webp",
        "1708965807_celes-club-p-znachok-perecherknutii-krug-vkontakte-15.webp"

    ],
    2: [
        "https://fragment.com/file/gifts/deskcalendar/thumb.webp",
        "https://fragment.com/file/gifts/candycane/thumb.webp",
        "https://fragment.com/file/gifts/swagbag/thumb.webp",
        "https://fragment.com/file/gifts/jollychimp/thumb.webp",
        "https://fragment.com/file/gifts/ionicdryer/thumb.webp",
        "https://fragment.com/file/gifts/genielamp/thumb.webp",
    ],
    9: ["https://fragment.com/file/gifts/deskcalendar/thumb.webp",
        "https://fragment.com/file/gifts/deskcalendar/thumb.webp",
        "https://fragment.com/file/gifts/candycane/thumb.webp",
        "https://fragment.com/file/gifts/swagbag/thumb.webp",
        "https://fragment.com/file/gifts/snoopdogg/thumb.webp",
        "https://fragment.com/file/gifts/jollychimp/thumb.webp"],
    3 : ["https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_112.webp",
         "https://fragment.com/file/gifts/gingercookie/thumb.webp",
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_034.webp", 
         "https://fragment.com/file/gifts/jollychimp/thumb.webp", 
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_044.webp", 
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_069.webp"],
    4 : ["https://fragment.com/file/gifts/deskcalendar/thumb.webp", 
        "https://fragment.com/file/gifts/lolpop/thumb.webp", 
        "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_037.webp", 
        "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_044.webp", 
        "https://fragment.com/file/gifts/signetring/thumb.webp", 
        "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_107.webp"],
    5 : ["https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_112.webp",
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_037.webp",
          "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_032.webp", 
          "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_069.webp", 
          "https://fragment.com/file/gifts/genielamp/thumb.webp", 
          "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_006.webp"],
    6 : ["https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_037.webp",
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_032.webp",
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_044.webp", 
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_086.webp", 
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_072.webp", 
         "https://fragment.com/file/gifts/durovscap/thumb.webp"],


};

const SYMBOL_MAP = {
    1: {
        1:"https://fragment.com/file/gifts/plushpepe/thumb.webp",
        2:"https://fragment.com/file/gifts/durovscap/thumb.webp",
        3:"https://fragment.com/file/gifts/minioscar/thumb.webp",
        4: "1708965807_celes-club-p-znachok-perecherknutii-krug-vkontakte-15.webp",
        5:"1708965807_celes-club-p-znachok-perecherknutii-krug-vkontakte-15.webp",
        6:"1708965807_celes-club-p-znachok-perecherknutii-krug-vkontakte-15.webp"
    },
    2: {
        1:"https://fragment.com/file/gifts/deskcalendar/thumb.webp",
        2:"https://fragment.com/file/gifts/candycane/thumb.webp",
        3:"https://fragment.com/file/gifts/swagbag/thumb.webp",
        4:"https://fragment.com/file/gifts/jollychimp/thumb.webp",
        5:"https://fragment.com/file/gifts/ionicdryer/thumb.webp",
        6:"https://fragment.com/file/gifts/genielamp/thumb.webp",
    },
    9: {1:"https://fragment.com/file/gifts/deskcalendar/thumb.webp",
        2:"https://fragment.com/file/gifts/deskcalendar/thumb.webp",
        3:"https://fragment.com/file/gifts/candycane/thumb.webp",
        4:"https://fragment.com/file/gifts/swagbag/thumb.webp",
        5:"https://fragment.com/file/gifts/snoopdogg/thumb.webp",
        6:"https://fragment.com/file/gifts/jollychimp/thumb.webp"},
    3 : {1:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_112.webp",
         2:"https://fragment.com/file/gifts/gingercookie/thumb.webp",
         3:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_034.webp", 
         4:"https://fragment.com/file/gifts/jollychimp/thumb.webp", 
         5:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_044.webp", 
         6:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_069.webp"},
    4 : {1:"https://fragment.com/file/gifts/deskcalendar/thumb.webp", 
        2:"https://fragment.com/file/gifts/lolpop/thumb.webp", 
        3:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_037.webp", 
        4:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_044.webp", 
        5:"https://fragment.com/file/gifts/signetring/thumb.webp", 
        6:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_107.webp"},
    5 : {1:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_112.webp",
         2:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_037.webp",
          3:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_032.webp", 
          4:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_069.webp", 
          5:"https://fragment.com/file/gifts/genielamp/thumb.webp", 
          6:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_006.webp"},
    6 : {1:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_037.webp",
         2:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_032.webp",
         3:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_044.webp", 
         4:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_086.webp", 
         5:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_072.webp", 
         6:"https://fragment.com/file/gifts/durovscap/thumb.webp"},
};


/**
 * @type {number} The minimum spin time in seconds
 */
const BASE_SPINNING_DURATION = 2.7;

/**
 * @type {number} The additional duration to the base duration for each row (in seconds).
 * It makes the typical effect that the first reel ends, then the second, and so on...
 */
const COLUMN_SPINNING_DURATION = 0.3;


var cols;


window.addEventListener('DOMContentLoaded', function(event) {
    cols = document.querySelectorAll('.col');
    
    setInitialItems();
});

function setInitialItems() {
    let baseItemAmount = 40;

    for (let i = 0; i < cols.length; ++i) {
        let col = cols[i];
        let amountOfItems = baseItemAmount + (i * 3); // Increment the amount for each column
        let elms = '';
        let firstThreeElms = '';

        for (let x = 0; x < amountOfItems; x++) {
            let icon = getRandomIcon();
            let item = '<div class="icon" data-item="' + icon + '"><img src="' + icon + '"></div>';
            elms += item;

            if (x < 3) firstThreeElms += item; // Backup the first three items because the last three must be the same
        }
        col.innerHTML = elms + firstThreeElms;
    }
}

/**
 * Called when the start-button is pressed.
 *
 * @param elem The button itself
 */
async function spin(elem) {
    winner = 0;
    elem.setAttribute('disabled', true);

   const response = await fetch('http://localhost:8000/spin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Telegram-Init-Data': "query_id=AAGWAkobAAAAAJYCShvMPzxn&user=%7B%22id%22%3A457835158%2C%22first_name%22%3A%22.%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22fffZzzzap%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FzRrTopbSw7La8Fey17kZI8buAcHEkgBh6Zl4zu5DHRQ.svg%22%7D&auth_date=1757951606&signature=3VVvehY68hHi9Rs2SkKji_OwN1UNjor-qcpZFKJN-9_lyckpkoGUlBHSm2QhydNjDcIShGAZWudn3QtVKDHSBQ&hash=901c6d6d341b37037ffda335c6f4a7e5f95e1f87477409da98428d778aafcee2"
            },
            body: JSON.stringify({ roullete_id: roullete_id })
        });

        if (!response.ok) {
            throw new Error('Server error');
        }

      const data = await response.json();
    index_icons = data[1];

  let wh_col = 1;  
  let duration = BASE_SPINNING_DURATION + randomDuration(wh_col);
    
    for (let col of cols) {
        duration += COLUMN_SPINNING_DURATION + randomDuration(wh_col);
        col.style.animationDuration = duration + "s";
        wh_col+=1
    }


    document.getElementById('container').classList.add('spinning');

    window.setTimeout(await setResult(data[0], data[1]), BASE_SPINNING_DURATION * 1000 / 2);

    window.setTimeout(async function () {
        document.getElementById('container').classList.remove('spinning');
        elem.removeAttribute('disabled');
    
        if (data[0][1][0] == data[0][1][1] & data[0][1][1] == data[0][1][2]) {
                const audio = new Audio('b52403d4e50e503.mp3');
                audio.play();
                for (let i = 0; i < 10; i++) 
                    {confetti({
                particleCount: 100,
                spread: 100+(i*20),
                origin: {
                    y: 0.5,
                    x: 0.45
                }
                });
                await new Promise(resolve => setTimeout(resolve, 50));

            }
        }

    

    }.bind(elem), duration * 1000);
}

async function setResult(dtt, iindex) {
  let ccs = 0;
    for (let col of cols) {
        
        let results = [
            SYMBOL_MAP[iindex][dtt[0][ccs]],
            
            SYMBOL_MAP[iindex][dtt[1][ccs]],
            
            SYMBOL_MAP[iindex][dtt[2][ccs]]
        ];
        ccs+=1
        let icons = col.querySelectorAll('.icon img');
        // replace the first and last three items of each column with the generated items
        for (let x = 0; x < 3; x++) {
            icons[x].setAttribute('src',  results[x]);
            icons[(icons.length - 3) + x].setAttribute('src',  results[x]);
        }
    }
}
const btt = document.getElementById("asda");
btt.addEventListener("click", (e) => {
  spin(btt);
})
function getRandomIcon() {
    return ICONS[index_icons][Math.floor(Math.random() * ICONS[1].length)];
}

/**
 * @returns {number} 0.00 to 0.09 inclusive
 */
function randomDuration(wh_coll) {
    return (wh_coll-1) * 0.9
}

async function upgradeGift() 
    

  {const response = await fetch('http://localhost:8000/upgrade-gift', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Telegram-Init-Data': "query_id=AAGWAkobAAAAAJYCShvMPzxn&user=%7B%22id%22%3A457835158%2C%22first_name%22%3A%22.%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22fffZzzzap%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FzRrTopbSw7La8Fey17kZI8buAcHEkgBh6Zl4zu5DHRQ.svg%22%7D&auth_date=1757951606&signature=3VVvehY68hHi9Rs2SkKji_OwN1UNjor-qcpZFKJN-9_lyckpkoGUlBHSm2QhydNjDcIShGAZWudn3QtVKDHSBQ&hash=901c6d6d341b37037ffda335c6f4a7e5f95e1f87477409da98428d778aafcee2"
            },
            body: JSON.stringify({
    gift: {
        owner_id: "457835158",
        nft_id: "2c840eb3-7bbf-4cf1-80fd-817fa17cb93a",
        gift_name: "crystalball",
        image_url: "https://nft.fragment.com/gift/crystalball-17746.large.jpg",
        gift_price: 11.0,
        timestamp: 1759929262,
        tg_id: "CrystalBall-17746"
    },
    new_gift: {
        new_gift: "bondedring"
    }
}),
        });

        if (!response.ok) {
            throw new Error('Server error');
        }

      const data = await response.json();
        
        let now = 0;
         function rotateArrow() {
        const arrow = document.getElementById('arrow');
        const degreesInput = document.getElementById('degrees');
        const degrees = data['result'] + now;
        
        // Сбрасываем трансформацию
        arrow.style.transition = 'none';
        
        // Принудительное перерисовывание
        void arrow.offsetWidth;
        
        // Применяем анимацию вращения
        arrow.style.transition = 'transform 1s ease-in-out';
        arrow.style.transform = `translate(-50%, -100%) rotate(${degrees}deg)`;
        // После завершения анимации сбрасываем на конечное положение
        setTimeout(() => {
            // Вычисляем конечный угол (остаток от деления на 360)
            const finalAngle = degrees % 360;
            now = finalAngle
            arrow.style.transition = 'none';
            arrow.style.transform = `translate(-50%, -100%) rotate(${finalAngle}deg)`;
        }, 1000);
    }
    rotateArrow();
}
    // Инициализация при загрузке
    document.addEventListener('DOMContentLoaded', function() {
        const arrow = document.getElementById('arrow');
        arrow.style.transform = 'translate(-50%, -100%) rotate(0deg)';
    });

document.getElementById("bibo").addEventListener("click", (e) => {
    upgradeGift();
})









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


