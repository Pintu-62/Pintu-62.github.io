const SHEET_ID = '1oKZkAlaECmEaYfXpqZ7Vo0EpxqQ-hfJ2GdqNLHE5vVI';
const API_KEY = 'AIzaSyCa_LiyI9rO2fdH93USdYjmIMk9k8vqQJs';
{const sheet_name = 'top-selling';
const range = 'A2:G15';
const R_sign = "Rs. ";
  
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheet_name}!${range}?key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
    const productList = document.getElementById('top-selling');
      
  
      data.values.forEach(product => {
        const [title, mrp, imageUrl, price, dis, description, ] = product;
  
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const imgeElement = document.createElement('div');
        imgeElement.classList.add('img-con');
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imgeElement.appendChild(imageElement);
        productElement.appendChild(imgeElement);

        const title_cElement = document.createElement('div');
        title_cElement.classList.add('title_c');
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        title_cElement.appendChild(titleElement);
        productElement.appendChild(title_cElement);

        const pricing_cartElement = document.createElement('div');
        pricing_cartElement.classList.add('pricing_cart');

        const pricingElement = document.createElement('div');
        pricingElement.classList.add('pricing');

        const mrpElement = document.createElement('h5');
        mrpElement.textContent = R_sign + mrp;
        pricingElement.appendChild(mrpElement);
  
        const priceElement = document.createElement('h1');
        priceElement.textContent = R_sign + price;
        pricingElement.appendChild(priceElement);

        pricing_cartElement.appendChild(pricingElement);

        const pricing2Element = document.createElement('div');
        pricing2Element.classList.add('pricing2');

        const disElement = document.createElement('h2');
        disElement.classList.add('dis');
        disElement.textContent = dis + '%' + ' OFF';
        pricing2Element.appendChild(disElement);

        const cart_image = document.createElement('div');
        cart_image.classList.add('cart-image');
        cart_image.textContent = "View More";
        //cart_image.innerHTML = '<a href="cart.html"><i class="fa-solid fa-cart-shopping fa-3x product-cart"></i></a>';
        pricing2Element.appendChild(cart_image);

        pricing_cartElement.appendChild(pricing2Element);

        productElement.appendChild(pricing_cartElement);
        productList.appendChild(productElement);
  
        productElement.addEventListener('click', () => {
          window.location.href = `product.html?title=${title}&price=${price}&mrp=${mrp}&imageUrl=${imageUrl}&des=${description}&dis=${dis}`;
        });
      });
    });
  }



  {const sheet_name = 'flash-sell';
const range = 'A2:G15';
const R_sign = "Rs. ";
  
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheet_name}!${range}?key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const productList = document.getElementById('new-launch');
      
  
      data.values.forEach(product => {
        const [title, mrp, imageUrl, price, dis, description, ] = product;
  
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const imgeElement = document.createElement('div');
        imgeElement.classList.add('img-con');
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imgeElement.appendChild(imageElement);
        productElement.appendChild(imgeElement);

        const title_cElement = document.createElement('div');
        title_cElement.classList.add('title_c');
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        title_cElement.appendChild(titleElement);
        productElement.appendChild(title_cElement);

        const pricing_cartElement = document.createElement('div');
        pricing_cartElement.classList.add('pricing_cart');

        const pricingElement = document.createElement('div');
        pricingElement.classList.add('pricing');

        const mrpElement = document.createElement('h5');
        mrpElement.textContent = R_sign + mrp;
        pricingElement.appendChild(mrpElement);
  
        const priceElement = document.createElement('h1');
        priceElement.textContent = R_sign + price;
        pricingElement.appendChild(priceElement);

        pricing_cartElement.appendChild(pricingElement);

        const pricing2Element = document.createElement('div');
        pricing2Element.classList.add('pricing2');

        const disElement = document.createElement('h2');
        disElement.classList.add('dis');
        disElement.textContent = dis + '%' + ' OFF';
        pricing2Element.appendChild(disElement);

        const cart_image = document.createElement('div');
        cart_image.classList.add('cart-image');
        cart_image.textContent = "View More";
        //cart_image.innerHTML = '<a href="cart.html"><i class="fa-solid fa-cart-shopping fa-3x product-cart"></i></a>';
        pricing2Element.appendChild(cart_image);

        pricing_cartElement.appendChild(pricing2Element);

        productElement.appendChild(pricing_cartElement);
        productList.appendChild(productElement);
  
        productElement.addEventListener('click', () => {
          window.location.href = `product.html?title=${title}&price=${price}&mrp=${mrp}&imageUrl=${imageUrl}&des=${description}&dis=${dis}`;
        });
      });
    });
  }

  var banner_array = [
  ["url(images/hero.jpg)",
  "Whey Protein",
  "Lorem 1 Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  "google.com"],

  ["url(images/hero2.jpg)",
  "Whey Protein2",
  "Lorem 2 Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  "https://www.youtube.com/watch?v=504IurO7F94&list=RDMMUyoDdroSXXs&index=18"],

  ["url(images/hero3.png)",
  "Whey Protein3",
  "Lorem 3 Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  "facebook.com"],

  ["url(images/hero4.jpg)",
  "Whey Protein4",
  "Lorem 4 Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  "amazon.in"]
  ];

  var i = 0;

  function autoscroll () {

  i++;
  if(i > 3) {
    i = 0;
  }

  var hero_banner= document.getElementById("banner-1");
  hero_banner.style.backgroundImage=banner_array[i][0];
  hero_banner.innerHTML = 
  `<div class="text">
  <H1>${banner_array[i][1]}</H1>
  <p>${banner_array[i][2]}</p>
  <a href=${banner_array[i][3]}><button>Shop Now</button></a>
  </div>`;

  };

setInterval(autoscroll, 5000);