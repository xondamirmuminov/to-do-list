// var number = 22e2;
// var number2 = 0257;
// var number3 = 938304;

// console.log(number);
// console.log(number2.toString());
// console.log(number3.toFixed(1));

var formInp = document.querySelector('.form__inp');
var formBtn = document.querySelector('.form__btn');
var noCheck = document.querySelector('#not-text');
var checkText = document.querySelector('#check-text');
var list = document.querySelector('.form__list');
var listItem = document.querySelector('.form__list-item');
var audio = document.querySelector('.form__audio');
var listInp = document.querySelector('.form__list-inp');
var time = document.querySelector('.form__time');
var btnNone = true;
setInterval(function(){
    time.innerHTML =  new Date().toLocaleTimeString('ru');;
}, 000);
function task(e) {
    e.preventDefault();
    // var addList = document.createElement("li");
    // var nodeList = document.createTextNode(`
    //     <div class='form__list-item'>
    //     ${formInp.value}
    //         <button class="btn-none" onclick="check()">
    //             <a id="not-text" href="#">❌</a> 
    //             <a id="check-text" href="#">✅</a>
    //         </button>
    //     </div>
    // `);
    setInterval(function (){
        var date = new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' });
        console.log(date);
        if(btnNone == true && date == listInp.value ) {
            audio.play();
        }else {
              audio.pause();}
    }, 3000);

    var template = `<li class="form__list-item">
        ${formInp.value}
        <button class="btn-none" onclick="check(this)">
            <a id="not-text" href="#">❌</a> 
         </button>
   </li>`;

    list.innerHTML += template;
    // list.appendChild(nodeList);
};
function check(el){
    audio.pause();
    btnNone = false;
    el.parentElement.classList.add('form__list-item--deleted')

};



// var n = 9.4468948;
// console.log(n.toFixed(2));
// console.log(n.toPrecision(3));
// console.log(n.toFixed(2));

// var day = new Date();
// console.log(day.getMonth());