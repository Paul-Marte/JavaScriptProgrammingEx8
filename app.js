const myFirstHeader = document.getElementById('myHeader');

console.log(myFirstHeader);

myFirstHeader.innerHTML = 'GEX Class of 2025';

function clickHandler() {
    const fnameInput = document.getElementById('firstNameInput');
    const pTarget = document.getElementById('target');
    pTarget.innerHTML = fnameInput.value;
}

const button = document.getElementById('myButton');

button.addEventListener('click', clickHandler);

// Checkbox
const chk = document.getElementById('chkMyCheckbox');
const stateTarget = document.getElementById('checkboxState');

const chk2 = document.getElementById('chkMyCheckbox2');
const stateTarget2 = document.getElementById('checkboxState2');

chk.addEventListener('change', showCheckboxState);

chk2.addEventListener('change', evt => {
    showCheckboxState(evt, stateTarget2);
});

function showCheckboxState(evt, spanTarget = null) {
    if (!!spanTarget) {
        spanTarget.innerText = evt.target.checked;
    } else {
        stateTarget.innerText = evt.target.checked;
    }
}

//Working with radio buttons - We will use document.getElementsByName()
const rdoTechs = document.getElementsByName('tech');
const techPara = document.getElementById('radio-target');

console.log(rdoTechs);

for (const rdo of rdoTechs) {
    rdo.onchange = evt => {
        techPara.innerText = evt.target.value;
    }
}

// Working with select
const selectConsoles = document.getElementById('consoles');
const consolePara = document.getElementById('target-console');

selectConsoles.addEventListener('change', consoleChanged);

function consoleChanged(evt) {
    const selCons = evt.target;
    const index = selCons.selectedIndex;
    const option = selCons.options[index];

    if (index > 0) {
        consolePara.innerText = `Console Id: ${option.value} Name: ${option.text}`;
    } else {
        consolePara.innerText = 'Please select a console';
    }
}