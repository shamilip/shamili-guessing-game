let random
document.getElementById('start').addEventListener('click', (e) => {
    showElements()
    showRandom()
    e.target.innerText = 'tryagain'
});
document.getElementById('check').addEventListener('click', () => {
    let check = document.getElementById('number').value
    // console.log(check);
    if (check == random) {
        console.log('answer is currect');
        document.getElementById('answertext').innerHTML = 'answer is currect'
    } else {
        console.log('answer is worng');
        document.getElementById('answertext').innerHTML = 'answer is worng'
    }
})
let cluebutton = document.getElementById('clue-button')
cluebutton.addEventListener('click', () => {
    if (random % 2 == 0) {
        console.log('the number is even');
        document.getElementById('clue').innerHTML = 'the number is even'
    } else
        console.log('ithe number is odd');
    document.getElementById('clue').innerHTML = 'the number is odd'
})
function showElements() {
    let hide = document.getElementsByClassName('hide')
    hide = [...hide]
    hide.forEach((singlehide) => {
        singlehide.style.visibility = 'visible'
    })
}
function showRandom() {
    let a = Math.random();
    random = Math.floor(a * 100) + 1
    console.log(random);
}
let s2Clue = document.getElementById('clue-button')
s2Clue.addEventListener('click', () => {
    if (random % 4 == 0) {
        // console.log('the number divisible by 4');
        document.getElementById('s2Clue').innerHTML = "CLUE: the  number divisible by 4"
    } else
        // console.log('the number not divisible by 4');
        document.getElementById('s2Clue').innerHTML = "CLUE: the  number not divisible by 4"
})
