import { activeel_size_handler } from "./size_handler.js";
import { FunctioneditorCreateDivs, } from "./functions.js";
import { InteractMessage } from "./InteracTerminal.js";

import { BoxContainerClickFunc, update_all_elements_name_list } from "./index.js";
import { transformFunc, getComputedValue } from "./Interact_style.js";
import {
    getUniqueid,
    getJsonAttr,
    setJsonAttr,
    getparent,
    digits_only,
    gettarget,
    activeelFunction
} from "./functionsfile.js";
import { InteracStyles } from "./Interact_style.js";
var el;
// import { boxContainer } from "."
export const text_props = [
    "text-shadow",
    "font-family",
    "color",
    "font-size",
    "border-color",
    "border-width",
    "border-style",
    "border-radius",
    "letter-spacing",
    "word-spacing",
    "line-height",
    "text-decoration",
    "font-weight",
    "font-style",
    "background-color",
    "background-image",
    "text-align",
    "-webkit-text-stroke-width",
    "-webkit-text-stroke-color",
    "padding-top",
    "padding-bottom",
    "padding-left",
    "padding-right",
    "drop-shadow",
];

export const BoxContainer = {
    dataBox: document.querySelector("#dataBox"),
    elem: function () { return document.querySelector("[InteractState=Active]") },
    svg: function () { return document.querySelector("[InteractState=Active]").children[0].children[0] },
    div: function () { return document.querySelector("[InteractState=Active]").children[0] },
    // dataBox: document.querySelector("#dataBox"),
    // elem: function () { return document.querySelector("[interactcontainer]") },
    // svg: function () { return document.querySelector("[interactcontainer]").children[0].children[0] },
    // div: function () { return document.querySelector("[interactcontainer]").children[0] },
    set_stake: function (el, stake) {
        if (stake != undefined) {
            el.setAttribute("element_stake",stake);
        }else{
            if(BoxContainer.svg().children.length != 1 && BoxContainer.svg().children.length != 0 ){
                el.setAttribute("element_stake",parseInt(BoxContainer.svg().children[BoxContainer.svg().children.length - 2].getAttribute("element_stake")) + 1);
            }else{
                el.setAttribute("element_stake", 1);
            }
            // if(BoxContainer.svg().children.length != 1 && BoxContainer.svg().children.length != 0 ){
            //     if(BoxContainer.svg().children[BoxContainer.svg().children.length - 2].getAttribute("element_stake") != null){


            //         el.setAttribute("element_stake",parseInt(BoxContainer.svg().children[BoxContainer.svg().children.length - 1].getAttribute("element_stake")) + 1);
            //     }else{
            //         el.setAttribute("element_stake", 1);
            //     }
            // }else{
            //     el.setAttribute("element_stake", 1);
            // }
        }
    //     var istel;
    //     if (stake == undefined) {
    //         if(BoxContainer.svg().children.length != 0){
    //             console.log(true)
    //             if(BoxContainer.svg().children[BoxContainer.svg().children.length - 1].getAttribute("element_stake") != null){
    //             istel = parseInt(BoxContainer.svg().children[BoxContainer.svg().children.length - 1].getAttribute("element_stake"))
    //         }else{
    //             istel = 0
    //         }}
    //         else{
    //             istel = 0
    //         }
    //     }
    //     console.log(parseInt(BoxContainer.svg().children[BoxContainer.svg().children.length - 1].getAttribute("element_stake")))
    //     console.log(BoxContainer.svg().children[BoxContainer.svg().children.length - 1].getAttribute("element_stake"))
    //     console.log(istel)
    //     el.setAttribute(
    //         "element_stake",
    //         stake ||
    //         istel + 1);
    console.log(el.getAttribute("element_stake"))
    if(el.getAttribute("element_stake") == NaN || el.getAttribute("element_stake") == "NaN" || el.getAttribute("element_stake") == null){
        el.setAttribute("element_stake", 1);
    }
    },
    getAllBoxElementsInfo: function () {
        var element_names = [];
    var element_groups = [];
    var element_ids = [];
    //console.log(BoxContainer.elem())
    //console.log(BoxContainer.elem().querySelectorAll('[element_name]'))
    for (var el of BoxContainer.elem().querySelectorAll('[element_name]')) {
        element_ids.push(el.id)
        if (el.getAttribute('element_name') != "") {
            element_names.push(el.getAttribute('element_name'))
        }
        if (el.getAttribute('element_groups') != "" && el.getAttribute('element_groups') != null) {
            for (var groups of el.getAttribute('element_groups').split(',')) {
                element_groups.push(groups)
            }
            element_groups = [...new Set(element_groups)]
        }

    }
    return {
        element_names: element_names,
        element_ids: element_ids,
        element_groups: element_groups,
    }
        // if (BoxContainer.elem().querySelector("primary-element-type") == null) {
        //     return null;
        // } else {
        //     var element_names = [];
        //     var element_groups = [];
        //     var element_ids = [];
        //     for (el of BoxContainer.elem().querySelectorAll("[element_name]")) {
        //         element_ids.push(el.id);
        //         if (el.getAttribute("element_name") != "") {
        //             element_names.push(el.getAttribute("element_name"));
        //         }
        //         if (
        //             el.getAttribute("element_groups") != "" &&
        //             el.getAttribute("element_groups") != null
        //         ) {
        //             for (var groups of el.getAttribute("element_groups").split(",")) {
        //                 element_groups.push(groups);
        //             }
        //             element_groups = [...new Set(element_groups)];
        //         }
        //     }
        //     return {
        //         element_names: element_names,
        //         element_ids: element_ids,
        //         element_groups: element_groups
        //     };
        // }
    },
    Add: function (object, givenjson) {
        // console.log(BoxContainer.svg())
        var obj_type = object.getAttribute("primary-element-type") || "";

        if (object.tagName == "IMG" || obj_type == "Image") {
            var json = {
                src: object.src || object.querySelector('img').src,
                element_groups: object.getAttribute("element_groups") || ""
            };
            json.transform = {
                "position-x": InteracStyles.getValue({
                    element: object,
                    prop: "position-x"
                }),
                "position-y": InteracStyles.getValue({
                    element: object,
                    prop: "position-y"
                }),
                rotate: InteracStyles.getValue({ element: object, prop: "rotate" }),
                height: InteracStyles.getValue({ element: object, prop: "height" }),
                width: InteracStyles.getValue({ element: object, prop: "width" })
            };
            console.log(json.transform);
            json.style = {};

            var image_props = [
                "drop-shadow",
                "border-color",
                "border-width",
                "border-style",
                "border-radius",
                "background-color"
            ];
            for (var propes of image_props) {
                json.style[propes] = InteracStyles.getValue({
                    element: object,
                    prop: propes
                });
            }
            console.log(json.style)
            BoxContainer.CreateImageElement(editJsonVals(givenjson, json));
            // //////////////
        } else if (object.tagName == "P" || obj_type == "Text") {
            if (object.tagName == "P") {
                var style = object.style;
                console.log(style.fontFamily, style.textShadow);
                var json = {
                    transform: {},
                    innerText: object.innerText,
                    style: {
                        "font-family": style.fontFamily,
                        "font-size": style.fontSize,
                        "text-shadow": style.textShadow,
                        color: style.color,
                        "letter-spacing": style.letterSpacing
                    },
                    element_groups: object.getAttribute("element_groups")
                };
            } else {
                // var style = object.children[0].style;
                var json = {
                    innerText: object.children[0].children[0].innerText,
                    element_groups: object.getAttribute("element_groups")
                };
                json.transform = {
                    "position-x": InteracStyles.getValue({ element: object, prop: "position-x" }),
                    "position-y": InteracStyles.getValue({ element: object, prop: "position-y" }),
                    "rotate": InteracStyles.getValue({ element: object, prop: "rotate" }),
                    "height": InteracStyles.getValue({ element: object, prop: "height" }),
                    "width": InteracStyles.getValue({ element: object, prop: "width" })
                };

                json.style = {};
                console.log(object);
                for (var propes of text_props) {
                    console.log(propes);
                    json.style[propes] = InteracStyles.getValue({
                        element: object,
                        prop: propes
                    });
                    console.log(
                        InteracStyles.getValue({ element: object, prop: propes })
                    );
                }
            }
            console.log(json.style);
            BoxContainer.CreateTextElement(editJsonVals(givenjson, json));
        } else if (object.tagName == "path") {
            var path = object.cloneNode(true);
            var json = {
                d: path.getAttribute("d"),
                fill: path.style.fill || path.getAttribute("fill"),
                stroke: path.style.stroke || path.getAttribute("stroke"),
                strokeWidth:
                    path.style.strokeWidth || path.getAttribute("stroke-width"),
                element_groups: object.getAttribute("element_groups")
            };
            editJsonVals(givenjson, json);
            BoxContainer.CreatePathElement(json);
        } else if (object.tagName == "DIV" || obj_type == "Container") {
            var style = object.style;

            var json = {
                innerHTML: object.innerHTML,
                height: style.height,
                width: style.width,
                backgroundColor: style.backgroundColor,
                element_groups: object.getAttribute("element_groups")
            };
            editJsonVals(givenjson, json);
            BoxContainer.CreateContainerElement(json);
        } else if (object.tagName == "audio" || obj_type == "Audio") {
            var json = {
                src: object.src || object.querySelector('source').src,
                element_groups: object.getAttribute("element_groups") || ""
            };
            json.transform = {
                "position-x": InteracStyles.getValue({ element: object, prop: "position-x" }),
                "position-y": InteracStyles.getValue({ element: object, prop: "position-y" }),
                rotate: InteracStyles.getValue({ element: object, prop: "rotate" }),
                height: InteracStyles.getValue({ element: object, prop: "height" }),
                width: InteracStyles.getValue({ element: object, prop: "width" })
            };
            json.style = {};
            try{if(object.querySelector('.freeze_div').style.height == "100%")
                {
                json.freeze = true}
            }catch (err){
                json.freeze = false
            }
            var audio_props = [
                "drop-shadow",
                "border-color",
                "border-width",
                "border-style",
                "border-radius",
                "background-color"
            ];
            for (var propes of audio_props) {
                json.style[propes] = InteracStyles.getValue({
                    element: object,
                    prop: propes
                });
            }
            BoxContainer.CreateAudioElement(editJsonVals(givenjson, json))
        }else if (object.tagName == "video" || obj_type == "Video") {
            var json = {
                src: object.src || object.querySelector('source').src,
                element_groups: object.getAttribute("element_groups") || ""
            };
            json.transform = {
                "position-x": InteracStyles.getValue({ element: object, prop: "position-x" }),
                "position-y": InteracStyles.getValue({ element: object, prop: "position-y" }),
                rotate: InteracStyles.getValue({ element: object, prop: "rotate" }),
                height: InteracStyles.getValue({ element: object, prop: "height" }),
                width: InteracStyles.getValue({ element: object, prop: "width" })
            };
            json.style = {};
            try{if(object.querySelector('.freeze_div').style.height == "100%")
            {
            json.freeze = true}
        }catch (err){
            json.freeze = false
        }
            var audio_props = [
                "drop-shadow",
                "border-color",
                "border-width",
                "border-style",
                "border-radius",
                "background-color"
            ];
            for (var propes of audio_props) {
                json.style[propes] = InteracStyles.getValue({
                    element: object,
                    prop: propes
                });
            }
            BoxContainer.CreateVideoElement(editJsonVals(givenjson, json))
        }else if (obj_type == "YoutubeVideo") {
            var json = {
                src: object.src || object.getAttribute('yt-id') || object.querySelector('source').src,
                element_groups: object.getAttribute("element_groups") || "",element_name:object.getAttribute("element_name") || ""
            };
            try{if(object.querySelector('.freeze_div').style.height == "100%")
                {
                json.freeze = true}
            }catch (err){
                json.freeze = false
            }
            json.transform = {
                "position-x": InteracStyles.getValue({ element: object, prop: "position-x" }),
                "position-y": InteracStyles.getValue({ element: object, prop: "position-y" }),
                rotate: InteracStyles.getValue({ element: object, prop: "rotate" }),
                height: InteracStyles.getValue({ element: object, prop: "height" }),
                width: InteracStyles.getValue({ element: object, prop: "width" })
            };
            json.style = {};

            var audio_props = [
                "drop-shadow",
                "border-color",
                "border-width",
                "border-style",
                "border-radius",
                "background-color"
            ];
            for (var propes of audio_props) {
                json.style[propes] = InteracStyles.getValue({
                    element: object,
                    prop: propes
                });
            }
            BoxContainer.CreateYtVideoElement(editJsonVals(givenjson, json))
        }else if(object.tagName == "path"){
            json.transform = {
                "position-x": InteracStyles.getValue({ element: object, prop: "position-x" }),
                "position-y": InteracStyles.getValue({ element: object, prop: "position-y" }),
                rotate: InteracStyles.getValue({ element: object, prop: "rotate" }),
                height: InteracStyles.getValue({ element: object, prop: "height" }),
                width: InteracStyles.getValue({ element: object, prop: "width" })
            };
            var path_props = [
                "drop-shadow",
                "background-color",
                
            ];
            for (var propes of audio_props) {
                json.style[propes] = InteracStyles.getValue({
                    element: object,
                    prop: propes
                });
            }
        }else if(obj_type == "Textpath"){
            var json = {
            element_groups: object.getAttribute("element_groups") || "",
            innerText :object.children[0].innerHTML || "",
            d:BoxContainer.svg().querySelector("#" + object.getAttribute('textpathid')).getAttribute('d')
        };
            
            json.transform = {
                "position-x": InteracStyles.getValue({ element: object, prop: "position-x" }),
                "position-y": InteracStyles.getValue({ element: object, prop: "position-y" }),
                rotate: InteracStyles.getValue({ element: object, prop: "rotate" }),
                height: InteracStyles.getValue({ element: object, prop: "height" }),
                width: InteracStyles.getValue({ element: object, prop: "width" })
            };
            json.style = {};

            var textpath_props = [
                "text-shadow",
    "font-family",
    "color",
    "font-size","text-decoration",
    "font-weight",
    "font-style",
    "letter-spacing",
    "word-spacing","-webkit-text-stroke-width",
    "-webkit-text-stroke-color",
            ];
            for (var propes of textpath_props) {
                json.style[propes] = InteracStyles.getValue({
                    element: object,
                    prop: propes
                });
            }
            BoxContainer.CreateTextPathElement(editJsonVals(givenjson, json))
        }
    },
    delete: function (element) 
    { 
        
        layerDiv.delete(element)
        element.remove()
    },
    SetAspectRatio: function (arw, arh) {
        // if (digits_only(arw) && digits_only(arh)) {
        BoxContainer.elem().style.top = "20%";
        BoxContainer.elem().style.left = "33%";
        var mah = parseInt(
            window.innerHeight - BoxContainer.elem().getBoundingClientRect().top - 20
        );
        // var maw = (window.innerWidth - BoxContainer.elem().getBoundingClientRect().x) - 20
        // var maw = (window.innerWidth - parseInt(getComputedValue(BoxContainer.elem(), 'left'))) - 20
        var left = parseInt((window.innerWidth * 33) / 100);
        var top = parseInt((window.innerHeight * 20) / 100);
        var maw = parseInt(window.innerWidth - left - 40);
        var mah = parseInt(window.innerHeight - top - 40);

        // console.log(BoxContainer.elem().getBoundingClientRect().top)
        var nh = (maw * arh) / arw;
        // console.log(mah, maw, nw, left)
        // console.log(nw > maw)

        if (nh > mah) {
            // console.log(parseFloat(nw), parseFloat(maw))
            // mah = mah - (nh - mah)
            maw = maw - (nh - mah);
            nh = (maw * arh) / arw;
            // console.log(nw, maw)
        }
        BoxContainer.elem().style.height = nh + "px";
        BoxContainer.elem().style.width = maw + "px";
        setJsonAttr(BoxContainer.elem(), "settings", "aspect-ratio", `${arw}:${arh}`)
        // console.log(mah)
        // console.log(nw)
    },
    CreateImageElement: function (json) {
        var fo = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "foreignObject"
        );
        var img = document.createElement("img");
        img.src = json.src;
        img.draggable = false;
        fo.draggable = false;
        fo.id = getUniqueid("Interact-image-element");
        fo.append(img);
        img.setAttribute("secondary-element-type", "Image");
        transformFunc.defaultTransform(fo);
        fo.setAttribute("primary-element-type", "Image");
        fo.classList.add("draggable");
        fo.setAttribute("element_groups", json.element_groups || "");
        fo.setAttribute("element_name", json.element_name || "image" + BoxContainer.elem().querySelectorAll("[primary-element-type=Image").length);

        // fo styling
        // try{ 
        //   console.log(json.transform["position-x"]), fo.setAttribute("x",json.transform["position-x"]) } 
        // catch (err){fo.setAttribute("x","50")}
        // try{ fo.setAttribute("y",   json.transform["position-y"]) } 
        // catch (err){fo.setAttribute("y","50")}

        // try{ fo.style.height = json.transform["height"] } 
        // catch(err){fo.style.height = "100px"}
        // try{ fo.style.width = json.transform["width"] } 
        // catch(err){fo.style.width = "100px"}
        // (json.transform == {} || json.transform == undefined || json.transform["height"] == "") ? "200" : 
        // // fo.style.height = json.transform["height"] || "100px";
        // // fo.style.width = json.transform["width"] || "100px";
        // console.log(json.transform["position-x"])
        BoxContainer.svg().append(fo)
        InteracStyles.UpdateStyles({ element: fo, prop: "position-x", value: (json.transform == {} || json.transform == undefined || json.transform["position-x"] == "") ? "0" : json.transform["position-x"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "position-y", value: (json.transform == {} || json.transform == undefined || json.transform["position-y"] == "") ? "0" : json.transform["position-y"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "height", value: (json.transform == {} || json.transform == undefined || json.transform["height"] == "") ? "100" : json.transform["height"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "width", value: (json.transform == {} || json.transform == undefined || json.transform["width"] == "") ? "100" : json.transform["width"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "rotate", value: (json.transform == {} || json.transform == undefined || json.transform["rotate"] == "") ? "0" : json.transform["rotate"] });
        // console.log(json.style["border-width"])
        // !!!Img styling
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-width",
            val: json.style["border-width"] || "0px"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-color",
            val: json.style["border-color"] || "black"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-style",
            val: json.style["border-style"] || "solid"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-radius",
            val: json.style["border-radius"] || "0%"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "background-color",
            val: json.style["background-color"] || "transparent"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "background-image",
            val: json.style["background-image"] || "none"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "drop-shadow",
            val: json.style["drop-shadow"] || ""
        });
        

        if (json.return) {
            return fo;
        } else {
            BoxContainer.set_stake(fo);
            InteractMessage("Image Added","lightgreen")
            BoxContainer.svg().append(fo);

            layerDiv.Add(fo);
        }
    },
    CreateTextElement: function (json) {
        var fo = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "foreignObject"
        );
        fo.id = getUniqueid("Interact-text-element");
        var text_div = document.createElement("div");
        var text_p = document.createElement("div");
        var text = document.createElement("p");
            text_div.addEventListener('dblclick',function(){
                this.children[0].contentEditable = true
            })

            // text_p.addEventListener('input',function(){
            //     console.log('in')
            //     var str = this.innerText.split('');
            //     this.innerHTML = ""
            //     for(var char of str){
            //         var span = document.createElement('span');
            //         span.innerText = char
            //         this.append(span)
            //     }
    
            // })
        text_div.append(text_p);
        text_p.append(text);

        fo.append(text_div);
        transformFunc.defaultTransform(fo);
        fo.setAttribute("primary-element-type", "Text");
        fo.draggable = false;
        fo.classList.add("draggable");
        fo.setAttribute("element_groups", json.element_groups || "");
        fo.setAttribute(
            "element_name",
            json.element_name ||
            "text" +
            BoxContainer.elem().querySelectorAll("[primary-element-type=Text")
                .length
        );
        text_div.setAttribute("secondary-element-type", "Textdiv");
        text_p.setAttribute("secondary-element-type", "Textp");
        BoxContainer.svg().append(fo)
        // fo styling
        fo.setAttribute("x", json.transform["position-x"] || 50);
        fo.setAttribute("y", json.transform["position-y"] || 50);
        fo.style.height = json.transform["height"] || "100px";
        fo.style.width = json.transform["width"] || "100px";
        
        InteracStyles.UpdateStyles({ element: fo, prop: "rotate", value: (json.transform == {}) ? "0" : json.transform["rotate"] });
        // !!

        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "fontFamily",
            val: json.style["font-family"] || "arial"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "fontSize",
            val: json.style["font-size"] || "25px"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "paddingRight",
            val: json.style["padding-right"] || "2px"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "paddingBottom",
            val: json.style["padding-bottom"] || "2px"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "paddingTop",
            val: json.style["padding-top"] || "2px"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "paddingLeft",
            val: json.style["padding-left"] || "2px"
        });
        
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "letterSpacing",
            val: json.style["letter-spacing"] || ""
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "wordSpacing",
            val: json.style["word-spacing"] || ""
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "lineHeight",
            val: json.style["line-height"] || ""
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "color",
            val: json.style["color"] || "black"
        });

        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "text-shadow",
            val: json.style["text-shadow"]
        });

        // ?
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-width",
            val: json.style["border-width"] || "0px"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-color",
            val: json.style["border-color"] || "black"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-style",
            val: json.style["border-style"] || "solid"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-radius",
            val: json.style["border-radius"] || "0%"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "background-color",
            val: json.style["background-color"] || "transparent"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "background-image",
            val: json.style["background-image"] || "none"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "drop-shadow",
            val: json.style["drop-shadow"] || ""
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "text-align",
            val: json.style["text-align"] || "left"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "text-decoration",
            val: json.style["text-decoration"] || "none"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "font-weight",
            val: json.style["font-weight"] || "normal"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "font-style",
            val: json.style["font-style"] || "normal"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "-webkit-text-stroke-color",
            val: json.style["-webkit-text-stroke-color"] || "none"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "-webkit-text-stroke-width",
            val: json.style["-webkit-text-stroke-width"] || "0px"
        });


        fo.addEventListener("paste", function(e) {
            // cancel paste
            e.preventDefault();
            // get text representation of clipboard
            var text = (e.originalEvent || e).clipboardData.getData('text/plain');
            // insert text manually
            document.execCommand("insertHTML", false, text);
        });
        // }
        text.innerHTML = json.innerText || "Text";
        text.setAttribute('secondary-element-type', "text")
        // text_p.setAttribute('secondary-element-type', "text")
        if (json.return) {
            return fo;
        } else {
            BoxContainer.set_stake(fo);
            // console.log(BoxContainer.svg())
            InteractMessage("Text Added","lightgreen")
            BoxContainer.svg().append(fo);

            layerDiv.Add(fo);
        }
        // fo.oninput=(e)=>{
        //   console.log("loo")
        // }
        // fo.addEventListener('input',function(){
        //   if(this.childElementCount != 1){
        //     console.log(this.innerText)
        //   }
        //   console.log(this.innerText)
        //   console.log("lol")
        //   // if(this.children[0].tagName != "p"){

        //   // }
        // })
    },
    CreateContainerElement: function (json) {
        var fo = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "foreignObject"
        );
        fo.setAttribute("primary-element-type", "Container");
        fo.id = getUniqueid("Interact-container-element");

        var div = document.createElement("div");
        div.setAttribute("secondary-element-type", "Container-Wrapper");
        div.contentEditable = false;
        var sec_div = document.createElement("div");
        sec_div.setAttribute("secondary-element-type", "Container-div");

        div.append(sec_div);
        fo.append(div);
        setJsonAttr(fo, "settings", "scrollHeight", "0");
        setJsonAttr(fo, "settings", "scrollWidth", "0");
        setJsonAttr(fo, "settings", "relativeSizingHeight", "true");
        setJsonAttr(fo, "settings", "relativeSizingWidth", "true");
        transformFunc.defaultTransform(fo);
        var svg = document.createElement("svg");

        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("xlinkns", "http://www.w3.org/1999/xlink");
        svg.setAttribute("secondary-element-type", "Container-Svg");
        sec_div.append(svg);
        fo.style.height = json.height || "200px";
        fo.style.width = json.width || "200px";
        // fo.innerHTML = json.innerHTML || "";
        div.style.backgroundColor = json.backgroundColor || "blue";
        fo.setAttribute("y", json.positionY || "50px");
        fo.setAttribute("x", json.positionX || "50px");
        fo.classList.add("draggable");
        BoxContainer.set_stake(fo);
        BoxContainer.svg().append(fo);

        fo.setAttribute("element_groups", json.element_groups || "");
        fo.setAttribute(
            "element_name",
            json.element_name ||
            "container" +
            BoxContainer.elem().querySelectorAll("[primary-element-type=Container")
                .length
        );
        layerDiv.Add(fo);
    },
    CreateVideoElement: function (json) {
        var freeze_div = document.createElement("div");
        freeze_div.classList.add("freeze_div");
        var fo = document.createElementNS("http://www.w3.org/2000/svg","foreignObject");
        fo.id = getUniqueid("Interact-video-element");

        fo.setAttribute("primary-element-type", "Video");
        fo.innerHTML = `<video  controls crossorigin playsinline poster="">
    <source src="" type="video/mp4">
       </video> `;
        fo.querySelector("video").id = getUniqueid("video-element");
        fo.querySelector("source").src = json.src;
        // BoxContainer.div().append(div)
        fo.classList.add("draggable");
        transformFunc.defaultTransform(fo);
        fo.append(freeze_div);

        fo.setAttribute("element_groups", json.element_groups || "");
        fo.setAttribute(
            "element_name",
            json.element_name ||
            "video" +
            BoxContainer.elem().querySelectorAll("[primary-element-type=Video")
                .length
        );
        BoxContainer.svg().append(fo);
        var player = new Plyr(`#${fo.querySelector("video").id}`);

        // fo styling
        // div.style.position = "absolute";
        fo.style.height = json.height || "300px";
        fo.style.width = json.width || "300px";
        fo.setAttribute("y", json.positionY || "50");
        fo.setAttribute("x", json.positionX || "50");
        // !
        // video styling
        InteracStyles.UpdateStyles({ element: fo, prop: "position-x", value: (json.transform == {} || json.transform == undefined || json.transform["position-x"] == "") ? "0" : json.transform["position-x"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "position-y", value: (json.transform == {} || json.transform == undefined || json.transform["position-y"] == "") ? "0" : json.transform["position-y"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "height", value: (json.transform == {} || json.transform == undefined || json.transform["height"] == "") ? "300" : json.transform["height"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "width", value: (json.transform == {} || json.transform == undefined || json.transform["width"] == "") ? "300" : json.transform["width"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "rotate", value: (json.transform == {} || json.transform == undefined || json.transform["rotate"] == "") ? "0" : json.transform["rotate"] });
        // !trans
        // Styling 
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-width",
            val: json.style["border-width"] || "0px"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-color",
            val: json.style["border-color"] || "black"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-style",
            val: json.style["border-style"] || "solid"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-radius",
            val: json.style["border-radius"] || "0%"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "background-color",
            val: json.style["background-color"] || "transparent"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "background-image",
            val: json.style["background-image"] || "none"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "drop-shadow",
            val: json.style["drop-shadow"] || ""
        });

        // !!

        if (json.freeze == true) {
            freeze_div.style.height = "100%";
            freeze_div.style.width = "100%";
        }
        if (json.return == true) {
            preview_box.querySelector('svg').append(fo)
            // return fo;
        } else {
            InteractMessage("Video Added","lightgreen")
            BoxContainer.set_stake(fo);
            layerDiv.Add(fo);
        }
    },
    CreatePathElement: function (json) {
        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.id = getUniqueid("Interact-path-element");
        
        path.classList.add("draggable");
        transformFunc.defaultTransform(path);
        path.setAttribute("primary-element-type", "Path");
        path.setAttribute("element_groups", json.element_groups || "");
        path.setAttribute(
            "element_name",
            json.element_name ||
            "drawing" +
            BoxContainer.elem().querySelectorAll("[primary-element-type=Path]")
                .length
        );

        //? Styling
        path.setAttributeNS(null, "d", json.d);
        BoxContainer.svg().append(path);
        path.style.strokeWidth = json.stroke_width || "0px";
        path.style.stroke = json.stroke || "black";
        path.style.fill = json.fill || "black";
        // !!Styling

        if (json.return == true) {
            return path;
        } else {
            BoxContainer.set_stake(path);

            layerDiv.Add(path);
            BoxContainer.svg().append(path);
        }
    },
    CreateYtVideoElement: function (json) {
        // var div = document.createElement('div');
        var fo = document.createElementNS("http://www.w3.org/2000/svg","foreignObject");

        fo.setAttribute("primary-element-type", "YoutubeVideo");
        fo.id = getUniqueid("Interact-yt-element");

        fo.innerHTML = `<div id="" class="ytvideo" data-plyr-provider="youtube" data-plyr-embed-id=""></div> `;
        
        BoxContainer.svg().append(fo);

        fo.style.height = json.height || "300px";
        fo.style.width = json.width || "300px";
        fo.setAttribute("y", json.positionY || "50");
        fo.setAttribute("x", json.positionX || "50");

        fo.classList.add("draggable");
        transformFunc.defaultTransform(fo);
        fo.querySelector("div").id = getUniqueid("Yt-element");
        fo.setAttribute("element_groups", json.element_groups || "");
        fo.setAttribute(
            "element_name",
            json.element_name ||
            "Youtubevideo" +
            BoxContainer.elem().querySelectorAll(
                "[primary-element-type=YoutubeVideo"
            ).length
        );

        fo.querySelector("div").setAttribute("data-plyr-embed-id", json.src);
        fo.setAttribute("yt-id", json.src);
        // console.log(div.querySelector("div").id);
        var check = fo.querySelector("div")
        var player = new Plyr(`#${fo.querySelector("div").id}`);
        console.log(player)
        player.prototype.farewell = function() {
            alert('hihiiihi');
          };
          console.log(player)
        console.log(check)

        var freeze_div = document.createElement("div");
        freeze_div.classList.add("freeze_div");
        fo.append(freeze_div);
        if(json.style == undefined){
            json.style = {}
        }
/STYLING/
InteracStyles.UpdateStyles({ element: fo, prop: "position-x", value: (json.transform == {} || json.transform == undefined || json.transform["position-x"] == "") ? "0" : json.transform["position-x"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "position-y", value: (json.transform == {} || json.transform == undefined || json.transform["position-y"] == "") ? "0" : json.transform["position-y"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "height", value: (json.transform == {} || json.transform == undefined || json.transform["height"] == "") ? "300" : json.transform["height"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "width", value: (json.transform == {} || json.transform == undefined || json.transform["width"] == "") ? "300" : json.transform["width"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "rotate", value: (json.transform == {} || json.transform == undefined || json.transform["rotate"] == "") ? "0" : json.transform["rotate"] });
        // !trans
        // Styling 
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-width",
            val: json.style["border-width"] || "0px"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-color",
            val: json.style["border-color"] || "black"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-style",
            val: json.style["border-style"] || "solid"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-radius",
            val: json.style["border-radius"] || "0%"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "background-color",
            val: json.style["background-color"] || "transparent"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "background-image",
            val: json.style["background-image"] || "none"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "drop-shadow",
            val: json.style["drop-shadow"] || ""
        });




        if (json.freeze == true) {
            freeze_div.style.height = "100%";
            freeze_div.style.width = "100%";
        }

        if (json.return == true) {
            preview_box.querySelector('svg').append(fo)
            // console.log(fo)
            // return fo;
            
        } else {
            InteractMessage("Youtube Video Added","lightgreen")
            BoxContainer.set_stake(fo);
            BoxContainer.svg().append(fo);
            layerDiv.Add(fo);
        }
    },
    CreateAudioElement: function (json) {
        // console.log(json)
        // var div = document.createElement('div');
        var fo = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        var div = document.createElement("div");
        div.setAttribute("secondary-element-type", "Audio")
        fo.id = getUniqueid("Interact-audio-element");
        // fo styling
        fo.style.height = json.height || "300px";
        fo.style.width = json.width || "300px";
        fo.setAttribute("y", json["position-y"]  || "50");
        fo.setAttribute("x", json["position-x"] || "50");
        
        BoxContainer.svg().append(fo);
        // !!
        fo.setAttribute("primary-element-type", "Audio");
        fo.innerHTML = `<div secondary-element-type="Audio"><audio  controls crossorigin playsinline >
    <source src="" type="audio/mp3">
       </audio> </div>`;
        fo.querySelector("audio").id = getUniqueid("audio-element");
        fo.querySelector("source").src = json.src ;

        fo.classList.add("draggable");
        transformFunc.defaultTransform(fo);

        fo.setAttribute("element_groups", json.element_groups || "");
        fo.setAttribute("element_name", json.element_name || "audio" + BoxContainer.elem().querySelectorAll("[primary-element-type=Audio").length
        );
        var player = new Plyr(`#${fo.querySelector("audio").id}`);
        var freeze_div = document.createElement("div");
        freeze_div.classList.add("freeze_div");
        fo.append(freeze_div);
        // trans
        if(json.style == undefined){
            json.style = {}
        }
        console.log(json.transform)
        InteracStyles.UpdateStyles({ element: fo, prop: "position-x", value: (json.transform == {} || json.transform == undefined || json.transform["position-x"] == "") ? "0" : json.transform["position-x"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "position-y", value: (json.transform == {} || json.transform == undefined || json.transform["position-y"] == "") ? "0" : json.transform["position-y"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "height", value: (json.transform == {} || json.transform == undefined || json.transform["height"] == "") ? "100" : json.transform["height"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "width", value: (json.transform == {} || json.transform == undefined || json.transform["width"] == "") ? "300" : json.transform["width"] });
        InteracStyles.UpdateStyles({ element: fo, prop: "rotate", value: (json.transform == {} || json.transform == undefined || json.transform["rotate"] == "") ? "0" : json.transform["rotate"] });
        // !trans
        // Styling 
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-width",
            val: json.style["border-width"] || "0px"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-color",
            val: json.style["border-color"] || "black"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-style",
            val: json.style["border-style"] || "solid"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "border-radius",
            val: json.style["border-radius"] || "0%"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "background-color",
            val: json.style["background-color"] || "transparent"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "background-image",
            val: json.style["background-image"] || "none"
        });
        InteracStyles.UpdateStyles({
            element: fo,
            layer: false,
            prop: "drop-shadow",
            val: json.style["drop-shadow"] || ""
        });



        // Styling
        console.log(json.freeze)
        if (json.freeze == true) {
            console.log(json.freeze)
            freeze_div.style.height = "100%";
            freeze_div.style.width = "100%";
        }else{
            console.log(json.freeze)
            freeze_div.style.height = "0%";
            freeze_div.style.width = "0%";
        }
        if (json.return == true) {
            preview_box.querySelector('svg').append(fo)
            // var el = fo
            // // fo.remove()
            // return el;
            // try{
            //     fo.remove()
            // }
        } else {
            InteractMessage("Audio Added","lightgreen")
            BoxContainer.set_stake(fo);
            BoxContainer.svg().append(fo);
            layerDiv.Add(fo);
        }
    },
    CreateTextPathElement: function (json) {
        var pathId = getUniqueid("textpath");

        BoxContainer.svg().innerHTML =
            BoxContainer.svg().innerHTML +
            `<path id="${pathId}" style="stroke:black;fill:none;stroke-width:2px;" d=""></path>` +
            `<text style="font-size: 20px; font-family: arial; color: blue;" textpathid="${pathId}"><textPath href="#${pathId}" textpath="${pathId}">   text_here</textPath></text>`;
        var path = BoxContainer.svg().querySelector("#" + pathId);
        path.style.display = "none";
        path.classList.add("pathfortext");
        var textpath = BoxContainer.svg().querySelector(`[textpath=${pathId}]`);
        var svg_text = textpath.parentNode;
        transformFunc.defaultTransform(svg_text);
        transformFunc.defaultTransform(path);
        svg_text.classList.add("draggable");
        svg_text.setAttribute("primary-element-type", "Textpath");
        textpath.setAttribute("secondary-element-type", "Textpath");
        
        svg_text.setAttribute("element_groups", json.element_groups || "");
        svg_text.id = getUniqueid("Interact-textpath-element");
        svg_text.setAttribute(
            "element_name",
            json.element_name ||
            "textpath" +
            BoxContainer.elem().querySelectorAll("[primary-element-type=Textpath")
                .length
        );
            console.log(json.d)
        path.setAttribute('d',json.d || "")
        textpath.innerHTML = json.innerText|| "Text"
        
        // InteracStyles.UpdateStyles({ element:svg_text, prop: "position-x", value: (json.transform == {} || json.transform == undefined || json.transform["position-x"] == "") ? "0" : json.transform["position-x"] });
        // InteracStyles.UpdateStyles({ element: svg_text, prop: "position-y", value: (json.transform == {} || json.transform == undefined || json.transform["position-y"] == "") ? "0" : json.transform["position-y"] });
        // InteracStyles.UpdateStyles({ element: svg_text, prop: "height", value: (json.transform == {} || json.transform == undefined || json.transform["height"] == "") ? "100" : json.transform["height"] });
        // InteracStyles.UpdateStyles({ element: svg_text, prop: "width", value: (json.transform == {} || json.transform == undefined || json.transform["width"] == "") ? "100" : json.transform["width"] });
         InteracStyles.UpdateStyles({ element: svg_text, prop: "rotate", value: (json.transform == {} || json.transform == undefined || json.transform["rotate"] == "") ? "0" : json.transform["rotate"] });




       // Styling
       if(json.style == undefined){
        json.style = {}
    }
       
       
       InteracStyles.UpdateStyles({
        element: svg_text,
        layer: false,
        prop: "fontFamily",
        val: json.style["font-family"] || "arial"
    });
    InteracStyles.UpdateStyles({
        element: svg_text,
        layer: false,
        prop: "fontSize",
        val: json.style["font-size"] || "25px"
    });
    InteracStyles.UpdateStyles({
        element: svg_text,
        layer: false,
        prop: "letterSpacing",
        val: json.style["letter-spacing"] || ""
    });
    InteracStyles.UpdateStyles({
        element: svg_text,
        layer: false,
        prop: "wordSpacing",
        val: json.style["word-spacing"] || ""
    });
    InteracStyles.UpdateStyles({
        element: svg_text,
        layer: false,
        prop: "color",
        val: json.style["color"] || "black"
    });

    InteracStyles.UpdateStyles({
        element: svg_text,
        layer: false,
        prop: "text-shadow",
        val: json.style["text-shadow"]
    });
    InteracStyles.UpdateStyles({
        element: svg_text,
        layer: false,
        prop: "text-decoration",
        val: json.style["text-decoration"] || "none"
    });
    InteracStyles.UpdateStyles({
        element: svg_text,
        layer: false,
        prop: "font-weight",
        val: json.style["font-weight"] || "normal"
    });
    InteracStyles.UpdateStyles({
        element: svg_text,
        layer: false,
        prop: "font-style",
        val: json.style["font-style"] || "noraml"
    });
    InteracStyles.UpdateStyles({
        element: svg_text,
        layer: false,
        prop: "drop-shadow",
        val: json.style["drop-shadow"] || ""
    });

    InteracStyles.UpdateStyles({
        element:svg_text,
        layer: false,
        prop: "-webkit-text-stroke-color",
        val: json.style["-webkit-text-stroke-color"] || "none"
    });
    InteracStyles.UpdateStyles({
        element: svg_text,
        layer: false,
        prop: "-webkit-text-stroke-width",
        val: json.style["-webkit-text-stroke-width"] || "0px"
    });

       // Styling


        if (json.return == true) {
            return {
                path: path,
                svg_text: svg_text,
                textpath: textpath
            };
        } else {
            BoxContainer.set_stake(svg_text);
            InteractMessage("textpth Added","lightgreen")
            layerDiv.Add(svg_text);
        }
        // ?Styling

        //!Styling
    },
    AddToContainer: function (container, element) {
        container.querySelector("svg").append(element);
        container.innerHTML = container.innerHTML;
    },
    Get(element) {
        var el_type = element.getAttribute("primary-element-type");
        if (el_type == "Path") {
            var path = element;
            var json = {
                d: path.getAttribute("d"),
                fill: path.style.fill || path.getAttribute("fill"),
                stroke: path.style.stroke || path.getAttribute("stroke"),
                strokeWidth:
                    path.style.strokeWidth || path.getAttribute("stroke-width"),
                return: true
            };
            return BoxContainer.CreatePathElement(json);
        } else if (el_type == "Image") {
            var img = element.children[0];
            // var json = { , return: true }
            return BoxContainer.CreatePathElement(json);
        } else if (el_type == "Text") {
            var text = element.children[0];
            var json = {};
        } else if (el_type == "Container") {
        }
    },
    ChangeSrc : function(element,newsrc){
        //var id = element.querySelector("div").id
      var el_type = element.getAttribute('primary-element-type')
        var json = {}
        json.style = {}

        var audio_props = [
            "drop-shadow",
            "border-color",
            "border-width",
            "border-style",
            "border-radius",
            "background-color"
        ];
        for (var propes of audio_props) {
            json.style[propes] = InteracStyles.getValue({
                element: element,
                prop: propes
            });
        }

        try{
        var freeze = element.querySelector('.freeze_div').style.height == '100%'
        }catch(Err){}
        if(el_type == 'YoutubeVideo'){
        var id =  getUniqueid("Yt-element");
        console.log(element.querySelector("div"))
        element.innerHTML = `<div id="" class="ytvideo" data-plyr-provider="youtube" data-plyr-embed-id=""></div> `;
        element.querySelector("div").id =id;
        element.querySelector("div").setAttribute("data-plyr-embed-id", newsrc);
        element.setAttribute("yt-id", newsrc);
        var player = new Plyr(`#${element.querySelector("div").id}`);
        }
        else if( el_type == 'Image'){
            element.querySelector('img').src = newsrc
        }
        else if( el_type == 'Audio'){
            element.innerHTML = `<div secondary-element-type="Audio"><audio  controls crossorigin playsinline >
            <source src="" type="audio/mp3">
               </audio> </div>`;
            element.querySelector("audio").id = getUniqueid("audio-element");
            element.querySelector("source").src = newsrc ;
            var player = new Plyr(`#${element.querySelector("audio").id}`);
        }
        else if( el_type == 'Video'){
            element.innerHTML = `<video  controls crossorigin playsinline poster="">
    <source src="" type="video/mp4">
       </video> `;
        element.querySelector("video").id = getUniqueid("video-element");
        element.querySelector("source").src = newsrc;
        var player = new Plyr(`#${element.querySelector("video").id}`);

        }

        if(el_type == 'Audio' ||el_type == 'Video' ||el_type == 'YoutubeVideo'){
            var freeze_div = document.createElement("div");
        freeze_div.classList.add("freeze_div");
        element.append(freeze_div);
        }

        if (freeze == true) {
            freeze_div.style.height = "100%";
            freeze_div.style.width = "100%";
        }

        InteracStyles.UpdateStyles({
            element: element,
            layer: false,
            prop: "border-width",
            val: json.style["border-width"] || "0px"
        });
        InteracStyles.UpdateStyles({
            element: element,
            layer: false,
            prop: "border-color",
            val: json.style["border-color"] || "black"
        });
        InteracStyles.UpdateStyles({
            element: element,
            layer: false,
            prop: "border-style",
            val: json.style["border-style"] || "solid"
        });
        InteracStyles.UpdateStyles({
            element: element,
            layer: false,
            prop: "border-radius",
            val: json.style["border-radius"] || "0%"
        });
        InteracStyles.UpdateStyles({
            element: element,
            layer: false,
            prop: "background-color",
            val: json.style["background-color"] || "transparent"
        });
        InteracStyles.UpdateStyles({
            element: element,
            layer: false,
            prop: "background-image",
            val: json.style["background-image"] || "none"
        });
        InteracStyles.UpdateStyles({
            element: element,
            layer: false,
            prop: "drop-shadow",
            val: json.style["drop-shadow"] || ""
        });
        
    }
};

function editJsonVals(json, rjson) {
    if (json != undefined) {
        Object.keys(json).forEach(function (key) {
            rjson[key] = json[key];
        });
    }
    return rjson;
}

// BoxContainer.elem().style.top = "20%";
// BoxContainer.elem().style.left = "33%";
// BoxContainer.elem().style.height = "500px";
// BoxContainer.elem().style.width = "440px";
// BoxContainer.elem().style.backgroundColor = "white";
// BoxContainer.elem().style.transform = "none";
// BoxContainer.div().contentEditable = true;


var LayerTopPosition = 0;
export const layerDiv = {
    elem: document.querySelector("#layers_div"),
    Reset: function () {
        layerDiv.elem.innerHTML = ""
    },
    GetElLayer: function (element) {
        return document.querySelector(`[layer_element_name=${element.getAttribute("element_name")}]`);
    },
    Add: function (element) {
        element = element.cloneNode(true);
        var newCont = layerDiv.CreateElementContainerLayer();
        var svg_el = newCont.querySelector("svg");
        var div_el = newCont.querySelector("div");
        div_el.style.backgroundColor = BoxContainer.elem().style.backgroundColor;
        svg_el.style.backgroundColor = BoxContainer.elem().style.backgroundColor;
        var el_type = element.getAttribute("primary-element-type");
        newCont.querySelector(".element_name").innerText = element.getAttribute("element_name") || "no_name";
        if (element.style.display == "none") {
            newCont.querySelector("[layer_btn=eye]").children[0].classList.remove("bi-eye");
            newCont.querySelector("[layer_btn=eye]").children[0].classList.add("bi-eye-slash");
        }
        if (element.getAttribute("locked") == "true") {
            newCont.querySelector("[layer_btn=lock]").children[0].classList.remove("bi-unlock-fill");
            newCont.querySelector("[layer_btn=lock]").children[0].classList.add("bi-lock-fill");
        }
        if (el_type == "Text") {
            div_el.style.display = "block";
            div_el.innerHTML = element.innerHTML;
            div_el.children[0].style.wordBreak = "break-all";
            div_el.children[0].style.overflowY = "auto";
        } else if (el_type == "Container") {
            div_el.style.display = "block";
            div_el.innerHTML = element.innerHTML;
        } else if (el_type == "Image") {
            div_el.style.display = "block";
            div_el.innerHTML = element.innerHTML;
            div_el.children[0].style.height = "100%";
            div_el.children[0].style.width = "100%";
            div_el.children[0].style.position = "absolute";
            div_el.children[0].style.top = "0px";
            div_el.children[0].style.left = "0px";
            div_el.children[0].style.transform = "none";
        } else if (
            el_type == "Audio" ||
            el_type == "Video" ||
            el_type == "YoutubeVideo"
        ) {
            div_el.style.display = "block";
            div_el.innerHTML = element.innerHTML;
        } else if (element.tagName == "path") {
            svg_el.style.display = "block";
            svg_el.append(element);
            transformFunc.updateValue(element, "positionX", "0");
            transformFunc.updateValue(element, "positionY", "0");
            svg_el.setAttribute(
                "viewBox",
                `0 0 ${BoxContainer.svg().getBoundingClientRect().width} ${BoxContainer.svg().getBoundingClientRect().height
                }`
            );
        } else if (element.tagName == "text") {
            svg_el.style.display = "block";
            svg_el.append(element);
            transformFunc.updateValue(element, "positionX", "0");
            transformFunc.updateValue(element, "positionY", "0");
            svg_el.setAttribute(
                "viewBox",
                `0 0 ${BoxContainer.svg().getBoundingClientRect().width} ${BoxContainer.svg().getBoundingClientRect().height
                }`
            );
        } else if (el_type == "Video") {
            div_el.innerHTML == element.innerHTML;
            console.log(element.innerHTML);
            // div_el.append(element)
            div_el.style.display = "block";
            // element.style.height = "100%"
            // element.style.width = "100%"
            // element.style.position = "absolute"

            // element.style.top = '0px'
            // element.style.left = "0px"
            // element.style.transform = "none"
        }
        element.classList.remove("draggable");
        element.onmousedown = () => { };

        try {
            div_el.children[0].setAttribute("layer_element_name", element.getAttribute("element_name"));
            div_el.children[0].style.height = "100%";
            div_el.children[0].style.width = "100%";
        } catch (err) { }
        try {
            svg_el.children[0].setAttribute("layer_element_name", element.getAttribute("element_name"));
        } catch (err) { }

        element.setAttribute("layerer_element_name", element.getAttribute("element_name"));
        element.removeAttribute("element_name");
        layerDiv.elem.append(newCont);
        // newCont.style.top = LayerTopPosition + "%";
        // LayerTopPosition += 21;
        element.removeAttribute("element_groups");
        // layerDiv.elem.append(newCont)
    },
    delete: function (element) {
        getparent(layerDiv.GetElLayer(element), "layer_containers").remove();
        // LayerTopPosition -= 21
    },
    resetLayerArrangement:function(){
        for(var el of layerDiv.children){
            
        }
    },
    funcs: function () { },
    CreateElementContainerLayer: function () {
        var div = element_ContainerLayer.cloneNode(true);
        div.querySelector("[layer_btn=eye]").addEventListener("click", function () {
            var el = div.querySelector("[layer_element_name]").getAttribute("layer_element_name");

            if (this.children[0].classList.contains("bi-eye-slash")) {
                this.children[0].classList.remove("bi-eye-slash");
                this.children[0].classList.add("bi-eye");
                BoxContainer.div().querySelector(`[element_name=${el}]`).style.display = "block";
            } else {
                this.children[0].classList.remove("bi-eye");
                BoxContainer.div().querySelector(`[element_name=${el}]`).style.display = "none";
                this.children[0].classList.add("bi-eye-slash");
            }
        });
        div.querySelector("[layer_btn=lock]").addEventListener("click", function () {
            var el = div.querySelector("[layer_element_name]").getAttribute("layer_element_name");

            if (this.children[0].classList.contains("bi-lock-fill")) {
                this.children[0].classList.remove("bi-lock-fill");
                this.children[0].classList.add("bi-unlock-fill");
                BoxContainer.div().querySelector(`[element_name=${el}]`).classList.add("draggable");
                BoxContainer.div().querySelector(`[element_name=${el}]`).setAttribute("locked", "false");
            } else {
                this.children[0].classList.remove("bi-unlock-fill");
                this.children[0].classList.add("bi-lock-fill");
                BoxContainer.div().querySelector(`[element_name=${el}]`).classList.remove("draggable");
                BoxContainer.div().querySelector(`[element_name=${el}]`).setAttribute("locked", "true");
                BoxContainer.div().querySelector(`[element_name=${el}]`).onmousedown = (e) => {};
                activeel_size_handler.hide();
            }
        });
        return div;
    }
};
layerDiv.funcs();

const element_ContainerLayer = document.createElement("div");
element_ContainerLayer.classList.add("layer_containers");
element_ContainerLayer.innerHTML = `<svg preserveAspectRatio="none" class="svgForLayers" viewBox="0 0 0 0" ></svg>
<div class="divForLayers"> </div>
<div class="layers_options_div">
    <div class="layers_options element_name" >Container1</div>
    <div class="layers_options" layer_btn="eye"><i class="bi bi-eye"></i></div>
    <div class="layers_options" layer_btn="lock"><i class="bi bi-unlock-fill"></i></div>
    <div style="display:none;" ><i class="bi bi-arrow-down-square-fill"></i></div>
</div>`;

// BoxContainer.elem().addEventListener('click', function() {
//         BoxContainer.SetAspectRatio(16, 9)

//     })
// setJsonAttr(BoxContainer.elem(), 'settings', 'ar', '4:5')
// console.log(gettJsonAttr(BoxContainer.elem(), 'settings', 'ar'))
// var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
// var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
// path.id = getUniqueid('textpath')

// var svg_text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
// svg_text.style.fontSize = "20px"
// svg_text.style.fontFamily = "arial"
// svg_text.style.color = "blue"
// var textpath = document.createElementNS('http://www.w3.org/2000/svg', 'textpath');
// textpath.innerHTML = "Type here somethings"

// BoxContainer.svg().append(defs)
//     // defs.append(path)

// textpath.setAttribute('href', '#' + path.id)
// path.setAttribute('d', "M250,400a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z")
//     // BoxContainer.svg().append(svg_text)
// svg_text.append(textpath)

// textpath.setAttribute('href', '#' + path.id)


export function selectTagOptionsListener(element) {
    for (el of element.querySelectorAll('.selectTag_options')) {
        el.addEventListener('click', function(e) {
            var selecttag = gettarget(e, 'selectTag');
            selecttag.setAttribute('value', this.innerText);
            var selecttag_innerhtml;

            selecttag_innerhtml = this.innerHTML
            selecttag.setAttribute('type', this.getAttribute('type'))
                // if (selecttag_innerhtml.includes('element_group_icon')) {
                //     selecttag.setAttribute('type', 'element_group')
                // } else if() {
                //     selecttag.setAttribute('type', 'element_name')
                // }else if() {
                //     selecttag.setAttribute('type', 'itself')
                // }

            selecttag.querySelector('.selectTag_value').innerHTML = selecttag_innerhtml
            getparent(e.target, 'selectTag_options_div').style.display = "none"
        })
    }
}
export function update_triggerer_selector(selector) {
    var options_div = selector.querySelector('.selectTag_options_div');
    options_div.innerHTML = "";
    for (var names of BoxContainer.getAllBoxElementsInfo().element_names) {
        var p = document.createElement('p');
        p.classList.add('selectTag_options');
        p.setAttribute('type', 'element_name')
        p.innerHTML = `<i class="bi bi-file element_name_icon" ></i>${names}`
        options_div.append(p)
    }
    for (var names of BoxContainer.getAllBoxElementsInfo().element_groups) {
        var p = document.createElement('p');
        p.classList.add('selectTag_options');
        p.setAttribute('type', 'element_group')

        p.innerHTML = `<i class="bi bi-file element_group_icon" ></i>${names}`
        options_div.append(p)
    }
    // if (get)
    var selected = selector.querySelector('.selectTag_value').innerText
    if (BoxContainer.getAllBoxElementsInfo().element_names.includes(selected) == false && BoxContainer.getAllBoxElementsInfo().element_groups.includes(selected) == false && selected != "Select") {
        selector.querySelector('.selectTag_value').innerText = "! not exist"
    }
    console.log(options_div)
    selectTagOptionsListener(selector)
}

export function update_effector_selector(selector) {
    var options_div = selector.querySelector('.selectTag_options_div');
    options_div.innerHTML = "";
    for (var names of BoxContainer.getAllBoxElementsInfo().element_names) {
        var p = document.createElement('p');
        p.setAttribute('type', 'element_name')
        p.classList.add('selectTag_options');

        p.innerHTML = `<i class="bi bi-file element_name_icon" ></i>${names}`
        options_div.append(p)
    }
    for (var names of BoxContainer.getAllBoxElementsInfo().element_groups) {
        var p = document.createElement('p');
        p.classList.add('selectTag_options');
        p.setAttribute('type', 'element_group')

        p.innerHTML = `<i class="bi bi-file element_group_icon" ></i>${names}`
        options_div.append(p)
    }
    var p = document.createElement('p');
    p.classList.add('selectTag_options');
    p.setAttribute('type', 'element_itself')
    p.innerHTML = `<i class="bi bi-file element_name_icon" ></i>element itself`
    options_div.append(p)
        // 
    var p = document.createElement('p');
    p.classList.add('selectTag_options');
    p.setAttribute('type', 'element_itself_parentNode')
    p.innerHTML = `<i class="bi bi-file element_name_icon" ></i>elements parent container`
    options_div.append(p)
    var selected = selector.querySelector('.selectTag_value').innerText
    if (BoxContainer.getAllBoxElementsInfo().element_names.includes(selected) == false && BoxContainer.getAllBoxElementsInfo().element_groups.includes(selected) == false && selected != "Select" && selected != 'element itself') {
        selector.querySelector('.selectTag_value').innerText = "! not exist"
    }
    selectTagOptionsListener(selector)

}


export function NewBoxContainer(json) {
    // ?deleting/saving old
    if(BoxContainer.elem() != null){
        FunctioneditorCreateDivs.ResetFuncDiv()
        layerDiv.Reset()
        BoxContainer.elem().remove()
    }
    //if (document.body.querySelector('#interac_crtr') == null && document.body.querySelector('[interactcontainer]') == null) {
        if (json.dataHtml == undefined) {
            
            var BoxContainer_elem = document.createElement('div')
            var BoxContainer_div = document.createElement('div')
            BoxContainer_div.innerHTML = ` <svg InteractSvg=${getUniqueid("InteractSvg")} xmlns="http://www.w3.org/2000/svg" xlinkns="http://www.w3.org/1999/xlink" xmlns:xlink="http://www.w3.org/1999/xlink">`
            document.body.append(BoxContainer_elem)
            BoxContainer_elem.append(BoxContainer_div)
            var BoxContainer_svg = BoxContainer_div.children[0]
      
            BoxContainer_elem.setAttribute("InteractContainer", getUniqueid("InteractContainer"))
            BoxContainer_elem.spellcheck = false
            BoxContainer_elem.setAttribute("InteractState", "Active")
            BoxContainer_div.setAttribute("InteractDiv", getUniqueid("InteractDiv"))
            BoxContainer_svg.setAttribute("InteractSvg",getUniqueid("InteractSvg"))
           
            try {
                BoxContainer.SetAspectRatio(json.aspectratio.w, json.aspectratio.h)
            }
            catch (err) {
                BoxContainer.SetAspectRatio(16, 9)
            }
            // BoxContainer.style.top = ""
            // BoxContainer.style.left = ""
            BoxContainer.elem().style.backgroundColor = "white"
            
        } else {
           
            BoxContainer.dataBox.innerHTML = json.dataHtml;
            var dataBox = BoxContainer.dataBox
            var BoxContainer_elem = document.createElement('div');
            var dataBoxContainer_elem = dataBox.querySelector('[InteractContainer]')
            BoxContainer_elem.innerHTML = dataBoxContainer_elem.innerHTML
            BoxContainer_elem.spellcheck = false
            BoxContainer_elem.setAttribute('settings', dataBoxContainer_elem.getAttribute('settings'));
            BoxContainer_elem.setAttribute('interacfunctions', dataBoxContainer_elem.getAttribute('interacfunctions'));
            BoxContainer_elem.setAttribute('interactcontainer', dataBoxContainer_elem.getAttribute('interactcontainer'));
            BoxContainer_elem.setAttribute("InteractState", "Active")
            //   //? elem styling
            BoxContainer_elem.style.width = dataBoxContainer_elem.style.width;
            BoxContainer_elem.style.height = dataBoxContainer_elem.style.height;
            BoxContainer_elem.style.backgroundColor = dataBoxContainer_elem.style.backgroundColor;
            BoxContainer_elem.style.backgroundImage = dataBoxContainer_elem.style.backgroundImage;
            BoxContainer_elem.style.top = "19%"
            BoxContainer_elem.style.left = "33%"
            BoxContainer_elem.style.position = "fixed"
            BoxContainer_elem.style.transform = "none"
            document.body.append(BoxContainer_elem)
            
            //?Media
            // for(var el of BoxContainer_elem.querySelectorAll('[primary-element-type=YoutubeVideo]')){
            //     console.log(el.getAttribute('yt-id'))
            //     BoxContainer.ChangeYtvideo(el,el.getAttribute('yt-id'))
            // }
            for (var el of preview_box.querySelectorAll('[primary-element-type=Video]')) {
    
                BoxContainer.ChangeSrc(el,InteracStyles.getValue({
                    element: el,
                    prop: "src"
                }))
    
            }
            for (var el of preview_box.querySelectorAll('[primary-element-type=YoutubeVideo]')) {
                BoxContainer.ChangeSrc(el,InteracStyles.getValue({
                    element: el,
                    prop: "src"
                }))
    
    
            }
            for (var el of preview_box.querySelectorAll('[primary-element-type=Audio]')) {
                
                BoxContainer.ChangeSrc(el,InteracStyles.getValue({
                    element: el,
                    prop: "src"
                }))
    
            }
            
            
            // ??INteract function 
            //console.log(BoxContainer_elem.getAttribute("InteracFunctions"))
            try{
            var InteracFuns = JSON.parse(BoxContainer.elem().getAttribute("InteracFunctions"))
            Object.keys(InteracFuns).forEach(function (key) {
                console.log(InteracFuns[key])
                FunctioneditorCreateDivs.CreateFunctionEditorDiv(InteracFuns[key], true)
            })}catch(err){}

            for (var el of BoxContainer.svg().children) {
                layerDiv.Add(el)
                if(el.getAttribute('locked') != true){
                el.classList.add('draggable')}
            }
            dataBox.innerHTML = ""
        }
    


    BoxContainer.div().oninput = (e) => {
        for (var el of BoxContainer.div().querySelectorAll('[secondary-element-type=Textp]')) {
            for (var elem of el.querySelectorAll('span,div,p')) {
                elem.setAttribute('secondary-element-type', "text")
            }
        }
    }

    BoxContainer.elem().addEventListener('mousedown', e => BoxContainerClickFunc(e))



}


 NewBoxContainer({})

// NewBoxContainer({
//   dataHtml: `<div id="interac_Container" settings="{&quot;aspect-ratio&quot;:&quot;1:1&quot;}" style="top: 20%;left: 33%;height: 442px;width: 442px;background-color: white;transform: scale(0.5);" interacfunctions="{&quot;dsasa&quot;:{&quot;triggerers&quot;:{&quot;names&quot;:[&quot;text1&quot;],&quot;groups&quot;:[]},&quot;effectors&quot;:{&quot;names&quot;:[{&quot;name&quot;:&quot;text2&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;display&quot;],&quot;val&quot;:[&quot;block&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null},{&quot;name&quot;:&quot;image1&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;display&quot;],&quot;val&quot;:[&quot;block&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null}],&quot;groups&quot;:[]},&quot;this&quot;:{&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}}},&quot;event&quot;:&quot;click&quot;,&quot;name&quot;:&quot;dsasa&quot;},&quot;hui&quot;:{&quot;triggerers&quot;:{&quot;names&quot;:[&quot;image1&quot;],&quot;groups&quot;:[]},&quot;effectors&quot;:{&quot;names&quot;:[{&quot;name&quot;:&quot;text2&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;display&quot;],&quot;val&quot;:[&quot;none&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null}],&quot;groups&quot;:[]},&quot;this&quot;:{&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;display&quot;],&quot;val&quot;:[&quot;none&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null},&quot;event&quot;:&quot;click&quot;,&quot;name&quot;:&quot;hui&quot;},&quot;huo&quot;:{&quot;triggerers&quot;:{&quot;names&quot;:[&quot;image1&quot;],&quot;groups&quot;:[]},&quot;effectors&quot;:{&quot;names&quot;:[{&quot;name&quot;:&quot;text2&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;display&quot;],&quot;val&quot;:[&quot;none&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null}],&quot;groups&quot;:[]},&quot;this&quot;:{&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;display&quot;],&quot;val&quot;:[&quot;none&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null},&quot;event&quot;:&quot;click&quot;,&quot;name&quot;:&quot;huo&quot;},&quot;crossdetails&quot;:{&quot;triggerers&quot;:{&quot;names&quot;:[&quot;image1&quot;],&quot;groups&quot;:[]},&quot;effectors&quot;:{&quot;names&quot;:[],&quot;groups&quot;:[{&quot;group&quot;:&quot;detailsmodal&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;display&quot;],&quot;val&quot;:[&quot;none&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null}]},&quot;this&quot;:{&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;display&quot;],&quot;val&quot;:[&quot;none&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null},&quot;event&quot;:&quot;click&quot;,&quot;name&quot;:&quot;crossdetails&quot;},&quot;1stbookdetails&quot;:{&quot;triggerers&quot;:{&quot;names&quot;:[&quot;text1&quot;],&quot;groups&quot;:[]},&quot;effectors&quot;:{&quot;names&quot;:[{&quot;name&quot;:&quot;text2&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;display&quot;],&quot;val&quot;:[&quot;block&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null},{&quot;name&quot;:&quot;image1&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;display&quot;],&quot;val&quot;:[&quot;block&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null}],&quot;groups&quot;:[]},&quot;this&quot;:{&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}}},&quot;event&quot;:&quot;click&quot;,&quot;name&quot;:&quot;1stbookdetails&quot;},&quot;2ndbookdetail&quot;:{&quot;triggerers&quot;:{&quot;names&quot;:[&quot;text1clone&quot;],&quot;groups&quot;:[]},&quot;effectors&quot;:{&quot;names&quot;:[{&quot;name&quot;:&quot;text2clone&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;display&quot;],&quot;val&quot;:[&quot;block&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null},{&quot;name&quot;:&quot;image1&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;display&quot;],&quot;val&quot;:[&quot;block&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null}],&quot;groups&quot;:[]},&quot;this&quot;:{&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}}},&quot;event&quot;:&quot;click&quot;,&quot;name&quot;:&quot;2ndbookdetail&quot;},&quot;detailbtnhover&quot;:{&quot;triggerers&quot;:{&quot;names&quot;:[],&quot;groups&quot;:[&quot;detailbtn&quot;]},&quot;effectors&quot;:{&quot;names&quot;:[],&quot;groups&quot;:[]},&quot;this&quot;:{&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;color&quot;],&quot;val&quot;:[&quot;#0d0c0c&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null},&quot;event&quot;:&quot;mouseover&quot;,&quot;name&quot;:&quot;detailbtnhover&quot;}}">
//         <div id="interac_crtr" spellcheck="false" contenteditable="false">
//             <svg id="interac_Svg" xmlns="http://www.w3.org/2000/svg" xlinkns="http://www.w3.org/1999/xlink" xmlns:xlink="http://www.w3.org/1999/xlink">

//              <foreignObject id="Interact-text-elementhn4p8kdn1" transform="translate(0 0) rotate(0 221 35.5) translate(0 0) skewX(0) translate(0 -0) translate(0 0) skewY(0) translate(-0 -0) translate(0 0) scale(1 1) translate(-0 -0)" primary-element-type="Text" class="draggable" element_groups="" element_name="text0" x="0" y="0" element_stake="1" style="height: 71px; width: 442px; cursor: grab;"><div secondary-element-type="Textdiv" dropshadow="" style="border-width: 3px; border-color: rgb(0, 0, 0); border-style: solid; border-radius: 0%; background-color: transparent; background-image: none;"><p secondary-element-type="Textp" style="font-family: &quot;Amatic SC&quot;; font-size: 33px; padding: 2px 0px 0px 50px; -webkit-text-stroke: 0px rgb(0, 0, 0); color: rgb(128, 29, 29); text-shadow: rgb(150, 150, 150) 4px 4px 2px; letter-spacing: 0px; word-spacing: 0px; line-height: 55px;" contenteditable="true">Top 5 PYthon Books</p></div></foreignObject><foreignObject id="Interact-image-elementbv8yl9ble" transform="translate(0 0) rotate(0 44.25 94.5) translate(0 0) skewX(0) translate(0 -0) translate(0 0) skewY(0) translate(-0 -0) translate(0 0) scale(1 1) translate(-0 -0)" primary-element-type="Image" class="draggable" element_groups="" element_name="image0" x="15" y="109" element_stake="2" style="height: 160px; width: 147px; cursor: grabbing;"><img src="https://hackr.io/blog/uploads/images/1570190912AToZJbQ7nA.jpg" draggable="false" secondary-element-type="Image" dropshadow="" style="border-width: 0px; border-color: black; border-style: solid; border-radius: 0%; background-color: transparent; background-image: none;"></foreignObject><foreignObject id="Interact-text-elementmcmwlbtpm" transform="translate(0 0) rotate(0 93.5 309) translate(0 0) skewX(0) translate(0 -0) translate(0 0) skewY(0) translate(-0 -0) translate(0 0) scale(1 1) translate(-0 -0)" primary-element-type="Text" class="draggable" element_groups="detailbtn" element_name="text1" x="10" y="289" element_stake="3" style="height: 40px; width: 167px; cursor: grabbing;"><div secondary-element-type="Textdiv" dropshadow="" style="border-width: 0px; border-color: black; border-style: solid; border-radius: 0%; background-color: transparent; background-image: none;"><p secondary-element-type="Textp" style="font-family: sans-serif; font-size: 20px; padding: 2px; -webkit-text-stroke: 0px rgb(0, 0, 0); color: rgb(0, 0, 255); text-shadow: rgb(86, 170, 255) 4px 0px 9px; letter-spacing: 0px; word-spacing: 0px; line-height: 36px; text-align: center;">Details</p></div></foreignObject><foreignObject id="Interact-text-elementpygs000i7" transform="translate(0 0) rotate(0 146.5 385) translate(0 0) skewX(0) translate(0 -0) translate(0 0) skewY(0) translate(-0 -0) translate(0 0) scale(1 1) translate(-0 -0)" primary-element-type="Text" class="draggable" element_groups="detailsmodal" element_name="text2" x="10" y="341" element_stake="4" style="height: 88px;width: 273px;cursor: grab;display: none;"><div secondary-element-type="Textdiv" dropshadow="" style="border-width: 0px; border-color: black; border-style: solid; border-radius: 11%; background-color: rgb(89, 0, 255); background-image: none;"><p secondary-element-type="Textp" style="font-family: cursive; font-size: 17px; padding: 2px; -webkit-text-stroke: 0px rgb(0, 0, 0); color: rgb(0, 0, 0); text-shadow: none; letter-spacing: 0px; word-spacing: 0px; line-height: 28px;" contenteditable="true">Author : Eric Mathew&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Pages : 544&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Price : $99</p></div></foreignObject>
//         <foreignObject id="Interact-image-elementi98xr9nh0" transform="translate(0 0) rotate(0 134 93) translate(0 0) skewX(0) translate(0 -0) translate(0 0) skewY(0) translate(-0 -0) translate(0 0) scale(1 1) translate(-0 -0)" primary-element-type="Image" class="draggable active" element_groups="" element_name="image2" x="186" y="100" element_stake="6" style="height: 172px; width: 164px; cursor: grab;"><img src="https://hackr.io/blog/media/automate-the-boring-stuff-with-python-2nd-edition.jpg" draggable="false" secondary-element-type="Image" dropshadow="" style="border-width: 0px; border-color: black; border-style: solid; border-radius: 0%; background-color: transparent; background-image: none;"></foreignObject><foreignObject id="Interact-text-elementjjg295rd8" transform="translate(0 0) rotate(0 274 310) translate(0 0) skewX(0) translate(0 -0) translate(0 0) skewY(0) translate(-0 -0) translate(0 0) scale(1 1) translate(-0 -0)" primary-element-type="Text" class="draggable" element_groups="detailbtn" element_name="text1clone" x="224" y="285" element_stake="7" style="height: 50px; width: 100px; cursor: grab;"><div secondary-element-type="Textdiv" dropshadow="" style="border-width: 0px; border-color: black; border-style: solid; border-radius: 0%; background-color: transparent; background-image: none;"><p secondary-element-type="Textp" style="font-family: sans-serif; font-size: 20px; padding: 2px; -webkit-text-stroke: 0px black; letter-spacing: normal; word-spacing: 0px; line-height: 36px; color: rgb(0, 0, 255); text-shadow: rgb(86, 170, 255) 4px 0px 9px;">Details</p></div></foreignObject><foreignObject id="Interact-text-elementn5os16l5f" transform="translate(0 0) rotate(0 -237.265625 -125) translate(0 0) skewX(0) translate(0 -0) translate(0 0) skewY(0) translate(-0 -0) translate(0 0) scale(1 1) translate(-0 -0)" primary-element-type="Text" class="draggable" element_groups="detailsmodal" element_name="text2clone" x="179" y="336" element_stake="8" style="height: 89px;width: 261px;cursor: grab;display: none;"><div secondary-element-type="Textdiv" dropshadow="" style="border-width: 0px; border-color: black; border-style: solid; border-radius: 11%; background-color: rgb(89, 0, 255); background-image: none;"><p secondary-element-type="Textp" style="font-family: cursive; font-size: 17px; padding: 2px; -webkit-text-stroke: 0px black; letter-spacing: normal; word-spacing: 0px; line-height: 28px; color: rgb(0, 0, 0); text-shadow: none;">Author : AI Swegert&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Pages : 400&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Price : $109</p></div></foreignObject><foreignObject id="Interact-image-elementngx4qbdh4" transform="translate(0 0) rotate(0 -237.265625 -125) translate(0 0) skewX(0) translate(0 -0) translate(0 0) skewY(0) translate(-0 -0) translate(0 0) scale(1 1) translate(-0 -0)" primary-element-type="Image" class="draggable" element_groups="" element_name="image1" x="206" y="341" element_stake="10" style="height: 50px;width: 40px;cursor: grab;display: none;"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1R6c0J0tPWmQdJKO52ybWhi7gLXyXTh-SMw&amp;usqp=CAU" draggable="false" secondary-element-type="Image" dropshadow="" style="border-width: 0px; border-color: black; border-style: solid; border-radius: 0%; background-color: transparent; background-image: none;"></foreignObject></svg>
//         </div>
//     </div>`})


//NewBoxContainer({dataHtml:`<div interactcontainer="InteractContainer3loqnq22q" settings="{&quot;aspect-ratio&quot;:&quot;16:9&quot;}" style="top: 20%; left: 33%; height: 267.188px; width: 475px; background-color: white; transform: none;" interacfunctions="{&quot;0&quot;:{&quot;triggerers&quot;:{&quot;names&quot;:[&quot;text0&quot;],&quot;groups&quot;:[]},&quot;effectors&quot;:{&quot;names&quot;:[{&quot;name&quot;:&quot;Youtubevideo1&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;src&quot;],&quot;val&quot;:[&quot;https://youtu.be/7C2z4GqqS5E&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null}],&quot;groups&quot;:[]},&quot;this&quot;:{&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}}},&quot;event&quot;:&quot;click&quot;,&quot;name&quot;:&quot;0&quot;},&quot;1&quot;:{&quot;triggerers&quot;:{&quot;names&quot;:[&quot;text1&quot;],&quot;groups&quot;:[]},&quot;effectors&quot;:{&quot;names&quot;:[{&quot;name&quot;:&quot;Youtubevideo1&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;src&quot;],&quot;val&quot;:[&quot;https://youtu.be/3kTM7JAgoHg&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null}],&quot;groups&quot;:[]},&quot;this&quot;:{&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}}},&quot;event&quot;:&quot;click&quot;,&quot;name&quot;:&quot;1&quot;},&quot;2&quot;:{&quot;triggerers&quot;:{&quot;names&quot;:[&quot;text2&quot;],&quot;groups&quot;:[]},&quot;effectors&quot;:{&quot;names&quot;:[{&quot;name&quot;:&quot;Youtubevideo1&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;src&quot;],&quot;val&quot;:[&quot;https://youtu.be/dmurcADHIc4&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null}],&quot;groups&quot;:[]},&quot;this&quot;:{&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}}},&quot;event&quot;:&quot;click&quot;,&quot;name&quot;:&quot;2&quot;},&quot;ko&quot;:{&quot;triggerers&quot;:{&quot;names&quot;:[&quot;Youtubevideo1&quot;],&quot;groups&quot;:[]},&quot;effectors&quot;:{&quot;names&quot;:[{&quot;name&quot;:&quot;Youtubevideo1&quot;,&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[&quot;src&quot;],&quot;val&quot;:[&quot;https://youtu.be/7C2z4GqqS5E&quot;]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}},&quot;transitions&quot;:null}],&quot;groups&quot;:[]},&quot;this&quot;:{&quot;functions&quot;:{&quot;change&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[]},&quot;incdec&quot;:{&quot;prop&quot;:[],&quot;val&quot;:[],&quot;sign&quot;:[]}}},&quot;event&quot;:&quot;click&quot;,&quot;name&quot;:&quot;ko&quot;}}"><div interactdiv="InteractDive5eqc6trb"> <svg interactsvg="InteractSvgwjx8i882i" xmlns="http://www.w3.org/2000/svg" xlinkns="http://www.w3.org/1999/xlink" xmlns:xlink="http://www.w3.org/1999/xlink"><foreignObject primary-element-type="YoutubeVideo" id="Interact-yt-elementoq7k24xic" y="22.53125" x="183.953125" class="draggable" transform="translate(0 0) rotate(-9.584531292898138 332.0859375 125.1796875) translate(0 0) skewX(0) translate(0 -0) translate(0 0) skewY(0) translate(-0 -0) translate(0 0) scale(1 1) translate(-0 -0)" element_groups="" element_name="Youtubevideo1" yt-id="hmE9f-TEutc" style="height: 205.297px; width: 296.266px; cursor: grab;" element_stake="1"><div tabindex="0" class="plyr plyr--full-ui plyr--video plyr--youtube plyr--fullscreen-enabled plyr--paused plyr--stopped plyr__poster-enabled" dropshadow="undefined" style="border-width: 0px; border-color: black; border-style: solid; border-radius: 0%; background-color: transparent; background-image: none;"><div class="plyr__controls"><button class="plyr__controls__item plyr__control" type="button" data-plyr="play" aria-label="Play, BTS (방탄소년단) '피 땀 눈물 (Blood Sweat &amp; Tears)' Official MV"><svg class="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-pause"></use></svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span class="label--pressed plyr__sr-only">Pause</span><span class="label--not-pressed plyr__sr-only">Play</span></button><div class="plyr__controls__item plyr__progress__container"><div class="plyr__progress"><input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" autocomplete="off" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" id="plyr-seek-2204" aria-valuetext="00:00 of 06:04" style="--value:0%;"><progress class="plyr__progress__buffer" min="0" max="100" value="0" role="progressbar" aria-hidden="true">% buffered</progress><span class="plyr__tooltip">00:00</span></div></div><div class="plyr__controls__item plyr__time--current plyr__time" aria-label="Current time">-06:04</div><div class="plyr__controls__item plyr__volume"><button type="button" class="plyr__control" data-plyr="mute"><svg class="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-muted"></use></svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-volume"></use></svg><span class="label--pressed plyr__sr-only">Unmute</span><span class="label--not-pressed plyr__sr-only">Mute</span></button><input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" role="slider" aria-label="Volume" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" id="plyr-volume-2204" aria-valuetext="90.0%" style="--value:90%;"></div><button class="plyr__controls__item plyr__control" type="button" data-plyr="captions"><svg class="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-captions-on"></use></svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-captions-off"></use></svg><span class="label--pressed plyr__sr-only">Disable captions</span><span class="label--not-pressed plyr__sr-only">Enable captions</span></button><div class="plyr__controls__item plyr__menu"><button aria-haspopup="true" aria-controls="plyr-settings-2204" aria-expanded="false" type="button" class="plyr__control" data-plyr="settings"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-settings"></use></svg><span class="plyr__sr-only">Settings</span></button><div class="plyr__menu__container" id="plyr-settings-2204" hidden=""><div><div id="plyr-settings-2204-home"><div role="menu"><button data-plyr="settings" type="button" class="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true" hidden=""><span>Captions<span class="plyr__menu__value">Disabled</span></span></button><button data-plyr="settings" type="button" class="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true" hidden=""><span>Quality<span class="plyr__menu__value">undefined</span></span></button><button data-plyr="settings" type="button" class="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true"><span>Speed<span class="plyr__menu__value">Normal</span></span></button></div></div><div id="plyr-settings-2204-captions" hidden=""><button type="button" class="plyr__control plyr__control--back"><span aria-hidden="true">Captions</span><span class="plyr__sr-only">Go back to previous menu</span></button><div role="menu"></div></div><div id="plyr-settings-2204-quality" hidden=""><button type="button" class="plyr__control plyr__control--back"><span aria-hidden="true">Quality</span><span class="plyr__sr-only">Go back to previous menu</span></button><div role="menu"></div></div><div id="plyr-settings-2204-speed" hidden=""><button type="button" class="plyr__control plyr__control--back"><span aria-hidden="true">Speed</span><span class="plyr__sr-only">Go back to previous menu</span></button><div role="menu"><button data-plyr="speed" type="button" role="menuitemradio" class="plyr__control" aria-checked="false" value="0.5"><span>0.5×</span></button><button data-plyr="speed" type="button" role="menuitemradio" class="plyr__control" aria-checked="false" value="0.75"><span>0.75×</span></button><button data-plyr="speed" type="button" role="menuitemradio" class="plyr__control" aria-checked="true" value="1"><span>Normal</span></button><button data-plyr="speed" type="button" role="menuitemradio" class="plyr__control" aria-checked="false" value="1.25"><span>1.25×</span></button><button data-plyr="speed" type="button" role="menuitemradio" class="plyr__control" aria-checked="false" value="1.5"><span>1.5×</span></button><button data-plyr="speed" type="button" role="menuitemradio" class="plyr__control" aria-checked="false" value="1.75"><span>1.75×</span></button><button data-plyr="speed" type="button" role="menuitemradio" class="plyr__control" aria-checked="false" value="2"><span>2×</span></button></div></div></div></div></div><button class="plyr__controls__item plyr__control" type="button" data-plyr="pip"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-pip"></use></svg><span class="plyr__sr-only">PIP</span></button><button class="plyr__controls__item plyr__control" type="button" data-plyr="fullscreen"><svg class="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg class="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span class="label--pressed plyr__sr-only">Exit fullscreen</span><span class="label--not-pressed plyr__sr-only">Enter fullscreen</span></button></div><div class="plyr__video-wrapper plyr__video-embed" style="aspect-ratio: 16 / 9;"><iframe id="youtube-9276" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Player for BTS (방탄소년단) '피 땀 눈물 (Blood Sweat &amp; Tears)' Official MV" width="640" height="360" src="https://www.youtube.com/embed/hmE9f-TEutc?autoplay=0&amp;controls=0&amp;disablekb=1&amp;playsinline=1&amp;cc_load_policy=0&amp;cc_lang_pref=auto&amp;widget_referrer=http%3A%2F%2Flocalhost%3A3000%2F&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;customControls=true&amp;noCookie=false&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=3"></iframe><div class="plyr__poster" style="background-image: url(&quot;https://i.ytimg.com/vi/hmE9f-TEutc/maxresdefault.jpg&quot;);"></div></div><button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play, BTS (방탄소년단) '피 땀 눈물 (Blood Sweat &amp; Tears)' Official MV"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span class="plyr__sr-only">Play</span></button></div> <div class="freeze_div" style="height: 100%; width: 100%;"></div></foreignObject><foreignObject id="Interact-text-elementa1nynnmtq" transform="translate(0 0) rotate(0 64 65) translate(0 0) skewX(0) translate(0 -0) translate(0 0) skewY(0) translate(-0 -0) translate(0 0) scale(1 1) translate(-0 -0)" primary-element-type="Text" class="draggable active" element_groups="" element_name="text0" x="14" y="15" style="height: 100px; width: 100px; cursor: grabbing;" element_stake="2"><div secondary-element-type="Textdiv" dropshadow="undefined" style="font-family: &quot;Black Han Sans&quot;; font-size: 25px; padding: 2px; color: black; text-shadow: rgb(150, 150, 150) 4px 4px 2px; border-width: 0px; border-color: black; border-style: solid; border-radius: 0%; background-color: transparent; background-image: none; text-align: left; text-decoration: none; font-weight: normal; font-style: normal; -webkit-text-stroke-width: 0px;"><div secondary-element-type="Textp"><p secondary-element-type="text" contenteditable="false">Dark</p></div></div></foreignObject><foreignObject id="Interact-text-elementtlmbrb7zi" transform="translate(0 0) rotate(0 67 148) translate(0 0) skewX(0) translate(0 -0) translate(0 0) skewY(0) translate(-0 -0) translate(0 0) scale(1 1) translate(-0 -0)" primary-element-type="Text" class="draggable" element_groups="" element_name="text1" x="17" y="98" style="height: 100px; width: 100px; cursor: grab;" element_stake="3"><div secondary-element-type="Textdiv" dropshadow="undefined" style="font-family: &quot;Zen Tokyo Zoo&quot;; font-size: 25px; padding: 2px; color: wheat; text-shadow: rgb(150, 150, 150) 4px 4px 2px; border-width: 0px; border-color: black; border-style: solid; border-radius: 0%; background-color: transparent; background-image: none; text-align: left; text-decoration: none; font-weight: normal; font-style: normal; -webkit-text-stroke-width: 0px;"><div secondary-element-type="Textp"><p secondary-element-type="text" contenteditable="false">Hurray</p></div></div></foreignObject><foreignObject id="Interact-text-elementz72c6wj38" transform="translate(0 0) rotate(0 61 239) translate(0 0) skewX(0) translate(0 -0) translate(0 0) skewY(0) translate(-0 -0) translate(0 0) scale(1 1) translate(-0 -0)" primary-element-type="Text" class="draggable" element_groups="" element_name="text2" x="11" y="189" style="height: 100px; width: 100px; cursor: grab;" element_stake="4"><div secondary-element-type="Textdiv" dropshadow="undefined" style="font-family: &quot;Amatic SC&quot;; font-size: 25px; padding: 2px; color: rgb(128, 29, 29); text-shadow: rgb(150, 150, 150) 4px 4px 2px; border-width: 0px; border-color: black; border-style: solid; border-radius: 0%; background-color: transparent; background-image: none; text-align: left; text-decoration: none; font-weight: normal; font-style: normal; -webkit-text-stroke-width: 0px;"><div secondary-element-type="Textp"><p secondary-element-type="text" contenteditable="false">Keep going</p></div></div></foreignObject></svg></div></div>`})
// BoxContainer.div().addEventListener("input", function (e) {
//   for (var el of BoxContainer.elem().querySelectorAll("text")) {
//     if (el.children[0].tagName != "textPath") {
//       el.innerHTML = `<textPath secondary-element-type="Text" href="#${el.getAttribute(
//         "textpathid"
//       )}" textpath="${el.getAttribute("textpathid")}">&#8203;</textPath>`;
//     }
//   }
//   layerDiv.GetElLayer(getactiveel()).innerHTML = InteracStyles.getValue({
//     element: getactiveel(),
//     prop: "inner-text"
//   });
// });
const ml  = document.createElement('div');
ml.innerHTML = `<i class="bi bi-plus-square add_sibling"></i>`
var icon = `<i class="bi bi-plus-square add_sibling"></i>`
export function Save(Interacml){
    var div = document.createElement('div');
    //div.append(Interacml)
    div.innerHTML = Interacml + icon
    //div.innerHTML = Interacml + `<i class="bi bi-plus-square add_sibling"></i>`
    div.classList.add('ji')
    div.querySelector('[interactcontainer]').style.left = "0"
    div.querySelector('[interactcontainer]').style.top = "0"
    div.querySelector('[interactcontainer]').style.position = "relative"
    div.querySelector('[interactcontainer]').style.transformOrigin = "left top";
    var maxwidth = (window.innerWidth / 100) * 24
    var interacwidth = parseFloat(div.querySelector('[interactcontainer]').style.width)
    var newwidth = maxwidth / interacwidth
    div.querySelector('[interactcontainer]').style.transform = `scale(${newwidth})`;
    document.querySelector('#tags_template_shape_content').append(div)
    div.querySelector('[interactcontainer]').setAttribute("InteractState", "Image")
    var interacheight = parseFloat(BoxContainer.elem().style.height) * newwidth
    div.style.gridAutoRows = `${interacheight}px 50px`
    
    for(var el of div.querySelectorAll('[primary-element-type]')){
        activeelFunction.makeunmovable(el)
        el.classList.remove('active')
    }

    div.querySelector('.add_sibling').addEventListener('click',function(){
        NewBoxContainer({dataHtml:this.parentNode.querySelector('[interactcontainer]').outerHTML})
    })

}