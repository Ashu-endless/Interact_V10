import { getparent, gettarget, getUniqueid } from "./functionsfile.js";
import { getactiveel } from "./index.js";
import { transformFunc } from './Interact_style.js';

export const EndlessSizeHandler = {} 

function getactiveels(){
    return document.querySelectorAll('.active')
}

EndlessSizeHandler ['SizeHandlerElems'] = ['container_top','container_bottom','container_left',
'container_right','mid_bottom','mid_right','mid_left','mid_top','bottom_right','bottom_left',
'top_right','top_left','rotate','rotate_line'
]
var initX, initY, mousePressX, mousePressY, initW, initH, initRotate;
const minWidth = 40;
const minHeight = 40;

EndlessSizeHandler['NewSizeHandler'] = function (json){
    var NewSHJson = {}
    var uniqueid = getUniqueid('')
    for (var size_handler of EndlessSizeHandler.SizeHandlerElems){
        //?Creating
        NewSHJson[size_handler] = document.createElement('div');
        document.body.append(NewSHJson[size_handler])
        NewSHJson[size_handler].setAttribute('SizeHandler',size_handler)
        NewSHJson[size_handler].setAttribute(`Sizehandler${uniqueid}`,size_handler)
        NewSHJson[size_handler].setAttribute(`sizehandlerid`,uniqueid)
        //?Adding point
        if(size_handler.includes('container') == false && size_handler.includes('line') == false){
            var div = document.createElement('div')
            div.setAttribute('SizeHandlerId',uniqueid)
            div.setAttribute('SizeHandler-type','point')
            NewSHJson[size_handler].append(div)
            NewSHJson[size_handler].setAttribute('SizeHandler-type','pointcontainer')
            div.classList.add('size_handler_point')
        }else{
            NewSHJson[size_handler].setAttribute('SizeHandler-type','container')
        }
    }
    json.element.setAttribute('SizeHandlerId',uniqueid)
    console.log(NewSHJson)
    EndlessSizeHandler.Setposition({element:json.element,sizehandler:NewSHJson})

    NewSHJson.mid_right.onmousedown = (e) => { resizeHandler(e, false, false, true, false) };
    NewSHJson.mid_left.onmousedown = (e) => { resizeHandler(e, true, false, true, false) };
    NewSHJson.mid_top.onmousedown = (e) => { resizeHandler(e, false, true, false, true) };
    NewSHJson.mid_bottom.onmousedown = (e) => { resizeHandler(e, false, false, false, true) };
    NewSHJson.top_left.onmousedown = (e) => { resizeHandler(e, true, true, true, true) };
    NewSHJson.top_right.onmousedown = (e) => { resizeHandler(e, false, true, true, true) };
    NewSHJson.bottom_right.onmousedown = (e) => { resizeHandler(e, false, false, true, true) };
    NewSHJson.bottom_left.onmousedown = (e) => { resizeHandler(e, true, false, true, true) };
    NewSHJson.rotate.onmousedown = (e) => { rotationhandler(e) };
}

var defaults= {
    distance: 0,
    width: 3,
    area: 40,
    rotate_line :{
        height : 20,
        width:20,
    }

}

EndlessSizeHandler['HideHandler'] = function(json) {
    var element = json.element;
    if(element.getAttribute('SizeHandlerId') != null){
        for(var el of document.querySelectorAll(`[Sizehandler${element.getAttribute('SizeHandlerId')}]`)){
            el.style.display = "none"
        }
    }else{
       // EndlessSizeHandler.NewSizeHandler({element:json.element})
    }
}


EndlessSizeHandler['SetHandler'] = function(json) {
    var element = json.element;
    var NHJson = {}
    if(element.getAttribute('SizeHandlerId') != null){
        for(var el of document.querySelectorAll(`[Sizehandler${element.getAttribute('SizeHandlerId')}]`)){
            el.style.display = "grid"
        }

        for (var size_handler of EndlessSizeHandler.SizeHandlerElems){
            NHJson[size_handler] = document.querySelector(`[Sizehandler${element.getAttribute('SizeHandlerId')}=${size_handler}]`)

        }
       // console.log(NHJson)
        EndlessSizeHandler.Setposition({element:element,sizehandler:NHJson})

    }else{
        EndlessSizeHandler.NewSizeHandler({element:json.element})
    }
}


EndlessSizeHandler['Setposition'] = function(json) {
    var element = json.element
    var size_handler = json.sizehandler
    var sizehandlerID = element.getAttribute('SizeHandlerId')
    var element_rotation = transformFunc.getValue(element).rotate || 0
    //var element_rotation =  0
    //console.log(element_rotation)
    transformFunc.updateValue(element, 'rotate', '0')
    var el_x = element.getBoundingClientRect().x
    var el_y = element.getBoundingClientRect().y
    var el_h = element.getBoundingClientRect().height
    var el_w = element.getBoundingClientRect().width
    var SH_points = document.querySelectorAll(`[SizeHandlerId="${sizehandlerID}"][SizeHandler-type="point"]`)
    if (el_h < 100 || el_w < 100) {
        for (var el of SH_points) {
            el.style.height = "10px"
            el.style.width = "10px"
        }
        for (var el of SH_points) {
            el.parentNode.style.height = "30px"
            el.parentNode.style.width = "30px"
        }
        defaults.area = 30
    } else {
        for (var el of SH_points) {
            el.style.height = "15px"
            el.style.width = "15px"
        }
        for (var el of SH_points) {
            el.parentNode.style.height = "40px"
            el.parentNode.style.width = "40px"
        }
        defaults.area = 40

    }


    size_handler.top_left.style.left = parseInt(activeel_container.style.left) - (defaults.area -defaults.width) / 2 + "px";
    size_handler.top_left.style.top = `${el_y  - defaults.distance - (defaults.area/2)}px`
    size_handler.top_left.style.left = `${el_x  -  defaults.distance - (defaults.area/2)}px`
        // 
    size_handler.top_right.style.top = `${el_y  - defaults.distance - (defaults.area/2)}px`
    size_handler.top_right.style.left = `${el_x  + el_w + defaults.distance - (defaults.area/2) }px`
        // 
    size_handler.bottom_right.style.top = `${el_y + el_h + defaults.distance - (defaults.area/2)}px`
    size_handler.bottom_right.style.left = `${el_x  + el_w + defaults.distance - (defaults.area/2) }px`
        // 
    size_handler.bottom_left.style.top = `${el_y + el_h + defaults.distance - (defaults.area/2)}px`
    size_handler.bottom_left.style.left = `${el_x   - defaults.distance - (defaults.area/2) }px`
    //     // 

    size_handler.mid_top.style.top = `${el_y  - defaults.distance - (defaults.area/2) - (defaults.width/2)}px`
    size_handler.mid_top.style.left = `${el_x  + (el_w/2)  - (defaults.area/2) }px`
        // 
    size_handler.mid_bottom.style.top = `${el_y + el_h + defaults.distance - (defaults.area/2) + (defaults.width/2)}px`
    size_handler.mid_bottom.style.left = `${el_x  + (el_w/2)  - (defaults.area/2) }px`
        // 
    size_handler.mid_left.style.top = `${el_y  + (el_h/2)  - (defaults.area/2) }px`
    size_handler.mid_left.style.left = `${el_x  -  defaults.distance - (defaults.area/2) - (defaults.width/2)}px`
        // 
    size_handler.mid_right.style.top = `${el_y  + (el_h/2)  - (defaults.area/2)}px`
    size_handler.mid_right.style.left = `${el_x + el_w +  defaults.distance - (defaults.area/2) + (defaults.width/2)}px`

    //   _
    //console.log(sizehandler)
    size_handler.container_top.style.top = `${el_y  - defaults.distance - defaults.width}px`
    size_handler.container_top.style.left = `${el_x - defaults.width - defaults.distance}px`
    size_handler.container_top.style.height = `3px`

    size_handler.container_top.style.width = el_w + (defaults.distance * 2) + (defaults.width * 2) + 'px'
    size_handler.container_bottom.style.top = `${el_y  + el_h + defaults.distance }px`
    size_handler.container_bottom.style.left = `${el_x - defaults.width - defaults.distance}px`
    size_handler.container_bottom.style.height = '3px'
    size_handler.container_bottom.style.width = el_w + (defaults.distance * 2) + (defaults.width * 2) + 'px'


    size_handler.container_left.style.top = `${el_y - defaults.width  - defaults.distance}px`
    size_handler.container_left.style.left = `${el_x - defaults.width - defaults.distance}px`
    size_handler.container_left.style.height = el_h + (defaults.distance * 2) + (defaults.width * 2) + 'px'
    size_handler.container_left.style.width = '3px'

    size_handler.container_right.style.top = `${el_y - defaults.width - defaults.distance}px`
    size_handler.container_right.style.left = `${el_x  + el_w + defaults.distance }px`
    size_handler.container_right.style.height = el_h + (defaults.distance * 2) + (defaults.width * 2) + 'px'
    
    
    size_handler.container_right.style.width = '3px'
    size_handler.rotate.style.top = `${(((el_y - defaults.width) - defaults.distance)) - defaults.rotate_line.height - (defaults.area/2)}px`
    size_handler.rotate.style.left = `${(el_x + el_w/2)  - defaults.distance - (defaults.area/2)}px`

    // // 
    size_handler.rotate_line.style.top = `${el_y - defaults.width - defaults.distance - defaults.rotate_line.height}px`
    size_handler.rotate_line.style.left = `${(el_x + el_w/2) - (defaults.width/2) - defaults.distance }px`
    //     // 

    size_handler.rotate_line.style.transformOrigin = `center ${(el_h/2) + defaults.width + defaults.distance + (defaults.rotate_line.height/2) + 10}px`
    size_handler.rotate.style.transformOrigin = `center ${((((el_h/2) + defaults.width) + defaults.distance)) + defaults.rotate_line.height + (defaults.area/2)}px`
    size_handler.container_right.style.transformOrigin = `${-el_w/2 - defaults.distance}px ${el_h/2 + defaults.width + defaults.distance}px`
    size_handler.container_top.style.transformOrigin = `${el_w/2 + defaults.width + defaults.distance}px ${el_h/2 + defaults.width + defaults.distance}px`
    size_handler.container_bottom.style.transformOrigin = `${el_w/2 + defaults.width + defaults.distance}px ${-el_h/2 - defaults.distance}px`
    size_handler.container_left.style.transformOrigin = `${el_w/2 + defaults.width + defaults.distance}px ${el_h/2 + defaults.width +  defaults.distance}px`
    // size_handler.container_right.style.transform = `rotate(${element_rotation}deg)`
    // size_handler.container_top.style.transform = `rotate(${element_rotation}deg)`
    // size_handler.container_bottom.style.transform = `rotate(${element_rotation}deg)`
    // size_handler.container_left.style.transform = `rotate(${element_rotation}deg)`
    // size_handler.rotate_line.style.transform = `rotate(${element_rotation}deg)`
    // size_handler.rotate.style.transform = `rotate(${element_rotation}deg)`
    //     //    
    size_handler.top_left.style.transformOrigin = `${el_w/2 + defaults.distance  + (defaults.area/2)}px ${el_h/2 + defaults.distance + (defaults.area/2)}px`
    size_handler.top_right.style.transformOrigin = `${-el_w/2 - defaults.distance  + (defaults.area/2)}px ${el_h/2 + defaults.distance + (defaults.area/2)}px`
    size_handler.bottom_left.style.transformOrigin = `${el_w/2 + defaults.distance + (defaults.area/2) }px ${-el_h/2 - defaults.distance + (defaults.area/2)}px`
    size_handler.bottom_right.style.transformOrigin = `${-el_w/2 - defaults.distance  + (defaults.area/2)}px ${-el_h/2 - defaults.distance + (defaults.area/2)}px`
    size_handler.mid_left.style.transformOrigin = `${el_w/2 + defaults.distance  + (defaults.area/2) + (defaults.width/2)}px ${(defaults.area/2)}px`
    size_handler.mid_right.style.transformOrigin = `${-el_w/2 - defaults.distance  + (defaults.area/2) - (defaults.width/2)}px ${defaults.area/2}px`
    size_handler.mid_bottom.style.transformOrigin = `${(defaults.area/2)}px ${-el_h/2 - defaults.distance + (defaults.area/2) - (defaults.width/2)}px`
    size_handler.mid_top.style.transformOrigin = `${(defaults.area/2)}px ${el_h/2 + defaults.distance + (defaults.area/2) + (defaults.width/2)}px`
    
    // for (el of document.querySelectorAll('.size_handler_')) {
    //     el.style.transform = `rotate(${element_rotation}deg)`
    // }

    for(var el of EndlessSizeHandler.SizeHandlerElems){
        size_handler[el].style.transform = `rotate(${element_rotation}deg)`
    }

    transformFunc.updateValue(element, 'rotate', element_rotation)
    
}



EndlessSizeHandler["MakeDraggable"] = function(element){
    //element.addEventListener('mousedown',)
}

function MakingDraggable(){

}


function resizeHandler(event, left = false, top = false, xResize = false, yResize = false) {
   // console.log(getactiveels())

    //var id = gettarget(event,'sizehandlerid').getAttribute('sizehandlerid')
    //var elem = document.querySelector(`[SizeHandlerId="${id}"].active`)
    var elem = document.querySelectorAll('.active');
    var datajson = {}
    for(var i=0;i<elem.length;i++){

    
    datajson[i] = {}
    // initY = getactiveel().parentNode.offsetTop;
    // initX = getactiveel().parentNode.offsetLeft;
    datajson[i].initY = transformFunc.getValue(elem[i]).positionY + transformFunc.getValue(elem[i]).height / 2;
    datajson[i].initX = transformFunc.getValue(elem[i]).positionX + transformFunc.getValue(elem[i]).width / 2;
    // initY = transformFunc.getValue(element).positionY + transformFunc.getValue(element).height / 2;
    mousePressX = event.clientX;
    mousePressY = event.clientY;

    datajson[i].initW = transformFunc.getValue(elem[i]).width
    datajson[i].initH = transformFunc.getValue(elem[i]).height

    // initRotate = getCurrentRotation(elem.parentNode);
    datajson[i].initRotate = getCurrentRotation(elem[i]);
    var initRadians = datajson[i].initRotate * Math.PI / 180;
    var cosFraction = Math.cos(initRadians);
    var sinFraction = Math.sin(initRadians);
    // console.log('initRadians', initRadians)
    // console.log('cosFraction', cosFraction)
    // console.log('sinFraction', sinFraction)
    }
    function eventMoveHandler(event) {
        for(var i=0;i<elem.length;i++){
        var wDiff = (event.clientX - mousePressX) ;
        var hDiff = (event.clientY - mousePressY);
        // var wDiff = (event.clientX - mousePressX) /1.5;
        // var hDiff = (event.clientY - mousePressY)/1.5;
        var rotatedWDiff = cosFraction * wDiff + sinFraction * hDiff;
        var rotatedHDiff = cosFraction * hDiff - sinFraction * wDiff;
        // console.log('rotatedWDiff', rotatedWDiff)
        // console.log('rotatedHDiff', rotatedHDiff)

        var newW = datajson[i].initW,
            newH = datajson[i].initH,
            newX = datajson[i].initX,
            newY = datajson[i].initY;

        if (xResize) {
            if (left) {
                newW = datajson[i].initW - rotatedWDiff;
                if (newW < minWidth) {
                    newW = minWidth;
                    rotatedWDiff = datajson[i].initW - minWidth;
                }
            } else {
                newW = datajson[i].initW + rotatedWDiff;
                if (newW < minWidth) {
                    newW = minWidth;
                    rotatedWDiff = minWidth - datajson[i].initW;
                }
            }
            newX += 0.5 * rotatedWDiff * cosFraction;
            newY += 0.5 * rotatedWDiff * sinFraction;
        }

        if (yResize) {
            if (top) {
                newH = datajson[i].initH - rotatedHDiff;
                if (newH < minHeight) {
                    newH = minHeight;
                    rotatedHDiff = datajson[i].initH - minHeight;
                }
            } else {
                newH = datajson[i].initH + rotatedHDiff;
                if (newH < minHeight) {
                    newH = minHeight;
                    rotatedHDiff = minHeight - datajson[i].initH;
                }
            }
            newX -= 0.5 * rotatedHDiff * sinFraction;
            newY += 0.5 * rotatedHDiff * cosFraction;
        }

    //console.log(newH,newW,newX,newY,elem.getAttribute('element_name'))
   // for(var elem of getactiveels()){
        console.log(elem[i])
    transformFunc.updateValue(elem[i], 'width', newW)
    transformFunc.updateValue(elem[i], 'height', newH)
    transformFunc.updateValue(elem[i], 'position-x', newX - transformFunc.getValue(elem[i]).width / 2)
    transformFunc.updateValue(elem[i], 'position-y', newY - transformFunc.getValue(elem[i]).height / 2)
    EndlessSizeHandler.SetHandler({element:elem[i]})
    }}


    window.addEventListener('mousemove', eventMoveHandler, false);
    //window.addEventListener('mousemove', UpdateTransformStyleDiv, false);
    
    window.addEventListener('mouseup', function eventEndHandler() {
        window.removeEventListener('mousemove', eventMoveHandler, false);
        window.removeEventListener('mouseup', eventEndHandler);
    }, false);
    window.addEventListener('mouseup', function eventEndHandler() {
        //window.removeEventListener('mousemove', UpdateTransformStyleDiv, false);
        window.removeEventListener('mouseup', eventEndHandler);
    }, false);

}


function rotationhandler(event){
        //for(var elem of getactiveels()){
        var element = document.querySelector(`[SizeHandlerId=${event.target.getAttribute('sizehandlerid')}]`)
        var arrowRects = element.getBoundingClientRect()
        var arrowX = arrowRects.left + arrowRects.width / 2;
        var arrowY = arrowRects.top + arrowRects.height / 2;
        function eventMoveHandler(event) {
            var angle = Math.atan2(event.clientY - arrowY, event.clientX - arrowX) + Math.PI / 2;
            for(var elem of getactiveels()){
            transformFunc.updateValue(elem, 'rotate', angle * 180 / Math.PI + 'deg')
            EndlessSizeHandler.SetHandler({element:elem})}
            // for (el of document.querySelectorAll('.activeel_container')) {
            //     el.style.transform = `rotate(${angle * 180 / Math.PI}deg)`
            // }
            // for (el of document.querySelectorAll('.size_handler_')) {
            //     el.style.transform = `rotate(${angle * 180 / Math.PI}deg)`
            // }
        }
        window.addEventListener('mousemove', eventMoveHandler, false);
        //window.addEventListener('mousemove', UpdateTransformStyleDiv, false);
        window.addEventListener('mouseup', function eventEndHandler() {
            window.removeEventListener('mousemove', eventMoveHandler, false);
            //window.removeEventListener('mousemove', UpdateTransformStyleDiv, false);
            window.removeEventListener('mouseup', eventEndHandler);
        }, false);
    
}
//}

function getCurrentRotation(el) {
    var st = window.getComputedStyle(el, null);
    var tm = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform")
    "none";
    if (tm != "none") {
        var values = tm.split('(')[1].split(')')[0].split(',');
        var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
        return (angle < 0 ? angle + 360 : angle);
    }
    return 0;
};






function resizeHhfghgfandler(event, left = false, top = false, xResize = false, yResize = false) {
    console.log(getactiveels())

    //var id = gettarget(event,'sizehandlerid').getAttribute('sizehandlerid')
    //var elem = document.querySelector(`[SizeHandlerId="${id}"].active`)
    var elem = document.querySelectorAll('.active');
    var datajson = {}
    for(var i=0;i<elem.length;i++){
        datajson[i]
    }
    console.log('selected',elem)
    // initY = getactiveel().parentNode.offsetTop;
    // initX = getactiveel().parentNode.offsetLeft;
    initY = transformFunc.getValue(elem).positionY + transformFunc.getValue(elem).height / 2;
    initX = transformFunc.getValue(elem).positionX + transformFunc.getValue(elem).width / 2;
    // initY = transformFunc.getValue(element).positionY + transformFunc.getValue(element).height / 2;
    mousePressX = event.clientX;
    mousePressY = event.clientY;

    initW = transformFunc.getValue(elem).width
    initH = transformFunc.getValue(elem).height

    // initRotate = getCurrentRotation(elem.parentNode);
    initRotate = getCurrentRotation(elem);
    var initRadians = initRotate * Math.PI / 180;
    var cosFraction = Math.cos(initRadians);
    var sinFraction = Math.sin(initRadians);
    // console.log('initRadians', initRadians)
    // console.log('cosFraction', cosFraction)
    // console.log('sinFraction', sinFraction)

    function eventMoveHandler(event) {
        var wDiff = (event.clientX - mousePressX) ;
        var hDiff = (event.clientY - mousePressY);
        // var wDiff = (event.clientX - mousePressX) /1.5;
        // var hDiff = (event.clientY - mousePressY)/1.5;
        var rotatedWDiff = cosFraction * wDiff + sinFraction * hDiff;
        var rotatedHDiff = cosFraction * hDiff - sinFraction * wDiff;
        // console.log('rotatedWDiff', rotatedWDiff)
        // console.log('rotatedHDiff', rotatedHDiff)

        var newW = initW,
            newH = initH,
            newX = initX,
            newY = initY;

        if (xResize) {
            if (left) {
                newW = initW - rotatedWDiff;
                if (newW < minWidth) {
                    newW = minWidth;
                    rotatedWDiff = initW - minWidth;
                }
            } else {
                newW = initW + rotatedWDiff;
                if (newW < minWidth) {
                    newW = minWidth;
                    rotatedWDiff = minWidth - initW;
                }
            }
            newX += 0.5 * rotatedWDiff * cosFraction;
            newY += 0.5 * rotatedWDiff * sinFraction;
        }

        if (yResize) {
            if (top) {
                newH = initH - rotatedHDiff;
                if (newH < minHeight) {
                    newH = minHeight;
                    rotatedHDiff = initH - minHeight;
                }
            } else {
                newH = initH + rotatedHDiff;
                if (newH < minHeight) {
                    newH = minHeight;
                    rotatedHDiff = minHeight - initH;
                }
            }
            newX -= 0.5 * rotatedHDiff * sinFraction;
            newY += 0.5 * rotatedHDiff * cosFraction;
        }

    //console.log(newH,newW,newX,newY,elem.getAttribute('element_name'))
    for(var elem of getactiveels()){
        console.log(elem)
    transformFunc.updateValue(elem, 'width', newW)
    transformFunc.updateValue(elem, 'height', newH)
    transformFunc.updateValue(elem, 'position-x', newX - transformFunc.getValue(elem).width / 2)
    transformFunc.updateValue(elem, 'position-y', newY - transformFunc.getValue(elem).height / 2)
    EndlessSizeHandler.SetHandler({element:elem})
    }}


    window.addEventListener('mousemove', eventMoveHandler, false);
    //window.addEventListener('mousemove', UpdateTransformStyleDiv, false);
    
    window.addEventListener('mouseup', function eventEndHandler() {
        window.removeEventListener('mousemove', eventMoveHandler, false);
        window.removeEventListener('mouseup', eventEndHandler);
    }, false);
    window.addEventListener('mouseup', function eventEndHandler() {
        //window.removeEventListener('mousemove', UpdateTransformStyleDiv, false);
        window.removeEventListener('mouseup', eventEndHandler);
    }, false);
}
