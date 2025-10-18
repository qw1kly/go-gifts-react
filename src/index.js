import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {openconnect, get_addr, send_deposit} from './tonmanager';
import confetti from 'canvas-confetti';
import {init, openTelegramLink } from '@telegram-apps/sdk';
//init()

const eventSource = new EventSource('https://qw1kly-fastapitest-ca38.twc1.net/api/prices-stream');

eventSource.onmessage = (event) => {
    const dataa_a = JSON.parse(event.data)['prices'];
    let alip = document.getElementsByClassName("liquidGlass-shine_jos");
    let kk = document.getElementsByClassName("liquidGlass-effect_gift_pricer_our");
    let toncoins = document.getElementsByClassName("toncoinminclass");
    let kukcoin = document.getElementsByClassName("liquidGlass-wrapper_gift_pricer_our button_gift_pricer_our");
    for (let index_ss = 0; index_ss < alip.length; index_ss++) {
        if (dataa_a[alip[index_ss].getAttribute("data").split("_")[0]]){
        let oldname = alip[index_ss].getAttribute("data").split("_")[0]
        alip[index_ss].setAttribute("data", oldname+"_"+dataa_a[oldname]);
        let wrapper_3 = kk[index_ss];
        let wrapper_6 = toncoins[index_ss];
        let wrapper_2 = kukcoin[index_ss];
        console.log(dataa_a[oldname])
        wrapper_3.innerText = Number(dataa_a[oldname]);        
        wrapper_2.style.width = 37 + 4 * (dataa_a[oldname].length - 3) + "px";
        wrapper_6.style.marginLeft = (Number(wrapper_2.style.width.slice(0, -2)) - 35) + 20 + "px";
    }
}

};

const socket = new WebSocket("wss://qw1kly-fastapitest-ca38.twc1.net/ws/live-wins");


socket.addEventListener("message", (event) => {

        let live_gift = document.createElement("img");
        live_gift.id = "livegiftsettings";
        live_gift.src = giftNames[event.data];
        live_gift.style.opacity = "0";
        live_gift.style.transform = "translateX(-50px) scale(0.5)";
        live_gift.style.transition = "all 0.5s ease-out";
        if ( document.getElementById("liveitems").children.length >= 5) {
            
           setTimeout(() => {

                document.getElementById("liveitems").lastChild.style.opacity = "0";
                document.getElementById("liveitems").lastChild.style.transform = "translateX(-50px) scale(0.5)";
                document.getElementById("liveitems").lastChild.style.transition = "all 0.5s ease-out";
                setTimeout(() => {

                document.getElementById("liveitems").removeChild(document.getElementById("liveitems").lastChild);
                }, 250);
                }, 10);
        }
        setTimeout(() => {
            document.getElementById("liveitems").prepend(live_gift);
            setTimeout(() => {
            live_gift.style.opacity = "1";
            live_gift.style.transform = "translateX(0) scale(1)";
            }, 100);
        }, 180);

    
});

document.getElementById("lightfast").addEventListener("click", (event) => {
    console.log(document.getElementById("lightfast").className);
    
    if (document.getElementById("lightfast").className.includes("active")) {
        document.getElementById("lightfast").classList.remove("active")
        document.getElementById("lightfast").classList.add("nonactiv")
        document.getElementById("lightfast").src = "Flash On.png";
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


window.addEventListener("resize", (e) => {
if (window.innerHeight < 758) {
        document.getElementById("iconsswitcher").style.position = "absolute";
         document.getElementById("iconsswitcher").style.removeProperty('bottom');
         document.getElementById("iconsswitcher").style.top = "679px";
    } else {
        document.getElementById("iconsswitcher").style.position = "fixed";
         document.getElementById("iconsswitcher").style.removeProperty('top');
         document.getElementById("iconsswitcher").style.bottom = "9px";
    };
});


window.setTimeout(connectUI, 3000);
document.addEventListener('DOMContentLoaded', function() {

    for (let index_ss = 0; index_ss < 92; index_ss++) {
        let outer = document.createElement("div");
        let inner = document.createElement("div");
        let inner_1 = document.createElement("div");
        let inner_2 = document.createElement("div");
        let inner_3 = document.createElement("div");
        let inner_4 = document.createElement("img");
        inner_4.id = "innermessage";
        inner_4.src = payloadgifts[payloadgiftkeys[index_ss]][1];
        outer.id = "refactor_jos";
        inner.className = "liquidGlass-wrapper_jos button_jos";
        inner.id = "bblol_jos";
        inner_1.className = "liquidGlass-effect_jos";
        inner_2.className = "liquidGlass-tint_jos";
        inner_3.className = "liquidGlass-shine_jos"
        inner_3.setAttribute("data", payloadgiftkeys[index_ss]+"_"+"0") 
        inner.appendChild(inner_1);        
        inner.appendChild(inner_2);
        inner.appendChild(inner_3);    
        inner.appendChild(inner_4);
        outer.appendChild(inner);
        document.getElementById("allitemsbig_select_w").appendChild(outer);
        let wrapper_1 = document.createElement("div");
        wrapper_1.className="wrapper_gift_pricer_our";
        let wrapper_2 = document.createElement("div");
        wrapper_2.className="liquidGlass-wrapper_gift_pricer_our button_gift_pricer_our";
        let wrapper_3 = document.createElement("div");
        wrapper_3.className="liquidGlass-effect_gift_pricer_our";
        let wrapper_4 = document.createElement("div");
        wrapper_4.className="liquidGlass-tint_gift_pricer_our";
        let wrapper_5 = document.createElement("div");
        wrapper_5.className="liquidGlass-shine_gift_pricer_our";
        let wrapper_6 = document.createElement("img");
        wrapper_6.id = "toncoinmin";
        wrapper_6.className = 'toncoinminclass';
        wrapper_6.src = "ton_symbol 1.png";
        wrapper_2.id = "bblol_gift_pricer";
        wrapper_3.innerText = Number("0.00");
        wrapper_3.id = "ppliloma"
        wrapper_2.style.width = 35 + 4 * ("0.00".length - 3) + "px";
        wrapper_6.style.marginLeft = (Number(wrapper_2.style.width.slice(0, -2)) - 35) + 20 + "px";
        wrapper_2.appendChild(wrapper_6);
        wrapper_2.appendChild(wrapper_3);
        wrapper_2.appendChild(wrapper_4);
        wrapper_2.appendChild(wrapper_5);
        wrapper_1.appendChild(wrapper_2);
        outer.appendChild(wrapper_1);

    }

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
   setTimeout(() => {
        
    if (window.innerHeight < 758) {
        document.getElementById("iconsswitcher").style.position = "absolute";
         document.getElementById("iconsswitcher").style.removeProperty('bottom');
         document.getElementById("iconsswitcher").style.top = "679px";
    } else {
        document.getElementById("iconsswitcher").style.position = "fixed";
         document.getElementById("iconsswitcher").style.removeProperty('top');
         document.getElementById("iconsswitcher").style.bottom = "9px";
    };
}, 1000);
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
                document.getElementById("bluringforall").style.display = "block";

    const modal = document.getElementById("refactor_modal");
    modal.style.display = 'block';
    main.classList.remove('modal-hide');
    modal.classList.add('modal-show');
    })

    const line = document.getElementById('svapper')
    const main = document.getElementById("refactor_modal")
    line.addEventListener('mousedown', () => {
    document.getElementById("bluringforall").style.display = "none";

    main.classList.remove('modal-show');
    main.classList.add('modal-hide');
    setTimeout(() => {
        main.style.display = 'none';
    }, 500);
    })
    line.addEventListener('mouseup', () => {
    document.getElementById("bluringforall").style.display = "none";
    // Для ПК
    main.classList.remove('modal-show');
    main.classList.add('modal-hide');
    setTimeout(() => {
        main.style.display = 'none';
    }, 500);
    })
    line.addEventListener('touchmove', () => {
    document.getElementById("bluringforall").style.display = "none";
        main.classList.remove('modal-show');
        main.classList.add('modal-hide');
        setTimeout(() => {
            main.style.display = 'none';
        }, 500);
    })
    line.addEventListener('touchend', () => {
    document.getElementById("bluringforall").style.display = "none";
        main.classList.remove('modal-show');
        main.classList.add('modal-hide');
        setTimeout(() => {
        main.style.display = 'none';
        }, 500);
    })
    
    let invite_handler = document.getElementById("bblol_invite");
    invite_handler.addEventListener("click", (e) => {
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
     const response = await fetch('https://qw1kly-fastapitest-ca38.twc1.net/sellall', {
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
   
      let ccsz=0
    while (ccsz<10){
        const articles = document.getElementsByClassName("megaboxi");
        console.log(articles);
        for (let index_s = 0; index_s < articles.length; index_s++) {
            
                articles[index_s].remove();
                
                
            

        }
        ccsz+=1;
    }
    

    document.getElementById("refactor_modal_gift_all1").classList.remove('modal-showgift_all1');
    document.getElementById("refactor_modal_gift_all1").classList.add('modal-hidegift_all1');
    
    setTimeout(() => {
        document.getElementById("refactor_modal_gift_all1").style.display = "none";
    }, 500);
    setTimeout(() => {
        document.getElementById("bluringforall").style.display = "none";    
    }, 150);
})
document.getElementById("slider2_").addEventListener("click", (e) => {
    document.getElementById("refactor_modal_gift_all1").classList.remove('modal-showgift_all1');
    document.getElementById("refactor_modal_gift_all1").classList.add('modal-hidegift_all1');
    document.getElementById("bluringforall").style.display = "none";

    setTimeout(() => {
        document.getElementById("refactor_modal_gift_all1").style.display = "none";
    }, 500);
})


document.getElementById("wrapper_with").addEventListener("click", async function withid (e) {
    const response = await fetch('https://qw1kly-fastapitest-ca38.twc1.net/withdraw-gift', {
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

     let ccsz=0
    while (ccsz<10){
        const articles = document.getElementsByClassName("megaboxi");
        console.log(articles);
        for (let index_s = 0; index_s < articles.length; index_s++) {
            console.log(articles[index_s].getAttribute("data"))
            if (articles[index_s].data.split('_') == document.getElementById("currentgiftimg").data + ",$") {
                articles[index_s].remove();
                
                   }
                
            

        }
        ccsz+=1;
    }
    setTimeout(() => {
        document.getElementById("refactor_modal_gift").style.display = "none";
    }, 500);
    setTimeout(() => {
        document.getElementById("bluringforall").style.display = "none";    
    }, 150);
    
})



document.getElementById("profileiconbar").addEventListener("click", (e) =>  {
    document.getElementById("slotmachinea").style.color = "#FFFFFF";
    document.getElementById("slotmachine").src = "Slot Machine (2).png";
    document.getElementById("profilepic").src = "User (1).png";
    document.getElementById("profilea").style.color = "#22F3C9";
    document.getElementById("sapermachine").src = "Explosive.png";
    document.getElementById("sapermachinea").style.color = "#FFFFFF";
    document.getElementById("upgrademachine").src = "Upgrade.png";
    document.getElementById("upgrademachinea").style.color = "#FFFFFF";
    document.getElementById("profileicon").classList.add("active");
    document.getElementById("profileicon").style.display = "block";
    document.getElementById("roulleteicon").classList.remove("active");
    document.getElementById("roulleteicon").style.display='none';
    document.getElementById("upgradeicon").classList.remove("active");    
    document.getElementById("upgradeicon").style.display='none';
    
    
})

document.getElementById("roulleteiconbar").addEventListener("click", (e) =>  {
    document.getElementById("slotmachinea").style.color = "#22F3C9";
    document.getElementById("slotmachine").src = "Slot Machine (1).png";
    document.getElementById("profilepic").src = "User.png";
    document.getElementById("profilea").style.color = "#FFFFFF";
    document.getElementById("sapermachine").src = "Explosive.png";
    document.getElementById("sapermachinea").style.color = "#FFFFFF";
    document.getElementById("upgrademachine").src = "Upgrade.png";
    document.getElementById("upgrademachinea").style.color = "#FFFFFF";
    
    document.getElementById("roulleteicon").classList.add("active");
    document.getElementById("roulleteicon").style.display = "block";
    document.getElementById("profileicon").classList.remove("active");    
    document.getElementById("profileicon").style.display='none';
    document.getElementById("upgradeicon").classList.remove("active");    
    document.getElementById("upgradeicon").style.display='none';
    
})

document.getElementById("upgradeiconbar").addEventListener("click", (e) =>  {
    document.getElementById("slotmachinea").style.color = "#FFFFFF";
    document.getElementById("slotmachine").src = "Slot Machine (2).png";
    document.getElementById("profilepic").src = "User.png";
    document.getElementById("profilea").style.color = "#FFFFFF";
    document.getElementById("sapermachine").src = "Explosive.png";
    document.getElementById("sapermachinea").style.color = "#FFFFFF";
    document.getElementById("upgrademachine").src = "Upgrade (1).png";
    document.getElementById("upgrademachinea").style.color = "#22F3C9";
    
    document.getElementById("roulleteicon").classList.remove("active");
    document.getElementById("roulleteicon").style.display = "none";
    document.getElementById("profileicon").classList.remove("active");    
    document.getElementById("profileicon").style.display='none';
    document.getElementById("upgradeicon").classList.add("active");    
    document.getElementById("upgradeicon").style.display='block';
    
})

document.getElementById("svapper_1_select_w").addEventListener("click", (e)=> {

    document.getElementById("refactor_modal_gift_select_w").classList.remove("modal-showgift_select_w")
    document.getElementById("refactor_modal_gift_select_w").classList.add("modal-hidegift_select_w")
    document.getElementById("refactor_modal_gift_select_w").style.display = "block"
    setTimeout(() => {
        document.getElementById("refactor_modal_gift_select_w").style.display = "none"

    }, 500);
    setTimeout(() => {
        document.getElementById("bluringforall").style.display = "none";    
    }, 150);
});
document.getElementById("svapper_1_select").addEventListener("click", (e)=> {
    // document.getElementById("precentage").style.background = "conic-gradient(rgba(37, 208, 184, 0.71) 0.0% 30.92%, rgba(0,0,0,0) 0.92% 1.2%)";
    document.getElementById("refactor_modal_gift_select").classList.remove("modal-showgift_select")
    document.getElementById("refactor_modal_gift_select").classList.add("modal-hidegift_select")
    document.getElementById("refactor_modal_gift_select").style.display = "block"
    setTimeout(() => {
        document.getElementById("refactor_modal_gift_select").style.display = "none"

    }, 500);
    setTimeout(() => {
        document.getElementById("bluringforall").style.display = "none";    
    }, 150);
});

document.getElementById("refactor_your_item").addEventListener("click", (e)=> {
    if (e.target.getAttribute("data")) {
        return
    }
    // document.getElementById("precentage").style.background = "conic-gradient(rgba(37, 208, 184, 0.71) 0.0% 30.92%, rgba(0,0,0,0) 0.92% 1.2%)";
    
    document.getElementById("refactor_modal_gift_select").classList.remove("modal-hidegift_select")
    document.getElementById("refactor_modal_gift_select").classList.add("modal-showgift_select")
    document.getElementById("refactor_modal_gift_select").style.display = "block"
    document.getElementById("bluringforall").style.display = "block";

});



document.getElementById("refactor_our").addEventListener("click",(e)=> {
    if (e.target.getAttribute("data")) {
        return
    }

    document.getElementById("refactor_modal_gift_select_w").classList.remove("modal-hidegift_select_w")
    document.getElementById("refactor_modal_gift_select_w").classList.add("modal-showgift_select_w")
    document.getElementById("refactor_modal_gift_select_w").style.display = "block"
    document.getElementById("bluringforall").style.display = "block";
});

let current_gift = '';
let gift_price_ = '';
let times = 0;
let target_gift = '';
let new_price = 0;
let isSpinning = false;
let currentRotation = 0;

// Основная функция с получением градуса из бекенда
async function spinWheel(stopDegree) {
    if (isSpinning) return;
    
    isSpinning = true;
    const spinner = document.getElementById('wheelSpinner');
    
    try {
        // Получаем градус остановки из бекенда
        
        // Случайное количество полных оборотов перед остановкой
        const baseRotations = Math.floor(Math.random() * 4) + 4; // 4-7 оборотов
        const targetRotation = currentRotation + (360 * baseRotations) + stopDegree;
        
        const animation = spinner.animate([
            { 
                transform: `translateX(-50%) rotate(${currentRotation}deg)` 
            },
            { 
                transform: `translateX(-50%) rotate(${targetRotation}deg)` 
            }
        ], {
            duration: 6000,
            easing: 'cubic-bezier(0.3, 0, 0.1, 1)',
            fill: 'forwards'
        });
        
        currentRotation = targetRotation % 360;
        
        animation.onfinish = () => {
            isSpinning = false;
            spinner.style.transform = `translateX(-50%) rotate(${targetRotation}deg)`;
        };
        
    } catch (error) {
        isSpinning = false;
    }
}

document.getElementById("refactor_upgrade").addEventListener('click', async function llsa()  {
    
    if (!current_gift || !target_gift) {
        document.getElementById("refactor_upgrade").classList.add("shakenotselected");
        setTimeout(() => {
        document.getElementById("refactor_upgrade").classList.remove("shakenotselected");
        }, 500);
    } else {
        
        document.getElementById("refactor_our").setAttribute('disabled', true)
    document.getElementById("refactor_your_item").setAttribute('disabled', true)
        let ccsz = 0;
        giftCounter -= 1;
        document.getElementById("emojicount").innerText = "Gifts: "+giftCounter;
        while (ccsz<10){
        const articles = document.getElementsByClassName("megaboxi");
        console.log(articles);
        for (let index_s = 0; index_s < articles.length; index_s++) {
            console.log(articles[index_s].getAttribute("data"))
            if (articles[index_s].data == document.getElementById("plusitem").getAttribute("data") + "_$") {
                articles[index_s].remove();
                    
                   }

                
            

        }
        ccsz+=1;
    }
        const response = await fetch('https://qw1kly-fastapitest-ca38.twc1.net/upgrade-gift', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Telegram-Init-Data': "query_id=AAGWAkobAAAAAJYCShvMPzxn&user=%7B%22id%22%3A457835158%2C%22first_name%22%3A%22.%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22fffZzzzap%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FzRrTopbSw7La8Fey17kZI8buAcHEkgBh6Zl4zu5DHRQ.svg%22%7D&auth_date=1757951606&signature=3VVvehY68hHi9Rs2SkKji_OwN1UNjor-qcpZFKJN-9_lyckpkoGUlBHSm2QhydNjDcIShGAZWudn3QtVKDHSBQ&hash=901c6d6d341b37037ffda335c6f4a7e5f95e1f87477409da98428d778aafcee2"
                    },
                    body: JSON.stringify({
            gift: {
                owner_id: "457835158",
                gift_name: current_gift,
                gift_price: gift_price_,
                timestamp: times,
            },
            new_gift: {
                new_gift: target_gift
            }
        }),
                });

                if (!response.ok) {
                    throw new Error('Server error');
                }

            const data = await response.json();
            if (data['message'] == "win"){
            giftCounter+=1
            document.getElementById("emojicount").innerText = "Gifts: "+giftCounter;
            let timik = data['timestamp'];
            let name_of_gift = target_gift;
            let price_of_gift = String(new_price);
            let timestamp = timik;
            let new_gift_rn = document.createElement("div");
            let new_gift_img = document.createElement("img");
            new_gift_img.id = "currentgiftinventory_img";
            new_gift_rn.className = "megaboxi"
            new_gift_img.data = name_of_gift+"_"+price_of_gift+"_"+timestamp;
            new_gift_rn.data = name_of_gift+"_"+price_of_gift+"_"+timestamp+"_"+"$";
            new_gift_img.width = '85';
            new_gift_img.height  = '78';
            new_gift_img.src = payloadgifts[name_of_gift][1];
            
            new_gift_rn.id = "currentgiftinventory";
            
            let wrapper_1 = document.createElement("div");
            wrapper_1.className="wrapper_gift_pricer";
            let wrapper_2 = document.createElement("div");
            wrapper_2.className="liquidGlass-wrapper_gift_pricer button_gift_pricer";
            let wrapper_3 = document.createElement("div");
            wrapper_3.className="liquidGlass-effect_gift_pricer";
            let wrapper_4 = document.createElement("div");
            wrapper_4.className="liquidGlass-tint_gift_pricer";
            let wrapper_5 = document.createElement("div");
            wrapper_5.className="liquidGlass-shine_gift_pricer";
            let wrapper_6 = document.createElement("img");
            wrapper_6.id = "toncoinmin";
            wrapper_6.src = "ton_symbol 1.png";
            wrapper_2.id = "bblol_gift_pricer";
            wrapper_3.innerText = Number(price_of_gift);
            wrapper_2.style.width = 35 + 4 * (price_of_gift.length - 3) + "px";
            wrapper_6.style.marginLeft = (Number(wrapper_2.style.width.slice(0, -2)) - 35) + 20 + "px";
            wrapper_2.appendChild(wrapper_6);
            wrapper_2.appendChild(wrapper_3);
            wrapper_2.appendChild(wrapper_4);
            wrapper_2.appendChild(wrapper_5);
            wrapper_1.appendChild(wrapper_2);
            new_gift_rn.appendChild(new_gift_img);
            document.getElementById("allitems").appendChild(new_gift_rn);
            new_gift_rn.appendChild(wrapper_1)


            
            let new_gift_rn_big = document.createElement("div");
            let new_gift_img_big = document.createElement("img");
            new_gift_img_big.id = "currentgiftinventory_img";
            new_gift_rn_big.className = "megaboxi"
            new_gift_img_big.data = name_of_gift+"_"+price_of_gift+"_"+timestamp;
            new_gift_rn_big.data = name_of_gift+"_"+price_of_gift+"_"+timestamp+"_"+"$";
            new_gift_img_big.width = '85';
            new_gift_img_big.height  = '78';
            new_gift_img_big.src = payloadgifts[name_of_gift][1];
            
            new_gift_rn_big.id = "bigcurrentitem";

            let wrapper_11 = document.createElement("div");
            wrapper_11.className="wrapper_gift_pricer";
            let wrapper_22 = document.createElement("div");
            wrapper_22.className="liquidGlass-wrapper_gift_pricer button_gift_pricer";
            let wrapper_33 = document.createElement("div");
            wrapper_33.className="liquidGlass-effect_gift_pricer";
            let wrapper_44 = document.createElement("div");
            wrapper_44.className="liquidGlass-tint_gift_pricer";
            let wrapper_55 = document.createElement("div");
            wrapper_55.className="liquidGlass-shine_gift_pricer";
            let wrapper_66 = document.createElement("img");
            wrapper_66.id = "toncoinmin";
            wrapper_66.src = "ton_symbol 1.png";
            wrapper_22.id = "bblol_gift_pricer";
            wrapper_33.innerText = Number(price_of_gift);
            wrapper_22.style.width = 35 + 4 * (price_of_gift.length - 3) + "px";
            wrapper_66.style.marginLeft = (Number(wrapper_22.style.width.slice(0, -2)) - 35) + 20 + "px";
            wrapper_22.appendChild(wrapper_66);
            wrapper_22.appendChild(wrapper_33);
            wrapper_22.appendChild(wrapper_44);
            wrapper_22.appendChild(wrapper_55);
            wrapper_11.appendChild(wrapper_22);
            new_gift_rn_big.appendChild(new_gift_img_big);
            document.getElementById("allitemsbig").appendChild(new_gift_rn_big);
            new_gift_rn_big.appendChild(wrapper_11)
            let new_gift_rn_big_2 = document.createElement("div");
            new_gift_rn_big_2.id = "bigcurrentitem_2";
            new_gift_rn_big_2.className = "megaboxi";
            let new_gift_img_bigg = document.createElement("img");
            new_gift_img_bigg.id = "currentgiftinventory_img";
            new_gift_img_bigg.data = name_of_gift+"_"+price_of_gift+"_"+timestamp;
            new_gift_rn_big_2.data = name_of_gift+"_"+price_of_gift+"_"+timestamp+"_"+"$";
            new_gift_img_bigg.width = '85';
            new_gift_img_bigg.height  = '78';

            new_gift_img_bigg.src = payloadgifts[name_of_gift][1];
            new_gift_rn_big_2.appendChild(new_gift_img_bigg);

            document.getElementById("allitemsbig_select").appendChild(new_gift_rn_big_2);

            let wrapper_111 = document.createElement("div");
            wrapper_111.className="wrapper_gift_pricer";
            let wrapper_222 = document.createElement("div");
            wrapper_222.className="liquidGlass-wrapper_gift_pricer button_gift_pricer";
            let wrapper_333 = document.createElement("div");
            wrapper_333.className="liquidGlass-effect_gift_pricer";
            let wrapper_444 = document.createElement("div");
            wrapper_444.className="liquidGlass-tint_gift_pricer";
            let wrapper_555 = document.createElement("div");
            wrapper_555.className="liquidGlass-shine_gift_pricer";
            let wrapper_666 = document.createElement("img");
            wrapper_666.id = "toncoinmin";
            wrapper_666.src = "ton_symbol 1.png";
            wrapper_222.id = "bblol_gift_pricer";
            wrapper_333.innerText = Number(price_of_gift);
            wrapper_222.style.width = 35 + 4 * (price_of_gift.length - 3) + "px";
            wrapper_666.style.marginLeft = (Number(wrapper_222.style.width.slice(0, -2)) - 35) + 20 + "px";
            wrapper_222.appendChild(wrapper_666);
            wrapper_222.appendChild(wrapper_333);
            wrapper_222.appendChild(wrapper_444);
            wrapper_222.appendChild(wrapper_555);
            wrapper_111.appendChild(wrapper_222);
            new_gift_rn_big_2.appendChild(wrapper_111);
            }
        spinWheel(data['result']);
        setTimeout(() => {
            document.getElementById("refactor_our").setAttribute('disabled', false)
            document.getElementById("refactor_your_item").setAttribute('disabled', false)
            current_gift = '';
            gift_price_ = '';
            times = 0;
            target_gift = '';
            new_price = 0;
            document.getElementById("plusitem_2").src = "Plus Math (1).png";
            document.getElementById("plusitem_2").style.width = '59px';
            document.getElementById("plusitem_2").style.height = '59px';
            document.getElementById("plusitem_2").style.marginLeft = '48px';
            document.getElementById("plusitem_2").style.marginTop = '24px';
            document.getElementById("plusitem_2").removeAttribute("data");

            document.getElementById("selyouritem_2").style.display='block';
            document.getElementById("corsera_2").style.display='none';
            document.getElementById("plusitem").src = "Plus Math (1).png";
            document.getElementById("plusitem").style.width = '59px';
            document.getElementById("plusitem").style.height = '59px';
            document.getElementById("plusitem").style.marginLeft = '48px';
            document.getElementById("plusitem").style.marginTop = '24px';
            document.getElementById("plusitem").removeAttribute("data");

            document.getElementById("selyouritem").style.display='block';
            document.getElementById("corsera").style.display='none';
        }, 6000);

    }
})

document.getElementById("allitemsbig_select_w").addEventListener('click', (e) => {
    if (e.target.className == "liquidGlass-shine_jos"){
    let giftInfo = e.target.getAttribute("data").split("_");
    new_price = Number(giftInfo[1].length == 3 ? giftInfo[1]+"0" : giftInfo[1]);
    if (!gift_price_ || gift_price_ > new_price) {
        e.target.offsetParent.classList.add("something-went-wrong");
        setTimeout(() => {
        e.target.offsetParent.classList.remove("something-went-wrong");
        }, 500);
    } else {
       target_gift = giftInfo[0];
       let prcs = (gift_price_ / new_price) * 100 < 75 ? (gift_price_ / new_price) * 100 : 75
       document.getElementById('precentage').style.setProperty('--target-percentage', prcs + '%');
       document.getElementById('precentage').classList.add("husesos");
       setTimeout(() => {
       document.getElementById('precentage').classList.remove("husesos");
       let prsc = (gift_price_ / new_price) * 100 < 75 ? (gift_price_ / new_price) * 100 : 75;
       document.getElementById("precentage").style.background = "conic-gradient(rgba(37, 208, 184, 0.71) 0.0% "+ prsc +"%, rgba(0,0,0,0) 0.92% 1.2%)";

    }, 1000);

    document.getElementById("plusitem_2").src = payloadgifts[giftInfo[0]][1];
    document.getElementById("plusitem_2").style.width = '100px';
    document.getElementById("plusitem_2").style.height = '100px';
    document.getElementById("plusitem_2").style.marginLeft = '26px';
    document.getElementById("plusitem_2").style.marginTop = '4px';
    document.getElementById("plusitem_2").setAttribute("data", target_gift+"_"+giftInfo[1]+"_"+giftInfo[2]);

    document.getElementById("selyouritem_2").style.display='none';
    document.getElementById("corsera_2").style.display='block';
    document.getElementById("giftprice_2").innerText = giftInfo[1].length == 3 ? giftInfo[1]+"0" : giftInfo[1];
    document.getElementById("giftname_2").innerText = payloadgifts[giftInfo[0]][0];
    document.getElementById("refactor_modal_gift_select_w").classList.remove("modal-showgift_select_w")
    document.getElementById("refactor_modal_gift_select_w").classList.add("modal-hidegift_select_w")
    document.getElementById("refactor_modal_gift_select_w").style.display = "block"
    setTimeout(() => {
        document.getElementById("refactor_modal_gift_select_w").style.display = "none"
    }, 500);
    setTimeout(() => {
        document.getElementById("bluringforall").style.display = "none";    
    }, 150);
    }
}
})

document.getElementById("allitemsbig_select").addEventListener('click', (e) => {
    if (e.target.id === "currentgiftinventory" || 
        e.target.id === "currentgiftinventory_img" ) {
        
    let giftInfo = e.target.data.split("_");
    current_gift = giftInfo[0];
    gift_price_ =  Number(giftInfo[1])
    times = Number(giftInfo[2]);
    if (target_gift) {
        let prcs = (gift_price_ / new_price) * 100 < 75 ? (gift_price_ / new_price) * 100 : 75
        document.getElementById('precentage').style.setProperty('--target-percentage', prcs + '%');
       document.getElementById('precentage').classList.add("husesos");
       setTimeout(() => {
       document.getElementById('precentage').classList.remove("husesos");
       let prcs = (gift_price_ / new_price) * 100 < 75 ? (gift_price_ / new_price) * 100 : 75
       document.getElementById("precentage").style.background = "conic-gradient(rgba(37, 208, 184, 0.71) 0.0% "+ prcs +"%, rgba(0,0,0,0) 0.92% 1.2%)";

    }, 1000);
    }
    document.getElementById("plusitem").src = payloadgifts[giftInfo[0]][1];
    document.getElementById("plusitem").style.width = '100px';
    document.getElementById("plusitem").style.height = '100px';
    document.getElementById("plusitem").style.marginLeft = '26px';
    document.getElementById("plusitem").style.marginTop = '4px';
    document.getElementById("plusitem").setAttribute("data", current_gift+"_"+giftInfo[1]+"_"+giftInfo[2]);
    document.getElementById("selyouritem").style.display='none';
    document.getElementById("corsera").style.display='block';
    document.getElementById("giftprice").innerText = giftInfo[1];
    document.getElementById("giftname").innerText = payloadgifts[giftInfo[0]][0];
    document.getElementById("refactor_modal_gift_select").classList.remove("modal-showgift_select")
    document.getElementById("refactor_modal_gift_select").classList.add("modal-hidegift_select")
    document.getElementById("refactor_modal_gift_select").style.display = "block"
    setTimeout(() => {
        document.getElementById("refactor_modal_gift_select").style.display = "none"
    }, 500);
    setTimeout(() => {
        document.getElementById("bluringforall").style.display = "none";    
    }, 150);
}
});

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
    document.getElementById("bluringforall").style.display = "block";

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
    bito = String(Math.round(bito * 100) / 100);
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
    const response = await fetch('https://qw1kly-fastapitest-ca38.twc1.net/sellgift', {
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
    

      let ccsz=0
    while (ccsz<10){
        const articles = document.getElementsByClassName("megaboxi");
        console.log(articles);
        for (let index_s = 0; index_s < articles.length; index_s++) {
            console.log(articles[index_s].getAttribute("data"))
            if (articles[index_s].data.split('_') == document.getElementById("currentgiftimg").data + ",$") {
                articles[index_s].remove();
                
                   }
                
            

        }
        ccsz+=1;
    }
    setTimeout(() => {
        document.getElementById("refactor_modal_gift").style.display = "none";
    }, 500);
    setTimeout(() => {
        document.getElementById("bluringforall").style.display = "none";    
    }, 150);
})

document.getElementById("wrapper_all").addEventListener("click", (e) => {
    document.getElementById("refactor_modal_gift_inventory").style.display = "block";
    document.getElementById("refactor_modal_gift_inventory").classList.remove('modal-hidegift_inventory');
    document.getElementById("refactor_modal_gift_inventory").classList.add('modal-showgift_inventory');
    document.getElementById("refactor_modal_gift_all1").classList.remove('modal-showgift_all1');
    document.getElementById("refactor_modal_gift_all1").classList.add('modal-hidegift_all1');
        document.getElementById("bluringforall").style.display = "block";

    document.getElementById("refactor_settings_modal").classList.remove("settings_modal-show");
    document.getElementById("refactor_settings_modal").classList.add("settings_modal-hide");
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
        document.getElementById("bluringforall").style.display = "none";

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
    
    document.getElementById("refactor_settings_modal").classList.remove("settings_modal-show");
    document.getElementById("refactor_settings_modal").classList.add("settings_modal-hide");
    let main = document.getElementById("refactor_modal")
    let current_gift = document.getElementById("refactor_modal_gift");
    main.classList.remove('modal-show');
    main.classList.add('modal-hide');
        document.getElementById("bluringforall").style.display = "block";

        document.getElementById("refactor_modal_gift").style.display = "block";
        document.getElementById("refactor_modal_gift").classList.remove('modal-hidegift');
        document.getElementById("refactor_modal_gift").classList.add('modal-showgift');
        document.getElementById("currentgiftimg").src = payloadgifts[giftInfo[0]][1];
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
        document.getElementById("bluringforall").style.display = "block";

    document.getElementById("refactor_settings_modal").classList.remove("settings_modal-show");
    document.getElementById("refactor_settings_modal").classList.add("settings_modal-hide");
        document.getElementById("refactor_modal_gift").style.display = "block";
        document.getElementById("refactor_modal_gift").classList.remove('modal-hidegift');
        document.getElementById("refactor_modal_gift").classList.add('modal-showgift');
        document.getElementById("currentgiftimg").src = payloadgifts[giftInfo[0]][1];
        document.getElementById("currentgiftimg").data = giftInfo;
        document.getElementById("giftginger").innerText = Number(giftInfo[1]);
        document.getElementById("bblol_gift_pricer_1").style.width = 109 + 6 * (giftInfo[1].length - 5) + "px";
        document.getElementById("toncoinbig").style.marginLeft = (Number(document.getElementById("bblol_gift_pricer_1").style.width.slice(0, -2)) - 109) + 32 + "px";
        document.getElementById("refactor_modal_gift").data = giftInfo;
    
     setTimeout(() => {
        document.getElementById("refactor_modal_gift_inventory").style.display = "none";
        document.getElementById("refactor_settings_modal").style.display = "none";
        document.getElementById("refactor_modal_gift_all1").style.display = "none";
        document.getElementById("refactor_modal").style.display = "none";

    }, 500);
}
});

document.getElementById("svapper_1").addEventListener('click', (e) => {

        document.getElementById("refactor_modal_gift").classList.remove('modal-showgift');
        document.getElementById("refactor_modal_gift").classList.add('modal-hidegift');
        document.getElementById("bluringforall").style.display = "none";


        setTimeout(() => {
                    document.getElementById("refactor_modal_gift").style.display = "none";

        }, 500);
});

document.getElementById("bluringforall").addEventListener("click", (e)=>{

    document.getElementById("refactor_modal_gift_select").classList.remove("modal-showgift_select")
    document.getElementById("refactor_modal_gift_select").classList.add("modal-hidegift_select")
    document.getElementById("refactor_modal_gift_select_w").classList.remove("modal-showgift_select_w")
    document.getElementById("refactor_modal_gift_select_w").classList.add("modal-hidegift_select_w")

    document.getElementById("refactor_settings_modal").classList.remove("settings_modal-show");
    document.getElementById("refactor_settings_modal").classList.add("settings_modal-hide");
    document.getElementById("refactor_modal_gift_inventory").classList.remove('modal-showgift_inventory');
    document.getElementById("refactor_modal_gift_inventory").classList.add('modal-hidegift_inventory');
    document.getElementById("refactor_modal_gift_all1").classList.remove('modal-showgift_all1');
    document.getElementById("refactor_modal_gift_all1").classList.add('modal-hidegift_all1');
    document.getElementById("refactor_modal").classList.remove('modal-show');
    document.getElementById("refactor_modal").classList.add('modal-hide');
    document.getElementById("refactor_modal_gift").classList.remove('modal-showgift');
    document.getElementById("refactor_modal_gift").classList.add('modal-hidegift');
    setTimeout(() => {
        document.getElementById("bluringforall").style.display = "none";    
    }, 150);
    setTimeout(() => {
    document.getElementById("refactor_modal").style.display = 'none';
    document.getElementById("refactor_settings_modal").style.display = 'none';
    document.getElementById("refactor_modal_gift_inventory").style.display = 'none';
    document.getElementById("refactor_modal_gift_all1").style.display = 'none';
    document.getElementById("refactor_modal_gift").style.display = 'none';
    document.getElementById("refactor_modal_gift_select").style.display = 'none';
    document.getElementById("refactor_modal_gift_select_w").style.display = 'none';

        }, 500);
});

document.getElementById("refactor").addEventListener("click", (e)=>{
    document.getElementById("refactor_settings_modal").style.display = "block";

    document.getElementById("refactor_settings_modal").classList.remove("settings_modal-hide");
    document.getElementById("refactor_settings_modal").classList.add("settings_modal-show");
    document.getElementById("bluringforall").style.display = "block";

    
    document.getElementById("refactor_modal_gift_inventory").classList.remove('modal-showgift_inventory');
    document.getElementById("refactor_modal_gift_inventory").classList.add('modal-hidegift_inventory');
    document.getElementById("refactor_modal_gift_all1").classList.remove('modal-showgift_all1');
    document.getElementById("refactor_modal_gift_all1").classList.add('modal-hidegift_all1');
    document.getElementById("refactor_modal").classList.remove('modal-show');
    document.getElementById("refactor_modal").classList.add('modal-hide');
    document.getElementById("refactor_modal_gift").classList.remove('modal-showgift');
    document.getElementById("refactor_modal_gift").classList.add('modal-hidegift');


});
document.getElementById("slidersettings").addEventListener("click", (e)=>{
    document.getElementById("refactor_settings_modal").classList.remove("settings_modal-show");
    document.getElementById("refactor_settings_modal").classList.add("settings_modal-hide");
    setTimeout(() => {
    document.getElementById("refactor_settings_modal").style.display = "none";
        }, 500);
    document.getElementById("bluringforall").style.display = "none";

})
async function authe() {
const response = await fetch('https://qw1kly-fastapitest-ca38.twc1.net/auth', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'X-Telegram-Init-Data': "query_id=AAGWAkobAAAAAJYCShvMPzxn&user=%7B%22id%22%3A457835158%2C%22first_name%22%3A%22.%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22fffZzzzap%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FzRrTopbSw7La8Fey17kZI8buAcHEkgBh6Zl4zu5DHRQ.svg%22%7D&auth_date=1757951606&signature=3VVvehY68hHi9Rs2SkKji_OwN1UNjor-qcpZFKJN-9_lyckpkoGUlBHSm2QhydNjDcIShGAZWudn3QtVKDHSBQ&hash=901c6d6d341b37037ffda335c6f4a7e5f95e1f87477409da98428d778aafcee2"

        },
    });

    if (!response.ok) {
        console.log('error');

    }
    try {
        const msg = await response.json();

        let photo_url = msg[0][2];
        let nickname = msg[0][1];
        let balance = msg[1];
        
        document.getElementById("profilepicture").src = photo_url;
        if (nickname.length > 18) {
            document.getElementById("nickname").innerText = nickname.slice(0, 15)+"...";
        } else {
            document.getElementById("nickname").innerText = nickname;
        }
        document.getElementById("liquidGlass-effect").innerText = Number(balance);
        document.getElementById("bblol").style.width = 65 + 6 * (balance.length - 2) + "px";
        document.getElementById("toncoinsym").style.marginLeft = (Number(document.getElementById("bblol").style.width.slice(0, -2)) - 65) + 41 + "px";
        
        const all_items = msg[2];
        giftCounter = all_items.length;
        document.getElementById("emojicount").innerText = "Gifts: " + all_items.length
        for (let index_s = 0; index_s < all_items.length; index_s++) {
            let name_of_gift = all_items[index_s][1];
            let price_of_gift = all_items[index_s][0];
            let timestamp = all_items[index_s][2];
            let new_gift_rn = document.createElement("div");
            let new_gift_img = document.createElement("img");
            new_gift_img.id = "currentgiftinventory_img";
            new_gift_rn.className = "megaboxi"
            new_gift_img.data = name_of_gift+"_"+price_of_gift+"_"+timestamp;
            new_gift_rn.data = name_of_gift+"_"+price_of_gift+"_"+timestamp+"_"+"$";
            new_gift_img.width = '85';
            new_gift_img.height  = '78';
            new_gift_img.src = payloadgifts[name_of_gift][1];
            
            new_gift_rn.id = "currentgiftinventory";
            
            let wrapper_1 = document.createElement("div");
            wrapper_1.className="wrapper_gift_pricer";
            let wrapper_2 = document.createElement("div");
            wrapper_2.className="liquidGlass-wrapper_gift_pricer button_gift_pricer";
            let wrapper_3 = document.createElement("div");
            wrapper_3.className="liquidGlass-effect_gift_pricer";
            let wrapper_4 = document.createElement("div");
            wrapper_4.className="liquidGlass-tint_gift_pricer";
            let wrapper_5 = document.createElement("div");
            wrapper_5.className="liquidGlass-shine_gift_pricer";
            let wrapper_6 = document.createElement("img");
            wrapper_6.id = "toncoinmin";
            wrapper_6.src = "ton_symbol 1.png";
            wrapper_2.id = "bblol_gift_pricer";
            wrapper_3.innerText = Number(price_of_gift);
            wrapper_2.style.width = 35 + 4 * (price_of_gift.length - 3) + "px";
            wrapper_6.style.marginLeft = (Number(wrapper_2.style.width.slice(0, -2)) - 35) + 20 + "px";
            wrapper_2.appendChild(wrapper_6);
            wrapper_2.appendChild(wrapper_3);
            wrapper_2.appendChild(wrapper_4);
            wrapper_2.appendChild(wrapper_5);
            wrapper_1.appendChild(wrapper_2);
            new_gift_rn.appendChild(new_gift_img);
            document.getElementById("allitems").appendChild(new_gift_rn);
            new_gift_rn.appendChild(wrapper_1)


            
            let new_gift_rn_big = document.createElement("div");
            let new_gift_img_big = document.createElement("img");
            new_gift_img_big.id = "currentgiftinventory_img";
            new_gift_rn_big.className = "megaboxi"
            new_gift_img_big.data = name_of_gift+"_"+price_of_gift+"_"+timestamp;
            new_gift_rn_big.data = name_of_gift+"_"+price_of_gift+"_"+timestamp+"_"+"$";
            new_gift_img_big.width = '85';
            new_gift_img_big.height  = '78';
            new_gift_img_big.src = payloadgifts[name_of_gift][1];
            
            new_gift_rn_big.id = "bigcurrentitem";

            let wrapper_11 = document.createElement("div");
            wrapper_11.className="wrapper_gift_pricer";
            let wrapper_22 = document.createElement("div");
            wrapper_22.className="liquidGlass-wrapper_gift_pricer button_gift_pricer";
            let wrapper_33 = document.createElement("div");
            wrapper_33.className="liquidGlass-effect_gift_pricer";
            let wrapper_44 = document.createElement("div");
            wrapper_44.className="liquidGlass-tint_gift_pricer";
            let wrapper_55 = document.createElement("div");
            wrapper_55.className="liquidGlass-shine_gift_pricer";
            let wrapper_66 = document.createElement("img");
            wrapper_66.id = "toncoinmin";
            wrapper_66.src = "ton_symbol 1.png";
            wrapper_22.id = "bblol_gift_pricer";
            wrapper_33.innerText = Number(price_of_gift);
            wrapper_22.style.width = 35 + 4 * (price_of_gift.length - 3) + "px";
            wrapper_66.style.marginLeft = (Number(wrapper_22.style.width.slice(0, -2)) - 35) + 20 + "px";
            wrapper_22.appendChild(wrapper_66);
            wrapper_22.appendChild(wrapper_33);
            wrapper_22.appendChild(wrapper_44);
            wrapper_22.appendChild(wrapper_55);
            wrapper_11.appendChild(wrapper_22);
            new_gift_rn_big.appendChild(new_gift_img_big);
            document.getElementById("allitemsbig").appendChild(new_gift_rn_big);
            new_gift_rn_big.appendChild(wrapper_11)
            let new_gift_rn_big_2 = document.createElement("div");
            new_gift_rn_big_2.id = "bigcurrentitem_2";
            new_gift_rn_big_2.className = "megaboxi";
            let new_gift_img_bigg = document.createElement("img");
            new_gift_img_bigg.id = "currentgiftinventory_img";
            new_gift_img_bigg.data = name_of_gift+"_"+price_of_gift+"_"+timestamp;
            new_gift_rn_big_2.data = name_of_gift+"_"+price_of_gift+"_"+timestamp+"_"+"$";
            new_gift_img_bigg.width = '85';
            new_gift_img_bigg.height  = '78';

            new_gift_img_bigg.src = payloadgifts[name_of_gift][1];
            new_gift_rn_big_2.appendChild(new_gift_img_bigg);

            document.getElementById("allitemsbig_select").appendChild(new_gift_rn_big_2);

            let wrapper_111 = document.createElement("div");
            wrapper_111.className="wrapper_gift_pricer";
            let wrapper_222 = document.createElement("div");
            wrapper_222.className="liquidGlass-wrapper_gift_pricer button_gift_pricer";
            let wrapper_333 = document.createElement("div");
            wrapper_333.className="liquidGlass-effect_gift_pricer";
            let wrapper_444 = document.createElement("div");
            wrapper_444.className="liquidGlass-tint_gift_pricer";
            let wrapper_555 = document.createElement("div");
            wrapper_555.className="liquidGlass-shine_gift_pricer";
            let wrapper_666 = document.createElement("img");
            wrapper_666.id = "toncoinmin";
            wrapper_666.src = "ton_symbol 1.png";
            wrapper_222.id = "bblol_gift_pricer";
            wrapper_333.innerText = Number(price_of_gift);
            wrapper_222.style.width = 35 + 4 * (price_of_gift.length - 3) + "px";
            wrapper_666.style.marginLeft = (Number(wrapper_222.style.width.slice(0, -2)) - 35) + 20 + "px";
            wrapper_222.appendChild(wrapper_666);
            wrapper_222.appendChild(wrapper_333);
            wrapper_222.appendChild(wrapper_444);
            wrapper_222.appendChild(wrapper_555);
            wrapper_111.appendChild(wrapper_222);
            new_gift_rn_big_2.appendChild(wrapper_111);
        }

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
        col.style.animationDuration = !fast_spin ? duration + "s" : "0.9s";
        wh_col+=1
    }


    document.getElementById('container').classList.add('spinning');

    window.setTimeout(await setResult(data[0], data[1]), !fast_spin ? BASE_SPINNING_DURATION * 1000 / 2: 1500);
    
  
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
    }.bind(elem), !fast_spin ? duration * 1000 : 1500);
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
    });








let payloadgifts = {
    "plushpepe":[
        "Plush Pepe",
        "https://static.tildacdn.one/tild3735-3535-4230-a535-386234383163/GiftsGiftsGifts_AgAD.png"
    ],
    "heroichelmet":[
        "Heroic Helmet",
        "https://static.tildacdn.one/tild6363-3662-4862-b839-623164653166/GiftsGiftsGifts_AgAD.png"
    ],
    "mightyarm":[
        "Mighty Arm",
        "https://static.tildacdn.one/tild6562-3562-4434-b539-306534383366/GiftsGiftsGifts_AgAD.png"
    ],
    "iongem":[
        "Ion Gem",
        "https://static.tildacdn.one/tild3861-3531-4736-a135-643061633061/GiftsGiftsGifts_AgAD.png"
    ],
    "durovscap":[
        "Durov's Cap",
        "https://static.tildacdn.one/tild3066-6466-4138-b232-383264393734/GiftsGiftsGifts_AgAD.png"
    ],
    "nailbracelet":[
        "Nail Bracelet",
        "https://static.tildacdn.one/tild3363-6263-4537-a165-666133323161/GiftsGiftsGifts_AgAD.png"
    ],
    "perfumebottle":[
        "Perfume Bottle",
        "https://static.tildacdn.one/tild3539-3538-4536-b838-653734636265/GiftsGiftsGifts_AgAD.png"
    ],
    "magicpotion":[
        "Magic Potion",
        "https://static.tildacdn.one/tild3639-6433-4963-b863-616462666138/GiftsGiftsGifts_AgAD.png"
    ],
    "minioscar":[
        "Mini Oscar",
        "https://static.tildacdn.one/tild6339-3531-4336-b664-613934376338/GiftsGiftsGifts_AgAD.png"
    ],
    "astralshard":[
        "Astral Shard",
        "https://static.tildacdn.one/tild6338-3934-4764-b563-666531663930/GiftsGiftsGifts_AgAD.png"
    ],
    "artisanbrick":[
        "Artisan Brick",
        "https://static.tildacdn.one/tild3233-6233-4538-a135-393630636338/GiftsGiftsGifts_AgAD.png"
    ],
    "gemsignet":[
        "Gem Signet",
        "https://static.tildacdn.one/tild3433-3633-4966-b939-316630303436/GiftsGiftsGifts_AgAD.png"
    ],
    "sharptongue":[
        "Sharp Tongue",
        "https://static.tildacdn.one/tild3562-3431-4234-b662-396634343132/GiftsGiftsGifts_AgAD.png"
    ],
    "moonpendant":[
        "Moon Pendant",
        "https://static.tildacdn.one/tild3565-3139-4231-a135-336633326233/GiftsGiftsGifts_AgAD.png"
    ],
    "lunarsnake":[
        "Lunar Snake",
        "https://static.tildacdn.one/tild6666-6531-4135-a337-633064653838/GiftsGiftsGifts_AgAD.png"
    ],
    "holidaydrink":[
        "Holiday Drink",
        "https://static.tildacdn.one/tild3830-3932-4865-b233-663130653030/GiftsGiftsGifts_AgAD.png"
    ],
    "recordplayer":[
        "Record Player",
        "https://static.tildacdn.one/tild3130-3038-4637-b662-306636343966/GiftsGiftsGifts_AgAD.png"
    ],
    "joyfulbundle":[
        "Joyful Bundle",
        "https://static.tildacdn.one/tild3635-3161-4564-b237-613034376462/GiftsGiftsGifts_AgAD.png"
    ],
    "restlessjar":[
        "Restless Jar",
        "https://static.tildacdn.one/tild6435-3963-4466-b065-356566373137/GiftsGiftsGifts_AgAD.png"
    ],
    "bigyear":[
        "Big Year",
        "https://static.tildacdn.one/tild3065-3362-4930-a464-656261383831/GiftsGiftsGifts_AgAD.png"
    ],
    "lightsword":[
        "Light Sword",
        "https://static.tildacdn.one/tild3762-3632-4136-a564-626631346639/GiftsGiftsGifts_AgAD.png"
    ],
    "jinglebells":[
        "Jingle Bells",
        "https://static.tildacdn.one/tild6464-3964-4538-b161-636634646365/GiftsGiftsGifts_AgAD.png"
    ],
    "eternalcandle":[
        "Eternal Candle",
        "https://static.tildacdn.one/tild6531-3965-4264-b630-346634613832/GiftsGiftsGifts_AgAD.png"
    ],
    "skullflower":[
        "Skull Flower",
        "https://static.tildacdn.one/tild6137-6134-4433-b438-313931326536/GiftsGiftsGifts_AgAD.png"
    ],
    "sakuraflower":[
        "Sakura Flower",
        "https://static.tildacdn.one/tild3931-3264-4962-b064-366432653530/GiftsGiftsGifts_AgAD.png"
    ],
    "jellybunny":[
        "Jelly Bunny",
        "https://static.tildacdn.one/tild3466-3831-4662-b333-373261663966/GiftsGiftsGifts_AgAD.png"
    ],
    "cupidcharm":[
        "Cupid Charm",
        "https://static.tildacdn.one/tild6264-3432-4861-b035-356634336536/GiftsGiftsGifts_AgAD.png"
    ],
    "hangingstar":[
        "Hanging Star",
        "https://static.tildacdn.one/tild3464-3733-4466-b331-363161356265/GiftsGiftsGifts_AgAD.png"
    ],
    "easteregg":[
        "Easter Egg",
        "https://static.tildacdn.one/tild6336-3532-4539-a238-316338303433/GiftsGiftsGifts_AgAD.png"
    ],
    "spyagaric":[
        "Spy Agaric",
        "https://static.tildacdn.one/tild3831-6337-4839-b037-383432383562/GiftsGiftsGifts_AgAD.png"
    ],
    "homemadecake":[
        "Homemade Cake",
        "https://static.tildacdn.one/tild6439-6232-4264-b865-663631633965/GiftsGiftsGifts_AgAD.png"
    ],
    "snowglobe":[
        "Snow Globe",
        "https://static.tildacdn.one/tild3963-3164-4733-a164-653238386432/GiftsGiftsGifts_AgAD.png"
    ],
    "xmasstocking":[
        "Xmas Stocking",
        "https://static.tildacdn.one/tild6463-3431-4631-b133-623161393966/GiftsGiftsGifts_AgAD.png"
    ],
    "bdaycandle":[
        "B-Day Candle",
        "https://static.tildacdn.one/tild3032-6430-4164-b537-366532656133/GiftsGiftsGifts_AgAD.png"
    ],
    "candycane":[
        "Candy Cane",
        "https://static.tildacdn.one/tild6164-6261-4235-b161-626330343464/GiftsGiftsGifts_AgAD.png"
    ],
    "lushbouquet":[
        "Lush Bouquet",
        "https://static.tildacdn.one/tild3731-3163-4334-a635-306631353932/GiftsGiftsGifts_AgAD.png"
    ],
    "tophat":[
        "Top Hat",
        "https://static.tildacdn.one/tild6335-3361-4539-b338-663339373764/GiftsGiftsGifts_AgAD.png"
    ],
    "scaredcat":[
        "Scared Cat",
        "https://static.tildacdn.one/tild3866-3561-4331-a630-616162623334/GiftsGiftsGifts_AgAD.png"
    ],
    "spicedwine":[
        "Spiced Wine",
        "https://static.tildacdn.one/tild3636-6565-4530-a366-626237313934/GiftsGiftsGifts_AgAD.png"
    ],
    "evileye":[
        "Evil Eye",
        "https://static.tildacdn.one/tild3863-3637-4930-a430-356535666231/GiftsGiftsGifts_AgAD.png"
    ],
    "ionicdryer":[
        "Ionic Dryer",
        "https://static.tildacdn.one/tild3033-6264-4531-a133-393664323063/GiftsGiftsGifts_AgAD.png"
    ],
    "gingercookie":[
        "Ginger Cookie",
        "https://static.tildacdn.one/tild6432-6264-4534-b634-666634396138/GiftsGiftsGifts_AgAD.png"
    ],
    "hexpot":[
        "Hex Pot",
        "https://static.tildacdn.one/tild6434-3835-4262-b235-616234303939/GiftsGiftsGifts_AgAD.png"
    ],
    "stellarrocket":[
        "Stellar Rocket",
        "https://static.tildacdn.one/tild3538-6633-4964-b061-623865663638/GiftsGiftsGifts_AgAD.png"
    ],
    "trappedheart":[
        "Trapped Heart",
        "https://static.tildacdn.one/tild6264-3133-4534-b134-356662646463/GiftsGiftsGifts_AgAD.png"
    ],
    "snakebox":[
        "Snake Box",
        "https://static.tildacdn.one/tild3835-3334-4264-a466-633837386266/GiftsGiftsGifts_AgAD.png"
    ],
    "lootbag":[
        "Loot Bag",
        "https://static.tildacdn.one/tild6663-3139-4235-a230-333637343233/GiftsGiftsGifts_AgAD.png"
    ],
    "electricskull":[
        "Electric Skull",
        "https://static.tildacdn.one/tild3665-3938-4463-b065-313535616464/GiftsGiftsGifts_AgAD.png"
    ],
    "lovecandle":[
        "Love Candle",
        "https://static.tildacdn.one/tild3961-3437-4666-b432-666333333162/GiftsGiftsGifts_AgAD.png"
    ],
    "jackinthebox":[
        "Jack-in-the-Box",
        "https://static.tildacdn.one/tild3331-3031-4565-b465-613832396338/GiftsGiftsGifts_AgAD.png"
    ],
    "witchhat":[
        "Witch Hat",
        "https://static.tildacdn.one/tild3637-6437-4533-b539-666132356165/GiftsGiftsGifts_AgAD.png"
    ],
    "lovepotion":[
        "Love Potion",
        "https://static.tildacdn.one/tild6437-3735-4366-b138-353133346331/GiftsGiftsGifts_AgAD.png"
    ],
    "kissedfrog":[
        "Kissed Frog",
        "https://static.tildacdn.one/tild6138-6163-4437-a665-616630363139/GiftsGiftsGifts_AgAD.png"
    ],
    "diamondring":[
        "Diamond Ring",
        "https://static.tildacdn.one/tild3864-3763-4234-b964-373932633839/GiftsGiftsGifts_AgAD.png"
    ],
    "nekohelmet":[
        "Neko Helmet",
        "https://static.tildacdn.one/tild3565-6262-4036-b531-373666343366/GiftsGiftsGifts_AgAD.png"
    ],
    "petsnake":[
        "Pet Snake",
        "https://static.tildacdn.one/tild3761-6632-4434-b232-303531313738/GiftsGiftsGifts_AgAD.png"
    ],
    "jesterhat":[
        "Jester Hat",
        "https://static.tildacdn.one/tild3739-3662-4565-b665-383435313538/GiftsGiftsGifts_AgAD.png"
    ],
    "flyingbroom":[
        "Flying Broom",
        "https://static.tildacdn.one/tild3234-3338-4434-b634-616438393665/GiftsGiftsGifts_AgAD.png"
    ],
    "partysparkler":[
        "Party Sparkler",
        "https://static.tildacdn.one/tild3061-6336-4030-a264-383461653631/GiftsGiftsGifts_AgAD.png"
    ],
    "starnotepad":[
        "Star Notepad",
        "https://static.tildacdn.one/tild6638-6330-4539-b631-653063666139/GiftsGiftsGifts_AgAD.png"
    ],
    "voodoodoll":[
        "Voodoo Doll",
        "https://static.tildacdn.one/tild6566-3135-4230-b333-313439623135/GiftsGiftsGifts_AgAD.png"
    ],
    "bondedring":[
        "Bonded Ring",
        "https://static.tildacdn.one/tild3962-3236-4131-a639-333932623731/GiftsGiftsGifts_AgAD.png"
    ],
    "snowmittens":[
        "Snow Mittens",
        "https://static.tildacdn.one/tild6162-6634-4134-b933-356562356236/GiftsGiftsGifts_AgAD.png"
    ],
    "crystalball":[
        "Crystal Ball",
        "https://static.tildacdn.one/tild3438-6264-4339-a132-393764666361/GiftsGiftsGifts_AgAD.png"
    ],
    "berrybox":[
        "Berry Box",
        "https://static.tildacdn.one/tild3862-3036-4530-b364-666636373361/GiftsGiftsGifts_AgAD.png"
    ],
    "tamagadget":[
        "Tama Gadget",
        "https://static.tildacdn.one/tild3266-6534-4632-b232-613231386336/GiftsGiftsGifts_AgAD.png"
    ],
    "valentinebox":[
        "Valentine Box",
        "https://static.tildacdn.one/tild6564-3063-4230-b832-346337636633/GiftsGiftsGifts_AgAD.png"
    ],
    "cookieheart":[
        "Cookie Heart",
        "https://static.tildacdn.one/tild6262-3134-4534-b932-356433663436/GiftsGiftsGifts_AgAD.png"
    ],
    "preciouspeach":[
        "Precious Peach",
        "https://static.tildacdn.one/tild3432-3965-4466-a437-383631396533/GiftsGiftsGifts_AgAD.png"
    ],
    "bowtie":[
        "Bow Tie",
        "https://static.tildacdn.one/tild3835-3666-4464-b237-646636303931/GiftsGiftsGifts_AgAD.png"
    ],
    "signetring":[
        "Signet Ring",
        "https://static.tildacdn.one/tild6162-6336-4164-b231-353335643364/GiftsGiftsGifts_AgAD.png"
    ],
    "lolpop":[
        "Lol Pop",
        "https://static.tildacdn.one/tild6438-3738-4436-b630-613333633639/GiftsGiftsGifts_AgAD.png"
    ],
    "santahat":[
        "Santa Hat",
        "https://static.tildacdn.one/tild6238-6537-4663-a662-386264643266/GiftsGiftsGifts_AgAD.png"
    ],
    "hypnolollipop":[
        "Hypno Lollipop",
        "https://static.tildacdn.one/tild6631-3637-4638-b337-643765376261/GiftsGiftsGifts_AgAD.png"
    ],
    "winterwreath":[
        "Winter Wreath",
        "https://static.tildacdn.one/tild3064-6462-4163-b032-383834613064/GiftsGiftsGifts_AgAD.png"
    ],
    "vintagecigar":[
        "Vintage Cigar",
        "https://static.tildacdn.one/tild6266-3734-4038-b362-373233626164/GiftsGiftsGifts_AgAD.png"
    ],
    "bunnymuffin":[
        "Bunny Muffin",
        "https://static.tildacdn.one/tild6230-6437-4837-a632-306661343734/GiftsGiftsGifts_AgAD.png"
    ],
    "madpumpkin":[
        "Mad Pumpkin",
        "https://static.tildacdn.one/tild3837-6435-4263-b564-363031366366/GiftsGiftsGifts_AgAD.png"
    ],
    "eternalrose":[
        "Eternal Rose",
        "https://static.tildacdn.one/tild6436-6666-4764-a462-346331636237/GiftsGiftsGifts_AgAD.png"
    ],
    "jollychimp":[
        "Jolly Chimp",
        "https://static.tildacdn.one/tild3438-3135-4534-a635-613566653233/GiftsGiftsGifts_AgAE.png"
    ],
    "inputkey":[
        "Input Key",
        "https://static.tildacdn.one/tild3064-3464-4764-b439-356133646363/GiftsGiftsGifts_AgAD.png"
    ],
    "deskcalendar":[
        "Desk Calendar",
        "https://static.tildacdn.one/tild3831-3539-4962-b439-303863333065/GiftsGiftsGifts_AgAD.png"
    ],
    "swisswatch":[
        "Swiss Watch",
        "https://static.tildacdn.one/tild6466-3036-4162-b138-313034663234/GiftsGiftsGifts_AgAD.png"
    ],
    "sleighbell":[
        "Sleigh Bell",
        "https://static.tildacdn.one/tild6564-6166-4331-b132-633062323936/GiftsGiftsGifts_AgAD.png"
    ],
    "toybear":[
        "Toy Bear",
        "https://static.tildacdn.one/tild6330-3866-4538-b361-396366316365/GiftsGiftsGifts_AgAD.png"
    ],
    "skystilettos":[
        "Sky Stilettos",
        "https://static.tildacdn.one/tild3264-3030-4535-b737-313765613132/GiftsGiftsGifts_AgAD.png"
    ],
    "freshsocks":[
        "Fresh Socks",
        "https://static.tildacdn.one/tild3139-6435-4965-b264-636565353130/GiftsGiftsGifts_AgAD.png"
    ],
    "cloverpin":[
        "Clover Pin",
        "https://static.tildacdn.one/tild3238-3766-4335-a262-373766653833/GiftsGiftsGifts_AgAD.png"
    ],
    "instantramen":[
        "Instant Ramen",
        "https://static.tildacdn.one/tild3639-3163-4130-b139-623235613361/GiftsGiftsGifts_AgAD.png"
    ],
    "moussecake":[
        "Mousse Cake",
        "https://static.tildacdn.one/tild6263-3466-4336-b832-663663336330/GiftsGiftsGifts_AgAD.png"
    ],
    "springbasket":[
        "Spring Basket",
        "https://static.tildacdn.one/tild3538-3336-4362-b531-626662353465/GiftsGiftsGifts_AgAD.png"
    ],
    "chillbar":[
        "Chill Bar",
        "https://static.tildacdn.one/tild3763-3464-4234-b438-646638643535/GiftsGiftsGifts_AgAD.png"
    ],
    
    "faithamulet":[
        "Faith Amulet",
        "https://static.tildacdn.one/tild3333-3362-4033-b163-386530633466/GiftsGiftsGifts_AgAD.png"
    ]
}
let payloadgiftkeys = ['plushpepe', 'heroichelmet', 'mightyarm', 'iongem', 'durovscap', 'nailbracelet', 'perfumebottle', 'magicpotion', 'minioscar', 'astralshard', 'artisanbrick', 'gemsignet', 'sharptongue', 'moonpendant', 'lunarsnake', 'holidaydrink', 'recordplayer', 'joyfulbundle', 'restlessjar', 'bigyear', 'lightsword', 'jinglebells', 'eternalcandle', 'skullflower', 'sakuraflower', 'jellybunny', 'cupidcharm', 'hangingstar', 'easteregg', 'spyagaric', 'homemadecake', 'snowglobe', 'xmasstocking', 'bdaycandle', 'candycane', 'lushbouquet', 'tophat', 'scaredcat', 'spicedwine', 'evileye', 'ionicdryer', 'gingercookie', 'hexpot', 'stellarrocket', 'trappedheart', 'snakebox', 'lootbag', 'electricskull', 'lovecandle', 'jackinthebox', 'witchhat', 'lovepotion', 'kissedfrog', 'diamondring', 'nekohelmet', 'petsnake', 'jesterhat', 'flyingbroom', 'partysparkler', 'starnotepad', 'voodoodoll', 'bondedring', 'snowmittens', 'crystalball', 'berrybox', 'tamagadget', 'valentinebox', 'cookieheart', 'preciouspeach', 'bowtie', 'signetring', 'lolpop', 'santahat', 'hypnolollipop', 'winterwreath', 'vintagecigar', 'bunnymuffin', 'madpumpkin', 'eternalrose', 'jollychimp', 'inputkey', 'deskcalendar', 'swisswatch', 'sleighbell', 'toybear', 'skystilettos', 'freshsocks', 'cloverpin', 'instantramen', 'moussecake', 'springbasket', 'chillbar', 'gift', 'faithamulet']
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


