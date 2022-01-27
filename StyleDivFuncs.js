import { TextStyleDiv, BorderStyleDiv, BorderStyleSelect } from "./components.js";
import { SetMinMaxRangeInput } from "./SetMinMaxRangeInput.js";
import { InteractElement } from "./InteractElement.js"



const MDStyleDiv = document.querySelector('#divbar_style');
const MDTextStyleDiv = document.querySelector('#Style_div-TextStyles');
const MDBorderStyleDiv = document.querySelector('#Style_div-BorderStyles');
const MDTransformStyleDiv= document.querySelector('#Style_div-TransformStyles');
const InteractStyleDivs = {
    TextStyleDiv: function () {
        return document.querySelector("")
    }
}

export function UpdateRangeInpStyle(elem, value) {
    elem.value = value
    console.log(elem.min)
    // if(parseInt(elem.min) < 0){
    //     console.log(elem.min)
    var percent = (elem.value - elem.min) / (elem.max - elem.min) * 100
    // }else{
    //     console.log(elem.min)
    // var percent = (elem.value - elem.min || 0) / (elem.max || 100 - elem.min||0) * 100
    // }
    elem.style.background = 'linear-gradient(to right, #191e2b 0%, rgb(15 34 60)' + percent + '%, #fff ' + percent + '%, white 100%)'
}

const InteractCreateSubDivs = {
    CreateRangeValueDiv: function (json) {
        var div = document.createElement('div');
        div.classList.add('divninput');

        if (json.suffex == undefined && json.incdec == undefined && json.icon != undefined) {
            div.innerHTML = `<div class="rangeinputdiv iconntextnval"> ${json.icon} <span class="">${json.prop}</span> <div class="range_value_Cont" > <span class="range_value_add">+</span> <span class="range_value_minus">-</span> <input class="range_value" type="number"  value="${parseFloat(json.val)}"></div></div>`
        } else if (json.suffex == undefined && json.icon != undefined) {
            div.innerHTML = `<div class="rangeinputdiv iconntextnsignnval">${json.icon} <span>${json.prop}</span> <span class="math_sign">${json.incdec}</span> <div class="range_value_Cont" > <span class="range_value_add">+</span> <span class="range_value_minus">-</span> <input class="range_value" type="number"  value="${parseFloat(json.val)}"></div></div>`
        } else if (json.icon == undefined && json.suffex == undefined && json.incdec == undefined) {
            div.innerHTML = `<div class="rangeinputdiv textnval"> <span>${json.prop}</span> <div class="range_value_Cont" > <span class="range_value_add">+</span> <span class="range_value_minus">-</span> <input class="range_value" type="number"  value="${parseFloat(json.val)}"></div></div>`
        } else if (json.icon == undefined && json.incdec == undefined) {
            div.innerHTML = `<div class="rangeinputdiv textnvalntext"> <span>${json.prop}</span> <div class="range_value_Cont" > <span class="range_value_add">+</span> <span class="range_value_minus">-</span> <input class="range_value" type="number"  value="${parseFloat(json.val)}"></div> <span>${json.suffex}</span> </div>`
        } else if (json.icon == undefined && json.suffex == undefined) {
            div.innerHTML = `<div class="rangeinputdiv textnsignnval"> <span>${json.prop}</span> <span class="math_sign">${json.incdec}</span> <div class="range_value_Cont" > <span class="range_value_add">+</span> <span class="range_value_minus">-</span> <input class="range_value" type="number"  value="${parseFloat(json.val)}"></div></div>`
        } else if (json.icon == undefined) {
            div.innerHTML = `<div class="rangeinputdiv textnsignnvalnsuffex"> <span>${json.prop}</span> <span class="math_sign">${json.incdec}</span> <div class="range_value_Cont" > <span class="range_value_add">+</span> <span class="range_value_minus">-</span> <input class="range_value" type="number"  value="${parseFloat(json.val)}"></div> <span>${json.suffex}</span></div>`
        } else if (json.incdec == undefined) {
            div.innerHTML = `<div class="rangeinputdiv iconntextnvalnsuffex"> ${json.icon} <span class="">${json.prop}</span> <div class="range_value_Cont" > <span class="range_value_add">+</span> <span class="range_value_minus">-</span> <input class="range_value" type="number"  value="${parseFloat(json.val)}"></div><span class="suffex">${json.suffex}</span></div>`
        }


        div.querySelector('.range_value_Cont').addEventListener("mouseover", function () {
            this.style.position = "absolute"
            this.style.right = "0"
            this.style.width = "60%"
            div.querySelector('.range_value_add').style.display = "block"
            div.querySelector('.range_value_minus').style.display = "block"
        })

        div.querySelector('.range_value_Cont').addEventListener("mouseleave", function () {
            div.querySelector('.range_value_add').style.display = "none"
            div.querySelector('.range_value_minus').style.display = "none"
            this.style.position = "relative"
            this.style.right = ""
            this.style.width = "100%"
        })

        var input = document.createElement('input');
        input.type = 'range'
        input.value = json.val
        div.append(input)

        if (json.attr != undefined) {
            div.setAttribute(json.attr, json.attrval)
        }


        var range_value = div.querySelector('.range_value')
        var range_value_slider = div.querySelector('input[type="range"]')
        SetMinMaxRangeInput(div, json.prop || "")
        // ?????? add_tbn
        var timer;
        function continuosincerment() {
            var value = parseFloat(range_value.value) + 1
            range_value.value = value
            div.click()
            timer = setTimeout(continuosincerment, 50);
            UpdateRangeInpStyle(range_value_slider, value)
            
        }
        function timeoutClear() {
            clearTimeout(timer);
        }


        div.querySelector('.range_value_add').addEventListener('mousedown', continuosincerment);
        div.querySelector('.range_value_add').addEventListener('mouseup', timeoutClear);
        div.querySelector('.range_value_add').addEventListener('mouseleave', timeoutClear);
        range_value.contentEditable = true
        range_value.addEventListener('input', function () {
            UpdateRangeInpStyle(range_value_slider, this.value)
        })

        // ????MINUS BTN1 
        var timer;
        function continuosdecerment() {
            var value = parseFloat(range_value.value) - 1
            range_value.value = value
            UpdateRangeInpStyle(range_value_slider, value)
            div.click()
            timer = setTimeout(continuosdecerment, 50);
        }
        function timeoutClear() {
            clearTimeout(timer);
        }

        // })
        div.querySelector('.range_value_minus').addEventListener('mousedown', continuosdecerment);

        div.querySelector('.range_value_minus').addEventListener('mouseup', timeoutClear);

        div.querySelector('.range_value_minus').addEventListener('mouseleave', timeoutClear);
        range_value_slider.addEventListener('input', function () {
            UpdateRangeInpStyle(this, this.value)
            this.parentNode.querySelector('.range_value').value = this.value
        }) 
        SetMinMaxRangeInput(div)

        UpdateRangeInpStyle(range_value_slider, range_value_slider.value)
        // ModifyRangeInput({parentEl:div})

        // try{
            //SetMinMaxRangeInput(div)
        //setmaxminForinput({div,json.prop || "" })
        // catch(Err){

        // }

        return div
    },
    SetRangeValueDiv:function (div,value) {
        UpdateRangeInpStyle(div,value);
        div.querySelector(`input[type=number]`).value = value

    },
    CreateColorValueDiv: function (json) {
        var div = document.createElement('div');
        div.classList.add('divninput_not_hover');


        div.innerHTML = `<div class="rangeinputdiv iconntextnval"> ${json.icon} <span class="">${json.prop}</span> <input class="" type="color"  value="${parseFloat(json.val)}"></div>`
        return div
    },
    //!!!!!!!!!!!!!!!!!
    CreateBorderStyleSubDiv: function (icon, attr) {
        var div = document.createElement('div');
        div.innerHTML = `<span> ${icon} </span>`
        div.classList.add('borderstyledivstyle')
        var select = BorderStyleSelect.cloneNode(true)
        select.setAttribute('style-attr',`border${attr}Style`)
        div.append(select);
        var numinp = document.createElement('input');
        numinp.setAttribute('style-attr',`border${attr}Width`)
        var colinp = document.createElement('input');
        colinp.setAttribute('style-attr',`border${attr}Color`)
        numinp.type = 'number'
        colinp.type = 'color'
        numinp.classList.add('dark-num-inp');
        div.append(numinp)
        div.append(colinp)
        return div
    }
}


const InteractCreateStyleDivs = {
    CreateTextStyleDiv: function () {
        var styleDiv = TextStyleDiv.cloneNode(true);

        // EVENTLIST
        //customrangeinput(styleDiv);
        styleDiv.querySelector("[style-attr=font-family]").addEventListener("input", function () {
            this.style.fontFamily = this.value;
        });

        // for (el of styleDiv.querySelector("[style-attr=font-family]").children) {
        //   el.style.fontFamily = el.value;
        //   el.style.border = "1px black solid";
        // }
        styleDiv.append(InteractCreateSubDivs.CreateColorValueDiv({ prop: "stroke-color", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "-webkit-text-stroke-width" }))
        styleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "text-stroke", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "-webkit-text-stroke-width" }))
        styleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "Line-height", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "line-height" }))
        styleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "letter-spacing", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "letter-spacing" }))
        styleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "word-spacing", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "word-spacing" }))
        styleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "padding-right", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "padding-right" }))
        styleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "padding-left", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "padding-left" }))
        styleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "padding-top", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "padding-top" }))
        styleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "padding-bottom", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "padding-bottom" }))
        return styleDiv;
    },
    CreateBorderStyleDiv: function () {
        var styleDiv = BorderStyleDiv.cloneNode(true);
        var same_div = styleDiv.querySelector(".same_borders_div")
        var diff_div = styleDiv.querySelector(".diff_borders_div")
        diff_div.append(InteractCreateSubDivs.CreateBorderStyleSubDiv(`<i class="bi bi-border-top"></i>`, 'Top'))
        diff_div.append(InteractCreateSubDivs.CreateBorderStyleSubDiv(`<i class="bi bi-border-left"></i>`, 'Left'))
        diff_div.append(InteractCreateSubDivs.CreateBorderStyleSubDiv(`<i class="bi bi-border-right"></i>`, 'Right'))
        diff_div.append(InteractCreateSubDivs.CreateBorderStyleSubDiv(`<i class="bi bi-border-bottom"></i>`, 'Bottom'))
        
        //
        same_div.append(InteractCreateSubDivs.CreateBorderStyleSubDiv(`<i class="bi bi-border"></i>`,''))

        styleDiv
            .querySelector("input[type=checkbox]")
            .addEventListener("input", function () {
                if (this.checked) {
                    styleDiv.querySelector(".diff_borders_div").style.display = "none";
                    styleDiv.querySelector(".same_borders_div").style.display = "grid";
                } else {
                    styleDiv.querySelector(".diff_borders_div").style.display = "grid";
                    styleDiv.querySelector(".same_borders_div").style.display = "none";
                }
            });
        return styleDiv;
    },
    CreateTransformStyleDiv: function () {
        var TransformStyleDiv = document.createElement('div');
        TransformStyleDiv.setAttribute('StyleDivFor', 'TransformStyleDiv');
        TransformStyleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "Height", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "height" }))
        TransformStyleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "Width", val: 0, icon: `<i class="bi bi-arrows-expand" style="transform: rotate(90deg);"></i>`, attr: "Main-style", attrval: "width" }))
        TransformStyleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "Position", val: 0, icon: `<i class="bi bi-arrow-left-right"></i>`, suffex: "X", attr: "Main-style", attrval: "positionx" }))
        TransformStyleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "Position", val: 0, icon: `<i class="bi bi-arrow-down-up"></i>`, suffex: "Y", attr: "Main-style", attrval: "positiony" }))
        TransformStyleDiv.append(InteractCreateSubDivs.CreateRangeValueDiv({ prop: "Rotate2d", val: 0, icon: `<i class="bi bi-arrow-repeat"></i>`, suffex: "deg", attr: "Main-style", attrval: "rotate" }))
        
        return TransformStyleDiv
      }
}


// const InteractUpdateStyleDivs = {
//     TextStyleDiv : function(element){
//         MDTextStyleDiv.querySelector(`[style-attr=font-family]`).value = InteracStyles.getValue({element:"",prop:'font-family'})
//     },
//     BorderStyleDiv: function(element){

//     }
// }

export function InteractUpdateStyleDivs(element) {
    return {
        TextStyleDiv: function () {
            //console.log('fghgh')
            MDTextStyleDiv.querySelector(`[style-attr=font-family]`).value = InteractElement(element).GetValue.fontFamily
            MDTextStyleDiv.querySelector(`[style-attr=font-family]`).style.fontFamily = InteractElement(element).GetValue.fontFamily
            return InteractUpdateStyleDivs(element)
        },
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        BorderStyleDiv: function () {
            for (var el of MDBorderStyleDiv.querySelectorAll('select')) {
                el.value = InteractElement(element).GetValue[el.getAttribute('style-attr')]
            }
            //!!
            for (var el of MDBorderStyleDiv.querySelectorAll(`input[type=number]`)) {
                el.value = parseInt(InteractElement(element).GetValue[el.getAttribute('style-attr')])
            }
            //!!!

            for (var el of MDBorderStyleDiv.querySelectorAll(`input[type=color]`)) {
                el.value = tinycolor(InteractElement(element).GetValue[el.getAttribute('style-attr')]).toHexString() 
            }
            ///!
            return InteractUpdateStyleDivs(element)
        },
        TransformStyleDiv : function () {
            for (var el of MDTransformStyleDiv.querySelectorAll(`[main-style]`)) {
                console.log()
                InteractCreateSubDivs.SetRangeValueDiv(el,InteractElement(element).GetValue[el.getAttribute('main-style')])
            }
        }
    }
}


const InteractStyleDivEventListeners = {
    TextStyleDivListener: function () {
        MDTextStyleDiv.querySelector(`[style-attr=font-family]`).addEventListener('input', function () {
            for (var elem of UpdateStylingsOf.ElemList) {
                InteractElement(elem).UpdateProp.fontFamily(this.value)
            }
        })
    },
    //!???????????????
    BorderStyleDivListener: function () {
        for (var el of MDBorderStyleDiv.querySelectorAll('select')) {
            el.addEventListener('input', function () {
                for (var elem of UpdateStylingsOf.ElemList) {
                    console.log(this.value,this.getAttribute('style-attr'),this.value)
                    InteractElement(elem).UpdateProp[this.getAttribute('style-attr')](this.value)
                }
            })
        }
        //!!!
        for (var el of MDBorderStyleDiv.querySelectorAll(`input[type=number]`)) {
            el.addEventListener('input', function () {
                for (var elem of UpdateStylingsOf.ElemList) {
                    console.log(this.value,this.getAttribute('style-attr'),this.value)
                    console.log(InteractElement(elem))
                    console.log(elem)
                    InteractElement(elem).UpdateProp[this.getAttribute('style-attr')](`${this.value}px`)
                }
            })
        }
        //!!!
        for (var el of MDBorderStyleDiv.querySelectorAll(`input[type=color]`)) {
            el.addEventListener('input', function () {
                for (var elem of UpdateStylingsOf.ElemList) {
                    console.log(this.value,this.getAttribute('style-attr'),this.value)
                    InteractElement(elem).UpdateProp[this.getAttribute('style-attr')](`${this.value}`)
                }
            })
        }
    },
    TransformStyleDivListener:function () {
        for (var el of MDTransformStyleDiv.querySelectorAll(`input[type=range]`)) {
            el.addEventListener('input', function (e) {
                for (var elem of UpdateStylingsOf.ElemList) {
                   // console.log([getparentel(el,`[main-style]`).getAttribute('main-style')])

                   // console.log(InteractElement(elem).UpdateProp)
                    InteractElement(elem).UpdateProp[getparentel(e.target,`[main-style]`).getAttribute('main-style')](`${this.value}`)
                }
            })
        }
        for (var el of MDTransformStyleDiv.querySelectorAll(`input[type=number]`)) {
            el.addEventListener('input', function (e) {
                for (var elem of UpdateStylingsOf.ElemList) {
                    //console.log([getparentel(el,`[main-style]`).getAttribute('main-style')])

                    //console.log(InteractElement(elem).UpdateProp)
                    InteractElement(elem).UpdateProp[getparentel(e.target,`[main-style]`).getAttribute('main-style')](`${this.value}`)
                }
            })
        }
        for (var el of MDTransformStyleDiv.querySelectorAll(`[main-style]`)) {
            el.addEventListener('click', function (e) {
                for (var elem of UpdateStylingsOf.ElemList) {
                    //console.log([getparentel(el,`[main-style]`).getAttribute('main-style')])

                    //console.log(getparentel(e.target,`[main-style]`).getAttribute('main-style'))
                    InteractElement(elem).UpdateProp[this.getAttribute('main-style')](`${this.querySelector(`input[type=number]`).value}`)
                }
            })
        }
    }
}



export class UpdateStylingsOf {
    
    static ElemList = []

    static add = function (elem) {
        UpdateStylingsOf.ElemList.push(elem)
    }

    static empty = function (elem) {
        UpdateStylingsOf.ElemList = []
    }
    static make = function (elem) {
        UpdateStylingsOf.ElemList = []
        UpdateStylingsOf.ElemList.push(elem)
    }
    
}

console.log(UpdateStylingsOf)
// const UpdateStylingsOf = function(data){
//     //??retrun elems in BoxContainer elem
//     return {
//         list : function(){
//             return 
//         },
//         add : function(){

//         },
//     }
// }



//ONE TIME FUNCS
MDTextStyleDiv.append(InteractCreateStyleDivs.CreateTextStyleDiv())
MDBorderStyleDiv.append(InteractCreateStyleDivs.CreateBorderStyleDiv())
MDTransformStyleDiv.append(InteractCreateStyleDivs.CreateTransformStyleDiv())


InteractStyleDivEventListeners.TextStyleDivListener()
InteractStyleDivEventListeners.BorderStyleDivListener()
InteractStyleDivEventListeners.TransformStyleDivListener()
