import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {openconnect, get_addr, send_deposit} from './tonmanager';
import confetti from 'canvas-confetti';

const deposit = document.getElementById("refactor_buy");
deposit.addEventListener("click", (e) => {
    if (document.getElementById("wallbalik").value < 0.1) {
            document.getElementById("wallbalik").classList.add("error");
            let errorTimeout = setTimeout(() => {
            document.getElementById("wallbalik").classList.remove('error');
            }, 500);
    } else {
        send_deposit(document.getElementById("wallbalik").value)
    }
})

async function connectUI() {
    const boolean_value = openconnect();
    if (boolean_value == false) {
    let dtts = document.querySelector('[data-tc-connect-button="true"]');
    const svg = dtts.querySelector('svg');
        if (svg) {
            svg.style.display = 'none'; 
        }
    dtts.style.borderRadius = "16px";
    dtts.style.width = "159px";
    dtts.style.height = "45px";
    dtts.style.boxShadow = 'inset 0.8px 1px 0px -0.2px rgba(255, 255, 255, 0.647), inset -0.7px -0.9px 0px -0.1px rgba(255, 255, 255, 0.647)'
    dtts.style.backdropFilter = 'blur(10px);'
    const divd = dtts.querySelector('div');
        if (divd) {
            divd.innerText = 'Подключить'; 
            divd.style.textAlign = 'center';
            divd.style.alignItems = 'center';
            divd.style.justifyContent = 'center';
            divd.style.justifyItems = 'center';
            divd.style.alignContent = 'center';
            divd.style.marginLeft = '20px';
        }
    }    // dtts.style.display = 'none';
};

window.setTimeout(connectUI, 3000);
document.addEventListener('DOMContentLoaded', function() {
    const button3 = document.getElementById('bblol_3');
    const button4 = document.getElementById('bblol_4');
    const tint3 = button3.querySelector('.liquidGlass-tint_3');
    const shine3 = button3.querySelector('.liquidGlass-shine_3');
    const tint4 = button4.querySelector('.liquidGlass-tint_4');
    const shine4 = button4.querySelector('.liquidGlass-shine_4');
    const tonbutton = document.getElementById("bblol_11");
    const giftbutton = document.getElementById("bblol_12");
    const starsbutton = document.getElementById("bblol_13");
    const tonreturn = document.getElementById("bblol_14");
    // Изначально активируем первую кнопку
    tint3.classList.add('active');
    shine3.classList.add('active');

    // Обработчик для кнопки "Пополнить"
    button3.addEventListener('click', function() {
        tonbutton.style.display='block';
        giftbutton.style.display='block';
        starsbutton.style.display='block';
        document.getElementById('tonpaymentsystem').style.display='none';

        if (!tint3.classList.contains('active')) {
            // Активируем эту кнопку
            tint3.classList.add('active');
            shine3.classList.add('active');
            document.getElementById("wrapper_9").style.display='block';
            // Деактивируем другую кнопку
            tint4.classList.remove('active');
            shine4.classList.remove('active');
        }
    });

    // Обработчик для кнопки "Инвентарь"
    button4.addEventListener('click', function() {
        if (!tint4.classList.contains('active')) {
            // Активируем эту кнопку
            tint4.classList.add('active');
            shine4.classList.add('active');
            
            document.getElementById("wrapper_9").style.display='none';
            // Деактивируем другую кнопку
            tint3.classList.remove('active');
            shine3.classList.remove('active');
        }
    });


    tonbutton.addEventListener("click", (e) => {
        console.log(navigator)
        if ('navigator.haptics' in navigator) {
            navigator.haptics.vibrate('hard');
            alert(1)
        } else if ('vibrate' in navigator) {
            alert(2)
            navigator.vibrate(500);
        }
        tonbutton.style.display='none';
        giftbutton.style.display='none';
        starsbutton.style.display='none';
        const boolean_value = openconnect();
        if (boolean_value == false) {
            
            document.getElementById('tonpaymentsystem').style.display='block';
            document.getElementById('walletdoesnt').style.display='block';
            document.getElementById('ton-connect').style.display='block';
            document.getElementById('wallbalik').style.display='none';
            document.getElementById('hexaddr').style.display='none';
            document.getElementById('refactor_buy').style.display='none';
        } else {
            document.getElementById('tonpaymentsystem').style.display='block';
            document.getElementById('walletdoesnt').style.display='none';
            document.getElementById('ton-connect').style.display='none';
            document.getElementById('wallbalik').style.display='block';
            document.getElementById('hexaddr').style.display='block';
            document.getElementById('refactor_buy').style.display='block';
            document.getElementById('hexaddr').innerText= "Address: " + get_addr();

        }
    });
    
    giftbutton.addEventListener("click", (e) => {
        tonbutton.style.display='none';
        giftbutton.style.display='none';
        starsbutton.style.display='none';
    });

    starsbutton.addEventListener("click", (e) => {
        tonbutton.style.display='none';
        giftbutton.style.display='none';
        starsbutton.style.display='none';
    });
    tonreturn.addEventListener("click", (e) => {
        tonbutton.style.display='block';
        giftbutton.style.display='block';
        starsbutton.style.display='block';
        document.getElementById('tonpaymentsystem').style.display='none';

    })
});
let winner = 0;

let index_icons = 1;

let roullete_id = 1;

document.getElementById("refactor").addEventListener("click", (e)=>{
    // document.getElementById("settingsphoto").transform="rotate(90deg)";

})

async function authe() {
const response = await fetch('http://localhost:8000/auth', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Init-Data': "query_id=AAGWAkobAAAAAJYCShvMPzxn&user=%7B%22id%22%3A457835158%2C%22first_name%22%3A%22.%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22fffZzzzap%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FzRrTopbSw7La8Fey17kZI8buAcHEkgBh6Zl4zu5DHRQ.svg%22%7D&auth_date=1757951606&signature=3VVvehY68hHi9Rs2SkKji_OwN1UNjor-qcpZFKJN-9_lyckpkoGUlBHSm2QhydNjDcIShGAZWudn3QtVKDHSBQ&hash=901c6d6d341b37037ffda335c6f4a7e5f95e1f87477409da98428d778aafcee2"

        },
    });

    if (!response.ok) {
        console.log('error');

    }
    const msg = await response.json();
    try {
        

        let photo_url = msg[0][2];
        let nickname = msg[0][1];
        let balance = msg[1];
        
        document.getElementById("profilepicture").src = photo_url;
        document.getElementById("nickname").innerText = "Azer";
        document.getElementById("liquidGlass-effect").innerText = Number(balance);
        document.getElementById("bblol").style.width = 65 + 6 * (balance.length - 3) + "px";
        document.getElementById("toncoinsym").style.marginLeft = (Number(document.getElementById("bblol").style.width.slice(0, -2)) - 65) + 41 + "px";
    } catch {
        document.getElementById("profilepicture").src = "unknown";
        document.getElementById("nickname").innerText = "Unknown";
    }
    }
//referal();
authe();
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


