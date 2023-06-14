// hiển thị form login 
const loginButton = document.querySelector('.heading__account--btn');
const registerButton = document.querySelector('.heading__account--register');
const modalOverlay = document.querySelector('.modal-overlay');
const modalOverlay1 = document.querySelector('.modal-overlay1');
const closeButton = document.querySelector('.form__close-button');
const closeButton1 = document.querySelector('.form__close-button1');
const form = document.querySelector('.container');

loginButton.addEventListener('click', function() {
  modalOverlay.style.display = 'block';
});

registerButton.addEventListener('click', function() {
  modalOverlay1.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  if (modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});
closeButton1.addEventListener('click', function() {
  if (modalOverlay1) {
    modalOverlay1.style.display = 'none';
  }
});

// Ẩn hiện thị mật khẩu 
function showPassword() {
  const password = document.querySelector('.input-password');
  if (password.type === "password") {
    password.type = 'text';
  }else {
    password.type = 'password'
  }
}


 // Lấy thông tin phần tử HTML trên 
const servicesCards = document.querySelector('.main__services--cards');
const servicesBtnP = document.getElementById('servicesBtnP');
const servicesBtnN = document.getElementById('servicesBtnN');
let services_currentSlide = 0;

//tải danh sách từ API mock và hiển thị
async function servicesLoadImages() {
  const servicesPesponse = await fetch('https://64818aa329fa1c5c503191e0.mockapi.io/ass');
  const servicesResult = await servicesPesponse.json();
  servicesCards.innerHTML = "";
  servicesResult.forEach((services, index) => {
    const servicesItem = document.createElement('div');
    servicesItem.innerHTML = `
      <div class="main__services--card">
        <img src="${services.img}" alt="">
        <div class="services--content-text">
          <h6>Fall in love among the winding streets and snow-covered</h6>
          <p>Prague, Czechia</p>
          <div class="services--content-card-info">
            <h7>$250</h7>
            <c>7 days tour</c>
            <i class="fa-solid fa-cart-plus fa-xl" style="color:const(--main-color)"></i>
          </div>
        </div>
      </div>
    `;
    servicesCards.appendChild(servicesItem);
  });
  servicesSlideTo(services_currentSlide);

  //các nút chuyển đổi và chuyển đổi giữa các card
  servicesBtnN.addEventListener('click', () => {
    const servicesCard = document.querySelectorAll('.main__services--card').length;
    services_currentSlide = Math.min(services_currentSlide + 1, servicesCard - 1);
    servicesSlideTo(services_currentSlide);
  });

  servicesBtnP.addEventListener('click', () => {
    services_currentSlide = Math.max(services_currentSlide - 1, 0);
    servicesSlideTo(services_currentSlide);
  });
}

// Chuyển đổi giữa các hình ảnh
function servicesSlideTo(slideIndex) {
  const servicesCards = document.querySelectorAll('.main__services--card');
  for (let i = 0; i < servicesCards.length; i++) {
    servicesCards[i].style.display = "none";
  }
  servicesCards[slideIndex].style.display = "block";
}

//tải danh sách từ API mock và hiển thị
servicesLoadImages();
  function servicesSlideTo(servicesSlideIndex) {
    const servicesSlideWidth = document.querySelector('.main__services--card').offsetWidth;
    const servicestranslateX = -servicesSlideWidth * servicesSlideIndex;
    servicesCards.style.transform = `translateX(${servicestranslateX}px)`;
  }
  
  servicesLoadImages();

 // Lấy thông tin phần tử HTML trên 
  const priceCards = document.querySelector('.main__price--cards');
  const priceBtnP = document.getElementById('priceBtnP');
  const priceBtnN = document.getElementById('priceBtnN');
  let price_currentSlide = 0;
//tải danh sách từ API mock và hiển thị
async function priceLoadImages() {
    const pricePesponse = await fetch('https://64818aa329fa1c5c503191e0.mockapi.io/ass');
    const priceResult = await pricePesponse.json();
    priceCards.innerHTML = "";
    priceResult.forEach((price, index) => {
      const priceItem = document.createElement('div');
      priceItem.innerHTML = `
        <div class="main__price--card">
          <img class="main__price--card-img" src="${price.img}" alt="">
          <div class="price--card--title">
            <h4>${price.id}</h4>
          </div>
          <p>Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers.</p>
        </div>
      `;
      priceCards.appendChild(priceItem);
    });
    priceslideTo(price_currentSlide);
  //các nút chuyển đổi và chuyển đổi giữa các card
  priceBtnN.addEventListener('click', () => {
      const priceCard = document.querySelectorAll('.main__price--card').length;
      price_currentSlide = Math.min(price_currentSlide + 1, priceCard - 1);
      priceslideTo(price_currentSlide);
    });
  
    priceBtnP.addEventListener('click', () => {
      price_currentSlide = Math.max(price_currentSlide - 1, 0);
      priceslideTo(price_currentSlide);
    });
  }
//tải danh sách từ API mock và hiển thị
function priceslideTo(priceSlideIndex) {
    const priceSlideWidth = document.querySelector('.main__price--card').offsetWidth;
    const pricetranslateX = -priceSlideWidth * priceSlideIndex;
    priceCards.style.transform = `translateX(${pricetranslateX}px)`;
  }
  
  priceLoadImages();



  // CART
 // Lấy phần tử "cart"
const cart = document.getElementById("cart");

// Lấy nút "Store" và "Close"
const headingStoreBtn = document.querySelector(".heading__account--store");
const closeCart = document.querySelector(".cart__close-button")

// Thêm sự kiện click cho "Store"
headingStoreBtn.addEventListener("click", function() {
    cart.classList.add("active");
    setTimeout(function() {
        cart.classList.add("show");
    }, 0);
});

// Thêm sự kiện double-click cho "Store"
headingStoreBtn.addEventListener("dblclick", function() {
    cart.classList.remove("show");
    setTimeout(function() {
        cart.classList.remove("active");
    }, 0);
});

// Thêm sự kiện click cho "Close"
closeCart.addEventListener("click", function() {
    cart.classList.remove("active");
    setTimeout(function() {
        cart.classList.add("show");
    }, 0);
});

// Lặp qua các nút "remove-cart" và thêm sự kiện click cho từng nút
function ready() {
    const removeCartButton = document.getElementsByClassName('remove-cart');
    for(let i = 0; i<removeCartButton.length; i++) {
        const button = removeCartButton[i];
        button.addEventListener("click", removeCartItem);
    }
}

// Xóa phần tử khi click vào nút "remove-cart"
function removeCartItem(){
    const buttonClick = event.target;
    setTimeout(()=>{
        buttonClick.parentElement.remove();
    },200)
}

// Gọi hàm ready khi trang web được tải xong
ready();

// gọi input namber ,khi tăng value thi 