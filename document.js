function UpdateRangeInpStyle(elem,value,color){
    if(color == undefined){

    }
    elem.value = parseInt(value)
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


function getUniqueid(word) {
    return word + Math.random().toString(36).substr(2, 9)
}

function getparentel(element,queryselector) {
    for (var parent of $(element).parents()) {

        if(queryselector.startsWith('.') && parent.classList.contains(queryselector.replace('.',''))){
            return parent
        }

        else if(queryselector.startsWith('#') && parent.id == queryselector.replace('#','')){
            return parent
        }

        else if(queryselector.startsWith('[')){
            var attr = queryselector.replace('[','').replace(']','').trim().split('=')
           //console.log(attr)
            //console.log(parent.getAttribute(attr[0]) == attr[1])
            //!error while reading attr-value like `[attr="value"]
            if(attr.length == 1 && parent.getAttribute(attr[0]) != null){
                return parent
            }

            else if(attr.length == 2 && parent.getAttribute(attr[0]) == attr[1] ){
                console.log(parent)
            return parent
        }
        }}

        return null
     
}
// !
function gettargetel(e, queryselector) {

    if(queryselector.startsWith('.')){
        console.log('oko')
      if (e.target.classList.contains(queryselector.replace('.',''))){
            return e.target
      }else{
          return getparentel(e.target,queryselector)
      }
    } 

    else if(queryselector.startsWith('#')){
        if (e.target.id == queryselector.replace('#','')){
            return e.target
      }else{
          return getparentel(e.target,queryselector)
      }
    } 
    
    

    else if(queryselector.startsWith('[')){
        var attr = queryselector.replace('[','').replace(']','').trim().split('=')
       //console.log(attr)
        //console.log(parent.getAttribute(attr[0]) == attr[1])
        //!error while reading attr-value like `[attr="value"]
        if(attr.length == 1 && parent.getAttribute(attr[0]) != null){
            return parent
        }

        else if(attr.length == 2 && parent.getAttribute(attr[0]) == attr[1] ){
            console.log(parent)
        return parent
    }
    }
}