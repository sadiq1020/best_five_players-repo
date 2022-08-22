const playersArray = [];



// function playerNameList(fiveDone) {
//     if (fiveDone === true) {
//         alert('You can not buy more than 5 players!');
//         return true;
//     }
// }

function addToPlayerList(element) {

    element.setAttribute('disabled', true);
    // console.log(element.parentNode.parentNode.children[0].innerText);
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const selectedPlayerField = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = playerName;

    const selectedPlayers = document.querySelector('#selected-players');

    if (selectedPlayers.children.length <= 4) {
        selectedPlayerField.appendChild(li);
    }
    else {
        alert('asdasd');
        return;
    }




    // playersArray.push(li.innerText);

    // if (playersArray.length < 6) {
    //     // playersArray.push(li.innerText);
    // }
    // else {
    //     alert('asdasdasdsad');
    //     return;
    // }

    // const selectedPlayers = document.querySelector('#selected-players');
    // console.log(selectedPlayers.children.length);

    // if (selectedPlayers.children.length > 4) {
    //     alert('asdasd');
    //     return;
    // }

    // const playersList = document.querySelectorAll('#selected-players')
    // const numberOfPlayers = playersList.children.children;
    // console.log(numberOfPlayers.length);
    // // if (playersList.length > 5) {
    // //     alert('adsas');
    // // }


    // if (document.querySelectorAll('#selected-players li').length > 4) {
    //     alert('haha');
    // }
    // return;

    // if (playersArray.length === 5) {
    //     alert('You can not buy more than 5 players!');
    //     return;
    // }
    // playerNameList(playersArray.length === 5);

}



function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}

function setTextElementvalueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerBudget = getInputFieldValueById('player-budget-field')

    const selectedPlayers = document.querySelector('#selected-players');

    const totalPlayerExpense = playerBudget * selectedPlayers.children.length;
    // console.log(totalPlayerExpense);
    setTextElementvalueById('player-expenses', totalPlayerExpense);
})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const playerExpense = parseFloat(document.getElementById('player-expenses').innerText);
    const managerCosting = getInputFieldValueById('manager-cost');
    const coachCosting = getInputFieldValueById('coach-cost');

    const totalExpense = playerExpense + managerCosting + coachCosting;
    setTextElementvalueById('total-expense', totalExpense);
})



