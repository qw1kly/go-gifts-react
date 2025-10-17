import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {openconnect, get_addr, send_deposit} from './tonmanager';
import confetti from 'canvas-confetti';
import {init, openTelegramLink } from '@telegram-apps/sdk';
init()



const socket = new WebSocket("wss://qw1kly-fastapitest-ca38.twc1.net/ws/live-wins");


socket.addEventListener("message", (event) => {

        let live_gift = document.createElement("img");
        live_gift.id = "livegiftsettings";
        live_gift.src = giftNames[event.data];
        live_gift.style.opacity = "0";
        live_gift.style.transform = "translateX(-50px) scale(0.5)";
        live_gift.style.transition = "all 0.5s ease-out";
        document.getElementById("liveitems").prepend(live_gift);
        if ( document.getElementById("liveitems").children.length > 5) {
            document.getElementById("liveitems").removeChild(document.getElementById("liveitems").lastChild);
        }
        setTimeout(() => {
            live_gift.style.opacity = "1";
            live_gift.style.transform = "translateX(0) scale(1)";
        }, 100);
    
});

document.getElementById("lightfast").addEventListener("click", (event) => {
    console.log(document.getElementById("lightfast").className);
    
    if (document.getElementById("lightfast").className.includes("active")) {
        document.getElementById("lightfast").classList.remove("active")
        document.getElementById("lightfast").classList.add("nonactiv")
        document.getElementById("lightfast").src = "Flash on.png";
        fast_spin = false;

    } else if (!document.getElementById("lightfast").className.includes("active")) {
        document.getElementById("lightfast").classList.remove("nonactiv")
        document.getElementById("lightfast").classList.add("active")
        fast_spin = true;
        document.getElementById("lightfast").src = "Conflict.png";
    }
})

let fast_spin = false;

let giftCounter = 0;

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
    let fitter = document.querySelector('[data-tc-text="true"]');
    const svg = dtts.querySelector('svg');
        if (svg) {
            svg.style.display = 'none'; 
        }
    dtts.style.borderRadius = "16px";
    dtts.style.width = "159px";
    dtts.style.height = "45px";
    dtts.style.boxShadow = 'inset 0.7px 0.5px 0.4px -0.2px rgb(174, 240, 248), inset -0.7px -0.5px 0.4px -0.2px rgb(174, 240, 248)'
    dtts.style.opacity = '1';
    dtts.style.backdropFilter = 'blur(10px)'
        
        fitter.style.position = "absolute"; // добавляем позиционирование
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
    const giftreturn = document.getElementById("bblol_14_gift");
    const showmodalgift = document.getElementById("bblol_gift");
    const starmodalgift = document.getElementById("bblol_stars");
    const docer = document.getElementById("refactor_referal");
    const docer_2 = document.getElementById("refactor_referal_1");

    // Изначально активируем первую кнопку
    tint3.classList.add('active');
    shine3.classList.add('active');


    // Обработчик для кнопки "Пополнить"
    button3.addEventListener('click', function() {
        if (button3.getAttribute('disabled') == 'true') return;

        tonbutton.style.display='block';
        giftbutton.style.display='block';
        starsbutton.style.display='block';
        document.getElementById('tonpaymentsystem').style.display='none';
        document.getElementById('giftpaymentsystem').style.display='none';
        document.getElementById('starspaymentsystem').style.display='none';

        if (!tint3.classList.contains('active')) {
            // Активируем эту кнопку
            document.getElementById("slider").style.display = 'block';
            document.getElementById("slider").classList.add('left');
            button4.setAttribute('disabled', true);
            document.getElementById("refactor_1").classList.add('active');
            document.getElementById("refactor_2").classList.add('active');
            document.getElementById("refactor_3").classList.add('active');
            setTimeout(() => {
                button4.setAttribute('disabled', false);
            }, 700);
            setTimeout(() => {
                tint3.classList.add('active');
                shine3.classList.add('active');
        
                document.getElementById("slider").style.display = 'none';
                document.getElementById("slider").classList.remove('left');
                document.getElementById("refactor_1").classList.remove('active');
                document.getElementById("refactor_2").classList.remove('active');
                document.getElementById("refactor_3").classList.remove('active');
            }, 300);
            document.getElementById("inventory").style.display='none';
            document.getElementById("wrapper_9").style.display='block';
            // Деактивируем другую кнопку
            tint4.classList.remove('active');
            shine4.classList.remove('active');
        }
    });

    // Обработчик для кнопки "Инвентарь"
    button4.addEventListener('click', function() {
        if (button4.getAttribute('disabled') == 'true') return;

        if (!tint4.classList.contains('active')) {
            
            // Активируем эту кнопку
            document.getElementById("slider").style.display = 'block';
            document.getElementById("slider").classList.add('right');
            button3.setAttribute('disabled', true);
            document.getElementById("wrapper_all").classList.add('active');
            document.getElementById("emojicount").classList.add('active');
            document.getElementById("wrapper_sellall").classList.add("active");
            setTimeout(() => {
                button3.setAttribute('disabled', false);
            }, 700);
            setTimeout(() => {
                tint4.classList.add('active');  
                
                shine4.classList.add('active');  
                document.getElementById("slider").style.display = 'none';
                document.getElementById("wrapper_sellall").classList.remove("active");

                document.getElementById("slider").classList.remove('right');
                document.getElementById("wrapper_all").classList.remove('active');
                document.getElementById("emojicount").classList.remove('active');

            }, 300);
            
            document.getElementById("inventory").style.display='block';
            document.getElementById("wrapper_9").style.display='none';
            // Деактивируем другую кнопку
            tint3.classList.remove('active');
            shine3.classList.remove('active');
        }
    });


    tonbutton.addEventListener("click", (e) => {
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
        
        document.getElementById('giftpaymentsystem').style.display='block';

    });

    starsbutton.addEventListener("click", (e) => {
        tonbutton.style.display='none';
        giftbutton.style.display='none';
        starsbutton.style.display='none';
        document.getElementById('starspaymentsystem').style.display='block';

    });
    tonreturn.addEventListener("click", (e) => {
        tonbutton.style.display='block';
        giftbutton.style.display='block';
        starsbutton.style.display='block';
        document.getElementById('tonpaymentsystem').style.display='none';
        document.getElementById("refactor_1").classList.add('active');
        document.getElementById("refactor_2").classList.add('active');
        document.getElementById("refactor_3").classList.add('active');

        setTimeout(() => {
            document.getElementById("refactor_1").classList.remove('active');
            document.getElementById("refactor_2").classList.remove('active');
            document.getElementById("refactor_3").classList.remove('active');
        }, 300);
    });

    giftreturn.addEventListener("click", (e) => {
        tonbutton.style.display='block';
        giftbutton.style.display='block';
        starsbutton.style.display='block';
        document.getElementById('giftpaymentsystem').style.display='none';
        document.getElementById("refactor_1").classList.add('active');
        document.getElementById("refactor_2").classList.add('active');
        document.getElementById("refactor_3").classList.add('active');

        setTimeout(() => {
            document.getElementById("refactor_1").classList.remove('active');
            document.getElementById("refactor_2").classList.remove('active');
            document.getElementById("refactor_3").classList.remove('active');
        }, 300);
    });
    starmodalgift.addEventListener("click", (e) => {
        tonbutton.style.display='block';
        giftbutton.style.display='block';
        starsbutton.style.display='block';
        document.getElementById('starspaymentsystem').style.display='none';
        document.getElementById("refactor_1").classList.add('active');
        document.getElementById("refactor_2").classList.add('active');
        document.getElementById("refactor_3").classList.add('active');

        setTimeout(() => {
            document.getElementById("refactor_1").classList.remove('active');
            document.getElementById("refactor_2").classList.remove('active');
            document.getElementById("refactor_3").classList.remove('active');
        }, 300);
    });
    showmodalgift.addEventListener("click", (e) => {
    const modal = document.getElementById("refactor_modal");
    modal.style.display = 'block';
    main.classList.remove('modal-hide');
    modal.classList.add('modal-show');
    })

    const line = document.getElementById('svapper')
    const main = document.getElementById("refactor_modal")
    main.addEventListener('mousedown', () => {
    // Для ПК
    main.classList.remove('modal-show');
    main.classList.add('modal-hide');
    setTimeout(() => {
        main.style.display = 'none';
    }, 500);
    })
    main.addEventListener('mouseup', () => {
    // Для ПК
    main.classList.remove('modal-show');
    main.classList.add('modal-hide');
    setTimeout(() => {
        main.style.display = 'none';
    }, 500);
    })
    main.addEventListener('touchmove', () => {
        main.classList.remove('modal-show');
        main.classList.add('modal-hide');
        setTimeout(() => {
            main.style.display = 'none';
        }, 500);
    })
    main.addEventListener('touchend', () => {
        main.classList.remove('modal-show');
        main.classList.add('modal-hide');
        setTimeout(() => {
        main.style.display = 'none';
        }, 500);
    })
    
    let invite_handler = document.getElementById("bblol_invite");
    invite_handler.addEventListener("click", (e) => {
        return;
        const shareData = "https://t.me/share/url?url=https://t.me/testantiplug_bot/referal?startapp"+"="+"34013"
        openTelegramLink(shareData);   
    });

    let copy_handler = document.getElementById("bblol_copy");
    copy_handler.addEventListener("click", (event) => {
        navigator.clipboard.writeText("https://t.me/testantiplug_bot/referal?startapp"+"="+"34013")
        .then(() => {
        })
        .catch(err => {
        console.log('Something went wrong', err);
        });
    })
    

});

let icones_path = {
 0: ["Slot Machine (1).png", "Slot Machine (2).png"],
 3: ["User.png", "User (1).png"]
}

let winner = 0;

let index_icons = 6;

let roullete_id = 1;


document.getElementById("wrapper_sellall_now").addEventListener("click", async function meme(e)  {
     const response = await fetch('http://localhost:8000/sellall', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Init-Data': "query_id=AAGWAkobAAAAAJYCShvMPzxn&user=%7B%22id%22%3A457835158%2C%22first_name%22%3A%22.%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22fffZzzzap%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FzRrTopbSw7La8Fey17kZI8buAcHEkgBh6Zl4zu5DHRQ.svg%22%7D&auth_date=1757951606&signature=3VVvehY68hHi9Rs2SkKji_OwN1UNjor-qcpZFKJN-9_lyckpkoGUlBHSm2QhydNjDcIShGAZWudn3QtVKDHSBQ&hash=901c6d6d341b37037ffda335c6f4a7e5f95e1f87477409da98428d778aafcee2"

        },
        body: JSON.stringify({
            id: "457835158",
            balance: "0.00",
        })
    });

    if (!response.ok) {
        window.reload();

    }
    const msg = await response.json();
    let new_bal = msg['new_balance']
    
    document.getElementById("liquidGlass-effect").innerText = Number(new_bal);
    document.getElementById("bblol").style.width = 65 + 6 * (new_bal.length - 2) + "px";
    document.getElementById("toncoinsym").style.marginLeft = (Number(document.getElementById("bblol").style.width.slice(0, -2)) - 65) + 41 + "px";
    giftCounter = 0;
    document.getElementById("refactor_modal_gift").classList.remove('modal-showgift');
    document.getElementById("refactor_modal_gift").classList.add('modal-hidegift');
    document.getElementById("emojicount").innerText = "Gifts: "+giftCounter;
   
    let messout = 1;
    let gessout = 1;
    while (1 == 1) {
        gessout=1;
        messout=1;
        try {   
            document.getElementById("allitems").removeChild(document.getElementById("currentgiftinventory"))
            gessout = 0;
        } 
        catch {  
            try{
                document.getElementById("allitemsbig").removeChild(document.getElementById("bigcurrentitem"))
            } catch {
                break;
            }
        }
        finally {
            if (gessout == 0 & messout == 0) {
                break;
            }
        }
    }
    

    document.getElementById("refactor_modal_gift_all1").classList.remove('modal-showgift_all1');
    document.getElementById("refactor_modal_gift_all1").classList.add('modal-hidegift_all1');
    
    setTimeout(() => {
        document.getElementById("refactor_modal_gift_all1").style.display = "none";
    }, 500);
})
document.getElementById("slider2_").addEventListener("click", (e) => {
    document.getElementById("refactor_modal_gift_all1").classList.remove('modal-showgift_all1');
    document.getElementById("refactor_modal_gift_all1").classList.add('modal-hidegift_all1');
    setTimeout(() => {
        document.getElementById("refactor_modal_gift_all1").style.display = "none";
    }, 500);
})


document.getElementById("wrapper_with").addEventListener("click", async function withid (e) {
    const response = await fetch('http://localhost:8000/withdraw-gift', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Init-Data': "query_id=AAGWAkobAAAAAJYCShvMPzxn&user=%7B%22id%22%3A457835158%2C%22first_name%22%3A%22.%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22fffZzzzap%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FzRrTopbSw7La8Fey17kZI8buAcHEkgBh6Zl4zu5DHRQ.svg%22%7D&auth_date=1757951606&signature=3VVvehY68hHi9Rs2SkKji_OwN1UNjor-qcpZFKJN-9_lyckpkoGUlBHSm2QhydNjDcIShGAZWudn3QtVKDHSBQ&hash=901c6d6d341b37037ffda335c6f4a7e5f95e1f87477409da98428d778aafcee2"

        },
        body: JSON.stringify({
            owner_id: "457835158",
            gift_name: document.getElementById("currentgiftimg").data[0],
            gift_price: document.getElementById("currentgiftimg").data[1],
            timestamp: document.getElementById("currentgiftimg").data[2]
        })
    });

    if (!response.ok) {
        window.reload();

    }
    const msg = await response.json();
    
    giftCounter = giftCounter - 1;
    document.getElementById("refactor_modal_gift").classList.remove('modal-showgift');
    document.getElementById("refactor_modal_gift").classList.add('modal-hidegift');
    document.getElementById("emojicount").innerText = "Gifts: "+giftCounter;
    const articles = document.getElementsByClassName("megaboxi");

    for (let index_s = 0; index_s < articles.length; index_s++) {
        if (articles[index_s].data.split('_') == document.getElementById("currentgiftimg").data + ",$") {
            try {
                document.getElementById("allitems").removeChild(articles[index_s])
                try {
                    document.getElementById("allitemsbig").removeChild(articles[index_s])

                } catch {
                    continue
                }
            } catch {
                document.getElementById("allitemsbig").removeChild(articles[index_s])

            }
            }

    }
    setTimeout(() => {
        document.getElementById("refactor_modal_gift").style.display = "none";
    }, 500);
})
function forceReflow(element) {
  void element.offsetHeight;
}


document.getElementById("profileiconbar").addEventListener("click", (e) =>  {
    document.getElementById("slotmachinea").style.color = "#FFFFFF";
    document.getElementById("slotmachine").src = "Slot Machine (2).png";
    document.getElementById("profilepic").src = "User (1).png";
    document.getElementById("profilea").style.color = "#22F3C9";
    document.getElementById("profileicon").classList.add("active");
    document.getElementById("profileicon").style.display = "block";
    document.getElementById("roulleteicon").classList.remove("active");
    document.getElementById("roulleteicon").style.display='none';
    
    setTimeout(() => {
        document.getElementById("profileicon").style.zIndex = "0";
        forceReflow(document.getElementById("profileicon"));
    }, 1600);
})

document.getElementById("roulleteiconbar").addEventListener("click", (e) =>  {
    document.getElementById("slotmachinea").style.color = "#22F3C9";
    document.getElementById("slotmachine").src = "Slot Machine (1).png";
    document.getElementById("profilepic").src = "User.png";
    document.getElementById("profilea").style.color = "#FFFFFF";
    
    document.getElementById("roulleteicon").classList.add("active");
    document.getElementById("roulleteicon").style.display = "block";
    document.getElementById("profileicon").classList.remove("active");
    
    document.getElementById("profileicon").style.display='none';
    
})



document.getElementById("wrapper_sellall").addEventListener("click", async function sellAll(e) {
    if (document.getElementsByClassName("megaboxi").length == 0) {
        document.getElementById("wrapper_sellall").classList.add("active_shake")
        setTimeout(() => {
        document.getElementById("wrapper_sellall").classList.remove("active_shake")
        }, 500);
    } else {
    document.getElementById("refactor_modal_gift_all1").style.display='block';
    document.getElementById("refactor_modal_gift_all1").classList.remove('modal-hidegift_all1');
    document.getElementById("refactor_modal_gift_all1").classList.add('modal-showgift_all1');
    let main = document.getElementById("refactor_modal")
    let current_gift = document.getElementById("refactor_modal_gift");
    main.classList.remove('modal-show');
    main.classList.add('modal-hide');
    document.getElementById("refactor_modal_gift").classList.remove('modal-showgift');
    document.getElementById("refactor_modal_gift").classList.add('modal-hidegift');
    document.getElementById("refactor_modal_gift_inventory").classList.remove('modal-showgift_inventory');
    document.getElementById("refactor_modal_gift_inventory").classList.add('modal-hidegift_inventory');
    
    setTimeout(() => {
        main.style.display = 'none';
        current_gift.style.display = 'none';
        document.getElementById("refactor_modal_gift_inventory").style.display = "none";

    }, 500);
    const articles = document.getElementsByClassName("megaboxi");
    let bito = 0;
    for (let index_s = 0; index_s < articles.length; index_s++) {
        if (articles[index_s].id == "currentgiftinventory") {
            let amountf = articles[index_s].data.split('_')[1];
            bito = bito + Number(amountf);
        }
    }
    document.getElementById("sellallnow").innerText = "Продать всё за "+bito +"?"
}
    // const response = await fetch('http://localhost:8000/sellall', {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/json',
    //     'X-Telegram-Init-Data': "query_id=AAGWAkobAAAAAJYCShvMPzxn&user=%7B%22id%22%3A457835158%2C%22first_name%22%3A%22.%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22fffZzzzap%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FzRrTopbSw7La8Fey17kZI8buAcHEkgBh6Zl4zu5DHRQ.svg%22%7D&auth_date=1757951606&signature=3VVvehY68hHi9Rs2SkKji_OwN1UNjor-qcpZFKJN-9_lyckpkoGUlBHSm2QhydNjDcIShGAZWudn3QtVKDHSBQ&hash=901c6d6d341b37037ffda335c6f4a7e5f95e1f87477409da98428d778aafcee2"

    //     },
    //     body: JSON.stringify({
    //         id: "457835158",
    //         balance: "0.00",
    //     })
    // });

    // if (!response.ok) {
    //     window.reload();

    // }
    // const msg = await response.json();
    // let new_bal = msg['new_balance']
    
    // document.getElementById("liquidGlass-effect").innerText = Number(new_bal);
    // document.getElementById("bblol").style.width = 65 + 6 * (new_bal.length - 2) + "px";
    // document.getElementById("toncoinsym").style.marginLeft = (Number(document.getElementById("bblol").style.width.slice(0, -2)) - 65) + 41 + "px";
    // giftCounter = giftCounter - 1;
    // document.getElementById("refactor_modal_gift").classList.remove('modal-showgift');
    // document.getElementById("refactor_modal_gift").classList.add('modal-hidegift');
    // document.getElementById("emojicount").innerText = "Emoji: "+giftCounter;
    // const articles = document.getElementsByClassName("megaboxi");

    // for (let index_s = 0; index_s < articles.length; index_s++) {
    //     if (articles[index_s].data.split('_') == document.getElementById("currentgiftimg").data + ",$") {
    //         try {
    //             document.getElementById("allitems").removeChild(articles[index_s])
    //         } catch {
    //             document.getElementById("allitemsbig").removeChild(articles[index_s])

    //         }
    //         }

    // }
    // setTimeout(() => {
    //     document.getElementById("refactor_modal_gift").style.display = "none";
    // }, 500);
})


document.getElementById("wrapper_sellgift").addEventListener("click", async function sellGift(e) {
    const response = await fetch('http://localhost:8000/sellgift', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Init-Data': "query_id=AAGWAkobAAAAAJYCShvMPzxn&user=%7B%22id%22%3A457835158%2C%22first_name%22%3A%22.%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22fffZzzzap%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FzRrTopbSw7La8Fey17kZI8buAcHEkgBh6Zl4zu5DHRQ.svg%22%7D&auth_date=1757951606&signature=3VVvehY68hHi9Rs2SkKji_OwN1UNjor-qcpZFKJN-9_lyckpkoGUlBHSm2QhydNjDcIShGAZWudn3QtVKDHSBQ&hash=901c6d6d341b37037ffda335c6f4a7e5f95e1f87477409da98428d778aafcee2"

        },
        body: JSON.stringify({
            owner_id: "457835158",
            gift_name: document.getElementById("currentgiftimg").data[0],
            gift_price: document.getElementById("currentgiftimg").data[1],
            timestamp: document.getElementById("currentgiftimg").data[2]
        })
    });

    if (!response.ok) {
        window.reload();

    }
    const msg = await response.json();
    let new_bal = msg['new_balance']
    
    document.getElementById("liquidGlass-effect").innerText = Number(new_bal);
    document.getElementById("bblol").style.width = 65 + 6 * (new_bal.length - 2) + "px";
    document.getElementById("toncoinsym").style.marginLeft = (Number(document.getElementById("bblol").style.width.slice(0, -2)) - 65) + 41 + "px";
    giftCounter = giftCounter - 1;
    document.getElementById("refactor_modal_gift").classList.remove('modal-showgift');
    document.getElementById("refactor_modal_gift").classList.add('modal-hidegift');
    document.getElementById("emojicount").innerText = "Gifts: "+giftCounter;
    const articles = document.getElementsByClassName("megaboxi");

    for (let index_s = 0; index_s < articles.length; index_s++) {
        if (articles[index_s].data.split('_') == document.getElementById("currentgiftimg").data + ",$") {
            try {
                document.getElementById("allitems").removeChild(articles[index_s])
                try {
                    document.getElementById("allitemsbig").removeChild(articles[index_s])

                } catch {
                    continue
                }
            } catch {
                document.getElementById("allitemsbig").removeChild(articles[index_s])

            }
            }

    }
    setTimeout(() => {
        document.getElementById("refactor_modal_gift").style.display = "none";
    }, 500);
})

document.getElementById("wrapper_all").addEventListener("click", (e) => {
    document.getElementById("refactor_modal_gift_inventory").style.display = "block";
    document.getElementById("refactor_modal_gift_inventory").classList.remove('modal-hidegift_inventory');
    document.getElementById("refactor_modal_gift_inventory").classList.add('modal-showgift_inventory');
    document.getElementById("refactor_modal_gift_all1").classList.remove('modal-showgift_all1');
    document.getElementById("refactor_modal_gift_all1").classList.add('modal-hidegift_all1');
    let main = document.getElementById("refactor_modal")
    let current_gift = document.getElementById("refactor_modal_gift");
    main.classList.remove('modal-show');
    main.classList.add('modal-hide');
    document.getElementById("refactor_modal_gift").classList.remove('modal-showgift');
    document.getElementById("refactor_modal_gift").classList.add('modal-hidegift');
   })

document.getElementById("svapper_1_inventory").addEventListener("click", (e) => {
    document.getElementById("refactor_modal_gift_inventory").classList.remove('modal-showgift_inventory');
    document.getElementById("refactor_modal_gift_inventory").classList.add('modal-hidegift_inventory');
    setTimeout(() => {
        document.getElementById("refactor_modal_gift_inventory").style.display = "none";
    }, 500);
})

document.getElementById("allitems").addEventListener('click', (e) => {
    if (e.target.id === "currentgiftinventory" || 
        e.target.id === "currentgiftinventory_img" ) {
        
        let giftInfo = e.target.data.split("_");
    document.getElementById("refactor_modal_gift_inventory").classList.remove('modal-showgift_inventory');
    document.getElementById("refactor_modal_gift_inventory").classList.add('modal-hidegift_inventory');
    document.getElementById("refactor_modal_gift_all1").classList.remove('modal-showgift_all1');
    document.getElementById("refactor_modal_gift_all1").classList.add('modal-hidegift_all1');
    let main = document.getElementById("refactor_modal")
    let current_gift = document.getElementById("refactor_modal_gift");
    main.classList.remove('modal-show');
    main.classList.add('modal-hide');
        document.getElementById("refactor_modal_gift").style.display = "block";
        document.getElementById("refactor_modal_gift").classList.remove('modal-hidegift');
        document.getElementById("refactor_modal_gift").classList.add('modal-showgift');
        document.getElementById("currentgiftimg").src = giftNames[giftInfo[0]];
        document.getElementById("currentgiftimg").data = giftInfo;
        document.getElementById("giftginger").innerText = Number(giftInfo[1]);
        document.getElementById("bblol_gift_pricer_1").style.width = 109 + 6 * (giftInfo[1].length - 5) + "px";
        document.getElementById("toncoinbig").style.marginLeft = (Number(document.getElementById("bblol_gift_pricer_1").style.width.slice(0, -2)) - 109) + 32 + "px";
        document.getElementById("refactor_modal_gift").data = giftInfo;
    }
});


document.getElementById("allitemsbig").addEventListener('click', (e) => {
    if (e.target.id === "currentgiftinventory" || 
        e.target.id === "currentgiftinventory_img" ) {
        
        let giftInfo = e.target.data.split("_");
        document.getElementById("refactor_modal_gift_inventory").style.display = "block";
    document.getElementById("refactor_modal_gift_inventory").classList.remove('modal-showgift_inventory');
    document.getElementById("refactor_modal_gift_inventory").classList.add('modal-hidegift_inventory');
    document.getElementById("refactor_modal_gift_all1").classList.remove('modal-showgift_all1');
    document.getElementById("refactor_modal_gift_all1").classList.add('modal-hidegift_all1');
    let main = document.getElementById("refactor_modal")
    let current_gift = document.getElementById("refactor_modal_gift");
    main.classList.remove('modal-show');
    main.classList.add('modal-hide');
        document.getElementById("refactor_modal_gift").style.display = "block";
        document.getElementById("refactor_modal_gift").classList.remove('modal-hidegift');
        document.getElementById("refactor_modal_gift").classList.add('modal-showgift');
        document.getElementById("currentgiftimg").src = giftNames[giftInfo[0]];
        document.getElementById("currentgiftimg").data = giftInfo;
        document.getElementById("giftginger").innerText = Number(giftInfo[1]);
        document.getElementById("bblol_gift_pricer_1").style.width = 109 + 6 * (giftInfo[1].length - 5) + "px";
        document.getElementById("toncoinbig").style.marginLeft = (Number(document.getElementById("bblol_gift_pricer_1").style.width.slice(0, -2)) - 109) + 32 + "px";
        document.getElementById("refactor_modal_gift").data = giftInfo;
    }
});

document.getElementById("svapper_1").addEventListener('click', (e) => {

        document.getElementById("refactor_modal_gift").classList.remove('modal-showgift');
        document.getElementById("refactor_modal_gift").classList.add('modal-hidegift');

        setTimeout(() => {
                    document.getElementById("refactor_modal_gift").style.display = "none";

        }, 500);
});

document.getElementById("refactor").addEventListener("click", (e)=>{
    // document.getElementById("settingsphoto").transform="rotate(90deg)";

})

async function authe() {
const response = await fetch('https://qw1kly-fastapitest-ca38.twc1.net/auth', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Init-Data': document.getElementById("tginitdata").innerText

        },
    });

    if (!response.ok) {
        console.log('error');

    }
    try {
        const msg = await response.json();

        let photo_url = msg[0][2];
        let nickname = msg[0][1];
        let balance = "0.00";
        
        document.getElementById("profilepicture").src = photo_url;
        document.getElementById("nickname").innerText = nickname;
        document.getElementById("liquidGlass-effect").innerText = Number(balance);
        document.getElementById("bblol").style.width = 65 + 6 * (balance.length - 2) + "px";
        document.getElementById("toncoinsym").style.marginLeft = (Number(document.getElementById("bblol").style.width.slice(0, -2)) - 65) + 41 + "px";
        
        const all_items = msg[1];
        giftCounter = all_items.length;
        document.getElementById("emojicount").innerText = "Gifts: " + all_items.length
        

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
    6 : ["https://static.tildacdn.one/tild3438-3135-4534-a635-613566653233/GiftsGiftsGifts_AgAE.png",
         "https://static.tildacdn.one/tild3438-6264-4339-a132-393764666361/GiftsGiftsGifts_AgAD.png",
         "https://static.tildacdn.one/tild6266-3734-4038-b362-373233626164/GiftsGiftsGifts_AgAD.png", 
         "https://static.tildacdn.one/tild3962-3236-4131-a639-333932623731/GiftsGiftsGifts_AgAD.png", 
         "https://static.tildacdn.one/tild3233-6233-4538-a135-393630636338/GiftsGiftsGifts_AgAD.png", 
         "https://static.tildacdn.one/tild3432-3965-4466-a437-383631396533/GiftsGiftsGifts_AgAD.png"],


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
    6 : {1:"https://static.tildacdn.one/tild3438-3135-4534-a635-613566653233/GiftsGiftsGifts_AgAE.png",
         2:"https://static.tildacdn.one/tild3438-6264-4339-a132-393764666361/GiftsGiftsGifts_AgAD.png",
         3:"https://static.tildacdn.one/tild6266-3734-4038-b362-373233626164/GiftsGiftsGifts_AgAD.png", 
         4:"https://static.tildacdn.one/tild3962-3236-4131-a639-333932623731/GiftsGiftsGifts_AgAD.png", 
         5:"https://static.tildacdn.one/tild3233-6233-4538-a135-393630636338/GiftsGiftsGifts_AgAD.png", 
         6:"https://static.tildacdn.one/tild3432-3965-4466-a437-383631396533/GiftsGiftsGifts_AgAD.png"},
};

const giftNames = {
    "jollychimp": "https://static.tildacdn.one/tild3438-3135-4534-a635-613566653233/GiftsGiftsGifts_AgAE.png",
    "vintagecigar":"https://static.tildacdn.one/tild6266-3734-4038-b362-373233626164/GiftsGiftsGifts_AgAD.png",
    "crystalball":"https://static.tildacdn.one/tild3438-6264-4339-a132-393764666361/GiftsGiftsGifts_AgAD.png",
    "deskcalendar": "https://static.tildacdn.one/tild3831-3539-4962-b439-303863333065/GiftsGiftsGifts_AgAD.png",
    "candycane": "https://static.tildacdn.one/tild6164-6261-4235-b161-626330343464/GiftsGiftsGifts_AgAD.png",
    "swagbag": "https://static.tildacdn.one/tild6333-3765-4630-a662-326130393731/unnamed_AgADwYEAAuRh.png",
    "ionicdryer": "https://static.tildacdn.one/tild3033-6264-4531-a133-393664323063/GiftsGiftsGifts_AgAD.png",
    "genielamp": "https://static.tildacdn.one/tild3962-6361-4830-b263-633761333332/GiftsGiftsGifts_AgAD.png",
    "bondedring": "https://static.tildacdn.one/tild3962-3236-4131-a639-333932623731/GiftsGiftsGifts_AgAD.png",
    "artisanbrick":"https://static.tildacdn.one/tild3233-6233-4538-a135-393630636338/GiftsGiftsGifts_AgAD.png",
    "preciouspeach":"https://static.tildacdn.one/tild3432-3965-4466-a437-383631396533/GiftsGiftsGifts_AgAD.png"
}

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
        let amountOfItems = baseItemAmount + (i * 3);
        let elms = '';
        let firstThreeElms = '';

        for (let x = 0; x < amountOfItems; x++) {
            let icon = getRandomIcon();
            let item = '<div class="icon" data-item="' + icon + '"><img height="70" width="70" src="' + icon + '"></div>';
            elms += item;

            if (x < 3) firstThreeElms += item;
        }
        col.innerHTML = elms + firstThreeElms;
        
        // Устанавливаем начальную позицию
        col.style.transform = 'translateY(calc(-100% + 226px))';
    }
}

/**
 * Called when the start-button is pressed.
 *
 * @param elem The button itself
 */
async function spin(elem) {
    if (elem.getAttribute('disabled') == 'true') return;

    winner = 0;
    elem.setAttribute('disabled', true);
    document.getElementById("bblol_spin").classList.add("newspin")
    elem.classList.add("newspin");
   const response = await fetch('https://qw1kly-fastapitest-ca38.twc1.net/spin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Telegram-Init-Data': "query_id=AAGWAkobAAAAAJYCShvMPzxn&user=%7B%22id%22%3A457835158%2C%22first_name%22%3A%22.%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22fffZzzzap%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FzRrTopbSw7La8Fey17kZI8buAcHEkgBh6Zl4zu5DHRQ.svg%22%7D&auth_date=1757951606&signature=3VVvehY68hHi9Rs2SkKji_OwN1UNjor-qcpZFKJN-9_lyckpkoGUlBHSm2QhydNjDcIShGAZWudn3QtVKDHSBQ&hash=901c6d6d341b37037ffda335c6f4a7e5f95e1f87477409da98428d778aafcee2"
            },
            body: JSON.stringify({ roullete_id: 6 })
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
        elem.classList.remove("newspin");
        document.getElementById("bblol_spin").classList.remove("newspin")
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
    }.bind(elem), !fast_spin ? duration * 1000 : 700);
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
const btt = document.getElementById("refactor_spin");
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


