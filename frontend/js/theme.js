const buttonTheme = document.querySelector('.theme') || false;
let systemTheme = localStorage.getItem('data-theme') || 'light';

let defineTheme = (theme) =>
{
    document.documentElement.setAttribute('data-theme', theme);

    if(theme === 'light')
    {  
       if(buttonTheme)
       {
            buttonTheme.classList.remove('bi-brightness-high-fill');
            buttonTheme.classList.add('bi-moon-fill'); 
       }
       
    }
    else
    {   
        if(buttonTheme)
        {
            buttonTheme.classList.remove('bi-moon-fill');
            buttonTheme.classList.add('bi-brightness-high-fill');
        }
    }
}


if(buttonTheme)
{
    buttonTheme.addEventListener('click', () =>
    {
        let oldTheme = localStorage.getItem('data-theme') || 'light';
        let newTheme = oldTheme == 'light'? 'dark' : 'light';

        localStorage.setItem('data-theme', newTheme);
        defineTheme(newTheme);
    });
}

defineTheme(systemTheme);