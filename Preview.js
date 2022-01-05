import { BoxContainer} from './Interac_BoxContainer.js';

const preview = document.querySelector('#preview_btn');
const preview_destroy = document.querySelector('#preview_destroy');
export const preview_box = document.querySelector('#preview_box');


// ?!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! preview PREVFUNCS
preview.onclick = () => {

    // preview_box.innerText = box.innerHTML
    // console.log(document.querySelector('#interac_Container').innerHTML)
    // console.log(BoxContainer.elem())
    preview_box.innerHTML = BoxContainer.div().innerHTML
    preview_box.style.backgroundColor = BoxContainer.elem().style.backgroundColor
    preview_box.style.left = BoxContainer.elem().style.left
    preview_box.style.top = BoxContainer.elem().style.top
    preview_box.style.height = BoxContainer.elem().style.height
    preview_box.style.width = BoxContainer.elem().style.width
    preview_box.style.transform = BoxContainer.elem().style.transform
    var preview_modal = document.querySelector('#preview_modal');
    preview_modal.style.display = 'block'
    preview_box.style.display = 'block'
        // var all_data = []
        // for (el of preview_box.querySelectorAll('div,img,p,path,g')) {
        // for (el of preview_box.querySelectorAll('[primary-element-type]')) {
        //     all_data.push(el)

    // }

    for (var p of preview_box.querySelectorAll('p')) {
        p.contentEditable = false;
    }
    // for (var textinp of preview_box.querySelectorAll('[element-type=text-input]')) {
    //     textinp.contentEditable = true;
    //     textinp.innerText = "type your ______ here"
    //     textinp.onclick = (e) => {
    //         if (e.target.innerText == "type your ______ here") {
    //             e.target.innerText = ""
    //         }
    //     }
    // }
    for (var el of preview_box.querySelectorAll('[primary-element-type=Video]')) {

        BoxContainer.ChangeSrc(el,InteracStyles.getValue({
            element: el,
            prop: "src"
        }))

    }
    for (var el of preview_box.querySelectorAll('[primary-element-type=YoutubeVideo]')) {
        BoxContainer.ChangeSrc(el,InteracStyles.getValue({
            element: el,
            prop: "src"
        }))


    }
    for (var el of preview_box.querySelectorAll('[primary-element-type=Audio]')) {
        
        BoxContainer.ChangeSrc(el,InteracStyles.getValue({
            element: el,
            prop: "src"
        }))

    }
    for (var el of preview_box.querySelectorAll('[element_hyperlink]')) {
        // var a = document.createElement('a');
        // a.href = el.getAttribute('element_hyperlink')
        // el.insertBefore(a,el.children[0])
        el.addEventListener('click',function(){
            window.open(el.getAttribute('element_hyperlink'), '_blank').focus();
            //window.location.href = el.getAttribute('element_hyperlink')
        })

    }


    var all_data = preview_box.querySelectorAll(`[element_name]`);
    for (var data of all_data) {
        console.log(all_data)
        data.classList.remove('active', 'draggable');
        data.contentEditable = false;
        data.setAttribute('previewer_element_name', data.getAttribute('element_name'))
        data.setAttribute('previewer_element_groups', data.getAttribute('element_groups'))
    }
    // console.log('InteractFunctions', JSON.stringify(InteractFunctions))
    BoxContainer.elem().setAttribute('InteracFunctions', JSON.stringify(InteractFunctions))
    Object.keys(InteractFunctions).forEach(function(key) {
        InteractFunctionCreator(InteractFunctions[key])
    })

}
// ! TEST=======================================
preview_destroy.onclick=()=>{
    preview_destroy.parentNode.style.display = "none"
    preview_box.innerHTML = ""
}