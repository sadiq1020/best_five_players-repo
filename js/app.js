
// document.getElementById('.addEventListener').addEventListener

// document.getElementsByClassName('btn-player').addEventListener('click', function () {
//     console.log('clicked');
// })

const playerButtons = document.getElementsByClassName('btn-player');
for (const playerButton of playerButtons) {
    playerButton.addEventListener('click', function () {
        // console.log('clicked');

        const playerNames = document.getElementsByClassName('player-name')
        for (const playerName of playerNames) {
            // console.log(playerName);
            const addedPlayer = playerName.innerText;
            console.log(addedPlayer);

            // const selectedPlayerField = document.getElementById('selected-players');
            // const p = document.createElement('p');
            // p.innerText = addedPlayer;
            // selectedPlayerField.appendChild(p);
        }
    })
}



