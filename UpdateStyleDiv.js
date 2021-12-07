import { InteracStyles,CreateStyleDiv,transformFunc } from './Interact_style.js';

const activeel_Text = document.querySelector("#Interact_activeel_Text");
const activeel_Textpath = document.querySelector("#Interact_activeel_Textpath");
const activeel_Border_Radius = document.querySelector(
  "#Interact_activeel_Border_Radius",
);
const activeel_Border = document.querySelector(
  "#Interact_activeel_Border_Style",
);
const activeel_Transform = document.querySelector(
  "#Interact_activeel_Transform",
);
const activeel_Text_Shadow = document.querySelector(
  "#Interact_activeel_Text_Shadow",
);
const activeel_Drop_Shadow = document.querySelector(
  "#Interact_activeel_Drop_Shadow",
);
const activeel_Background = document.querySelector(
  "#Interact_activeel_Background",
);
const activeel_Brush = document.querySelector("#Interact_activeel_Brush");
const activeel_Box_Shadow = document.querySelector(
  "#Interact_activeel_Box_Shadow",
);

export function UpdateOriginalStyleDivs(PassedElement) {

    for(var el of document.querySelector('#style_div').querySelectorAll('.divninput')){
      //console.log(el)
      try{
      setmaxminForinput(el)}
      catch (err){}
    }
  //** */
    if(PassedElement.getAttribute('primary-element-type') !="Path" && PassedElement.getAttribute('primary-element-type') !="TextPath" ){
    //?BORDER RADIUS
    var styleDiv = activeel_Border_Radius;
    //var element = getactiveel()
    var element = PassedElement
    //var element = element.children[0] || element;

    var btlr = window
      .getComputedStyle(element)
      .getPropertyValue("border-top-left-radius")
      .replace(/%/g, "");
    var btrr = window
      .getComputedStyle(element)
      .getPropertyValue("border-top-right-radius")
      .replace(/%/g, "");
    var bblr = window
      .getComputedStyle(element)
      .getPropertyValue("border-bottom-left-radius")
      .replace(/%/g, "");
    var bbrr = window
      .getComputedStyle(element)
      .getPropertyValue("border-bottom-right-radius")
      .replace(/%/g, "");
  
  
    if (btlr == btrr && btlr == bblr && btlr == bbrr) {
      styleDiv.querySelector("input[type=checkbox]").checked = true;
  
      styleDiv.querySelector(".diff_borders_div").style.display = "none";
      styleDiv.querySelector(".same_borders_div").style.display = "grid";
      if (btlr.split(" ").length == 2) {
        styleDiv
          .querySelector("[Main-style=border-radius]")
          .querySelector("input[type=checkbox]").checked = true;
        styleDiv.querySelector("[style-attr=border-radius]").value =
          btlr.split(" ")[0];
        styleDiv.querySelector("[style-attr=border-radius-elliptic]").value =
          btlr.split(" ")[1];
        styleDiv.querySelector(
          "[style-attr=border-radius-elliptic]",
        ).disabled = false;
      } else {
        styleDiv
          .querySelector("[Main-style=border-radius]")
          .querySelector("input[type=checkbox]").checked = false;
        styleDiv.querySelector("[style-attr=border-radius]").value =
          btlr.split(" ")[0];
        styleDiv.querySelector(
          "[style-attr=border-radius-elliptic]",
        ).disabled = true;
      }
    } else {
      styleDiv.querySelector(".diff_borders_div").style.display = "grid";
      styleDiv.querySelector(".same_borders_div").style.display = "none";
      styleDiv.querySelector("input[type=checkbox]").checked = false;
  
      if (btlr.split(" ").length == 2) {
        styleDiv
          .querySelector("[Main-style=border-top-left-radius]")
          .querySelector("input[type=checkbox]").checked = true;
        styleDiv.querySelector("[style-attr=border-top-left-radius]").value =
          btlr.split(" ")[0];
        styleDiv.querySelector(
          "[style-attr=border-top-left-radius-elliptic]",
        ).value = btlr.split(" ")[1];
        styleDiv.querySelector(
          "[style-attr=border-top-left-radius-elliptic]",
        ).disabled = false;
      } else {
        styleDiv
          .querySelector("[Main-style=border-top-left-radius]")
          .querySelector("input[type=checkbox]").checked = false;
        styleDiv.querySelector("[style-attr=border-top-left-radius]").value =
          btlr.split(" ")[0];
        styleDiv.querySelector(
          "[style-attr=border-top-left-radius-elliptic]",
        ).disabled = true;
      }
      //
      if (btrr.split(" ").length == 2) {
        styleDiv
          .querySelector("[Main-style=border-top-right-radius]")
          .querySelector("input[type=checkbox]").checked = true;
        styleDiv.querySelector("[style-attr=border-top-right-radius]").value =
          btrr.split(" ")[0];
        styleDiv.querySelector(
          "[style-attr=border-top-right-radius-elliptic]",
        ).value = btrr.split(" ")[1];
        styleDiv.querySelector(
          "[style-attr=border-top-right-radius-elliptic]",
        ).disabled = false;
      } else {
        styleDiv
          .querySelector("[Main-style=border-top-right-radius]")
          .querySelector("input[type=checkbox]").checked = false;
        styleDiv.querySelector("[style-attr=border-top-right-radius]").value =
          btrr.split(" ")[0];
        styleDiv.querySelector(
          "[style-attr=border-top-right-radius-elliptic]",
        ).disabled = true;
      }
      //
      if (bblr.split(" ").length == 2) {
        styleDiv
          .querySelector("[Main-style=border-bottom-left-radius]")
          .querySelector("input[type=checkbox]").checked = true;
        styleDiv.querySelector("[style-attr=border-bottom-left-radius]").value =
          bblr.split(" ")[0];
        styleDiv.querySelector(
          "[style-attr=border-bottom-left-radius-elliptic]",
        ).value = bblr.split(" ")[1];
        styleDiv.querySelector(
          "[style-attr=border-bottom-left-radius-elliptic]",
        ).disabled = false;
      } else {
        styleDiv
          .querySelector("[Main-style=border-bottom-left-radius]")
          .querySelector("input[type=checkbox]").checked = false;
        styleDiv.querySelector("[style-attr=border-bottom-left-radius]").value =
          bblr.split(" ")[0];
        styleDiv.querySelector(
          "[style-attr=border-bottom-left-radius-elliptic]",
        ).disabled = true;
      }
      //
      if (bbrr.split(" ").length == 2) {
        styleDiv
          .querySelector("[Main-style=border-bottom-right-radius]")
          .querySelector("input[type=checkbox]").checked = true;
        styleDiv.querySelector("[style-attr=border-bottom-right-radius]").value =
          bbrr.split(" ")[0];
        styleDiv.querySelector(
          "[style-attr=border-bottom-right-radius-elliptic]",
        ).value = bbrr.split(" ")[1];
        styleDiv.querySelector(
          "[style-attr=border-bottom-right-radius-elliptic]",
        ).disabled = false;
      } else {
        styleDiv
          .querySelector("[Main-style=border-bottom-right-radius]")
          .querySelector("input[type=checkbox]").checked = false;
        styleDiv.querySelector("[style-attr=border-bottom-right-radius]").value =
          bbrr.split(" ")[0];
        styleDiv.querySelector(
          "[style-attr=border-bottom-right-radius-elliptic]",
        ).disabled = true;
      }
    }
    //!!!BORDER RADIUS
    
    //?BORDER
    var styleDiv = activeel_Border;
    var element = PassedElement

    var bst = styleDiv
      .querySelector("[Main-style=border-top]")
      .querySelector("[style-attr=border-style]");
    var bsr = styleDiv
      .querySelector("[Main-style=border-right]")
      .querySelector("[style-attr=border-style]");
    var bsb = styleDiv
      .querySelector("[Main-style=border-bottom]")
      .querySelector("[style-attr=border-style]");
    var bsl = styleDiv
      .querySelector("[Main-style=border-left]")
      .querySelector("[style-attr=border-style]");
  
    var bwt = styleDiv
      .querySelector("[Main-style=border-top]")
      .querySelector("[style-attr=border-width]");
    var bwr = styleDiv
      .querySelector("[Main-style=border-right]")
      .querySelector("[style-attr=border-width]");
    var bwb = styleDiv
      .querySelector("[Main-style=border-bottom]")
      .querySelector("[style-attr=border-width]");
    var bwl = styleDiv
      .querySelector("[Main-style=border-left]")
      .querySelector("[style-attr=border-width]");
  
    var bct = styleDiv
      .querySelector("[Main-style=border-top]")
      .querySelector("[style-attr=border-color]");
    var bcr = styleDiv
      .querySelector("[Main-style=border-right]")
      .querySelector("[style-attr=border-color]");
    var bcb = styleDiv
      .querySelector("[Main-style=border-bottom]")
      .querySelector("[style-attr=border-color]");
    var bcl = styleDiv
      .querySelector("[Main-style=border-left]")
      .querySelector("[style-attr=border-color]");
  
    var bs = styleDiv
      .querySelector("[Main-style=border]")
      .querySelector("[style-attr=border-style]");
    var bw = styleDiv
      .querySelector("[Main-style=border]")
      .querySelector("[style-attr=border-width]");
    var bc = styleDiv
      .querySelector("[Main-style=border]")
      .querySelector("[style-attr=border-color]");
    // var bs = element.style.borderStyle.split(' ')
    // var bw = element.style.borderWidth.replace(/px/g, "").split(' ')
    // var bc = element.style.borderColor.replace(/, /g, ",").split(' ')
    try {
      var computedBorders = {
        bst: getComputedValue(element, "border-top-style"),
        bsr: getComputedValue(element, "border-right-style"),
        bsb: getComputedValue(element, "border-bottom-style"),
        bsl: getComputedValue(element, "border-left-style"),
        bwt: parseInt(getComputedValue(element, "border-top-width")),
        bwr: parseInt(getComputedValue(element, "border-right-width")),
        bwb: parseInt(getComputedValue(element, "border-bottom-width")),
        bwl: parseInt(getComputedValue(element, "border-left-width")),
        bct: tinycolor(getComputedValue(element, "border-top-color")).toHexString(),
        bcr: tinycolor(
          getComputedValue(element, "border-right-color"),
        ).toHexString(),
        bcb: tinycolor(
          getComputedValue(element, "border-bottom-color"),
        ).toHexString(),
        bcl: tinycolor(
          getComputedValue(element, "border-left-color"),
        ).toHexString(),
      };
      // console.log(bs)
      // console.log(bst.value)
      // console.log(bs.length)
      bst.value = computedBorders.bst;
      bsr.value = computedBorders.bsr;
      bsl.value = computedBorders.bsl;
      bsb.value = computedBorders.bsb;
  
      bct.value = computedBorders.bct;
      bcr.value = computedBorders.bcr;
      bcl.value = computedBorders.bcl;
      bcb.value = computedBorders.bcb;
  
      bwt.value = computedBorders.bwt;
      bwr.value = computedBorders.bwr;
      bwl.value = computedBorders.bwl;
      bwb.value = computedBorders.bwb;
  
      bw.value = computedBorders.bwt;
      bc.value = computedBorders.bct;
      bs.value = computedBorders.bst;
  
      styleDiv.querySelector(".same_borders_div").style.display = "none";
      styleDiv.querySelector(".diff_borders_div").style.display = "grid";
      styleDiv.querySelector("input[type=checkbox]").checked = false;
  
      if (
        computedBorders.bwt == computedBorders.bwr &&
        computedBorders.bwt == computedBorders.bwl &&
        computedBorders.bwt == computedBorders.bwb
      ) {
        if (
          computedBorders.bct == computedBorders.bcr &&
          computedBorders.bct == computedBorders.bcl &&
          computedBorders.bct == computedBorders.bcb
        ) {
          if (
            computedBorders.bst == computedBorders.bsr &&
            computedBorders.bst == computedBorders.bsl &&
            computedBorders.bst == computedBorders.bsb
          ) {
            styleDiv.querySelector(".same_borders_div").style.display = "grid";
            styleDiv.querySelector(".diff_borders_div").style.display = "none";
            styleDiv.querySelector("input[type=checkbox]").checked = true;
          }
        }
      }
    }
    catch (err) { }
  
  }
//!!!!!!!!!BORDER RADIUS  


  
    //???? TEXT

    if(PassedElement.getAttribute('primary-element-type') == "Text")
    {
    var styleDiv = activeel_Text;
    var element = PassedElement

    for (el of activeel_Text.querySelectorAll("[Main-style=textAlign]")) {
      el.style.background = "none";
    }
    try {
      styleDiv.querySelector(
        `[align=${element.children[0].style.textAlign}]`,
      ).style.background = "#03a9f4";
    } catch (err) { }
    try {
      if (element.children[0].style.fontWeight == "bold") {
        styleDiv.querySelector("[Main-style=fontWeight]").style.background =
          "#03a9f4";
      } else {
        styleDiv.querySelector("[Main-style=fontWeight]").style.background =
          "none";
      }
      if (element.children[0].style.textDecoration == "underline") {
        styleDiv.querySelector("[Main-style=textDecoration]").style.background =
          "#03a9f4";
      } else {
        styleDiv.querySelector("[Main-style=textDecoration]").style.background =
          "none";
      }
      if (element.children[0].style.fontStyle == "italic") {
        styleDiv.querySelector("[Main-style=fontStyle]").style.background =
          "#03a9f4";
      } else {
        styleDiv.querySelector("[Main-style=fontStyle]").style.background =
          "none";
      }
  
  
    
      styleDiv.querySelector("[style-attr=color]").value = InteracStyles.getValue({ element: PassedElement, prop: "color" });
      styleDiv.querySelector("[style-attr=font-size]").value = parseFloat(InteracStyles.getValue({ element: PassedElement, prop: "font-size" }))
      styleDiv.querySelector("[style-attr=font-family]").value = InteracStyles.getValue({ element: PassedElement, prop: "font-family" })
      styleDiv.querySelector("[style-attr=font-family]").style.fontFamily = InteracStyles.getValue({ element: PassedElement, prop: "font-family" })
      styleDiv.querySelector("[style-attr=-webkit-text-stroke-color]").value = InteracStyles.getValue({ element: PassedElement, prop: "-webkit-text-stroke-color" })
      CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=line-height]"), val: InteracStyles.getValue({ element: PassedElement, prop: "line-height" }) })
      CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=word-spacing]"), val: InteracStyles.getValue({ element: PassedElement, prop: "word-spacing" }) })
      CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=letter-spacing]"), val: InteracStyles.getValue({ element: PassedElement, prop: "letter-spacing" }) })
      CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=padding-left]"), val: InteracStyles.getValue({ element: PassedElement, prop: "padding-left" }) })
      CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=padding-right]"), val: InteracStyles.getValue({ element: PassedElement, prop: "padding-right" }) })
      CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=padding-top]"), val: InteracStyles.getValue({ element: PassedElement, prop: "padding-top" }) })
      CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=padding-bottom]"), val: InteracStyles.getValue({ element: PassedElement, prop: "padding-bottom" }) })
      CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=-webkit-text-stroke-width]"), val: InteracStyles.getValue({ element: PassedElement, prop: "-webkit-text-stroke-width" }) })
     
    
    } catch (err) { 
      console.log(err)
    }
   
  
    // !!!!!!!!!!!!TEXT END


    //?????? UTD TEXTSHADOW
    if(PassedElement.getAttribute('primary-element-type') == "Textpath" || PassedElement.getAttribute('primary-element-type') == "Text" ){
    var styleDiv = activeel_Text_Shadow;
  
    try {
      styleDiv.querySelector("[StyleDivFor]").remove();
    } catch (err) { }
    styleDiv.append(
      CreateStyleDiv.CreateTextShadowStyleDiv(InteracStyles.getValue({ element: PassedElement, prop: "text-shadow" })),
    );
    }}
    //!!!!!!TEXTSHADOW


    //!!!!!!!TEXT PATH
    if(PassedElement.getAttribute('primary-element-type') == "Textpath"){
  
      var styleDiv = activeel_Textpath;
      var element = PassedElement
      
      try {
        if (element.children[0].style.fontWeight == "bold") {
          styleDiv.querySelector("[Main-style=fontWeight]").style.background =
            "#03a9f4";
        } else {
          styleDiv.querySelector("[Main-style=fontWeight]").style.background =
            "none";
        }
        if (element.children[0].style.textDecoration == "underline") {
          styleDiv.querySelector("[Main-style=textDecoration]").style.background =
            "#03a9f4";
        } else {
          styleDiv.querySelector("[Main-style=textDecoration]").style.background =
            "none";
        }
        if (element.children[0].style.fontStyle == "italic") {
          styleDiv.querySelector("[Main-style=fontStyle]").style.background =
            "#03a9f4";
        } else {
          styleDiv.querySelector("[Main-style=fontStyle]").style.background =
            "none";
        }
       
        styleDiv.querySelector("[style-attr=color]").value = InteracStyles.getValue({ element: PassedElement, prop: "color" })
        styleDiv.querySelector("[style-attr=font-size]").value = parseFloat(InteracStyles.getValue({ element: PassedElement, prop: "font-size" }))
        styleDiv.querySelector("[style-attr=font-family]").value = InteracStyles.getValue({ element: PassedElement, prop: "font-family" })
        styleDiv.querySelector("[style-attr=font-family]").style.fontFamily = InteracStyles.getValue({ element: PassedElement, prop: "font-family" })
        styleDiv.querySelector("[style-attr=-webkit-text-stroke-color]").value = InteracStyles.getValue({ element: PassedElement, prop: "-webkit-text-stroke-color" })
        CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=word-spacing]"), val: InteracStyles.getValue({ element: PassedElement, prop: "word-spacing" }) })
        CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=letter-spacing]"), val: InteracStyles.getValue({ element: PassedElement, prop: "letter-spacing" }) })
        CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=-webkit-text-stroke-width]"), val: InteracStyles.getValue({ element: PassedElement, prop: "-webkit-text-stroke-width" }) })
        
      
      } catch (err) { 
        console.log(err)
      }
      
    }
    //!!!TEXTPATH
  
    
  
    //?? UTD DROPSHADOW
    var styleDiv = activeel_Drop_Shadow;
    try {
      styleDiv.querySelector("[StyleDivFor]").remove();
    } catch (err) { }
    styleDiv.append(
      CreateStyleDiv.CreateDropShadowStyleDiv(
        InteracStyles.getValue({ element: PassedElement, prop: "drop-shadow" }),
      ),
    );

    //!!!!! DROPSHADOW
  
    //???? UTD BACKGROUND
    var styleDiv = activeel_Background;
    if (
      InteracStyles.getValue({ element: PassedElement, prop: "background-color" }) == "transparent" ||
      InteracStyles.getValue({ element: PassedElement, prop: "background-color" }) == "") {
      styleDiv.querySelector("input[type=checkbox]").checked = true;
      styleDiv.querySelector("input[type=color]").disabled = true;
    } else {
      styleDiv.querySelector("input[type=color]").disabled = false;
      styleDiv.querySelector("input[type=checkbox]").checked = false;
      styleDiv.querySelector("input[type=color]").value = InteracStyles.getValue({ element: PassedElement, prop: "background-color" })
    }
  
    if (InteracStyles.getValue({ element: PassedElement, prop: "background-image" }) == "") {
      styleDiv.querySelector(
        ".background_image_previewer",
      ).style.backgroundImage = "";
    } else {
      styleDiv.querySelector(
        ".background_image_previewer",
      ).style.backgroundImage = InteracStyles.getValue({ element: PassedElement, prop: "background-image" });
    }
    //!!!!!BACKGROUND

    //??TRANSFORM
    UpdateTransformStyleDiv(PassedElement)
  
    //!!!  TRANSFORM

  }



  export function UpdateTransformStyleDiv(PassedElement) {
    var styleDiv = activeel_Transform;
    var element = PassedElement
    // setmaxminForinput(styleDiv.querySelector("[main-style=height]"))
    // setmaxminForinput(styleDiv.querySelector("[main-style=width]"))
    // setmaxminForinput(styleDiv.querySelector("[main-style=rotate]"))
    // setmaxminForinput(styleDiv.querySelector("[main-style=position-x]"))
    // setmaxminForinput(styleDiv.querySelector("[main-style=position-y]"))

    // try {
    //   var height = parseInt(transformFunc.getValue(element.parentNode).height);
    //   var width = parseInt(transformFunc.getValue(element.parentNode).width);
    //   var positionx = parseInt(
    //     transformFunc.getValue(element.parentNode).positionX,
    //   );
    //   var positiony = parseInt(
    //     transformFunc.getValue(element.parentNode).positionY,
    //   );
    //   var rotate = parseInt(transformFunc.getValue(element.parentNode).rotate);
    // } catch (err) {
      var height = parseInt(transformFunc.getValue(element).height);
      var width = parseInt(transformFunc.getValue(element).width);
      var positionx = parseInt(transformFunc.getValue(element).positionX);
      var positiony = parseInt(transformFunc.getValue(element).positionY);
      var rotate = parseInt(transformFunc.getValue(element).rotate);
   // }
    CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[Main-style=height]"), val: height })
    CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[Main-style=width]"), val: width })
    CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[Main-style=rotate]"), val: rotate })
    CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[Main-style=position-x]"), val: positionx })
    CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[Main-style=position-y]"), val: positiony })
  }