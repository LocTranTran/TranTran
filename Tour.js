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

// Hiển thị mật khẩu khi click 
function showPassword() {
  if (password.type === "password") {
    password.type = 'text';
  } else {
    password.type = 'password'
  }
}


// Lấy thông tin phần tử HTML trên trang web
const servicesCards = document.querySelectorAll('.main__services--card');
const servicesImg = document.querySelectorAll('.services--card-img');
const servicesNamectry = document.querySelectorAll('.services--card-namecotry');
const servicesNamecity = document.querySelectorAll('.services--card-namecity');
const servicesMoney = document.querySelectorAll('.services--card-money');
const servicesTime = document.querySelectorAll('.services--card-time');

async function servicesLoadImages() {
  try {
    const servicesResponse = await fetch('https://64818aa329fa1c5c503191e0.mockapi.io/addres');
    const servicesData = await servicesResponse.json();

    if (Array.isArray(servicesData)) {
      for (let i = 0; i < servicesCards.length; i++) {
        const service = servicesData[i];
        servicesImg[i].src = service.img;
        servicesImg[i].alt = service.alt;
        servicesNamectry[i].textContent = service.namecotry;
        servicesNamecity[i].textContent = service.namecity;
        servicesTime[i].textContent = service.time;
        servicesMoney[i].textContent = service.money;
      }
    } else {
      console.error('Invalid data type returned from API.');
    }
  } catch (error) {
    console.error(error);
  }
}

servicesLoadImages();

const servicesBtnP = document.getElementById('servicesBtnP');
const servicesBtnN = document.getElementById('servicesBtnN');
let services_currentSlide = 0;
servicesSlideToWithTransform(services_currentSlide, servicesCards);

// Những nút chuyển đổi và chuyển đổi giữa các card
servicesBtnN.addEventListener('click', () => {
  const servicesCard = servicesCards.length;
  services_currentSlide = Math.min(services_currentSlide + 1, servicesCard - 1);
  servicesSlideToWithTransform(services_currentSlide, servicesCards);
});

servicesBtnP.addEventListener('click', () => {
  services_currentSlide = Math.max(services_currentSlide - 1, 0);
  servicesSlideToWithTransform(services_currentSlide, servicesCards);
});

// Chuyển đổi giữa các hình ảnh
function servicesSlideToWithTransform(servicesSlideIndex, servicesCards) {
  const servicesSlideWidth = document.querySelector('.main__services--card').offsetWidth;
  const servicestranslateX = -servicesSlideWidth * servicesSlideIndex;
  for (let i = 0; i < servicesCards.length; i++) {
    servicesCards[i].style.transform = `translateX(${servicestranslateX}px)`;
  }
}

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
function haha(){
  const buyButton = document.getElementById('buy');
  buyButton.addEventListener('click', function() {
   
    alert('Button clicked!');
  });

}