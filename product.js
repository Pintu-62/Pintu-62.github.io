const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');
const price = urlParams.get('price');
const mrp = urlParams.get('mrp');
const dis = urlParams.get('dis');
const description = urlParams.get('des');
const imageUrl = urlParams.get('imageUrl');


const productImage = document.querySelector('.product-details img');
productImage.src = imageUrl;

const productName = document.querySelector('.product-details h1');
productName.textContent = title;

const productPrice = document.querySelector('.product-details .price');
productPrice.textContent = `Rs. ${price}`;

const productMrp = document.querySelector('.product-details .mrp');
productMrp.textContent = `Rs. ${mrp}`;

const productdis = document.querySelector('.product-details .dis');
productdis.textContent = dis + '%';

const productdes = document.querySelector('.product-details .des');
productdes.textContent = description;

//FUNCTION TO WRITE START//

function write(){
    const url = "https://script.google.com/macros/s/AKfycby4EkTHnujFhCxNbhtDw97DMeJRIGD6EqzKTtTLmHhy3Ba0RK8-ox1I1MFv5hZTD4wEqQ/exec";

    const sizeSelect = document.querySelector('#size');
    const size = sizeSelect.options[sizeSelect.selectedIndex].value;

    const QuanSelect = document.querySelector('#quan');
    const Quan = QuanSelect.options[QuanSelect.selectedIndex].value;

    const flavorSelect = document.querySelector('#flavour');
    const flavor = flavorSelect.options[flavorSelect.selectedIndex].value;

    fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        //credentials: 'same-origin',
        headers: {
            'content-Type': 'application/json'
        },
        redirect: 'follow',
        //referrerPolicy: 'no-referrer',
        body: JSON.stringify({SKU:title,MRP:mrp,Price:price,Discount:dis,Image:imageUrl,Flavor:flavor,Size:size,Quan:Quan})
    });
}

//FUNCTION TO WRITE END//

//Get the button element by ID
const addButton = document.getElementById('add-to-cart');

//Add a click event listener to the button
addButton.addEventListener('click', write); 



