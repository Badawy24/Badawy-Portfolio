const form = document.getElementById('contact-form');
const successMsg = document.getElementById('success-message');
const errorMsg = document.getElementById('error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            successMsg.style.display = 'block';
            errorMsg.style.display = 'none';
            form.reset();
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 4000);
        } else {
            successMsg.style.display = 'none';
            errorMsg.style.display = 'block';
            setTimeout(() => {
                errorMsg.style.display = 'none';
            }, 4000);
        }
    }).catch(() => {
        successMsg.style.display = 'none';
        errorMsg.style.display = 'block';
        setTimeout(() => {
            errorMsg.style.display = 'none';
        }, 4000);
    });
});
