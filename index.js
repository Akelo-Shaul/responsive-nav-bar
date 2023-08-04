const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const linksCont = document.querySelector(".links");

toggleBtn.addEventListener("click",()=>{
    const navContHeight = navLinks.getBoundingClientRect().height;
    const linksHeight = linksCont.getBoundingClientRect().height;
    if(navContHeight === 0){
        navLinks.style.height = `${linksHeight}px`;
    }else{
        navLinks.style.height = 0;
    }
})