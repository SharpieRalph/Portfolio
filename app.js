

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    
    //Toggle theme
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

    var contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this);
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
        if (data.success) {
            // Reset the form here
            this.reset();
            alert('Thank you for reaching! I will be in contact soon');
        } else {
            // Handle the error
            alert('There was an error submitting the form. Please try again.');
        }
        })
        .catch(error => {
        // Handle the network error
            alert('Network error: ' + error.message);
        })
    });

})();

