import { InteractFunctionEditor } from './components.js'

import { BoxContainer } from "./Interac_BoxContainer.js";

export const InteractFunctionsDiv = {
    CreateFunctionEditor : function(json){
        var editordiv = InteractFunctionEditor.cloneNode(true);

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
                <span class="gyi hideprntab">Modify Element</span>
                <span class="gyi hideprntab">Modify Element</span>
            </div>
        </div>`,
        //showarrow:true,
        functions:function(arrowbox){
            var addbtn = this.for
            arrowbox.querySelector('.gyi').addEventListener('click',function(){
                addbtn.parentNode.insertBefore(InteractFunctionsDiv.CreateModifyChangeEvent(),addbtn)
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
    }
}



export function ExtractInteractFuncJsonFromFED(functioneditor) {
    var json = {}
    json.name = functioneditor.querySelector(`[functioneditor=name]`)
    json.triggerer = functioneditor.querySelector(`[functioneditor=triggerer]`)
    json.triggers = []
    json.events = {}
    return json 
}

export function RunInFuncOnIP(IntrcPg,funcjson) {
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