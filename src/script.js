/*   O‘zgaruvchilar va ma’lumot turlari */

/* 1. STRING — sayt nomi */
let siteName = "E-Kutubxona";

/* 2. BOOLEAN — foydalanuvchi holati */
let isUserLoggedIn = false;

/* 3. ARRAY — kategoriyalar */
let categories = [
  "Maktab darsliklari",
  "Badiiy adabiyot",
  "Detektiv",
  "Biznes",
  "Hayotiy kitoblar",
  "Romanlar"
];
  console.log("Sayt nomi:", siteName);           // String
  console.log("Kategoriyalar:", categories);     // Array

// Foydalanuvchi holatini tekshirish
let loginLink = document.getElementById("loginLink");

if (isUserLoggedIn) {
  loginLink.textContent = "Profil";
} else {
  loginLink.textContent = "Kirish";
}
console.log(isUserLoggedIn);
console.log(loginLink.textContent);
// Kitob kategoriyalarini ketma-ket ko‘rib chiqish
for (let i = 0; i < categories.length; i++) {
  console.log("Kategoriya:", categories[i]);
}
let slides = document.querySelectorAll(".slide");
let current = 0;

// Slaydni ko‘rsatish funksiyasi
function showSlide(index) {
  slides[current].classList.remove("active");
  current = index;
  slides[current].classList.add("active");
}
// Slaydlarni avtomatik almashtirish
if (slides.length > 0) {
  setInterval(function () {
    let next = (current + 1) % slides.length;
    showSlide(next);
  }, 3000);
}



/* ===== DOM: Sahifa elementlari bilan ishlash ===== */

// Sayt nomini DOM orqali chiqarish
let siteNameElement = document.getElementById("siteName");
if (siteNameElement) {
  siteNameElement.textContent = "E-Kutubxona";
}
// Kitoblar sonini hisoblash va chiqarish
let books = document.querySelectorAll(".book");
let bookCount = document.getElementById("bookCount");
if (bookCount) {
  bookCount.textContent =
    "Kutubxonadagi kitoblar soni: " + books.length;
}

/* ===== BOM: Brauzer muhiti bilan ishlash ===== */

// Sahifa yuklanganda xabar chiqarish
window.addEventListener("load", function () {
  alert("E-Kutubxona veb-saytiga xush kelibsiz!");
});

// Joriy sahifa manzilini olish
console.log("Joriy sahifa manzili:", window.location.href);

// Foydalanuvchi brauzeri haqida ma’lumot
console.log("Brauzer ma’lumoti:", navigator.userAgent);

/*    E-KUTUBXONA — EVENTLAR VA INTERAKTIVLIK */

/* 1. Qidiruv maydoni uchun event (input) */
let searchInput = document.querySelector(".search");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    console.log("Qidirilayotgan matn:", searchInput.value);
  });
}

/* 1.1. Sahifa yuklangani haqida xabar (event) */
window.addEventListener("load", function () {
  console.log("Sahifa to‘liq yuklandi");
});
/* 2. Kitob ustiga bosilganda event (click) */
let bookItems = document.querySelectorAll(".book");

bookItems.forEach(function (book) {
  book.addEventListener("click", function () {
    // Kitob tanlanganini vizual tarzda belgilash
    book.classList.toggle("active-book");

    // Foydalanuvchiga xabar chiqarish
    alert("Kitob tanlandi");
  });
});


/* 2.2. Kursor olib borilganda vizual effekt (mouseover / mouseout) */
bookItems.forEach(function (book) {
  book.addEventListener("mouseover", function () {
    book.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
  });

  book.addEventListener("mouseout", function () {
    book.style.boxShadow = "none";
  });
});

let loginBtn = document.querySelector(".login");

if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    console.log("Kirish tugmasi bosildi");
  });
}



// let sampleBook = {
//   title: "JavaScript asoslari",
//   author: "A. Karimov",
//   year: 2024,
//   available: true
// };

//   console.log("Namuna kitob:", sampleBook);      // Object
//   // 
  
  
  
//   let current = 0;
// const slides = document.querySelectorAll(".slide");

// function showSlide(index) {
//   slides[current].classList.remove("active");
//   current = index;
//   slides[current].classList.add("active");
// }

// setInterval(() => {
//   let next = (current + 1) % slides.length;
//   showSlide(next);
// }, 3000);


// // Shart operatori: foydalanuvchi holatini tekshirish
// if (isUserLoggedIn) {
//   loginLink.textContent = "Profil";
// } else {
//   loginLink.textContent = "Kirish";
// }

// // Sikl: kitob kategoriyalarini ketma-ket ko‘rib chiqish
// for (let i = 0; i < categories.length; i++) {
//   console.log("Kategoriya:", categories[i]);
// }

// // Funksiya: slaydlarni ko‘rsatish
// function showSlide(index) {
//   slides[current].classList.remove("active");
//   current = index;
//   slides[current].classList.add("active");
// }

// // Takrorlanish: slaydlarni avtomatik almashtirish
// if (slides.length > 0) {
//   setInterval(function () {
//     let next = (current + 1) % slides.length;
//     showSlide(next);
//   }, 3000);
// }

