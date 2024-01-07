var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pict) {
  fullImgBox.style.display = "flex";
  fullImg.src = pict;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}


// Mengaktifkan menu pada navbar saat di klik
// function setActive(index) {
//   // Mengambil semua elemen navbar
//   var navbarItems = document.querySelectorAll(".navbar-nav a");

//   // Menghapus kelas 'active' dari semua elemen navbar
//   navbarItems.forEach(function (item) {
//     item.classList.remove("active");
//   });

//   // Menambahkan kelas 'active' ke elemen yang diklik
//   navbarItems[index].classList.add("active");
// }

// Dark and Light Mode
var icon = document.getElementById('icon');

icon.onclick = function() {
    document.body.classList.toggle('LightMode');
    if(document.body.classList.contains('LightMode')) {
        this.classList.toggle('bi-moon-fill');
        this.classList.remove('bi-brightness-high-fill');
    } else {
        this.classList.toggle('bi-brightness-high-fill');
        this.classList.remove('bi-moon-fill');
    }
}

// Copyright
var copyright = document.getElementById('copyright');

// Mendapatkan tahun saat ini
var thisTime = new Date().getFullYear();

copyright.innerHTML = '&copy; ' + thisTime + ' Sara Puja.';