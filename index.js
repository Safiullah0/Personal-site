document.querySelector('.c').style.display = 'none';
document.querySelector('.ham').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

     if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.h').style.display = 'inline'
        document.querySelector('.c').style.display = 'none'
     }
     else{
        document.querySelector('.h').style.display = 'none'
        setTimeout(() => {
        document.querySelector('.c').style.display = 'inline'
     },300);
    }

})