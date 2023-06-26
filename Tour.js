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

const servicesCards = document.querySelectorAll('.main__services--card');
const servicesImg = document.querySelectorAll('.services--card-img');
const servicesNamectry = document.querySelectorAll('.services--card-namecotry');
const servicesNamecity = document.querySelectorAll('.services--card-namecity');
const servicesMoney = document.querySelectorAll('.services--card-money');
const servicesTime = document.querySelectorAll('.services--card-time');
async function servicesLoadImages() {
  // Lấy thông tin phần tử HTML trên trang web
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

// Lấy tất cả các nút "Mua" trên trang
const buyButtons = document.querySelectorAll('.buy');

// Tìm div "cart__wrapper"
const cartWrapper = document.querySelector('.cart__wrapper');

// Lặp qua tất cả các nút "Mua"
buyButtons.forEach((button) => {

  // Thêm sự kiện "click" cho mỗi nút
  button.addEventListener('click', (event) => {

    // Tìm thẻ dịch vụ gần nhất
    const serviceCard = event.target.closest('.main__services--card');

    // Lấy thông tin ảnh từ thẻ dịch vụ
    const serviceImg = serviceCard.querySelector('.services--card-img').getAttribute('src');

    // Lấy các thông tin khác từ thẻ dịch vụ
    const serviceName = serviceCard.querySelector('.services--card-namecotry').textContent;
    const serviceInfo = serviceCard.querySelector('.services--card-namecity').textContent;
    const servicePrice = serviceCard.querySelector('.services--card-money').textContent;

    // Tạo một div mới cho sản phẩm trong giỏ hàng
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart__wrapper--item');

    // Thêm ảnh vào div
    const cartImg = document.createElement('img');
    cartImg.classList.add('wrapper--item-img');
    cartImg.src = serviceImg;
    cartImg.alt = serviceName;
    cartItem.appendChild(cartImg);

    // Thêm tiêu đề và thông tin vào div
    const cartTitle = document.createElement('div');
    cartTitle.classList.add('cart__wrapper--item-title');
    cartTitle.innerHTML = `<h4 class="wrapper--item-namecotry">${serviceName}</h4><p class="wrapper--item-namecity">${serviceInfo}</p>`;
    cartItem.appendChild(cartTitle);

    // Thêm giá và input vào div
    const cartMoney = document.createElement('div');
    cartMoney.classList.add('cart__wrapper--item-money');
    cartMoney.innerHTML = `
    <h7 class="wrapper--item-money">${servicePrice} <b>$</b></h7>
    <div class="people"><b>People:</b><input type="number" value="0" min="0" max="10" class="number"></div>`;
    cartItem.appendChild(cartMoney);

    // Thêm nút xoá vào div
    const removeButton = document.createElement('i');
    removeButton.classList.add('fa-solid', 'fa-trash-can', 'remove-cart', 'fa-xl');
    removeButton.addEventListener('click', () => {
      cartItem.remove();
    });
    cartItem.appendChild(removeButton);

    // Thêm sản phẩm vào div "cart__wrapper"
    cartWrapper.appendChild(cartItem);
  });
});

// Tính tổng số tiền của các sản phẩm trong giỏ hàng
function calculateTotal() {
  let total = 0;
  const cartItems = document.querySelectorAll('.cart__wrapper--item');
  cartItems.forEach((item) => {
    const price = item.querySelector('.wrapper--item-money').textContent;
    const quantity = item.querySelector('input[type="number"]').value;
    total += parseFloat(price) * quantity;
  });
  return total.toFixed(2);
}

// Lấy phần tử thanh toán
const cardPay = document.querySelector('.card__pay');

// Lấy nút "Mua"
const buyButton = cardPay.querySelector('.buy-button');

// Thêm sự kiện "click" cho nút "Mua"
buyButton.addEventListener('click', () => {
  const total = calculateTotal();
  if (total > 0) {
    const confirmed = confirm(`Bạn có chắc chắn muốn thanh toán ${total} USD?`);
    if (confirmed) {
      alert(`Bạn đã thanh toán thành công ${total} đồng. Cảm ơn bạn đã mua hàng!`);
      const cartItems = document.querySelectorAll('.cart__wrapper--item');
      cartItems.forEach((item) => {
        item.remove();
      });
    }
  } else {
    alert('Giỏ hàng của bạn đang trống. Vui lòng chọn sản phẩm để mua!');
  }
});
// Cập nhật tổng số tiền khi người dùng thay đổi số lượng sản phẩm trong giỏ hàng
cartWrapper.addEventListener('change', () => {
  const total = calculateTotal();
  cardPay.querySelector('h4').textContent = `Amount : ${total} $`;
});
// Xoá sản phẩm trong giỏ hàng
const removeButtons = document.querySelectorAll('.remove-cart');
removeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const cartItem = button.closest('.cart__wrapper--item');
    const price = cartItem.dataset.price;
    const quantity = cartItem.querySelector('input[type="number"]').value;
    const subtotal = parseFloat(price) * quantity;
    const total = parseFloat(calculateTotal()) - subtotal;
    cartItem.remove();
    cardPay.querySelector('h4').textContent = `Amount : ${total.toFixed(1)} USD`;
  });
});

// Thêm sản phẩm vào giỏ hàng
const notification = document.querySelector('.notification');

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Thêm sản phẩm vào giỏ hàng
    // ...

    // Hiển thị thông báo
    notification.classList.add('show');

    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
      notification.classList.remove('show');
    }, 2000);
  });
});

function checkLogin() {
  // Lấy giá trị của tên đăng nhập và mật khẩu
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Kiểm tra tên đăng nhập và mật khẩu
  if (username === "tran" && password === "12345") {
    alert("Đăng nhập thành công!");

  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
}

function register() {
  var name = document.getElementById("resuser").value;
  var email = document.getElementById("resemail").value;
  var password = document.getElementById("respass").value;
  
  // Kiểm tra thông tin đăng ký
  if (name !== "" && email !== "" && password !== "") {
    // Hiển thị thông báo thành công
    alert("Đăng ký thành công!");
  } else {
    // Hiển thị thông báo lỗi
    alert("Vui lòng nhập đầy đủ thông tin đăng ký.");
  }
}
