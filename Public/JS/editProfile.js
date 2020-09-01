//EDIT DATA
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



//PROFILE PICTURE

async function uploadPicture(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#profileImage').attr('src', e.target.result)
        };

        reader.readAsDataURL(input.files[0]);
    }
    const form = document.querySelector('#imageUpload')
    const formData = new FormData();
    formData.append("inpFile", input.files[0]);
    try {
        const res = await fetch('/upload', {
            method: 'POST',
            body: formData
        })

    } catch (error) {
        console.log(error);
    }
}