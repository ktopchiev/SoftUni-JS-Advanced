function lockedProfile() {
    let profiles = document.querySelectorAll('div.profile');

    //Initial settings
    for (let i = 0; i < profiles.length; i++) {
        profiles[i].querySelector(`#user${i + 1}HiddenFields`).style.display = 'none';
        profiles[i].querySelector('input[value="lock"]').checked = true;
        profiles[i].querySelector('button').disabled = true;
    }

    for (let i = 0; i < profiles.length; i++) {

        profiles[i].querySelector('div.profile input[value="lock"]').addEventListener('click', (e) => {
            e.target.parentNode.querySelector('button').disabled = true;
        });
        profiles[i].querySelector('div.profile input[value="unlock"]').addEventListener('click', (e) => {
            e.target.parentNode.querySelector('button').disabled = false;
        });

        profiles[i].querySelector('button')
            .addEventListener('click', (e) => {
                let buttonShowHide = e.target;

                let userInfoDiv = buttonShowHide.parentNode.querySelector('div');

                if (!buttonShowHide.disabled) {
                    if (userInfoDiv.style.display === 'none') {
                        userInfoDiv.style.display = 'block';
                        buttonShowHide.innerText = 'Hide it';
                    } else {
                        userInfoDiv.style.display = 'none';
                        buttonShowHide.innerText = 'Show more';
                    }
                }
            });
    }
}