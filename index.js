// todo Modes
let style_head_off = true;
let preview_mode = false;
let hide = false;
var lenght;
var i;
var el;
var elem;
var j;
var k;

const preview = document.querySelector('#preview_btn');
const preview_destroy = document.querySelector('#preview_destroy');

import { EndlessSizeHandler } from './InteracSizehandler.js';
import { property_selector_container, transitions_controller } from './components.js';
// import { keyframes_creator, InteractAnimation, keyframes, update_animation_keyframes } from './keyframes.js';
import { style_textShadow_updater, style_boxShadow_updater, add_textshadow, apply_box_shadow, apply_text_shadow, add_boxshadow, applying_box_shadow, applying_text_shadow, box_shadow_type_switcher, refresh_style_div, transformFunc, show_styling_properties, CreateStyleDiv, styleDivOninputUpdate,InteracStyles, } from './Interact_style.js';
import { activeel_size_handler, DragMoveListener, DragAndDropListener } from './size_handler.js';
// import { activeel_container_resizer } from './size_handler_svg.js';
import { InteractFunctions, InteractFunctionCreator } from './functions.js';
import { heightInc, gettarget, getparent, bardivFunc, preview_selected_element, toolboxFuncs, LayersDivFuncs, activeelFunction, getUniqueid, getAllBoxElementsInfo, DragAboveandDrop } from './functionsfile.js';
import { NewArrowBox } from './arrowbox.js';
import { Save,BoxContainer,NewBoxContainer, update_triggerer_selector, update_effector_selector } from './Interac_BoxContainer.js';
import { UpdateOriginalStyleDivs } from './UpdateStyleDiv.js';


const activeel_Text = document.querySelector('#Interact_activeel_Text');
const activeel_Textpath = document.querySelector('#Interact_activeel_Textpath');
const activeel_Border_Radius = document.querySelector('#Interact_activeel_Border_Radius');
const activeel_Border = document.querySelector('#Interact_activeel_Border_Style');
const activeel_Transform = document.querySelector('#Interact_activeel_Transform');
const activeel_Background = document.querySelector('#Interact_activeel_Background');
const activeel_Text_Shadow = document.querySelector('#Interact_activeel_Text_Shadow');
const activeel_Drop_Shadow = document.querySelector('#Interact_activeel_Drop_Shadow');
const activeel_Brush = document.querySelector('#Interact_activeel_Brush');

activeel_Transform.append(CreateStyleDiv.CreateTransformStyleDiv());
activeel_Border_Radius.append(CreateStyleDiv.CreateBorderRadiusStyleDiv());
activeel_Text.append(CreateStyleDiv.CreateTextStyleDiv())
activeel_Textpath.append(CreateStyleDiv.CreateTextpathStyleDiv())
activeel_Border.append(CreateStyleDiv.CreateBorderStyleDiv())
activeel_Brush.append(CreateStyleDiv.CreateBrushStyleDiv())
    // activeel_Text_Shadow.append(CreateStyleDiv.CreateTextShadowStyleDiv())
    // activeel_Drop_Shadow.append(CreateStyleDiv.CreateDropShadowStyleDiv())
activeel_Background.append(CreateStyleDiv.CreateBackgroundStyleDiv())
document.querySelector('#tags_box_settings-border_content').append(CreateStyleDiv.CreateBorderRadiusStyleDiv())
document.querySelector('#tags_box_settings-border_content').append(CreateStyleDiv.CreateBorderStyleDiv())
heightInc()
bardivFunc()
    // ?
styleDivOninputUpdate()
const check_activeel = () => {
        var active_el = document.querySelector('.active');
        if (active_el != undefined) {
            return true
        } else {
            return false
        }
    }
    // ?
export const getactiveel = () => {
        var activeel = document.querySelector('.active');
        if (activeel != undefined) {
            return activeel
        }
        if (activeel == undefined) {
            return null
        }
    }
    // style_activeel_transform()
    // style_activeel_borderRadius()
    //? To get child with specific class
export function getchild(parent, classname) {
    lenght = parent.childElementCount
    var child;
    for (i = 0; i < lenght; i++) {
        child = parent.children[i]
        if (parent.children[i].classList.contains(classname)) {
            break
        }
    }
    return child
}

// ?get children
function getchildren(parent, classname) {
    let children = {}

    var cont;
    let index = 0
    lenght = parent.childElementCount;
    for (i = 0; i < lenght; i++) {

        if (parent.children[i].classList.contains(classname)) {
            children[index] = parent.children[i];
            index++

        }

    }
    children.length = index
    return children
}
// ?
// function range_input_custom() {
//     var all_inputs_range = document.querySelectorAll("input[type='range']");
//     for (el of all_inputs_range) {
//         var value = (el.value - el.min) / (el.max - el.min) * 100
//         el.style.background = 'linear-gradient(to right, #191e2b 0%, rgb(15 34 60)' + value + '%, #fff ' + value + '%, white 100%)'
//         el.oninput = (e) => {
//             // console.log(e.target.closest('.range_value'))
//             var value = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100
//             e.target.style.background = 'linear-gradient(to right, #191e2b 0%, rgb(15 34 60)' + value + '%, #fff ' + value + '%, white 100%)'

//             e.target.previousElementSibling.querySelector('.range_value').innerHTML = e.target.value
//         }
//     }
// } // ?
// range_input_custom()
// ?

export const snakeToCamel = (str) =>
    str.toLowerCase().replace(/([-_][a-z])/g, group =>
        group
        .toUpperCase()
        .replace('-', '')
        .replace('_', '')
    );
// !
// ? remove prntNode
function delete_myprnt() {
    var target = document.querySelectorAll('.delete_myprnt')
    for (el of target) {
        el.addEventListener('click', function() {
            this.parentNode.remove()
        })
    }
    // console.log('deleted')
};
// !
document.body.addEventListener('click', function(e) {
    if (gettarget(e, "arrowboxfor") == null && gettarget(e, "arrowboxbtnfor") == null) {
        for (el of document.querySelectorAll('[arrowboxfor]')) {
            el.style.display = "none"
        }
    }
    if (check_activeel()) {
        //activeel_size_handler.position(getactiveel())
            // activeel_container_position()

    }
})
document.body.onmousedown = (e) => {
    // if(e.target.classList.contains('.prop_value_modal')!= true || )
    // for(el of document.querySelectorAll('.prop_value_modal')){

    // }
    var prnt_list = []
        // console.log($(e.target).parents())
    for (var ids of $(e.target).parents()) {
        // console.log(ids.id)
        prnt_list.push(ids.id)
    }
    if (prnt_list.includes('toolbox_more') != true && e.target.id != 'toolbox_more') {
        toolbox_more.style.display = 'none'
    }
    if (check_activeel()) {
        // activeel_container_resizer.position()
        // activeel_container_resizer.position()
        // activeel_container_position()
        // activeel_size_handler.position(getactiveel())
    }
}


document.body.oninput = (e) => {
    if (gettarget(e, 'toolbox_more') == null) {
        toolbox_more.style.display = 'none'
    }

    if (check_activeel()) {
       // activeel_size_handler.position(getactiveel())
            // activeel_container_position()

    }
}
document.body.onclick = () => {
    hide_myprnt()
}



// !
// ? hide prnNode
function hide_myprnt() {
    var cross = document.querySelectorAll('.hide_myprnt');
    for (el of cross) {
        el.addEventListener('click', function() {
            // // console.log(this.parentNode)
            this.parentNode.style.display = "none";
        })
    }

}


// Grid Settings
const grid_visibility = document.querySelector('#grid_visibility');
const InteracGridSvg = document.querySelector('#InteracGridSvg');
const tags_box_settings_settings_content = document.querySelector('#tags_box_settings-settings_content');

tags_box_settings_settings_content.addEventListener('input', function() {
        console.log(parseInt(window.getComputedStyle(box).getPropertyValue('width')))
        if (grid_visibility.checked) {
            InteracGridSvg.style.display = "block";
            InteracGridSvg.innerHTML = ""
            var gapX = parseInt(document.querySelector('#grid_gapX').value)
            var gapY = parseInt(document.querySelector('#grid_gapY').value)
            var color = document.querySelector('#grid_color').value
            var gx = 0;
            var gy = 0;
            while (gx < parseInt(window.getComputedStyle(box).getPropertyValue('width'))) {
                // console(gx)
                gx = gx + gapX
                var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttributeNS(null, 'x1', gx)
                line.setAttributeNS(null, 'x2', gx)
                line.setAttributeNS(null, 'y1', "0")
                line.setAttributeNS(null, 'y2', "100%")
                InteracGridSvg.style.stroke = color || 'black';
                InteracGridSvg.append(line)
            }
            while (gy < parseInt(window.getComputedStyle(box).getPropertyValue('height'))) {
                // console(gx)
                gy = gy + gapY
                var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttributeNS(null, 'x1', '0')
                line.setAttributeNS(null, 'x2', '100%')
                line.setAttributeNS(null, 'y1', gy)
                line.setAttributeNS(null, 'y2', gy)
                InteracGridSvg.style.stroke = color || 'black';
                InteracGridSvg.append(line)
            }
        } else {
            InteracGridSvg.style.display = "none";
        }
    })
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1




// ? style_div obsserver
const style_div = document.querySelector('#style_div')



var all_element_names = [];
var all_element_groups = [];
// !
// name_activeel.oninput = (e) => {
//         getactiveel().setAttribute('element_name', e.target.value)
//     }
//     // 
// function add_element_groups(group_name) {
//     var input = document.createElement('input');
//     input.type = "text";
//     input.value = group_name
//     input.classList.add('group_activeel')
//     add_element_groups_icon.parentNode.insertBefore(input, add_element_groups_icon)

// }
// groups_activeel.oninput = (e) => {
//     var activeel_groups = ""

//     activeel_groups = activeel_groups.concat(groups_activeel.querySelectorAll('.group_activeel')[0].value)

//     for (var groupsCount = 1; groupsCount < groups_activeel.querySelectorAll('.group_activeel').length; groupsCount++) {
//         activeel_groups = activeel_groups.concat(`,${groups_activeel.querySelectorAll('.group_activeel')[groupsCount].value}`)
//     }
//     // console.log(activeel_groups)
//     getactiveel().setAttribute('element_groups', activeel_groups)
// }

// add_element_groups_icon.onclick = (e) => {
//     add_element_groups('')
// }

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


var style_head_mob = document.querySelectorAll('.style-head_mob')
    // console.log(style_head_mob)
for (el of style_head_mob) {
    el.addEventListener('click', function() {
        var style_content_mobile = document.querySelectorAll('.style_content_mobile');
        for (elem of style_content_mobile) {
            elem.style.display = "none"
        }
        var name = this.id.replace('for_mobile', '')
        var display = document.querySelector(`#style_activeel${name}`)
        display.style.position = "fixed";
        display.style.top = "0";
        display.style.left = "0";
        display.style.display = "block";
        display.style.background = "inherit";
    })
}







// all box working--------------------------------------------------------------------------------------------------------------------
// box.oninput = (e) => {
//     console.log(getactiveel().children[0])
//     console.log(e.target)

//     if (e.target.tagName == 'textPath') {
//         if (getactiveel().children[0].tagName != "textPath") {
//             getactiveel().innerHTML = `<textPath href="#${getactiveel().getAttribute('textpathid')}" textpath="${getactiveel().getAttribute('textpathid')}">&#8203;</textPath>`
//         }
//     }
// }
// box.addEventListener('mousedown', function() {
//         box.contentEditable = false
//     })
// box.addEventListener('mouseup', function() {
//     if (check_activeel()) {
//         box.contentEditable = true
//     } else {
//         box.contentEditable = false
//     }
// })
const selctor_div = document.querySelector('.koi')
function B_mousemove(e,e_x,e_y){
    //console.log(e.target)
    var gotelement = gettarget(e,'primary-element-type');
    if(gotelement != null && gotelement.classList.contains('active') == false){
         gotelement.classList.add('active')
         EndlessSizeHandler.SetHandler({element:gotelement})
     }
    if((e.y - e_y)>1){
        selctor_div.style.height = `${e.y - e_y}px`
    }else{
        
        selctor_div.style.height = `${e_y - e.y}px`
        selctor_div.style.top = `${e_y - parseFloat(selctor_div.style.height) }px`

    }
    if((e.x - e_x)>1){
        selctor_div.style.width = `${e.x - e_x}px`
    }else{
        selctor_div.style.width = `${e_x - e.x}px`
        selctor_div.style.left = `${e_x - parseFloat(selctor_div.style.width) }px`
    }


    //((e.y - e_y)>1) ? height = `${e.y - e_y}px`  : height = `${e_y - e.y}px`;
    //selctor_div.style.height = height
   // document.querySelector('.koi').style.width = `${e.x - e_x}px`

}

export function BoxContainerClickFunc(e) {
    activeelFunction.nullactive()
    DragMoveListener()
    if(e.target.getAttribute('InteractSvg') != null ){
    selctor_div.style.display = "block"
    var e_y = e.y
    var e_x = e.x
    var div = document.querySelector('.koi')
    selctor_div.style.height = "0px" 
    selctor_div.style.width = "0px" 
    div.style.left = e.x + "px"
    div.style.top = e.y + "px"
    
 //BoxContainer.elem().addEventListener('mousemove',e => B_mousemove(e,e_x,e_y))
 BoxContainer.elem().onmousemove=(e)=>{
     B_mousemove(e,e_x,e_y)
 }
 //BoxContainer.elem().addEventListener('mouseup',e => B_mousemove(e,e_x,e_y))
 window.onmouseup=(e)=>{
     selctor_div.style.display = "none"
    BoxContainer.elem().onmousemove=(e)=>{
        ""
    }
     //BoxContainer.elem().removeEventListener('mousemove',B_mousemove)
     //BoxContainer.elem().removeEventListener('mousemove',e => B_mousemove(e,e_x,e_y))
 }}else{
     var gotelement = gettarget(e,'primary-element-type');
     if(gotelement != null ){
         gotelement.classList.add('active')
         EndlessSizeHandler.SetHandler({element:gotelement})
     }
 }
}


selctor_div.addEventListener('mousemove',function(e){
    var e_y = parseFloat(selctor_div.style.top)
    var e_x = parseFloat(selctor_div.style.left)

    if((e.y - e_y)>1){
        selctor_div.style.height = `${e.y - e_y}px`
    }else{
        
        selctor_div.style.height = `${e_y - e.y}px`
        selctor_div.style.top = `${e_y - parseFloat(selctor_div.style.height) }px`

    }
    if((e.x - e_x)>1){
        selctor_div.style.width = `${e.x - e_x}px`
    }else{
        selctor_div.style.width = `${e_x - e.x}px`
        selctor_div.style.left = `${e_x - parseFloat(selctor_div.style.width) }px`
    }
})

//export function BoxContainerClickFunc(e) {
export function BoxContainegrClickFunc(e) {
        console.log('clicked on crtr')
            // !!! FUCNTION RELATED
        update_all_elements_name_list()
        update_triggers_list()
            // console.log(getAllBoxElementsInfo())
        toolboxFuncs.hide()
        try {
            activeel_size_handler.position(getactiveel())

        } catch (err) {
            activeelFunction.nullactive()
        }

        for (el of document.querySelectorAll('.triggerer_selector')) {
            update_triggerer_selector(el)
        }
        for (el of document.querySelectorAll('.effector_selector')) {
            update_effector_selector(el)
        }
        for (el of BoxContainer.elem().querySelectorAll('P')) {
            el.contentEditable = false
        }

        



        // for (el of groups_activeel.querySelectorAll('.group_activeel')) {
        //     el.remove()
        // }

        //  ? removing active class from everywher
        activeelFunction.nullactive()
        // for (el of document.querySelectorAll('.pathfortext')) {
        //     el.style.display = "none"
        // }
        // ? adding active cl
        //  !!!!!!!!!!!!!!!!!!!!!!!!!!!
        var targetTag = e.target.tagName;
        var targetType = e.target.getAttribute('primary-element-type')
        var targetId = e.target.id
        var target = e.target
        let IsSecondaryElement = e.target.getAttribute('secondary-element-type') != null
        let IsContainerElemParent = getparent(target, 'primary-element-type', 'Container') != null
        var targetLock = e.target.getAttribute('locked') || false
        var ContainerElement;
        var ContainerElementDraggable;
        if (IsContainerElemParent) {
            ContainerElement = getparent(target, 'primary-element-type', 'Container')
            ContainerElementDraggable = ContainerElement.classList.contains('draggable')
        }
        // console.log(IsContainerElemParent)
        // console.log(IsSecondaryElement)
        // console.log(IsSecondaryElement && IsContainerElemParent && targetLock == false)
        // console.log(targetLock)
        // console.log(ContainerElement)

        if (targetId == 'interac_crtr' || targetId == "interac_Svg" || targetId == 'interac_Container' || target.getAttribute("interactsvg") !=  null ) {
            activeel_size_handler.hide()
        }
        // ??
        else if (target.classList.contains('freeze_div') && IsContainerElemParent == false && targetLock == false) {
            getparent(target, 'primary-element-type').classList.add('active')
            
            // target.parentNode.classList.add('active')
        } else if (`${target.classList}`.includes('plyr') && IsContainerElemParent == false && targetLock == false) {
            gettarget(e, 'draggable').classList.add('active');
        } else if (IsSecondaryElement && IsContainerElemParent == false && targetLock == false) {
            getparent(target, 'primary-element-type').classList.add('active')
            
            // target.parentNode.classList.add('active')
        } else if (targetType == 'Path' && IsContainerElemParent == false && targetLock == false) {
            target.classList.add('active')
        }
        // ??
        // else if (IsSecondaryElement && IsContainerElemParent && targetLock == false) {
        //     ContainerElement.classList.add('active')
        // }

        // ??
        else if (target.classList.contains('freeze_div') && IsContainerElemParent && targetLock == false) {
            if (ContainerElementDraggable) {
                ContainerElement.classList.add('active')
            } else {
                getparent(target, 'primary-element-type').classList.add('active')
                // target.parentNode.classList.add('active')
            }
        } else if (`${target.classList}`.includes('plyr') && IsContainerElemParent && targetLock == false) {
            if (ContainerElementDraggable) {
                ContainerElement.classList.add('active')
            } else {
                gettarget(e, 'draggable').classList.add('active');
            }
        } else if (IsSecondaryElement && IsContainerElemParent && targetLock == false) {
            if (ContainerElementDraggable) {
                ContainerElement.classList.add('active')
            } else {
                if (target.parentNode.getAttribute('secondary-element-type') == 'Container-div') {
                    activeel_size_handler.hide()
                } else {
                getparent(target, 'primary-element-type').classList.add('active')

                    // target.parentNode.classList.add('active')
                }
            }
        } else if (targetType == 'Path' && IsContainerElemParent && targetLock == false) {
            if (ContainerElementDraggable) {
                ContainerElement.classList.add('active')
            } else {
                target.classList.add('active')
            }
        }
        // ??
        else if (IsSecondaryElement && IsContainerElemParent && targetLock == false) {
            ContainerElement.classList.add('active')
        }


if(e.target.getAttribute("secondary-element-type") == "text"){
    console.log(e.target)
    e.target.contentEditable = true
}

try{
if(getactiveel().getAttribute("locked") == "true"){
    activeelFunction.nullactive()
    activeel_size_handler.hide()
}}catch(Err){

}
        // if (IsContainerElemParent) {
        //     ContainerElement = getparent(target, 'primary-element-type', 'Container')
        // }
        // console.log(IsSecondaryElement)
        // var targetLock = e.target.getAttribute('locked')
        // var target = e.target;


        // // if clicks on empty space
        // if (targetId == 'interac_crtr' || targetId == "interac_Svg" || targetId == 'interac_Container' || targetLock != null) {
        //     activeel_size_handler.hide()
        //         // if clicks on  container's empty space
        // } else if (IsSecondaryElement) {
        //     getparent(target, 'primary-element-type').classList.add('active')
        //         // target.parentNode.classList.add('active')
        //         // if (ContainerElement.classList.contains('draggable')) {
        //         // ContainerElement.classList.add('active')
        //         // }
        //         //  else {
        //         //     activeel_size_handler.hide()
        //         //         // do nothing
        //         // }
        // }
        // // if clicks on container-element-children
        // else if (IsContainerElemParent && (getparent(target, 'primary-element-type', 'Container').classList.contains('draggable') == false) && IsSecondaryElement == false) {
        //     console.log(IsContainerElemParent && (getparent(target, 'primary-element-type', 'Container').classList.contains('draggable') == false) && IsSecondaryElement == false)
        //     target.classList.add('active')
        // } else if (IsContainerElemParent) {
        //     console.log(IsContainerElemParent && (getparent(target, 'primary-element-type', 'Container').classList.contains('draggable') == false) && IsSecondaryElement == false)

        //     getparent(target, 'primary-element-type', 'Container').classList.add('active')
        //         // if clicks on primary-element-type
        // } else {
        //     console.log('acriving on basis of primary type')
        //     if (targetType == 'Text') {
        //         target.classList.add('active')

        //     } else if (targetType == 'Container') {
        //         target.classList.add('active')

        //     } else if (targetType == 'Image') {
        //         target.classList.add('active')
        //     } else if (targetType == 'Path') {
        //         target.classList.add('active')
        //     } else if (targetTag == 'textPath') {
        //         target.parentNode.classList.add('active')
        //         document.querySelector(`#${target.getAttribute('textpath')}`).style.display = "block";
        //     } else if (`${target.classList}`.includes('plyr')) {
        //         gettarget(e, 'draggable').classList.add('active');
        //     } else {
        //         activeel_size_handler.hide()
        //     }
        // }
        // if (targetTag == 'P') {
        //     target.classList.add('active')
        // } else if (targetTag == 'IMG') {
        //     target.classList.add('active')

        // } else if (targetTag == 'svg') {
        //     activeel_size_handler.hide()


        // } else if (targetTag == 'path' && target.parentNode.tagName == 'g') {
        //     target.parentNode.classList.add('active')
        // } else if (targetTag == 'path') {
        //     target.classList.add('active')

        // } else if (`${target.classList}`.includes('plyr')) {
        //     gettarget(e, 'draggable').classList.add('active');
        // } else if (targetTag == "DIV" && target.getAttribute('element-type') == "text-input") {
        //     target.parentNode.classList.add('active')

        // } else if (targetTag == "DIV") {
        //     target.classList.add('active')
        // } else if (targetTag == "polyline") {
        //     target.parentNode.classList.add('active')
        // }


        // if (targetTag != 'P' && targetTag != 'textPath' && targetTag != 'text') {
        //     // for (el of BoxContainer.div().querySelectorAll('P')) {
        //     //     el.contentEditable = false;
        //     // }
        //     // console.log(targetTag)

        //     BoxContainer.div().contentEditable = false
        // }

        // toolboxFuncs.select_container_btn.style.display = "none"
        // toolboxFuncs.container_edit_btn.style.display = "none"
        // toolboxFuncs.freeze_activeel.style.display = "none"
        // toolboxFuncs.z_index_activeel.value = getactiveel().getAttribute('element_stake')
        // InteractAnimation()
        if (check_activeel()) {
            // var activeel_type = getactiveel().getAttribute('primary-element-type')
            // if(activeel_type == "Text"){

            
            // if (getactiveel().tagName == 'text') {
            //     BoxContainer.svg().querySelector(`#${getactiveel().children[0].getAttribute('textpath')}`).style.display = "block"
            // }
            // console.log('true')
            // BoxContainer.div().contentEditable = true
        // }
            // console.log(BoxContainer.div().contentEditable)
        } else {
            // console.log('true')
            // BoxContainer.div().contentEditable = false
        }

        DragMoveListener()
        if (check_activeel()) {
            //activeel_size_handler.position(getactiveel())

                // LayersDivFuncs.UpdateLayersDiv()sss

            UpdateOriginalStyleDivs(getactiveel())
        show_styling_properties(getactiveel())

                //    ??COntainer Edit ?
                // if (getactiveel().getAttribute('primary-element-type') == 'Container' && getactiveel().querySelector('[primary-element-type]') != null) {
                //     toolboxFuncs.container_edit_btn.style.display = "block"

            // }
            // if (getparent(getactiveel(), 'primary-element-type', 'Container') != null) {
            //     toolboxFuncs.select_container_btn.style.display = "block"
            // }
            // if (activeel_type == 'Audio' || activeel_type == 'Video' || activeel_type == 'YoutubeVideo') {
            //     toolboxFuncs.freeze_activeel.style.display = "block"
            // }
        }
        // !IMP
        // for (el of BoxContainer.div().querySelectorAll('[primary-element-type=Container]')) {
        //     for (elem of el.children) {
        //         el.classList.remove('draggable', 'active')
        //     }
        // }



        // else {
        //     toolboxFuncs.container_edit_btn.style.display = "none"
        //     toolboxFuncs.select_container_btn.style.display = "block"
        // }




        // ? setting_element name
        if (check_activeel()) {
            // toolboxFuncs.toolbox_moreFuncs.CreateToolboxMoreDiv(getactiveel())
            preview_selected_element()

        }


        show_styling_properties(getactiveel() || "")


        //  ??  ADDING TOOLBOX
        if (check_activeel()) {
            if (getactiveel().classList.contains("appendible_element")) {
                append_child_info.style.display = "flex"
                toolboxFuncs.hide()
            } else {
                var appendible_element = document.querySelector('.appendible_element');

                if (appendible_element != null) {
                    appendible_element.removeEventListener('mousedown', DragAboveandDrop)

                    appendible_element.classList.remove("appendible_element")
                }
                append_child_info.style.display = "none"
                toolboxFuncs.position()
            }
        }




        function trigger_update_animation_keyframes() {
            var btn = document.querySelectorAll(".keyframe-rules_div", ".keyframe_property", ".keyframe_values");
            for (el of btn) {
                el.oninput = (e) => {
                    update_animation_keyframes(e.target)
                }
            }

            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (window.getComputedStyle(getactiveel()).getPropertyValue("animation-name") !== "none") {
                var animation_name_arr = window.getComputedStyle(getactiveel()).getPropertyValue("animation-name").split(',');
                var animation_duration_arr = window.getComputedStyle(getactiveel()).getPropertyValue("animation-duration").split(',');
                var animation_timingFunction_arr = window.getComputedStyle(getactiveel()).getPropertyValue("animation-timing-function").split(',');
                var animation_delay_arr = window.getComputedStyle(getactiveel()).getPropertyValue("animation-delay").split(',');
                var animation_iterationCount_arr = window.getComputedStyle(getactiveel()).getPropertyValue("animation-iteration-count").split(',');
                var animation_direction_arr = window.getComputedStyle(getactiveel()).getPropertyValue("animation-direction").split(',');
                var animation_fillMode_arr = window.getComputedStyle(getactiveel()).getPropertyValue("animation-fill-mode").split(',');
                // if (animation_name_arr[animation_name_arr.length - 1] == "") {
                //     animation_name_arr.pop()
                // }
                console.log(animation_name_arr)
                    // lenght = animation_name_arr.length
                    // console.log(lenght)
                for (j = 0; j < animation_name_arr.length; j++) {
                    // console.log(j, "j")
                    // console.log(length)
                    // console.log("name", animation_name_arr[j])

                    Adding_animation_control_div(animation_name_arr[j], animation_duration_arr[j], animation_timingFunction_arr[j], animation_delay_arr[j], animation_iterationCount_arr[j], animation_direction_arr[j], animation_fillMode_arr[j])
                    trigger_update_animation_keyframes()

                }

            }

            // style_textShadow_updater()
            // style_boxShadow_updater()

        }
    }
    // ! box onclick END_____------------------------------------------------------------------------------------------------------------------------------------------------------------
// BoxContainer.div().ondblclick = (e) => {
//     if (e.target.tagName == 'P') {
//         e.target.contentEditable = true;
//         // e.target.oninput = (e) => {
//         //     e.target.parentNode.style.height = e.target.getBoundingClientRect().height
//         //     e.target.parentNode.style.width = e.target.getBoundingClientRect().width
//         // }
//     }
// }

// ! boc.dbclick END 

var element_head_mob = document.querySelectorAll('.element_head_mob');
for (el of element_head_mob) {
    el.addEventListener('click', function() {
        document.querySelector(`#${this.id}_modal`).style.display = "block"
            // console.log("check")
    })
}


// ! element show and hide
var element_head = document.querySelectorAll('.element_head')

var text_shadow_modal_btn = document.createElement('span');
text_shadow_modal_btn.innerHTML = "Text Shadow  &tosa;"
text_shadow_modal_btn.style.fontSize = "10px";
text_shadow_modal_btn.style.background = "white";
text_shadow_modal_btn.style.padding = "3px 0px";
text_shadow_modal_btn.style.color = "black";
text_shadow_modal_btn.classList.add("border", "two_grid", "text_shadow_modal_triger")
var text_shadow_modal = document.createElement('div');
text_shadow_modal.classList.add('text_shadow_modal')
text_shadow_modal.style.display = 'block';
text_shadow_modal.innerHTML = `
    <ion-icon name="close-circle-outline" class="delete_myprnt"></ion-icon>
    <ion-icon name="eye-outline"></ion-icon>
    <br>
    <label class="two_grid" for=""> offset X</label>
    <label class="two_grid" for=""> offset Y </label>
    <input type="number" class="border two_grid text_shadow_h_shadow" id="text_shadow_h_shadow" placeholder="" name="" min="-50" max="150" step="1">
    <input type="number" class="border two_grid text_shadow_v_shadow" id="text_shadow_v_shadow" placeholder="" name="" min="-50" max="150" step="1">


    <label class="two_grid" for=""> shadow</label>
    <label class="two_grid" for=""> Blur</label>
    <!-- <button data-jscolor="{onInput:'update(this)',preset:'dark', width:250, paletteCols:15, value:'rgba(51,153,255,0.5)'}" class="border prop two_grid" id="color"></button> -->
    <input type="color" class="border two_grid text_shadow_color" value="#111e29" name="" id="text_shadow_color">
    <input type="number" class="border two_grid text_shadow_blur" id="text_shadow_blur" placeholder="" name="" min="0" max="10" step="1">
    <hr class="style_hr">
    <ion-icon name="add-circle-outline" id="add_textshadow" style="font-size: 25px;"></ion-icon>`
text_shadow_modal.style.position = "relative"
    // text_shadow_modal.style.background = "slategray"
text_shadow_modal.style.width = "16vw"


function enable_triger() {
    var text_shadow_modal_triger = document.querySelector('.text_shadow_modal_triger');
    text_shadow_modal_triger.onclick = (e) => {
        var target = e.target
        if (target.nextElementSibling.style.display == "none") {
            target.nextElementSibling.style.display = "block";

        } else {
            target.nextElementSibling.style.display = "none"
        }

    }
}

function onclick_property_selector_set() {
    var property_selector = document.querySelectorAll(".property_selector");
    for (el of property_selector) {
        el.oninput = (e) => {
            property_selector_set(e.target)
        }
    }
}

var style_div_for_mobile = document.querySelector('#style_for_mobile');
var options_div = document.querySelector('#options_div')

var style_for_mobile = document.querySelector('#style_div_for_mobile');
style_for_mobile.onclick = (e) => {
    options_div.style.display = "none";
    style_div_for_mobile.style.display = "flex"
}
var back_to_options_div = document.querySelector('#back_to_options_div');
back_to_options_div.onclick = () => {
    options_div.style.display = "flex";
    style_div_for_mobile.style.display = "none"

}




function property_selector_set(target) {

    // var target = e.target;
    var property = target.value;
    if (property == "font-size") {
        target.nextElementSibling.remove();

        var value_selector = document.createElement('input');
        value_selector.type = "number";
        value_selector.classList.add('border', 'two_grid')

        // console.log("value_selector")
        target.parentNode.insertBefore(value_selector, target.nextElementSibling)
            // target.nextElementSibling.innerHTML = `<input type="number" class="value border two_grid" placeholder="size"`
    }
    if (property == "background") {
        target.nextElementSibling.remove();

        var value_selector = document.createElement('input');
        value_selector.type = "color";
        value_selector.classList.add('border', 'two_grid')
            // console.log("value_selector")
        target.parentNode.insertBefore(value_selector, target.nextElementSibling)
    }
    if (property == 'text-shadow') {
        target.nextElementSibling.remove();

        target.parentNode.insertBefore(text_shadow_modal_btn, target.nextElementSibling);
        target.parentNode.insertBefore(text_shadow_modal, target.nextElementSibling.nextElementSibling);

        enable_triger()
    }
}



function adding_keyframe_rules_div(parentel, percentage) {
    var keyframe_rules_div = document.createElement("div");
    keyframe_rules_div.classList.add("keyframe-rules_div");
    keyframe_rules_div.innerHTML = `<span>At</span> <input type="number" class="border two_grid keyframe_percentage"  value=${percentage}> <span>%</span>
    <span>{</span>
        <br>
    <span>}</span>
    <span class="material-icons add_property_selector" id="">
    add_circle_outline
    </span>`
    parentel.insertBefore(keyframe_rules_div, parentel.lastElementChild);
    add_property_selector_btn()
}

function new_add_keyframe_rules_div() {
    var add_keyframe_rules_div = document.querySelectorAll(".add_keyframe-rules_div");
    for (var el of add_keyframe_rules_div) {
        el.onclick = (e) => {
            adding_keyframe_rules_div(e.target.parentNode, "0")
        }
    }
}

function InsertNew(clicker, where, what, beforwhat) {
    var clicker = document.querySelectorAll(clicker);
    for (el of clicker)
        el.onclick = (e) => {
            var div = what.cloneNode(true);
            div.id = 'interact' + Math.random().toString(36).substr(2, 9);
            e.target.parentNode.insertBefore(div, e.target)
        }
}

// var add_Animation_control_div_btn = document.querySelector("#add_Animation_control_div");
// var Animations = document.querySelector("#Animations");
// InsertNew(add_Animation_control_div, Animations, Animation_control_div, add_Animation_control_div_btn, [tagsTwoshow, property_selector_set, keyframes_creator])
//     // BoxContainer.div().append(cb)
for (var el of element_head) {
    el.addEventListener('click', list_hidendshow)
}

function tagsTwoshow() {
    var tagsTwo = document.querySelectorAll(".tagsTwo");
    var tagsTwo_content = document.querySelectorAll(".tagsTwo_content");
    for (let k = 0; k < tagsTwo.length; k++) {
        tagsTwo[k].addEventListener('click',
            function() {
                for (var tagTwo_content of tagsTwo_content) {
                    tagTwo_content.style.display = "none"
                }
                // console.log([k]);
                tagsTwo_content[k].style.display = "block";
            })
    }
}

function tagshow(tagsclass) {
    var tags_content = document.querySelectorAll(`.${tagsclass}_content`);
    for (var tags_contents of tags_content) {
        tags_contents.style.display = "none";
        // console.log(tags_contents)
    }
    tags_content[0].style.display = "grid";
    // console.log(window.innerHeight, tags_content[0].getBoundingClientRect().top)
    // tags_content[0].style.height = 
    // tags_content[0].style.height = "320px";
    // tags_content[0].style.overflow = "hidden auto";
    // tags_content[0].style.marginRight = "-5px";
    // tags_content[0].style.marginBottom = "-29px";
    var tags = document.querySelectorAll(`.${tagsclass}`);
    tags[0].style.border = "2px #34393ee6 solid";
    tags[0].style.animation = "heartbeat 1.5s ease-in-out infinite both";

    for (var tag of tags) {
        tag.onclick = (e) => {
            for (var tag of tags) {
                tag.style.border = "0px #34393ee6 solid";
                tag.style.animation = "none"

            }
            e.target.style.border = "2px #34393ee6 solid";
            e.target.style.animation = "heartbeat 1.5s ease-in-out infinite both";
            e.target.style.webkitAnimation = "heartbeat 1.5s ease-in-out infinite both";
            var tags_content = document.querySelectorAll(`.${tagsclass}_content`);
            for (var tags_contents of tags_content) {
                tags_contents.style.display = "none";
                // tags_contents.style.height = "320px";
                // tags_contents.style.overflow = "hidden auto";
                // tags_contents.style.marginRright = "5px";
                // tags_contents.style.marginBottom = "-29px";
                // console.log(tags_contents)
            }
            var show_content = document.querySelector(`#${e.target.id}_content`);
            show_content.style.display = "grid";
        }
    }
}

tagshow("tags_text")
tagshow("tags_template")
tagshow("tags_box_settings")
tagshow("tags_draw")
tagshow("tags_elements")


var element_opt_closer = document.querySelector("#element_opt_closer")
var element_opt_two_closer = document.querySelector("#element_opt_two_closer")
var element_opt_closer_cross = document.querySelector("#element_opt_closer_cross")
var customisable_div = document.querySelectorAll('.customisable_div');
var options_modal = document.querySelectorAll('.options_modal');


element_opt_closer_cross.style.display = "none"
element_opt_closer.style.display = "none"

element_opt_closer.onclick = () => {
        for (el of options_modal) {
            el.style.display = "none"
        }
        for (el of document.querySelectorAll('.options_head')) {
            el.style.borderBottom = "4px double #252935"
        }
        element_opt_closer.style.display = "none"
    }
    // 
element_opt_two_closer.onclick = () => {
    for (el of customisable_div) {
        el.style.display = "none"
    }
    for (el of document.querySelectorAll('.options_two_head')) {
        el.style.borderBottom = "4px double #252935"
    }
    element_opt_two_closer.style.display = "none"
}

element_opt_closer_cross.onclick = () => {
    var options_modal = document.querySelectorAll('.options_modal');
    for (el of options_modal) {
        el.style.display = "none"
    }
    element_opt_closer_cross.style.display = "none"
}

var theme_checkbox = document.querySelector('#theme_checkbox');
// theme_checkbox.oninput = (e) => {
//         if (e.target.checked) {
//             console.log('cheked')
//             document.documentElement.setAttribute('data-theme', 'dark')
//         } else {
//             document.documentElement.setAttribute('data-theme', 'light')
//         }
//     }
//? OPtions Hide and show

var options_head = document.querySelectorAll('.options_head');
for (el of options_head) {
    el.addEventListener('click', function() {
        optionsHideAndShow(this)
    })


}
var options_two_head = document.querySelectorAll('.options_two_head');
for (el of options_two_head) {
    el.addEventListener('click', function() {
        // console.log("bhai dekh")
        optionsTwoHideAndShow(this)
    })
}

function optionsTwoHideAndShow(target) {
    for (el of customisable_div) {
        el.style.display = "none"
    }
    element_opt_two_closer.style.display = "block"
    for (el of document.querySelectorAll('.options_two_head')) {
        el.style.borderBottom = "4px double #252935"
    }
    document.querySelector(`#${target.id}_div`).style.display = "block";
    target.style.borderBottom = "4px blueviolet solid";


}

function optionsHideAndShow(target) {
    var options_modal = document.querySelectorAll('.options_modal');
    for (el of options_modal) {
        el.style.display = "none"
    }
    for (el of document.querySelectorAll('.options_head')) {
        el.style.borderBottom = "4px double #252935"
    }
    document.querySelector(`#divbar_${target.id}`).style.display = "block";
    target.style.borderBottom = "4px blueviolet solid";
    if (window.innerWidth > 400) {
        element_opt_closer.style.display = "block"
    } else {
        element_opt_closer_cross.style.display = "block"
    }
}




// var box_bg_color_input = document.querySelector('#box_bgcolor');
// box_bg_color_input.oninput = (e) => {
//     BoxContainer.div().style.background = e.target.value
// }

const add_textbox = () => {
        // var textbox = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    
        var textbox = document.createElement('p');
        textbox.innerHTML = "Text"
            // textbox.style.padding = '5px'
            // textbox.style.touchAction = 'none'
        textbox.draggable = false;
        // textbox.draggable = false;
        textbox.contentEditable = false;
        textbox.style.fontFamily = 'fantasy';
        textbox.style.fontSize = '25px';
        textbox.style.background = 'none';
        textbox.style.color = 'black';
        textbox.style.opacity = '1';
        textbox.style.width = 'fit-content';
        // textbox.style.zIndex = '3';
        // textbox.style.position = 'absolute';
        textbox.classList.add('draggable');
        // textbox.setAttributeNS(null, 'x', '10')
        // textbox.setAttributeNS(null, 'y', '40')
        transformFunc.defaultTransform(textbox)
        transformFunc.updateValue(textbox, "translateX", "10px")
        transformFunc.updateValue(textbox, "translateY", "40px")
        document.querySelector('#dataEND').append(textbox)
    }
    //  ! CSS VALUE SETTING =================================================
    // let prop = document.querySelectorAll('.prop');
    // for (var el of prop) {
    //     el.addEventListener('input',
    //         function() {
    //             if (this.classList.contains('colorpicker')) {
    //                 var hex_color = tinycolor(this.value).toHexString();
    //                 getactiveel().style[snakeToCamel(this.id)] == hex_color
    //             }
    //             if (this.classList.contains('px')) {
    //                 getactiveel().style[snakeToCamel(this.id)] = this.value + 'px';

//             } else {
//                 getactiveel().style[snakeToCamel(this.id)] = this.value

//             }
//         })
// }


// var clckprop = document.querySelectorAll('.clckprop');
// for (var el of clckprop) {
//     el.addEventListener('click', function() {
//         // console.log(this.classList[1]);
//         if (getactiveel().style[this.id] == this.classList[4]) {
//             getactiveel().style[this.id] = "";
//             this.style.background = ""
//         } else {
//             getactiveel().style[this.id] = this.classList[4];
//             this.style.background = "darkgray";
//         }


//     })
// }



// add_textshadow_btn.addEventListener('click', function() { add_textshadow("#111e29", "0", "0", "0", add_textshadow_btn) })
// 
// add_boxshadow_btn.addEventListener('click', function() { add_boxshadow("#111e29", "0", "0", "0", "0", false) })

// var fontFamily = document.getElementById('font-family');
// for (var i = 0; i < fontFamily.childElementCount; i++) {
//     fontFamily.children[i].style.fontFamily = fontFamily.children[i].innerHTML
// }
// fontFamily.oninput = () => {
//     fontFamily.style.fontFamily = fontFamily.value
// }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !style box work

// let downupic = document.querySelectorAll('.downupic');
// for (let el of downupic) {
//     el.onclick = (e) => {
//         if (style_head_off) {
//             // el.closest('.down_up').style.transition = "height 2s";
//             el.closest('.down_up').style.height = 'fit-content';
//             el.style.transition = "transform 1s";
//             el.style.transform = "rotate(180deg)"
//             style_head_off = false;
//         } else {
//             // el.closest('.down_up').style.transition = "height 1s"
//             // console.log(e.target.parentNode.tagName)
//             // var down_up = el.closest('.down_up');
//             if (e.target.parentNode.tagName === 'H4') {
//                 // console.log(down_up.id)
//                 el.closest('.down_up').style.height = "40px"
//             } else {
//                 el.closest('.down_up').style.height = '26px';
//             }
//             el.style.transform = "rotate(360deg)";
//             style_head_off = true;
//         }
//     }
// }
let Interac_Style_prop_heading = document.querySelectorAll('.prop_heading');
for (el of Interac_Style_prop_heading) {
    el.addEventListener('click', function() {
        if (this.parentNode.style.height == "fit-content") {
            this.parentNode.style.height = "6vh"
            this.parentNode.querySelector('.downupic').style.transform = "rotate(180deg)"
        } else {
            this.parentNode.style.height = "fit-content"
            this.parentNode.querySelector('.downupic').style.transform = "rotate(360deg)"
        }
    })
}
var imageCount = 0;
var containerCount = 0;
var textCount = 0;

function add_to_box_sibling() {
    var cln = this.previousElementSibling.cloneNode(true)
    cln.style.position = 'absolute'
    cln.contentEditable = false;
    cln.draggable = false;
    cln.spellcheck = false;
    console.log(cln.tagName)

    if (cln.tagName == "P") {
        var fr = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        fr.append(cln)
        fr.setAttributeNS(null, 'x', '0')
        fr.setAttributeNS(null, 'y', '0')
        fr.style.overflow = 'visible'
        textCount = textCount + 1
        fr.setAttribute('element_name', `text${textCount}`)
        fr.setAttribute('element_groups', "")
        fr.classList.add('draggable')
        BoxContainer.svg().append(fr)


        fr.setAttribute('style', cln.getAttribute('style'))

        cln.setAttribute('style', "")
        cln.addEventListener('dbclick', function() {
            this.contentEditable = true;
        })
        cln.addEventListener('input', function() {
            if (parseInt(this.parentNode.style.height) < this.getBoundingClientRect().height) {
                this.parentNode.style.height = this.getBoundingClientRect().height + "px"
            }
            if (parseInt(this.parentNode.style.width) < this.getBoundingClientRect().width) {
                this.parentNode.style.width = this.getBoundingClientRect().width + "px"
            }
        })
        transformFunc.defaultTransform(fr);
        // transformFunc.updateValue(fr, 'translateY', `${i+4}px`)
        fr.style.height = this.previousElementSibling.getBoundingClientRect().height
        fr.style.width = this.previousElementSibling.getBoundingClientRect().width
        fr.setAttributeNS(null, 'height', `${this.previousElementSibling.getBoundingClientRect().height}`)
        fr.setAttributeNS(null, 'width', `${this.previousElementSibling.getBoundingClientRect().width}`)
        fr.setAttribute('element-type', 'Text_Cover')
        fr.children[0].setAttribute('element-type', 'Text')
    } else if (cln.tagName == "FOREIGNOBJECT") {
        var fr = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        fr.setAttributeNS(null, 'x', '0')
        fr.setAttributeNS(null, 'y', '0')
        fr.setAttribute('element_name', `Container${containerCount}`)
        containerCount = containerCount + 1
        fr.setAttribute('element_groups', "")
        fr.classList.add('draggable')


        BoxContainer.svg().append(fr)

        fr.setAttribute('style', this.previousElementSibling.getAttribute('style'))
        transformFunc.defaultTransform(fr);
        // transformFunc.updateValue(fr, 'translateY', `${i+4}px`)
        fr.setAttributeNS(null, 'height', `${this.previousElementSibling.getBoundingClientRect().height}`)
        fr.setAttributeNS(null, 'width', `${this.previousElementSibling.getBoundingClientRect().width}`)
        fr.setAttribute('element-type', 'Container')
        fr.style.height = this.previousElementSibling.getBoundingClientRect().height
        fr.style.width = this.previousElementSibling.getBoundingClientRect().width
    } else if (cln.tagName == "DIV") {
        var fr = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        // var vd = document.createElement('video');
        // var src = document.createElement('source');
        // src.src = cln.querySelector('source').src
        // vd.append(src)

        // vd.classList.add('video-js')
        // vd.setAttribute('height', '200')
        // vd.setAttribute('width', '200')
        // vd.setAttribute('data-setup', '{}')
        // vd.setAttribute('controls', '')
        fr.style.backgroundColor = cln.style.backgroundColor

        cln.setAttribute('element-type', "text-input")
        fr.append(cln)
        cln.style.height = "100%"
        cln.style.width = "100%"
        cln.style.backgroundColor = ""
        fr.setAttributeNS(null, 'x', '0')
        fr.setAttributeNS(null, 'y', '0')
        fr.style.overflow = 'visible'
        fr.setAttribute('element_name', `video`)
        fr.setAttribute('element_groups', "")
        fr.classList.add('draggable')
        transformFunc.defaultTransform(fr);
        // transformFunc.updateValue(fr, 'translateY', `${i+4}px`)
        BoxContainer.svg().append(fr)
        fr.setAttributeNS(null, 'height', `${this.previousElementSibling.getBoundingClientRect().height}`)
        fr.setAttributeNS(null, 'width', `${this.previousElementSibling.getBoundingClientRect().width}`)
        fr.style.height = this.previousElementSibling.getBoundingClientRect().height
        fr.style.width = this.previousElementSibling.getBoundingClientRect().width
    } else if (cln.tagName == "IFRAME") {
        var fr = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        fr.append(cln)
        fr.setAttributeNS(null, 'x', '0')
        fr.setAttributeNS(null, 'y', '0')
        fr.style.overflow = 'visible'
        fr.setAttribute('element_name', `Imageg`)
        fr.setAttribute('element_groups', "")
        fr.classList.add('draggable')
        transformFunc.defaultTransform(fr);
        // transformFunc.updateValue(fr, 'translateY', `${i+4}px`)
        document.querySelector('#interac_Svg').append(fr)
        fr.setAttributeNS(null, 'height', `${this.previousElementSibling.getBoundingClientRect().height}`)
        fr.setAttributeNS(null, 'width', `${this.previousElementSibling.getBoundingClientRect().width}`)
        console.log(cln.getBoundingClientRect().height)
    } else if (cln.tagName == "IMG") {
        var fr = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        var div = document.createElement('div')
        div.style.height = '100px'
        div.style.width = '100px'
        fr.append(div)
        div.append(cln)
        fr.setAttributeNS(null, 'x', '0')
        fr.setAttributeNS(null, 'y', '0')
        fr.style.overflow = 'visible'
        fr.setAttribute('element_name', `image${imageCount}`)
        imageCount = imageCount + 1
        fr.setAttribute('element_groups', "")
        fr.classList.add('draggable')
        transformFunc.defaultTransform(fr);
        transformFunc.defaultTransform(div);
        // transformFunc.updateValue(fr, 'translateY', `${i+4}px`)
        BoxContainer.svg().append(fr)
            // fr.setAttributeNS(null, 'height', `${this.previousElementSibling.getBoundingClientRect().height}`)
            // fr.setAttributeNS(null, 'width', `${this.previousElementSibling.getBoundingClientRect().width}`)
        fr.setAttribute('element-type', 'Image_Cover')
        div.children[0].setAttribute('element-type', 'Image')
        fr.style.height = '1px'
        fr.style.width = '1px'
            // fr.style.width = this.previousElementSibling.getBoundingClientRect().width
    } else if (cln.tagName == "svg") {
        var fr = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        fr.append(cln)
        fr.setAttributeNS(null, 'x', '0')
        fr.setAttributeNS(null, 'y', '0')
        fr.style.overflow = 'visible'
        fr.setAttribute('element_name', `Imageg`)
        fr.setAttribute('element_groups', "")
        fr.classList.add('draggable')
        transformFunc.defaultTransform(fr);
        // transformFunc.updateValue(fr, 'translateY', `${i+4}px`)
        document.querySelector('#interac_Svg').append(fr)
        fr.setAttributeNS(null, 'height', `${this.previousElementSibling.getBoundingClientRect().height}`)
        fr.setAttributeNS(null, 'width', `${this.previousElementSibling.getBoundingClientRect().width}`)
        console.log(cln.getBoundingClientRect().height)
    }

}


var add_sibling = document.querySelectorAll('.add_sibling');
for (el of add_sibling) {
    el.addEventListener('click', function() {
        BoxContainer.Add(this.previousElementSibling)
    })

}

function add_to_box() {
    var cln = this.cloneNode(true)
        // console.log(cln)
        // //console.log(this)
        // var children = cln.children
        // var children = cln.children
    cln.classList.add('resizable')

    cln.classList.add('draggable')
    cln.classList.add('position_in_box')
    cln.style.position = 'absolute'
    for (var i = 0; i < BoxContainer.div().childElementCount; i++) {
        cln.style.top = `${i+4}%`
    }
    cln.contentEditable = false;
    cln.draggable = false;
    BoxContainer.div().appendChild(cln);
}

function Adding_animation_control_div(name, duration, timingFunction, delay, iterationCount, direction, fillMode) {
    var Animation_control_div = document.createElement('div');
    Animation_control_div.classList.add("Animation_control_div");
    Animation_control_div.innerHTML = `<input type="text" class="property border three_grid animation-name" placeholder="animation name">
                    <ion-icon name="chevron-up-circle-outline"></ion-icon>
                    <ion-icon name="close-circle-outline" class="delete_myprnt"></ion-icon>
                    <ion-icon name="eye-outline"></ion-icon>
                    <span class="material-icons">
                    play_circle
                    </span>
                    <hr class="style_hrTwo">
                    <div style="display: flex;border: 2px black solid;">
                        <div class="tagsTwo" id="keyframes">Keyframes </div>
                        <div class="tagsTwo" id="settings">Settings</div>
                    </div>
                    <!-- // -->
                    <div id="keyframes_content" class="tagsTwo_content animation_keyframes">
                    
                    <span class="material-icons add_keyframe-rules_div" id="">
                        add_circle_outline
                        </span></div>
                    <div class="tagsTwo_content animation_settings">
                        <div class="tiles"> <label for="">Delay</label> : <input type="number" class="value border sec two_grid animation-delay"> <span>sec</span></div>
    
                        <div class="tiles"> <label for="">Duration</label> :<input type="number" class="value border sec two_grid animation-duration"><span>sec</span>
                        </div>
                        <div class="tiles"> <label for="">Direction</label> : <select class="value border two_grid animation-direction">
                        <option value="normal">normal</option>                
                        <option value="alternate">alternate</option>
                        <option value="reverse">reverse</option> 
                        <option value="alternate-reverse">alternate-reverse</option>
                        </select>
                        </div>
                        <div class="tiles"> <label for="">Fill-mode</label> : <select class="value border two_grid animation-fill-mode">
                        <option value="forwards">forwards</option>                
                        <option value="backwards">backwards</option>
                        <option value="both">both</option> </select>
                        </div>
                        <div class="tiles"> <label for="">Iteration-count</label> : <input type="number" class="value border one_grid animation-iteration-count"> <input type="checkbox" name="" id=""> <span style="font-size: x-small;">infinite</span></div>
                        <div class="tiles"> <label for="">Timing-function</label> : <select class="value border two_grid animation-timing-function">
                        <option value="forwards">forwards</option>                
                        <option value="backwards">backwards</option>
                        <option value="both">both</option> </select></div>
                    </div>
                    <hr class="style_hrTwo">`

    var add_Animation_control_div = document.querySelector('#add_Animation_control_div')
    add_Animation_control_div.parentNode.insertBefore(Animation_control_div, add_Animation_control_div)
    Animation_control_div.children[0].value = name;
    // for (var i = 0; i < Animation_control_div_cln.childElementCount; i++) {
    //     console.log(Animation_control_div_cln.children[i], [i])
    // }
    var animation_settings = getchild(Animation_control_div, "animation_settings")
    lenght = getchild(Animation_control_div, "animation_settings").childElementCount;
    for (i = 0; i < lenght; i++) {
        var found = animation_settings.children[i].children[1]


        if (found.classList.contains("animation-duration")) {
            found.value = parseFloat(duration)
        }
        if (found.classList.contains("animation-timing-fuction")) {
            found.value = timingFunction
        }
        if (found.classList.contains("animation-delay")) {
            found.value = parseFloat(delay)
        }
        if (found.classList.contains("animation-iteration-count")) {
            if (iterationCount == "infinite") {
                found.nextElementSibling.checked = true;
                found.disabled = true;
            } else {
                found.value = parseFloat(iterationCount)
            }
        }
        if (found.classList.contains("animation-direction")) {
            found.value = direction
        }
        if (found.classList.contains("animation-fill-mode")) {
            found.value = fillMode
        }
    }
    tagsTwoshow()
    Update_animation_data()
    add_property_selector_btn()
    new_add_keyframe_rules_div()
        // console.log(name)
        // console.log("found", keyframes[snakeToCamel(name)])
    var keyframe = keyframes[snakeToCamel(name)]
        // console.log(keyframe.length)
    var keyframe_content = getchild(Animation_control_div, "animation_keyframes")
    k = 0
    for (k; k < keyframe.length; k++) {
        // console.log([k])
        // console.log(lenght)
        adding_keyframe_rules_div(keyframe_content, keyframe[k].at)
        var count = keyframe[k].count
        for (j = 0; j < count; j++) {
            adding_property_selector(keyframe_content.children[k], keyframe_content.children[k].lastElementChild.previousElementSibling, keyframe[k].props[j], keyframe[k].vals[j])
        }
    }
}
// function Adding_keyframes_rules_div(where){
// where.insertBefore()
// }
function adding_property_selector(where, before, prop, value) {
    var select_property = document.createElement('div');
    select_property.classList.add('keyframe_data')
    select_property.innerHTML = `<ion-icon name="close-circle-outline"></ion-icon>
    <select name="" class="border property_selector two_grid keyframe_property" id="">
<option value="none"> Property</option>
<option value="font-size"> Font-size</option>
<option value="background"> BackgroundColor</option>
<option value="color">Font color</option>
<option value="box-shadow"> Boxshadow</option>
<option value="opacity"> Opacity</option>
<option value="letter-spacing"> Letter-spacing</option>
<option value="font-family"> Font-family</option>
<option value="text-shadow">Text-shadow</option>
</select>
<input type="text" class="keyframe_value border two_grid" placeholder="value">
<span class="material-icons">
preview
</span>
`

    for (var i = 0; i < select_property.childElementCount; i++) {
        if (select_property.children[i].classList.contains("keyframe_property")) {
            select_property.children[i].value = prop
        }
        if (select_property.children[i].classList.contains("keyframe_value")) {
            select_property.children[i].value = value
        }

    }
    onclick_property_selector_set();
    property_selector_set(select_property);
    where.insertBefore(select_property, before);

}
// updt func
function add_property_selector_btn() {
    var add_property_selector = document.querySelectorAll('.add_property_selector');
    for (var el of add_property_selector) {
        el.onclick = (e) => {
            adding_property_selector(e.target.parentNode, e.target.previousElementSibling, "none", "")
        }

    }
}

function Update_animation_data() {
    var Animation_control_div = document.querySelectorAll('.Animation_control_div');
    for (var el of Animation_control_div) {
        el.oninput = (e) => {
            var target = e.target
            if (target.classList.contains("sec")) {
                getactiveel().style[snakeToCamel(target.classList[target.classList.length - 1])] = `${e.target.value}s`
            } else {
                getactiveel().style[snakeToCamel(target.classList[target.classList.length - 1])] = e.target.value
            }
        }
    }
}
var add_Animation_control_div = document.querySelector('#add_Animation_control_div');
add_Animation_control_div.onclick = () => {
    Adding_animation_control_div("", 0, "", 0, 0, "", "")
}



async function videosearching(query, place) {

    var removing = document.querySelectorAll('.pexel_videos');
    for (var pexel_videos of removing) {
        pexel_videos.remove()
    }

    const pexels_api = '563492ad6f9170000100000179fc7cd4ffcc4e40a1b3246305313664';
    var query = query
    var search = `https://api.pexels.com/videos/search?query=${query}`

    const respone = await fetch(search, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: pexels_api
        }
    })
    const video_ = await respone.json();
    // console.log(video_.videos[1])
    // console.log(video_.videos[1].video_files[1].link)
    video_.videos.forEach(video => {
        var src = video.video_files[4].link

        // var pexel_videos = document.createElement('video');
        var vid = document.querySelector('#vid');
        var pexel_videos = vid.cloneNode(true)
            // pexel_videos.play()
        pexel_videos.src = src;
        // console.log(src)
        pexel_videos.classList.add('pexel_videos');
        place.append(pexel_videos)
        pexel_videos.addEventListener('click',
            add_to_box

        )
    })





}


async function imagesearching(query, place) {

    var removing = document.querySelectorAll('.pexel_images');
    for (var pexel_image of removing) {
        pexel_image.remove()
    }

    const pexels_api = '563492ad6f9170000100000179fc7cd4ffcc4e40a1b3246305313664';
    var query = query
    var search = `https://api.pexels.com/v1/search?query=${query}`

    const respone = await fetch(search, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: pexels_api
        }
    })
    const images = await respone.json();
    // console.log(images)
    images.photos.forEach(photo => {
        var src = photo.src.medium

        var pexel_images = document.createElement('img');
        pexel_images.src = src;
        pexel_images.classList.add('pexel_images');
        place.append(pexel_images)
        pexel_images.addEventListener('click',
            add_to_box

        )



    })





}


const gifsearching = (query, place) => {
    var removing = document.querySelectorAll('.gif');
    for (var gifs of removing) {
        gifs.remove()
    }


    var search = `https://api.giphy.com/v1/gifs/search?api_key=PA43GAa7kF5Uc2efveFUOO90hY9pNImW&q=${query}&limit=25&offset=0&rating=g&lang=en`

    const apiKey = '3X3bi8JmXrJmZIvPlKGShsu34W6aKzFX'

    fetch(search).then(function(res) {
        return res.json()
    }).then(function(json) {
        json.data.forEach(function(obj) {
            var gif = obj.images.downsized.url
            var gif_img = document.createElement('IMG');
            gif_img.src = gif
            css_styling('.gif', { height: "150px", width: "150px", padding: "5px" })
            gif_img.classList.add('gif')
            place.append(gif_img)


        })
        var gif = document.querySelectorAll('.gif');

        for (var gifs of gif) {

            gifs.addEventListener('click',
                add_to_box

            )
        }
    })


}

document.querySelector('#StickerSearchBtn').addEventListener('click', function() {
    stickergifsearching(this.nextElementSibling.value, this.parentNode.parentNode.querySelector('#StickersSearchResult'))
})


const stickergifsearching = (query, place) => {
    var search = `https://api.giphy.com/v1/stickers/search?api_key=PA43GAa7kF5Uc2efveFUOO90hY9pNImW&q=${query}&limit=25&offset=0&rating=g&lang=en`
    const apiKey = '3X3bi8JmXrJmZIvPlKGShsu34W6aKzFX'

    fetch(search).then(function(res) {
        return res.json()
    }).then(function(json) {
        json.data.forEach(function(obj) {
            var gif_stkr = obj.images.downsized.url
            var anim_stkr = document.createElement('IMG');
            anim_stkr.src = gif_stkr
            anim_stkr.height = "80"
            anim_stkr.width = "80"
                // css_styling('.stickers', { height: "150px", width: "150px", padding: "5px" })


            anim_stkr.classList.add('stickers')
            place.append(anim_stkr)


        })
        var sticker = document.querySelectorAll('.stickers');

        for (var stickers of sticker) {
            stickers.addEventListener('click', add_to_box)
        }
    })


}
let giphySearch = document.querySelector('#giphySearch');
let stickersSearch = document.querySelector('#stickersSearch');
// let imageSearch = document.querySelector('#imageSearch');
// let videoSearch = document.querySelector('#videoSearch');
// // imageSearch.addEventListener('input', function() {
// //     imagesearching(this.value, this.parentNode)
// // })
giphySearch.addEventListener('input', function() { gifsearching(this.value, this.parentNode) })
stickersSearch.addEventListener('input', function() { stickergifsearching(this.value, this.parentNode) })
    // videoSearch.addEventListener('input', function() { videosearching(this.value, this.parentNode) })


// // var add_simpimg = document.querySelector('#add_simpimg')

// // add_simpimg.onclick = () => {
// //     var img = document.createElement('IMG');

// //     img.src = 'test.png'
// //     img.classList.add('draggable')
// //     img.classList.add('resizable')
// //         // img.classList.add('active')
// //     img.classList.add('img_class')
// //     img.draggable = false
// //     img.contentEditable = true

// //     BoxContainer.div().append(img)

// // }







let div_modal_btn = document.querySelector('#div_modal_btn');
let div_modal = document.querySelector('#div_modal')
div_modal_btn.onclick = () => {

    div_modal.style.display = 'block'
}
















// DOWN UP TRIG!!!!!!!


// // !!!END DOCUMENT LISTENRS ========================================================================================

// //
// !!!  ==== ======================================================= SVG  =====================!!!!!!!!!!!!!!! 
// const PencilBrushbtn = document.querySelector("#PencilBrush");
// const LineBrushbtn = document.querySelector("#LineBrush");
// const Add_drawing_to_page = document.querySelector('#add_drawing_to_page');
// const Draw_svg_toolbar = document.querySelector('#draw_svg_toolbar')
// const Clear_drawing = document.querySelector('#clear_drawing')
// const Drag_or_draw = document.querySelector('#drag_or_draw')
// const Drawsvg = document.querySelector('#Draw_svg');
// var PB_color;
// var PB_width;
// var PB_blur;
// var PB_stroke;
// var PB_fill;
// var PB_linejoin;
// var PB_linecap;
// var LB_color;
// var LB_width;
// var LB_blur;
// var new_cursor;
// var DrawsvgCursor;

// PencilBrushbtn.addEventListener('click', function() {
//     if (this.innerHTML == `<i class="bi bi-brush"></i><span>selected</span>`) {
//         this.innerHTML = `<i class="bi bi-brush"></i><span>select</span>`;
//         this.style.border = "none";
//         Drawsvg.style.display = "none"
//         Draw_svg_toolbar.style.display = "none"
//         Drawsvg.onmousedown = () => { "" };
//     } else {
//         this.innerHTML = `<i class="bi bi-brush"></i><span>selected</span>`;
//         LineBrushbtn.innerHTML = `<i class="bi bi-brush"></i><span>select</span>`;
//         this.style.border = "2px #4444a2 double";
//         Drawsvg.innerHTML = ""
//         Drawsvg.style.display = "block"
//         Draw_svg_toolbar.style.display = "block"
//         LineBrushbtn.style.border = "";
//         PencilBrush()
//     }
// })
// LineBrushbtn.addEventListener('click', function() {
//     if (this.innerHTML == `<i class="bi bi-brush"></i><span>selected</span>`) {
//         this.innerHTML = `<i class="bi bi-brush"></i><span>select</span>`;
//         this.style.border = "none";
//         Drawsvg.onmousedown = () => { "" };
//     } else {
//         this.innerHTML = `<i class="bi bi-brush"></i><span>selected</span>`;
//         PencilBrushbtn.innerHTML = `<i class="bi bi-brush"></i><span>select</span>`;
//         this.style.border = "2px #4444a2 double";
//         PencilBrushbtn.style.border = "";
//         LineBrush()
//     }
// })

// // 
// Add_drawing_to_page.addEventListener('click', function() {
//     if (Drawsvg.childElementCount == 0) {

//     } else {
//         var gtag = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//         console.log(Drawsvg.innerHTML)
//             // for (el of Drawsvg.children) {
//             //     gtag.append(el)
//             // }
//         gtag.innerHTML = Drawsvg.innerHTML
//         gtag.classList.add('draggable')
//         transformFunc.defaultTransform(gtag)
//         BoxContainer.svg().append(gtag)

//     }
// })

// Clear_drawing.addEventListener('click', function() {
//     Drawsvg.innerHTML = ""
// })
// Drag_or_draw.addEventListener('click', function() {
//         if (this.innerHTML == "Move Drawings") {
//             for (var drawings of Drawsvg.children) {
//                 drawings.classList.add('draggable')
//                 transformFunc.defaultTransform(drawings)
//                 this.innerHTML == "Select Brush"
//             }
//         } else {
//             for (var drawings of Drawsvg.children) {
//                 drawings.classList.remove('draggable')
//                 this.innerHTML == "Move Drawings"
//             }
//         }
//     })
//     // PB_stroke = 'url(#transformedPattern)'
// PB_stroke = 'black'
// PB_fill = "none"


// document.querySelector('#divbar_draw').oninput = () => {
//     PencilBrushSettings()
//     LineBrushSettings()
// }
// document.querySelector('#PB_stroke-color').oninput = (e) => {
//     PB_stroke = e.target.value
// }
// document.querySelector('#PB_fill-color').oninput = (e) => {
//     PB_fill = e.target.value
// }
// document.querySelector('#PB_fill-transparent').oninput = (e) => {
//     if (e.target.checked) {
//         PB_fill = "none"
//     } else {
//         PB_fill = e.target.previousElementSibling.value
//     }
// }

// function PencilBrushSettings() {
//     PB_width = document.querySelector('#PB_width').value || '5';
//     PB_blur = document.querySelector('#PB_blur').value || '0';
//     PB_linejoin = document.querySelector('#PB_stroke-linejoin').value || 'round';
//     PB_linecap = document.querySelector('#PB_stroke-linecap').value || 'round';
//     // var cursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='0' cy='0' r='5' stroke='black' stroke-width='3' fill='red' /%3E%3C/svg%3E ")`


//     var cursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Cpolyline points='50,50 51,51' stroke-linejoin='round' stroke-linecap='round' fill='none' stroke='black' stroke-width='5' /%3E%3C/svg%3E")`
//     var swc = cursor.split('stroke-width=')[1].split(' ')[0].replace(/['"]+/g, '')
//     var sc = cursor.split('stroke=')[1].split(' ')[0].replace(/['"]+/g, '')
//     var fc = cursor.split('fill=')[1].split(' ')[0].replace(/['"]+/g, '')
//     var slcc = cursor.split('stroke-linecap=')[1].split(' ')[0].replace(/['"]+/g, '')
//     var sljc = cursor.split('stroke-linejoin=')[1].split(' ')[0].replace(/['"]+/g, '')
//     var pc = cursor.split('points=')[1].split('s')[0].replace(/['"]+/g, '').trim()


//     new_cursor = cursor.replace(`stroke-width='${swc}'`, `stroke-width='${PB_width}'`)
//     new_cursor = new_cursor.replace(`fill='${fc}'`, `fill='${PB_fill}'`)
//     new_cursor = new_cursor.replace(`stroke='${sc}'`, `stroke='${tinycolor(PB_stroke).toRgbString()}'`)
//     new_cursor = new_cursor.replace(`stroke-linejoin='${sljc}'`, `stroke-linejoin='${PB_linejoin}'`)
//     new_cursor = new_cursor.replace(`stroke-linecap='${slcc}'`, `stroke-linecap='${PB_linecap}'`)
//     PB_width = parseInt(PB_width)
//         // console.log(pc)
//         // console.log(`points='${pc}'`)
//         // console.log(`points='${PB_width/2},${PB_width/2} ${PB_width/2 + 1},${PB_width/2 + 1}'`)
//     new_cursor = new_cursor.replace(`points='${pc}'`, `points='${PB_width/2},${PB_width/2} ${PB_width/2},${PB_width/2}'`)
//     new_cursor = new_cursor.replace(`points='${pc}'`, `points='${5},${5} ${5},${5}'`)
//     DrawsvgCursor = `${new_cursor} ${PB_width/2} ${PB_width/2}, auto`
//     Drawsvg.style.cursor = DrawsvgCursor


//     // new_cursor = cursor.replace(`stroke-width='3'`, `stroke-width='1'`)
//     // return PB_width, PB_blur, PB_stroke
// }
// // var cursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='0' cy='0' r='5' stroke='black' stroke-width='3' fill='red' /%3E%3C/svg%3E ")`
// // var strokeC = cursor.split('stroke-width=')[1].split(' ').replace(/['"]+/g, '')
// // var new_cursor = cursor.replace(`stroke-width='${strokeC}'`, `stroke-width='${PB_width}'`)

// function PencilBrush() {
//     var preview_svg_elems = "";

//     // console.log(new_cursor)
//     PencilBrushSettings()
//         // console.log(new_cursor)
//     Drawsvg.style.cursor = DrawsvgCursor
//     Drawsvg.onmousedown = (e) => {
//         var polyline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//         // polyline.classList.add('draggable')
//         Drawsvg.append(polyline)
//         transformFunc.defaultTransform(polyline)
//         var ex = e.x - parseInt(BoxContainer.div().getBoundingClientRect().left)
//         var ey = e.y - parseInt(BoxContainer.div().getBoundingClientRect().top)
//         var points = `M${ex},${ey} ${ex + 1},${ey + 1}`
//         console.log(points)
//         polyline.setAttributeNS(null, "d", points)
//         polyline.setAttributeNS(null, "stroke-width", PB_width)
//             // polyline.setAttributeNS(null, "fill", 'none')
//         polyline.setAttributeNS(null, "stroke", PB_stroke)
//         polyline.setAttributeNS(null, "fill", PB_fill)
//         polyline.setAttributeNS(null, "stroke-linecap", PB_linecap)
//         polyline.setAttributeNS(null, "stroke-linejoin", PB_linejoin)
//         polyline.setAttributeNS(null, "filter", `blur(${PB_blur}px)`)
//         Drawsvg.onmousemove = (e) => {
//             Drawsvg.style.cursor = DrawsvgCursor

//             points = points.concat(` ${e.x - BoxContainer.div().getBoundingClientRect().left},${e.y -BoxContainer.div().getBoundingClientRect().top}`)
//                 // points.concat(` ${e.x - BoxContainer.div().getBoundingClientRect().left},${e.y -BoxContainer.div().getBoundingClientRect().top}`)
//                 // polyline.setAttributeNS(null, "points", points.concat(` ${e.x - BoxContainer.div().getBoundingClientRect().left},${e.y -BoxContainer.div().getBoundingClientRect().top}`))
//             polyline.setAttributeNS(null, "d", points)
//                 // console.log(PB_width.value)
//             polyline.setAttributeNS(null, "stroke-width", PB_width)
//                 // polyline.setAttributeNS(null, "fill", 'none')
//             polyline.setAttributeNS(null, "stroke", PB_stroke)
//             polyline.setAttributeNS(null, "fill", PB_fill)
//             polyline.setAttributeNS(null, "stroke-linecap", PB_linecap)
//             polyline.setAttributeNS(null, "stroke-linejoin", PB_linejoin)
//             polyline.setAttributeNS(null, "filter", `blur(${PB_blur}px)`)
//                 // polyline.style.filter = `blur${PB_blur}px`

//             polyline.id = "dekho"
//         }

//         Drawsvg.onmouseup = (e) => {
//             // var svg_text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//             // var textpath = document.createElementNS('http://www.w3.org/2000/svg', 'textpath');
//             // textpath.setAttribute('href', '#dekho')
//             // textpath.innerHTML = "hello bacjass"
//             // BoxContainer.svg().append(svg_text)
//             // svg_text.append(textpath)
//             var json = { d: polyline.getAttribute('d'), }
//             BoxContainer.CreateTextPathElement(json)
//             Drawsvg.onmousemove = (e) => {
//                 ""
//             }
//         }
//     }
// }

// function LineBrush() {
//     var preview_svg_elems = "";
//     LineBrushSettings()
//     Drawsvg.onmousedown = (e) => {
//         var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
//         line.classList.add('draggable')
//         Drawsvg.append(line)
//         var startX = e.x
//         var startY = e.y
//         line.setAttributeNS(null, 'x1', startX - BoxContainer.div().getBoundingClientRect().left)
//         line.setAttributeNS(null, 'y1', startY - BoxContainer.div().getBoundingClientRect().top)
//         Drawsvg.onmousemove = (e) => {

//             if (e.x - startX < 0) {
//                 var posX = startX - e.x;
//             } else {
//                 var posX = e.x - startX
//             }
//             if (e.y - startY < 0) {
//                 var posY = startY - e.y;
//             } else {
//                 var posY = e.y - startY;
//             }
//             line.setAttributeNS(null, "stroke-width", LB_width)
//             line.setAttributeNS(null, "fill", 'none')
//             line.setAttributeNS(null, "stroke", LB_color)
//             line.setAttributeNS(null, "filter", `blur(${LB_blur}px)`)
//                 // console.log(`blur${PB_blur}px`)
//             line.setAttributeNS(null, 'x2', e.x - BoxContainer.div().getBoundingClientRect().left)
//             line.setAttributeNS(null, 'y2', e.y - BoxContainer.div().getBoundingClientRect().top)


//         }

//         Drawsvg.onmouseup = (e) => {
//             Drawsvg.onmousemove = (e) => {
//                 ""
//             }
//         }
//     }
// }

// function LineBrushSettings() {
//     LB_color = document.querySelector('#LB_color').value;
//     LB_width = document.querySelector('#LB_width').value;
//     LB_blur = document.querySelector('#LB_blur').value;
//     return LB_color, LB_width, LB_blur
// }


// !!!SVG!!!!!!!!!!!!!!!!!!!!!!!!





// !!!!============================FUNCTION CONTROLS============================!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const add_InteractFunctionEditor_btn = document.querySelector('#add_InteractFunctionEditor_btn');
// add_InteractFunctionEditor_btn.onclick = (e) => {
//     e.target.parentNode.insertBefore(InteractFunctionEditor.cloneNode(true), e.target)
// }

// ?
export function update_all_elements_name_list() {
    all_element_names = []
    var all_groups_names = []
        // all_element_groups = ();
        // console.log(all_element_names)
    var list = []
    for (el of BoxContainer.svg().children) {
        if (el.tagName == 'polyline' || el.tagName == 'foreignObject') {
            list.push(el)
        }
    }
    // var list = BoxContainer.div().querySelectorAll('div,p,circle,rect,polyline,img,text');
    for (var element_name of list) {
        if (element_name.getAttribute('element_name') != null) {
            all_element_names.push(element_name.getAttribute('element_name'))
        }
    }
    for (var element_name of list) {
        if (element_name.getAttribute('element_groups') != null && element_name.getAttribute('element_groups') != undefined && element_name.getAttribute('element_groups') != "") {
            for (var groups of element_name.getAttribute('element_groups').split(',')) {
                all_groups_names.push(groups)
            }
            // all_groups_names.push(element_name.getAttribute('element_groups').split(','))
            // console.log(all_groups_names)

        }
        all_element_groups = [...new Set(all_groups_names)]
            // console.log(all_element_groups)
    }
}

function selectTagOptionShow() {
    var selectTagOptionShow_ = document.querySelectorAll('.selectTagOptionShow');

    for (el of selectTagOptionShow_) {
        el.addEventListener('click', function() {
            // console.log(this.parentNode)
            var original_height = this.parentNode.style.height
            this.parentNode.style.height = "fit-content"
            this.nextElementSibling.style.display = "block"
            this.nextElementSibling.style.left = this.parentNode.getBoundingClientRect().x + "px"
                // console.log(this.getBoundingClientRect().x + "px")
            this.nextElementSibling.style.top = this.parentNode.getBoundingClientRect().y + 25 + "px"



        })
    } // selectTagOptionShow
}

function selectTag_options() {
    var selectTag_options_ = document.querySelectorAll('.selectTag_options');
    for (el of selectTag_options_) {
        el.onclick = (e) => {
            // console.log(e.target)
            // console.log(getparent(e.target, 'selectTag'))
            // console.log(e.target.closest('.selectTag_value'))

            var selecttag = gettarget(e, 'selectTag')
            selecttag.setAttribute('value', e.target.closest('.selectTag_options').innerText)
            var selecttag_innerhtml;

            if (e.target.tagName == 'P') {
                selecttag_innerhtml = e.target.innerHTML

            } else {
                selecttag_innerhtml = e.target.parentNode.innerHTML

            }

            if (selecttag_innerhtml.includes('element_group_icon')) {
                selecttag.setAttribute('type', 'element_group')
            } else {
                selecttag.setAttribute('type', 'element_name')
            }
            selecttag.querySelector('.selectTag_value').innerHTML = selecttag_innerhtml
            getparent(e.target, 'selectTag_options_div').style.display = "none"
                // this.parentNode.parentNode.classList.add(getchild(this.parentNode.parentNode, "selectTag_value").innerText.replace(" ", ""))
        }

    }
}


function add_element_select_list() {
    var add_element_select_list_btn = document.querySelectorAll('.add_element_select_list_btn');
    for (el of add_element_select_list_btn) {
        el.onclick = (e) => {
                if (e.target.parentNode.classList.contains('triggerers_container')) {
                    var triggerer_selector = element_select_list.cloneNode(true);
                    triggerer_selector.classList.add('triggerer_selector');
                    e.target.parentNode.insertBefore(triggerer_selector, e.target)
                } else {
                    var functionEditor = getparent(e.target, 'InteractFunctionEditor');
                    for (elem of functionEditor.querySelectorAll('.functions_transitions_controller')) { elem.style.display = "none" }

                    var effector_selector = element_select_list.cloneNode(true);
                    effector_selector.classList.add('effector_selector');
                    effector_selector.id = '_' + Math.random().toString(36).substr(2, 9);

                    e.target.parentNode.insertBefore(effector_selector, e.target)
                    var ftc = functions_transitions_controller.cloneNode(true);
                    ftc.setAttribute('functions_transitions_controller_for', effector_selector.id)
                    functionEditor.insertBefore(ftc, functionEditor.querySelector('.enable_function'))
                }
            }
            // el.addEventListener('click', function() {
            //     console.log('cgcchg')
            // })
    }
}

function update_triggers_list() {
    // var element_select_list_ = document.querySelectorAll('.element_select_list');
    // // var st = []
    // for (el of element_select_list_) {
    //     var options_div = el.querySelector('.selectTag_options_div');
    //     options_div.innerHTML = "";
    //     for (var names of all_element_names) {
    //         var p = document.createElement('p');
    //         p.classList.add('selectTag_options');

    //         p.innerHTML = `<i class="bi bi-file element_name_icon" ></i>${names}`
    //         options_div.append(p)
    //     }
    //     // 
    //     for (var names of all_element_groups) {
    //         var p = document.createElement('p');
    //         p.classList.add('selectTag_options');

    //         p.innerHTML = `<i class="bi bi-file element_group_icon"></i>${names}`
    //         options_div.append(p)
    //     }
    //     // 

    // }


    // NEW ADDDER
    // var stod = element_select_list.querySelector('.selectTag_options_div');
    // stod.innerHTML = "";

    // for (var names of all_element_names) {
    //     var p = document.createElement('p');
    //     p.classList.add('selectTag_options');
    //     p.innerHTML = `<i class="bi bi-file element_name_icon"></i>${names}`
    //     stod.append(p)
    // }
    // for (var names of all_element_groups) {
    //     var p = document.createElement('p');
    //     p.classList.add('selectTag_options');

    //     p.innerHTML = `<i class="bi bi-file element_group_icon" ></i>${names}`
    //     stod.append(p)
    // }

}

function InteractFunctionEditor_height_btn() {
    // var InteractFunctionEditor_height_btn_ = document.querySelectorAll('.InteractFunctionEditor_height_btn');
    // for (el of InteractFunctionEditor_height_btn_) {
    //     el.onclick = (e) => {
    //         // console.log(this.parentNode)
    //         if (e.target.parentNode.style.height == "4vh") {
    //             e.target.style.transform = "rotate(180deg)"
    //             e.target.style.transition = "all 1s linear"
    //             e.target.parentNode.style.height = "fit-content"


    //         } else {
    //             e.target.style.transform = ""
    //             e.target.style.transition = "all 1s linear"
    //             e.target.parentNode.style.height = "4vh"

    //         }
    //     }
    // }
}

function effector_selector() {
    var effector_selectors = document.querySelectorAll('.effector_selector');
    for (el of effector_selectors) {
        el.onclick = (e) => {
            for (elem of effector_selectors) {
                elem.style.background = "#f0ffff"
                elem.style.boxShadow = ""
            }

            gettarget(e, "effector_selector").style.background = "rgb(3, 169, 244)"
            gettarget(e, "effector_selector").style.boxShadow = "1px 1px 1px 1px rgb(27 27 166)"
            var functioneditor = getparent(e.target, "InteractFunctionEditor")
            for (el of functioneditor.querySelectorAll('.functions_transitions_controller')) {
                el.style.display = "none"
            }
            try {
                functioneditor.querySelector(`[functions_transitions_controller_for=${gettarget(e, "effector_selector").id}]`).style.display = "block";
            } finally {
                ""
            }
            // if(e.target){}
        }
    }
}

function delete_effector_selector() {
    var delete_effector_selector_ = document.querySelectorAll('.delete_effector_selector');
    for (el of delete_effector_selector_) {
        el.onclick = (e) => {


            if (getparent(e.target, 'effector_selector') != null) {
                var to_delete = getparent(e.target, "effector_selector")
                document.querySelector(`[functions_transitions_controller_for=${to_delete.id}]`).remove()

            } else {
                var to_delete = getparent(e.target, "triggerer_selector")
            }
            to_delete.remove();

        }
    }
}

function effector_function() {
    var effectors_name = document.querySelectorAll('.effector_name')
    for (el of effectors_name) {
        el.onclick = (e) => {
            // console.log('yaha bhi')
            e.preventDefault()
                // console.log(el)
            if (getchild(el, 'selectTag_value').innerText !== "Select") {
                // console.log(el, el)
                var function_controldiv = el.parentNode.parentNode;
                let el_count = el.parentNode.childElementCount
                    // console.log('here')
                    // console.log(effectors_name.lenght)
                for (var l = 0; l < el_count; l++) {
                    // console.log(getchildren(function_controldiv, "functions_transitions_controller")[i])
                    if (el.parentNode.children[l] == el) {
                        // console.log(getchildren(function_controldiv, "functions_transitions_controller")[l])
                        // console.log(l)
                        if (getchildren(function_controldiv, "functions_transitions_controller")[l] == undefined) {
                            let ftc_count = getchildren(function_controldiv, "functions_transitions_controller").length;
                            for (j = 0; j < ftc_count; j++) {
                                getchildren(function_controldiv, "functions_transitions_controller")[j].style.display = "none";
                            }
                            console.log("making", l, el_count, el)
                            var ftc = functions_transitions_controller.cloneNode(true);
                            ftc.id = '_' + Math.random().toString(36).substr(2, 9);

                            function_controldiv.insertBefore(ftc, getchild(function_controldiv, "enable_function"))


                        } else {

                            let length = getchildren(function_controldiv, "functions_transitions_controller").length;
                            for (j = 0; j < length; j++) {
                                getchildren(function_controldiv, "functions_transitions_controller")[j].style.display = "none";
                            }
                            getchildren(function_controldiv, "functions_transitions_controller")[l].style.display = "block"
                                // console.log(getchildren(function_controldiv, "functions_transitions_controller")[l])
                                // console.log((l))

                        }
                    }
                }
                // console.log(l)

            }
        }
    }
}



// function AddNewFunction() {
//     var enable_btn = document.querySelectorAll('.enable_function');
//     for (var el of enable_btn) {
//         el.onclick = (e) => {
//             console.log(el)
//             AddfunctiontoJson(el)
//         }
//     }
// }

// function functiontagshow() {
//     var functiontags = document.querySelectorAll('.functiontags')
//     for (var elem of functiontags) {
//         elem.onclick = (e) => {
//             // console.log("edededededededededededed")
//             // for (el of document.querySelectorAll('.function_tagcontent')) {
//             //     el.style.display = "none"

//             // }

//             if (e.target.innerText == 'Function') {
//                 e.target.parentNode.nextElementSibling.style.display = "block"
//                 e.target.parentNode.nextElementSibling.nextElementSibling.style.display = "none"
//             } else {
//                 e.target.parentNode.nextElementSibling.nextElementSibling.style.display = "block"
//                 e.target.parentNode.nextElementSibling.style.display = "none"
//             }
//         }
//     }
// }

// function transitionValues() {
//     var transitions_controller = document.querySelectorAll("[container_div_for=transitions]");
//     for (el of transitions_controller) {
//         var that = el
//         el.oninput = (e) => {

//             var transition;
//             // console.log(el)
//             if (e.target.getAttribute('container_div_for') == null) {
//                 var transitions_controller = getparent(e.target, "container_for_transitions")
//             } else {
//                 var transitions_controller = e.target
//             }
//             // console.log(transitions_controller)
//             // console.log(e.target.getAttribute('container_div_for'))
//             var tc_count = transitions_controller.querySelectorAll('[div_for=transitions]').length;
//             transition = `${transitions_controller.querySelector('.transition-for').value || 'all'} ${transitions_controller.querySelector('.transition-duration').value || 0}s ${transitions_controller.querySelector('.transition-timing-function').value || 0} ${transitions_controller.querySelector('.transition-delay').value || 0}s`

//             if (tc_count > 1) {
//                 for (var i = 1; i < transitions_controller.querySelectorAll('[div_for=transitions]').length; i++) {
//                     transition += `,${transitions_controller.querySelectorAll('.transition-for')[i].value || 'all'} ${transitions_controller.querySelectorAll('.transition-duration')[i].value || 0}s ${transitions_controller.querySelectorAll('.transition-timing-function')[i].value || 0} ${transitions_controller.querySelectorAll('.transition-delay')[i].value || 0}s`
//                 }
//             }
//             // console.log(transition)
//             transitions_controller.setAttribute('prop_value', transition)
//                 // console.log(transitions_controller.getAttribute('prop_value'))
//         }
//     }
// }

function propertySelectorInput() {
    var propertySelectors = document.querySelectorAll('.property_selector');
    for (el of propertySelectors) {
        el.oninput = (e) => {
            var target = e.target;
            var property = e.target.value

            if (property == "fontSize") {
                target.nextElementSibling.remove()
                var width_input = document.createElement('div');
                // width_input.type = "number"
                width_input.classList.add('property_selector_value', 'border', 'two_grid')
                    // width_input.oninput = (e) => {
                    //     width_input.setAttribute('prop_value', e.target.value + "px")
                    // }
                target.parentNode.insertBefore(width_input, target.nextElementSibling)
                NewArrowBox(width_input, CreateStyleDiv.CreateTransformStyleDiv('', ''))
                    // target.nextElementSibling.remove()
                    // var fontsize_input = document.createElement('input');
                    // fontsize_input.type = "number"
                    // fontsize_input.classList.add('property_selector_value', 'border', 'two_grid', 'psv_font-size')
                    // fontsize_input.oninput = (e) => {
                    //     fontsize_input.setAttribute('prop_value', e.target.value + "px")
                    // }
                    // target.parentNode.insertBefore(fontsize_input, target.nextElementSibling)
            } else if (property == "backgroundColor") {
                target.nextElementSibling.remove()
                var backgroundColor_input = document.createElement('input');
                backgroundColor_input.type = "color"
                backgroundColor_input.classList.add('property_selector_value', 'psv_background-color', 'border', 'two_grid')
                backgroundColor_input.oninput = (e) => {
                    backgroundColor_input.setAttribute('prop_value', e.target.value)
                }
                target.parentNode.insertBefore(backgroundColor_input, target.nextElementSibling)
            } else if (property == "text-shadxxow") {
                target.nextElementSibling.remove()
                var borderRadius_input = document.createElement('div')
                borderRadius_input.classList.add("two_grid", "border", "property_selector_value", "psv_border-radius", "prop_value_modal_trigger");
                borderRadius_input.innerHTML = ` <i class="bi bi-fullscreen" style="position: absolute;left:30%;top:-2px;"></i> <i class="bi bi-box-arrow-down prop_value_modal_trigger_btn" style="position: absolute;right: 5%;"></i>
                <div id="" class="border-radius_modal prop_value_modal">
                    <div class="border_style_label"> <span class="form-check form-switch" style="display: block;z-index: 1;position: relative;right: -5px;">
                    <input class="form-check-input border_style_switcher" id="" type="checkbox" id="flexSwitchCheckDefault"></span>
                        <span class="border_prop one_grid tile">circle</span>
                        <!-- <span class="border_prop one_grid tile"></span> -->
                        <span class="border_prop one_grid tile">eliptical</span> </div>
                    <div class="diff_borders_div">
                        <span class="material-icons border_icon" style="transform:translate(6px, 4px) rotate(270deg)">rounded_corner</span>
                        <input type="number" class="border one_grid border_top_left_radius" placeholder="" name="" min="0" value="0" max="100" step="1" id="border-top-left-radius"> /
                        <input type="number" class="border one_grid border_top_left_radius_eliptic" placeholder="" name="" min="0" value="0" max="100" step="1" id="border-top-left-radius" disabled>
                        <span class="form-check form-switch" style="display: inline-flex;z-index: 1;position: relative;right: -5px;">
                    <input class="form-check-input border_radius_style_switcher" id="border_top_left_radius_switcher" type="checkbox" ></span>
                        <br>
                        <span class="material-icons border_icon" style="transform:translate(6px, 4px) rotate(0deg)">rounded_corner</span>
                        <input type="number" class="one_grid border_top_right_radius" placeholder="" name="" min="0" max="100" step="1"> /
                        <input type="number" class="one_grid border_top_right_radius_eliptic" placeholder="" name="" min="0" max="100" step="1" disabled>
                        <span class="form-check form-switch" style="display: inline-flex;z-index: 1;position: relative;right: -5px;">
                    <input class="form-check-input border_radius_style_switcher" id="border_top_right_radius_switcher" type="checkbox" ></span>
                        <br>
                        <span class="material-icons border_icon" style="transform:translate(6px, 4px) rotate(180deg)">rounded_corner</span>
                        <input type="number" class="one_grid border_bottom_left_radius" placeholder="" name="" min="0" max="100" step="1"> /
                        <input type="number" class="one_grid border_bottom_left_radius_eliptic" placeholder="" name="" min="0" max="100" step="1" disabled>
                        <span class="form-check form-switch" style="display: inline-flex;z-index: 1;position: relative;right: -5px;">
                    <input class="form-check-input border_radius_style_switcher" id="border_bottom_left_radius_switcher" type="checkbox"></span>
                        <br>
                        <span class="material-icons border_icon" style="transform:translate(6px, 4px) rotate(90deg)">rounded_corner</span>
                        <input type="number" class="one_grid border_bottom_right_radius" placeholder="" name="" min="0" max="100" step="1"> /
                        <input type="number" class="one_grid border_bottom_right_radius_eliptic" placeholder="" name="" min="0" max="100" step="1" disabled>
                        <span class="form-check form-switch" style="display: inline-flex;z-index: 1;position: relative;right: -5px;">
                    <input class="form-check-input border_radius_style_switcher" id="border_bottom_right_radius_switcher" type="checkbox"></span>
                    </div>
                    <div class="same_borders_div" style="display: none;">
                        <span class="material-icons border_icon">crop_free</span>
                        <input type="number" class="border one_grid border_radius" placeholder="" name="" min="0" max="100" step="1"> /
                        <input type="number" class="border one_grid border_radius_eliptic" placeholder="" name="" min="0" max="100" step="1" disabled>
                        <span class="form-check form-switch" style="display: inline-flex;z-index: 1;position: relative;right: -5px;">
                    <input class="form-check-input border_radius_style_switcher" id="border_radius_switcher" type="checkbox"></span>
                    </div>
                    </div>
                `
                    // `<div class="two_grid border property_selector_value psv_border-radius">Border Radius </div>`
                    // backgroundColor_input.type = "color"
                    // backgroundColor_input.classList.add('property_selector_value', 'psv_background-color', 'border', 'two_grid')
                    // backgroundColor_input.oninput = (e) => {
                    //     backgroundColor_input.setAttribute('prop_value', e.target.value)
                    // }
                target.parentNode.insertBefore(borderRadius_input, target.nextElementSibling)
            } else if (property == "opacity") {
                target.nextElementSibling.remove()
                var opacity_input = document.createElement('input');
                opacity_input.type = "number"
                opacity_input.min = "0"
                opacity_input.max = "0"
                opacity_input.classList.add('property_selector_value', 'border', 'two_grid', 'psv_opacity')
                opacity_input.oninput = (e) => {
                    opacity_input.setAttribute('prop_value', e.target.value)
                }
                target.parentNode.insertBefore(opacity_input, target.nextElementSibling)

            } else if (property == "display") {
                target.nextElementSibling.remove()
                var display_input = document.createElement('select');
                display_input.innerHTML = `<option value="none">hidden</option>
            <option value="block">show</option>`;
                display_input.classList.add('property_selector_value', 'border', 'two_grid', 'psv_display')
                display_input.oninput = (e) => {
                    display_input.setAttribute('prop_value', e.target.value)
                }
                target.parentNode.insertBefore(display_input, target.nextElementSibling)
            } else if (property == "height") {
                target.nextElementSibling.remove()
                var height_input = document.createElement('input');
                height_input.type = "number"
                height_input.classList.add('property_selector_value', 'border', 'two_grid', 'psv_height')
                height_input.oninput = (e) => {
                    height_input.setAttribute('prop_value', e.target.value + "px")
                }
                target.parentNode.insertBefore(height_input, target.nextElementSibling)
            } else if (property == "width") {
                target.nextElementSibling.remove()
                var width_input = document.createElement('input');
                width_input.type = "number"
                width_input.classList.add('property_selector_value', 'border', 'two_grid', 'psv_width')
                width_input.oninput = (e) => {
                    width_input.setAttribute('prop_value', e.target.value + "px")
                }
                target.parentNode.insertBefore(width_input, target.nextElementSibling)
            } else if (property == "border") {
                // target.nextElementSibling.remove()
                var border_propval = document.createElement('div');
                // width_input.type = "number"
                border_propval.classList.add('property_selector_value', 'border', 'two_grid')
                border_propval.innerHTML = `<i class="bi bi-border-inner"></i> Border`
                    // width_input.oninput = (e) => {+
                    //     width_input.setAttribute('prop_value', e.target.value + "px")
                    // }
                    // target.parentNode.insertBefore(width_input, target.nextElementSibling)
                target.parentNode.append(border_propval)
                target.remove()

                NewArrowBox({ fOr: border_propval, data: CreateStyleDiv.CreateBorderRadiusStyleDiv() })
            }
        }
    }
}

function propValueModalTrigger() {
    var prop_value_modal_trigger = document.querySelectorAll('.prop_value_modal_trigger_btn');
    for (el of prop_value_modal_trigger) {
        el.onclick = (e) => {
            var modal = e.target.nextElementSibling
            modal.style.display = "block";
            modal.style.top = e.target.parentNode.getBoundingClientRect().bottom + 10 + "px";
            modal.style.left = e.target.parentNode.getBoundingClientRect().right - 150 + "px";

        }
    }
}
var store_value;
var store_prop;

function propertySelectorPreview() {
    var property_selector_preview = document.querySelectorAll('.property_selector_preview');

    for (el of property_selector_preview) {
        el.onclick = (e) => {

            if (e.target.classList.contains('text-focus-in')) {
                e.target.classList.remove('text-focus-in')
                getactiveel().style[store_prop] = store_value
                    // console.log(store_prop)
                    // console.log(store_value)
            } else {
                for (el of property_selector_preview) { el.classList.remove('text-focus-in') }

                e.target.classList.add('text-focus-in')
                var prop = e.target.previousElementSibling.previousElementSibling.value
                var new_value = e.target.previousElementSibling.getAttribute('prop_value')
                store_value = getactiveel().style[prop]
                store_prop = prop
                getactiveel().style[prop] = new_value
            }
        }
    }
}
// InteractFunctionEditor_height_btn()
// select the target node
var target = document.querySelector('#functions_div');

// create an observer instance
var observer = new MutationObserver(function() {
    // mutations.forEach(function(mutation) {
    //     console.log(mutation.type);
    // InteractFunctionEditor_height_btn()
    // add_element_select_list()
    delete_myprnt()
        // effector_function()
        // functiontagshow()
        // effector_selector()
        // delete_effector_selector()
    // AddNewFunction()
        // InsertNew('.add_property_selector_container', "e.target.parentNode", property_selector_container, "e.target")
        // InsertNew('.add_transitions_controller', "e.target.parentNode", transitions_controller, "e.target")
        // propValueModalTrigger()
        // propertySelectorPreview()
        // selectTagOptionShow()
        // selectTag_options()
        // transitionValues()
        // propertySelectorInput()

    // console.log(document.querySelectorAll('.InteractFunctionEditor_height_btn'))
    // });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true, subtree: true }

// pass in the target node, as well as the observer options
observer.observe(target, config);

// later, you can stop observing
// observer.disconnect();



// var xncolorpicker = new XNColorPicker({
//     selector: "#colorpicker",
//     show: false,
//     alwaysShow: true,
//     canMove: false,
//     lang: 'en',
//     onError: function(e) {

//     },
//     onCancel: function(color) {
//         console.log("cancel", color)
//     },
//     onChange: function(color) {
//         console.log("change", color)
//     },
//     onConfirm: function(color) {
//         console.log("confirm", color)
//     }

// })


document.body.onload = () => {
    document.body.style.display = "block"
}



document.querySelector('#frfr').onclick = () => {
    document.querySelector('.modal1').style.display = "grid"
}




function add_me() {
    for (el of document.querySelectorAll('.add_me')) {
        el.addEventListener('click', function() {
            console.log('click')
            if (this.classList.contains('preview_gif')) {
                var gifsrc = this.style.backgroundImage.split(`url(`)[1].split(`)`)[0].replace(/['"]+/g, '')

                BoxContainer.CreateImageElement({ src: gifsrc })

            } else if (this.tagName == 'svg' && this.classList.contains('blob')) {
                var path = this.children[0].cloneNode(true)
                var json = { d: path.getAttribute('d'), fill: path.style.fill || path.getAttribute('fill'), stroke: path.style.stroke || path.getAttribute('stroke'), strokeWidth: path.style.strokeWidth || path.getAttribute('stroke-width') }
                BoxContainer.CreatePathElement(json)
            } else if (this.tagName == 'svg' && this.classList.contains('wave')) {
                var path = this.children[0].cloneNode(true)
                var x = parseInt(BoxContainer.div().getBoundingClientRect().width) / 1400

                var transformed = SVGPath(path.getAttribute('d')).scale(x, 1).toString();
                path.setAttribute('d', transformed)
                var json = { d: path.getAttribute('d'), fill: path.style.fill || path.getAttribute('fill'), stroke: path.style.stroke || path.getAttribute('stroke'), strokeWidth: path.style.strokeWidth || path.getAttribute('stroke-width') }
                BoxContainer.CreatePathElement(json)
            }
        })
    }
}
add_me()
    // !! ADD VIDEO>AUDIO
const UploadFileModal = document.querySelector('#UploadFileModal')
document.querySelector('.Upload_file_To_add_btn').addEventListener('click', function() {
    UploadFileModal.style.display = "grid";

})

for (el of document.querySelector('#UploadFileModal').querySelectorAll('[clickbtn]')) {
    el.addEventListener('click', function() {
        for (el of document.querySelector('#UploadFileModal').querySelectorAll('.right-content')) {
            el.style.display = "none";
            el.style.backgroundImage = "none";
        }
        for (el of document.querySelector('#UploadFileModal').querySelectorAll('[clickbtn]')) {

            el.style.backgroundImage = "none";
        }
        this.style.backgroundImage = 'url(https://media.giphy.com/media/j4qlZVm73SGBfoNTmH/giphy.gif)';
        document.querySelector('#UploadFileModal').querySelector(`#${this.getAttribute('clickbtn')}`).style.display = "grid"
    })
}

for (el of document.querySelectorAll('.fetch_input_url')) {
    el.addEventListener('click', function() {
        // console.log(this.innerText)
        // console.log(this.innerHTML)
        this.parentNode.querySelector('.preview_uploaded_file').innerHTML = ""
        if (this.innerText.includes('Image')) {
            this.parentNode.querySelector('.preview_uploaded_file').style.backgroundImage = `url(${this.parentNode.querySelector('.upload_url_input').value})`
            console.log('image')



        } else if (this.innerHTML.includes('Yt')) {
            var div = document.createElement('div');
            div.style.height = "100%"
            div.style.width = "100%"
            div.innerHTML = `<div id="" class="ytvideo" data-plyr-provider="youtube" data-plyr-embed-id=""></div> `
            div.querySelector('div').setAttribute('data-plyr-embed-id', this.parentNode.querySelector('.upload_url_input').value)
            this.parentNode.querySelector('.preview_uploaded_file').append(div);
            var player = new Plyr('.ytvideo');
        } else if (this.innerHTML.includes('Video')) {
            var div = document.createElement('div');
            div.style.height = "100%"
            div.style.width = "100%"
            div.innerHTML = `<video class="Interact_video" controls crossorigin playsinline poster="">
        <source src="" type="video/mp4" >
           </video> `
            div.querySelector('source').src = this.parentNode.querySelector('.upload_url_input').value;
            this.parentNode.querySelector('.preview_uploaded_file').append(div);
            var player = new Plyr('.Interact_video');
        } else if (this.innerHTML.includes('Audio')) {
            var div = document.createElement('div');
            div.style.height = "100%"
            div.style.width = "100%"
            div.innerHTML = `<audio class="Interact_audio" controls crossorigin playsinline poster="">
        <source src="" type="audio/mp3" >
           </audio> `
            div.querySelector('source').src = this.parentNode.querySelector('.upload_url_input').value;
            this.parentNode.querySelector('.preview_uploaded_file').append(div);
            var player = new Plyr('.Interact_audio');

        }
    })
}

document.querySelector('#Add_to_page_image').addEventListener('click', function() {
    if (this.parentNode.querySelector('.preview_uploaded_file').innerHTML == '') {

        if (this.innerText == "Change") {
            getactiveel().querySelector('img').src = this.parentNode.querySelector('.preview_uploaded_file').style.backgroundImage.split(`url(`)[1].split(`)`)[0].replace(/['"]+/g, '')
            // var element = document.querySelector(`#${UploadFileModal.getAttribute(Change_el_id)}`);
            // BoxContainer.Add()
        } else {
            var gifsrc = this.parentNode.querySelector('.preview_uploaded_file').style.backgroundImage.split(`url(`)[1].split(`)`)[0].replace(/['"]+/g, '')
            BoxContainer.CreateImageElement({ src: gifsrc,style:{} })
        }
    }
})

document.querySelector('#Add_to_page_video').addEventListener('click', function() {
    if (this.parentNode.querySelector('.preview_uploaded_file').innerHTML == '') {} else {
        if (this.parentNode.querySelector('.preview_uploaded_file').innerHTML == '') {} else {
            if (this.innerText == "Change") {
                InteracStyles.UpdateStyles({
                    element: getactiveel(),
                    prop: "src",
                    value: this.parentNode.querySelector('source').src,
                    layer: true,
                  });
            } else {
        var json = { src: this.parentNode.querySelector('source').src, freeze: true ,style:{}}
        BoxContainer.CreateVideoElement(json)
        }}
    }
})
document.querySelector('#Add_to_page_audio').addEventListener('click', function() {
    if (this.parentNode.querySelector('.preview_uploaded_file').innerHTML == '') {} else {
        if (this.innerText == "Change") {
            console.log("ss")
            InteracStyles.UpdateStyles({
                element: getactiveel(),
                prop: "src",
                value: this.parentNode.querySelector('source').src,
                layer: true,
              });
        } else {
        BoxContainer.CreateAudioElement({ src: this.parentNode.querySelector('source').src, freeze: true,style:{} })
    }
    }
})

document.querySelector('#Add_to_page_Youtubevideo').addEventListener('click', function() {
    if (this.parentNode.querySelector('.preview_uploaded_file').innerHTML == '') {} else {
        var url = this.parentNode.querySelector('.upload_url_input').value.split("be/")[1]
        if (this.innerText == "Change") {
            console.log("ss")
            InteracStyles.UpdateStyles({
                element: getactiveel(),
                prop: "src",
                value: url,
                layer: true,
              });
        } else {
        BoxContainer.CreateYtVideoElement({ src: url, freeze: true, })
    }}
})

var textdiv = document.createElement('div');
            textdiv.contentEditable = true;
            textdiv.id = "InnerText_activeel_div"
            textdiv.addEventListener('input', function () {
                if(getactiveel().getAttribute('primary-element-type') == "Text"){
                getactiveel().children[0].children[0].innerHTML = this.innerHTML
            }
                else if(getactiveel().getAttribute('primary-element-type') == "Textpath"){
                    getactiveel().children[0].innerHTML = this.innerText
                }
            })


NewArrowBox({for:document.querySelector('#innerText_activeel'),data: textdiv,
event: 'click'})


textdiv.addEventListener("paste", function(e) {
    // cancel paste
    e.preventDefault();
    // get text representation of clipboard
    var text = (e.originalEvent || e).clipboardData.getData('text/plain');
    // insert text manually
    document.execCommand("insertHTML", false, text);
});


NewArrowBox({
    for :document.querySelector('#edit_options_more'), 
    dataHtml:`
    <div class="arrowboxBtn" id="NewInteracBtn">New Interact</div>
    <div class="arrowboxBtn" id="SaveInteracBtn">Save</div>
    <div class="arrowboxBtn" class="edit_options" id="Interac_downloadasimg"><i class="bi bi-download"></i> Download</div>

    `
})

document.querySelector("#NewInteracBtn").onclick=()=>{
    //document.querySelector('[interactcontainer]').remove()
    NewBoxContainer({})
}
document.querySelector("#SaveInteracBtn").onclick=()=>{
    Save(BoxContainer.elem().outerHTML)
}

//?? DOWNLOAD JPEG,PNG
NewArrowBox({
        for: document.querySelector('#Interac_downloadasimg'),
        dataHtml: `<div id="downloadContentDiv">
    <div class="arrowboxBtn" id="download_as_png">Download as png</div>
    <div class="arrowboxBtn" id="download_as_jpeg"> Downlaod as jpeg</div>
    <div class="arrowboxBtn">Downlaod as interactive html</div>
    </div>`,
        functions: function() {
            document.querySelector('#download_as_png').addEventListener('click', function() {
                domtoimage.toBlob(BoxContainer.div())
                    .then(function(blob) {
                        window.saveAs(blob, 'Interac.png');
                    });
            })
            document.querySelector('#download_as_jpeg').addEventListener('click', function() {
                domtoimage.toJpeg(BoxContainer.div(), { quality: 1 })
                    .then(function(dataUrl) {
                        var link = document.createElement('a');
                        link.download = 'interac.jpeg';
                        link.href = dataUrl;
                        link.click();
                    });
            })
        }
    })
    //! DOWNLOAD JPEG,PNG


document.querySelector('#Box_Style-Background-color').addEventListener('input', function() {
    BoxContainer.elem().style.backgroundColor = this.value
})
document.querySelector('#Box_Style-Background-color_adviser').addEventListener('click', function(e) {
    if (e.target.id != "Box_Style-Background-color_adviser") {
        BoxContainer.elem().style.backgroundColor = e.target.style.backgroundColor;
        document.querySelector('#Box_Style-Background-color').value = tinycolor(e.target.style.backgroundColor).toHexString();
    }
})



//! BUTTONS
export function ShowUploadModal(to_show, json) {
    UploadFileModal.style.display = "grid";
    for (el of UploadFileModal.querySelectorAll('.right-content')) {
        el.style.display = "none";
    }
    for (el of UploadFileModal.querySelectorAll('[clickbtn]')) {
        el.style.backgroundImage = "none";
    }
    UploadFileModal.querySelector(`#${to_show}_Upload_modal`).querySelector('.set_uploaded_file').innerText = "Add to Page"

    UploadFileModal.querySelector(`[clickbtn=${to_show}_Upload_modal]`).style.backgroundImage = 'url(https://media.giphy.com/media/j4qlZVm73SGBfoNTmH/giphy.gif)';
    UploadFileModal.querySelector(`#${to_show}_Upload_modal`).style.display = "grid"
    if (json.element != undefined) {
        UploadFileModal.querySelector(`#${to_show}_Upload_modal`).querySelector('.set_uploaded_file').innerText = "Change"
        UploadFileModal.setAttribute('Change_el_id', json.element.id)
    }
}

// for(var el of document.querySelector('[show_upload_modal_for]')){
//     el.addEventListener('click',function(){
//         ShowUploadModal(this.getAttribute(show_upload_modal_for))
//     })
// }
var show_add_image_modal = document.querySelectorAll('.show_add_image_modal');
for (el of show_add_image_modal) {
    el.addEventListener('click', function() {
        // UploadFileModal.style.display = "grid";
        ShowUploadModal('Image')
    })
}
var show_add_video_modal = document.querySelectorAll('.show_add_video_modal');
for (el of show_add_video_modal) {
    el.addEventListener('click', function() {
        // UploadFileModal.style.display = "grid";
        ShowUploadModal('Video')
    })
}
var show_add_audio_modal = document.querySelectorAll('.show_add_audio_modal');
for (el of show_add_audio_modal) {
    el.addEventListener('click', function() {
        // UploadFileModal.style.display = "grid";
        ShowUploadModal('Audio')
    })
}
var show_add_youtubevideo_modal = document.querySelectorAll('.show_add_youtubevideo_modal');
for (el of show_add_youtubevideo_modal) {
    el.addEventListener('click', function() {
        // UploadFileModal.style.display = "grid";
        ShowUploadModal('YoutubeVideo')
    })
}

// var show_add_image_modal = document.querySelectorAll('.show_add_image_modal');
// for (el of show_add_image_modal) {
//     el.addEventListener('click', function() {
//         UploadFileModal.style.display = "grid";
//         UploadFileModal.style.display = "grid";
//     })
// }
const custom_aspect_ratio = document.querySelector('.custom_aspect_ratio');

const aspect_ratio_options = document.querySelectorAll('.aspect_ratio_option');
for (var el of aspect_ratio_options) {
    el.addEventListener('click', function() {
        if (this.style.background != "rgb(58 188 41)") {
            for (var el of aspect_ratio_options) {
                el.style.background = '#191e2b';
            }
            this.style.background = "rgb(58 188 41)"
            console.log(this.innerText.split(':')[0], this.innerText.split(':')[1])
            BoxContainer.SetAspectRatio(parseInt(this.innerText.split(':')[0]), parseInt(this.innerText.split(':')[1]))
        }
    })
}
custom_aspect_ratio.addEventListener('input', function(e) {
    // console.log('c')
    BoxContainer.SetAspectRatio(parseInt(this.querySelectorAll('input')[1].value), parseInt(this.querySelector('input').value))

})
custom_aspect_ratio.addEventListener('click', function(e) {
    // console.log('i')
    BoxContainer.SetAspectRatio(parseInt(this.querySelectorAll('input')[1].value), parseInt(this.querySelector('input').value))

})



const add_minimal_container = document.querySelector('.add_minimal_container');
add_minimal_container.addEventListener('click', function() {
    BoxContainer.CreateContainerElement('')
})

var player = new Plyr('#video_element_previewer', {});
console.log('d')
var player = new Plyr('#youtubevideo_element_previewer');
var player = new Plyr('#audio_element_previewer', {});


window.addEventListener("load", function(){
    console.log(document.querySelector('#preview_btn').getBoundingClientRect())
    //EndlessSizeHandler.NewSizeHandler({element:document.querySelector('#preview_btn')})
    //EndlessSizeHandler.NewSizeHandler({element:BoxContainer.elem()})
});