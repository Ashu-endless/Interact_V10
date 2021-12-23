var el;
var elem;
import { transformFunc, show_styling_properties,InteracStyles } from './Interact_style.js'
import { getactiveel, ShowUploadModal } from './index.js'
import { DragAndDropListener, activeel_size_handler } from './size_handler.js';
import { BoxContainer, layerDiv, } from './Interac_BoxContainer.js';
import { InteractMessage } from "./InteracTerminal.js";
import { EndlessSizeHandler } from './InteracSizehandler.js';
// import { boxsvg } from '.';
// import { box } from '.';
const layers_div = document.querySelector('#layers_div')
const element_ContainerLayer = document.createElement('div');
element_ContainerLayer.classList.add('layer_containers');
element_ContainerLayer.innerHTML = `<svg preserveAspectRatio="none" class="svgForLayers" viewBox="0 0 0 0" ></svg>
<div class="layers_options_div">
    <div class="layers_options">Container1</div>
    <div class="layers_options"><i class="bi bi-eye-slash "></i></div>
    <div class="layers_options"><i class="bi bi-file-lock2"></i></div>
    <div><i class="bi bi-arrow-down-square-fill"></i></div>
</div>`
export const LayersDivFuncs = {
    UpdateLayersDiv: function() {
        layers_div.innerHTML = "";
        // console.log(document.querySelector('#interac_Svg').children)
        var data = []
        for (el of document.querySelector('#interac_Svg').children) {
            if (el.tagName == 'g' || el.tagName == 'foreignObject') {
                data.push(el)
            }
        }
        var top = 2
        for (el of data) {
            var cln = el.cloneNode(true)
            cln.classList.remove('active', 'draggable')
            transformFunc.defaultTransform(cln)
            cln.style.position = 'relative'
            if (cln.children[0] != undefined) {
                cln.children[0].style.position = 'relative'
            }
            var cln2 = element_ContainerLayer.cloneNode(true)

            if (el.tagName == 'polyline') {
                var svgForPB = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svgForPB.setAttributeNS(null, 'height', document.querySelector('#interac_Svg').getBoundingClientRect().height);
                svgForPB.setAttributeNS(null, 'width', document.querySelector('#interac_Svg').getBoundingClientRect().width);
                // svgForPB.height = document.querySelector('#interac_Svg').getBoundingClientRect().height
                // svgForPB.width = document.querySelector('#interac_Svg').getBoundingClientRect().width
                svgForPB.append(cln);
                cln2.querySelector('svg').append(svgForPB)
                cln2.querySelector('svg').setAttributeNS(null, 'viewBox', `0 0 ${document.querySelector('#interac_Svg').getBoundingClientRect().width} ${document.querySelector('#interac_Svg').getBoundingClientRect().height}`)

            } else {
                cln2.querySelector('svg').append(cln)
                cln2.querySelector('svg').setAttributeNS(null, 'viewBox', `0 0 ${el.getBoundingClientRect().width} ${el.getBoundingClientRect().height}`)
            }
            layers_div.append(cln2)
            cln2.style.top = top + '%'
            top = top + 22

        }
    }
}
 
export function getAllBoxElementsInfo() {
    var element_names = [];
    var element_groups = [];
    var element_ids = [];
    console.log(BoxContainer.elem())
    console.log(BoxContainer.elem().querySelectorAll('[element_name]'))
    for (el of BoxContainer.elem().querySelectorAll('[element_name]')) {
        element_ids.push(el.id)
        if (el.getAttribute('element_name') != "") {
            element_names.push(el.getAttribute('element_name'))
        }
        if (el.getAttribute('element_groups') != "" && el.getAttribute('element_groups') != null) {
            for (var groups of el.getAttribute('element_groups').split(',')) {
                element_groups.push(groups)
            }
            element_groups = [...new Set(element_groups)]
        }

    }
    return {
        element_names: element_names,
        element_ids: element_ids,
        element_groups: element_groups,
    }
}




export function getUniqueid(word) {
    return word + Math.random().toString(36).substr(2, 9)
}
export const digits_only = string => [...string].every(c => '0123456789'.includes(c));
export function getparent(element, clas, attr) {
    for (var parent of $(element).parents()) {
        if (attr != undefined) {
            if (parent.getAttribute(clas) == attr) { return parent }

        } else if (parent.classList.contains(clas) || parent.id == clas || (parent.getAttribute(clas) != null && parent.getAttribute(clas) != "true" && parent.getAttribute(clas) != "false")) {
            return parent


        }
    }
    return null
}
// !
export function gettarget(e, clas) {
    if (e.target.classList.contains(clas) || e.target.id == clas || (e.target.getAttribute(clas) != null && e.target.getAttribute(clas) != "true" && e.target.getAttribute(clas) != "false")) {
        return e.target
    } else {
        return getparent(e.target, clas)
    }
}
// !
// ?
export function ModifyRangeInput(json) {
    var div = json.parentEl
    el = div.querySelector('input[type=range]')
    el.min = el.min || json.min || '0'
    el.max = el.max || json.max || '100'
    el.value = el.value || json.val || "0"
    var value = (el.value - el.min) / (el.max - el.min) * 100
    el.style.background = 'linear-gradient(to right, #191e2b 0%, rgb(15 34 60)' + value + '%, #fff ' + value + '%, white 100%)'
    el.addEventListener('input', function(e) {
        var value = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100
        e.target.style.background = 'linear-gradient(to right, #191e2b 0%, rgb(15 34 60)' + value + '%, #fff ' + value + '%, white 100%)'

        // div.querySelector('.range_value').innerHTML = e.target.value
        div.querySelector('.range_value').value = e.target.value
    })


}
// ? for height increasing divs
export function heightInc() {
    for (var el of document.querySelectorAll('.heightinc_title')) {
        el.addEventListener('click', function(e) {
            var element = gettarget(e, 'heightinc')
            if (element.style.height != '30px') {
                element.style.height = '30px'
            } else {
                element.style.height = 'fit-content'
            }
        })
    }
}


export function getactiveels(){
    return document.querySelectorAll('.active')
}

//? Attribute json
export function getJsonAttr(el, attr, prop) {
    if (el.getAttribute(attr) == null || el.getAttribute(attr) == "") {
        return null
    } else {
        var json = JSON.parse(el.getAttribute(attr))
            // console.log(json['scrollHeight'])
            // return 

    }
    return json

}

export function setJsonAttr(el, attr, prop, val) {
    if (el.getAttribute(attr) == null || el.getAttribute(attr) == "") {
        var json = {}
        json[prop] = val
        el.setAttribute(attr, JSON.stringify(json))
    } else {
        var json = JSON.parse(el.getAttribute(attr))
        json[prop] = val

        el.setAttribute(attr, JSON.stringify(json))
    }
}
// !
// ?
export function snakeToCamel(str) {
    return (str.slice(0, 1).toLowerCase() + str.slice(1))
        .replace(/([-_ ]){1,}/g, ' ')
        .split(/[-_ ]/)
        .reduce((cur, acc) => {
            return cur + acc[0].toUpperCase() + acc.substring(1);
        });
}


export function CamelToHypehn(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
// 
// ? Bar holder func
export function bardivFunc() {
    console.log('hua')
    for (el of document.querySelectorAll('.bar_holder')) {
        el.onclick = (e) => {
            console.log('lio')
            for (elem of e.target.parentNode.parentNode.querySelectorAll('[bar_content_for]')) {
                elem.style.display = "none"
            }
            e.target.parentNode.parentNode.querySelector(`[bar_content_for=${e.target.id}]`).style.display = 'block'
        }
    }
}

export function preview_selected_element() {
    // document.querySelector('#preview_selected_element').innerHTML = ""
    // var cln = getactiveel().cloneNode(true);
    // transformFunc.defaultTransform(cln)
    // cln.style.position = 'relative'
    // if (cln.children[0] != undefined) {
    //     cln.children[0].style.position = 'relative'
    // }
    // document.querySelector('#preview_selected_element').setAttributeNS(null, 'viewBox', `0 0 ${getactiveel().getBoundingClientRect().width} ${getactiveel().getBoundingClientRect().height}`)
    // document.querySelector('#preview_selected_element').append(cln);

}

export const activeelFunction = {
    delete: function() {
        InteractMessage(getactiveel().getAttribute("element_name") + "  deleted","red")
        getactiveel().remove()
        toolbox.style.display = "none";
        activeel_size_handler.hide()



    },
    copy: function() {
        var cln = getactiveel().cloneNode(true);
        var el_type = cln.getAttribute('primary-element-type')
        var el_name = cln.getAttribute('element_name').split('clone')[0]
        var clned_name;
        for (let i = 0; i < 15; i++) {
            if(BoxContainer.elem().querySelector(`[element_name=${el_name}clone${i}]`) == null){
                clned_name = `${el_name}clone${i}`
                break
            }
          }
        var gjson = { element_name: clned_name,transform:{ "position-y": cln.getAttribute('y'), "position-x": cln.getAttribute('x'),height:cln.style.height,width:cln.style.width,"rotate":InteracStyles.getValue({ element: cln, prop: "rotate" })} }
        BoxContainer.Add(cln, gjson)
    },
    nullactive: function() {
        var any_active = document.querySelectorAll('.active');
        for (el of any_active) {
            el.classList.remove('active');
            EndlessSizeHandler.HideHandler({element:el})
        }
    },
    makeactive: function(element) {
        activeelFunction.nullactive()
        element.classList.add('active');
        toolboxFuncs.position()
        activeel_size_handler.position(getactiveel())
    },
    makeunmovable: function(el) {
        el.classList.remove('draggable');
        el.style.cursor = "auto"
        el.onmousedown = () => {

        }
    },
    updateStyling: function(prop, value) {

    }

}


const toolbox = document.querySelector('#toolbox');
export const toolboxFuncs = {
    position: function() {
        toolbox.style.left = getactiveel().getBoundingClientRect().x + 'px';
        toolbox.style.top = getactiveel().getBoundingClientRect().y - 100 + "px";
        toolbox.style.display = "flex";
        toolboxFuncs.select_container_btn.style.display = "none"
        toolboxFuncs.container_edit_btn.style.display = "none"
        toolboxFuncs.freeze_activeel.style.display = "none"
        toolboxFuncs.innerText_activeel.style.display = "none"
        toolboxFuncs.toolbox_moreFuncs.audio_settings_activeel.style.display = "none"
        toolboxFuncs.toolbox_moreFuncs.video_settings_activeel.style.display = "none"
        toolboxFuncs.toolbox_moreFuncs.ytvideo_settings_activeel.style.display = "none"
        toolboxFuncs.z_index_activeel.value = getactiveel().getAttribute('element_stake')
        var activeel_type = getactiveel().getAttribute('primary-element-type')

        //    ??COntainer Edit ?
        if (getactiveel().getAttribute('primary-element-type') == 'Container' && getactiveel().querySelector('[primary-element-type]') != null) {
            toolboxFuncs.container_edit_btn.style.display = "block"

        }
        if (getparent(getactiveel(), 'primary-element-type', 'Container') != null) {
            toolboxFuncs.select_container_btn.style.display = "block"
        }
        if (activeel_type == 'Audio' || activeel_type == 'Video' || activeel_type == 'YoutubeVideo') {
            toolboxFuncs.freeze_activeel.style.display = "block"
            if(getactiveel().querySelector('.freeze_div').style.height == "100%"){
                toolboxFuncs.freeze_activeel.innerHTML = `<i class="bi bi-file-earmark-lock2"></i>`
            }else{
                toolboxFuncs.freeze_activeel.innerHTML = `<i class="bi bi-file-earmark-play"></i>`
            }
        }
        if(activeel_type == 'Audio'){
            toolboxFuncs.toolbox_moreFuncs.audio_settings_activeel.style.display = "block"
        }
        else if(activeel_type == 'YoutubeVideo'){
            toolboxFuncs.toolbox_moreFuncs.ytvideo_settings_activeel.style.display = "block"
        }
        else if(activeel_type == 'Video'){
            toolboxFuncs.toolbox_moreFuncs.video_settings_activeel.style.display = "block"
        }
        if (activeel_type == 'Text' || activeel_type == 'Textpath') {
            toolboxFuncs.innerText_activeel.style.display = "block"
            document.querySelector('#InnerText_activeel_div').innerHTML = InteracStyles.getValue({ element: getactiveel(), prop: "inner-text" })
            document.querySelector('#InnerText_activeel_div').style.textAlign = InteracStyles.getValue({ element: getactiveel(), prop: "text-align" })
            for( var el of document.querySelector('#InnerText_activeel_div').querySelectorAll('div,p,span') ){
                el.contentEditable = true
            }
        }
        toolboxFuncs.toolbox_moreFuncs.CreateToolboxMoreDiv(getactiveel())
    },
    hide: function() {
        toolbox.style.display = "none"

    },
    delete_activeel: document.querySelector('#delete_activeel'),
    toolbox_more_btn: document.querySelector('#toolbox_more_btn'),
    z_index_activeel: document.querySelector('#z-index_activeel'),
    freeze_activeel: document.querySelector('#freeze_activeel'),
    innerText_activeel: document.querySelector('#innerText_activeel'),
    clone_activeel: document.querySelector("#clone_activeel"),
    container_edit_btn: document.querySelector("#container_edit_btn"),
    select_container_btn: document.querySelector("#select_container_btn"),
    toolbox_more: document.querySelector('#toolbox_more'),
    toolbox_moreFuncs: {
        position: function() {
            toolboxFuncs.toolbox_more.style.display = "block"

            toolboxFuncs.toolbox_more.style.top = (getactiveel().getBoundingClientRect().top + getactiveel().getBoundingClientRect().height / 2) - parseFloat(window.getComputedStyle(toolboxFuncs.toolbox_more).getPropertyValue('height')) / 2 + "px"
            toolboxFuncs.toolbox_more.style.left = getactiveel().getBoundingClientRect().left - parseFloat(window.getComputedStyle(toolboxFuncs.toolbox_more).getPropertyValue('width')) - 15 + "px"
        },
        hide: function() {
            toolboxFuncs.toolbox_more.style.display = "none";

        },
        append_child_btn: document.getElementById("append_activeel"),
        // append_child_btnFuncs: {
        //     position: function() {
        //         append_child_info.style.transform = 'translate(' + getactiveel().getBoundingClientRect().left + 'px,' + `${getactiveel().getBoundingClientRect().top-55}` + 'px)'
        //         append_child_info.style.display = "flex"

        //     },
        //     hide: function() {
        //         append_child_info.style.display = "none"

        //     }
        // },
        append_child_info: document.querySelector("#append_child_info"),
        append_child_infoFuncs: {
            position: function() {
                if(getactiveel().style)
                toolboxFuncs.toolbox_moreFuncs.append_child_info.style.transform = 'translate(' + getactiveel().getBoundingClientRect().left + 'px,' + `${getactiveel().getBoundingClientRect().top-55}` + 'px)'
                toolboxFuncs.toolbox_moreFuncs.append_child_info.style.display = "flex"

            },
            hide: function() {
                toolboxFuncs.toolbox_moreFuncs.append_child_info.style.display = "none";
            }
        },
        cancel_appending: document.querySelector("#cancel_appending"),
        name_activeel: document.querySelector("#name_activeel"),
        hyperlink_activeel: document.querySelector("#hyperlink_activeel"),
        relativeSizeSetting: document.querySelector("#relativeSizeSetting"),
        ChangeImage: document.querySelector("#change_image_activeel"),
        // ChangeImageLink: document.querySelector("#change_image_activeel_link"),
        ChangeVideo: document.querySelector("#change_video_activeel"),
        // ChangeVideoLink: document.querySelector("#change_video_activeel_link"),
        ChangeYoutubevideo: document.querySelector("#change_youtubevideo_activeel"),
        // ChangeYoutubevideoLink: document.querySelector("#change_youtubevideo_activeel_link"),
        // ChangeAudioLink: document.querySelector("#change_audio_activeel_link"),
        ChangeAudio: document.querySelector("#change_audio_activeel"),
        add_element_groups_icon: document.querySelector('#add_element_groups_icon'),
        groups_activeel: document.querySelector('#groups_activeel'),
        size_settings_activeel: document.querySelector('#size_settings_activeel'),
        scroll_settings_activeel: document.querySelector('#scroll_settings_activeel'),
        audio_settings_activeel: document.querySelector('#audio_settings_activeel'),
        video_settings_activeel: document.querySelector('#video_settings_activeel'),
        ytvideo_settings_activeel: document.querySelector('#ytvideo_settings_activeel'),
        
        add_element_groups: function(group_name) {
            var input = document.createElement('input');
            input.type = "text";
            input.value = group_name
            input.classList.add('group_activeel')
            toolboxFuncs.toolbox_moreFuncs.add_element_groups_icon.parentNode.insertBefore(input, add_element_groups_icon)

        },
        CreateToolboxMoreDiv: function(element) {
            var all = toolboxFuncs.toolbox_moreFuncs;
            var type = element.getAttribute('primary-element-type');
            all.size_settings_activeel.style.display = "none"
            all.ChangeVideo.style.display = "none"
            all.ChangeImage.style.display = "none"
            all.ChangeYoutubevideo.style.display = "none"
            all.ChangeAudio.style.display = "none"
            all.scroll_settings_activeel.style.display = "none"
            if (type == 'Container') {
                all.size_settings_activeel.style.display = "block"
                all.scroll_settings_activeel.style.display = "block"
                var el_settings = getJsonAttr(element, 'settings') || ""
                all.scroll_settings_activeel.querySelector('#scroll-settings-width').value = el_settings.scrollWidth || 0;
                all.scroll_settings_activeel.querySelector('#scroll-settings-height').value = el_settings.scrollHeight || 0;
                all.size_settings_activeel.querySelector('input').checked = el_settings.relativeSizingHeight || false;
                all.size_settings_activeel.querySelectorAll('input')[1].checked = el_settings.relativeSizingWidth || false;
            } else if (type == "Image") {

                all.ChangeImage.style.display = "block"
                // all.ChangeImageLink.querySelector('.change-btn').style.display = "block"
                all.ChangeImage.querySelector('a').innerText = element.querySelector('img').src
                all.ChangeImage.querySelector('a').href = element.querySelector('img').src

            } else if (type == "Video") {

                all.ChangeVideo.style.display = "block"
                all.ChangeVideo.querySelector('a').innerText = element.querySelector('source').src
                all.ChangeVideo.querySelector('a').href = element.querySelector('source').src
            } else if (type == "Audio") {

                all.ChangeAudio.style.display = "block"
                all.ChangeAudio.querySelector('a').innerText = element.querySelector('source').src
                all.ChangeAudio.querySelector('a').href = element.querySelector('source').src
            } else if (type == "YoutubeVideo") {

                all.ChangeYoutubevideo.style.display = "block"
                all.ChangeYoutubevideo.querySelector('a').innerText = "https://youtu.be/" + element.getAttribute('yt-id')
                all.ChangeYoutubevideo.querySelector('a').href = "https://youtu.be/" + element.getAttribute('yt-id')
            }
            // 
            if (element.getAttribute('primary-element-type') == 'Image') {}

            for (el of toolboxFuncs.toolbox_moreFuncs.groups_activeel.querySelectorAll('.group_activeel')) {
                el.remove()
            }

            toolboxFuncs.toolbox_moreFuncs.hyperlink_activeel.value = element.getAttribute('element_hyperlink') || "";
            toolboxFuncs.toolbox_moreFuncs.name_activeel.value = element.getAttribute('element_name') || "";
            if (element.getAttribute('element_groups') == "" || element.getAttribute('element_groups') == undefined) {
                // do nothing
            } else {
                for (var groups of element.getAttribute('element_groups').split(',')) {
                    toolboxFuncs.toolbox_moreFuncs.add_element_groups(groups)
                }
            }
        }
    }

}


toolboxFuncs.freeze_activeel.addEventListener('click', function() {
    var freeze_div = getactiveel().querySelector('.freeze_div')
    if (freeze_div.style.height == "100%") {
        freeze_div.style.height = "0"
        freeze_div.style.width = "0"
        this.innerHTML = `<i class="bi bi-file-earmark-play"></i>`
    } else {
        freeze_div.style.height = "100%"
        freeze_div.style.width = "100%"
        this.innerHTML = `<i class="bi bi-file-earmark-lock2"></i>`
    }
})
toolboxFuncs.z_index_activeel.addEventListener('input', function() {
    getactiveel().setAttribute('element_stake', this.value);
    // BoxContainer.div().append(getactiveel())
    // console.log(BoxContainer.div().children)
    // console.log(BoxContainer.svg().children)
    var el_list = []
    var el_list = BoxContainer.svg().children
    if(getparent(getactiveel(),'primary-element-type','Container') != null){
        var el_list = getparent(getactiveel(),'primary-element-type','Container').querySelector('svg').children
        var changing_Container = getparent(getactiveel(),'primary-element-type','Container').querySelector('svg') 
    }else{
    var el_list = BoxContainer.svg().children
    var changing_Container = BoxContainer.svg()
    }
   
        // for (var elem of BoxContainer.svg().children ){
        //     if(elem.getAttribute('primary-element-type' != null)){

    //     }
    // }
    for (var el of el_list) {
        try {
            console.log(el_list)
            if (el != getactiveel()) {
                if (parseInt(el.getAttribute('element_stake')) > parseInt(this.value)) {
                    console.log(getactiveel().getAttribute('element_stake'), '<', el.getAttribute('element_stake'))
                    changing_Container.insertBefore(getactiveel(), el)
                } else if (parseInt(el.getAttribute('element_stake')) < parseInt(this.value)) {
                    console.log(getactiveel().getAttribute('element_stake'), '>', el.getAttribute('element_stake'))
                    if (el.nextElementSibling != null) {
                        changing_Container.insertBefore(getactiveel(), el.nextElementSibling)

                    } else {
                        changing_Container.append(getactiveel())
                    }
                }
            }
        } catch (err) {}
    }
})
toolboxFuncs.toolbox_moreFuncs.audio_settings_activeel.children[0].addEventListener('click',function(){
    if(this.parentNode.children[1].style.display == "block"){
        this.parentNode.children[1].style.display = "none"
    }else{
        this.parentNode.children[1].style.display = "block"
    }
})
toolboxFuncs.toolbox_moreFuncs.video_settings_activeel.children[0].addEventListener('click',function(){
    if(this.parentNode.children[1].style.display == "block"){
        this.parentNode.children[1].style.display = "none"
    }else{
        this.parentNode.children[1].style.display = "block"
    }
})
toolboxFuncs.toolbox_moreFuncs.ytvideo_settings_activeel.children[0].addEventListener('click',function(){
    if(this.parentNode.children[1].style.display == "block"){
        this.parentNode.children[1].style.display = "none"
    }else{
        this.parentNode.children[1].style.display = "block"
    }
})
toolboxFuncs.toolbox_moreFuncs.scroll_settings_activeel.querySelector('#scroll-settings-width').addEventListener('input', function() {
    var ContDiv = getactiveel().querySelector('[secondary-element-type=Container-div')
    if (this.value == '0') {
        ContDiv.style.width = '100%'
    } else {
        ContDiv.style.width = parseInt(getactiveel().style.width) + parseInt(this.value) + 'px'
    }
    setJsonAttr(getactiveel(), 'settings', 'scrollWidth', this.value)
})
toolboxFuncs.toolbox_moreFuncs.scroll_settings_activeel.querySelector('#scroll-settings-height').addEventListener('input', function() {
    var ContDiv = getactiveel().querySelector('[secondary-element-type=Container-div')

    if (this.value == '0') {
        ContDiv.style.height = '100%'
    } else {
        ContDiv.style.height = parseInt(getactiveel().style.height) + parseInt(this.value) + 'px'
    }
    setJsonAttr(getactiveel(), 'settings', 'scrollHeight', this.value)
})

toolboxFuncs.toolbox_moreFuncs.size_settings_activeel.querySelector('input').addEventListener('input', function() {
    setJsonAttr(getactiveel(), 'settings', 'relativeSizingHeight', this.checked)
})
toolboxFuncs.toolbox_moreFuncs.size_settings_activeel.querySelectorAll('input')[1].addEventListener('input', function() {
    setJsonAttr(getactiveel(), 'settings', 'relativeSizingWidth', this.checked)
})

toolboxFuncs.toolbox_moreFuncs.groups_activeel.oninput = (e) => {
    for (el of toolboxFuncs.toolbox_moreFuncs.groups_activeel.querySelectorAll('.group_activeel')) {
        console.log(el.value)
        if (el.value == "") {
            el.remove()
        }
    }
    var activeel_groups = ""

    activeel_groups = activeel_groups.concat(groups_activeel.querySelectorAll('.group_activeel')[0].value)

    for (var groupsCount = 1; groupsCount < groups_activeel.querySelectorAll('.group_activeel').length; groupsCount++) {
        activeel_groups = activeel_groups.concat(`,${groups_activeel.querySelectorAll('.group_activeel')[groupsCount].value}`)
    }
    // console.log(activeel_groups)
    getactiveel().setAttribute('element_groups', activeel_groups)
}

toolboxFuncs.toolbox_moreFuncs.add_element_groups_icon.onclick = (e) => {
    toolboxFuncs.toolbox_moreFuncs.add_element_groups('')
}
toolboxFuncs.toolbox_moreFuncs.name_activeel.oninput = (e) => {
    getactiveel().setAttribute('element_name', e.target.value)
}
toolboxFuncs.toolbox_moreFuncs.hyperlink_activeel.oninput = (e) => {
    getactiveel().setAttribute('element_hyperlink', e.target.value)
}
toolboxFuncs.toolbox_moreFuncs.ChangeImage.querySelector('.change-btn').onclick = (e) => {
    ShowUploadModal('Image', { element: getactiveel() })

}
toolboxFuncs.toolbox_moreFuncs.ChangeAudio.onclick = (e) => {
    ShowUploadModal('Audio', { element: getactiveel() })

}
toolboxFuncs.toolbox_moreFuncs.ChangeVideo.onclick = (e) => {
    ShowUploadModal('Video', { element: getactiveel() })

}
toolboxFuncs.toolbox_moreFuncs.ChangeYoutubevideo.onclick = (e) => {
    ShowUploadModal('YoutubeVideo', { element: getactiveel() })

}
toolboxFuncs.toolbox_moreFuncs.cancel_appending.onclick = (e) => {
    var appendible_element = document.querySelector('.appendible_element')
    appendible_element.removeEventListener('mousedown', DragAboveandDrop)
    appendible_element.classList.remove('appendible_element')
    appendible_element.classList.add('draggable');
    toolboxFuncs.toolbox_moreFuncs.append_child_infoFuncs.hide();
    toolboxFuncs.position()
}


toolboxFuncs.toolbox_moreFuncs.append_child_btn.onclick = (e) => {
    toolboxFuncs.toolbox_moreFuncs.hide()
    toolboxFuncs.toolbox_moreFuncs.append_child_infoFuncs.position()
    toolboxFuncs.hide()

    getactiveel().classList.add('appendible_element');
    var AE = BoxContainer.elem().querySelector('.appendible_element');


    AE.addEventListener('mousedown', DragAboveandDrop, false)
}

export function DragAboveandDrop() {
    BoxContainer.svg().onmousemove = (e) => {
        var AE = BoxContainer.elem().querySelector('.appendible_element');
        for (el of BoxContainer.elem().querySelectorAll("[primary-element-type=Container]")) {
            el.style.outlineWidth = "0px"
            el.classList.remove('Add_in_this_container')

        }
        for (el of BoxContainer.elem().querySelectorAll("[primary-element-type=Container]")) {
            if (el != getactiveel()) {
                var el_x = el.getBoundingClientRect().x
                var el_y = el.getBoundingClientRect().y
                var el_right = el.getBoundingClientRect().right
                var el_bottom = el.getBoundingClientRect().bottom
                var AE_y = AE.getBoundingClientRect().y
                var AE_x = AE.getBoundingClientRect().x
                var AE_right = AE.getBoundingClientRect().right
                var AE_bottom = AE.getBoundingClientRect().bottom
                var possible_conts = [];
                var area = 0
                var container_elem;
                if ((el_x < e.x) && (el_y < e.y) && (el_right > e.x) && (el_bottom > e.y)) {
                    // console.log(el)
                    possible_conts.push(el)
                        // el.style.outline = "2px dashed red"
                        // el.classList.add('Add_in_this_container')
                }
                for (var conts of possible_conts) {
                    if (possible_conts.length == 1) {
                        for (el of BoxContainer.elem().querySelectorAll("[primary-element-type=Container]")) {
                            el.style.outlineWidth = "0px"
                            el.classList.remove('Add_in_this_container')

                        }
                        conts.style.outline = "2px dashed red"
                        conts.classList.add('Add_in_this_container')
                    } else {
                        var new_area = (2 * conts.getBoundingClientRect().height) + (2 * conts.getBoundingClientRect().width)
                        if (area > new_area) {
                            area = new_area
                            container_elem = conts
                        }
                        for (el of BoxContainer.elem().querySelectorAll("[primary-element-type=Container]")) {
                            el.style.outlineWidth = "0px"
                            el.classList.remove('Add_in_this_container')

                        }
                        container_elem.style.outline = "2px dashed red"
                        container_elem.classList.add('Add_in_this_container')
                    }
                }
            }
        }

        BoxContainer.svg().onmouseup = (e) => {
            var Container = BoxContainer.elem().querySelector('.Add_in_this_container');
            // console.log(Container)
            if (Container != null) {
                // transformFunc.updateValue(AE, 'position-x', transformFunc.getValue(AE).positionX - transformFunc.getValue(Container).positionX)
                // transformFunc.updateValue(AE, 'position-y', transformFunc.getValue(AE).positionY - transformFunc.getValue(Container).positionY)

                transformFunc.updateValue(AE, 'position-x', AE.getBoundingClientRect().x - Container.getBoundingClientRect().x)
                transformFunc.updateValue(AE, 'position-y', AE.getBoundingClientRect().y - Container.getBoundingClientRect().y)
                    // Container.querySelector('svg').append(AE)
                activeelFunction.makeunmovable(AE)
                Container.style.outlineWidth = "0px"
                Container.classList.remove('.Add_in_this_container')
                BoxContainer.AddToContainer(Container, AE)

                
                    // if(AE.tagName == "path"){
                    // var path = AE
                    // var json = { d: path.getAttribute('d'), fill: path.style.fill || path.getAttribute('fill'), stroke: path.style.stroke || path.getAttribute('stroke'), strokeWidth: path.style.strokeWidth || path.getAttribute('stroke-width'), return: true }
                    // var add_this = BoxContainer.CreatePathElement(json)
                    // path.remove()}else{

                // }

                // Container.querySelector('svg').append(add_this)
                // Container.innerHTML = Container.innerHTML
                // Container.querySelector('svg').append(AE)

                AE.removeEventListener('mousedown', DragAboveandDrop)
                AE.classList.remove("appendible_element", 'draggable')
                toolboxFuncs.toolbox_moreFuncs.append_child_infoFuncs.hide();
                toolboxFuncs.position()
                activeelFunction.makeunmovable(AE)
                // ???
                activeelFunction.makeactive(Container)
                BoxContainer.svg().onmouseup = () => {
                    ""
                }
                console.log('appended')
            }
            BoxContainer.svg().onmousemove = (e) => {
                ""
            }
            console.log('removing event')
        }
        console.log(e.target)

    }
}

toolboxFuncs.toolbox_more_btn.onclick = () => {
    if (toolbox_more.style.display = "none") {
        toolboxFuncs.toolbox_moreFuncs.position()
    } else {
        toolboxFuncs.toolbox_moreFuncs.hide()

    }
}

// toolboxFuncs.container_edit_btn.onclick = () => {
//     for (var i = 0; i < getactiveel().childElementCount; i++) {
//         getactiveel().children[i].classList.add('draggable');
//         getactiveel().children[0].classList.add('active');
//     }
//     getactiveel().classList.remove('active', 'draggable')
// }
toolboxFuncs.container_edit_btn.addEventListener('click', function() {
    for (var el of getactiveel().querySelector('[secondary-element-type=Container-Svg]').children) {
        el.classList.add('draggable')
    }
    // getactiveel().querySelectorAll('[secondary-element-type]')[1].classList.remove('draggable')
    getactiveel().classList.remove('draggable');
    getactiveel().onmousedown = () => {

        }
        // console.log(getactiveel().children[0])
    activeelFunction.makeactive(getactiveel().querySelector('[primary-element-type]'))
})
toolboxFuncs.select_container_btn.addEventListener('click', function() {
    activeelFunction.makeactive(getparent(getactiveel(), 'primary-element-type', 'Container'))
    getactiveel().classList.add('draggable')
    for (var el of getactiveel().querySelector('[secondary-element-type=Container-Svg]').children) {
        activeelFunction.makeunmovable(el)
    }
})

toolboxFuncs.delete_activeel.onclick = () => {
    layerDiv.delete(getactiveel())
    
    // show_styling_properties()
    EndlessSizeHandler.DeleteHandler(getactiveel())
    activeelFunction.delete()
}

toolboxFuncs.clone_activeel.onclick = () => {
    activeelFunction.copy()
}




export const activeel_position_divFuncs = {
    activeel_position_div: document.querySelector('#activeel_position_div'),
    activeel_position_div_h: document.querySelector('#activeel_position_div_h'),
    activeel_position_div_w: document.querySelector('#activeel_position_div_w'),
    activeel_position_div_x: document.querySelector('#activeel_position_div_x'),
    activeel_position_div_y: document.querySelector('#activeel_position_div_y'),
    position: function() {
        activeel_position_divFuncs.activeel_position_div.style.display = "grid"
        activeel_position_divFuncs.activeel_position_div_h.innerHTML = parseInt(getactiveel().getBoundingClientRect().height)
        activeel_position_divFuncs.activeel_position_div_w.innerHTML = parseInt(getactiveel().getBoundingClientRect().width)
        activeel_position_divFuncs.activeel_position_div_x.innerHTML = parseInt(getactiveel().getBoundingClientRect().left - BoxContainer.div().getBoundingClientRect().left)
        activeel_position_divFuncs.activeel_position_div_y.innerHTML = parseInt(getactiveel().getBoundingClientRect().top - BoxContainer.div().getBoundingClientRect().top)
        activeel_position_div.style.top = getactiveel().getBoundingClientRect().bottom + 15 + "px"
        activeel_position_div.style.left = getactiveel().getBoundingClientRect().left + (getactiveel().getBoundingClientRect().width / 2) + "px"

    },
    hide: function() {
        activeel_position_divFuncs.activeel_position_div.style.display = "none"
    }
}


// BoxFunctions = {
//     BoxStyling : {
//         BoxBackGroundDiv
//     }
// }

// TESTING CODE
// const