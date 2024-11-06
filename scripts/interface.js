
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handClick);
    })
})

function handClick(event){
    
    // console.log(event.target);

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        setTimeout(() => {
            alert("O Jogo Acabou - O vencedor foi " + playerTime);
        }, 20)
        
    }
    updateSquare(position);

}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbols = board[position];
    
    square.innerHTML = `<div class='${symbols}'></div>`
}

// function updateSquares(){

//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbols = board[position];

//         if(symbols != ''){
//             square.innerHTML = `<div class='${symbols}'></div>`
//         }
//     })

// }
