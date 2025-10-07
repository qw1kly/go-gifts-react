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
'X-Telegram-Init-Data': document.getElementById('hiddennigga').innerText

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
    6 : ["https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_109.webp",
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_096.webp",
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_084.webp", 
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_039.webp", 
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_107.webp", 
         "https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_073.webp"],


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
    6 : {1:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_109.webp",
         2:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_096.webp",
         3:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_084.webp", 
         4:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_039.webp", 
         5:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_107.webp", 
         6:"https://data.chpic.su/stickers/g/GiftStickersByAutoGiftNews/GiftStickersByAutoGiftNews_073.webp"},
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

   const response = await fetch('https://qw1kly-fastapitest-ca38.twc1.net/spin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Telegram-Init-Data': '9098'
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
                document.getElementById("imageofwin").src = data[2];
                document.getElementById("textofwin").innerText = data[3];
                     
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


