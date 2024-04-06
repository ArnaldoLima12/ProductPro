let photoButton = document.getElementById('photo');

let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.closeButton');

photoButton.addEventListener('click', e =>
{
    modal.showModal();
});

closeButton.addEventListener('click', e =>
{
    modal.close();
})