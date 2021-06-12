function lockedProfile() {
    let profiles = document.querySelectorAll('div.profile');

 
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
                console.log(e.target);
                let userInfoDiv = buttonShowHide.parentNode.querySelector('div');
                let radioButton = buttonShowHide.parentNode.querySelector('input[type="radio"]:checked');
 
                if (radioButton.value == 'unlock') {
                    if (userInfoDiv.style.display === 'block') {
                        userInfoDiv.style.display = 'none';
                        buttonShowHide.innerText = 'Show more';
                    } else {
                        userInfoDiv.style.display = 'block';
                        buttonShowHide.innerText = 'Hide it';
                    }
                }
            });
    }
}