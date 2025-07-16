 const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('success-message');
    const errorMsg = document.getElementById('error-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        emailjs.sendForm('service_0cwq7ky', 'template_3oyo5vw', this)
            .then(function() {
                successMsg.style.display = 'block';
                errorMsg.style.display = 'none';
                form.reset();
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 4000);
            }, function(error) {
                successMsg.style.display = 'none';
                errorMsg.style.display = 'block';
                setTimeout(() => {
                    errorMsg.style.display = 'none';
                }, 4000);
            });
    });
