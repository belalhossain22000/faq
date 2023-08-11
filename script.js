document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    
    accordionHeaders.forEach(header => {
      header.addEventListener("click", function() {
        this.parentElement.classList.toggle("active");
      });
    });
  });
  