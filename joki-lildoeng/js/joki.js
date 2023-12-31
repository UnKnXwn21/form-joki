var username = "";
var password = "";
var noWa = "";
var uang = "";
var status = "";
var gamepassJob = "";
var kategori = "Paket Joki Standar";
var item = "";
var nominal = "";

document.getElementById("username").addEventListener("keyup", function (e) {
  username = e.target.value;
});

document.getElementById("password").addEventListener("keyup", function (e) {
  password = e.target.value;
});

document.getElementById("uang").addEventListener("keyup", function (e) {
  uang = e.target.value;
});

document.getElementById("noWa").addEventListener("keyup", function (e) {
  noWa = e.target.value;
});

const faStatus = document.querySelectorAll(".fa_btn");
faStatus.forEach(function (fabutton) {
  fabutton.addEventListener("click", function () {
    faStatus.forEach(function (fabtn) {
      fabtn.classList.remove("active-btn");
    });
    fabutton.classList.add("active-btn");

    status = fabutton.value;
  });
});

const gpStatus = document.querySelectorAll(".gp_btn");
gpStatus.forEach(function (gpbutton) {
  gpbutton.addEventListener("click", function () {
    gpStatus.forEach(function (gpbtn) {
      gpbtn.classList.remove("active-btn");
    });
    gpbutton.classList.add("active-btn");

    gamepassJob = gpbutton.value;
  });
});

const categories = document.querySelectorAll(".ctg_btn");
categories.forEach(function (ctgbutton) {
  ctgbutton.addEventListener("click", function () {
    kategori = ctgbutton.value;
  });
});

const tabs = document.querySelectorAll(".tab_btn");
const allContent = document.querySelectorAll(".tab_content");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
    });
    tab.classList.add("tab-active");

    allContent.forEach((content) => {
      content.classList.remove("active-content");
    });
    allContent[index].classList.add("active-content");
  });
});

const allItem = document.querySelectorAll(".btn_item");
allItem.forEach(function (button, index) {
  button.addEventListener("click", function () {
    // Menghapus class "active" dari semua elemen sebelumnya
    allItem.forEach(function (btn) {
      btn.classList.remove("active-btn");
    });

    // Menambah class "active" pada elemen yang diklik
    button.classList.add("active-btn");

    var buttonId = `btn${index + 1}`;

    if (buttonId === "btn1") {
      item = "1M + Bonus";
    } else if (buttonId === "btn2") {
      item = "2M + Bonus";
    } else if (buttonId === "btn3") {
      item = "3M + Bonus";
    } else if (buttonId === "btn4") {
      item = "4M + Bonus";
    } else if (buttonId === "btn5") {
      item = "5M + Bonus";
    } else if (buttonId === "btn6") {
      item = "6M + Bonus";
    } else if (buttonId === "btn7") {
      item = "7M + Bonus";
    } else if (buttonId === "btn8") {
      item = "8M + Bonus";
    } else if (buttonId === "btn9") {
      item = "9M + Bonus";
    } else if (buttonId === "btn10") {
      item = "10M + Bonus";
    } else if (buttonId === "btn11") {
      item = "15M + Bonus";
    } else if (buttonId === "btn12") {
      item = "20M + Bonus";
    } else if (buttonId === "btn13") {
      item = "25M + Bonus";
    } else if (buttonId === "btn14") {
      item = "30M + Bonus";
    } else if (buttonId === "btn15") {
      item = "35M + Bonus";
    } else if (buttonId === "btn16") {
      item = "40M + Bonus";
    } else if (buttonId === "btn17") {
      item = "45M + Bonus";
    } else if (buttonId === "btn18") {
      item = "50M + Bonus";
    } else if (buttonId === "btn19") {
      item = "55M + Bonus";
    } else if (buttonId === "btn20") {
      item = "60M + Bonus";
    }

    // Mendapatkan nilai tombol dan menampilkannya pada elemen dengan id "total"
    var value = button.value;
    nominal = value;
    document.getElementById("total").innerHTML = value;
  });
});

const btn_confirm = document.getElementById("btn-confirm");
btn_confirm.addEventListener("click", function () {
  let modal = document.getElementById("modals");
  modal.classList.toggle("active-modal");

  document.getElementById("user").innerHTML = `${username}`;
  document.getElementById("pass").innerHTML = `${password}`;
  document.getElementById("money").innerHTML = `${uang}`;
  document.getElementById("status").innerHTML = `${status}`;
  document.getElementById("job").innerHTML = `${gamepassJob}`;
  document.getElementById("whatsapp").innerHTML = `${noWa}`;
  document.getElementById("ktg").innerHTML = `${kategori}`;
  document.getElementById("itm").innerHTML = `${item}`;
  document.getElementById("ttl").innerHTML = `${nominal}`;
});

document.getElementById("close-btn").addEventListener("click",function () {
  let modal = document.getElementById("modals");
  modal.classList.remove("active-modal");
});

const btn_submit = document.getElementById("btn-submit");
btn_submit.addEventListener("click", async function () {
  if (username === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pastikan semua data terisi",
    });
  } else if (password === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pastikan semua data terisi",
    });
  } else if (uang === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pastikan semua data terisi",
    });
  } else if (status === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pastikan semua data terisi",
    });
  } else if (gamepassJob === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pastikan semua data terisi",
    });
  } else if (noWa === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pastikan semua data terisi",
    });
  } else if (kategori === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pastikan semua data terisi",
    });
  } else if (item === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pastikan semua data terisi",
    });
  } else {
    var message = `Username: ${username}
    Password: ${password}
    Uang sebelum joki: ${uang}
    Status akun: ${status}
    Punya Gamepass 50% + Job: ${gamepassJob}
    No. Whatsapp: ${noWa}
    Kategori: ${kategori}
    Item: ${item}
    Total Bayar: ${nominal}`;

    //  request transaction token //
    try {
      const response = await fetch('php/placeorder.php',{
        method: 'POST',
        body: data,
      });
      const token = await response.text();
      console.log(token);
      //window.snap.pay('TRANSACTION_TOKEN_HERE');
    } catch (err) {
      console.log(err.message);
    }
  }

});
