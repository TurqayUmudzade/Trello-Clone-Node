//Board ID
const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

const createListForm = document.querySelector('#createList');
createListForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    let header = createListForm.listName.value;
    let id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    try {
        const res = await fetch('add-list', {
            method: 'POST',
            body: JSON.stringify({ id, header }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
});

$('.js-add-listItem').on('click', async function() {
    let listID = $(this).parent().attr('id');
    let listItem = $(this).siblings('ul').children('li').children('textarea').val();
    if (listItem.length > 0) {
        try {
            const res = await fetch('add-list-item', {
                method: 'POST',
                body: JSON.stringify({ id, listID, listItem }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
})