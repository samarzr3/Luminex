'use strict';

/**
 * navbar 
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})


  const categories = [
    {
      title: "Tree Night Light",
      img: "https://i5.walmartimages.com/seo/Yinrunx-Bonsai-Tree-Night-Light-Plug-Artificial-Lamp-108-LED-Lights-Usb-Touch-Switch-Fiber-Optic-Up-Indoor-Christmas-Decorations-Home-Warm-White_1a2210d0-81f8-447f-b069-3575ed7cd3a3.58dbfb60f3b2efb09fd9d46977725301.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    },
    {
      title: "Glow Lamp",
      img: "https://www.futoncompany.co.uk/images/detailed/80/FC_Glow_Lamp___1_.jpg"
    },
    {
      title: "Glass table Lamp",
      img: "https://img0.junaroad.com/uiproducts/15612031/zoom_0-1538734579.jpg"
    },
    {
      title: "3DStars Light Lamp",
      img: "https://i.pinimg.com/736x/7d/84/81/7d84812d1038a1571b386a54907fbcaf.jpg"
    },
    {
      title: "romantic Lamp",
      img: "https://img.fruugo.com/product/7/67/219229677_max.jpg"
    },
    {
      title: "Moon Lamp",
      img: "https://wallmantra.com/wp-content/uploads/wallmantra-table-lamp-ethereal-glow-moon-lamp-32122080067750.jpg"
    }
  ];

  const categoryList = document.getElementById("categoryList");

  categories.forEach(item => {
    const li = document.createElement("li");
    li.className = "category-item";
    li.innerHTML = `
      <figure class="category-banner">
        <img src="${item.img}" alt="${item.title}" loading="lazy" width="510" height="600" class="w-100">
      </figure>
      <a href="#" class="btn btn-secondary">${item.title}</a>
    `;
    categoryList.appendChild(li);
  });


  const services = [
    {
      icon: "./assets/images/service-icon-1.svg",
      title: "Free Shipping",
      text: "On All Order Over $599"
    },
    {
      icon: "./assets/images/service-icon-2.svg",
      title: "Easy Returns",
      text: "30 Day Returns Policy"
    },
    {
      icon: "./assets/images/service-icon-3.svg",
      title: "Secure Payment",
      text: "100% Secure Gaurantee"
    },
    {
      icon: "./assets/images/service-icon-4.svg",
      title: "Special Support",
      text: "24/7 Dedicated Support"
    }
  ];

  const serviceList = document.getElementById("serviceList");

  services.forEach(service => {
    const li = document.createElement("li");
    li.className = "service-item";
    li.innerHTML = `
      <div class="service-item-icon">
        <img src="${service.icon}" alt="Service icon">
      </div>
      <div class="service-content">
        <p class="service-item-title">${service.title}</p>
        <p class="service-item-text">${service.text}</p>
      </div>
    `;
    serviceList.appendChild(li);
  });

/**
 * products
 */

  const products = [
    {
      title: "Aurora Lamp",
      image: "./imagesL/home.webp",
      price: "48.75",
      oldPrice: "65.00",
      badge: "-25%",
      badgeColor: "red"
    },
    {
      title: "Aurora Lamp",
      image: "./imagesL/Au.jpg",
      price: "62.00",
      badge: "New",
      badgeColor: "green"
    },
    {
      title: "Smart Moon Lamp",
      image: "./imagesL/smart.jpg",
      price: "32.00"
    },
    {
      title: "Moon Lamp",
      image: "./imagesL/images.jpg",
      price: "84.00"
    },
    {
      title: "Aurora Lamp",
      image: "./imagesL/aurora.webp",
      price: "45.00"
    },
    {
      title: "Casper Lamp",
      image: "./imagesL/casper.webp",
      price: "30.00",
      oldPrice: "38.00"
    },
    {
      title: "Moon Lamp",
      image: "./imagesL/moon2.jpg",
      price: "25.00",
      oldPrice: "39.00"
    },
    {
      title: "Heart Lamp",
      image: "./imagesL/3.jpg",
      price: "85.00",
      oldPrice: "99.00"
    },
    {
      title: "Aurora Lamp",
      image: "./imagesL/170547308965a77441399f13628068.jpg",
      price: "32.00"
    },
    {
      title: "Glow Lamp",
      image: "./imagesL/9.jpg",
      price: "71.00",
      badge: "New",
      badgeColor: "green"
    }
  ];

  const productList = document.getElementById("productList");

  products.forEach(product => {
    const li = document.createElement("li");

    const badgeHTML = product.badge
      ? `<div class="card-badge ${product.badgeColor}">${product.badge}</div>`
      : "";

    const oldPriceHTML = product.oldPrice
      ? `<data value="${product.oldPrice}">&pound;${product.oldPrice}</data>`
      : "";

    li.innerHTML = `
      <div class="product-card">
        <figure class="card-banner">
          <a href="#">
            <img src="${product.image}" alt="${product.title}" loading="lazy" width="800" height="1034" class="w-100">
            
          </a>
          ${badgeHTML}
          <div class="card-actions">
            <button class="card-action-btn" aria-label="Quick view">
              <ion-icon name="eye-outline"></ion-icon>
            </button>
            <button class="card-action-btn cart-btn">
              <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
              <p>Add to Cart</p>
            </button>
           <button class="card-action-btn" aria-label="Add to Whishlist">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
          </div>
        </figure>
        <div class="card-content">
          <h3 class="h4 card-title">
            <a href="#">${product.title}</a>
          </h3>
          <div class="card-price">
            <data value="${product.price}">&pound;${product.price}</data>
            
            ${oldPriceHTML}

          </div>
        </div>
      </div>
    `;

    productList.appendChild(li);
  });


/**
 * cart functionality
 */
let cart = JSON.parse(localStorage.getItem("cart")) || [];


function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}


function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


function handleAddToCart(title, image, price) {
  cart.push({ title, image, price });
  saveCart();
  updateCartCount();
  
}


document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach(card => {
    const title = card.querySelector(".card-title a")?.textContent.trim();
    const image = card.querySelector(".card-banner img")?.getAttribute("src");
    const price = card.querySelector(".card-price data")?.textContent.trim();

    const addBtn = card.querySelector(".cart-btn");
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        handleAddToCart(title, image, price);
      });
    }
  });
});

function openCartPopup() {
  const popup = document.getElementById("cartPopup");
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalDisplay = document.getElementById("cartTotal");

  cartItemsContainer.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<li>Your cart is empty.</li>";
  } else {
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <div>
          <p>${item.title}</p>
          <p>£${item.price}</p>
          <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
      `;
      cartItemsContainer.appendChild(li);
console.log("Item price:", item.price);
      total += parseFloat(item.price.replace(/[^\d.]/g, ""));
    });
  }

  cartTotalDisplay.textContent = `Total: £${total.toFixed(2)}`;
  popup.style.display = "flex";
}

function closeCartPopup() {
  document.getElementById("cartPopup").style.display = "none";
}
document.getElementById("cartBtn").addEventListener("click", openCartPopup);

document.getElementById("closeCart").addEventListener("click", closeCartPopup);



document.querySelectorAll(".remove-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const index = this.dataset.index;
    cart.splice(index, 1); 
    saveCart();
    updateCartCount();
    openCartPopup(); 
  });
});

function openCartPopup() {
  const popup = document.getElementById("cartPopup");
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalDisplay = document.getElementById("cartTotal");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<li>Your cart is empty.</li>";
  } else {
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <div>
          <p>${item.title}</p>
          <p>£${item.price}</p>
          <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
      `;
      cartItemsContainer.appendChild(li);
      total += parseFloat(item.price);
    });

   
    document.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const index = parseInt(this.dataset.index);
        cart.splice(index, 1); 
        saveCart();
        updateCartCount();
        openCartPopup(); 
      });
    });
  }

  cartTotalDisplay.textContent = `Total: £${total.toFixed(2)}`;
  popup.style.display = "flex";
}




// WISHLISTE
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


function updateWishlistCount() {
  const countElem = document.getElementById("wishlistCount");
  countElem.textContent = wishlist.length;
}


function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}


function isInWishlist(title) {
  return wishlist.some(item => item.title === title);
}


function toggleWishlistItem(title, image, heartIcon) {
  if (isInWishlist(title)) {

    wishlist = wishlist.filter(item => item.title !== title);
    heartIcon.style.color = ""; 
  } else {
 
    wishlist.push({ title, image });
    heartIcon.style.color = "red"; 
  }
  saveWishlist();
  updateWishlistCount();
}

function markWishlistIcons() {
  document.querySelectorAll(".product-card").forEach(card => {
    const title = card.querySelector(".card-title a")?.textContent.trim();
    const heartIcon = card.querySelector("[aria-label='Add to Whishlist'] ion-icon");

    if (isInWishlist(title)) {
      heartIcon.style.color = "red";
    } else {
      heartIcon.style.color = "";
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  updateWishlistCount();


  document.querySelectorAll(".product-card").forEach(card => {
    const title = card.querySelector(".card-title a")?.textContent.trim();
    const image = card.querySelector(".card-banner img")?.getAttribute("src");
    const heartBtn = card.querySelector("[aria-label='Add to Whishlist']");
    const heartIcon = heartBtn.querySelector("ion-icon");

    heartBtn.style.cursor = "pointer"; 

    heartBtn.addEventListener("click", () => {
      toggleWishlistItem(title, image, heartIcon);
    });
  });


  markWishlistIcons();
});
const wishlistBtn = document.getElementById("wishlistBtn");
const wishlistDropdown = document.getElementById("wishlistDropdown");
const wishlistItems = document.getElementById("wishlistItems");
const closeWishlistBtn = document.getElementById("closeWishlist");


wishlistBtn.addEventListener("click", () => {
  if (wishlistDropdown.style.display === "none") {
    renderWishlistDropdown();
    wishlistDropdown.style.display = "block";
  } else {
    wishlistDropdown.style.display = "none";
  }
});

closeWishlistBtn.addEventListener("click", () => {
  wishlistDropdown.style.display = "none";
});


function renderWishlistDropdown() {
  wishlistItems.innerHTML = "";

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = "<li>Your wishlist is empty.</li>";
    return;
  }

  wishlist.forEach((item, index) => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.marginBottom = "10px";

    li.innerHTML = `
      <img src="${item.image}" alt="${item.title}" style="width:50px; height:50px; object-fit:cover; margin-right:10px; border-radius:5px;">
      <span style="flex-grow:1;">${item.title}</span>
      <button class="remove-wish-btn" data-index="${index}" style="background:#e74c3c; color:#fff; border:none; padding:5px 10px; border-radius:3px; cursor:pointer;">Remove</button>
    `;

    wishlistItems.appendChild(li);
  });


  document.querySelectorAll(".remove-wish-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      wishlist.splice(idx, 1);
      saveWishlist();
      updateWishlistCount();
      renderWishlistDropdown();
      markWishlistIcons(); 
    });
  });
}

let isSignupMode = false;

const modal = document.getElementById("authModal");
const openBtn = document.getElementById("signinBtn");
const closeBtn = document.getElementById("closeModal");
const confirmBtn = document.getElementById("authConfirmBtn");
const switchMode = document.getElementById("switchMode");
const modalTitle = document.getElementById("modalTitle");
const toggleText = document.getElementById("toggleMode");

openBtn.addEventListener("click", () => modal.style.display = "flex");
closeBtn.addEventListener("click", () => modal.style.display = "none");


switchMode.addEventListener("click", (e) => {
  e.preventDefault();
  isSignupMode = !isSignupMode;

  modalTitle.textContent = isSignupMode ? "Create Account" : "Sign In";
  toggleText.innerHTML = isSignupMode
    ? 'Already have an account? <a href="#" id="switchMode">Sign In</a>'
    : `Don't have an account? <a href="#" id="switchMode">Create one</a>`;


  document.getElementById("switchMode").addEventListener("click", (e) => {
    e.preventDefault();
    switchMode.click();
  });
});

// Save or Login
confirmBtn.addEventListener("click", () => {
  const username = document.getElementById("authUsername").value.trim();
  const password = document.getElementById("authPassword").value.trim();

  if (!username || !password) {
    alert("Fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (isSignupMode) {
    if (users[username]) {
      alert("Username already exists!");
      return;
    }
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", username);
    alert("Account created!");
  } else {
    if (!users[username] || users[username] !== password) {
      alert("Invalid credentials");
      return;
    }
    localStorage.setItem("loggedInUser", username);
    alert("Welcome back!");
  }

  modal.style.display = "none";
  updateUIOnLogin(username);
});


function updateUIOnLogin(username) {
  const label = document.getElementById("signinBtn");
  label.innerHTML = username;

  const logoutBtn = document.createElement("span");
  logoutBtn.textContent = " | Log out";
  logoutBtn.style.cursor = "pointer";
  logoutBtn.style.marginLeft = "10px";

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    location.reload();
  });

  label.appendChild(logoutBtn);
}

document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) updateUIOnLogin(loggedInUser);
});
