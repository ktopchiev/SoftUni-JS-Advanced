function validate() {
    const validEmail = /[A-Za-z]+@[A-Za-z]+.[A-Za-z]+/g;
    document.getElementById('email').addEventListener('change', validateEmail);

    function validateEmail(ev) {
        if (validEmail.test(ev.target.value)) {
            ev.target.classList.remove('error');
        } else {
            ev.target.classList.add('error');
        }
    }
}