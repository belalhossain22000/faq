  

document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            // Toggle active class for the clicked accordion item
            this.parentElement.classList.toggle("active");

            // Toggle arrow icons
            const arrowIcons = this.querySelectorAll(".arrow i");
            arrowIcons.forEach(icon => {
                icon.classList.toggle("fa-caret-up");
                icon.classList.toggle("fa-caret-down");
            });

            // Close other accordion items
            const activeItem = this.parentElement;
            const accordionItems = document.querySelectorAll(".accordion-item");
            accordionItems.forEach(item => {
                if (item !== activeItem) {
                    item.classList.remove("active");
                    const icons = item.querySelectorAll(".arrow i");
                    icons.forEach(icon => {
                        icon.classList.add("fa-caret-down");
                        icon.classList.remove("fa-caret-up");
                    });
                }
            });
        });
    });
});
  