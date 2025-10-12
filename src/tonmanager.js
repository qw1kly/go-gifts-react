import { TonConnectUI, THEME } from '@tonconnect/ui';


const tonConnectUI = new TonConnectUI({
        manifestUrl: 'https://qw1kly-go-gifts-react-3930.twc1.net/tonconnect-manifest.json',
        buttonRootId: 'ton-connect',
        uiPreferences: {
            theme: THEME.DARK
        }
    });

export function openconnect() {
    const currentIsConnectedStatus = tonConnectUI.connected;
    tonConnectUI.uiOptions = {
        uiPreferences: {
            borderRadius: 'none',
            colorsSet: {
                [THEME.DARK]: {
                    connectButton: {
                        background: '#1ABC9C'
                    }
                },
                [THEME.LIGHT]: {
                    text: {
                        primary: '#1ABC9C'
                    }
                }
            }
        }
    };
    return currentIsConnectedStatus
}

export async function get_balance() {
    const response = await fetch(`https://toncenter.com/api/v2/getAddressBalance?address=${tonConnectUI.account.address}`);
    const data =  await response.json();  
    console.log(data.result);      
    const balanceInTON = parseInt(data.result) / 1000000000;
    console.log(balanceInTON);
    const wallet_bal = String(Math.round(balanceInTON * 100) / 100);
    console.log(wallet_bal)
    return wallet_bal
}
export function get_addr() {
    return tonConnectUI.account.address.slice(0, 4) + "..." + tonConnectUI.account.address.slice(-5, -1) 
}

