window.onload = function() {
    const currentPage = window.location.pathname;
    if (currentPage !== "/" && currentPage !== "/index.html" && currentPage !== "/404.html") {
      window.location.href = "/404.html";
    }
  };
  