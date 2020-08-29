const createListForm = document.querySelector('#createList');

createListForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    let listName = createListForm.listName.value;
    let blogID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

})