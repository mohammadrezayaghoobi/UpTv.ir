let  btnShow = document.getElementById('submitForm');
let msgBox = document.querySelector('.message');
let closeBtn = document.querySelector('.message__x');

let msgBox1 = document.querySelector('.message1');
let closeBtn1 = document.querySelector('.message__x1');

let navbar = document.querySelector(".menu-bars");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};
document.querySelector("#x").onclick = () => {
    navbar.classList.remove("active");
  };



btnShow.onclick = function() {
  let serverStatus = (Math.random()*1).toFixed();
  console.log(serverStatus);

  if (serverStatus == 1) {
    msgBox.classList.add('show');

    closeBtn.onclick = function () {
      msgBox.classList.remove('show');
    }
    
    setTimeout(() => {
      msgBox.classList.remove('show')
    }, 3500);
  } else {
    msgBox1.classList.add('show');
  
    closeBtn1.onclick = function () {
      msgBox1.classList.remove('show');
    }
  
    setTimeout(() => {
      msgBox1.classList.remove('show')
    }, 3500);
  }
}
