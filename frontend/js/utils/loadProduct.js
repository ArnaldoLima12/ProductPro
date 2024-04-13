const table = document.querySelector('.table-body-content');

let listContent = async () =>
{
   try
   {
        let response = await fetch('/home/product/list');
        console.log(await response.json());
   }
   catch(error)
   {
        console.log(error);
   }
}

listContent();