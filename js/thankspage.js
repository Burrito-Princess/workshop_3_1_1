const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let naam = params.fname;
let tussenv  = params.tussenv;
let lastname = params.Lname;
let nameofstreet = params.street;
let numberstreet = params.numberstreet;


let firstname = document.getElementById('name');
firstname.innerHTML=naam;
let tussen = document.getElementById('tussenv');
tussen.innerHTML=tussenv;
let lastname1 = document.getElementById('lastname');
lastname1.innerHTML=lastname;

let street = document.getElementById('street');
street.innerHTML= nameofstreet;
// let streetnumber = document.getElementById('number street');
// streetnumber.innerHTML= numberstreet;