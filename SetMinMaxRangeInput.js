import { BoxContainer} from './Interac_BoxContainer.js';


export function SetMinMaxRangeInput(elem, prop) {
    if(prop == undefined){
        prop = elem.getAttribute('main-style')
    }
    // console.log(elem)
    if(elem.tagName != "INPUT"){
        // console.log(elem.tagName)
        elem = elem.querySelector("input[type='range']")
    }
    try {
        var maxheight = BoxContainer.elem().getBoundingClientRect().height
        var maxwidth = BoxContainer.elem().getBoundingClientRect().width
    } catch (error) {
        var maxheight = 100
        var maxwidth = 100
    }
    elem.min = '0'
    elem.step = '1'
    // console.log(prop)
    // console.log(elem)
        // console.log(prop)
    switch (prop) {
        case 'height':
            elem.max = maxheight
            elem.step = '2'
            break
        case 'width':
            elem.max = maxwidth
            elem.step = '2'
            break
        case 'position-x':
            elem.max = maxwidth
            elem.step = '2'
            break
        case 'position-y':
            elem.max = maxheight
            elem.step = '2'
            break
        case 'rotate':
            elem.max = '360'
            elem.step = '3'
            elem.min = '-360'
            break
        case 'font-size':
            elem.max = '1000'
            elem.step = '2'
            break
        case "padding-top":
        case "padding-bottom":
            elem.max = maxheight / 2
            elem.step = '2'
            break
        case "padding-left":
        case "padding-right":
            elem.max = maxwidth / 2
            elem.step = '2'
            break
        case "line-height":
            elem.max = 200
            elem.step = 3
            break
        case "letter-spacing":
            elem.max = 200
            elem.min = -20
            elem.step = 2
            break
        case "word-spacing":
            elem.max = 200
            elem.min = -20
            elem.step = 2
            break
        case "-webkit-text-stroke-width":
            elem.max = 100
            elem.step = 1
            break
        default:
            elem.max = '100'
            elem.step = '1'
            elem.min = '-10'

    }
    // console.log(elem)
    return elem
}