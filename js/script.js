'use strict';

const avatars = querySelectorAll('avatars img');

avatars.forEach(avatar => {
    avatar.addEventListener('click', selectAvatar)})

const selectAvatar = (e) => {
    let avatarSelected = e.target.src;
    console.log(avatarSelected)
} 