function attachEventsListeners() {

    let buttons = document.querySelectorAll('input[type="button"][value="Convert"]');
    let hoursInDay = 24;
    let minutesInDay = 1440;
    let secondsInDay = 86400;
    let daysInput = document.querySelector('#days');
    let hoursInput = document.querySelector('#hours');
    let minutesInput = document.querySelector('#minutes');
    let secondsInput = document.querySelector('#seconds');


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (e) => {
            let targetID = e.target.id.replace('Btn', '');
            let targetInputValue = Number(e.target.parentNode.querySelector(`#${targetID}`).value);
            let data = {};

            if (targetID === 'days') {
                data = convertFromDays(targetInputValue);
                daysInput.value = targetInputValue;
                setInputValues(data);
            } else {
                let days = convertToDays(targetID, targetInputValue);
                daysInput.value = days;
                data = convertFromDays(days);
                setInputValues(data);
            }

            function convertToDays(targetID, targetInputValue) {
                let days = 0;

                if (targetID === 'days') {
                    days = targetInputValue;
                } else if (targetID === 'hours') {
                    days = targetInputValue / hoursInDay;
                } else if (targetID === 'minutes') {
                    days = targetInputValue / minutesInDay;
                } else if (targetID === 'seconds') {
                    days = targetInputValue / secondsInDay
                }
                return days;
            }

            function convertFromDays(days) {
                let data = {
                    days,
                    hours: days * hoursInDay,
                    minutes: days * minutesInDay,
                    seconds: days * secondsInDay
                }
                return data;
            }

            function setInputValues(dataObject) {
                hoursInput.value = dataObject['hours'];
                minutesInput.value = dataObject['minutes'];
                secondsInput.value = dataObject['seconds'];
            }
        })
    }
}