var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pict){
    fullImgBox.style.display = "flex";
    fullImg.src = pict;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}

function setActive(index) {
    // Mengambil semua elemen navbar
    var navbarItems = document.querySelectorAll('.navbar-nav a');
  
    // Menghapus kelas 'active' dari semua elemen navbar
    navbarItems.forEach(function(item) {
      item.classList.remove('active');
    });
  
    // Menambahkan kelas 'active' ke elemen yang diklik
    navbarItems[index].classList.add('active');
  }
  
