'use strict';

/*-------------Login Page--------------*/
/*--------Brugernavn Felt---------*/


/*--------Profilbillede Valg---------*/
const avatars = document.querySelectorAll('#avatars img');

avatars.forEach(avatar => {
    avatar.addEventListener('click', selectAvatar)})

const selectAvatar = (e) => {
    let avatarSelected = e.target.src;
    console.log(avatarSelected)
}

/*--------Baggrundsbillede Valg---------*/

/*--------Login btn---------*/
const loginbtn = document.querySelector