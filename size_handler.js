import { transformFunc,UpdateTransformStyleDiv } from './Interact_style.js';
import { getactiveel, } from './index.js';
import { gettarget, toolboxFuncs, activeelFunction, activeel_position_divFuncs, getparent } from './functionsfile.js';
import { BoxContainer } from './Interac_BoxContainer.js';

var el;
var dx;
var dy;
var element;
var startpositiony
var startpositionx
const activeel_container = document.querySelector('#activeel_container');
// 
const activeel_container_top = document.querySelector('#activeel_container_top');
const activeel_container_bottom = document.querySelector('#activeel_container_bottom');
const activeel_container_left = document.querySelector('#activeel_container_left');
const activeel_container_right = document.querySelector('#activeel_container_right');
// 
const size_handler_mid_bottom = document.querySelector('#size_handler_mid_bottom')
const size_handler_mid_right = document.querySelector('#size_handler_mid_right')
const size_handler_mid_left = document.querySelector('#size_handler_mid_left')
const size_handler_mid_top = document.querySelector('#size_handler_mid_top')
const size_handler_bottom_right = document.querySelector('#size_handler_bottom_right')
const size_handler_bottom_left = document.querySelector('#size_handler_bottom_left')
const size_handler_top_right = document.querySelector('#size_handler_top_right')
const size_handler_top_left = document.querySelector('#size_handler_top_left')
const transform_origin_point = document.querySelector('#transform-origin-point');
const activeel_container_rotate_box = document.querySelector('#activeel_container-rotate_box');
const activeel_container_rotate_line = document.querySelector('#activeel_container-rotate_line');
const minWidth = 40;
const minHeight = 40;
const size_handler_all = document.querySelectorAll('.size_handler_');
const size_handler_point_all = document.querySelectorAll('.size_handler_point');
var initX, initY, mousePressX, mousePressY, initW, initH, initRotate;
// //////////
// var data = { name: effector_selectors[elem_count].getAttribute('value'), functions: { change: { prop: [], val: [] }, inc: {} } }
//                         data.transitions = transitions_container[elem_count].getAttribute('prop_value');
//                         for (el of functions_container[elem_count].querySelectorAll('[functionality_prop]')) {
//                             data.functions.change.prop.push(el.getAttribute('functionality_prop'))

//                         }
//                         for (el of functions_container[elem_count].querySelectorAll('[functionality_prop]')) {
//                             data.functions.change.val.push(el.getAttribute('functionality_prop-value'))

//                         }
// !!!
function resize(w, h) {
    transformFunc.updateValue(getactiveel(), 'width', w)
    transformFunc.updateValue(getactiveel(), 'height', h)
        // getactiveel().style.width = w + 'px';
        // getactiveel().style.height = h + 'px';
}

function repositionElement(x, y) {
    // getactiveel().parentNode.style.left = x + "px"
    // getactiveel().parentNode.style.top = y + "px"
    transformFunc.updateValue(getactiveel(), 'position-x', x - transformFunc.getValue(getactiveel()).width / 2)
    transformFunc.updateValue(getactiveel(), 'position-y', y - transformFunc.getValue(getactiveel()).height / 2)
        // getactiveel().style.left = (x - transformFunc.getValue(getactiveel()).width / 2) + "px"
        // getactiveel().style.top = (y - transformFunc.getValue(getactiveel()).height / 2) + "px"

}


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

function resizeHandler(event, left = false, top = false, xResize = false, yResize = false) {
    // initY = getactiveel().parentNode.offsetTop;
    // initX = getactiveel().parentNode.offsetLeft;
    initY = transformFunc.getValue(getactiveel()).positionY + transformFunc.getValue(getactiveel()).height / 2;
    initX = transformFunc.getValue(getactiveel()).positionX + transformFunc.getValue(getactiveel()).width / 2;
    // initY = transformFunc.getValue(element).positionY + transformFunc.getValue(element).height / 2;
    mousePressX = event.clientX;
    mousePressY = event.clientY;

    initW = transformFunc.getValue(getactiveel()).width
    initH = transformFunc.getValue(getactiveel()).height

    // initRotate = getCurrentRotation(getactiveel().parentNode);
    initRotate = getCurrentRotation(getactiveel());
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

        resize(newW, newH);
        repositionElement(newX, newY);
        activeel_size_handler.position(getactiveel())

    }


    window.addEventListener('mousemove', eventMoveHandler, false);
    window.addEventListener('mousemove', UpdateTransformStyleDiv, false);
    
    window.addEventListener('mouseup', function eventEndHandler() {
        window.removeEventListener('mousemove', eventMoveHandler, false);
        window.removeEventListener('mouseup', eventEndHandler);
    }, false);
    window.addEventListener('mouseup', function eventEndHandler() {
        window.removeEventListener('mousemove', UpdateTransformStyleDiv, false);
        window.removeEventListener('mouseup', eventEndHandler);
    }, false);
}

export function DragMoveListener() {
    var draggable = document.querySelectorAll('.draggable');
    for (var draggables of draggable) {
        draggables.onmousedown = (e) => {
            var target = gettarget(e, 'draggable')
            target.style.cursor = "grabbing"
            toolbox.style.display = "none"
            activeel_size_handler.hide()
            toolboxFuncs.hide()

            var startX = e.x
            var startY = e.y
            var positionx = transformFunc.getValue(target).positionX
            var positiony = transformFunc.getValue(target).positionY

            activeel_position_divFuncs.position()
            UpdateTransformStyleDiv()
            document.body.onmousemove = (e) => {
                    var dx = e.clientX - startX 
                    var dy = e.clientY - startY
                    // var dx = (e.clientX - startX) / 0.5
                    // var dy = (e.clientY - startY) / 0.5

                    // console.log(target.tagName)
                    transformFunc.updateValue(target, 'position-x', (positionx + dx) + "px")
                    transformFunc.updateValue(target, 'position-y',(positiony + dy) + "px")
                    activeel_position_divFuncs.position()
                    UpdateTransformStyleDiv()
                },
                document.body.onmouseup = (e) => {
                    target.style.cursor = "grab"
                    activeel_position_divFuncs.hide()
                    document.body.onmousemove = (e) => {
                        ""
                    }
                }
        }
    }

}

function pathresizeHandler(event, left = false, top = false, xResize = false, yResize = false) {
    // initY = boxsWrapper.offsetTop;
    var element = getactiveel()

    initY = transformFunc.getValue(element).positionY + transformFunc.getValue(element).height / 2;
    initX = transformFunc.getValue(element).positionX + transformFunc.getValue(element).width / 2;
    // initX = boxWrapper.offsetLeft;
    mousePressX = event.clientX;
    mousePressY = event.clientY;

    initW = transformFunc.getValue(element).width;
    initH = transformFunc.getValue(element).height;

    initRotate = getCurrentRotation(element);
    var initRadians = initRotate * Math.PI / 180;
    var cosFraction = Math.cos(initRadians);
    var sinFraction = Math.sin(initRadians);
    // console.log('initRadians', initRadians)
    // console.log('cosFraction', cosFraction)
    // console.log('sinFraction', sinFraction)

    function eventMoveHandler(event) {
        var wDiff = (event.clientX - mousePressX);
        var hDiff = (event.clientY - mousePressY);
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
        transformFunc.updateValue(element, 'width', newW)
        transformFunc.updateValue(element, 'height', newH)
        transformFunc.updateValue(element, 'position-x', newX - transformFunc.getValue(element).width / 2)
        transformFunc.updateValue(element, 'position-y', newY - transformFunc.getValue(element).height / 2)
        activeel_size_handler.position(getactiveel())
    }

    window.addEventListener('mousemove', eventMoveHandler, false);
    window.addEventListener('mousemove', UpdateTransformStyleDiv, false);
    window.addEventListener('mouseup', function eventEndHandler() {
        window.removeEventListener('mousemove', eventMoveHandler, false);
        window.removeEventListener('mousemove', UpdateTransformStyleDiv, false);
        window.removeEventListener('mouseup', eventEndHandler);
    })
    
}




activeel_container_rotate_line.style.height = "20px"
export const activeel_size_handler = {

    defaults: {
        distance: 0,
        width: 3,
        area: 40,

    },
    position: function(element) {

        if (element != "" && element != undefined && element != null) {

            for (var el of document.querySelectorAll('.activeel_container')) {
                el.style.display = "grid"
                el.style.transform = "none";
            }
            for (var el of document.querySelectorAll('.size_handler_')) {
                el.style.display = "grid"
                el.style.transform = "none";

            }
            // console.log(element)
            activeel_size_handler.defaults.distance = 0;
            // FOR ALL ABOVE PArt
            if (element.tagName == "IMG" || element.tagName == "DIV" || element.tagName == "foreignObject") {
                // console.log(element)
                setSizeHandler(element)
                activeel_container_rotate_box.onmousedown = (e) => {

                    // initX = getactiveel().offsetLeft;
                    // initY = getactiveel().offsetTop;
                    // mousePressX = event.clientX;
                    // mousePressY = event.clientY;


                    var arrowRects = getactiveel().getBoundingClientRect();
                    var arrowX = arrowRects.left + arrowRects.width / 2;
                    var arrowY = arrowRects.top + arrowRects.height / 2;

                    function eventMoveHandler(event) {
                        var angle = Math.atan2(event.clientY - arrowY, event.clientX - arrowX) + Math.PI / 2;
                        transformFunc.updateValue(getactiveel(), 'rotate', angle * 180 / Math.PI + 'deg')
                        for (el of document.querySelectorAll('.activeel_container')) {
                            el.style.transform = `rotate(${angle * 180 / Math.PI}deg)`
                        }
                        for (el of document.querySelectorAll('.size_handler_')) {
                            el.style.transform = `rotate(${angle * 180 / Math.PI}deg)`
                        }
                    }

                    window.addEventListener('mousemove', eventMoveHandler, false);
                    window.addEventListener('mousemove', UpdateTransformStyleDiv, false);
                    // window.addEventListener('mousemove', activeel_size_handler.position, false)

                    window.addEventListener('mouseup', function eventEndHandler() {
                        window.removeEventListener('mousemove', eventMoveHandler, false);
                        window.removeEventListener('mousemove', UpdateTransformStyleDiv, false);
                        // window.removeEventListener('mousemove', activeel_size_handler.position, false)

                        window.removeEventListener('mouseup', eventEndHandler);
                    }, false);
                }
                size_handler_mid_right.onmousedown = (e) => { resizeHandler(e, false, false, true, false) };
                size_handler_mid_left.onmousedown = (e) => { resizeHandler(e, true, false, true, false) };
                size_handler_mid_top.onmousedown = (e) => { resizeHandler(e, false, true, false, true) };
                size_handler_mid_bottom.onmousedown = (e) => { resizeHandler(e, false, false, false, true) };
                size_handler_top_left.onmousedown = (e) => { resizeHandler(e, true, true, true, true) };
                size_handler_top_right.onmousedown = (e) => { resizeHandler(e, false, true, true, true) };
                size_handler_bottom_right.onmousedown = (e) => { resizeHandler(e, false, false, true, true) };
                size_handler_bottom_left.onmousedown = (e) => { resizeHandler(e, true, false, true, true) };
            } else if (element.tagName == "path" || element.tagName == "g" || element.tagName == "text") {
                var biggeststroke = []
                if (element.tagName == 'g') {
                    for (var poly of element.children) {
                        if (poly.getAttributeNS(null, 'stroke-width') != null) {
                            biggeststroke.push(parseInt(poly.getAttributeNS(null, 'stroke-width')))
                        }
                    }
                    activeel_size_handler.defaults.distance = activeel_size_handler.defaults.distance + Math.max(...biggeststroke) / 2

                }

                setSizeHandler(element)

                // if (element.tagName == "text") {
                //     for (var el of document.querySelectorAll('.size_handler_')) {
                //         el.style.display = "none"

                //         activeel_container_rotate_box.style.display = "grid"
                //     }
                // }
                activeel_container_rotate_box.onmousedown = (event) => {

                        // initX = getactiveel().parentNode.offsetLeft;
                        // initY = getactiveel().parentNode.offsetTop;
                        mousePressX = event.clientX;
                        mousePressY = event.clientY;



                        var arrowRects = getactiveel().getBoundingClientRect();
                        var arrowX = arrowRects.left + arrowRects.width / 2;
                        var arrowY = arrowRects.top + arrowRects.height / 2;

                        function eventMoveHandler(event) {
                            var angle = Math.atan2(event.clientY - arrowY, event.clientX - arrowX) + Math.PI / 2;
                            transformFunc.updateValue(getactiveel(), 'rotate', angle * 180 / Math.PI + 'deg')
                            for (el of document.querySelectorAll('.activeel_container')) {
                                el.style.transform = `rotate(${angle * 180 / Math.PI}deg)`
                            }
                            for (el of document.querySelectorAll('.size_handler_')) {
                                el.style.transform = `rotate(${angle * 180 / Math.PI}deg)`
                            }
                        }
                        window.addEventListener('mousemove', eventMoveHandler, false);
                        window.addEventListener('mousemove', UpdateTransformStyleDiv, false);

                        window.addEventListener('mouseup', function eventEndHandler() {
                            window.removeEventListener('mousemove', eventMoveHandler, false);
                            window.removeEventListener('mousemove', UpdateTransformStyleDiv, false);

                            window.removeEventListener('mouseup', eventEndHandler);
                        }, false);
                        // 

                    }
                    // !!!!!!!!!!!!!!!!!!!!!ROTAION LISTENER


                size_handler_mid_right.onmousedown = (e) => { pathresizeHandler(e, false, false, true, false) };
                size_handler_mid_left.onmousedown = (e) => { pathresizeHandler(e, true, false, true, false) };
                size_handler_mid_top.onmousedown = (e) => { pathresizeHandler(e, false, true, false, true) };
                size_handler_mid_bottom.onmousedown = (e) => { pathresizeHandler(e, false, false, false, true) };
                size_handler_top_left.onmousedown = (e) => { pathresizeHandler(e, true, true, true, true) };
                size_handler_top_right.onmousedown = (e) => { pathresizeHandler(e, false, true, true, true) };
                size_handler_bottom_right.onmousedown = (e) => { pathresizeHandler(e, false, false, true, true) };
                size_handler_bottom_left.onmousedown = (e) => { pathresizeHandler(e, true, false, true, true) };
            }


        }










    },
    hide: function() {


        for (var el of document.querySelectorAll('.size_handler_')) {
            el.style.display = "none"
        }
        for (var el of document.querySelectorAll('.activeel_container')) {
            el.style.display = "none"
        }

    },
    ChangeStyle: function(json) {
        activeel_container_left.style.borderLeftStyle = json.borderStyle || ''
        activeel_container_right.style.borderLeftStyle = json.borderStyle || ''
        activeel_container_top.style.borderTopStyle = json.borderStyle || ''
        activeel_container_bottom.style.borderTopStyle = json.borderStyle || ''
            // 
        activeel_container_left.style.borderLeftColor = json.borderColor || ''
        activeel_container_right.style.borderLeftColor = json.borderColor || ''
        activeel_container_top.style.borderTopColor = json.borderColor || ''
        activeel_container_bottom.style.borderTopColor = json.borderColor || ''

    }
}
activeel_size_handler.ChangeStyle({ borderColor: '#3f51b5', borderStyle: 'solid' })

var defaults = activeel_size_handler.defaults


function setSizeHandler(element) {
    var element_rotation = transformFunc.getValue(element).rotate
    //console.log(element_rotation)
    transformFunc.updateValue(element, 'rotate', '0')
    var el_x = element.getBoundingClientRect().x
    var el_y = element.getBoundingClientRect().y
    var el_h = element.getBoundingClientRect().height
    var el_w = element.getBoundingClientRect().width

    if (el_h < 100 || el_w < 100) {
        for (var el of size_handler_point_all) {
            el.style.height = "10px"
            el.style.width = "10px"
        }
        for (var el of size_handler_all) {
            el.style.height = "30px"
            el.style.width = "30px"
        }
        activeel_size_handler.defaults.area = 30
    } else {
        for (var el of size_handler_point_all) {
            el.style.height = "15px"
            el.style.width = "15px"
        }
        for (var el of size_handler_all) {
            el.style.height = "40px"
            el.style.width = "40px"
        }
        activeel_size_handler.defaults.area = 40

    }


    size_handler_top_left.style.left = parseInt(activeel_container.style.left) - (activeel_size_handler.defaults.area - activeel_size_handler.defaults.width) / 2 + "px";
    size_handler_top_left.style.top = `${el_y  - defaults.distance - (defaults.area/2)}px`
    size_handler_top_left.style.left = `${el_x  -  defaults.distance - (defaults.area/2)}px`
        // 
    size_handler_top_right.style.top = `${el_y  - defaults.distance - (defaults.area/2)}px`
    size_handler_top_right.style.left = `${el_x  + el_w + defaults.distance - (defaults.area/2) }px`
        // 
    size_handler_bottom_right.style.top = `${el_y + el_h + defaults.distance - (defaults.area/2)}px`
    size_handler_bottom_right.style.left = `${el_x  + el_w + defaults.distance - (defaults.area/2) }px`
        // 
    size_handler_bottom_left.style.top = `${el_y + el_h + defaults.distance - (defaults.area/2)}px`
    size_handler_bottom_left.style.left = `${el_x   - defaults.distance - (defaults.area/2) }px`
        // 

    size_handler_mid_top.style.top = `${el_y  - defaults.distance - (defaults.area/2) - (defaults.width/2)}px`
    size_handler_mid_top.style.left = `${el_x  + (el_w/2)  - (defaults.area/2) }px`
        // 
    size_handler_mid_bottom.style.top = `${el_y + el_h + defaults.distance - (defaults.area/2) + (defaults.width/2)}px`
    size_handler_mid_bottom.style.left = `${el_x  + (el_w/2)  - (defaults.area/2) }px`
        // 
    size_handler_mid_left.style.top = `${el_y  + (el_h/2)  - (defaults.area/2) }px`
    size_handler_mid_left.style.left = `${el_x  -  defaults.distance - (defaults.area/2) - (defaults.width/2)}px`
        // 
    size_handler_mid_right.style.top = `${el_y  + (el_h/2)  - (defaults.area/2)}px`
    size_handler_mid_right.style.left = `${el_x + el_w +  defaults.distance - (defaults.area/2) + (defaults.width/2)}px`

    //   
    activeel_container_top.style.top = `${el_y  - defaults.distance - defaults.width}px`
    activeel_container_top.style.left = `${el_x - defaults.width - defaults.distance}px`
        // activeel_container_top.style.height = '3px'
    activeel_container_top.style.width = el_w + (defaults.distance * 2) + (defaults.width * 2) + 'px'

    activeel_container_bottom.style.top = `${el_y  + el_h + defaults.distance }px`
    activeel_container_bottom.style.left = `${el_x - defaults.width - defaults.distance}px`
        // activeel_container_bottom.style.height = '3px'
    activeel_container_bottom.style.width = el_w + (defaults.distance * 2) + (defaults.width * 2) + 'px'


    activeel_container_left.style.top = `${el_y - defaults.width  - defaults.distance}px`
    activeel_container_left.style.left = `${el_x - defaults.width - defaults.distance}px`
    activeel_container_left.style.height = el_h + (defaults.distance * 2) + (defaults.width * 2) + 'px'
        // activeel_container_left.style.width = '3px'

    activeel_container_right.style.top = `${el_y - defaults.width - defaults.distance}px`
    activeel_container_right.style.left = `${el_x  + el_w + defaults.distance }px`
    activeel_container_right.style.height = el_h + (defaults.distance * 2) + (defaults.width * 2) + 'px'
        // activeel_container_right.style.width = '3px'
    activeel_container_rotate_box.style.top = `${(((el_y - defaults.width) - defaults.distance)) - parseInt(activeel_container_rotate_line.style.height) - (defaults.area/2)}px`
    activeel_container_rotate_box.style.left = `${(el_x + el_w/2)  - defaults.distance - (defaults.area/2)}px`

    // 
    activeel_container_rotate_line.style.top = `${el_y - defaults.width - defaults.distance - parseInt(activeel_container_rotate_line.style.height)}px`
    activeel_container_rotate_line.style.left = `${(el_x + el_w/2) - (defaults.width/2) - defaults.distance }px`
        // 
    activeel_container_rotate_line.style.transformOrigin = `center ${(el_h/2) + defaults.width + defaults.distance + (parseInt(activeel_container_rotate_line.style.height)/2) + 10}px`
    activeel_container_rotate_box.style.transformOrigin = `center ${((((el_h/2) + defaults.width) + defaults.distance)) + parseInt(activeel_container_rotate_line.style.height) + (defaults.area/2)}px`
    activeel_container_right.style.transformOrigin = `${-el_w/2 - defaults.distance}px ${el_h/2 + defaults.width + defaults.distance}px`
    activeel_container_top.style.transformOrigin = `${el_w/2 + defaults.width + defaults.distance}px ${el_h/2 + defaults.width + defaults.distance}px`
    activeel_container_bottom.style.transformOrigin = `${el_w/2 + defaults.width + defaults.distance}px ${-el_h/2 - defaults.distance}px`
    activeel_container_left.style.transformOrigin = `${el_w/2 + defaults.width + defaults.distance}px ${el_h/2 + defaults.width +  defaults.distance}px`
    activeel_container_right.style.transform = `rotate(${element_rotation}deg)`
    activeel_container_top.style.transform = `rotate(${element_rotation}deg)`
    activeel_container_bottom.style.transform = `rotate(${element_rotation}deg)`
    activeel_container_left.style.transform = `rotate(${element_rotation}deg)`
    activeel_container_rotate_line.style.transform = `rotate(${element_rotation}deg)`
    activeel_container_rotate_box.style.transform = `rotate(${element_rotation}deg)`
        //    
    size_handler_top_left.style.transformOrigin = `${el_w/2 + defaults.distance  + (defaults.area/2)}px ${el_h/2 + defaults.distance + (defaults.area/2)}px`
    size_handler_top_right.style.transformOrigin = `${-el_w/2 - defaults.distance  + (defaults.area/2)}px ${el_h/2 + defaults.distance + (defaults.area/2)}px`
    size_handler_bottom_left.style.transformOrigin = `${el_w/2 + defaults.distance + (defaults.area/2) }px ${-el_h/2 - defaults.distance + (defaults.area/2)}px`
    size_handler_bottom_right.style.transformOrigin = `${-el_w/2 - defaults.distance  + (defaults.area/2)}px ${-el_h/2 - defaults.distance + (defaults.area/2)}px`
    size_handler_mid_left.style.transformOrigin = `${el_w/2 + defaults.distance  + (defaults.area/2) + (defaults.width/2)}px ${(defaults.area/2)}px`
    size_handler_mid_right.style.transformOrigin = `${-el_w/2 - defaults.distance  + (defaults.area/2) - (defaults.width/2)}px ${defaults.area/2}px`
    size_handler_mid_bottom.style.transformOrigin = `${(defaults.area/2)}px ${-el_h/2 - defaults.distance + (defaults.area/2) - (defaults.width/2)}px`
    size_handler_mid_top.style.transformOrigin = `${(defaults.area/2)}px ${el_h/2 + defaults.distance + (defaults.area/2) + (defaults.width/2)}px`
    for (el of document.querySelectorAll('.size_handler_')) {
        el.style.transform = `rotate(${element_rotation}deg)`
    }
    transformFunc.updateValue(element, 'rotate', element_rotation)
}









export function DragAndDropListener() {
    var y_extra;
    var x_extra;

    var AE = BoxContainer.elem().querySelector('.appendible_element');

    function DragAboveandDrop() {
        BoxContainer.svg().onmousemove = (e) => {
            for (el of BoxContainer.elem().querySelectorAll("[primary-element-type=Container]")) {
                el.style.outlineWidth = "0px"

            }
            for (el of BoxContainer.elem().querySelectorAll("[primary-element-type=Container]")) {
                var el_x = el.getBoundingClientRect().x
                var el_y = el.getBoundingClientRect().y
                var el_right = el.getBoundingClientRect().right
                var el_bottom = el.getBoundingClientRect().bottom
                var AE_y = AE.getBoundingClientRect().y
                var AE_x = AE.getBoundingClientRect().x
                var AE_right = AE.getBoundingClientRect().right
                var AE_bottom = AE.getBoundingClientRect().bottom
                if ((el_x < e.x) && (el_y < e.y) && (el_right > e.x) && (el_bottom > e.y)) {
                    // console.log(el)
                    el.style.outline = "2px dashed red"
                }
            }
        }
        console.log('apppppenff')
        BoxContainer.svg().onmouseup = (e) => {
            BoxContainer.svg().onmousemove = (e) => {

            }
            console.log('removing event')
            AE.removeEventListener('mousedown', DragAboveandDrop, false)

        }
    }
    AE.addEventListener('mousedown', e => DragAboveandDrop())

}
// AE.ondragstart = (e) => {
//     x_extra = e.x - AE.getBoundingClientRect().left;
//     y_extra = e.y - AE.getBoundingClientRect().top;
// }

// document.querySelectorAll("[primary-element-type=Container]").forEach(function(e) {
//     e.ondrop = (e) => { dropFunc(e) }
//     e.ondragover = (e) => { dragOverFunc(e) }
// })

// function dragOverFunc(e) {
//     e.preventDefault()
//     e.dataTransfer.dropEffect = "move"
// }

//     function dropFunc(e) {
//         e.preventDefault()
//             // var draggableElement = document.querySelector('.yes_drop')
//         AE.draggable = false
//         var dropzoneElement = getparent(e.target, 'primary-element-type', 'Container')


//         if (AE.tagName == 'path') {
//             dropzoneElement.querySelector('svg').append(AE)
//         } else {
//             dropzoneElement.querySelector('[secondary-element-type]').append(AE)
//         }
//         // var div = document.createElement('div');
//         // div.innerHTML = AE.innerHTML;
//         // div.setAttribute('element_name', AE.getAttribute('element_name'))
//         // div.setAttribute('element_groups', AE.getAttribute('element_groups'))
//         // div.setAttribute('element-type', AE.getAttribute('element-type'))
//         // div.setAttribute('style', AE.getAttribute('style'))
//         // div.setAttribute('class', AE.getAttribute('class'))
//         // div.setAttribute('height', AE.getAttribute('height'))
//         // div.setAttribute('width', AE.getAttribute('width'))
//         // transformFunc.defaultTransform(div);
//         // var dzET = dropzoneElement.getBoundingClientRect().top
//         // var dzEL = dropzoneElement.getBoundingClientRect().left
//         //     // var xsp = e.x - draggableElement.getBoundingClientRect()
//         // transformFunc.updateValue(div, 'translateX', `${parseFloat(e.x - x_extra - dzEL)}px`)
//         // transformFunc.updateValue(div, 'translateY', `${parseFloat(e.y - y_extra - dzET)}px`)
//         // div.classList.add('draggable')
//         // dropzoneElement.append(div);
//         // div.classList.remove('appendible_element')
//         // AE.remove()
//         // AE.classList.add('draggable')
//         AE.onmousedown = () => {

//         }
//         transformFunc.updateValue(AE, 'positionX', '0')
//         transformFunc.updateValue(AE, 'positionY', '0')
//             // AE.style.left = '2px'
//             // AE.style.top = '2px'
//         activeelFunction.makeactive(AE)
//         toolboxFuncs.toolbox_moreFuncs.append_child_infoFuncs.hide()
//     }

// }



for (el of document.querySelectorAll('.size_handler_')) {
    el.addEventListener('mousedown', function() {
        activeel_position_divFuncs.position()
    })
    el.addEventListener('mousemove', function() {
        activeel_position_divFuncs.position()
    })
    el.addEventListener('mouseup', function() {
        activeel_position_divFuncs.hide()
    })
}


function getMouseDist(element, size_handler, start_positionx, start_positiony, e) {
    if (size_handler.getBoundingClientRect().x > transformFunc.getValue(element).BoundingcenterX) {
        dx = start_positionx - e.x
    } else {
        dx = e.x - start_positionx

    }
    console.log(parseInt(size_handler.style.top), transformFunc.getValue(element).BoundingcenterY)
    if (size_handler.getBoundingClientRect().y > transformFunc.getValue(element).BoundingcenterY) {
        dy = e.y - start_positiony
        console.log('>')

    } else {
        dy = start_positiony - e.y
        console.log('<')


    }
    console.log(dx, dy)
    return

}


// size_handler_top_right.addEventListener('mousedown', e => resizeHandler(e, false, true, true, true));
// size_handler_top_right

// .onmousemove = (e) => {

//     console.log('kr_diya')
// }
// size_handler_mid_right.onmousedown = (e) => { pathresizeHandler(e, false, false, true, false) };
// size_handler_mid_right.onmousedown = (e) => { gresizeHandler(e, false, false, true, false) };




// size_handler_mid_left.addEventListener('mousedown', e => resizeHandler(e, true, false, true, false));
// size_handler_mid_top.addEventListener('mousedown', e => resizeHandler(e, false, true, false, true));
// size_handler_mid_bottom.onmousedown = (e) => { resizeHandler(e, false, false, false, true) };
// size_handler_top_left.addEventListener('mousedown', e => resizeHandler(e, true, true, true, true));
// size_handler_top_right.addEventListener('mousedown', e => resizeHandler(e, false, true, true, true));
// size_handler_bottom_right.addEventListener('mousedown', e => resizeHandler(e, false, false, true, true));
// size_handler_bottom_left.addEventListener('mousedown', e => resizeHandler(e, true, false, true, true));






// 
function gresizeHandler(event, left = false, top = false, xResize = false, yResize = false) {
    // initY = boxsWrapper.offsetTop;
    mousePressX = event.clientX;
    mousePressY = event.clientY;
    var element = getactiveel()
    console.log("paths", getactiveel().children)


    initY = {}
    initH = {}
    initW = {}
    initX = {}
    for (var i = 0; i < getactiveel().children.length; i++) {
        initY[i] = transformFunc.getValue(element.children[i]).positionY + transformFunc.getValue(element.children[i]).height / 2;
        initX[i] = transformFunc.getValue(element.children[i]).positionX + transformFunc.getValue(element.children[i]).width / 2;

        initW[i] = transformFunc.getValue(element.children[i]).width;
        initH[i] = transformFunc.getValue(element.children[i]).height;
    }

    initRotate = getCurrentRotation(getactiveel());
    var initRadians = initRotate * Math.PI / 180;
    var cosFraction = Math.cos(initRadians);
    var sinFraction = Math.sin(initRadians);
    // console.log('initRadians', initRadians)
    // console.log('cosFraction', cosFraction)
    // console.log('sinFraction', sinFraction)

    function eventMoveHandler(event) {
        for (var i = 0; i < getactiveel().children.length; i++) {
            var wDiff = (event.clientX - mousePressX);
            var hDiff = (event.clientY - mousePressY);
            var rotatedWDiff = cosFraction * wDiff + sinFraction * hDiff;
            var rotatedHDiff = cosFraction * hDiff - sinFraction * wDiff;
            // console.log('rotatedWDiff', rotatedWDiff)
            // console.log('rotatedHDiff', rotatedHDiff)

            var newW = initW[i],
                newH = initH[i],
                newX = initX[i],
                newY = initY[i];

            if (xResize) {
                if (left) {
                    newW = initW[i] - rotatedWDiff;
                    if (newW < minWidth) {
                        newW = minWidth;
                        rotatedWDiff = initW[i] - minWidth;
                    }
                } else {
                    newW = initW[i] + rotatedWDiff;
                    if (newW < minWidth) {
                        newW = minWidth;
                        rotatedWDiff = minWidth - initW[i];
                    }
                }
                newX += 0.5 * rotatedWDiff * cosFraction;
                newY += 0.5 * rotatedWDiff * sinFraction;
            }

            if (yResize) {
                if (top) {
                    newH = initH[i] - rotatedHDiff;
                    if (newH < minHeight) {
                        newH = minHeight;
                        rotatedHDiff = initH[i] - minHeight;
                    }
                } else {
                    newH = initH[i] + rotatedHDiff;
                    if (newH < minHeight) {
                        newH = minHeight;
                        rotatedHDiff = minHeight - initH[i];
                    }
                }
                newX -= 0.5 * rotatedHDiff * sinFraction;
                newY += 0.5 * rotatedHDiff * cosFraction;
            }

            transformFunc.updateValue(element.children[i], 'width', newW)
            transformFunc.updateValue(element.children[i], 'height', newH)

            // repositionElement(newX, newY);
            // transformFunc.updateValue(element.children[i], 'positionX', newX - transformFunc.getValue(element.children[i]).width / 2)
            // transformFunc.updateValue(element.children[i], 'positionY', newY - transformFunc.getValue(element.children[i]).height / 2)
        }
    }

    window.addEventListener('mousemove', eventMoveHandler, false);
    window.addEventListener('mouseup', function eventEndHandler() {
        window.removeEventListener('mousemove', eventMoveHandler, false);
        window.removeEventListener('mouseup', eventEndHandler);
    })

}