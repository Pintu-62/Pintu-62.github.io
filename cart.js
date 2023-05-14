const SHEET_ID = '1oKZkAlaECmEaYfXpqZ7Vo0EpxqQ-hfJ2GdqNLHE5vVI';
const API_KEY = 'AIzaSyCa_LiyI9rO2fdH93USdYjmIMk9k8vqQJs';
const sheet_name = 'Cart';
const range = 'A2:H10000';
var i = 0;
var totalprice = 0;
var prices = [];
var final = 0;
var mode = 0;

const Delivery = 300;
const Discount = 10;

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheet_name}!${range}?key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
    const productList = document.getElementById('cart-list');

    data.values.forEach(product => {
        const [title, mrp, price, dis, imageUrl, Flavor, Size, Quantity, ] = product;

        const productElement = document.createElement('div');
        productElement.classList.add('cart-product');

        const product_mElement = document.createElement('div');
        product_mElement.classList.add('cart-product-m');

        const imgeElement = document.createElement('div');
        imgeElement.classList.add('img-con');
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imgeElement.appendChild(imageElement);
        product_mElement.appendChild(imgeElement);

        const text_cElement = document.createElement('div');
        text_cElement.classList.add('text-con');
        const titleElement = document.createElement('h2');
        titleElement.textContent = title;
        text_cElement.appendChild(titleElement);

        const fla_size_cElement = document.createElement('div');
        fla_size_cElement.classList.add('fla-size-con');

        const flavorElement = document.createElement('h2');
        flavorElement.textContent = 'Flavour: ' + Flavor;
        fla_size_cElement.appendChild(flavorElement);

        const sizeElement = document.createElement('h2');
        sizeElement.classList.add('size-space-giver');
        sizeElement.textContent = 'Size: ' + Size + ' Kg';
        fla_size_cElement.appendChild(sizeElement);

        text_cElement.appendChild(fla_size_cElement);
        product_mElement.appendChild(text_cElement);

        productElement.appendChild(product_mElement);

        const qty_price_cElement = document.createElement('div');
        qty_price_cElement.classList.add('qty_price_con');
        
        const priceElement = document.createElement('h1');
        priceElement.classList.add('font-size');
        priceElement.textContent = price + '/-';
        qty_price_cElement.appendChild(priceElement);

        const QtyElement = document.createElement('h1');
        QtyElement.classList.add('font-size');
        QtyElement.textContent = Quantity;
        qty_price_cElement.appendChild(QtyElement);

        const totalElement = document.createElement('h1');
        totalElement.classList.add('font-size');
        totalElement.textContent = price*Quantity + '/-'
        qty_price_cElement.appendChild(totalElement);

        prices[i] = price*Quantity;

        productElement.appendChild(qty_price_cElement);

        i++;

        productList.appendChild(productElement);

    });

    for (let i = 0; i < prices.length; i++) {
        totalprice = totalprice + prices[i];
    }
    const write = document.getElementById('sum-of');
    write.textContent = totalprice.toFixed(2);
});

const D_charge = document.getElementById('D-charge');
D_charge.textContent = Delivery.toFixed(2);

const D_DIS = document.getElementById('show-dis');
D_DIS.textContent = ' (' + Discount + '%) '

setTimeout(calculate, 1200)

const button = document.getElementById('coupon_apply');
button.addEventListener('click',calculate);

function calculate() {

    var total_final = document.getElementById('sum-of').textContent;

    const D_discount = document.getElementById('discount-D');
    D_discount.textContent = ((total_final/100)*Discount).toFixed(2);

    const C_discount = document.getElementById('coupon-input').value;

    const show = document.getElementById('show-dis2');
    show.textContent = ' (' + C_discount + '%)';

    const C_disc = document.getElementById('C_disc');
    C_disc.textContent = ((total_final/100)*C_discount).toFixed(2);

    const total = document.getElementById('total');
    total.textContent = ((total_final - ((total_final/100)*Discount) - ((total_final/100)*C_discount))+Delivery).toFixed(2); 
}


const check_out_button = document.getElementById('check-out');
check_out_button.addEventListener('click', () => {
    const get_total = document.getElementById('total');
    total = (get_total.textContent);

    window.location.href = `check out.html?Total=${total}`;
});

