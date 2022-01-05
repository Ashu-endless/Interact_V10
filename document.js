export function UpdateRangeInpStyle(elem,value,color){
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