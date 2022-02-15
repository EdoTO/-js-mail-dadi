const emailList = [
    'gabibbo@gmail.com',
    'pinocchio@yahoo.it',
    'costanzo@libero.it',
    'paraffa@virgilio.it',
    'giannimorandi@trap.it'
];

const userMail = prompt('Inserisci il tuo indirizzo e-mail')

let find = false;

for( let i = 0; i < emailList.length; i++ ) {
    if(userMail.toLowerCase() === emailList[i].toLowerCase()) {
        console.log('email trovata')
        find = true
        break;
    } else {
        console.log('email non trovata')
    }
}

if( find === false ) {
    alert('Stattene fuori')
} else {
    alert('Puoi entrare')
}

const Button = document.getElementById('buttonplay')
const Message = document.getElementById("message")


Button.addEventListener("click", function() {

    const player = Math.floor( Math.random () * 6 + 1);
    const computer = Math.floor( Math.random() * 6 + 1);

    console.log( player , computer)

    let message = "Parità"

    if ( player < computer ) {
        message = "Hai perso!!";
    } else if ( player > computer ) {
        message = "Hai vinto!!";
    }

    Message.append(message);

})