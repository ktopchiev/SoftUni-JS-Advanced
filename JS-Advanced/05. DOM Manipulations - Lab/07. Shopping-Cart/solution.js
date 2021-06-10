function solve() {
   let textAreaElement = document.querySelector('textArea');
   let buttons = document.querySelectorAll('button.add-product');
   let list = [];
   let totalPrice = 0;

   textAreaElement.removeAttribute('disabled');

   for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', (event) => {
         let product = event.target.parentNode.parentNode;
         let title = product.querySelector('.product-details').firstElementChild.innerText;
         let price = product.querySelector('.product-line-price').innerText;

         list.includes(title) ? null : list.push(title);
         totalPrice += Number(price);
         textAreaElement.value += `Added ${title} for ${price} to the cart.\n`;
      });
   }

   document.getElementsByClassName('checkout')[0]
      .addEventListener('click', (e) => {
         textAreaElement.value
            += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.\n`;
         for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
         }
         e.target.disabled = true;
      });

}