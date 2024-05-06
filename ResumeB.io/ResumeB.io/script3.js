function addNewWEField() {
    //console.log("Adding New Field");
    //for work experience

    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}


function addNewOBField() {
    //console.log("Adding New Field");
    //for objective

    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("obField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let obOb = document.getElementById("ob");
    let obAddButtonOb = document.getElementById("obAddButton");

    obOb.insertBefore(newNode,obAddButtonOb);
}

function addNewHField() {
    //console.log("Adding New Field");
    //For Hobbies
    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("hField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let hOb = document.getElementById("h");
    let hAddButtonOb = document.getElementById("hAddButton");

    hOb.insertBefore(newNode,hAddButtonOb);
}


function addNewSPField() {
    //console.log("Adding New Field");
    //For sport

    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("spField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let spOb = document.getElementById("sp");
    let spAddButtonOb = document.getElementById("spAddButton");

    spOb.insertBefore(newNode,spAddButtonOb);
}

function addNewACField() {
    //console.log("Adding New Field");
    //For Achivement

    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("acField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let acOb = document.getElementById("ac");
    let acAddButtonOb = document.getElementById("acAddButton");

    acOb.insertBefore(newNode,acAddButtonOb);
}

//generating cv

function generateCV(){


    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

let nameField = document.getElementById("nameField").value;
let nameT1 = document.getElementById("nameT1");

nameT1.innerHTML = nameField;

//direct

document.getElementById("nameT2").innerHTML = nameField;
//contact

document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

//address

document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

//dob

document.getElementById("dobT").innerHTML = document.getElementById("dobField").value;

//objective

document.getElementById("obT").innerHTML = document.getElementById("objectiveField").value;

document.getElementById("spT").innerHTML = document.getElementById("spField").value;

document.getElementById("hT").innerHTML = document.getElementById("hobbiesField").value;


//OF loop using to get output in list
//Workexperience

let wes = document.getElementsByClassName("weField");

let str = "";

for(let e of wes){
    str = `${str}<li> ${e.value} </li>`;
}

document.getElementById("weT").innerHTML = str;

// Objective

let obs = document.getElementsByClassName("obField");

let str1 = "";

for(let e of obs){
    str1 = `${str1}<li> ${e.value} </li>`;
}

document.getElementById("obT").innerHTML = str1;

//Achivement

let acs = document.getElementsByClassName("acField");

let str2 = "";

for(let e of acs){
    str2 = `${str2}<li> ${e.value} </li>`;
}

document.getElementById("acT").innerHTML = str2;

//Strength

let sps = document.getElementsByClassName("spField");

let str3 = "";

for(let e of sps){
    str3 = `${str3}<li> ${e.value} </li>`;
}

document.getElementById("spT").innerHTML = str3;

//hobbies

let hs = document.getElementsByClassName("hField");

let str4  = "";

for(let e of hs){
    str4 = `${str4}<li> ${e.value} </li>`;
}

document.getElementById("hT").innerHTML = str4;


//qualification

document.getElementById("aqT").innerHTML = document.getElementById("eqField").value;

//code for setting image

let file = document.getElementById('imgField').files[0]
console.log(file);
let reader = new FileReader()
reader.readAsDataURL(file);
console.log(reader.result);

// set the image

reader.onloadend = function(){
    document.getElementById('imgT').src = reader.result;
};

document.getElementById("cv-form").style.display='none'
document.getElementById("cv-template").style.display='block'
}

//print cv                        

function printCV(){
    window.print();
}
