import { InteractFunctionEditor } from './components.js'
import { SetMinMaxRangeInput } from "./SetMinMaxRangeInput.js";
import { BoxContainer } from "./Interac_BoxContainer.js";
import { InteractPage } from './InteractPage.js';


export const MDFunctionDiv = document.querySelector('#divbar_functions')

export const InteractFunctionsDiv = {
    CreateFunctionEditor : function(json){
        var editordiv = InteractFunctionEditor.cloneNode(true);
        
        editordiv.addEventListener('input',function () {
            console.log(ExtractInteractFuncJsonFromFED(editordiv))
            
        })
        editordiv.addEventListener('input',function () {
            var list = []
    for(var ele of MDFunctionDiv.querySelectorAll(`[functioneditor="container"]`)){
        list.push(ExtractInteractFuncJsonFromFED(ele))
    }
    console.log(list)
    //BoxContainer.Functions = 
    BoxContainer.elem().setAttribute('InteractFunctions',JSON.stringify(list))

        })

        editordiv.querySelector(`[functioneditor="name"]`).value = json.name
        editordiv.querySelector(`[functioneditor="triggerer"]`).value = json.triggerer
        editordiv.querySelector('[functioneditor="minmaxsizetoggler"]').addEventListener('click',function () {
            //console.log('dsdsd')
             var functioneditor = getparentel(this,`[functioneditor=container]`)
             console.log(functioneditor)
             if(functioneditor.style.height == 'fit-content'){
                 functioneditor.style.height = functioneditor.querySelector(`[functioneditor="head"]`).getBoundingClientRect().height + 3 + 'px'
             }else{
                 functioneditor.style.height = 'fit-content'
             }
         })

         editordiv.querySelector('[functioneditor="add_triggers"]').addEventListener('click',function(){
            BoxContainer.ShowElementSelection({headtitle:'Add trigger',triggererEl:this,ondone:function(element){
                //console.log(this)
                var trigger = InteractFunctionsDiv.CreateTrigger(BoxContainer.GetIconAndName({element:element}))
                this.triggererEl.parentNode.insertBefore(trigger,this.triggererEl)
            }})
        })




        // editordiv.querySelector('[functioneditor="add_event"]').addEventListener('click',function(){
        //     this.parentNode.insertBefore(InteractFunctionsDiv.CreateModifyChangeEvent(),this)
        // })
        





        NewArrowBox({for:editordiv.querySelector('[functioneditor="add_event"]'),
        dataHtml:`<div><span style="color: #61a7dd;" >Select event type</span>
            <div class='diwali'>
                <span class="gyi hideprntab">Change an Elements's properties</span>
                <span class="gyi hideprntab">Increase/decrease an Elements Properties</span>
            </div>
        </div>`,
        //showarrow:true,
        functions:function(arrowbox){
            var addbtn = this.for
            arrowbox.querySelector('.gyi').addEventListener('click',function(){
                addbtn.parentNode.insertBefore(InteractEvents.ChangeElProps.Create({}),addbtn)
            })
        }
        })


        return editordiv
    },
    CreateTrigger : function(elplacard){
        //#type #name
        var div = document.createElement('div');
        div.classList.add('specatt')
        div.setAttribute('functioneditor','trigger')
        div.innerHTML = `<span functioneditor="remove_trigger"><i class="bi bi-x-square"></i></span>`
        div.append(elplacard)
        div.querySelector(`[functioneditor="remove_trigger"]`).addEventListener('click',function(){
            this.parentNode.remove()
        })
        return div
    },
    CreateModifyChangeEvent : function(){
        var div = document.createElement('div');
        div.setAttribute('functioneditor','Modify-Change')
        div.classList.add('Event-Change-Cont')
        div.innerHTML = `<div class='Event-Change-Cont-head'><div>Modify</div><div class='specatt' functioneditor="event-change-selectel" >select</div><span><i class="bi bi-arrow-bar-down"></i></span></div>
        <div>   <span class="k ayy"> Add prop <i class="bi bi-plus-square-dotted"></i> </span>    </div>
        `

        div.querySelector('[functioneditor="event-change-selectel"]').addEventListener('click',function(){
            BoxContainer.ShowElementSelection({headtitle:'Select Element',triggererEl:this,onselection:function(element){
            this.triggererEl.innerHTML = ``
            this.triggererEl.append(BoxContainer.GetIconAndName({element:element}))
    
            }})
        })

        NewArrowBox({for:div.querySelector('.k'),dataHtml:`<div><span style="color: #61a7dd;" >Select Property</span>
        <div class='diwali'>
            <span class="gyi">Transform</span>
            <span class="gyi">Text</span>
        </div>
    </div>`
    })
        return div
    },CreateRangeValueDiv: function (json) {
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
    }

}


const InteractEvents = {
    ChangeElProps : {
        Create : function (json) {
        var div = document.createElement('div');
        div.setAttribute('functioneditor','Event')
        div.setAttribute('Event-type','ChangeElProps')
        div.classList.add('Event-Change-Cont')
        div.innerHTML = `<div class='Event-Change-Cont-head'><div>Modify</div><div class='specatt' functioneditor="event-change-selectel" >select</div><span><i class="bi bi-arrow-bar-down"></i></span></div>
        <div class="yu" ></div>
        <div>    <span class="k ayy"> Add prop <i class="bi bi-plus-square-dotted"></i> </span>    </div>
        `

        div.querySelector('[functioneditor="event-change-selectel"]').addEventListener('click',function(){
            BoxContainer.ShowElementSelection({headtitle:'Select Element',triggererEl:this,onselection:function(element){
            this.triggererEl.innerHTML = ``
            this.triggererEl.append(BoxContainer.GetIconAndName({element:element}))
    
            }})
        })

        NewArrowBox({for:div.querySelector('.k'),dataHtml:`<div><span style="color: #61a7dd;" >Select Property</span>
        <div class='diwali'>
            <select name="" id="">
                <option value="height">height</option>
                <option value="width">width</option>
            </select>
            <!-- <span class="gyi">Transform</span>
            <span class="gyi">Text</span> -->
        </div>
    </div>`,
    functions:function (params) {
        params.querySelector('select').addEventListener('input',function() {
            div.querySelector('.yu').append(InteractEvents.ChangeElProps.CreateProp(this.value))
            params.style.display = 'none'
        })
    }
    })
        return div
        },
        GetValue : function (div) {
            
        },
        Execute : function(page,json) {
            
        },
        CreateProp : function (prop) {
            switch (prop) {
                case "height":
                    return InteractFunctionsDiv.CreateRangeValueDiv({ prop: "Height", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "height" })
                    break;
                case "width":
                    return InteractFunctionsDiv.CreateRangeValueDiv({ prop: "Width", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "height" })
                    break;
                
                default:
                    break;
            }
        }

    },
    //!!??///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    IncDecElProp: {
        Create : function (json) {
            
        },
        GetValue : function (div) {
            
        },
        Execute : function(page,json) {
            
        }

    },
    IfElse: {
        Create : function (json) {
            
        },
        GetValue : function (div) {
            
        },
        Execute : function(page,json) {
            
        }

    },
}


function InteractFunction(name,trigger,triggerer,events) {
    this.name = name
    this.triggers = trigger || []
    this.triggerer = triggerer
    this.events = events || []
}
function InteractEvent(type) {
    this.type = type
    this.properties = {height:"90",width:"90"}
    
}


export function ExtractInteractFuncJsonFromFED(functioneditor) {
    var json = new InteractFunction()
    json.name = functioneditor.querySelector(`[functioneditor=name]`).value
    json.triggerer = functioneditor.querySelector(`[functioneditor=triggerer]`).value
    //json.triggers = []
    var triggers_container = functioneditor.querySelector(`[functioneditor="trigger_container"]`)
    var event_container = functioneditor.querySelector(`[functioneditor="event_container"]`)
    
    for(var el of triggers_container.querySelectorAll('.IE_icon-name')){
        json.triggers.push(el.getAttribute('query'))
    }
    json.triggers = [...new Set(json.triggers)];
    json.events = []
    for(var el of event_container.querySelectorAll(`[functioneditor="Event"]`)){
        var event = new InteractEvent()
        event.type = el.getAttribute('Event-type');
        json.events.push(event)
    }
    
    console.log(json)
   // BoxContainer.elem().setAttribute('i',JSON.stringify(json))
    return json 
}

export function RunInFuncOnIP(IntrcPg,funcjson) {
    var triggers = []
    for (var trigger of funcjson.triggers) {
        InteractPage(IntrcPg).querySelector
    }
    IntrcPg.addEventListener(funcjson.triggerer,function(){
        
    })
}

function InteractCreateFunctionLanguage(functioneditordiv){

} 

function  InteractEnableFunction(_Boxcontaine_elem) {
    
}

class Interactfunction{
    
}

document.querySelector('#add_InteractFunctionEditor_btn').addEventListener('click',function() {
    this.parentNode.insertBefore(InteractFunctionsDiv.CreateFunctionEditor({}),this)


})