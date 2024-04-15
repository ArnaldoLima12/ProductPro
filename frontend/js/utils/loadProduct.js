const table = document.querySelector('.table-body-content');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
let page = 1;
let maxpage;

const fetchData = async page => {
    try {
        const response = await fetch(`/home/product/list?page=${page}&limit=${8}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error; // Rejeitar o erro para lidar com ele externamente, se necessário.
    }
}

const renderContent = (data) => {
    table.innerHTML = '';

    data.list.forEach(element => {
        let content = 
            `<tr>
                <td>${element.name}</td>
                <td>${element.price}</td>
                <td>${element.categoryName}</td>
                <td class='actions-table'> 
                    <button id='edit'><i class="bi bi-pencil-square"></i></button>
                    <button id='delete'><a href='product/delete/${element._id}'><i class="bi bi-trash"></i></a></button>
                </td>
                
            </tr>`;

        table.innerHTML += content;
    });

    maxpage = data.totalPages;
}

const updateContent = async () => {
    try {
        const data = await fetchData(page);
        renderContent(data);
    } catch (error) {
        return;
    }
}

nextBtn.addEventListener('click', () => {
    page++;
    if(page > maxpage) page = maxpage;
    updateContent();
});

previousBtn.addEventListener('click', () => {
    page--;
    if(page < 1) page = 1;
    updateContent();
})

// Carregar conteúdo inicial
updateContent();
