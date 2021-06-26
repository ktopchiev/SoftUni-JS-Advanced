function solution() {
    let giftNameInput = document.querySelector('input[type="text"][placeholder="Gift name"]');
    let addGiftButton = document.querySelector('section.card div button');

    addGiftButton.addEventListener('click', addGift);

    function addGift() {
        let newGift = createGift();
        let giftsCard = document.querySelectorAll('section.card')[1];
        let giftsCardList = giftsCard.querySelector('ul');
        giftsCardList.appendChild(newGift);
        sortList(giftsCardList);
        giftNameInput.value = '';
    }

    function createGift() {
        let name = giftNameInput.value;

        let gift = document.createElement('li');
        gift.classList.add('gift');
        gift.textContent = name;

        let sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.setAttribute('id', 'sendButton');
        sendButton.addEventListener('click', send);

        let discardButton = document.createElement('button');
        discardButton.addEventListener('click', discard);
        discardButton.textContent = 'Discard';
        discardButton.id = 'discardButton';

        gift.appendChild(sendButton);
        gift.appendChild(discardButton);

        return gift;
    }

    function send(event) {
        let giftElement = event.target.parentNode;
        let giftName = giftElement.textContent;
        giftName = giftName.substring(0, giftName.length - 11);
        let sentCard = document.querySelectorAll('section.card')[2];
        let sentCardList = sentCard.querySelector('ul');
        let newSentCardListItem = document.createElement('li');
        newSentCardListItem.textContent = giftName;
        sentCardList.appendChild(newSentCardListItem);
        giftElement.remove();
    }

    function discard(event) {
        let giftElement = event.target.parentNode;
        let giftName = giftElement.textContent;
        giftName = giftName.substring(0, giftName.length - 11);
        let discardedCard = document.querySelectorAll('section.card')[3];
        let discardedCardList = discardedCard.querySelector('ul');
        let newDiscardedGift = document.createElement('li');
        newDiscardedGift.textContent = giftName;
        discardedCardList.appendChild(newDiscardedGift);
        giftElement.remove();
    }

    function sortList(ul) {
        Array.from(ul.getElementsByTagName("LI"))
          .sort((a, b) => a.textContent.localeCompare(b.textContent))
          .forEach(li => ul.appendChild(li));
      }
}