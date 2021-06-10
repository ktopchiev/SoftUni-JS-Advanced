function validate() {
    let inputElement = document.getElementById('email');
    let rgx = /^[a-z]+@([a-z]+\.)+[a-z]{2,4}\b/;

    inputElement.addEventListener('change', (e) => {
        if (!e.target.value.match(rgx)) {
            e.currentTarget.classList.add("error");
        } else {
            e.currentTarget.classList.remove("error");
        }
    })
}