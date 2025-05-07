'use strict';

/*-------------Login Page--------------*/
/*--------Avatar Valg---------*/
const avatars = document.querySelectorAll('#avatars img');
let avatarSelected;
let path = [];
const selectAvatar = (e) => {

    avatars.forEach (avatar => {
        avatar.classList.remove("selected");
    });

    e.target.classList.add("selected");

    avatarSelected = e.target.src;
    localStorage.setItem("avatar", avatarSelected);
    console.log(avatarSelected);
}

avatars.forEach(avatar => {
    avatar.addEventListener('click', selectAvatar)})


/*--------Username Input---------*/
const unameInput = document.getElementById("uname");
// When the username input changes, save the username to localStorage
unameInput.addEventListener("input", () => {
    const username = unameInput.value.trim();

    // Save the username to localStorage (only if it's not empty)
    if (username) {
        localStorage.setItem("username", username);
    }
});

/*--------Avatar ikon & Brugernavn---------*/
const user = document.getElementById ("user");
const userName = document.getElementById ("userName");
const customiseUI = () => {
    updateChatUI(avatarSelected, uName);
}

function updateChatUI(avatar, username) {
    if (avatar) {
        user.src = avatar;
        user2.src = avatar;
    }
    if (username) {
        userName.textContent = username;
        userName2.textContent = username;
    }
}

/*--------Baggrundsbillede Valg---------*/
    const bgs = document.querySelectorAll ('#bg img');
    let bgSelected;
    const selectbg = (e) => {

        bgs.forEach(bg => {
            bg.classList.remove("selected");
        });

        e.target.classList.add("selected");

    bgSelected = e.target.src;
    document.body.style.backgroundImage = `url(${bgSelected})`
    
    // Save to localStorage
    localStorage.setItem("background", bgSelected);
    
    console.log(bgSelected);
}

bgs.forEach (bg => {
    bg.addEventListener ('click', selectbg)})


/*---------Login Page - Login btn---------*/
const loginBtn = document.getElementById("loginBtn");
const loginPage = document.getElementById ("loginPage");
const chat = document.getElementById ("chat");
let uName; 

loginBtn.addEventListener("click", () => {
    path.push("login")
    uName = document.getElementById ("uname").value;
    console.log (uName); 

    uName = unameInput.value.trim();

     // Check if username is entered
     if (!uName) {
        alert("Please enter a username.");
        unameInput.style.border = "2px solid red"; // Optional: highlight input
        return;
    }

    // Check if avatar is selected
    if (!avatarSelected) {
        alert("Please select an avatar before continuing.");
        
        // Add visual feedback
        avatars.forEach(avatar => {
            avatar.classList.add("avatar-warning");
    });

        return;
    } else {
        // Remove the red outline if already selected
        avatars.forEach(avatar => {
            avatar.classList.remove("avatar-warning");
        });
    }

    // Optional: clear red border if previously shown
    unameInput.style.border = "";

    // Save to localStorage if needed
    localStorage.setItem("username", uName);
    localStorage.setItem("avatar", avatarSelected);

     // Continue to chat screen
    if (loginPage.style.display !== "none") {
        loginPage.style.display = "none";
        chat.style.display = "block";
      
        customiseUI()

        // Save progress current page on refresh
       localStorage.setItem("currentSection", "chat");
       // Save progress in a path
       localStorage.setItem("path", path); 
    };
})

/*-------------Chat--------------*/
/*--------Answerbtn1---------*/
const answer1btn = document.getElementById ("answer1btn");
const ending1 = document.getElementById ("ending1");

answer1btn.addEventListener("click", () => {
path.push("answer1btn")
    if (chat.style.display !== "none") {
        chat.style.display = "none";
        ending1.style.display = "block";
      
       // Save progress current page on refresh
       localStorage.setItem("currentSection", "ending1"); 
       // Save progress in a path
       localStorage.setItem("path", path);
    };
})

/*--------Answerbtn2---------*/
const answer2btn = document.getElementById ("answer2btn");
const chatpt2 = document.getElementById ("chatpt2");
const user2 = document.getElementById("user2");
const userName2 = document.getElementById("userName2");


answer2btn.addEventListener("click", () => {
path.push("answer2btn")
    if (chat.style.display !== "none") {
        chat.style.display = "none";
        chatpt2.style.display = "block";

        user2.src = localStorage.getItem("avatar") || avatarSelected;
        userName2.textContent = localStorage.getItem("username") || uName;

        // Save progress current page on refresh
       localStorage.setItem("currentSection", "chatpt2"); 
       // Save progress in a path
       localStorage.setItem("path", path);
      
    };
})

/*--------Answerbtn3---------*/
const answer3btn = document.getElementById ("answer3btn");
const ending3 = document.getElementById ("ending3");

answer3btn.addEventListener("click", () => {
path.push("answer3btn")
    if (chat.style.display !== "none") {
        chat.style.display = "none";
        ending3.style.display = "block";
      
        // Save progress current page on refresh
       localStorage.setItem("currentSection", "ending3"); 
       // Save progress in a path
       localStorage.setItem("path", path);
    };
})

/*-------------Chat Pt 2--------------*/
/*--------Answerbtn4---------*/
const answer4btn = document.getElementById ("answer4btn");
const ending2 = document.getElementById ("ending2")

answer4btn.addEventListener("click", () => {
path.push("answer4btn")
    if (chatpt2.style.display !== "none") {
        chatpt2.style.display = "none";
        ending2.style.display = "block";
      
        // Save progress current page with refresh
       localStorage.setItem("currentSection", "ending2"); 
       // Save progress in a path
       localStorage.setItem("path", path);

    };
})

/*--------Answerbtn5---------*/
const answer5btn = document.getElementById ("answer5btn");

answer5btn.addEventListener("click", () => {
path.push("answer5btn")
    if (chatpt2.style.display !== "none") {
        chatpt2.style.display = "none";
        ending1.style.display = "block";
      
        // Save progress current page on refreash
       localStorage.setItem("currentSection", "ending1"); 
       // Save progress in a path
       localStorage.setItem("path", path);

    };
})

/*--------Answerbtn6---------*/
const answer6btn = document.getElementById ("answer6btn");

answer6btn.addEventListener("click", () => {
path.push("answer6btn")
    if (chatpt2.style.display !== "none") {
        chatpt2.style.display = "none";
        ending4.style.display = "block";
      
        // Save progress current page on refresh
       localStorage.setItem("currentSection", "ending4"); 
       // Save progress in a path
       localStorage.setItem("path", path);

    };
})

/*-------------Ending 1--------------*/
/*--------warningbtn---------*/
const warningbtn = document.getElementById ("warningbtn");
const infografi = document.getElementById ("infografi");

warningbtn.addEventListener("click", () => {
path.push("warningbtn")
    if (ending1.style.display !== "none") {
        ending1.style.display = "none";
        infografi.style.display = "block";
      
        // Save progress current page on refresh
       localStorage.setItem("currentSection", "infografi");
       // Save progress in a path
       localStorage.setItem("path", path); 

    };
})

/*-------------Ending 2--------------*/
/*--------errorbtn---------*/
const errorbtn = document.getElementById ("errorbtn");

errorbtn.addEventListener("click", () => {
path.push("errorbtn")
    if (ending2.style.display !== "none") {
        ending2.style.display = "none";
        infografi.style.display = "block";

        // Save progress current page with refresh
       localStorage.setItem("currentSection", "infografi"); 
       // Save progress in a path
       localStorage.setItem("path", path);
      
    };
})

/*-------------Ending 3--------------*/
/*--------logoff1btn---------*/
const logoff1btn = document.getElementById ("logoff1btn");

logoff1btn.addEventListener("click", () => {
path.push("logoff1btn")
    if (ending3.style.display !== "none") {
        ending3.style.display = "none";
        infografi.style.display = "block";

        // Save progress current page on refresh
       localStorage.setItem("currentSection", "infografi");
       // Save progress in a path
       localStorage.setItem("path", path); 
      
    };
})

/*-------------Ending 4--------------*/
/*--------logoff2btn---------*/
const logoff2btn = document.getElementById ("logoff2btn");

logoff2btn.addEventListener("click", () => {
path.push("logoff2btn")
    if (ending4.style.display !== "none") {
        ending4.style.display = "none";
        infografi.style.display = "block";

        // Save progress current page on refresh
       localStorage.setItem("currentSection", "infografi");
       // Save progress in a path
       localStorage.setItem("path", path);
      
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
      
         // Save progress
       localStorage.setItem("currentSection", "loginPage");

    };
})

/*--------localStorage Reload---------*/
window.addEventListener("DOMContentLoaded", () => {
    const savedUsername = localStorage.getItem("username");
    const savedAvatar = localStorage.getItem("avatar");

    // Assign saved values to variables used in customiseUI
    uName = savedUsername;
    avatarSelected = savedAvatar;

    if (loginPage.style.display !== "none") {
        if (savedUsername) {
            unameInput.value = savedUsername;
        }

        if (savedAvatar) {
            avatars.forEach(avatar => {
                if (avatar.src === savedAvatar) {
                    avatar.classList.add("selected");
                } else {
                    avatar.classList.remove("selected");
                }
            });
        }
    }

    const savedBackground = localStorage.getItem("background");
    if (savedBackground) {
        bgSelected = savedBackground;
        document.body.style.backgroundImage = `url(${bgSelected})`;

        bgs.forEach(bg => {
            if (bg.src === bgSelected) {
                bg.classList.add("selected");
            }
        });
    }

    const currentSection = localStorage.getItem("currentSection");
    if (currentSection) {
        loginPage.style.display = "none";

        [chat, chatpt2, ending1, ending2, ending3, ending4, infografi].forEach(section => {
            section.style.display = "none";
        });

        const sectionToShow = document.getElementById(currentSection);
        if (sectionToShow) {
            sectionToShow.style.display = "block";
        }

        customiseUI();  // Will now use restored values
    }

    if (currentSection === "chatpt2") {
        updateChatUI(avatarSelected, uName);
    }
});