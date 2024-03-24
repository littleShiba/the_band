// auto slide show after 4 second
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider-items");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}

// display/hidden buy-tickets
const buyBtns = document.querySelectorAll(".js-buy-btn");
const ticketModal = document.querySelector(".ticket-modal");
const closeBtn = document.querySelector(".js-close-btn");
closeBtn.addEventListener("click", hiddenModal);

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showModal);
}
function showModal() {
  ticketModal.classList.add("open");
}
function hiddenModal() {
  ticketModal.classList.remove("open");
}

// show navbar when click menu icon on mobile screen
var header = document.getElementById("header");
var menuBtn = document.getElementById("mobile-menu-btn");
var headerHeight = header.clientHeight;
menuBtn.onclick = function () {
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

// auto hide menu when choose one of menu elements
var menuItems = document.querySelectorAll('.navbar li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function () {
    header.style.height = null;
  };
}
