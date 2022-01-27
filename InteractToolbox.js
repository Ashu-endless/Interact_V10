import { InteractElement } from "./InteractElement.js"
import { BoxContainer } from "./Interac_BoxContainer.js"

const tb_maxel = document.querySelector('#toolbox-max')
const tb_minel = document.querySelector('#toolbox-min')
export const toolbox = {
    selected_elems :[],
    init : function (elements) {
        var t = toolbox.max.items
        t.element_name.value = InteractElement(elements).name
    },
    min : {
        elem : document.querySelector('#toolbox-min'),
        position : function(el){
            this.selected_elems = el
            this.elem.style.left = el.getBoundingClientRect().x + 'px';
        this.elem.style.top = el.getBoundingClientRect().y - 100 + "px";
        this.elem.style.display = "flex";
        },
        hide:function () {
            this.elem.style.display = 'none'
        },
        items : {
            delete : tb_minel.querySelector(`[toolbox-min="delete"]`),
            clone : "",
            toolbox_max : '',
        }

    },
    max : {
        elem : document.querySelector('#toolbox-max'),
        position : function(el){
            toolbox.init(el)
            this.selected_elems = el
            this.elem.style.display = "block"

            this.elem.style.top = (el.getBoundingClientRect().top + el.getBoundingClientRect().height / 2) - parseFloat(window.getComputedStyle(this.elem).getPropertyValue('height')) / 2 + "px"
            this.elem.style.left = el.getBoundingClientRect().left - parseFloat(window.getComputedStyle(this.elem).getPropertyValue('width')) - 15 + "px"
        },
        hide:function () {
            this.elem.style.display = 'none'
        },
        items : {
           element_name:tb_maxel.querySelector("#name_activeel"),
            delete : "",
            clone : "",
            toolbox_max : '',
        }

    }

}


document.body.addEventListener('click',function (e) {
    console.log(gettargetel(e,'.layers-options'),getparentel(e.target,'#toolbox-max'))
    if( getparentel(e.target,'#toolbox-max') == null && gettargetel(e,'.layers-options') == null ){
        toolbox.max.hide()
    }
})

//toolbox.elem = "popp"
console.log(toolbox)


toolbox.min.items.delete.addEventListener('click',function() {
    for(var el of BoxContainer.getSelectedEl()){
        el.remove()
    }
})

tippy(toolbox.min.items.delete, {
    // default
    theme:'gradient',
    content:"delete selected elements",
    arrow:false,
    animation:'scale',
    
  });
tippy(document.querySelectorAll(`[layer_btn="settings"]`), {
    // default
    theme:'gradient',
    content:"delete selected elements",
    arrow:false,
    animation:'scale',
    
  });