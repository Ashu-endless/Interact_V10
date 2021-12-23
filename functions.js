import { InteractFunctionEditor, CustomSelectTag, functions_transitions_controller_div, property_selector_container, transitions_controller, FontFamilySelect,BorderStyleSelect } from './components.js'
import { ModifyRangeInput, getUniqueid,  getparent, snakeToCamel } from './functionsfile.js';
import { transformFunc, CreateStyleDiv, getTextshadowfromStyleDiv, getDropshadowfromStyleDiv, getComputedValue, InteracStyles } from './Interact_style.js';
import { BoxContainer, NewBoxContainer,update_triggerer_selector, update_effector_selector, } from './Interac_BoxContainer.js';
import { NewArrowBox,RemoveArrowBox } from './arrowbox.js';
import { preview_box } from './index.js';
var el;
var i;
export const functions_div = document.querySelector('#functions_div')
export const InteractFunctions = {}
console.log("lol")
// InteractFunctions.slider = {
//     triggers: [],
//     effectors: {
//         0: {
//             name: "",
//             transition: "",
//             function: {
//                 0: {
//                     event: "click",
//                     0: {
//                         type: "increase",
//                         prop: {
//                             0: "height"
//                         },
//                         val: {
//                             0: "10px"
//                         }
//                     },
//                     1: {
//                         type: "change",
//                         prop: {
//                             0: ""
//                         },
//                     }
//                 }


//             }
//         }
//     }


// }



// just need to change arraay[] and prop and value enroll in AddNewFunc settings
// FOR PREVIEWER
export function InteractFunctionCreator(json) {
    console.log('genarating function')
    console.log(json)
    var triggerers_list = []
    var effectors_list = []
    var effectors_groups = []

    if (json.triggerers.names.length != 0) {
        for (var triggerers of json.triggerers.names) { triggerers_list.push(preview_box.querySelector(`[previewer_element_name=${triggerers}]`)) }
    }

    if (json.triggerers.groups.length != 0) {
        for (var triggerers of json.triggerers.groups) {
            for (var el of preview_box.querySelectorAll(`[previewer_element_groups]`)) {
                var splitString = el.getAttribute('previewer_element_groups').split(',');
                for (var group_names of splitString) {
                    if (group_names == triggerers) {
                        triggerers_list.push(el)

                    }
                }
                // var groupFound;
                // for (var i = 0; i < splitString.length; i++) {
                //     var stringPart = splitString[i];
                //     if (stringPart != triggerers) continue;

                //     groupFound = true;
                //     break;
                // }
                // if (groupFound == true) {
                //     triggerers_list.push(el)
                //     console.log('pushing trigger group', el.getAttribute('element_groups_previewer'))
                // }
            }
        }
    }
    // console.log(json.effectors.groups)
    if (json.effectors.groups != []) {
        for (var groupn of json.effectors.groups) {
            var el_arr = []

            for (var el of preview_box.querySelectorAll(`[previewer_element_groups]`)) {
                var splitString = el.getAttribute('previewer_element_groups').split(',');
                var groupFound = false;
                for (var i = 0; i < splitString.length; i++) {
                    var stringPart = splitString[i];
                    if (stringPart != groupn.group) continue;

                    groupFound = true;
                    break;
                }
                if (groupFound == true) {
                    el_arr.push(el)
                    // console.log(el_arr)
                }


            }
            effectors_groups.push(el_arr)
            // console.log(effectors_groups)

        }
    }
    if (json.effectors.names.length != 0) {
        for (var effectors of json.effectors.names) { effectors_list.push(preview_box.querySelector(`[previewer_element_name=${effectors.name}]`)) }
    }
    console.log(triggerers_list)
    for (var el of triggerers_list) {
//?Event
if(json.event == 'hover'){
    var stored_props = {}
    stored_props.effectors_list = {}
    stored_props.effectors_groups = {}
    stored_props.itself = {}
    el.addEventListener('mouseover',function(){
    
    for (var elem = 0; elem < effectors_list.length; elem++) {
        effectors_list[elem].style.transition = json.effectors.names[elem].transitions;

        var property = json.effectors.names[elem].functions.change.prop
        var property_value = json.effectors.names[elem].functions.change.val

        stored_props.effectors_list.change =  []
        
        for (var propCount = 0; propCount < json.effectors.names[elem].functions.change.prop.length; propCount++) {
            console.log(property[propCount], property_value[propCount])
            stored_props.effectors_list.change.push(InteracStyles.getValue({ element: effectors_list[elem], prop: property[propCount], }))
            InteracStyles.UpdateStyles({ element: effectors_list[elem], prop: property[propCount], value: property_value[propCount] })
            
        }
        // INCDEC PROPS
        var property = json.effectors.names[elem].functions.incdec.prop
        stored_props.effectors_list.incdec = []
        var property_value = json.effectors.names[elem].functions.incdec.val

        var property_sign = json.effectors.names[elem].functions.incdec.sign
        for (var propCount = 0; propCount < json.effectors.names[elem].functions.incdec.prop.length; propCount++) {
            stored_props.effectors_list.incdec.push(InteracStyles.getValue({ element: effectors_list[elem], prop: property[propCount], }))
            InteracStyles.UpdateStyles({ element: effectors_list[elem], property: property[propCount], value: property_value[propCount], incdecsign: property_sign[propCount] })         
        }
        // !INCDEC
    }
    //
    // console.log(effectors_groups.length)
    for (var elem = 0; elem < effectors_groups.length; elem++) {
        // console.log(effectors_groups.length)
        for (var all_elems = 0; all_elems < effectors_groups[elem].length; all_elems++) {
            effectors_groups[elem][all_elems].style.transition = json.effectors.groups[elem].transitions
            console.log(effectors_groups[elem][all_elems])
            var property = json.effectors.groups[elem].functions.change.prop
            var property_value = json.effectors.groups[elem].functions.change.val
            stored_props.effectors_groups.change =  []
            for (var propCount = 0; propCount < json.effectors.groups[elem].functions.change.prop.length; propCount++) {
                //console.log(effectors_groups[elem][all_elems], property[propCount], property_value[propCount])
                stored_props.effectors_groups.change.push(InteracStyles.getValue({ element:  effectors_groups[elem][all_elems], prop: property[propCount] }))
                InteracStyles.UpdateStyles({ element: effectors_groups[elem][all_elems], property: property[propCount], value: property_value[propCount] })
            
            }

            
            // ?
            var property = json.effectors.groups[elem].functions.incdec.prop
            var property_value = json.effectors.groups[elem].functions.incdec.val
            var property_sign = json.effectors.groups[elem].functions.incdec.sign
            stored_props.effectors_groups.incdec =  []
            for (var propCount = 0; propCount < json.effectors.groups[elem].functions.incdec.prop.length; propCount++) {

                
                stored_props.effectors_groups.incdec.push(InteracStyles.getValue({ element:  effectors_groups[elem][all_elems], prop: property[propCount] }))
                InteracStyles.UpdateStyles({ element: effectors_groups[elem][all_elems], property: property[propCount], value: property_value[propCount], incdecsign: property_sign[propCount] })
               
            }
            // !INCDEC
        }

    }
    // !ALL Group functioning end
    // ? Itself functioning;
    if (json.this.transitions != '' && json.this.transitions != null && json.this.transitions != undefined) {
        this.style.transition = json.this.transitions;
    }
    var property = json.this.functions.change.prop
    var property_value = json.this.functions.change.val
    stored_props.itself.change =  []
    for (var propCount = 0; propCount < json.this.functions.change.prop.length; propCount++) {
        stored_props.itself.change.push(InteracStyles.getValue({ element:  this, prop: property[propCount] }))
        InteracStyles.UpdateStyles({ element: this, property: property[propCount], value: property_value[propCount], })
        
    }
    // INCDEC PROPS
    var property = json.this.functions.incdec.prop
    var property_value = json.this.functions.incdec.val
    var property_sign = json.this.functions.incdec.sign
    stored_props.itself.incdec =  []
    for (var propCount = 0; propCount < json.this.functions.incdec.prop.length; propCount++) {
    stored_props.itself.incdec.push(InteracStyles.getValue({ element:  this, prop: property[propCount] }))
        InteracStyles.UpdateStyles({ element: this, property: property[propCount], value: property_value[propCount], incdecsign: property_sign[propCount] })
        
    }
    // }
    // }
    // !INCDEC
    //  !! Itself functioning;
})
///?//??????????????????????????????/????????
el.addEventListener('mouseout',function(){
    
    for (var elem = 0; elem < effectors_list.length; elem++) {
        effectors_list[elem].style.transition = json.effectors.names[elem].transitions;

        var property = json.effectors.names[elem].functions.change.prop
        var property_value = stored_props.effectors_list.change
        
        
        for (var propCount = 0; propCount < json.effectors.names[elem].functions.change.prop.length; propCount++) {
            console.log(property[propCount], property_value[propCount])
            InteracStyles.UpdateStyles({ element: effectors_list[elem], prop: property[propCount], value: property_value[propCount] })
        }
        // INCDEC PROPS
        var property = json.effectors.names[elem].functions.incdec.prop
        var property_value = stored_props.effectors_list.incdec
        var property_sign = json.effectors.names[elem].functions.incdec.sign
        for (var propCount = 0; propCount < json.effectors.names[elem].functions.incdec.prop.length; propCount++) {
            InteracStyles.UpdateStyles({ element: effectors_list[elem], property: property[propCount], value: property_value[propCount],  })

            
        }
        // !INCDEC
    }
    for (var elem = 0; elem < effectors_groups.length; elem++) {
        // console.log(effectors_groups.length)
        for (var all_elems = 0; all_elems < effectors_groups[elem].length; all_elems++) {
            effectors_groups[elem][all_elems].style.transition = json.effectors.groups[elem].transitions
            console.log(effectors_groups[elem][all_elems])
            var property = json.effectors.groups[elem].functions.change.prop
            var property_value = stored_props.effectors_groups.change
            for (var propCount = 0; propCount < json.effectors.groups[elem].functions.change.prop.length; propCount++) {  
                InteracStyles.UpdateStyles({ element: effectors_groups[elem][all_elems], property: property[propCount], value: property_value[propCount] })
            
            }

            
            // ?
            var property = json.effectors.groups[elem].functions.incdec.prop
            var property_value = stored_props.effectors_groups.incdec
            var property_sign = json.effectors.groups[elem].functions.incdec.sign
            for (var propCount = 0; propCount < json.effectors.groups[elem].functions.incdec.prop.length; propCount++) {
                InteracStyles.UpdateStyles({ element: effectors_groups[elem][all_elems], property: property[propCount], value: property_value[propCount],  })
               
            }
            // !INCDEC
        }

    }
    // !ALL Group functioning end
    // ? Itself functioning;
    if (json.this.transitions != '' && json.this.transitions != null && json.this.transitions != undefined) {
        this.style.transition = json.this.transitions;
    }
    var property = json.this.functions.change.prop
    var property_value = stored_props.itself.change
    
    for (var propCount = 0; propCount < json.this.functions.change.prop.length; propCount++) {
        InteracStyles.UpdateStyles({ element: this, property: property[propCount], value: property_value[propCount], })  
    }
    // INCDEC PROPS
    var property = json.this.functions.incdec.prop
    var property_value = stored_props.itself.incdec
    var property_sign = json.this.functions.incdec.sign
    for (var propCount = 0; propCount < json.this.functions.incdec.prop.length; propCount++) {
        InteracStyles.UpdateStyles({ element: this, property: property[propCount], value: property_value[propCount], incdecsign: property_sign[propCount] })
        
    }

})




// !Evvent End !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! normal events !!!!!!!!!!!!!!
}
else{
        // ?Change Events here
        el.addEventListener(json.event, function () {


            // el[json.event] = (e) => {
            console.log('event_triggered')
            for (var elem = 0; elem < effectors_list.length; elem++) {
                // console.log(effectors_list[elem].style.transition)
                // console.log(json.effectors.names[elem].transitions)
                effectors_list[elem].style.transition = json.effectors.names[elem].transitions;

                var property = json.effectors.names[elem].functions.change.prop
                var property_value = json.effectors.names[elem].functions.change.val
                for (var propCount = 0; propCount < json.effectors.names[elem].functions.change.prop.length; propCount++) {
                    // for (var prop of json.effectors.names[elem].functions.change.prop) {
                    // for (var val of json.effectors.names[elem].functions.change.val) {
                    // !!WOW!
                    // effectors_list[elem].style[prop] = val
                    // ApplyFunction(effectors_list[elem], prop, val)
                    // console.log(prop, val)
                    console.log(property[propCount], property_value[propCount])
                    InteracStyles.UpdateStyles({ element: effectors_list[elem], prop: property[propCount], value: property_value[propCount] })

                    // transformFunc.updateValue(effectors_list[elem], [prop], val)
                    // console.log(effectors_list[elem].style[prop])
                    // console.log(val)
                    // }
                }
                // INCDEC PROPS
                var property = json.effectors.names[elem].functions.incdec.prop
                var property_value = json.effectors.names[elem].functions.incdec.val
                var property_sign = json.effectors.names[elem].functions.incdec.sign
                for (var propCount = 0; propCount < json.effectors.names[elem].functions.incdec.prop.length; propCount++) {
                    // for (var prop of json.effectors.names[elem].functions.incdec.prop) {
                    // for (var val of json.effectors.names[elem].functions.incdec.val) {
                    // for (var sign of json.effectors.names[elem].functions.incdec.sign) {
                    // !!WOW!
                    // effectors_list[elem].style[prop] = val
                    // ApplyFunction(effectors_list[elem], prop, val, sign)
                    InteracStyles.UpdateStyles({ element: effectors_list[elem], property: property[propCount], value: property_value[propCount], incdecsign: property_sign[propCount] })

                    // transformFunc.updateValue(effectors_list[elem], [prop], transformFunc.getValue(effectors_list[elem])[prop] + parseInt(val))
                    // console.log(effectors_list[elem].style[prop])
                    // console.log(val)
                    // }
                    // }
                }
                // !INCDEC
            }
            //
            // console.log(effectors_groups.length)
            for (var elem = 0; elem < effectors_groups.length; elem++) {
                // console.log(effectors_groups.length)
                for (var all_elems = 0; all_elems < effectors_groups[elem].length; all_elems++) {
                    effectors_groups[elem][all_elems].style.transition = json.effectors.groups[elem].transitions
                    console.log(effectors_groups[elem][all_elems])
                    var property = json.effectors.groups[elem].functions.change.prop
                    var property_value = json.effectors.groups[elem].functions.change.val
                    for (var propCount = 0; propCount < json.effectors.groups[elem].functions.change.prop.length; propCount++) {
                        // for (var prop of json.effectors.groups[elem].functions.change.prop) {
                        // for (var val of json.effectors.groups[elem].functions.change.val) {
                        // !WOW
                        // if(prop == 'link to'){
                        //     effectors_groups[elem][all_elems].bhejdo -to link 
                        // }
                        // ApplyFunction(effectors_groups[elem][all_elems], prop, val)
                        console.log(effectors_groups[elem][all_elems], property[propCount], property_value[propCount])
                        InteracStyles.UpdateStyles({ element: effectors_groups[elem][all_elems], property: property[propCount], value: property_value[propCount] })
                    }

                    // transformFunc.updateValue(effectors_groups[elem][all_elems], [prop], val)
                    // effectors_groups[elem][all_elems].style[prop] = val
                    // console.log(effectors_groups[elem][all_elems].style[prop])
                    // }
                    // }
                    // ?
                    var property = json.effectors.groups[elem].functions.incdec.prop
                    var property_value = json.effectors.groups[elem].functions.incdec.val
                    var property_sign = json.effectors.groups[elem].functions.incdec.sign

                    for (var propCount = 0; propCount < json.effectors.groups[elem].functions.incdec.prop.length; propCount++) {

                        // for (var prop of json.effectors.groups[elem].functions.incdec.prop) {
                        // for (var val of json.effectors.groups[elem].functions.incdec.val) {
                        // for (var sign of json.effectors.groups[elem].functions.incdec.sign) {
                        // !WOW
                        // if(prop == 'link to'){
                        //     effectors_groups[elem][all_elems].bhejdo -to link 
                        // }
                        // ApplyFunction(effectors_groups[elem][all_elems], prop, val, sign)
                        InteracStyles.UpdateStyles({ element: effectors_groups[elem][all_elems], property: property[propCount], value: property_value[propCount], incdecsign: property_sign[propCount] })
                        // effectors_groups[elem][all_elems].style[prop] = val
                        // console.log(effectors_groups[elem][all_elems].style[prop])
                        // }
                        // }
                    }
                    // !INCDEC
                }

            }
            // !ALL Group functioning end
            // ? Itself functioning;
            if (json.this.transitions != '' && json.this.transitions != null && json.this.transitions != undefined) {
                this.style.transition = json.this.transitions;
            }
            var property = json.this.functions.change.prop
            var property_value = json.this.functions.change.val
            for (var propCount = 0; propCount < json.this.functions.change.prop.length; propCount++) {
                // for (var prop of json.this.functions.change.prop) {
                // for (var val of json.this.functions.change.val) {
                // ApplyFunction(this, prop, val)
                InteracStyles.UpdateStyles({ element: this, property: property[propCount], value: property_value[propCount], })
                // }
            }
            // INCDEC PROPS
            var property = json.this.functions.incdec.prop
            var property_value = json.this.functions.incdec.val
            var property_sign = json.this.functions.incdec.sign
            for (var propCount = 0; propCount < json.this.functions.incdec.prop.length; propCount++) {
                // for (var prop of json.this.functions.incdec.prop) {
                // for (var val of json.this.functions.incdec.val) {
                // for (var sign of json.this.functions.incdec.sign) {
                InteracStyles.UpdateStyles({ element: this, property: property[propCount], value: property_value[propCount], incdecsign: property_sign[propCount] })
                // ApplyFunction(this, prop, val, sign)
            }
            // }
            // }
            // !INCDEC
            //  !! Itself functioning;
        })
        // }
        // !Evvent End
    }}

}

function GetFunctionValue(el, prop, value, incdecsign) { }

function ApplyFunction(el, prop, value, incdecsign) {
    switch (prop) {
        case 'height':
        case 'width':
        case 'position-y':
        case 'position-x':
        case 'rotate':
            if (incdecsign == undefined) {
                transformFunc.updateValue(el, prop, value)
            } else {
                if (incdecsign == '+') {
                    transformFunc.updateValue(el, prop, transformFunc.getValue(el)[prop] + parseFloat(value))
                } else if (incdecsign == '-') {
                    transformFunc.updateValue(el, prop, transformFunc.getValue(el)[prop] - parseFloat(value))
                }

            }
            break

        case 'font-size':
        case 'padding-right':
        case 'padding-top':
        case 'padding-bottom':
        case 'padding-left':
        case 'letter-spacing':
        case 'word-spacing':
        case 'line-height':
        case 'webkit-text-stroke-width':
            if (incdecsign == undefined) {
                el.style[snakeToCamel(prop)] = value

            } else {
                if (incdecsign == '+') {
                    el.style[snakeToCamel(prop)] = parseInt(el.style[snakeToCamel(prop)]) + parseInt(value) + "px"
                } else if (incdecsign == '-') {
                    el.style[snakeToCamel(prop)] = parseInt(el.style[snakeToCamel(prop)]) - parseInt(value) + "px"
                }

            }


            break
        case 'border-top-left-radius':
        case 'border-top-right-radius':
        case 'border-bottom-left-radius':
        case 'border-bottom-right-radius':
        case 'border-radius':
        case 'color':
        case 'background-color':
        case 'webkit-text-stroke-color':
        case 'display':
        case 'font-family':
        case 'text-shadow':
            el.style[snakeToCamel(prop)] = value
            break
        case 'innerText':
            el.innerText = value
            break
        case 'scroll-x':
            el.scrollBy(value, 0)
            break
        case 'scroll-y':
            el.scrollBy(0, value)
            break

        case 'scroll-x':
            var scrolled = el.children[0].getBoundingClientRect().x - el.getBoundingClientRect().x
            el.scrollBy(scrolled - parseInt(value), 0)
            break

        case 'scroll-y':
            var scrolled = el.children[0].getBoundingClientRect().y - el.getBoundingClientRect().y
            el.scrollBy(0, scrolled - parseInt(value))
            break



    }
}





// function CreateFunctionEditorDiv(json) {
//     var editorDiv = InteractFunctionEditor.cloneNode(true);
//     // VALueSettings

//     editorDiv.querySelector('[event]').value = json.event || '';
//     editorDiv.querySelector('.function_name').value = json.function_name || '';


//     // EVENTLISTENERD


// }

const add_InteractFunctionEditor_btn = document.querySelector('#add_InteractFunctionEditor_btn');
add_InteractFunctionEditor_btn.onclick = (e) => {
    // e.target.parentNode.insertBefore(FunctioneditorCreateDivs.CreateFunctionEditorDiv({}), e.target)
    FunctioneditorCreateDivs.CreateFunctionEditorDiv({})
}
// Object.keys(InteractFunctions).forEach(function(key) {
//     InteractFunctionCreator(InteractFunctions[key])
// })
export const FunctioneditorCreateDivs = {
    ResetFuncDiv:function () {
        for(var el of functions_div.querySelectorAll('.InteractFunctionEditor')){
            el.remove()
        }
    },
    CreateFunctionEditorDiv: function (json,run) {
        var editordiv = InteractFunctionEditor.cloneNode(true);
        editordiv.id = getUniqueid('InteractFunctionEditor')
        editordiv.querySelector('.function_event').value = json.event || 'onclick';
        editordiv.querySelector('.function_name').value = json.name || '';


        //    Expander // 
        editordiv.querySelector('.InteractFunctionEditor_height_btn').onclick = (e) => {
            {
                if (e.target.parentNode.style.height == "5vh") {
                    e.target.style.transform = "rotate(180deg)"
                    e.target.style.transition = "all 1s linear"
                    e.target.parentNode.style.height = "fit-content"


                } else {
                    e.target.style.transform = ""
                    e.target.style.transition = "all 1s linear"
                    e.target.parentNode.style.height = "5vh"

                }
            }
        }
        var add_triggerer_selector = editordiv.querySelector('.add_triggerer_selector')
        var add_effector_selector = editordiv.querySelector('.add_effector_selector')
        editordiv.querySelector('.add_triggerer_selector').addEventListener('click', function () {
            this.parentNode.insertBefore(FunctioneditorCreateDivs.CreateTriggererSelector(), this)
        })
        editordiv.querySelector('.add_effector_selector').addEventListener('click', function () {
            FunctioneditorCreateDivs.AddEffectorSelectorFunctioner(editordiv)
        })

        editordiv.querySelector('.delete_function').addEventListener('click', function (e) {
            if (InteractFunctions[editordiv.querySelector('.function_name').value] != undefined) {
                delete InteractFunctions[editordiv.querySelector('.function_name').value]
            }
            editordiv.remove()
        })
        try {
            for (var effector of json.effectors.names) {
                console.log(effector, "trans", effector.transitions, "func", effector.functions)
                console.log(effector.name)
                FunctioneditorCreateDivs.AddEffectorSelectorFunctioner(editordiv, { type: "element_name", name: effector.name, functions: effector.functions, transitions: effector.transitions })
            }
            for (var effector of json.effectors.groups) {
                console.log(effector.group)
                FunctioneditorCreateDivs.AddEffectorSelectorFunctioner(editordiv, { type: "element_group", group: effector.group, functions: effector.functions, transitions: effector.transitions })


            }
        } catch (err) {
            console.log(err)
         }
        // !!!!
        // ???TRIgger
        try {
            for (var triggerer of json.triggerers.names) {
                add_triggerer_selector.parentNode.insertBefore(FunctioneditorCreateDivs.CreateTriggererSelector({ name: triggerer, type: "element_name" }), add_triggerer_selector)

            }
            for (var triggerer of json.triggerers.groups) {
                add_triggerer_selector.parentNode.insertBefore(FunctioneditorCreateDivs.CreateTriggererSelector({ group: triggerer, type: "element_group" }), add_triggerer_selector)

            }
        } catch (err) {
            console.log(err)
         }

        editordiv.querySelector('.enable_function').addEventListener('click',function(){
            AddfunctiontoJson(this)
        })

        // return editordiv
        document.querySelector('#add_InteractFunctionEditor_btn').parentNode.insertBefore(editordiv, document.querySelector('#add_InteractFunctionEditor_btn'))
        console.log(json)
    if(run == true){
           AddfunctiontoJson(editordiv.querySelector('.enable_function'))
    }

    },
    CreateTriggererSelector: function (json) {
        var TrigggererSelect = FunctioneditorCreateDivs.CreateCustomSelectTag()
        if (json != undefined) {
            if (json.type == "element_name") {
                TrigggererSelect.querySelector('.selectTag_value').innerHTML = `<i class="bi bi-file element_name_icon" ></i>${json.name}`
                TrigggererSelect.setAttribute('value', json.name);

                TrigggererSelect.setAttribute('type', json.type)
            } else {
                TrigggererSelect.querySelector('.selectTag_value').innerHTML = `<i class="bi bi-file element_group_icon" ></i>${json.group}`
                TrigggererSelect.setAttribute('value', json.group);

                TrigggererSelect.setAttribute('type', json.type)

            }
        } else {

        }
        TrigggererSelect.classList.add('triggerer_selector')
        update_triggerer_selector(TrigggererSelect)
        TrigggererSelect.querySelector('.delete_effector_selector').addEventListener('click',function(){
            this.parentNode.remove()
        })
        console.log(TrigggererSelect)
        return TrigggererSelect
    }

    ,
    AddEffectorSelectorFunctioner: function (FunctioneditorDiv_, json) {
        var EffectorSelect = FunctioneditorCreateDivs.CreateCustomSelectTag()
        if (json != undefined) {
            if (json.type == "element_name") {
                EffectorSelect.querySelector('.selectTag_value').innerHTML = `<i class="bi bi-file element_name_icon" ></i>${json.name}`
                EffectorSelect.setAttribute('value', json.name);
                EffectorSelect.setAttribute('type', json.type)

            } else if (json.type == "element_group") {
                EffectorSelect.querySelector('.selectTag_value').innerHTML = `<i class="bi bi-file element_group_icon" ></i>${json.group}`
                EffectorSelect.setAttribute('value', json.name);
                EffectorSelect.setAttribute('type', json.type)

            }
        } else {

        }
        EffectorSelect.querySelector('.delete_effector_selector').addEventListener('click',function(){
            document.body.querySelector(`[functions_transitions_controller_for=${this.parentNode.id}]`).remove()
            this.parentNode.remove()
        })
        EffectorSelect.classList.add('effector_selector')
        EffectorSelect.id = getUniqueid('EffectorSelector');
        update_effector_selector(EffectorSelect)
        // var functions_transitions_controller = functions_transitions_controller_div.cloneNode(true);
        FunctioneditorDiv_.querySelector('.effectors_container').insertBefore(EffectorSelect, FunctioneditorDiv_.querySelector('.add_effector_selector'))


        try {
            FunctioneditorDiv_.insertBefore(FunctioneditorCreateDivs.CreateFuncsndTransitionsController({ id: EffectorSelect.id, functions: json.functions, transitions: json.transitions }), FunctioneditorDiv_.querySelector('.enable_function'))
        } catch (err) {
            FunctioneditorDiv_.insertBefore(FunctioneditorCreateDivs.CreateFuncsndTransitionsController({ id: EffectorSelect.id }), FunctioneditorDiv_.querySelector('.enable_function'))
        }


        EffectorSelect.addEventListener('click', function () {
            if (this.getAttribute('value') != null) {
                // console.log(FunctioneditorDiv_.querySelector(`[functions_transitions_controller_for=${this.id}]`).style.display != "block")
                if (FunctioneditorDiv_.querySelector(`[functions_transitions_controller_for=${this.id}]`).style.display != "block") {

                    for (el of FunctioneditorDiv_.querySelectorAll(`[functions_transitions_controller_for]`)) {
                        el.style.display = "none"
                    }
                    for (el of FunctioneditorDiv_.querySelectorAll(`.effector_selector`)) {
                        el.setAttribute('effectors-selected', 'false')
                    }

                    FunctioneditorDiv_.querySelector(`[functions_transitions_controller_for=${this.id}]`).style.display = "block"
                    this.setAttribute('effectors-selected', 'true')


                } else {
                    FunctioneditorDiv_.querySelector(`[functions_transitions_controller_for=${this.id}]`).style.display = "none"
                    this.setAttribute('effectors-selected', 'false')
                }
            }
        })


    },

    CreateFuncsndTransitionsController: function (json) {

        var ftc = functions_transitions_controller_div.cloneNode(true);
        ftc.setAttribute('functions_transitions_controller_for', json.id)
        var add_property_selector_container = ftc.querySelector('.add_property_selector_container');
        var add_incdecproperty_selector_container = ftc.querySelector('.add_incdecproperty_selector_container');

        ftc.querySelector('.add_property_selector_container').addEventListener('click', function () {
            this.parentNode.insertBefore(FunctioneditorCreateDivs.CreatePropertySelector(), this)
        })

        try {
            for (var propCount = 0; propCount < json.functions.change.prop.length; propCount++) {
                console.log(json.functions.change.prop[propCount])
                var property_selector = FunctioneditorCreateDivs.CreatePropertySelector()
                property_selector.replaceChild(CreateFunctionalityPropValueDiv({ prop: json.functions.change.prop[propCount], val: json.functions.change.val[propCount] }), property_selector.querySelector('.property_selector'))

                add_property_selector_container.parentNode.insertBefore(property_selector, add_property_selector_container)
            }
            for (var propCount = 0; propCount < json.functions.incdec.prop.length; propCount++) {
                console.log(json.functions.incdec.sign[propCount])
                var property_selector = FunctioneditorCreateDivs.CreatePropertySelector()
                property_selector.replaceChild(CreateFunctionalityPropValueDiv({ prop: json.functions.incdec.prop[propCount], val: json.functions.incdec.val[propCount], incdec: json.functions.incdec.sign[propCount] }), property_selector.querySelector('.property_selector'))

                add_incdecproperty_selector_container.parentNode.insertBefore(property_selector, add_incdecproperty_selector_container)
            }
        } catch (err) { }
        // !!!
        ftc.querySelector('.add_incdecproperty_selector_container').addEventListener('click', function () {
            this.parentNode.insertBefore(FunctioneditorCreateDivs.CreateIncdecPropertySelector(), this)
        })
        for (var elem of ftc.querySelectorAll('.functiontags')) {
            elem.onclick = (e) => {
                // console.log("edededededededededededed")
                // for (el of document.querySelectorAll('.function_tagcontent')) {
                //     el.style.display = "none"

                // }

                if (e.target.innerText == 'Function') {
                    e.target.parentNode.nextElementSibling.style.display = "block"
                    e.target.classList.add('collapsed_div')
                    e.target.nextElementSibling.classList.remove('collapsed_div')
                    e.target.parentNode.nextElementSibling.nextElementSibling.style.display = "none"
                } else {
                    e.target.parentNode.nextElementSibling.nextElementSibling.style.display = "block"
                    e.target.parentNode.nextElementSibling.style.display = "none"
                    e.target.classList.add('collapsed_div')
                    e.target.previousElementSibling.classList.remove('collapsed_div')

                }
            }
        }
        ftc.querySelector("[container_div_for=transitions]").addEventListener('input', function (e) {
            var transition;
            // console.log(el)
            // if (e.target.getAttribute('container_div_for') == null) {
            //     var transitions_controller = getparent(e.target, "container_for_transitions")
            // } else {
            //     var transitions_controller = e.target
            // }
            var transitions_controller = this
            // console.log(transitions_controller)
            // console.log(e.target.getAttribute('container_div_for'))
            var tc_count = transitions_controller.querySelectorAll('[div_for=transitions]').length;
            transition = `${transitions_controller.querySelector('.transition-for').value || 'all'} ${transitions_controller.querySelector('.transition-duration').value || 0}s ${transitions_controller.querySelector('.transition-timing-function').value || 0} ${transitions_controller.querySelector('.transition-delay').value || 0}s`

            if (tc_count > 1) {
                for (var i = 1; i < transitions_controller.querySelectorAll('[div_for=transitions]').length; i++) {
                    transition += `,${transitions_controller.querySelectorAll('.transition-for')[i].value || 'all'} ${transitions_controller.querySelectorAll('.transition-duration')[i].value || 0}s ${transitions_controller.querySelectorAll('.transition-timing-function')[i].value || 0} ${transitions_controller.querySelectorAll('.transition-delay')[i].value || 0}s`
                }
            }
            // console.log(transition)
            this.setAttribute('prop_value', transition)

        })
        try {
            for (var transition of json.transitions.split(',')) {
                ftc.querySelector('.add_transitions_controller').parentNode.insertBefore(FunctioneditorCreateDivs.CreateTransitionsController(transition), ftc.querySelector('.add_transitions_controller'))
            }
        } catch (err) {
            ftc.querySelector('.add_transitions_controller').parentNode.insertBefore(FunctioneditorCreateDivs.CreateTransitionsController(), ftc.querySelector('.add_transitions_controller'))
        }

        ftc.querySelector('.add_transitions_controller').addEventListener('click', function () {
            this.parentNode.insertBefore(FunctioneditorCreateDivs.CreateTransitionsController(), this)
        })

        for (el of ftc.querySelectorAll('[props_container_tile]')) {
            el.addEventListener('click', function () {
                for (el of ftc.querySelectorAll('[props_container]')) {
                    el.style.display = "none"
                }
                for (el of ftc.querySelectorAll('[props_container_tile]')) {
                    el.classList.remove('collapsed_div')
                }
                ftc.querySelector(`[props_container=${this.getAttribute('props_container_tile')}]`).style.display = "block"
                this.classList.add('collapsed_div')

            })
        }

        return ftc
    },
    CreateTransitionsController: function (transition) {
        console.log(transition)
        var tc = transitions_controller.cloneNode(true)
        if (transition != undefined) {
            var transition = transition.split(' ');
            tc.querySelector('.transition-for').value = transition[0]
            tc.querySelector('.transition-duration').value = parseInt(transition[1])
            tc.querySelector('.transition-timing-function').value = transition[2]
            tc.querySelector('.transition-delay').value = parseInt(transition[3])
        }

        return tc
    },
    CreateCustomSelectTag: function () {
        var customSelectTag = CustomSelectTag.cloneNode(true)
        customSelectTag.querySelector('.selectTagOptionShow').addEventListener('click', function () {
            // console.log(this.parentNode)xx
            if (this.nextElementSibling.style.display == "block") {
                this.nextElementSibling.style.display = "none"
            } else {
                // var original_height = this.parentNode.style.height
                this.nextElementSibling.style.display = "block"
                this.nextElementSibling.style.left = this.parentNode.getBoundingClientRect().x + "px"
                this.nextElementSibling.style.top = this.parentNode.getBoundingClientRect().y + 25 + "px"
            }
        })
        return customSelectTag
    },
    CreatePropValContainer: function () {

    },
    CreatePropertySelector: function () {
        var ps = property_selector_container.cloneNode(true)
        var ps_modal = ps.querySelector('.property_selector-prop-modal')
        ps.querySelector('.property_selector').addEventListener('click', function (e) {
            if (getparent(e.target, 'property_selector-prop-modal') == null) {
                if (ps_modal.style.display != "block") {

                    // ?
                    var effector_id = getparent(ps, 'functions_transitions_controller').getAttribute('functions_transitions_controller_for')
                    var effector_element_name = document.querySelector(`#${effector_id}`).getAttribute('value')
                    if (document.querySelector(`#${effector_id}`).getAttribute('type') == 'element_name') {
                        var effector_element = document.querySelector(`[element_name=${effector_element_name}]`)
                    } else if (document.querySelector(`#${effector_id}`).getAttribute('type') == 'element_group') {
                        var effector_element = document.querySelector(`[element_groups=${effector_element_name}]`)

                    } else if (document.querySelector(`#${effector_id}`).getAttribute('type') == 'element_itself') {
                        var trigger_el = getparent(ps, 'InteractFunctionEditor').querySelector('.triggerer_selector')
                        if (trigger_el.getAttribute('type') == 'element_name') {
                            var effector_element = document.querySelector(`[element_name=${trigger_el.getAttribute('value')}]`)

                        } else {
                            // !!!!
                            var effector_element = document.querySelector(`[element_groups=${trigger_el.getAttribute('value')}]`)
                        }

                    }
                    // !!
                    // const player = new Plyr('video', {,loop:{active:true},controls:[]});
                    ps_modal.style.display = "block"
                    ps_modal.append(CreateSubPropChooserModal.CreateTransformMinModal(effector_element))
                    ps_modal.append(CreateSubPropChooserModal.CreateBorderRadiusMinModal())
                    ps_modal.append(CreateSubPropChooserModal.CreateBorderMinModal())
                    ps_modal.append(CreateSubPropChooserModal.CreateTextMinModal(effector_element))
                    ps_modal.append(CreateSubPropChooserModal.CreateBackgroundMinModal(effector_element))
                    ps_modal.append(CreateSubPropChooserModal.CreateDrawingMinModal(effector_element))
                    ps_modal.append(CreateSubPropChooserModal.CreateScrollMinModal(effector_element))
                    ps_modal.append(CreateSubPropChooserModal.CreateChangefileMinModal(effector_element))
                    ps_modal.append(CreateFunctionalityPropValueDiv({ prop: 'display', val: 'show' }))
                    ps_modal.append(CreateFunctionalityPropValueDiv({ prop: 'innerText', val: effector_element.innerText || '' }))
                    ps_modal.append(CreateFunctionalityPropValueDiv({ prop: 'text-shadow', val: effector_element.style.textShadow || '' }))
                    ps_modal.append(CreateFunctionalityPropValueDiv({ prop: 'drop-shadow', val: effector_element.style.filter || '' }))

                    //    positioning
                    if ((this.getBoundingClientRect().bottom + ps_modal.getBoundingClientRect().height) < window.innerHeight) {
                        ps_modal.style.top = this.getBoundingClientRect().bottom + "px"
                        ps_modal.style.left = this.getBoundingClientRect().left + "px"
                        ps_modal.style.maxHeight = (window.innerHeight - this.getBoundingClientRect().bottom) + "px"
                    } else {
                        ps_modal.style.top = (this.getBoundingClientRect().top - ps_modal.getBoundingClientRect().height) + "px"
                        ps_modal.style.left = this.getBoundingClientRect().left + "px"

                    }
                    //    !! positioning


                    for (el of ps.querySelectorAll('[Functionality_prop]')) {
                        el.addEventListener('click', function (e) {
                            getparent(this, 'property_selector_container').replaceChild(CreateFunctionalityPropValueDiv({ prop: this.getAttribute('Functionality_prop'), val: this.getAttribute('Functionality_prop-value') }), getparent(this, 'property_selector'))
                        })
                    }

                    for (el of ps.querySelectorAll('input,select')) {
                        el.disabled = true
                    }

                    for (el of ps_modal.children) {
                        el.classList.add('property_selector-prop')
                    }
                    for (el of ps.querySelectorAll('.divninput_hover')) {
                        el.classList.remove('divninput_hover')
                        el.classList.add('divninput_not_hover')
                    }
                    for(var el of ps_modal.querySelectorAll('[arrowboxbtnfor]')){
                    RemoveArrowBox(el)}
                } else {
                    ps_modal.style.display = "none"
                    ps_modal.innerHTML = ""
                }
            }

        })

        return ps
    },
    CreateIncdecPropertySelector: function () {
        var ps = property_selector_container.cloneNode(true)
        var ps_modal = ps.querySelector('.property_selector-prop-modal')
        ps.querySelector('.property_selector').addEventListener('click', function (e) {
            if (getparent(e.target, 'property_selector-prop-modal') == null) {
                if (ps_modal.style.display != "block") {
                    // ?
                    var effector_id = getparent(ps, 'functions_transitions_controller').getAttribute('functions_transitions_controller_for')
                    var effector_element_name = document.querySelector(`#${effector_id}`).getAttribute('value')
                    if (document.querySelector(`#${effector_id}`).getAttribute('type') == 'element_name') {
                        var effector_element = document.querySelector(`[element_name=${effector_element_name}]`)
                    } else {
                        var effector_element = document.querySelector(`[element_groups=${effector_element_name}]`)

                    }
                    // !!
                    ps_modal.style.display = "block"
                    ps_modal.append(CreateSubPropChooserModal.CreateTransformMinModal(effector_element))
                    ps_modal.append(CreateSubPropChooserModal.CreateIncdecTextMinModal(effector_element))

                    // positionning

                    if ((this.getBoundingClientRect().bottom + ps_modal.getBoundingClientRect().height) < window.innerHeight) {
                        ps_modal.style.top = this.getBoundingClientRect().bottom + "px"
                        ps_modal.style.left = this.getBoundingClientRect().left + "px"
                        ps_modal.style.maxHeight = (window.innerHeight - this.getBoundingClientRect().bottom) + "px"
                    } else {
                        ps_modal.style.top = (this.getBoundingClientRect().top - ps_modal.getBoundingClientRect().height) + "px"
                        ps_modal.style.left = this.getBoundingClientRect().left + "px"

                    }
                    // positionning
                    for (el of ps.querySelectorAll('[Functionality_prop]')) {
                        el.addEventListener('click', function (e) {
                            getparent(this, 'property_selector_container').replaceChild(CreateFunctionalityPropValueDiv({ prop: this.getAttribute('Functionality_prop'), val: '10', incdec: '+' }), getparent(this, 'property_selector'))
                        })
                    }
                    for (el of ps.querySelectorAll('input,select')) {
                        el.disabled = true
                    }

                    for (el of ps_modal.children) {
                        el.classList.add('property_selector-prop')
                    }
                    for (el of ps.querySelectorAll('.divninput_hover')) {
                        el.classList.remove('divninput_hover')
                        el.classList.add('divninput_not_hover')
                    }
                } else {
                    ps_modal.style.display = "none"
                    ps_modal.innerHTML = ""
                }
            }

        })

        return ps
    },
    deleteFunction: function (crss_targt) {
        if (getparent(crss_targt, 'InteractFunctionEditor').querySelector('.function_name').value = "") {
            getparent(crss_targt, 'InteractFunctionEditor').remove()
        } else {
            // Incomplete
            getparent(crss_targt, 'InteractFunctionEditor').remove()
        }
    }
}


var CreateFunctionalityPropValueDiv = function (json) {

    switch (json.prop) {
        case 'border-top-width':
        case 'border-left-width':
        case 'border-right-width':
        case 'border-bottom-width':
        case 'border-width':
            var div = CreateRangeValueTemplate({ prop: json.prop, val: json.val, incdec: json.incdec })
            div.querySelector('input[type=range]').addEventListener('input', function () {
                div.setAttribute('Functionality_prop-value', this.value + 'px')
            })
            setmaxminForinput(div.querySelector('input[type=range]'), json.prop)
            ModifyRangeInput({ parentEl: div, val: json.val })
        break

        case 'height':
        case 'width':
            var div = CreateRangeValueTemplate({ prop: json.prop, val: json.val, incdec: json.incdec })
            // SetPropAndListener({el:div,prop:json.prop,val:json.val})
            // div.setAttribute('Functionality_prop', json.prop)

            div.querySelector('input[type=range]').addEventListener('input', function () {
                div.setAttribute('Functionality_prop-value', this.value + 'px')
            })
            setmaxminForinput(div.querySelector('input[type=range]'), json.prop)
            ModifyRangeInput({ parentEl: div, val: json.val })
            break
        case 'position-x':
        case 'scroll-x':

            var div = alueTemplate({ prop: json.prop, val: json.val, suffex: 'X', incdec: json.incdec })

            div.setAttribute('Functionality_prop', json.prop)
            div.querySelector('input[type=range]').addEventListener('input', function () {
                div.setAttribute('Functionality_prop-value', this.value)
            })
            setmaxminForinput(div.querySelector('input[type=range]'), json.prop)
            ModifyRangeInput({ parentEl: div, val: json.val })
            break
        case 'position-y':
        case 'scroll-y':

            var div = CreateRangeValueTemplate({ prop: json.prop, val: json.val, suffex: 'Y', incdec: json.incdec })
            div.setAttribute('Functionality_prop', json.prop)
            div.querySelector('input[type=range]').addEventListener('input', function () {
                div.setAttribute('Functionality_prop-value', this.value)
            })
            setmaxminForinput(div.querySelector('input[type=range]'), json.prop)

            ModifyRangeInput({ parentEl: div, val: json.val })
            break
        case 'rotate':
            var div = CreateRangeValueTemplate({ prop: json.prop, val: json.val, suffex: 'deg', incdec: json.incdec })
            div.setAttribute('Functionality_prop', json.prop)
            div.querySelector('input[type=range]').addEventListener('input', function () {
                div.setAttribute('Functionality_prop-value', this.value + 'deg')
            })

            setmaxminForinput(div.querySelector('input[type=range]'), json.prop)
            ModifyRangeInput({ parentEl: div, val: json.val })
            break
        // case 'font-family':
        case 'display':
            var div = document.createElement('div');
            // div.classList.add('property_selector-prop')
            div.style.gridTemplateColumns = "1fr 2fr 2fr"
            if (json.val == "hide") {
                div.innerHTML = `<i class="bi bi-eye-slash"></i> <span>Display</span> <select name="" id="" value="none"> <option value="none" selected>hide</option><option value="block">show</option> </select>`
            } else {
                div.innerHTML = `<i class="bi bi-eye"></i>Display <select name="" id="" > <option value="none" >hide</option><option value="block" selected>show</option> </select>`
            }
            var icon = div.querySelector('.bi');
            div.setAttribute('Functionality_prop', json.prop);
            div.querySelector('select').addEventListener('input', function () {
                div.setAttribute('Functionality_prop-value', this.value)
                var icon = this.parentNode.querySelector('.bi');

                console.log(icon)
                console.log(div.querySelector('select'))
                if (this.value == "block") {
                    icon.classList.add('bi-eye')
                    console.log('krdiya')
                    icon.classList.remove('bi-eye-slash')
                } else {
                    icon.classList.remove('bi-eye')
                    icon.classList.add('bi-eye-slash')

                }
            })
            div.setAttribute('Functionality_prop-value', json.val || 'block')

            break
        case 'innerText':
            var div = document.createElement('div');
            // div.classList.add('property_selector-prop')
            div.style.gridTemplateColumns = "1fr 2fr 2fr"
            div.innerHTML = `<i class="bi bi-file-earmark-text"></i>InnerText <span></span>`
            div.setAttribute('Functionality_prop', json.prop)
            var textdiv = document.createElement('div');
            textdiv.contentEditable = true;
            textdiv.innerText = json.val || ''
            textdiv.classList.add('innertextvaldiv');
            div.setAttribute('Functionality_prop-value', json.val || "")
            textdiv.addEventListener('input', function () {
                div.setAttribute('Functionality_prop-value', this.innerText)
            })
            NewArrowBox({
                for: div,
                data: textdiv,
                event: 'click'
            })

            break
        case 'src':
            var div = document.createElement('div');
            // div.classList.add('property_selector-prop')
            div.style.gridTemplateColumns = "1fr 2fr 2fr"
            div.innerHTML = `<i class="bi bi-file-earmark-text"></i>InnerText <span></span>`
            div.setAttribute('Functionality_prop', json.prop)
            var textdiv = document.createElement('input');
            textdiv.value = json.val || ''
            textdiv.classList.add('innertextvaldiv');
            div.setAttribute('Functionality_prop-value', json.val || "")
            textdiv.addEventListener('input', function () {
                div.setAttribute('Functionality_prop-value', this.value)
            })
            NewArrowBox({
                for: div,
                data: textdiv,
                event: 'click'
            })

            break
        // case 'background-color':
        //     var div = document.createElement('div');
        //     div.classList.add('textnval', 'rangeinputdiv')
        //     div.innerHTML = `<span class="tile"> font-color </span> <input type="color" name="" id="" class="range_value">`
        //     var color_inpt = div.querySelector('input');
        //     color_inpt.value = tinycolor(json.val).toHexString() || '';
        //     color_inpt.oninput = (e) => {
        //         div.setAttribute('Functionality_prop-value', tinycolor(e.target.value).toHexString())
        //     }
        //     break
        case 'border-top-left-radius':
        case 'border-top-right-radius':
        case 'border-bottom-left-radius':
        case 'border-bottom-right-radius':
        case 'border-radius':
            var div = document.createElement('div');
            div.innerHTML = ` <span class="material-icons border_icon">rounded_corner</span>
            <input type="number" class="border one_grid" style-attr="border-radius" placeholder="" name="" value="0 min=" 0"="" max="50" step="1"> /
            <input type="number" class="border one_grid" placeholder="" style-attr="border-radius-elliptic" value"0"="" name="" min="0" max="50" step="1" disabled="">
            <span class="form-check form-switch" style="display: inline-flex;z-index: 1;position: relative;right: -5px;">
        <input class="form-check-input border_radius_style_switcher" type="checkbox"></span> `
            var icon = div.querySelector('.border_icon')
            var br = div.querySelector(`[style-attr=border-radius]`)
            var bre = div.querySelector('[style-attr=border-radius-elliptic]')
            var switcher = div.querySelector('.border_radius_style_switcher')
            switch (json.prop) {
                case 'border-radius':
                    icon.innerText = 'crop_free'
                    break
                case 'border-top-left-radius':
                    icon.style.transform = 'rotate(270deg)'
                    break
                case 'border-top-right-radius':
                    icon.style.transform = 'rotate(360deg)'
                    break
                case 'border-bottom-left-radius':
                    icon.style.transform = 'rotate(180deg)'
                    break
                case 'border-bottom-right-radius':
                    icon.style.transform = 'rotate(90deg)'
                    break
            }
            for (el of div.querySelectorAll('.border_radius_style_switcher')) {
                el.addEventListener('input', function () {
                    if (this.checked) {

                        this.parentNode.previousElementSibling.disabled = false;
                    } else {
                        this.parentNode.previousElementSibling.disabled = true;
                    }
                })
            }

            if (json.val.split(' ').lenght != 1) {
                br.value = parseInt(json.val.split(' ')[0])
                bre.value = parseInt(json.val.split(' ')[1])
                switcher.checked = false;
            } else {
                br.value = parseInt(json.val.split(' ')[0])
                br.disabled = true
                switcher.checked = true
            }

            div.addEventListener('input', function () {
                if (this.querySelector('.border_radius_style_switcher').checked) {
                    this.setAttribute('Functionality_prop-value', `${br.value}% ${bre.value || 0}%`)
                } else {
                    this.setAttribute('Functionality_prop-value', `${br.value}%`)

                }
            })

            break
        case 'color':
        case 'background-color':
        case 'webkit-text-stroke-color':
        case 'border-color':
        case "border-top-color":
        case "border-left-color":
        case "border-right-color":
        case "border-bottom-color":
            var div = document.createElement('div');
            div.classList.add('textnval', 'rangeinputdiv')
            switch (json.prop) {
                case "color":
                    div.innerHTML = `<span class="tile"> font-color </span> <input type="color" name="" id="" class="range_value">`
                    break
                case "background-color":
                    div.innerHTML = `<span class="tile"> background-color </span> <input type="color" name="" id="" class="range_value">`
                    break

                case "webkit-text-stroke-color":
                    div.innerHTML = `<span class="tile"> stroke-color </span> <input type="color" name="" id="" class="range_value">`
                    break
                case "border-color":
                case "border-top-color":
                case "border-left-color":
                case "border-right-color":
                case "border-bottom-color":
                    div.innerHTML = `<span class="tile"> ${json.prop} </span> <input type="color" name="" id="" class="range_value">`
                    break

            }
            var color_inpt = div.querySelector('input');
            color_inpt.value = tinycolor(json.val).toHexString() || '';
            color_inpt.oninput = (e) => {
                div.setAttribute('Functionality_prop-value', tinycolor(e.target.value).toHexString())
            }
            break
        case 'padding-top':
        case 'padding-left':
        case 'padding-right':
        case 'padding-bottom':
        case 'line-height':
        case 'word-spacing':
        case 'letter-spacing':
        case 'font-size':
        case "webkit-text-stroke-width":
            switch (json.prop) {
                case 'padding-top':
                    var div = CreateRangeValueTemplate({ prop: json.prop, val: json.val, icon: `<span style="font-size:90%;transform:scaleX(1.5);"><i class="bi bi-layout-text-sidebar"></i></span>`, incdec: json.incdec })
                    break
                case 'padding-left':
                    var div = CreateRangeValueTemplate({ prop: json.prop, val: json.val, icon: `<span style="font-size:90%;transform:scaleX(1.5);"><i class="bi bi-layout-text-sidebar"></i></span>`, incdec: json.incdec })
                    break
                case 'padding-right':
                    var div = CreateRangeValueTemplate({ prop: json.prop, val: json.val, icon: `<span style="font-size:90%;transform:scaleX(1.5);"><i class="bi bi-layout-text-sidebar"></i></span>`, incdec: json.incdec })
                    break
                case 'padding-bottom':
                    var div = CreateRangeValueTemplate({ prop: json.prop, val: json.val, icon: `<span style="font-size:90%;transform:scaleX(1.5);"><i class="bi bi-layout-text-sidebar"></i></span>`, incdec: json.incdec })
                    break
                case 'line-height':
                    var div = CreateRangeValueTemplate({ prop: json.prop, val: json.val, icon: `<span class="tile">ab<i class="bi bi-arrows-collapse"></i>ab</span>`, incdec: json.incdec })
                    break
                case 'word-spacing':
                    var div = CreateRangeValueTemplate({ prop: json.prop, val: json.val, icon: `<span class="tile">ab<i class="bi bi-arrow-left-right"></i>ab</span>`, incdec: json.incdec })
                    break
                case 'letter-spacing':
                    var div = CreateRangeValueTemplate({ prop: json.prop, val: json.val, icon: `<span class="tile">a<i class="bi bi-arrow-left-right"></i>b </span>`, incdec: json.incdec })
                    break
                case 'font-size':
                    var div = CreateRangeValueTemplate({ prop: json.prop, val: json.val, icon: `<span class="material-icons">format_size</span>`, incdec: json.incdec })
                    break
                case 'webkit-text-stroke-width':
                    var div = CreateRangeValueTemplate({ prop: 'stroke-width', val: json.val, icon: `<span class="material-icons">font_download</span>`, incdec: json.incdec })
                    break
            }

            div.setAttribute('Functionality_prop-value', json.val || "0")

            div.oninput = (e) => {
                div.setAttribute('Functionality_prop-value', div.querySelector('input').value + 'px')
            }
            setmaxminForinput(div.querySelector('input[type=range]'), json.prop)
            ModifyRangeInput({ parentEl: div, val: json.val })
            break

        case 'text-shadow':
            var div = document.createElement('div');
            // div.classList.add('property_selector-prop')
            div.style.gridTemplateColumns = "1fr 2fr 2fr"
            div.innerHTML = `<i class="bi bi-fonts" style="text-shadow:2px 2px 2px white;"></i>Text-shadow<span></span>`
            div.setAttribute('Functionality_prop', json.prop)
            var shadowdiv = CreateStyleDiv.CreateTextShadowStyleDiv(json.val)
            div.setAttribute('Functionality_prop-value', json.val || "")
            // shadowdiv.addEventListener('input', function() {
            //     div.setAttribute('Functionality_prop-value', this.innerText)
            // })
            // shadowdiv.addEventListener('click', function() {
            //     div.setAttribute('Functionality_prop-value', this.innerText)
            // })

            shadowdiv.addEventListener('click', function () {
                div.setAttribute('Functionality_prop-value', getTextshadowfromStyleDiv(shadowdiv))
            })
            shadowdiv.addEventListener('input', function () {
                div.setAttribute('Functionality_prop-value', getTextshadowfromStyleDiv(shadowdiv))

            })
            NewArrowBox({
                for: div,
                data: shadowdiv,
                event: 'click'
            })
            break
        case 'drop-shadow':
            var div = document.createElement('div');
            // div.classList.add('property_selector-prop')
            div.style.gridTemplateColumns = "1fr 2fr 2fr"
            div.innerHTML = `<i class="bi bi-aspect-ratio" style="filter:drop-shadow(2px 2px 2px white);"></i>Drop-shadow<span></span>`
            div.setAttribute('Functionality_prop', json.prop)
            var shadowdiv = CreateStyleDiv.CreateDropShadowStyleDiv()
            div.setAttribute('Functionality_prop-value', json.val || "")
            shadowdiv.addEventListener('input', function () {
                var dropShadow = `${getDropshadowfromStyleDiv(this)}&&&${getTextDropShaodw(this)}`
                div.setAttribute('Functionality_prop-value', dropShadow)
            })
            shadowdiv.addEventListener('click', function () {
                var dropShadow = `${getDropshadowfromStyleDiv(this)}&&&${getTextDropShaodw(this)}`
                div.setAttribute('Functionality_prop-value', dropShadow)
            })
            NewArrowBox({
                for: div,
                data: shadowdiv,
                event: 'click'
            })
            break
        case 'font-family':
            var div = document.createElement('div');
            // div.classList.add('property_selector-prop')
            div.style.gridTemplateColumns = "2fr 2fr"
            div.innerHTML = '<span>font-family</span>'
            div.append(FontFamilySelect.cloneNode(true));
            div.querySelector('select').value = json.value || 'arial';
            div.querySelector('select').style.fontFamily = json.value || 'arial'
            div.setAttribute('Functionality_prop-value', json.val || 'arial')
            div.querySelector('select').addEventListener('input', function () {
                div.setAttribute('Functionality_prop-value', this.value)
                this.style.fontFamily = this.value || 'arial'
            })
            break
        case 'border-top-style':
        case 'border-left-style':
        case 'border-right-style':
        case 'border-bottom-style':
        case 'border-style':
            var div = document.createElement('div');
            div.style.gridTemplateColumns = "2fr 2fr"
            div.innerHTML = `<span>${json.prop}</span>`
            div.append(BorderStyleSelect.cloneNode(true));
            div.querySelector('select').value = json.value || 'none';
            div.setAttribute('Functionality_prop-value', json.val || 'none')
            div.querySelector('select').addEventListener('input', function () {
                div.setAttribute('Functionality_prop-value', this.value)
    
            })
        break
    }
    div.setAttribute('Functionality_prop', json.prop)
    div.setAttribute('Functionality_prop-value', json.val)
    // console.log(div)
    if (json.incdec == undefined) {
        div.setAttribute('function-type', 'change')
    } else {
        div.setAttribute('function-type', 'incdec')
    }
    return div
}

// GetPropAndValue = function(div){
// div.getAttribute('prop')
// }
// ?? Chosing Modal Content
var CreateSubPropChooserModal = {
    CreateChangefileMinModal:function(){
        var div = CreatePropNameTemplate('bi-arrows-move', 'Change', true)
        div.append(CreateFunctionalityPropValueDiv({ prop: 'src', val: '' }))
        return div
    },
    CreateBorderMinModal:function(){
        var div = CreatePropNameTemplate('bi-arrows-move', 'Border', true)
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-top-width', val: '0' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-left-width', val: '0' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-right-width', val: '0' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-bottom-width', val: '0' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-width', val: '0' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-color', val: '0' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-top-color', val: '0' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-right-color', val: '0' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-left-color', val: '0' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-bottom-color', val: '0' }))
       div.append(CreateFunctionalityPropValueDiv({ prop: 'border-style', val: '' }))
       div.append(CreateFunctionalityPropValueDiv({ prop: 'border-top-style', val: '' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-left-style', val: '' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-right-style', val: '' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-bottom-style', val: '' }))
        return div
    },
    CreateScrollMinModal: function () {
        var div = CreatePropNameTemplate('bi-arrows-move', 'Scroll', true)
        div.append(CreateFunctionalityPropValueDiv({ prop: 'scroll-x', val: '0' }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'scroll-y', val: '0' }))


    },
    CreateTransformMinModal: function (element) {
        var div = CreatePropNameTemplate('bi-arrows-move', 'Transform', true)
        // if(incdec == false){

        div.append(CreateFunctionalityPropValueDiv({ prop: 'height', val: transformFunc.getValue(element).height }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'width', val: transformFunc.getValue(element).width }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'position-x', val: transformFunc.getValue(element).positionX }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'position-y', val: transformFunc.getValue(element).positionY }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'rotate', val: transformFunc.getValue(element).rotate }))
        // }
        // else{

        // }

        // for (el of div.querySelectorAll('.divninput_hover')) {
        //     el.classList.remove('divninput_hover')
        //     el.classList.add('divninput_not_hover')
        // }
        return div
    },

    CreateBorderRadiusMinModal: function (element) {
        var div = CreatePropNameTemplate('bi-fullscreen', 'Border-Radius', true)
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-top-left-radius', val: "" }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-top-right-radius', val: "" }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-bottom-right-radius', val: "" }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-bottom-left-radius', val: "" }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'border-radius', val: "" }))

        return div
    },
    CreateBackgroundMinModal: function (element) {
        var div = CreatePropNameTemplate('bi-image-fill', 'Background', true)
        div.append(CreateFunctionalityPropValueDiv({ prop: 'background-color', val: element.style.backgroundColor }))
        // div.append(CreateFunctionalityPropValueDiv({ prop: 'background-image', val: element.style.backgroundImage }))
        return div

    },
    CreateTextMinModal: function (element) {
        var div = CreatePropNameTemplate('bi-type', 'Text', true)
        // div.append(CreateFunctionalityPropValueDiv({ prop: 'font-family', val: element.style.fontFamily }))
        // div.append(CreateFunctionalityPropValueDiv({ prop: 'font-color', val: element.style.fontColor }))
        // div.append(CreateFunctionalityPropValueDiv({ prop: 'font-size', val: element.style.fontSize }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'color', val: parseInt(getComputedValue(element, 'color')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'padding-top', val: parseInt(getComputedValue(element, 'padding-top')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'padding-right', val: parseInt(getComputedValue(element, 'padding-right')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'padding-left', val: parseInt(getComputedValue(element, 'padding-left')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'padding-bottom', val: parseInt(getComputedValue(element, 'padding-bottom')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'line-height', val: parseInt(getComputedValue(element, 'line-height')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'font-size', val: parseInt(getComputedValue(element, 'font-size')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'letter-spacing', val: parseInt(getComputedValue(element, 'letter-spacing')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'word-spacing', val: parseInt(getComputedValue(element, 'word-spacing')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'font-family', val: element.style.fontFamily }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'webkit-text-stroke-color', val: element.style.webkitTextStrokeColor }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'webkit-text-stroke-width', val: element.style.webkitTextStrokeWidth }))

        return div

    },
    CreateIncdecTextMinModal: function (element) {
        var div = CreatePropNameTemplate('bi-type', 'Text', true)
        // div.append(CreateFunctionalityPropValueDiv({ prop: 'font-family', val: element.style.fontFamily }))
        // div.append(CreateFunctionalityPropValueDiv({ prop: 'font-color', val: element.style.fontColor }))
        // div.append(CreateFunctionalityPropValueDiv({ prop: 'font-size', val: element.style.fontSize }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'padding-top', val: parseInt(getComputedValue(element, 'padding-top')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'padding-right', val: parseInt(getComputedValue(element, 'padding-right')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'padding-left', val: parseInt(getComputedValue(element, 'padding-left')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'padding-bottom', val: parseInt(getComputedValue(element, 'padding-bottom')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'line-height', val: parseInt(getComputedValue(element, 'line-height')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'font-size', val: parseInt(getComputedValue(element, 'font-size')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'letter-spacing', val: parseInt(getComputedValue(element, 'letter-spacing')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'word-spacing', val: parseInt(getComputedValue(element, 'word-spacing')) }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'webkit-text-stroke-width', val: element.style.webkitTextStrokeWidth }))

        return div

    },
    CreateDrawingMinModal: function (element) {
        var div = CreatePropNameTemplate('bi-brush', 'Drawing', true)
        // div.append(CreateFunctionalityPropValueDiv({ prop: 'font-family', val: element.style.fontFamily }))
        // div.append(CreateFunctionalityPropValueDiv({ prop: 'font-color', val: element.style.fontColor }))

        return div

    },
    CreateScrollMinModal: function (element) {
        var div = CreatePropNameTemplate('bi-brush', 'Scroll', true)
        div.append(CreateFunctionalityPropValueDiv({ prop: 'scroll-x', val: element.style.fontFamily }))
        div.append(CreateFunctionalityPropValueDiv({ prop: 'scroll-y', val: element.style.fontColor }))

        return div

    }
}

function CreatePropNameTemplate(icon, prop_name, arrow_down) {
    var div = document.createElement('div');
    div.classList.add('property_selector-prop')
    if (arrow_down) {
        div.innerHTML = `<i class="bi ${icon} bi-main-prop"> </i> ${prop_name} <i class="bi bi-caret-down-fill arrow_dwn-right"></i>`
        div.addEventListener('click', function () {
            if (this.style.height == 'fit-content') {
                this.style.height = "30px"
            } else {
                this.style.height = "fit-content"
            }
        })
    } else {
        div.innerHTML = `<i class="bi ${icon} bi-main-prop"> </i> ${prop_name}`
    }
    return div

}

export function CreateRangeValueTemplate(json) {
    var div = document.createElement('div');
    div.classList.add('divninput_hover');
    // height
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

    if (json.incdec == undefined) {
        // div.setAttribute('function-type', 'change')
    } else {
        // div.setAttribute('function-type', 'incdec')
        div.querySelector('.math_sign').addEventListener('click', function () {
            if (this.innerHTML == '+') {
                this.innerHTML = '-'
            } else if (this.innerHTML == '-') {
                this.innerHTML = '+'
            }
        })

    }
    div.querySelector('.range_value_Cont').addEventListener("mouseover",function(){
        this.style.position = "absolute"
        this.style.right = "0"
        this.style.width= "60%"
        div.querySelector('.range_value_add').style.display = "block"
        div.querySelector('.range_value_minus').style.display = "block"
    })
    div.querySelector('.range_value_Cont').addEventListener("mouseleave",function(){
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

    if(json.attr != undefined){
        div.setAttribute(json.attr,json.attrval)
    }
    
    
    var range_value = div.querySelector('.range_value')
    var range_value_slider = div.querySelector('input[type="range"]')
    // ?????? add_tbn
    var timer;
    function continuosincerment() {
        var value = parseFloat(range_value.value) + 1
        range_value.value =value 
        range_value_slider.value = value
        var percent = (range_value_slider.value - range_value_slider.min) / (range_value_slider.max - range_value_slider.min) * 100
        range_value_slider.style.background = 'linear-gradient(to right, #191e2b 0%, rgb(15 34 60)' + percent + '%, #fff ' + percent + '%, white 100%)'
            div.click()
        timer = setTimeout(continuosincerment, 200);
    }
    function timeoutClear() {
            clearTimeout(timer);
    }
        
    // })
    div.querySelector('.range_value_add').addEventListener('mousedown', continuosincerment);
    div.querySelector('.range_value_add').addEventListener('mouseup', timeoutClear);
    div.querySelector('.range_value_add').addEventListener('mouseleave', timeoutClear);
    range_value.contentEditable = true
    range_value.addEventListener('input',function(){
        range_value_slider.value = this.value
    })
    // div.querySelector('.range_value_add').addEventListener("mousedown",function(){
    //     // range_value.innerHTML = parseFloat(range_value.innerHTML) + 1 
    //     var value = parseFloat(range_value.value) + 1
    //     range_value.value = value 
    //     range_value_slider.value = value
    //     var percent = (range_value_slider.value - range_value_slider.min) / (range_value_slider.max - range_value_slider.min) * 100
    //     range_value_slider.style.background = 'linear-gradient(to right, #191e2b 0%, rgb(15 34 60)' + percent + '%, #fff ' + percent + '%, white 100%)'

        
    // })
    // ????MINUS BTN
    // div.querySelector('.range_value_minus').addEventListener("mousedown",function(){
        // range_value.innerHTML = parseFloat(range_value.innerHTML) - 1 
    var timer;
    function continuosdecerment() {
        var value = parseFloat(range_value.value) - 1
        range_value.value =value 
        range_value_slider.value = value
        var percent = (range_value_slider.value - range_value_slider.min) / (range_value_slider.max - range_value_slider.min) * 100
        range_value_slider.style.background = 'linear-gradient(to right, #191e2b 0%, rgb(15 34 60)' + percent + '%, #fff ' + percent + '%, white 100%)'
        div.click()
        timer = setTimeout(continuosdecerment, 200);
    }
    function timeoutClear() {
            clearTimeout(timer);
    }
        
    // })
    div.querySelector('.range_value_minus').addEventListener('mousedown', continuosdecerment);

    div.querySelector('.range_value_minus').addEventListener('mouseup', timeoutClear);

    div.querySelector('.range_value_minus').addEventListener('mouseleave', timeoutClear);

    ModifyRangeInput({parentEl:div})
    try{
    setmaxminForinput(div,json.attrval || "" )}
    catch(Err){

    }
    
    return div
}

export function setmaxminForinput(elem, prop) {
    if(prop == undefined){
        prop = elem.getAttribute('main-style')
    }
    // console.log(elem)
    if(elem.tagName != "INPUT"){
        // console.log(elem.tagName)
        elem = elem.querySelector("input[type='range']")
    }
    elem.min = '0'
    elem.step = '1'
    // console.log(prop)
    // console.log(elem)
        // console.log(prop)
    switch (prop) {
        case 'height':
            elem.max = BoxContainer.elem().getBoundingClientRect().height
            elem.step = '2'
            break
        case 'width':
            elem.max = BoxContainer.elem().getBoundingClientRect().width
            elem.step = '2'
            break
        case 'position-x':
            elem.max = BoxContainer.elem().getBoundingClientRect().width
            elem.step = '2'
            break
        case 'position-y':
            elem.max = BoxContainer.elem().getBoundingClientRect().height
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
            elem.max = BoxContainer.elem().getBoundingClientRect().height / 2
            elem.step = '2'
            break
        case "padding-left":
        case "padding-right":
            elem.max = BoxContainer.elem().getBoundingClientRect().width / 2
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


function AddfunctiontoJson(button){
    console.log(button)
    var function_editor = getparent(button, 'InteractFunctionEditor');
            // var function_name = function_editor.querySelector('.function_name').value.replace(/[^A-Z0-9]/ig, "_");
            var function_name = function_editor.querySelector('.function_name').value
            // console.log(function_name)
            // console.log(InteractFunctions[function_name])
            var triggerers_container = function_editor.querySelector('.triggerers_container');
            var effectors_container = function_editor.querySelector('.effectors_container');

            function CreateFunctionjson() {
                var json = InteractFunctions[function_name];
                json.triggerers = {}
                json.triggerers.names = []
                json.triggerers.groups = []
                json.effectors = {}
                json.effectors.names = []
                json.effectors.groups = []
                json.this = { functions: { change: { prop: [], val: [] }, incdec: { prop: [], val: [], sign: [] } } }
                json.event = function_editor.querySelector('.function_event').value;
                json.name = function_name


                for (el of triggerers_container.querySelectorAll('div[type=element_name]')) {
                    json.triggerers.names.push(el.getAttribute('value'));
                }
                for (el of triggerers_container.querySelectorAll('div[type=element_group]')) {
                    json.triggerers.groups.push(el.getAttribute('value'));
                }


                // ? effector selector <select>
                var effector_selectors = effectors_container.querySelectorAll('.effector_selector');

                var transitions_container = function_editor.querySelectorAll("[container_div_for=transitions]");
                var functions_container = function_editor.querySelectorAll("[container_div_for=functions]");
                // ?looping through all effector selector,function_transition_div
                for (var elem_count = 0; elem_count < effector_selectors.length; elem_count++) {
                    console.log(effector_selectors[elem_count])
                    if (effector_selectors[elem_count].getAttribute('type') == "element_group") {

                        console.log(effector_selectors[elem_count])
                        let data = { group: effector_selectors[elem_count].getAttribute('value'), functions: { change: { prop: [], val: [] }, incdec: { prop: [], val: [], sign: [] } } }
                        data.transitions = transitions_container[elem_count].getAttribute('prop_value');
                        // for (el of functions_container[elem_count].querySelectorAll('[functionality_prop]')) {
                        //     data.functions.change.prop.push(el.getAttribute('functionality_prop'))

                        // }
                        // for (el of functions_container[elem_count].querySelectorAll('[functionality_prop]')) {
                        //     data.functions.change.val.push(el.getAttribute('functionality_prop-value'))

                        // }
                        for (el of functions_container[elem_count].querySelectorAll('[function-type=change]')) {
                            data.functions.change.prop.push(el.getAttribute('functionality_prop'))
                                // change-value
                        }
                        for (el of functions_container[elem_count].querySelectorAll('[function-type=change]')) {
                            data.functions.change.val.push(el.getAttribute('functionality_prop-value'))

                        }
                        // incdec-prop

                        for (el of functions_container[elem_count].querySelectorAll('[function-type=incdec]')) {
                            data.functions.incdec.prop.push(el.getAttribute('functionality_prop'))

                        }
                        // incdec-value
                        for (el of functions_container[elem_count].querySelectorAll('[function-type=incdec]')) {
                            data.functions.incdec.val.push(el.getAttribute('functionality_prop-value'))
                                // inc_dec_sign
                            for (el of functions_container[elem_count].querySelectorAll('.math_sign')) {
                                data.functions.incdec.sign.push(el.innerText)

                            }
                        }
                        // data.functions.change.val.push()
                        json.effectors.groups.push(data)
                    } else if (effector_selectors[elem_count].getAttribute('type') == "element_name") {

                        let data = { name: effector_selectors[elem_count].getAttribute('value'), functions: { change: { prop: [], val: [] }, incdec: { prop: [], val: [], sign: [] } } }
                        data.transitions = transitions_container[elem_count].getAttribute('prop_value');
                        // **** change-prop
                        for (el of functions_container[elem_count].querySelectorAll('[function-type=change]')) {
                            data.functions.change.prop.push(el.getAttribute('functionality_prop'))
                                // change-value
                        }
                        for (el of functions_container[elem_count].querySelectorAll('[function-type=change]')) {
                            data.functions.change.val.push(el.getAttribute('functionality_prop-value'))

                        }
                        // incdec-prop

                        for (el of functions_container[elem_count].querySelectorAll('[function-type=incdec]')) {
                            data.functions.incdec.prop.push(el.getAttribute('functionality_prop'))

                        }
                        // incdec-value
                        for (el of functions_container[elem_count].querySelectorAll('[function-type=incdec]')) {
                            data.functions.incdec.val.push(el.getAttribute('functionality_prop-value'))
                                // inc_dec_sign
                            for (el of functions_container[elem_count].querySelectorAll('.math_sign')) {
                                data.functions.incdec.sign.push(el.innerText)

                            }
                        }
                        // data.functions.change.val.push()
                        json.effectors.names.push(data)
                    }
                    // Element itself 
                    else if (effector_selectors[elem_count].getAttribute('type') == "element_itself") {
                        let data = json.this
                        data.transitions = transitions_container[elem_count].getAttribute('prop_value');
                        for (el of functions_container[elem_count].querySelectorAll('[function-type=change]')) {
                            data.functions.change.prop.push(el.getAttribute('functionality_prop'))
                                // change-value
                        }
                        for (el of functions_container[elem_count].querySelectorAll('[function-type=change]')) {
                            data.functions.change.val.push(el.getAttribute('functionality_prop-value'))

                        }
                        // incdec-prop

                        for (el of functions_container[elem_count].querySelectorAll('[function-type=incdec]')) {
                            data.functions.incdec.prop.push(el.getAttribute('functionality_prop'))

                        }
                        // incdec-value
                        for (el of functions_container[elem_count].querySelectorAll('[function-type=incdec]')) {
                            data.functions.incdec.val.push(el.getAttribute('functionality_prop-value'))
                                // inc_dec_sign
                            for (el of functions_container[elem_count].querySelectorAll('.math_sign')) {
                                data.functions.incdec.sign.push(el.innerText)

                            }
                        }
                        // data.functions.change.val.push()
                    }
                    // !!element itself
                }
                // console.log(data)
                // console.log(json)
            }
            button.innerText = "";
            button.classList.add('loading_background');
            setTimeout(function() {

                button.classList.remove('loading_background');
                // removing unwanted
                // for (el of document.querySelectorAll('.element_select_list')) {
                //     if (el.getAttribute('value') == null) {
                //         el.remove()
                //     }
                // }
                if (function_name == "") {
                    button.innerText = "please choose a name for funtion";
                    button.style.color = "yellow"
                    button.classList.add('heartbeat')

                    setTimeout(function() {
                        button.innerText = "Enable";
                        button.classList.remove('heartbeat');
                        button.style.color = "wheat"

                    }, 3000);

                } else if (triggerers_container.childElementCount == 1) {
                    button.innerText = "no triggerers slected";
                    button.style.color = "yellow"
                    button.classList.add('heartbeat')

                    setTimeout(function() {
                        button.innerText = "Enable";
                        button.classList.remove('heartbeat');
                        button.style.color = "wheat"

                    }, 3000);

                } else if (effectors_container.childElementCount == 1) {
                    button.innerText = "no effectors slected";
                    button.style.color = "yellow"
                    button.classList.add('heartbeat')

                    setTimeout(function() {
                        button.innerText = "Enable";
                        button.classList.remove('heartbeat');
                        button.style.color = "wheat"

                    }, 3000);

                } else if (InteractFunctions[function_name] == undefined) {
                    // **
                    // for (el of document.querySelectorAll('.function_name')) {
                    //     InFunctionslist.push(el.value)
                    // }
                    InteractFunctions[function_name] = {};


                    CreateFunctionjson()

                    // alert(json)
                    // !!!
                    button.innerText = "DONE!";
                    button.style.color = "yellow"
                    button.classList.add('heartbeat')
                    setTimeout(function() {
                        button.innerText = "click preview to see it working";

                    }, 1000);
                    setTimeout(function() {
                        button.innerText = "Update";
                        button.classList.remove('heartbeat');
                        button.style.color = "wheat"

                    }, 3000);
                    // console.log(InteractFunctions[function_name])
                } else {
                    CreateFunctionjson()

                    // 
                    button.innerText = "Updated";
                    button.classList.add('heartbeat')
                    button.style.color = "yellow"
                    setTimeout(function() {
                        button.innerText = "Update";
                        button.classList.remove('heartbeat');
                        button.style.color = "wheat"

                    }, 3000);
                }

            }, 2000);
}










document.body.addEventListener('dbclick', function () {

    add_InteractFunctionEditor_btn.parentNode.append(
        FunctioneditorCreateDivs.CreateFunctionEditorDiv({
            "triggerers": {
                "names": [
                    "text0"
                ],
                "groups": []
            },
            "effectors": {
                "names": [
                    {
                        "name": "duke",
                        "functions": {
                            "change": {
                                "prop": [
                                    "background-color"
                                ],
                                "val": [
                                    "#13cd1f"
                                ]
                            },
                            "incdec": {
                                "prop": [
                                    "height"
                                ],
                                "val": [
                                    "18px"
                                ],
                                "sign": [
                                    "+"
                                ]
                            }
                        },
                        "transitions": "letter-spacing 2s ease-in-out 2s"
                    }
                ],
                "groups": []
            },
            "this": {
                "functions": {
                    "change": {
                        "prop": [],
                        "val": []
                    },
                    "incdec": {
                        "prop": [],
                        "val": [],
                        "sign": []
                    }
                }
            },
            "event": "click",
            "name": "jio"
        }))
})


