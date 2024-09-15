const togglebutton = document.getElementById('toggle-skills') as HTMLButtonElement
const skillss = document.getElementById('skills') as HTMLElement

togglebutton.addEventListener('click', ()=>{
    if(skillss.style.display === 'none'){
        skillss.style.display ='block'
    }
    else{
        skillss.style.display ='none'
    }
});






