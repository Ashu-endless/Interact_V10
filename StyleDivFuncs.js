



const InteractStyleDivs = {
    TextStyleDiv : function(){
        return document.querySelector("")
    }
}


const InteractCreateStyleDivs = {
    CreateTextStyleDiv: function () {
        var styleDiv = TextStyleDiv.cloneNode(true);
    
        // EVENTLIST
        customrangeinput(styleDiv);
        styleDiv.querySelector("[style-attr=font-family]").addEventListener("input", function () {
          this.style.fontFamily = this.value;
        });
    
        for (el of styleDiv.querySelector("[style-attr=font-family]").children) {
          el.style.fontFamily = el.value;
          el.style.border = "1px black solid";
        }
        styleDiv.append(CreateRangeValueTemplate({ prop: "text-stroke", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "-webkit-text-stroke-width" }))
        styleDiv.append(CreateRangeValueTemplate({ prop: "Line-height", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "line-height" }))
        styleDiv.append(CreateRangeValueTemplate({ prop: "letter-spacing", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "letter-spacing" }))
        styleDiv.append(CreateRangeValueTemplate({ prop: "word-spacing", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "word-spacing" }))
        styleDiv.append(CreateRangeValueTemplate({ prop: "padding-right", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "padding-right" }))
        styleDiv.append(CreateRangeValueTemplate({ prop: "padding-left", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "padding-left" }))
        styleDiv.append(CreateRangeValueTemplate({ prop: "padding-top", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "padding-top" }))
        styleDiv.append(CreateRangeValueTemplate({ prop: "padding-bottom", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "padding-bottom" }))
    
        for (var el of styleDiv.querySelectorAll('.divninput_hover')) {
          el.classList.remove('divninput_hover')
          el.classList.add('divninput')
    
        }
        return styleDiv;
      },
}


const InteractUpdateStyleDivs = {
    TextStyleDiv : function(){

    }
}


const InteractStyleDivEventListeners = {
    TextStyleDivListener : function(){

    }
}





const UpdateStylingsOf = function(data){
    //??retrun elems in BoxContainer elem
    return {
        list : function(){
            return 
        },
        add : function(){

        },
    }
}