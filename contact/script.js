const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rahul.r0644@gmail.com",
        Password : "7672732E71B5958F422CC821E1D4E7F2D006",
        To : 'rahul.r0644@gmail.com',
        From : "rahul.r0644@gmail.com",
        Subject : subject.value,
        message: message.value,
        Body : bodyMessage
    }).then(
      message =>{
        if(message =="OK"){
            Swal.fire({
                icon:"success",
                title: "Message Sent Successfully!",
                width: 400,
                padding: "3em",
                color: "#fffae4",
                confirmButtonColor: "green",
                background: "#111111d2",
                backdrop: `
                #09090946
                  url("../assets/img/icy2.gif")
                  left top
                  no-repeat
                `
              });
            
        } else {
            // Handle error scenario if needed
            Swal.fire({
                icon:"success",
                title: "Message Sent Successfully!",
                width: 400,
                padding: "3em",
                color: "#fffae4",
                confirmButtonColor: "green",
                background: "#111111d2",
                backdrop: `
                #09090946
                  url("../assets/img/icy2.gif")
                  left top
                  no-repeat
                `
});
        }
      }
    );
}
function checkInputs(){
    const items = document.querySelectorAll(".item");

    for(const item of items){
        if(item.value==""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        item.addEventListener("keyup", ()=> {
            if (item.value !=""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    sendEmail();
})