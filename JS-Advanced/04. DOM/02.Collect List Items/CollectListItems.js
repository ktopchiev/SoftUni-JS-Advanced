function extractText() {
    const ulItems = document.getElementById('items');
    const li = ulItems.getElementsByTagName('li');
    const textArea = document.getElementById('result');

    for (let i = 0; i < ulItems.childElementCount; i++) {
        const element = li[i].innerHTML;
        textArea.value += element + '\n';
    }
}