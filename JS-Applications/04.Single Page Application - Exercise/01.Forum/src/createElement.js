export default function createElement(type, clss) {
    let newElement = document.createElement(type);
    newElement.classList.add(clss);
    return newElement;
}