  
document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", function() {
        // Toggle active class for the clicked accordion item
        this.parentElement.classList.toggle("active");
        
        // Close other accordion items
        const activeItem = this.parentElement;
        const accordionItems = document.querySelectorAll(".accordion-item");
        accordionItems.forEach(item => {
          if (item !== activeItem) {
            item.classList.remove("active");
          }
        });
      });
    });
  });
  