// var idd=document.getElementById('idd').style.color="red";
// document.getElementById('idd').style.removeProperty('color')
// getelementByclassName
// getelementBytagname

// var img=document.getElementById('img');
// img.setAttribute('alt','jahid');
// img.classList.add('test')
// console.log(img)

// var parent = document.getElementById("parent");
// console.log(parent.innerText);

// var input=document.getElementById('input');
// console.log(input.value)
// console.log(typeof(input)) -->string


// var parent = document.getElementById("parent").innerHTML
// console.log(parent);


// var parent = document.getElementsByClassName("parent");
// console.log(parent[0].childNodes);                     parent-Child niye khela korle obossoi 


// var parent = document.getElementsByClassName("parent");
// console.log(parent[0].parentNode);


// var newDiv=document.getElementById("newDiv") ;
// var p=document.createElement("p");
// p.innerText="Notun AMi";    ekhane HTML e append korsi notun element
// newDiv.appendChild(p)



// This is by using Function

// function create(){
//     var newDiv=document.getElementById("newDiv") ;
// var p=document.createElement("p");
// p.innerText="Notun AMi"; 
// newDiv.appendChild(p)

// }



// This addEventListener

// document.getElementById('button').addEventListener('click',
// function(e){
//     create()
// });



// document.getElementById('button').addEventListener('click',
// function(e){

//     var input=document.getElementById('input').value;
//     console.log(input)
// });
// reate()
// });


// document.getElementById('input').addEventListener('blur',
// function(e){

//     console.log('jahid')
// });


// document.getElementById('input').addEventListener('blur',
// function(e){

//     console.log(e.target.value)
// });

//  By Using Alada Function

// document.getElementById('input').addEventListener('blur',interChange);

// function interChange(e){

//     console.log(e.target.value)
// };


// uporer tar Shortcurt

// function interChange(e){

//     console.log("Hello")
// };


function clickHandler(e){

    var input=document.getElementById('input').value;
    console.log(input)
};







