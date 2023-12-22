const form= document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){
  const bodyMessage = 'Full Name: ${fullName.value}<br> Email: ${email.value} <br>Subject:${subject.value}<br> Message: ${mess.value}';

  function sendEmail(){
    Email.send({
  Host : "smtp.elasticemail.com",
  Username : "abhiyendru@gmail.com",
  Password : "DD0AB4A048BB1B4B1A316F4FEF3C76E0C276",
  To : 'rahul.r0644@website.com',
  From : document.getElementById("email").value,
  Subject : subject.value,
  Body : bodyMessage
}).then(
  message => {
    if(mesage == "OK"){
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }
);
  }
form.addEventListener("submit",(e)=>{
  e.preventDefault();

  sendEmail();
});