'use strict';

/*-------------Login Page--------------*/
/*--------Avatar Valg---------*/
const avatars = document.querySelectorAll('#avatars img');
let avatarSelected;
const selectAvatar = (e) => {
    avatarSelected = e.target.src;
    console.log(avatarSelected);
}

avatars.forEach(avatar => {
    avatar.addEventListener('click', selectAvatar)})


/*--------Baggrundsbillede Valg---------*/
    const bgs = document.querySelectorAll ('#bg img');
    let bgSelected;
    const selectbg = (e) => {
    bgSelected = e.target.src;
    document.body.style.backgroundImage = `url(${bgSelected})`
    console.log(bgSelected);
}

bgs.forEach (bg => {
    bg.addEventListener ('click', selectbg)})


/*--------Avatar ikon & Brugernavn---------*/
const user = document.getElementById ("user");
const userName = document.getElementById ("userName");
const customiseUI = () => {
    user.src = avatarSelected;
    userName.textContent = uName;
}


/*---------Login Page - Login btn---------*/
const loginBtn = document.getElementById("loginBtn");
const loginPage = document.getElementById ("loginPage");
const chat = document.getElementById ("chat");
let uName; 
loginBtn.addEventListener("click", () => {
    uName = document.getElementById ("uname").value;
    console.log (uName); 
    if (loginPage.style.display !== "none") {
        loginPage.style.display = "none";
        chat.style.display = "block";
      
        customiseUI()
    };
})

/*-------------Chat--------------*/
/*--------Answerbtn1---------*/
const answer1btn = document.getElementById ("answer1btn");
const ending1 = document.getElementById ("ending1");

answer1btn.addEventListener("click", () => {

    if (chat.style.display !== "none") {
        chat.style.display = "none";
        ending1.style.display = "block";
      
    };
})

/*--------Answerbtn2---------*/
const answer2btn = document.getElementById ("answer2btn");
const ending2 = document.getElementById ("ending2");

answer2btn.addEventListener("click", () => {

    if (chat.style.display !== "none") {
        chat.style.display = "none";
        ending2.style.display = "block";
      
    };
})

/*--------Answerbtn3---------*/
const answer3btn = document.getElementById ("answer3btn");
const ending3 = document.getElementById ("ending3");

answer3btn.addEventListener("click", () => {

    if (chat.style.display !== "none") {
        chat.style.display = "none";
        ending3.style.display = "block";
      
    };
})

/*-------------Ending 1--------------*/
/*--------warningbtn---------*/
const warningbtn = document.getElementById ("warningbtn");
const infografi = document.getElementById ("infografi");

warningbtn.addEventListener("click", () => {

    if (ending1.style.display !== "none") {
        ending1.style.display = "none";
        infografi.style.display = "block";
      
    };
})

/*-------------Ending 2--------------*/
/*--------errorbtn---------*/
const errorbtn = document.getElementById ("errorbtn");

errorbtn.addEventListener("click", () => {

    if (ending2.style.display !== "none") {
        ending2.style.display = "none";
        infografi.style.display = "block";
      
    };
})

/*-------------Ending 3--------------*/
/*--------logoff1btn---------*/
const logoff1btn = document.getElementById ("logoff1btn");

logoff1btn.addEventListener("click", () => {

    if (ending3.style.display !== "none") {
        ending3.style.display = "none";
        infografi.style.display = "block";
      
    };
})

/*-------------Ending 4--------------*/
/*--------logoff2btn---------*/
const logoff2btn = document.getElementById ("logoff2btn");

logoff2btn.addEventListener("click", () => {

    if (ending4.style.display !== "none") {
        ending4.style.display = "none";
        infografi.style.display = "block";
      
    };
})

/*-------------Infografi--------------*/
/*--------collapsible---------*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
/*--------End Chat History --> Return To Start btn---------*/
const endchathistorybtn = document.getElementById ("endchathistorybtn");

endchathistorybtn.addEventListener("click", () => {

    if (infografi.style.display !== "none") {
        infografi.style.display = "none";
        loginPage.style.display = "block";
      
    };
})