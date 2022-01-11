import { InteractFunctionEditor } from './components.js'
import { getparentel } from "./document.js";
import { BoxContainer } from "./Interac_BoxContainer.js";

export const InteractFunctionsDiv = {
    CreateFunctionEditor : function(json){
        var editordiv = InteractFunctionEditor.cloneNode(true);

        editordiv.querySelector('[functioneditor="minmaxsizetoggler"]').addEventListener('click',function () {
            console.log('dsdsd')
             var functioneditor = getparentel(this,`[functioneditor=container]`)
             console.log(functioneditor)
             if(functioneditor.style.height == 'fit-content'){
                 functioneditor.style.height = '5vh'
             }else{
                 functioneditor.style.height = 'fit-content'
             }
         })

         editordiv.querySelector('.random').children[0].addEventListener('click',function(){
            BoxContainer.ShowElementSelection({headtitle:'Add trigger',triggererEl:this})
        })

        return editordiv
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