function handleAccordion(){
    let accordionOpened = document.querySelectorAll('details[open]')
    for(let item of accordionOpened){
        if(this !=item){
            item.removeAttribute("open");
        }
    }
}

const accordions = document.querySelectorAll('details');
accordions.forEach(accordion=>{
    accordion.addEventListener('click',handleAccordion)
})