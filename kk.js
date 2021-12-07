export function BoxContainegrClickFunc(e) {
    console.log('clicked on crtr')
    // !!! FUCNTION RELATED
    update_all_elements_name_list()
    update_triggers_list()
    

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

    if (targetId == 'interac_crtr' || targetId == "interac_Svg" || targetId == 'interac_Container' || target.getAttribute("interactsvg") != null) {
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


    if (e.target.getAttribute("secondary-element-type") == "text") {
        console.log(e.target)
        e.target.contentEditable = true
    }

    try {
        if (getactiveel().getAttribute("locked") == "true") {
            activeelFunction.nullactive()
            activeel_size_handler.hide()
        }
    } catch (Err) {

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
        activeel_size_handler.position(getactiveel())

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




}
}