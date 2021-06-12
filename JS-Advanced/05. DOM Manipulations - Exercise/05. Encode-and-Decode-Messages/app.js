function encodeAndDecodeMessages() {
    let messageArea = document.querySelector('textarea[placeholder="Write your message here..."');
    let receivedMsgArea = document.querySelector('textarea[placeholder="No messages..."');
    let sendButton = document.querySelectorAll('button')[0];
    let readButton = document.querySelectorAll('button')[1];

    sendButton.addEventListener('click', (e) => {
        let message = messageArea.value;
        let encodedMsg = '';
        for (let i = 0; i < message.length; i++) {
            let newCode = message.charCodeAt(i) + 1;
            encodedMsg += String.fromCharCode(newCode);
        }

        receivedMsgArea.value = encodedMsg;
        messageArea.value = '';
        readButton.disabled = false;
    });

    readButton.addEventListener('click', (e) => {
        
        let receivedMsg = receivedMsgArea.value;
        let decodedMsg = '';
        for (let i = 0; i < receivedMsg.length; i++) {
            let currentCharCode = receivedMsg.charCodeAt(i);
            currentCharCode -= 1;
            decodedMsg += String.fromCharCode(currentCharCode);
        }

        receivedMsgArea.value = decodedMsg;
        
    });
}