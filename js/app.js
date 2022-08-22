
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
console.log(playersArray);

function addToPlayerList(element) {
    // console.log(element.parentNode.parentNode.children[0].innerText);
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const selectedPlayerField = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayerField.appendChild(li);
    playersArray.push(li.innerText);
    // return playerName;
}




