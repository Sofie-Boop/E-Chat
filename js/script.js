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

/*--------Answerbtn2---------*/

/*--------Answerbtn3---------*/

/*-------------Ending 1--------------*/
/*--------warningbtn---------*/

/*-------------Ending 2--------------*/
/*--------errorbtn---------*/

/*-------------Ending 3--------------*/
/*--------logoff1btn---------*/

/*-------------Ending 4--------------*/
/*--------logoff2btn---------*/


/*-------------Infografi--------------*/
/*--------collapsible---------*/