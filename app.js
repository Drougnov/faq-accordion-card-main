const details = document.querySelectorAll('details');

details.forEach(function(question){
    const btn = question.querySelector('summary');
    btn.addEventListener('click',function(){
        details.forEach(function(detail){
            if(detail !== question){
                detail.removeAttribute('open');
            }
        })
    })
})