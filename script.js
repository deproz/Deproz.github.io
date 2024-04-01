const form = document.querySelector('form');


const name = document.getElemetById ("nam");
const email = document.getElemetById ("ema");
const message = document.getElemetById ("mess");

function sendEmail() {
    const bodyMessage = 'FullName: ${name.value}<br> Email: ${email.value}<br>Message: = ${message.value}';

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ddeproz@gmail.com",
        Password : "B4A7F574F279D52D6E307FE249E387D1BED4",
        To : 'ddeproz@gmail.com',
        From : "ddeproz@gmail.com",
        Subject : mess.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})