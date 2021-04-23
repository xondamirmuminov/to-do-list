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

function task(e) {
    e.preventDefault();
    // var addList = document.createElement("li");
    // var nodeList = document.createTextNode(`
    //     <div class='form__list-item'>
    //     ${formInp.value}
    //         <button class="btn-not" onclick="check()">
    //             <a id="not-text" href="#">❌</a> 
    //             <a id="check-text" href="#">✅</a>
    //         </button>
    //     </div>
    // `);
    var template = `<li class="form__list-item">
        ${formInp.value}
        <button class="btn-not" onclick="check(this)">
            <a id="not-text" href="#">❌</a> 
         </button>
   </li>`;

    list.innerHTML += template;
    // list.appendChild(nodeList);
};

function check(el){
    el.parentElement.classList.add('form__list-item--deleted');
};
