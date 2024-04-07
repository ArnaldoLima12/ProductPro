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
});

const errorElement = document.querySelector('.error');

errorElement.addEventListener('animationend', () => {
    errorElement.style.display = 'none'; // Esconde o elemento após o término da animação
});