/**
 * Created by carl on 2/24/2017.
 */
var browser = (typeof(browser) == 'undefined') ? chrome : browser;

try {
    browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        console.log(message);

        if (!document.getElementById('ipDiv')) {
            console.log('ipDiv does not exist')
            if (message.response && message.response.ip) {
                console.log('request details and IP address found');
                var ip = message.response.ip;


                var ipDiv = document.createElement('div');

                ipDiv.innerText = ip;

                ipDiv.style.position = 'fixed';
                ipDiv.style.bottom = '0';
                ipDiv.style.left = '0';
                ipDiv.style.color = 'black';
                ipDiv.style.background = 'white';
                ipDiv.style.fontSize = '16px';
                ipDiv.style.fontFamily = 'monospace';
                ipDiv.setAttribute('id', 'ipDiv');

                document.body.appendChild(ipDiv);
            } else {
                console.error('request details or IP NOT FOUND');
            }
        } else {
            console.log('ipDiv already exists.');
        }
    });

} catch (error) {
    console.error(`runtime listener failure: ${error}`);
}

