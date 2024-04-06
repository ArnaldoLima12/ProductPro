const form = document.querySelector('.form');
const email = document.querySelector('.form #email');
const pass = document.querySelector('.form #password');


let valid = email =>
{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

email.addEventListener('change', () =>
{    
    let submit = form.querySelector('input[type=submit]');

    if(!valid(email.value))
    {   
       email.style.color = 'red';
       submit.disabled = true;
       submit.style.backgroundColor = 'rgb(27, 86, 66)';
       pass.disabled = true;
    }
    else
    {   
        email.style.color = 'green';
        submit.disabled = false;
        submit.style.backgroundColor = '';
        pass.disabled = false;
    }
})

