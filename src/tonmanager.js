import { TonConnectUI, THEME } from '@tonconnect/ui';



function openconnect() {
    const tonConnectUI = new TonConnectUI({
        manifestUrl: 'https://your-site.com/tonconnect-manifest.json',
        buttonRootId: 'ton-connect',
        uiPreferences: {
            theme: THEME.DARK
        }
    });

    tonConnectUI.uiOptions = {
        uiPreferences: {
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
}


export default openconnect;