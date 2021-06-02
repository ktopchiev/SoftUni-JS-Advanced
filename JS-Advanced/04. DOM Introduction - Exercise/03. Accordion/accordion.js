function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let p = document.getElementById('extra');

    if (p.style.display === 'none') {
        p.style.display = 'block';
        button.innerHTML = 'Less';
    } else {
        p.style.display = 'none';
        button.innerHTML = 'More';
    }
}