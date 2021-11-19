const active_holder = document.querySelector('#active_holder')
const size_handlers = document.querySelectorAll('.size_handler')
const size_handler_top_right = document.querySelector('#size_handler-top-right');
const size_handler_mid_right = document.querySelector('#size_handler-mid-right');
const size_handler_bottom_right = document.querySelector('#size_handler-bottom-right');
const size_handler_top_left = document.querySelector('#size_handler-top-left');
const size_handler_bottom_left = document.querySelector('#size_handler-bottom-left');
const size_handler_mid_left = document.querySelector('#size_handler-mid-left');
const size_handler_mid_top = document.querySelector('#size_handler-mid-top');
const size_handler_mid_bottom = document.querySelector('#size_handler-mid-bottom');

active_holder.style.display = "none";
for (el of size_handlers) {
    el.style.display = "none";
}



active_holder.style.display = "none";
active_holder.style.height = `${getactiveel().getBoundingClientRect().bottom - getactiveel().getBoundingClientRect().top + 20}px`
active_holder.style.width = `${getactiveel().getBoundingClientRect().right - getactiveel().getBoundingClientRect().left + 20}px`
active_holder.style.top = `${getactiveel().getBoundingClientRect().top - 10}px`
active_holder.style.left = `${getactiveel().getBoundingClientRect().left - 10}px`
active_holder.setAttribute('data-x', `${getactiveel().getBoundingClientRect().left - 10}`)
active_holder.setAttribute('data-y', `${getactiveel().getBoundingClientRect().top - 10}`)

for (el of size_handlers) {
    el.style.display = "none";
}
size_handler_mid_right.style.top = `${active_holder.getBoundingClientRect().top + parseInt(window.getComputedStyle(active_holder).getPropertyValue('height')) /100 * 50}px`
size_handler_mid_right.style.left = `${active_holder.getBoundingClientRect().right - 8}px`

// 
size_handler_top_right.style.top = `${active_holder.getBoundingClientRect().top - 8}px`
size_handler_top_right.style.left = `${active_holder.getBoundingClientRect().right - 8 }px`

// 
size_handler_bottom_right.style.top = `${active_holder.getBoundingClientRect().bottom - 8}px`
size_handler_bottom_right.style.left = `${active_holder.getBoundingClientRect().right - 8}px`
    // 
size_handler_top_left.style.top = `${active_holder.getBoundingClientRect().top - 8}px`
size_handler_top_left.style.left = `${active_holder.getBoundingClientRect().left -8}px`
    // 
size_handler_bottom_left.style.left = `${active_holder.getBoundingClientRect().left -8}px`
size_handler_bottom_left.style.top = `${active_holder.getBoundingClientRect().bottom -8}px`
    // 
size_handler_mid_left.style.left = `${active_holder.getBoundingClientRect().left - 8}px`
size_handler_mid_left.style.top = `${active_holder.getBoundingClientRect().top + parseInt(window.getComputedStyle(active_holder).getPropertyValue('height')) /100 * 50}px`
    // 
size_handler_mid_top.style.left = `${active_holder.getBoundingClientRect().left + parseInt(window.getComputedStyle(active_holder).getPropertyValue('width')) /100 * 50}px`
size_handler_mid_top.style.top = `${active_holder.getBoundingClientRect().top - 8}px`
    // 
size_handler_mid_bottom.style.left = `${active_holder.getBoundingClientRect().left + parseInt(window.getComputedStyle(active_holder).getPropertyValue('width')) /100 * 50}px`
size_handler_mid_bottom.style.top = `${active_holder.getBoundingClientRect().bottom  - 8}px`



// !!!!!!!!!!!!!!1SVG
// svg.ontouchstart = (e) => {
//     var poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
//     svg.append(poly)
//     var axis = ""
//     svg.ontouchmove = (e) => {
//         axis = axis.concat(` ${e.touches[0].clientX - box.getBoundingClientRect().left},${e.touches[0].clientY-box.getBoundingClientRect().top}`)
//         poly.setAttributeNS(null, "points", axis)
//         poly.setAttributeNS(null, "fill", "url(#pattern_lY0t24)")

//     }
// }
// svg.onmousedown = (e) => {
//     var poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
//     // var poly = document.createElementNS('http://www.w3.org/2000/svg', 'line');
//     // var poly = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
//     // var poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
//     // var poly = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//     // var poly = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
//     svg.append(poly)
//     var axis = ""
//         // console.log('mousedown')
//         // poly.id = "lol"
//         // poly.setAttribute('style', 'fill:white;stroke:red;stroke-width:4');
//     poly.setAttribute('stroke-width', '2')
//         // poly.style.pointerEvents = "all"
//         // poly.style.strokeWidth = "2"
//     var start_point = e.x
//     var start_point_ = e.y

//     svg.onmousemove = (e) => {
//         axis = axis.concat(` ${e.x - box.getBoundingClientRect().left},${e.y-box.getBoundingClientRect().top}`)
//         poly.setAttributeNS(null, "points", axis)
//             // poly.setAttributeNS(null, "fill", "url(#img1)")
//             // poly.setAttributeNS(null, "fill", "url(#pattern_l2uQ)")
//             // setTimeout(() => {
//             //     poly.setAttributeNS(null, "fill", "url(#pattern_lY0t24)")

//         // }, 1000);
//         // poly.setAttributeNS(null, "fill", "transparent")
//         poly.classList.add('draggable')
//             // poly.setAttributeNS(null, "fill", "url(#pattern_lY0t24)")
//         poly.setAttributeNS(null, "x", start_point - box.getBoundingClientRect().left)
//         poly.setAttributeNS(null, "y", start_point_ - box.getBoundingClientRect().top)
//             // poly.setAttributeNS(null, "x1", start_point - box.getBoundingClientRect().left)
//             // poly.setAttributeNS(null, "y1", start_point_ - box.getBoundingClientRect().top)
//             // console.log(start_point, start_point_)
//             // poly.setAttributeNS(null, "cx", start_point - box.getBoundingClientRect().left)
//             // poly.setAttributeNS(null, "cy", start_point_ - box.getBoundingClientRect().top)
//             // poly.setAttributeNS(null, "r", e.x - start_point || start_point - e.x)
//         if (e.x - start_point < 0) {
//             var pos_x = start_point - e.x;
//         } else {
//             var pos_x = e.x - start_point
//         }
//         if (e.y - start_point_ < 0) {
//             var pos_y = start_point_ - e.y;
//         } else {
//             var pos_y = e.y - start_point_
//         }
//         // poly.setAttributeNS(null, "x2", e.x - box.getBoundingClientRect().left)
//         // poly.setAttributeNS(null, "y2", e.y - box.getBoundingClientRect().top)
//         // var pos_x
//         // poly.setAttributeNS(null, "rx", pos_x)
//         // poly.setAttributeNS(null, "ry", pos_y)
//         poly.setAttributeNS(null, "stroke-width", "5")
//             // poly.setAttributeNS(null, "stroke-width", "5")
//         poly.setAttributeNS(null, 'stroke', 'url(#img1)');
//         // poly.setAttributeNS(null, 'filter', 'blur(3px)');
//         poly.setAttributeNS(null, 'fill-rule', 'nonzero');
//         poly.setAttributeNS(null, 'fill', 'transparent');
//         // poly.setAttributeNS(null, 'clip-path', 'url(#myClip)');
//         // poly.setAttributeNS(null, 'mask', 'url(#myMask)');
//         // poly.setAttributeNS(null, 'stroke-dasharray', '3 1');
//         // poly.setAttributeNS(null, 'stroke-dashoffset', '-3');
//         //     =""
//         // =""
//         // poly.setAttributeNS(null, "height", e.y - start_point_)
//         // poly.setAttributeNS(null, "width", e.x - start_point)
//         // poly.points = axis
//         // console.log('mousemove')
//     }

// }


//     }
// !!!SVG!!!!!!!!!!!!!!!!!!!!!!!!
















// DIV FUNCFIONT

// ! DIV FUNCTIONS///////////////////////////////////////////
function div_functions() {
    var div_modal_trigger = document.querySelectorAll('.div_modal_trigger');
    for (el of div_modal_trigger) {
        el.onclick = (e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'block';
        }
    }

    var show_modal_btn = document.querySelectorAll('.show_modal_btn');
    for (el of show_modal_btn) {
        el.addEventListener('click', function() {
            for (el of div_modal_trigger) {
                this.parentNode.style.display = 'none';
                // this.parentNode.style.height = el.offsetHeight;
                this.parentNode.previousElementSibling.style.display = "block";

                // el.style.display = 'block';
                // // el.style.height = "fit-content"
            }
        })

    }

    // ! COLLAPSEABLE
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {

        coll[i].addEventListener("click", function() {
            // this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }


    // var content_hide_show = document.querySelectorAll('.content_hide_show');
    const down_up_trigger = document.querySelectorAll('.down_up_trigger');
    // let hide;

    for (el of down_up_trigger) {
        if (hide) {
            el.addEventListener('click', function() {
                var always_Show = this.parentElement
                always_Show.parentElement.style.height = 'fit-content'
                hide = false;

            })
        } else {
            el.addEventListener('click', function() {
                var always_Show = this.parentElement
                always_Show.parentElement.style.height = this.parentElement.offsetHeight + 'px'

                hide = true;
            })
        }
    }
}






// FUNCTIONS!!!!!!!!!!!!!!!
//?FUNCTION_DIV_SEETTING
var trigerer_add = document.querySelectorAll(".trigerer_add");
for (el of trigerer_add) {
    el.onclick = (e) => {
        var delete_trigerer = document.createElement('span');
        delete_trigerer.classList.add("material-icons");
        delete_trigerer.innerText = "clear";
        delete_trigerer.style.transform = "translate(2px, -4px)"
        delete_trigerer.style.fontSize = "21px"
        var trigerer_input = document.createElement('select');
        trigerer_input.classList.add("border", 'two_grid', 'trigerer_name')
        trigerer_input.style.marginLeft = "-1vw"
        var opt = document.createElement('option');
        opt.innerText = "Don";
        trigerer_input.append(opt)
        e.target.parentNode.insertBefore(trigerer_input, e.target)
        e.target.parentNode.insertBefore(delete_trigerer, trigerer_input)

    }
}
var effectors_add = document.querySelectorAll(".effectors_add");
for (var el of effectors_add) {
    el.onclick = (e) => {
        var delete_trigerer = document.createElement('span');
        delete_trigerer.classList.add("material-icons");
        delete_trigerer.innerText = "clear";
        delete_trigerer.style.transform = "translate(2px, -4px)"
        delete_trigerer.style.fontSize = "21px"
        var effectors_input = document.createElement('select');
        effectors_input.classList.add("border", 'two_grid', 'trigerer_name')
        effectors_input.style.marginLeft = "-1vw"
        var opt = document.createElement('option');
        opt.innerText = "Don";
        effectors_input.append(opt)
        e.target.parentNode.insertBefore(effectors_input, e.target)
        e.target.parentNode.insertBefore(delete_trigerer, effectors_input)
    }
}




// CSS
function css_styling(selector, dict) {
    var elements = document.querySelectorAll(selector);

    for (var element of elements) {
        for (var key in dict) {
            element.style[key] = dict[key];
        }

    }
}


// 
function correct_value() {
    var inputs = document.querySelectorAll('input');
    for (var input of inputs) {
        if (input.classList.contains('px')) {
            input.addEventListener('input', function() {
                // console.log(this.value)
                this.setAttribute('value', `${this.value}px`)
                    // console.log(this.getAttribute('value'))
            })
        } else if (input.classList.contains('colorpicker')) {
            input.setAttribute('value', "#000000")
            input.addEventListener('input', function() {
                // console.log(this.value)
                var hex_color = tinycolor(this.value).toHexString();
                this.setAttribute('value', hex_color)
                    // console.log(this.getAttribute('value'))
            })
        }
    }
}


//  !DIV NOT IN USE
// var add_databox = document.querySelector("#Add_databox")
// var add_slide = document.querySelector("#Add_slide")
// if (getactiveel().classList.contains("slider")) {
//     add_slide.style.display = "block"
//     add_slide.onclick = () => {
//         var slider = getactiveel()
//         var real_slide = document.querySelector(".slide");
//         var slide = real_slide.cloneNode(true)
//         slide.classList.remove('active_slide')
//         slider.insertBefore(slide, slider.lastElementChild)
//         slide.innerText = "New slide " + `${slider.childElementCount-3}`
//             // console.log(slider.lastElementChild)
//     }
// } else {
//     add_slide.style.display = "none"
// }
// if (getactiveel().classList.contains("datagrp")) {
//     add_databox.style.display = "block"
//     add_databox.onclick = () => {
//         var real_datagrp_btn = document.querySelector(".datagrp_btn")
//         var datagrp_btn = real_datagrp_btn.cloneNode('true')
//         var real_datagrp_content = document.querySelector(".datagrp_content")
//         var datagrp_content = real_datagrp_content.cloneNode('true');
//     }
// } else {
//     add_databox.style.display = "none"
// }
// !!!!!!!!!!!!!!!!!!!

// var webkitTextStrokeWidth =
    //   styleDiv.querySelector("[style-attr=-webkit-text-stroke-width]").value +
    //   "px";
    // var webkitTextStrokeColor = styleDiv.querySelector(
    //   "[style-attr=-webkit-text-stroke-color]",
    // ).value;
    
    // var fontFamily =
    //   styleDiv.querySelector("[style-attr=font-family]").value || "arial";

    // var fontSize =
    //   styleDiv.querySelector("[style-attr=font-size]").value + "px";
    // var color = styleDiv.querySelector("[style-attr=color]").value;
    // var lineHeight =
    //   styleDiv.querySelector("[style-attr=line-height]").value + "px";
    // var wordSpacing =
    //   styleDiv.querySelector("[style-attr=word-spacing]").value + "px";
    // var letterSpacing =
    //   styleDiv.querySelector("[style-attr=letter-spacing]").value + "px";
    // var webkitTextStrokeWidth =
    //   styleDiv.querySelector("[style-attr=-webkit-text-stroke-width]").value +
    //   "px";
    // var webkitTextStrokeColor = styleDiv.querySelector(
    //   "[style-attr=-webkit-text-stroke-color]",
    // ).value;
    // var paddingLeft =
    //   styleDiv.querySelector("[style-attr=padding-left]").value + "px";
    // var paddingRight =
    //   styleDiv.querySelector("[style-attr=padding-right]").value + "px";
    // var paddingTop =
    //   styleDiv.querySelector("[style-attr=padding-top]").value + "px";
    // var paddingBottom =
    //   styleDiv.querySelector("[style-attr=padding-bottom]").value + "px";
    // var texttag = getactiveel().children[0]
    // console.log(texttag.getBoundingClientRect().height, parseInt(getactiveel().style.height))
    // if (parseInt(getactiveel().style.height) < texttag.getBoundingClientRect().height) {
    //     console.log(getactiveel().texttag)
    //     getactiveel().style.height = texttag.getBoundingClientRect().height + parseInt(window.getComputedStyle(getactiveel()).getPropertyValue('padding-top')) + parseInt(window.getComputedStyle(getactiveel()).getPropertyValue('padding-bottom')) + "px"
    // }
    // if (parseInt(getactiveel().style.width) < texttag.getBoundingClientRect().width) {
    //     getactiveel().style.width = texttag.getBoundingClientRect().width + parseInt(window.getComputedStyle(getactiveel()).getPropertyValue('padding-left')) + parseInt(window.getComputedStyle(getactiveel()).getPropertyValue('padding-right')) + "px"
    // }
    // getactiveel().style.fontSize = styleDiv.querySelector('[style-attr=font-size]').value + 'px';
    // getactiveel().style.color = styleDiv.querySelector('[style-attr=color]').value;
    // getactiveel().style.lineHeight = styleDiv.querySelector('[style-attr=line-height]').value + 'px';
    // getactiveel().style.wordSpacing = styleDiv.querySelector('[style-attr=word-spacing]').value + "px";
    // getactiveel().style.letterSpacing = styleDiv.querySelector('[style-attr=letter-spacing]').value + "px";
    // getactiveel().style.webkitTextStrokeWidth = styleDiv.querySelector('[style-attr=-webkit-text-stroke-width]').value + "px";
    // getactiveel().style.webkitTextStrokeColor = styleDiv.querySelector('[style-attr=-webkit-text-stroke-color]').value;
    // getactiveel().style.paddingLeft = styleDiv.querySelector('[style-attr=padding-left]').value + 'px';
    // getactiveel().style.paddingRight = styleDiv.querySelector('[style-attr=padding-right]').value + 'px';
    // getactiveel().style.paddingTop = styleDiv.querySelector('[style-attr=padding-top]').value + 'px';
    // getactiveel().style.paddingBottom = styleDiv.querySelector('[style-attr=padding-bottom]').value + 'px';
    // getactiveel().style.fontFamily = styleDiv.querySelector('[style-attr=font-family]').value || 'arial';


    //?????
    // if (prop == "rotate") {
      //   // var old_val = element.getAttributeNS(null, 'transform').split('rotate(')[1].split(')')[0]
      //   // var set_null_t = element.getAttributeNS(null, 'transform').replace(`rotate(${old_val})`, `rotate(0 0 0)`)
      //   // element.setAttributeNS(null, 'transform', set_null_t)

      //   var pos_x = element.getBoundingClientRect().x -BoxContainer.elem().getBoundingClientRect().x + element.getBoundingClientRect().width / 2;
      //   var pos_y = element.getBoundingClientRect().y - BoxContainer.elem().getBoundingClientRect().y + element.getBoundingClientRect().height / 2;
      //   // var new_transformation = element.getAttributeNS(null, 'transform').replace(`rotate(0 0 0)`, `rotate(${parseFloat(value) || 0} ${pos_x} ${pos_y})`)
      //   // element.setAttributeNS(null, 'transform', new_transformation)
      //   // !!!
      //   var pathel = BoxContainer.svg().querySelector(`#${element.children[0].getAttribute("textpath")}`,);

      //   // var element = pathel
      //   // transformFunc.updateValue(pathel, prop, value)
      //   // var old_val = pathel.getAttributeNS(null, 'transform').split('rotate(')[1].split(')')[0]
      //   // var set_null_t = pathel.getAttributeNS(null, 'transform').replace(`rotate(${old_val})`, `rotate(0 0 0)`)
      //   // pathel.setAttributeNS(null, 'transform', set_null_t)
      //   pathel.setAttribute("d", SVGPath(pathel.getAttribute("d")).rotate(value || 0, pos_x, pos_y).abs().toString(),
      //   );
      //   // var pos_x = (element.getBoundingClientRect().x - BoxContainer.elem().getBoundingClientRect().x) + (element.getBoundingClientRect().width / 2)
      //   // var pos_y = (element.getBoundingClientRect().y - BoxContainer.elem().getBoundingClientRect().y) + (element.getBoundingClientRect().height / 2)
      //   // var new_transformation = pathel.getAttributeNS(null, 'transform').replace(`rotate(0 0 0)`, `rotate(${parseFloat(value) || 0} ${pos_x} ${pos_y})`)
      //   // pathel.setAttributeNS(null, 'transform', new_transformation)
      // } else {
      //   var pathel = BoxContainer.svg().querySelector(
      //     `#${element.children[0].getAttribute("textpath")}`,
      //   );
      //   transformFunc.updateValue(pathel, prop, value);
      // }
      if (prop = 'position-y') {
        console.log('y')
        var rot_value = transformFunc.getValue(element).rotate
        var old_val = element.getAttributeNS(null, 'transform').split('rotate(')[1].split(')')[0]
        var set_null_t = element.getAttributeNS(null, 'transform').replace(`rotate(${old_val})`, `rotate(0 0 0)`)
        element.setAttributeNS(null, 'transform', set_null_t)
        var prev_pos_y = transformFunc.getValue(element).positionY;
        var translatedy = parseInt(element.getAttribute('translate-y')) || 0;
        var new_trans = parseInt(value) - (prev_pos_y - translatedy)
        var opp_trans = parseInt(element.getAttribute('translate-x')) || 0;

        element.setAttributeNS(null, 'transform', `translate(${opp_trans} ${new_trans}) rotate(${0} ${0} ${0}) translate(${0} ${0}) skewX(${0}) translate(${-0} -${-0}) translate(${0} ${0}) skewY(${0}) translate(-${0} -${0}) translate(${0} ${0}) scale(${1} ${1}) translate(-${0} -${0})`)
        element.setAttribute('translate-y', new_trans)
        transformFunc.updateValue(element, 'rotate', rot_value)
            // var pathel = BoxContainer.svg().querySelector(`#${element.children[0].getAttribute('textpath')}`)
            // transformFunc.updateValue(pathel, prop, value)
    }
    else if (prop = 'position-x') {
        console.log('x')
        var rot_value = transformFunc.getValue(element).rotate
        var old_val = element.getAttributeNS(null, 'transform').split('rotate(')[1].split(')')[0]
        var set_null_t = element.getAttributeNS(null, 'transform').replace(`rotate(${old_val})`, `rotate(0 0 0)`)
        element.setAttributeNS(null, 'transform', set_null_t)
        var prev_pos_x = transformFunc.getValue(element).positionX;
        var translatedx = parseInt(element.getAttribute('translate-x')) || 0;
        var new_trans = parseInt(value) - (prev_pos_x - translatedx)
        var opp_trans = parseInt(element.getAttribute('translate-y')) || 0;
        element.setAttributeNS(null, 'transform', `translate(${new_trans} ${opp_trans}) rotate(${0} ${0} ${0}) translate(${0} ${0}) skewX(${0}) translate(${-0} -${-0}) translate(${0} ${0}) skewY(${0}) translate(-${0} -${0}) translate(${0} ${0}) scale(${1} ${1}) translate(-${0} -${0})`)
        element.setAttribute('translate-x', new_trans)
        transformFunc.updateValue(element, 'rotate', rot_value)
            // var pathel = BoxContainer.svg().querySelector(`#${element.children[0].getAttribute('textpath')}`)
            // transformFunc.updateValue(pathel, prop, value)
    }
    // console.log('end')