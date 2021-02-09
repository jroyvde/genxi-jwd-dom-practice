// Buttons
document.getElementById('display-name-button').onclick = () => {
    document.getElementById('display-name').classList.remove('invisible');
}

// Mouse Over
document.getElementById('light-bulb').onmouseover = () => {
    document.getElementById('light-bulb').src = 'images/light-bulb-on.png';
}

document.getElementById('light-bulb').onmouseout = () => {
    document.getElementById('light-bulb').src = 'images/light-bulb-off.png';
}

// Toggle
const toggleButton = document.getElementById('toggle-button');
const toggleAlert = document.getElementById('toggle-alert');

const doToggle = () => {
    if (toggleAlert.classList.contains('invisible')) {
        toggleAlert.classList.remove('invisible');
        toggleButton.innerHTML = 'Off';
    } else {
        toggleAlert.classList.add('invisible');
        toggleButton.innerHTML = 'On';
    }
}

toggleButton.onclick = doToggle;

// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side
const formValidate = document.getElementById('form-validate');
const formValidateFirstName = document.getElementById('form-validate-first-name');

formValidate.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formValidateFirstName.value.length > 2) {
        formValidateFirstName.classList.add('is-valid');
        formValidateFirstName.classList.remove('is-invalid');
    } else {
        formValidateFirstName.classList.add('is-invalid');
        formValidateFirstName.classList.remove('is-valid');
    }
});

// Challenge: Lists
const formHobby = document.getElementById('form-hobby');
const formHobbyText = document.getElementById('form-hobby-text');
const hobbyList = document.getElementById('hobby-list');

const addHobby = (event) => {
    event.preventDefault();
    const newHobby = document.createElement('li');
    newHobby.innerText = formHobbyText.value
    newHobby.classList.add('list-group-item');
    hobbyList.appendChild(newHobby);
}

formHobby.onsubmit = addHobby;

// Challenge: Lists (Part 2)
const hobbyList2 = document.getElementById('hobby-list-2');

const removeHobby = (event) => {
    if (event.target.classList.contains('remove-hobby')) {
        event.preventDefault();
        const parentLi = event.target.parentElement;
        hobbyList2.removeChild(parentLi);
    }
};

hobbyList2.onclick = removeHobby;
