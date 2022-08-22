
// // document.getElementById('.addEventListener').addEventListener

// // document.getElementsByClassName('btn-player').addEventListener('click', function () {
// //     console.log('clicked');
// // })

// const playerButtons = document.getElementsByClassName('btn-player');
// for (const playerButton of playerButtons) {
//     playerButton.addEventListener('click', function () {
//         // console.log('clicked');

//         const playerNames = document.getElementsByClassName('player-name')
//         const playerName = playerNames[0];
//         console.log(playerName.innerText);
//         // for (const playerName of playerNames) {
//         //     // console.log(playerName);
//         //     const addedPlayer = playerName.innerText;
//         //     console.log(addedPlayer);

//         //     // const selectedPlayerField = document.getElementById('selected-players');
//         //     // const p = document.createElement('p');
//         //     // p.innerText = addedPlayer;
//         //     // selectedPlayerField.appendChild(p);
//         // }
//     })
// }

const playersArray = [];
// console.log(playersArray.length);

function addToPlayerList(element) {
    // console.log(element.parentNode.parentNode.children[0].innerText);
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const selectedPlayerField = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayerField.appendChild(li);
    playersArray.push(li.innerText);
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
    const totalPlayerExpense = playerBudget * playersArray.length;
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



