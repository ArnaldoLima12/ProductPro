const inputImage = document.querySelector('input#file');
const spanPreview = document.querySelector('span#preview')
const reader = new FileReader;


inputImage.addEventListener('change', e =>
{   

    let preview = document.querySelector('#image-preview');
    if(preview) preview.remove();

    reader.onload = e =>
    {   
        let imagePreview = document.createElement('img');
        imagePreview.id = 'image-preview';
        spanPreview.appendChild(imagePreview);
        imagePreview.src = e.target.result;
    }

    reader.readAsDataURL(inputImage.files[0]);
});