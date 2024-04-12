const table = document.querySelector('.table-body-content');

let listContent = () =>
{
    fetch('/home/product/list')
    .then(response =>
    {
        console.log(response);
    })
    .catch(error =>
    {
        console.log(error);
    });
}

listContent();