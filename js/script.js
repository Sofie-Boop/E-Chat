'use strict';

/*--------Profilbillede---------*/
const avatars = document.querySelectorAll('#avatars img');

avatars.forEach(avatar => {
    avatar.addEventListener('click', selectAvatar)})

const selectAvatar = (e) => {
    let avatarSelected = e.target.src;
    console.log(avatarSelected)
}

/*--------Login btn---------*/
const loginbtn = document.querySelector