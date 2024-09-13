//   task4
function submitComment() {
    // Formdakı elementləri alırıq
    var name = document.getElementById("name").value;
    var surname = document.getElementById("comment").value;
    console.log("Ad: " + name);
    console.log("Soyad: " + surname);
}
// task5
function validateForm() {
    let  password = document.getElementById("password").value;
  
    if (password.length > 5) {
      console.log("İcazə verildi");
    } else {
      console.log("Giriş qadağandır");
    }
  }