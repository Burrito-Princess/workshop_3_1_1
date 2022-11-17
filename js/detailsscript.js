const params = new Proxy(new URLSearchParams(window.location.search),{
    get: (searchParams, prop) => searchParams.get(prop),
});

let price = params.price;
let product = params.name;
// alert(price);

// document.write(price);

let infodiv = document.getElementById(`lowerdiscription`);
    infodiv.innerHTML=price;

let hello = document.getElementById(`information`);
    hello.innerHTML=product;