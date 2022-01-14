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



function getparentel(element,queryselector) {
    for (var parent of $(element).parents()) {

        if(queryselector.startsWith('.') && parent.classList.contains(queryselector)){
            return parent
        }

        else if(queryselector.startsWith('#') && parent.id == queryselector){
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
// export function gettarget(e, queryselector) {

//     if(queryselector.startswith('.')){

//       //  if(e.)
//     } 
//     else if(queryselector.startswith('#') && parent.id == queryselector){
//         return parent
//     }
//     else if(queryselector.startswith('[') && parent.id == queryselector){
//         return parent
//     }


//     if (e.target.classList.contains(clas) || e.target.id == clas || (e.target.getAttribute(clas) != null && e.target.getAttribute(clas) != "true" && e.target.getAttribute(clas) != "false")) {
//         return e.target
//     } else {
//         return getparent(e.target, clas)
//     }
// }