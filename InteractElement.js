





export function InteractElement(element) {
    
    return{
  
        UpdateProp :UpdateProp(element),
        Delete :function (element) {
          element.remove()
        },
        GetValue: GetValue(element),
        // name: function (element) {return element.getAttribute('element_name')},
        // groups : function (element) {return element.getAttribute('element_groups')},
        // type : function (element) {return element.getAttribute('element_type')},
        name:element.getAttribute('element_name'),
        groups : element.getAttribute('element_groups'),
        type : element.getAttribute('element_type'),

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
    
  }
}

const GetValue = function (element) {
  return{
      fontFamily : element.children[0].style.fontFamily.replace(/['"]+/g, ''),
      borderTopStyle :getComputedValue(element.children[0], "border-top-style"),
      borderTopColor : getComputedValue(element.children[0], "border-top-color"),
      borderTopWidth : getComputedValue(element.children[0], "border-top-width"),
  }
}