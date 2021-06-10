function focused() {
    let sections = document.querySelectorAll('input[type="text"]');

    for (let i = 0; i < sections.length; i++) {
        sections[i].addEventListener('focus', (e) => {
            sections[i].parentElement.classList.add('focused');
        });
        
        sections[i].addEventListener('blur', (e) => {
            sections[i].parentElement.classList.remove('focused');
        });
    }

}