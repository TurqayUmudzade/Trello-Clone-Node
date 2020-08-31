const editUserForm = document.querySelector('#editUserForm');
const emailError = document.querySelector('#email-validation');
const usernameError = document.querySelector('#username-validation');
const fullnameError = document.querySelector('#fullname-validation');
editUserForm.addEventListener('submit', async(e) => {

    e.preventDefault();

    emailError.textContent = ' ';
    usernameError.textContent = ' ';
    fullnameError.textContent = ' ';
    const email = editUserForm.email.value;
    const username = editUserForm.username.value;
    const fullname = editUserForm.fullname.value;

    try {
        const res = await fetch('/my-profile', {
            method: 'POST',
            body: JSON.stringify({
                fullname,
                username,
                email
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        //return errors
        const data = await res.json();

        if (data.errors) {
            emailError.textContent = data.errors.email;
            usernameError.textContent = data.errors.username;
            fullnameError.textContent = data.errors.fullname;
        }
    } catch (err) {
        console.log(err);
    }

})