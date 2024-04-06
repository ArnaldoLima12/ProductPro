let getDate = () => {
    
    let locale = navigator.language || navigator.userLanguage;
    document.querySelector('.time').innerText = new Date().toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: 'numeric',
    });
}

getDate();