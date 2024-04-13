const modal = document.querySelectorAll('.modal');
const closeButton = document.querySelectorAll('.closeButton');
let modalSelected;


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

function selectedModal(modalprefix, button)
{
    try
    {   
        button = document.getElementById(button);

        button.addEventListener('click', () =>
        {
            modalSelected = returnModal(modalprefix)[0];
            modalSelected.showModal();
            closeModal(modalSelected);
        });
    }
    catch(error)
    {
        return
    }
}


//Para animação de erro
const errorElement = document.querySelector('.error') || false;

if(errorElement)
{
    errorElement.addEventListener('animationend', () => {
        errorElement.style.display = 'none'; // Esconde o elemento após o término da animação
    });    
}
