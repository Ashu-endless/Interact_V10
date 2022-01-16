import { transformFunc } from "./Interact_style.js"





export function InteractElement(element) {
    
    return{
  
        UpdateProp :UpdateProp(element),
        Delete :function (element) {
          element.remove()
        },
        GetValue: GetValue(element),
        setlock : function (params) {
          element.setAttribute('locked',params)
        },
        setdisplay :function (params) {
          element.style.display = params
        },
        // name: function (element) {return element.getAttribute('element_name')},
        // groups : function (element) {return element.getAttribute('element_groups')},
        // type : function (element) {return element.getAttribute('element_type')},
        name:element.getAttribute('element_name'),
        groups : element.getAttribute('element_groups'),
        type : element.getAttribute('element_type'),
        //locked : element.getAttribute('locked'),
        //display : element.style.display,

        }
}

export function getComputedValue(el, prop) {
  return window.getComputedStyle(el).getPropertyValue(prop);
}

const UpdateProp = function (element) {
  //console.log('ssdfds')
  return{
    fontFamily : function (value) {
      element.children[0].style.fontFamily = value;
      return UpdateProp(element)
    },
    borderColor : function (value) {
      element.children[0].style.borderColor = `${value}`
      return UpdateProp(element)
    },
    borderStyle : function (value) {
      element.children[0].style.borderStyle = `${value}`
      return UpdateProp(element)
    },
    borderWidth : function (value) {
      element.children[0].style.borderWidth = `${parseInt(value)}px`
      return UpdateProp(element)
    },
    borderTopColor : function (value) {
      element.children[0].style.borderColor = `${value} ${getComputedValue(element.children[0], "border-right-color")} ${getComputedValue(element.children[0], "border-bottom-color")} ${getComputedValue(element.children[0], "border-left-color")}`
      return UpdateProp(element)
    },
    borderTopStyle : function (value) {
      element.children[0].style.borderStyle = `${value} ${getComputedValue(element.children[0], "border-right-style")} ${getComputedValue(element.children[0], "border-bottom-style")} ${getComputedValue(element.children[0], "border-left-style")}`
      return UpdateProp(element)
    },
    borderTopWidth : function (value) {
      element.children[0].style.borderWidth = `${parseInt(value)}px ${getComputedValue(element.children[0], "border-right-width")} ${getComputedValue(element.children[0], "border-bottom-width")} ${getComputedValue(element.children[0], "border-left-width")}`
      return UpdateProp(element)
    },
    borderLeftColor : function (value) {
      element.children[0].style.borderColor = `${getComputedValue(element.children[0], "border-top-color")} ${getComputedValue(element.children[0], "border-right-color")} ${getComputedValue(element.children[0], "border-bottom-color")} ${value}`
      return UpdateProp(element)
    },
    borderLeftStyle : function (value) {
      element.children[0].style.borderStyle = `${getComputedValue(element.children[0], "border-top-style")} ${getComputedValue(element.children[0], "border-right-style")} ${getComputedValue(element.children[0], "border-bottom-style")} ${value}`
      return UpdateProp(element)
    },
    borderLeftWidth : function (value) {
      element.children[0].style.borderWidth = `${getComputedValue(element.children[0], "border-top-width")} ${getComputedValue(element.children[0], "border-right-width")} ${getComputedValue(element.children[0], "border-bottom-width")} ${parseInt(value)}px`
      return UpdateProp(element)
    },
    borderRightColor : function (value) {
      element.children[0].style.borderColor = `${getComputedValue(element.children[0], "border-top-color")} ${value} ${getComputedValue(element.children[0], "border-bottom-color")} ${getComputedValue(element.children[0], "border-left-color")}`
      return UpdateProp(element)
    },
    borderRightStyle : function (value) {
      element.children[0].style.borderStyle = `${getComputedValue(element.children[0], "border-top-style")} ${value} ${getComputedValue(element.children[0], "border-bottom-style")} ${getComputedValue(element.children[0], "border-left-style")}`
      return UpdateProp(element)
    },
    borderRightWidth : function (value) {
      element.children[0].style.borderWidth = `${getComputedValue(element.children[0], "border-top-width")} ${parseInt(value)}px ${getComputedValue(element.children[0], "border-bottom-width")} ${getComputedValue(element.children[0], "border-left-width")}`
      return UpdateProp(element)
    },

    borderBottomColor : function (value) {
      element.children[0].style.borderColor = `${getComputedValue(element.children[0], "border-top-color")} ${getComputedValue(element.children[0], "border-right-color")} ${value} ${getComputedValue(element.children[0], "border-left-color")}`
      return UpdateProp(element)
    },
    borderBottomStyle : function (value) {
      element.children[0].style.borderStyle = `${getComputedValue(element.children[0], "border-top-style")} ${getComputedValue(element.children[0], "border-right-style")} ${value} ${getComputedValue(element.children[0], "border-left-style")}`
      return UpdateProp(element)
    },
    borderBottomWidth : function (value) {
      element.children[0].style.borderWidth = `${getComputedValue(element.children[0], "border-top-width")} ${getComputedValue(element.children[0], "border-right-width")} ${parseInt(value)}px ${getComputedValue(element.children[0], "border-left-width")}`
      return UpdateProp(element)
    }

    
  }
}

const GetValue = function (element) {
  return{
      fontFamily : element.children[0].style.fontFamily.replace(/['"]+/g, ''),
      borderTopStyle :getComputedValue(element.children[0], "border-top-style"),
      borderTopColor : getComputedValue(element.children[0], "border-top-color"),
      borderTopWidth : getComputedValue(element.children[0], "border-top-width"),
      height:transformFunc.getValue(element).height,
      positionx:transformFunc.getValue(element).positionX,
      width:transformFunc.getValue(element).width,
      positiony:transformFunc.getValue(element).positionY,
      rotate:transformFunc.getValue(element).rotate,
  }
}