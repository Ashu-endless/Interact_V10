const layer_div = document.querySelector('#layers_div')

document.querySelector('#LayerBtn').addEventListener('click',function(){
    if(this.children[0].classList.contains('bi-arrow-bar-right')){
        this.children[0].classList.add('bi-arrow-bar-left')
        this.children[0].classList.remove('bi-arrow-bar-right')
        layer_div.style.left = "0"
    }else{
        layer_div.style.left = "100%"
        this.children[0].classList.remove('bi-arrow-bar-left')
        this.children[0].classList.add('bi-arrow-bar-right')
    }
})



for(var child of document.querySelector('#options_div').children){
    tippy(child, {
        // default
        theme:'gradient',
        content:child.id,
        arrow:false,
        animation:'scale',
        
      });
}

for (var el of document.querySelectorAll('.hide_myprnt')) {
        console.log(el)
        el.addEventListener('click', function() {
            this.parentNode.style.display = "none";
            console.log('hiding')
        })
    }

