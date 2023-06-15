// Lấy các phần tử HTML từ trang web
const loginButton = document.querySelector('.heading__account--btn');
const registerButton = document.querySelector('.heading__account--register');
const modalOverlay = document.querySelector('.modal-overlay');
const modalOverlay1 = document.querySelector('.modal-overlay1');
const closeButton = document.querySelector('.form__close-button');
const closeButton1 = document.querySelector('.form__close-button1');
const form = document.querySelector('.container');
const password = document.querySelector('.input-password');

// Hiển thị form đăng nhập khi click vào button đăng nhập
loginButton.addEventListener('click', function() {
  modalOverlay.style.display = 'block';
});

// Hiển thị form đăng ký khi click vào button đăng ký
registerButton.addEventListener('click', function() {
  modalOverlay1.style.display = 'block';
});

// Ẩn form đăng nhập/ký khi click vào nút đóng
closeButton.addEventListener('click', function() {
  modalOverlay.style.display = 'none';
});

closeButton1.addEventListener('click', function() {
  modalOverlay1.style.display = 'none';
});

// Hiển thị mật khẩu khi click vào checkbox hiển thị mật khẩu
function showPassword() {
  if (password.type === "password") {
    password.type = 'text';
  } else {
    password.type = 'password'
  }
}




const cart = document.getElementById("cart");
// Lấy thông tin phần tử HTML trên trang web
const servicesCards = document.querySelector('.main__services--cards');
const servicesBtnP = document.getElementById('servicesBtnP');
const servicesBtnN = document.getElementById('servicesBtnN');
let services_currentSlide = 0;

// Tải danh sách hình ảnh từ API mock và hiển thị
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
          <h6>${services.namecity}</h6>
          <p>Prague, Czechia</p>
          <div class="services--content-card-info">
            <h7>${services.money}0 VND</h7>
            <c>7 days tour</c>
            <button class="buy">buy</button>
          </div>
        </div>
      </div>
    `;
    servicesCards.appendChild(servicesItem);
  });
  servicesSlideTo(services_currentSlide);

  // Những nút chuyển đổi và chuyển đổi giữa các card
  servicesBtnN.addEventListener('click', () => {
    const servicesCard = document.querySelectorAll('.main__services--card').length;
    services_currentSlide = Math.min(services_currentSlide + 1, servicesCard - 1);
    servicesSlideTo(services_currentSlide);
  });

  servicesBtnP.addEventListener('click', () => {
    services_currentSlide = Math.max(services_currentSlide - 1, 0);
    servicesSlideTo(services_currentSlide);
  });

  // Chuyển đổi giữa các hình ảnh
  function servicesSlideTo(slideIndex) {
    const servicesCards = document.querySelectorAll('.main__services--card');
    for (let i = 0; i < servicesCards.length; i++) {
      servicesCards[i].style.display = "none";
    }
    servicesCards[slideIndex].style.display = "block";
  }
   //tải danh sách từ API mock và hiển thị
  function servicesSlideTo(servicesSlideIndex) {
    const servicesSlideWidth = document.querySelector('.main__services--card').offsetWidth;
    const servicestranslateX = -servicesSlideWidth * servicesSlideIndex;
    servicesCards.style.transform = `translateX(${servicestranslateX}px)`;
  }
}

servicesLoadImages();

// Lấy thông tin phần tử HTML trên trang web
const priceCards = document.querySelector('.main__price--cards');
const priceBtnP = document.getElementById('priceBtnP');
const priceBtnN = document.getElementById('priceBtnN');
let price_currentSlide = 0;

// Tải danh sách hình ảnh từ API mock và hiển thị
async function priceLoadImages() {
  const pricePesponse = await fetch('https://64818aa329fa1c5c503191e0.mockapi.io/ass');
  const priceResult = await pricePesponse.json();
  priceCards.innerHTML = "";
  priceResult.forEach((price, index) => {
    const priceItem = document.createElement('div');
    priceItem.innerHTML = `
      <div class="main__price--card">
        <img class="main__price--card-img" src="${price.avatar}" alt="">
        <div class="price--card--title">
          <h4>${price.job}</h4>
        </div>
        <p>Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers.</p>
      </div>
    `;
    priceCards.appendChild(priceItem);
  });
  priceslideTo(price_currentSlide);

  // Những nút chuyển đổi và chuyển đổi giữa các card
  priceBtnN.addEventListener('click', () => {
    const priceCard = document.querySelectorAll('.main__price--card').length;
    price_currentSlide = Math.min(price_currentSlide + 1, priceCard - 1);
    priceslideTo(price_currentSlide);
  });

  priceBtnP.addEventListener('click', () => {
    price_currentSlide = Math.max(price_currentSlide - 1, 0);
    priceslideTo(price_currentSlide);
  });

  // Chuyển đổi giữa các hình ảnh
  function priceslideTo(priceSlideIndex) {
    const priceSlideWidth = document.querySelector('.main__price--card').offsetWidth;
    const pricetranslateX = -priceSlideWidth * priceSlideIndex;
    priceCards.style.transform = `translateX(${pricetranslateX}px)`;
  }
}

priceLoadImages();

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
// Gọi hàm ready 
ready();
