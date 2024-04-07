const passwordButton = document.getElementById('passwordbtn');
const photoButton = document.getElementById('photo');


let selectedModel;

passwordButton.addEventListener('click', () =>
{
    selectedModel = returnModal('pass')[0];
    selectedModel.showModal();
    closeModal(selectedModel);
});

photoButton.addEventListener('click', () =>
{
    selectedModel = returnModal('img')[0];
    selectedModel.showModal();
    closeModal(selectedModel);
});