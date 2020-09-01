const form = document.querySelector('form');
const emailError = document.querySelector('#email-validation');
const passwordError = document.querySelector('#password-validation');
form.addEventListener('submit', async(e) => {

    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";
    const email = form.email.value;
    const password = form.password.value;

    try {
        const res = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        //return errors
        const data = await res.json();
        if (data.errors) {
            emailError.textContent = data.errors.email;
            if (emailError.textContent.length > 0)
                $('input[name=email]').addClass('border-red-500');
            passwordError.textContent = data.errors.password;
            if (passwordError.textContent.length > 0)
                $('input[name=password]').addClass('border-red-500');
        }
        if (data.user) {
            location.assign('/')
        }

    } catch (err) {
        console.log(err);
    }

})