//  Part of this code is for the voice setup for my keyboard
//  Source: https://github.com/ajgabz/talking-keyboard
//  Lines 5 - 21 of this file were written by Aaron Gaba, with some personal changes added to accomodate other functions I need
function isAlphanumericKey(keycode) {
    return (keycode >= 48) && (keycode <= 90);
}

$(document).keydown(function (e) {
    console.log("check1");
    if (isAlphanumericKey(e.which)) {
        var myID = "#key-" + String.fromCharCode(e.which);
        $(myID).trigger("mousedown").addClass('active-style');
        console.log("check2");
        switchPage();
        console.log("check3");
    }
});

$(document).keyup(function (e) {
    if (isAlphanumericKey(e.which)) {
        var myID = "#key-" + String.fromCharCode(e.which);
        $(myID).trigger("mouseup").removeClass('active-style'); // Change remove to add and it will keep pressed highlighted
    }
});

// End of Aaron Gaba's code for the keyboard/talking portion


// My code

let levelOne = 'oldwell'; 
let levelTwo = 'belltower';
let levelThree = 'football';
let levelFour = 'watertower'; 
let levelFive = 'beatduke';

$(function () {
    renderSite();
})
 function renderSite() { 
    $(document).ready(function () { 
        console.log("test page load");
    if (window.location.pathname == '/COMP580_Final/index.html') {
        responsiveVoice.speak("welcome to campus crossing. hit any letter to start the game", "US English Male");
        console.log("here");
    } else if (window.location.pathname == '/start2ow.html') {
        responsiveVoice.speak(document.getElementById('startStoryH').textContent, "US English Male");
        responsiveVoice.speak(document.getElementById('startStory').textContent, "US English Male");
        responsiveVoice.speak(document.getElementById('startNext').textContent, "US English Male");
    } else if (window.location.pathname == '/start2owAnim.html') {
        setTimeout(function(){
            window.location.pathname = '/oldwell.html';
        }, 7000); // this works!
    }else if (window.location.pathname == '/levelone.html') { 
        levelOneTyping(); 
    } else if (window.location.pathname == '/leveltwo.html') {
        levelTwoTyping();
    } else if (window.location.pathname == '/levelthree.html') {
        levelThreeTyping();
    } else if (window.location.pathname == '/levelfour.html') {
        levelFourTyping();
    } else if (window.location.pathname == '/levelfive.html') {  
        levelFiveTyping();
    }  else if (window.location.pathname == '/ow2btAnim.html'){
        setTimeout(function(){
            window.location.pathname = "/belltower.html"; 
        }, 7000);
    } 
   
    if (window.location.pathname == '/bt2kenanAnim.html'){
        setTimeout(function(){ 
            window.location.pathname = "/kenan.html";
        }, 7000);
    } 
    if (window.location.pathname == '/kenan2wtAnim.html'){
        setTimeout(function(){
            window.location.pathname = '/watertower.html';
        }, 7000);
    }

    if (window.location.pathname == '/wt2domeAnim.html'){
        setTimeout(function(){
            window.location.pathname = '/dome.html'
        }, 7000);
    }
    // Speaking on info pages
    if (window.location.pathname == '/oldwell.html') {   
        responsiveVoice.speak("The Old Well", "US English Male");
        responsiveVoice.speak("the old well was built in 1897 and served as the main source of water on campus at the time.", "US English Male"); 
        responsiveVoice.speak("It was given a renovation in 1954, where it has since become the main symbol of the university.", "US English Male");
        responsiveVoice.speak("Press any letter to continue", "US English Male");
    } else if (window.location.pathname == '/belltower.html') {
        responsiveVoice.speak("The Bell Tower", "US English Male");
        responsiveVoice.speak("The Morehead-Patterson Bell Tower is the large functioning bell tower on campus.", "US English Male"); 
        responsiveVoice.speak("It rings every 15 minutes, chimes a unique tune every hour, and plays many of the universities songs during celebrations.", "US English Male");
        responsiveVoice.speak("Press any letter to continue", "US English Male");
    } else if (window.location.pathname == '/kenan.html'){
        responsiveVoice.speak("Kenan Stadium", "US English Male");
        responsiveVoice.speak("Kenan Memorial Football Stadium is home to the U N C Football team.", "US English Male");
        responsiveVoice.speak("The stadium opened in 1927 and held 24,000 fans.", "US English Male");
        responsiveVoice.speak("As of the most recent expansion, the stadium now can seat 50,500 Tar Heel fans!", "US English Male");
        responsiveVoice.speak("Press any letter to continue", "US English Male");
    }

    if (window.location.pathname == '/watertower.html'){
        responsiveVoice.speak("water tower", "US English Male");
        responsiveVoice.speak("the water tower that sits on the souther part of campus was built in 1957 and holds 1 million gallons of water", "US English Male");
        responsiveVoice.speak("after lots of vandalism to the tower, the university had it painted carolina blue for $73,000 in 1981","US English Male");
        responsiveVoice.speak("press any key to continue", "US English Male");
    }

    if (window.location.pathname == '/dome.html'){
        responsiveVoice.speak("The Dean E. Smith Center", "US English Male");
        responsiveVoice.speak("the dean dome, as its commonly called, is one of the most famous college basketball arenas in the country", "US English Male");
        responsiveVoice.speak("the tar heels have 7 national players of the year, as well as 6 national championships!", "US English Male");
        responsiveVoice.speak("press any letter to continue", "US English Male");
    }

    if (window.location.pathname == '/gameover.html'){
        responsiveVoice.speak("congratulations! you returned rameses to the dean dome and helped the tar heels pull off the victory", "US English Male");
        responsiveVoice.speak("if you wish to play again, just hit any letter!", "US English Male");
    }   
});
}

function switchPage() {
    if(window.location.pathname == '/index.html'){  
        window.location.pathname = '/start2ow.html';  
    } else if (window.location.pathname == '/start2ow.html'){
        window.location.pathname = '/start2owAnim.html'
    } else if (window.location.pathname == '/oldwell.html'){
        window.location.pathname = '/levelone.html';
    } else if (window.location.pathname == '/belltower.html'){
        window.location.pathname = '/leveltwo.html';
    } else if (window.location.pathname == '/kenan.html'){
        window.location.pathname = '/levelthree.html'
    } else if (window.location.pathname == '/watertower.html'){
        window.location.pathname = '/levelfour.html'
    } else if (window.location.pathname == '/dome.html'){
        window.location.pathname = '/levelfive.html'
    } else if (window.location.pathname == '/gameover.html'){
        window.location.pathname = '/index.html';
    }
}
 

function speakIntro() {
    responsiveVoice.speak(document.getElementById("levelHeader").textContent, "US English Male");
    responsiveVoice.speak(document.getElementById("levelIntro").textContent, "US English Male");
}

function levelOneTyping() {
    let fullWord = '';
    $(document).ready(function () { 
        speakIntro();
    });

    const $levelOneInput = $('#levelOneInput');
    let formToAdd = ``;
    let x = 0;

    while (x < levelOne.length) {
        if (x == 0) {
            formToAdd = `<input class="inputs" type="text" id="input${x}" maxlength="1" autofocus>`
        } else {
            formToAdd = `<input class="inputs" type="text" id="input${x}" maxlength="1" onfocus="this.value=''">`
        }
        $levelOneInput.append(formToAdd);
        x++;
    };
    levelInputX = 0; // change all other typing functions to include this logic
    $(".keyboard-key").on({
        mousedown: function () {
            event.preventDefault();
            responsiveVoice.speak($(this).text().toLowerCase(), "US English Male");
            if ($(this).text().toLowerCase() == levelOne.charAt(levelInputX)) {
                fullWord += $(this).text().toLowerCase();
                $("#input" + levelInputX).val($(this).text().toLowerCase());
                $("#input" + levelInputX).next(".inputs").focus();
                levelInputX++;
                if (levelInputX < levelOne.length) {
                    document.getElementById("input" + levelInputX).value = '';
                } else {
                    levelInputX = levelOne.length - 1; 
                }
            } else {
                $("#input" + levelInputX).val($(this).text().toLowerCase());
            }

            if (fullWord.length > levelOne.length) {
                fullWord = fullWord.substring(0, levelOne.length); 
            }
            if (fullWord.length == levelOne.length) {
                // May not be able to check by length once we get to last letter
                // Change where line 86 goes, may need to be reworded and moved into the line 87 if statement
                console.log(fullWord);
                responsiveVoice.speak("you typed in: " + fullWord.toLowerCase(), "US English Male");
                if (fullWord === levelOne) {
                    responsiveVoice.speak("good job, you beat level one", "US English Male");
                    setTimeout(function () {
                        window.location.pathname = '/ow2btAnim.html';
                    }, 6500);
                }
            }
        }
    });
}

function levelTwoTyping() {
    let fullWord = '';
    $(document).ready(function () {
        speakIntro();
    });

    const $levelTwoInput = $('#levelTwoInput');
    let formToAdd = ``;
    let x = 0;

    while (x < levelTwo.length) {
        if (x == 0) {
            formToAdd = `<input class="inputs" type="text" id="input${x}" maxlength="1" autofocus>`
        } else {
            formToAdd = `<input class="inputs" type="text" id="input${x}" maxlength="1" onfocus="this.value=''">`
        }
        $levelTwoInput.append(formToAdd);
        x++;
    };
    levelInputX = 0; // change all other typing functions to include this logic
    $(".keyboard-key").on({
        mousedown: function () {
            event.preventDefault();
            responsiveVoice.speak($(this).text().toLowerCase(), "US English Male");
            if ($(this).text().toLowerCase() == levelTwo.charAt(levelInputX)) {
                fullWord += $(this).text().toLowerCase();
                $("#input" + levelInputX).val($(this).text().toLowerCase());
                $("#input" + levelInputX).next(".inputs").focus();
                levelInputX++;
                if (levelInputX < levelTwo.length) {
                    document.getElementById("input" + levelInputX).value = ''; 
                } else {
                    levelInputX = levelTwo.length - 1;
                }
            } else {
                $("#input" + levelInputX).val($(this).text().toLowerCase());
            }

            if (fullWord.length > levelTwo.length) {
                fullWord = fullWord.substring(0, levelTwo.length);
            }
            if (fullWord.length == levelTwo.length) {
                // May not be able to check by length once we get to last letter
                // Change where line 86 goes, may need to be reworded and moved into the line 87 if statement
                responsiveVoice.speak("you typed in: " + fullWord.toLowerCase(), "US English Male");
                if (fullWord === levelTwo) {
                    responsiveVoice.speak("good job, you beat level two", "US English Male");
                    setTimeout(function () {
                        window.location.pathname = '/bt2kenanAnim.html';
                    }, 6500);
                }
            }
        }
    });
}

function levelThreeTyping() {
    let fullWord = '';
    $(document).ready(function () {
        speakIntro();
    });

    const $levelThreeInput = $('#levelThreeInput');
    let formToAdd = ``;
    let x = 0;

    while (x < levelThree.length) {
        if (x == 0) {
            formToAdd = `<input class="inputs" type="text" id="input${x}" maxlength="1" autofocus>`
        } else {
            formToAdd = `<input class="inputs" type="text" id="input${x}" maxlength="1" onfocus="this.value=''">`
        }
        $levelThreeInput.append(formToAdd);
        x++;
    };
    levelInputX = 0; // change all other typing functions to include this logic
    $(".keyboard-key").on({
        mousedown: function () {
            event.preventDefault();
            responsiveVoice.speak($(this).text().toLowerCase(), "US English Male");
            if ($(this).text().toLowerCase() == levelThree.charAt(levelInputX)) {
                fullWord += $(this).text().toLowerCase();
                $("#input" + levelInputX).val($(this).text().toLowerCase());
                $("#input" + levelInputX).next(".inputs").focus();
                levelInputX++;
                if (levelInputX < levelThree.length) {
                    document.getElementById("input" + levelInputX).value = '';
                } else {
                    levelInputX = levelThree.length - 1;
                }
            } else {
                $("#input" + levelInputX).val($(this).text().toLowerCase()); 
            }

            if (fullWord.length > levelThree.length) {
                fullWord = fullWord.substring(0, levelThree.length);
            }
            if (fullWord.length == levelThree.length) {
                // May not be able to check by length once we get to last letter
                // Change where line 86 goes, may need to be reworded and moved into the line 87 if statement
                responsiveVoice.speak("you typed in: " + fullWord.toLowerCase(), "US English Male");
                if (fullWord === levelThree) {
                    responsiveVoice.speak("good job, you beat level three", "US English Male");
                    setTimeout(function () {
                        window.location.pathname = '/kenan2wtAnim.html';
                    }, 6500);
                }
            }
        }
    });
}

function levelFourTyping() {
    let fullWord = '';
    $(document).ready(function () {
        speakIntro();
    });

    const $levelFourInput = $('#levelFourInput');
    let formToAdd = ``;
    let x = 0;

    while (x < levelFour.length) {
        if (x == 0) {
            formToAdd = `<input class="inputs" type="text" id="input${x}" maxlength="1" autofocus>`
        } else {
            formToAdd = `<input class="inputs" type="text" id="input${x}" maxlength="1" onfocus="this.value=''">`
        }
        $levelFourInput.append(formToAdd);
        x++;
    };
    levelInputX = 0; // change all other typing functions to include this logic
    $(".keyboard-key").on({
        mousedown: function () {
            event.preventDefault();
            responsiveVoice.speak($(this).text().toLowerCase(), "US English Male");
            if ($(this).text().toLowerCase() == levelFour.charAt(levelInputX)) {
                fullWord += $(this).text().toLowerCase();
                $("#input" + levelInputX).val($(this).text().toLowerCase());
                $("#input" + levelInputX).next(".inputs").focus();
                levelInputX++;
                if (levelInputX < levelFour.length) {
                    document.getElementById("input" + levelInputX).value = '';
                } else {
                    levelInputX = levelFour.length - 1;
                }
            } else {
                $("#input" + levelInputX).val($(this).text().toLowerCase());
            }

            if (fullWord.length > levelFour.length) {
                fullWord = fullWord.substring(0, levelFour.length);
            }
            if (fullWord.length == levelFour.length) {
                // May not be able to check by length once we get to last letter
                // Change where line 86 goes, may need to be reworded and moved into the line 87 if statement
                responsiveVoice.speak("you typed in: " + fullWord.toLowerCase(), "US English Male");
                if (fullWord === levelFour) {
                    responsiveVoice.speak("good job, you beat level four", "US English Male");
                    setTimeout(function () {
                        window.location.pathname = '/wt2domeAnim.html';
                    }, 6500);
                }
            }
        }
    });
}

function levelFiveTyping() {
    let fullWord = '';
    $(document).ready(function () {
        speakIntro();
    });

    const $levelFiveInput = $('#levelFiveInput');
    let formToAdd = ``;
    let x = 0;

    while (x < levelFive.length) {
        if (x == 0) {
            formToAdd = `<input class="inputs" type="text" id="input${x}" maxlength="1" autofocus>`
        } else {
            formToAdd = `<input class="inputs" type="text" id="input${x}" maxlength="1" onfocus="this.value=''">`
        }
        $levelFiveInput.append(formToAdd);
        x++;
    };
    levelInputX = 0; // change all other typing functions to include this logic
    $(".keyboard-key").on({
        mousedown: function () {
            event.preventDefault();
            responsiveVoice.speak($(this).text().toLowerCase(), "US English Male");
            if ($(this).text().toLowerCase() == levelFive.charAt(levelInputX)) {
                fullWord += $(this).text().toLowerCase();
                $("#input" + levelInputX).val($(this).text().toLowerCase());
                $("#input" + levelInputX).next(".inputs").focus();
                levelInputX++;
                if (levelInputX < levelFive.length) {
                    document.getElementById("input" + levelInputX).value = '';
                } else {
                    levelInputX = levelFive.length - 1;
                }
            } else {
                $("#input" + levelInputX).val($(this).text().toLowerCase());
            }

            if (fullWord.length > levelFive.length) {
                fullWord = fullWord.substring(0, levelFive.length);
            }
            if (fullWord.length == levelFive.length) {
                // May not be able to check by length once we get to last letter
                // Change where line 86 goes, may need to be reworded and moved into the line 87 if statement
                responsiveVoice.speak("you typed in: " + fullWord.toLowerCase(), "US English Male");
                if (fullWord === levelFive) {
                    responsiveVoice.speak("good job, you beat level five", "US English Male");
                    setTimeout(function () {
                        window.location.pathname = '/gameover.html';
                    }, 6500);
                    
                }
            }
        }
    });
}
// Still need to address:
//  Voice direction of where the correct key is in relation to the key pressed 
//  CSS Notes: Make Keys Bigger
//  Any accesibility features I can add in 





