const modal = document.querySelectorAll('.modal');
const closeButton = document.querySelectorAll('.closeButton');

function returnModal(modalPrefix)
{
    let modalOption = [...modal].filter(element =>
    {
        return element.id === modalPrefix;
    });

    return modalOption;
}

function closeModal(modal)
{   
    [...closeButton].forEach(element =>
    {
        element.addEventListener('click', () =>
        {
            modal.close();
        });
    });
}


//Para animação de erro
const errorElement = document.querySelector('.error') || false;

if(errorElement)
{
    errorElement.addEventListener('animationend', () => {
        errorElement.style.display = 'none'; // Esconde o elemento após o término da animação
    });    
}
