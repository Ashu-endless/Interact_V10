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



import { EndlessSizeHandler } from './InteracSizehandler.js';
import { heightInc, gettarget, getparent, bardivFunc, getactiveels } from './functionsfile.js';
import { Save,BoxContainer,NewBoxContainer, update_triggerer_selector, update_effector_selector } from './Interac_BoxContainer.js';


const activeel_Text = document.querySelector('#Interact_activeel_Text');
const activeel_Textpath = document.querySelector('#Interact_activeel_Textpath');
const activeel_Border_Radius = document.querySelector('#Interact_activeel_Border_Radius');
const activeel_Border = document.querySelector('#Interact_activeel_Border_Style');
const activeel_Transform = document.querySelector('#Interact_activeel_Transform');
const activeel_Background = document.querySelector('#Interact_activeel_Background');
const activeel_Text_Shadow = document.querySelector('#Interact_activeel_Text_Shadow');
const activeel_Drop_Shadow = document.querySelector('#Interact_activeel_Drop_Shadow');
const activeel_Brush = document.querySelector('#Interact_activeel_Brush');

//document.querySelector('#tags_box_settings-border_content').append(CreateStyleDiv.CreateBorderRadiusStyleDiv())
//document.querySelector('#tags_box_settings-border_content').append(CreateStyleDiv.CreateBorderStyleDiv())
heightInc()
bardivFunc()
    // ?

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
hide_myprnt()

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





    const selctor_div = document.querySelector('.koi')
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



// var all_element_names = [];
// var all_element_groups = [];
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

// const SelectorRect =  {
//     set x(x_){
//         selctor_div.style.left = parseFloat(x_) + 'px'
//     },
//     set y(y_){
//         selctor_div.style.top = parseFloat(y_) + 'px'
//     },
//     set height(x_){
//         selctor_div.style.height = parseFloat(x_) + 'px'
//     },
//     set width(x_){
//         selctor_div.style.width = parseFloat(x_) + 'px'
//     },
//     get y(){
//        return parseFloat(selctor_div.style.top )    
//     },
//     get x(){
//        return parseFloat(selctor_div.style.left )
//     },
//     get height(){
//        return parseFloat(selctor_div.style.height)
//     },
//     get width(){
//        return parseFloat(selctor_div.style.width) 
//     },
// }



// function B_mousemove(e,e_x,e_y){
//     //console.log(e.target)
//     var gotelement = gettarget(e,'primary-element-type');
//     if(gotelement != null && gotelement.classList.contains('active') == false){
//          gotelement.classList.add('active')
//          EndlessSizeHandler.SetHandler({element:gotelement})
//      }
//     if((e.y - e_y)>1){
//         selctor_div.style.height = `${e.y - e_y}px`
//     }else{
        
//         selctor_div.style.height = `${e_y - e.y}px`
//         selctor_div.style.top = `${e_y - parseFloat(selctor_div.style.height) }px`

//     }
//     if((e.x - e_x)>1){
//         selctor_div.style.width = `${e.x - e_x}px`
//     }else{
//         selctor_div.style.width = `${e_x - e.x}px`
//         selctor_div.style.left = `${e_x - parseFloat(selctor_div.style.width) }px`
//     }



// }

// export function BoxContainerClickFunc(e) {
//     BoxContainer.nullactive()
//     //DragMoveListener()
//     toolboxFuncs.hide()

//     if(e.target.getAttribute('InteractSvg') != null ){
//     selctor_div.style.display = "block"
//     var e_y = e.y
//     var e_x = e.x
    
//     SelectorRect.width = 0
//     SelectorRect.height = 0
//     SelectorRect.y = e.y
//     SelectorRect.x = e.x
    
    
//  //BoxContainer.elem().addEventListener('mousemove',e => B_mousemove(e,e_x,e_y))
//  BoxContainer.elem().onmousemove=(e)=>{
//      //B_mousemove(e,e_x,e_y)
//     var gotelement = gettarget(e,'primary-element-type');
//     if(gotelement != null && gotelement.classList.contains('active') == false){
//          gotelement.classList.add('active')
//          EndlessSizeHandler.SetHandler({element:gotelement})
//      }
//     if((e.y - e_y)>1){
//         SelectorRect.height = e.y - e_y
//     }else{
        
//         SelectorRect.height = e_y - e.y
//         SelectorRect.y = e_y - SelectorRect.height

//     }
//     if((e.x - e_x)>1){
//         SelectorRect.width = e.x - e_x
//     }else{
//         SelectorRect.width = e_x - e.x
//         SelectorRect.x = e_x - SelectorRect.width
//     }
//  }

//  window.onmouseup=(e)=>{
//      selctor_div.style.display = "none"
//     BoxContainer.elem().onmousemove=(e)=>{
//         ""
//     }
     
//  }}else{
//      var gotelement = gettarget(e,'primary-element-type');
//      if(gotelement != null ){
//          gotelement.classList.add('active')
//          EndlessSizeHandler.SetHandler({element:gotelement})
//         //  show_styling_properties(getactiveel() || "")
//          toolboxFuncs.position()
//      }
//  }
// }



//export function BoxContainerClickFunc(e) {
// export function BoxContainegrClickFunc(e) {
//         console.log('clicked on crtr')
//             // !!! FUCNTION RELATED
//         update_all_elements_name_list()
//         update_triggers_list()
//             // console.log(getAllBoxElementsInfo())
//         toolboxFuncs.hide()
//         try {
//             activeel_size_handler.position(getactiveel())

//         } catch (err) {
//             activeelFunction.nullactive()
//         }

//         for (el of document.querySelectorAll('.triggerer_selector')) {
//             update_triggerer_selector(el)
//         }
//         for (el of document.querySelectorAll('.effector_selector')) {
//             update_effector_selector(el)
//         }
//         for (el of BoxContainer.elem().querySelectorAll('P')) {
//             el.contentEditable = false
//         }

        



//         // for (el of groups_activeel.querySelectorAll('.group_activeel')) {
//         //     el.remove()
//         // }

//         //  ? removing active class from everywher
//         activeelFunction.nullactive()
//         // for (el of document.querySelectorAll('.pathfortext')) {
//         //     el.style.display = "none"
//         // }
//         // ? adding active cl
//         //  !!!!!!!!!!!!!!!!!!!!!!!!!!!
//         var targetTag = e.target.tagName;
//         var targetType = e.target.getAttribute('primary-element-type')
//         var targetId = e.target.id
//         var target = e.target
//         let IsSecondaryElement = e.target.getAttribute('secondary-element-type') != null
//         let IsContainerElemParent = getparent(target, 'primary-element-type', 'Container') != null
//         var targetLock = e.target.getAttribute('locked') || false
//         var ContainerElement;
//         var ContainerElementDraggable;
//         if (IsContainerElemParent) {
//             ContainerElement = getparent(target, 'primary-element-type', 'Container')
//             ContainerElementDraggable = ContainerElement.classList.contains('draggable')
//         }
//         // console.log(IsContainerElemParent)
//         // console.log(IsSecondaryElement)
//         // console.log(IsSecondaryElement && IsContainerElemParent && targetLock == false)
//         // console.log(targetLock)
//         // console.log(ContainerElement)

//         if (targetId == 'interac_crtr' || targetId == "interac_Svg" || targetId == 'interac_Container' || target.getAttribute("interactsvg") !=  null ) {
//             activeel_size_handler.hide()
//         }
//         // ??
//         else if (target.classList.contains('freeze_div') && IsContainerElemParent == false && targetLock == false) {
//             getparent(target, 'primary-element-type').classList.add('active')
            
//             // target.parentNode.classList.add('active')
//         } else if (`${target.classList}`.includes('plyr') && IsContainerElemParent == false && targetLock == false) {
//             gettarget(e, 'draggable').classList.add('active');
//         } else if (IsSecondaryElement && IsContainerElemParent == false && targetLock == false) {
//             getparent(target, 'primary-element-type').classList.add('active')
            
//             // target.parentNode.classList.add('active')
//         } else if (targetType == 'Path' && IsContainerElemParent == false && targetLock == false) {
//             target.classList.add('active')
//         }
//         // ??
//         // else if (IsSecondaryElement && IsContainerElemParent && targetLock == false) {
//         //     ContainerElement.classList.add('active')
//         // }

//         // ??
//         else if (target.classList.contains('freeze_div') && IsContainerElemParent && targetLock == false) {
//             if (ContainerElementDraggable) {
//                 ContainerElement.classList.add('active')
//             } else {
//                 getparent(target, 'primary-element-type').classList.add('active')
//                 // target.parentNode.classList.add('active')
//             }
//         } else if (`${target.classList}`.includes('plyr') && IsContainerElemParent && targetLock == false) {
//             if (ContainerElementDraggable) {
//                 ContainerElement.classList.add('active')
//             } else {
//                 gettarget(e, 'draggable').classList.add('active');
//             }
//         } else if (IsSecondaryElement && IsContainerElemParent && targetLock == false) {
//             if (ContainerElementDraggable) {
//                 ContainerElement.classList.add('active')
//             } else {
//                 if (target.parentNode.getAttribute('secondary-element-type') == 'Container-div') {
//                     activeel_size_handler.hide()
//                 } else {
//                 getparent(target, 'primary-element-type').classList.add('active')

//                     // target.parentNode.classList.add('active')
//                 }
//             }
//         } else if (targetType == 'Path' && IsContainerElemParent && targetLock == false) {
//             if (ContainerElementDraggable) {
//                 ContainerElement.classList.add('active')
//             } else {
//                 target.classList.add('active')
//             }
//         }
//         // ??
//         else if (IsSecondaryElement && IsContainerElemParent && targetLock == false) {
//             ContainerElement.classList.add('active')
//         }


// if(e.target.getAttribute("secondary-element-type") == "text"){
//     console.log(e.target)
//     e.target.contentEditable = true
// }

// try{
// if(getactiveel().getAttribute("locked") == "true"){
//     activeelFunction.nullactive()
//     activeel_size_handler.hide()
// }}catch(Err){

// }
//         // if (IsContainerElemParent) {
//         //     ContainerElement = getparent(target, 'primary-element-type', 'Container')
//         // }
//         // console.log(IsSecondaryElement)
//         // var targetLock = e.target.getAttribute('locked')
//         // var target = e.target;


//         // // if clicks on empty space
//         // if (targetId == 'interac_crtr' || targetId == "interac_Svg" || targetId == 'interac_Container' || targetLock != null) {
//         //     activeel_size_handler.hide()
//         //         // if clicks on  container's empty space
//         // } else if (IsSecondaryElement) {
//         //     getparent(target, 'primary-element-type').classList.add('active')
//         //         // target.parentNode.classList.add('active')
//         //         // if (ContainerElement.classList.contains('draggable')) {
//         //         // ContainerElement.classList.add('active')
//         //         // }
//         //         //  else {
//         //         //     activeel_size_handler.hide()
//         //         //         // do nothing
//         //         // }
//         // }
//         // // if clicks on container-element-children
//         // else if (IsContainerElemParent && (getparent(target, 'primary-element-type', 'Container').classList.contains('draggable') == false) && IsSecondaryElement == false) {
//         //     console.log(IsContainerElemParent && (getparent(target, 'primary-element-type', 'Container').classList.contains('draggable') == false) && IsSecondaryElement == false)
//         //     target.classList.add('active')
//         // } else if (IsContainerElemParent) {
//         //     console.log(IsContainerElemParent && (getparent(target, 'primary-element-type', 'Container').classList.contains('draggable') == false) && IsSecondaryElement == false)

//         //     getparent(target, 'primary-element-type', 'Container').classList.add('active')
//         //         // if clicks on primary-element-type
//         // } else {
//         //     console.log('acriving on basis of primary type')
//         //     if (targetType == 'Text') {
//         //         target.classList.add('active')

//         //     } else if (targetType == 'Container') {
//         //         target.classList.add('active')

//         //     } else if (targetType == 'Image') {
//         //         target.classList.add('active')
//         //     } else if (targetType == 'Path') {
//         //         target.classList.add('active')
//         //     } else if (targetTag == 'textPath') {
//         //         target.parentNode.classList.add('active')
//         //         document.querySelector(`#${target.getAttribute('textpath')}`).style.display = "block";
//         //     } else if (`${target.classList}`.includes('plyr')) {
//         //         gettarget(e, 'draggable').classList.add('active');
//         //     } else {
//         //         activeel_size_handler.hide()
//         //     }
//         // }
//         // if (targetTag == 'P') {
//         //     target.classList.add('active')
//         // } else if (targetTag == 'IMG') {
//         //     target.classList.add('active')

//         // } else if (targetTag == 'svg') {
//         //     activeel_size_handler.hide()


//         // } else if (targetTag == 'path' && target.parentNode.tagName == 'g') {
//         //     target.parentNode.classList.add('active')
//         // } else if (targetTag == 'path') {
//         //     target.classList.add('active')

//         // } else if (`${target.classList}`.includes('plyr')) {
//         //     gettarget(e, 'draggable').classList.add('active');
//         // } else if (targetTag == "DIV" && target.getAttribute('element-type') == "text-input") {
//         //     target.parentNode.classList.add('active')

//         // } else if (targetTag == "DIV") {
//         //     target.classList.add('active')
//         // } else if (targetTag == "polyline") {
//         //     target.parentNode.classList.add('active')
//         // }


//         // if (targetTag != 'P' && targetTag != 'textPath' && targetTag != 'text') {
//         //     // for (el of BoxContainer.div().querySelectorAll('P')) {
//         //     //     el.contentEditable = false;
//         //     // }
//         //     // console.log(targetTag)

//         //     BoxContainer.div().contentEditable = false
//         // }

//         // toolboxFuncs.select_container_btn.style.display = "none"
//         // toolboxFuncs.container_edit_btn.style.display = "none"
//         // toolboxFuncs.freeze_activeel.style.display = "none"
//         // toolboxFuncs.z_index_activeel.value = getactiveel().getAttribute('element_stake')
//         // InteractAnimation()
//         if (check_activeel()) {
//             // var activeel_type = getactiveel().getAttribute('primary-element-type')
//             // if(activeel_type == "Text"){

            
//             // if (getactiveel().tagName == 'text') {
//             //     BoxContainer.svg().querySelector(`#${getactiveel().children[0].getAttribute('textpath')}`).style.display = "block"
//             // }
//             // console.log('true')
//             // BoxContainer.div().contentEditable = true
//         // }
//             // console.log(BoxContainer.div().contentEditable)
//         } else {
//             // console.log('true')
//             // BoxContainer.div().contentEditable = false
//         }

//         DragMoveListener()
//         if (check_activeel()) {
//             //activeel_size_handler.position(getactiveel())

//                 // LayersDivFuncs.UpdateLayersDiv()sss

//             UpdateOriginalStyleDivs(getactiveel())
//         show_styling_properties(getactiveel())

//                 //    ??COntainer Edit ?
//                 // if (getactiveel().getAttribute('primary-element-type') == 'Container' && getactiveel().querySelector('[primary-element-type]') != null) {
//                 //     toolboxFuncs.container_edit_btn.style.display = "block"

//             // }
//             // if (getparent(getactiveel(), 'primary-element-type', 'Container') != null) {
//             //     toolboxFuncs.select_container_btn.style.display = "block"
//             // }
//             // if (activeel_type == 'Audio' || activeel_type == 'Video' || activeel_type == 'YoutubeVideo') {
//             //     toolboxFuncs.freeze_activeel.style.display = "block"
//             // }
//         }
//         // !IMP
//         // for (el of BoxContainer.div().querySelectorAll('[primary-element-type=Container]')) {
//         //     for (elem of el.children) {
//         //         el.classList.remove('draggable', 'active')
//         //     }
//         // }



//         // else {
//         //     toolboxFuncs.container_edit_btn.style.display = "none"
//         //     toolboxFuncs.select_container_btn.style.display = "block"
//         // }




//         // ? setting_element name
//         if (check_activeel()) {
//             // toolboxFuncs.toolbox_moreFuncs.CreateToolboxMoreDiv(getactiveel())
//             preview_selected_element()

//         }


//         show_styling_properties(getactiveel() || "")


//         //  ??  ADDING TOOLBOX
//         if (check_activeel()) {
//             if (getactiveel().classList.contains("appendible_element")) {
//                 append_child_info.style.display = "flex"
//                 toolboxFuncs.hide()
//             } else {
//                 var appendible_element = document.querySelector('.appendible_element');

//                 if (appendible_element != null) {
//                     appendible_element.removeEventListener('mousedown', DragAboveandDrop)

//                     appendible_element.classList.remove("appendible_element")
//                 }
//                 append_child_info.style.display = "none"
//                 toolboxFuncs.position()
//             }
//         }




        
//     }
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
    //console.l
        for (var modals of options_modal) {
            modals.style.height = '0px'
            setTimeout(function() {
                for (var modals of options_modal) {
                    modals.style.display = "none"
                }
            }, 500);
            //el.style.display = "none"
        }
        for (el of document.querySelectorAll('.options_head')) {
            //el.style.borderBottom = "4px double #252935"
            el.style.color = "white"
        }
        element_opt_closer.style.height = "0px"
        BoxContainer.UpdateInContainerScaleFactor({maw:90})
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
   // console.log(element_opt_closer.style.height)
    element_opt_closer.style.transition = `all 0s linear`
    element_opt_closer.style.height = '0px'
    element_opt_closer.style.display = 'none'
    var options_modal = document.querySelectorAll('.options_modal');
    for (el of options_modal) {
        el.style.height = "0px"
        el.style.display = "none"
        
    }
    //setTimeout(function(){  element_opt_closer.style.height = (window.innerHeight - document.querySelector('#options_div').getBoundingClientRect().height) + "px" }, 3000);
   
    console.log(element_opt_closer.style.height)
     for (el of document.querySelectorAll('.options_head')) {
        // el.style.borderBottom = "4px double #252935"
        el.style.color = "white"
        el.style.border = 'none'
     }
    element_opt_closer.style.transition = `all 0.5s linear`
    element_opt_closer.style.display = "block"
    document.querySelector(`#divbar_${target.id}`).style.display = "block";
    console.log((window.innerHeight - document.querySelector('#options_div').getBoundingClientRect().height) + "px")
    document.querySelector(`#divbar_${target.id}`).style.height = (window.innerHeight - document.querySelector('#options_div').getBoundingClientRect().height) +  4 + "px"
    element_opt_closer.style.height = (window.innerHeight - document.querySelector('#options_div').getBoundingClientRect().height) +  4 + "px"
    //target.style.borderBottom = "4px blueviolet solid";
    target.style.color = 'blueviolet';
    target.style.border = '2px #3f1580 solid'
    BoxContainer.UpdateInContainerScaleFactor({maw:63})
    // if (window.innerWidth > 400) {
    //     element_opt_closer.style.display = "block"
    // } else {
    //     element_opt_closer_cross.style.display = "block"
    // }
}












var add_sibling = document.querySelectorAll('.add_sibling');
for (el of add_sibling) {
    el.addEventListener('click', function() {
        BoxContainer.Add(this.previousElementSibling)
    })

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














// !!!!============================FUNCTION CONTROLS============================!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


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



















document.body.onload = () => {
    document.body.style.display = "block"
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

// var textdiv = document.createElement('div');
//             textdiv.contentEditable = true;
//             textdiv.id = "InnerText_activeel_div"
//             textdiv.addEventListener('input', function () {
//                 if(getactiveel().getAttribute('primary-element-type') == "Text"){
//                 getactiveel().children[0].children[0].innerHTML = this.innerHTML
//             }
//                 else if(getactiveel().getAttribute('primary-element-type') == "Textpath"){
//                     getactiveel().children[0].innerHTML = this.innerText
//                 }
//             })


// NewArrowBox({for:document.querySelector('#innerText_activeel'),data: textdiv,
// event: 'click'})


// textdiv.addEventListener("paste", function(e) {
//     // cancel paste
//     e.preventDefault();
//     // get text representation of clipboard
//     var text = (e.originalEvent || e).clipboardData.getData('text/plain');
//     // insert text manually
//     document.execCommand("insertHTML", false, text);
// });


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
        BoxContainer.background = e.target.style.backgroundColor;
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
            var json = {height:this.getAttribute('h'),width:this.getAttribute('w'),aspect_ratio : this.getAttribute('ar')} 
            BoxContainer.SetAspectRatio(json)
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




// NewArrowBox({
//     for:document.querySelector('#text'),showarrow:false,dataHtml:"Text",event:'mouseover',
// })


//Setscale(ah,aw,transform_origin)


var style_div_main_props = document.querySelectorAll('.style_div_main_props');
for(var el of style_div_main_props){
    el.addEventListener('click',function(){
        for(var elem of style_div_main_props){
            elem.style.border = "none"
        }
        for(var elem of document.querySelectorAll('.style_div_props_cont')){
            elem.style.transition = 'none'
            elem.style.display = "none"
            elem.style.width = "0px"
            
        }
        document.querySelector(`#Style_div-${this.id}`).style.display = "block"
        document.querySelector(`#Style_div-${this.id}`).style.height = ((this.parentNode.parentNode.getBoundingClientRect().height - document.querySelector('#styles_div_el_Select').getBoundingClientRect().height) - this.parentNode.getBoundingClientRect().height) + 'px'  
        document.querySelector(`#Style_div-${this.id}`).style.transition = '1s linear width'
        document.querySelector(`#Style_div-${this.id}`).style.width = '100%'
        
        this.style.border = "5px #3f1580 solid"
    })
}

document.querySelector('#InteracPageZoomSettings').querySelector('input[type=range]').addEventListener('input',function(){
    var val = this.value;
    UpdateRangeInpStyle(this,val)
    BoxContainer.elem().style.transform = `scale(${val/100})`
    this.parentNode.querySelector(`input[type=number]`).value = val
})
document.querySelector('#InteracPageLeftSettings').querySelector('input[type=range]').addEventListener('input',function(){
    var val = this.value;
    UpdateRangeInpStyle(this,val)
    BoxContainer.elem().style.left= `${val}%`
    this.parentNode.querySelector(`input[type=number]`).value = val
})
document.querySelector('#InteracPageTopSettings').querySelector('input[type=range]').addEventListener('input',function(){
    var val = this.value;
    UpdateRangeInpStyle(this,val)
    console.log(val)
    BoxContainer.elem().style.top = `${val}%`
    this.parentNode.querySelector(`input[type=number]`).value = val
})


document.querySelector('#InteracPageZoomSettings').querySelector('input[type=number]').addEventListener('input',function(){
    var val = this.value;
    this.parentNode.querySelector(`input[type=range]`).value = val

    UpdateRangeInpStyle(this.parentNode.querySelector(`input[type=range]`),this.parentNode.querySelector(`input[type=range]`).value)
    BoxContainer.elem().style.transform = `scale(${val/100})`
   // this.parentNode.querySelector(`input[type=number]`).value = val
})
document.querySelector('#InteracPageLeftSettings').querySelector('input[type=number]').addEventListener('input',function(){
    var val = this.value;
    this.parentNode.querySelector(`input[type=range]`).value = val

    UpdateRangeInpStyle(this.parentNode.querySelector(`input[type=range]`),this.parentNode.querySelector(`input[type=range]`).value)
    BoxContainer.elem().style.left= `${val}%`
    //this.parentNode.querySelector(`input[type=number]`).value = val
})
document.querySelector('#InteracPageTopSettings').querySelector('input[type=number]').addEventListener('input',function(){
    var val = this.value;
    this.parentNode.querySelector(`input[type=range]`).value = val
    UpdateRangeInpStyle(this.parentNode.querySelector(`input[type=range]`),this.parentNode.querySelector(`input[type=range]`).value)
    BoxContainer.elem().style.top = `${val}%`
   
})


document.querySelector('#InteractPagePosition').addEventListener('input',function(){
    for(var el of getactiveels() ){
    EndlessSizeHandler.SetHandler({element:el})}

})

document.querySelector('#InteractPagePositionBtn').addEventListener('click',function(){
    if(document.querySelector('#InteractPagePosition').style.display == 'none'){
    document.querySelector('#InteractPagePosition').style.display = 'block'}
    else{
        document.querySelector('#InteractPagePosition').style.display = 'none'
    }
})