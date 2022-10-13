
// STEPS TO COMPLETING THE GAME:
// 1. Make a 5 by 5 grid to enter letter and have a submit button
// 2. Create a way to input a 5 letter word from a different website
// 3. Alert the user the correct letter has been inputted

//for some reason i need this below, thought it can be replaced by code further below, but deleting this, breaks the functionality
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');


//to be able to autotab and check if letter is present in other boxes
const one1 = document.querySelector('[name="one1"]');
const one2 = document.querySelector('[name="one2"]');
const one3 = document.querySelector('[name="one3"]');
const one4 = document.querySelector('[name="one4"]');
const one5 = document.querySelector('[name="one5"]');
const two1 = document.querySelector('[name="two1"]');
const two2= document.querySelector('[name="two2"]');
const two3 = document.querySelector('[name="two3"]');
const two4 = document.querySelector('[name="two4"]');
const two5 = document.querySelector('[name="two5"]');
const three1 = document.querySelector('[name="three1"]');
const three2 = document.querySelector('[name="three2"]');
const three3 = document.querySelector('[name="three3"]');
const three4 = document.querySelector('[name="three4"]');
const three5 = document.querySelector('[name="three5"]');
const four1 = document.querySelector('[name="four1"]');
const four2 = document.querySelector('[name="four2"]');
const four3 = document.querySelector('[name="four3"]');
const four4 = document.querySelector('[name="four4"]');
const four5 = document.querySelector('[name="four5"]');
const five1 = document.querySelector('[name="five1"]');
const five2 = document.querySelector('[name="five2"]');
const five3 = document.querySelector('[name="five3"]');
const five4 = document.querySelector('[name="five4"]');
const five5 = document.querySelector('[name="five5"]');

const final = document.getElementById('.finalword');
const word = localStorage.getItem('word')
const letter1 = word.charAt(0);
const letter2 = word.charAt(1);
const letter3 = word.charAt(2);
const letter4 = word.charAt(3);
const letter5 = word.charAt(4);

const lastguess = document.querySelector('.hide')

// function for background colour changing when letters are inputted into field
function enterLetter(x){
    let letter = x.value;
    let letterfinal = letter.toUpperCase();
    switch (true){
        case x == box1:
            y = word.charAt(0);
            a = word.charAt(1);
            b = word.charAt(2);
            c = word.charAt(3);
            d = word.charAt(4);
            e = two1.value.toUpperCase()
            f = three1.value.toUpperCase()
            g = four1.value.toUpperCase()
            h = five1.value.toUpperCase()
            break;
        case x == box2:
            y = word.charAt(1);
            a = word.charAt(0);
            b = word.charAt(2);
            c = word.charAt(3);
            d = word.charAt(4);
            e = one1.value.toUpperCase()
            f = three1.value.toUpperCase()
            g = four1.value.toUpperCase()
            h = five1.value.toUpperCase()
            break;
        case x == box3:
            y = word.charAt(2);
            a = word.charAt(1);
            b = word.charAt(0);
            c = word.charAt(3);
            d = word.charAt(4);
            e = two1.value.toUpperCase()
            f = one1.value.toUpperCase()
            g = four1.value.toUpperCase()
            h = five1.value.toUpperCase()
            break;
        case x == box4:
            y = word.charAt(3);
            a = word.charAt(1);
            b = word.charAt(2);
            c = word.charAt(0);
            d = word.charAt(4);
            e = two1.value.toUpperCase()
            f = three1.value.toUpperCase()
            g = one1.value.toUpperCase()
            h = five1.value.toUpperCase()
            break;
        case x == box5:
            y = word.charAt(4);
            a = word.charAt(1);
            b = word.charAt(2);
            c = word.charAt(3);
            d = word.charAt(0);
            e = two1.value.toUpperCase()
            f = three1.value.toUpperCase()
            g = four1.value.toUpperCase()
            h = one1.value.toUpperCase()
            break;
    }
    if (letterfinal == y){
        x.style.background = 'green';
    }
    else if (letterfinal == ''){
        x.style.background = 'antiquewhite';
    }
    //need to edit this code so that it doesn't look like there are many recurring letters
    else if (((letterfinal==a) || (letterfinal==b) || (letterfinal==c) || (letterfinal==d)) && (letterfinal != (e || f || g || h))) {
        x.style.background = 'yellow';
        console.log(letterfinal);
        console.log((e||f||g||h)==letterfinal);
    }
    else {
        x.style.background = 'red';
    }
}

function remove(){
    localStorage.removeItem("word");
};

function disableButton() {
    submit.disabled = true;
};


function moveCursor(fromBox,toBox) {
    let length = fromBox.value.length;
    let current = fromBox.getAttribute('maxlength');    
    if (length == current){
        toBox.focus();
    }
}

function moveLine(x){
    console.log(x.nextSibling);
    console.log(x.parentElement);
    console.log(x.firstChild);
}

console.log(word);


lastguess.textContent = word;

const box1s = document.querySelectorAll('#box1');
const box2s = document.querySelectorAll('#box2');
const box3s = document.querySelectorAll('#box3');
const box4s = document.querySelectorAll('#box4');
const box5s = document.querySelectorAll('#box5');

const submits = document.querySelectorAll('.submit')
box1s.forEach(box1 =>{
    submits.forEach(submit =>{
        submit.addEventListener('click', function() {enterLetter(box1)});
    });
});

box2s.forEach(box2 =>{
    submits.forEach(submit =>{
        submit.addEventListener('click', function() {enterLetter(box2)});
    });
});

box3s.forEach(box3 =>{
    submits.forEach(submit =>{
        submit.addEventListener('click', function() {enterLetter(box3)});
    });
});

box4s.forEach(box4 =>{
    submits.forEach(submit =>{
        submit.addEventListener('click', function() {enterLetter(box4)});
    });
});

box5s.forEach(box5 =>{
    submits.forEach(submit =>{
        submit.addEventListener('click', function() {enterLetter(box5)});
    });
});

submits.forEach(submit=>{
    submit.addEventListener('click', function() {
        submit.disabled = true;
    })
});

one1.addEventListener('keyup', function() {moveCursor(this,two1)})
two1.addEventListener('keyup', function() {moveCursor(this,three1)})
three1.addEventListener('keyup', function() {moveCursor(this,four1)})
four1.addEventListener('keyup', function() {moveCursor(this,five1)})

one2.addEventListener('keyup', function() {moveCursor(this,two2)})
two2.addEventListener('keyup', function() {moveCursor(this,three2)})
three2.addEventListener('keyup', function() {moveCursor(this,four2)})
four2.addEventListener('keyup', function() {moveCursor(this,five2)})

one3.addEventListener('keyup', function() {moveCursor(one3,two3)})
two3.addEventListener('keyup', function() {moveCursor(two3,three3)})
three3.addEventListener('keyup', function() {moveCursor(three3,four3)})
four3.addEventListener('keyup', function() {moveCursor(four3,five3)})

one4.addEventListener('keyup', function() {moveCursor(one4,two4)})
two4.addEventListener('keyup', function() {moveCursor(two4,three4)})
three4.addEventListener('keyup', function() {moveCursor(three4,four4)})
four4.addEventListener('keyup', function() {moveCursor(four4,five4)})

one5.addEventListener('keyup', function() {moveCursor(one5,two5)})
two5.addEventListener('keyup', function() {moveCursor(two5,three5)})
three5.addEventListener('keyup', function() {moveCursor(three5,four5)})
four5.addEventListener('keyup', function() {moveCursor(four5,five5)})

submits.forEach(submit=>{
    submit.addEventListener('click', function(){moveLine(this)})
})

lastguess.addEventListener('click',function (e) {
    e.classList.remove('hide');
})











