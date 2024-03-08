window.onload = function() {
    const currentPage = window.location.pathname;
    if (currentPage !== "/" && currentPage !== "/index.html" && currentPage !== "/404.html") {
      window.location.href = "/404.html";
    }
  };
  

 const colors = ['#000000', 'rgb(0, 153, 97)', '#000000', 'rgb(0, 153, 97)'];
 let currentIndex = 0;
 const errorCode = document.getElementById('error-code');


 function changeColor() {
   errorCode.style.color = colors[currentIndex];
   currentIndex = (currentIndex + 1) % colors.length;
 }

 setInterval(changeColor, 2000);