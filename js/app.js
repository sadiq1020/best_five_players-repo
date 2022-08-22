function addToPlayerList(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText;

    const selectedPlayerField = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = playerName;

    const selectedPlayers = document.querySelector('#selected-players');

    // Validation
    if (selectedPlayers.children.length <= 4) {
        element.setAttribute('disabled', true);
    }


    if (selectedPlayers.children.length <= 4) {
        selectedPlayerField.appendChild(li);
    }
    else {
        alert("You can't select more than 5 players!");
        return;
    }
}

// Get input field Value by ID
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}

// Set text element value by Id
function setTextElementvalueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

// Total player expenses
document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerBudget = getInputFieldValueById('player-budget-field')
    const selectedPlayers = document.querySelector('#selected-players');

    const totalPlayerExpense = playerBudget * selectedPlayers.children.length;
    setTextElementvalueById('player-expenses', totalPlayerExpense);
})


// Total expenses
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const playerExpense = parseFloat(document.getElementById('player-expenses').innerText);
    const managerCosting = getInputFieldValueById('manager-cost');
    const coachCosting = getInputFieldValueById('coach-cost');

    const totalExpense = playerExpense + managerCosting + coachCosting;
    setTextElementvalueById('total-expense', totalExpense);
})

