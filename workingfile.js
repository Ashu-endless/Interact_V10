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

var style_div_main_props = document.querySelectorAll('.style_div_main_props');
for(var el of style_div_main_props){
    el.addEventListener('click',function(){
        for(var elem of style_div_main_props){
            elem.style.border = "none"
        }
        this.style.border = "5px #3f1580 solid"
    })
}


for(var child of document.querySelector('#options_div').children){
    tippy(child, {
        // default
        theme:'gradient',
        content:child.id,
        arrow:false,
        animation:'scale',
        
      });
}