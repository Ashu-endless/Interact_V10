import { getactiveel, } from "./index.js";
import {
  TextShadowStyleBox,
  TextStyleDiv,
  BorderStyleDiv,
  TransformStyleDiv,
  BorderRadiusStyleDiv,
  TextShadowStyleDiv,
  DropShadowStyleDiv,
  DropShadowStyleBox,
  BackgroundStyleDiv, BrushStyleDiv, TextpathStyleDiv
} from "./components.js";
import { getparent } from "./functionsfile.js";
import { BoxContainer, text_props, layerDiv, } from "./Interac_BoxContainer.js";
import { CreateRangeValueTemplate, setmaxminForinput } from "./functions.js";
import {
  getUniqueid,
  getJsonAttr,
  CamelToHypehn,
  snakeToCamel,
} from "./functionsfile.js";
import { InteractMessage } from "./InteracTerminal.js";
var el;
// var fiilter = `drop-shadow(rgb(42, 192, 67) 21px 26px 5px) drop-shadow(rgb(0, 0, 0) 5px 5px 3px) blur(1px) grayscale(1);`
// var all_Drop_shadows = filter.match(/drop-shadow\(([^)]+)\)/g).toString()
// var drop_liketext_shadow = all_Drop_shadows.replace(/drop-shadow/g, "").replace(/[()]/g, '')
document.querySelector("#foreground-color").oninput = (e) => {
  // console.log('in')

  for (el of document.querySelector("#pattern_dialog").children) {
    // console.log(window.getComputedStyle(el).getPropertyValue('background-image'))
    var val = `${window
      .getComputedStyle(el)
      .getPropertyValue("background-image")
      .split("fill=")[1]
      .split(" ")[0]
      }`.replace(/['"]+/g, "");
    var valu = `#${val.replace(/%23/g, "")}`;
    // var val = `${window.getComputedStyle(el).getPropertyValue('background-image').split('fill=')[1].split(' ')[0]}`.replace(/['"]+/g, '')
    // var new_cursor = `${window.getComputedStyle(el).getPropertyValue('background-image')}`.replace(`fill='${val}'`, `fill='${tinycolor(val).toRgbString()}'`)
    var new_cursor = `${window
      .getComputedStyle(el)
      .getPropertyValue("background-image")}`.replace(
        `fill='${val}'`,
        `fill='%23${tinycolor(e.target.value).toHex()}'`,
      );
    el.style.backgroundImage = new_cursor;
  }

  // var hash = '#'

  // // hash = `${}`
  // var valu = `#${val.replace(/%23/g, "")}`
  // console.log(valu)
  //     // console.log(hash)
  // console.log(`fill='%23${tinycolor(valu).toHex()}'`)
  //     // console.log(`fill='%23${tinycolor(val).toHex()}'`)

  // var new_cursor = `${window.getComputedStyle(document.querySelector('#pattern_dialog').children[1]).getPropertyValue('background-image')}`.replace(`fill='${val}'`, `fill='%23${tinycolor(e.target.value).toHex()}'`)

  // document.querySelector('#pattern_dialog').children[1].style.backgroundImage = new_cursor
};

document.querySelector("#pattern-opacity").oninput = (e) => {
  console.log("in");

  for (el of document.querySelector("#pattern_dialog").children) {
    // console.log(window.getComputedStyle(el).getPropertyValue('background-image'))
    var val = `${window
      .getComputedStyle(el)
      .getPropertyValue("background-image")
      .split("fill-opacity=")[1]
      .split(" ")[0]
      }`.replace(/['"]+/g, "");
    console.log(val);
    console.log(`fill-opacity='${val}'`);
    console.log(`fill-opcity='${e.target.value}'`);
    // var valu = `#${val.replace(/%23/g, "")}`
    // var val = `${window.getComputedStyle(el).getPropertyValue('background-image').split('fill=')[1].split(' ')[0]}`.replace(/['"]+/g, '')
    // var new_cursor = `${window.getComputedStyle(el).getPropertyValue('background-image')}`.replace(`fill='${val}'`, `fill='${tinycolor(val).toRgbString()}'`)
    var new_cursor = `${window
      .getComputedStyle(el)
      .getPropertyValue("background-image")}`.replace(
        `fill-opacity='${val}'`,
        `fill-opacity='${e.target.value}'`,
      );
    el.style.backgroundImage = new_cursor;
  }
};
// /\\
document.querySelector("#pattern-background-color").oninput = (e) => {
  console.log("in");

  for (el of document.querySelector("#pattern_dialog").children) {
    el.style.backgroundColor = e.target.value;
    // // console.log(window.getComputedStyle(el).getPropertyValue('background-image'))
    // var val = `${window.getComputedStyle(el).getPropertyValue('background-image').split('fill-opacity=')[1].split(' ')[0]}`.replace(/['"]+/g, '')
    // console.log(val)
    // console.log(`fill-opacity='${val}'`)
    // console.log(`fill-opcity='${e.target.value}'`)
    //     // var valu = `#${val.replace(/%23/g, "")}`
    //     // var val = `${window.getComputedStyle(el).getPropertyValue('background-image').split('fill=')[1].split(' ')[0]}`.replace(/['"]+/g, '')
    //     // var new_cursor = `${window.getComputedStyle(el).getPropertyValue('background-image')}`.replace(`fill='${val}'`, `fill='${tinycolor(val).toRgbString()}'`)
    // var new_cursor = `${window.getComputedStyle(el).getPropertyValue('background-image')}`.replace(`fill-opacity='${val}'`, `fill-opacity='${e.target.value}'`)
    // el.style.backgroundImage = new_cursor
  }
};
//
var el;
var elem;
const BackgroundSelectorModal = document.querySelector(
  "#BackgroundSelectorModal",
);

for (el of BackgroundSelectorModal.querySelectorAll("[clickbtn]")) {
  el.addEventListener("click", function () {
    for (el of BackgroundSelectorModal.querySelectorAll(".right-content")) {
      el.style.display = "none";
      el.style.backgroundImage = "none";
    }
    for (el of BackgroundSelectorModal.querySelectorAll("[clickbtn]")) {
      el.style.backgroundImage = "none";
    }
    this.style.backgroundImage =
      "url(https://media.giphy.com/media/j4qlZVm73SGBfoNTmH/giphy.gif)";
    BackgroundSelectorModal.querySelector(
      `#${this.getAttribute("clickbtn")}`,
    ).style.display = "grid";
  });
  BackgroundSelectorModal.querySelector(".set_uploaded_file").addEventListener(
    "click",
    function () {
      if (
        this.parentNode.querySelector(".preview_uploaded_file").style
          .backgroundImage != ""
      ) {
        getactiveel().style.backgroundImage = this.parentNode.querySelector(
          ".preview_uploaded_file",
        ).style.backgroundImage;
        document.querySelector(
          `[background_image_previewer=${getparent(
            this,
            "BackgroundSelectorModal",
          ).getAttribute("modal_on_for")}]`,
        ).style.backgroundImage = this.parentNode.querySelector(
          ".preview_uploaded_file",
        ).style.backgroundImage;
      }
    },
  );
}

const MediaSelectorModal = document.querySelector(".modal1");

// MediaSelectorModal.querySelector('#fetch_image_url').onclick = (e) => {
//     var div = document.createElement('div');
//     div.style.height = "300px"
//     div.style.width = "300px"
//     div.innerHTML = `<audio class="Interact_Video" controls crossorigin playsinline poster="">
//     <source src="" type="audio/mp3" >
//        </audio> `
//         // var vid = document.createElement('video');
//         // var source = document.createElement('source');
//         // source.src = MediaSelectorModal.querySelector('.upload_url_input').value;
//     div.querySelector('source').src = MediaSelectorModal.querySelector('.upload_url_input').value;
//     // vid.append(source)
//     //
//     MediaSelectorModal.querySelector('#preview_uploaded_image').append(div)
//     var player = new Plyr('.Interact_Video');

//     var fr = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
//     fr.append(div)
//     div.style.height = "100%"
//     div.style.width = "100%"
//     fr.setAttributeNS(null, 'x', '0')
//     fr.setAttributeNS(null, 'y', '0')
//     fr.style.overflow = 'visible'
//     fr.setAttribute('element_name', `image1`)
//         // imageCount = imageCount + 1
//     fr.setAttribute('element_groups', "")
//     fr.classList.add('draggable')
//     transformFunc.defaultTransform(fr);
//     // transformFunc.updateValue(fr, 'translateY', `${i+4}px`)
//     BoxContainer.svg().append(fr)
//     fr.style.height = "300px"
//     fr.style.width = "300px"
//         // fr.setAttributeNS(null, 'height', `${this.previousElementSibling.getBoundingClientRect().height}`)
//         // fr.setAttributeNS(null, 'width', `${this.previousElementSibling.getBoundingClientRect().width}`)
//     fr.setAttribute('element-type', 'Image_Cover')
//         // fr.children[0].setAttribute('element-type', 'Image')
//         // MediaSelectorModal.querySelector('#preview_uploaded_image').style.backgroundImage = `url(${MediaSelectorModal.querySelector('.upload_url_input').value})`
// }

function customrangeinput(styleDiv) {
  for (el of styleDiv.querySelectorAll("input[type='range']")) {
    var value = ((el.value - el.min) / (el.max - el.min)) * 100;
    el.style.background =
      "linear-gradient(to right, #191e2b 0%, rgb(15 34 60)" +
      value +
      "%, #fff " +
      value +
      "%, white 100%)";
    el.oninput = (e) => {
      var value =
        ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;
      e.target.style.background =
        "linear-gradient(to right, #191e2b 0%, rgb(15 34 60)" +
        value +
        "%, #fff " +
        value +
        "%, white 100%)";

      e.target.previousElementSibling.querySelector(".range_value").innerHTML =
        e.target.value;
    };

    el.previousElementSibling.querySelector(".range_value").innerHTML =
      el.value;
  }
}
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

export function getComputedValue(el, prop) {
  return window.getComputedStyle(el).getPropertyValue(prop);
}
export const transformFunc = {
  getValue: function (element) {
    // var stored_transformation = BoxContainer.elem().style.transform 
    // BoxContainer.elem().style.transform = "none"
    if (element.tagName == "foreignObject") {
      var element_rotation = parseFloat(
        element
          .getAttributeNS(null, "transform")
          .split("rotate(")[1]
          .split(")")[0]
          .split(" ")[0],
      );
      //
      var old_val = element
        .getAttributeNS(null, "transform")
        .split("rotate(")[1]
        .split(")")[0];
      var set_null_t = element
        .getAttributeNS(null, "transform")
        .replace(`rotate(${old_val})`, `rotate(0 0 0)`);
      element.setAttributeNS(null, "transform", set_null_t);
      try {
        var stored_transformation = BoxContainer.elem().style.transform
        BoxContainer.elem().style.transform = "none"
        var positionY =
          element.getBoundingClientRect().top -
          element.parentNode.getBoundingClientRect().top || 0;
        var positionX =
          element.getBoundingClientRect().left -
          element.parentNode.getBoundingClientRect().left || 0;
        var height = element.getBoundingClientRect().height || 0;
        var width = element.getBoundingClientRect().width || 0;
        var pos_x =
          element.getBoundingClientRect().x -
          element.parentNode.getBoundingClientRect().x +
          element.getBoundingClientRect().width / 2 || 0;
        var pos_y =
          element.getBoundingClientRect().y -
          element.parentNode.getBoundingClientRect().y +
          element.getBoundingClientRect().height / 2 || 0;

        var RelativepositionX =
          element.getBoundingClientRect().left -
          element.parentNode.getBoundingClientRect().left;
        var Relleft =
          element.getBoundingClientRect().left -
          element.parentNode.getBoundingClientRect().left;
        var Reltop =
          element.getBoundingClientRect().top -
          element.parentNode.getBoundingClientRect().top;
        BoxContainer.elem().style.transform = stored_transformation
        var BoundingX = element.getBoundingClientRect().left;
        var BoundingY = element.getBoundingClientRect().top;

      } catch (err) {
        var positionY = 0;
        var positionX = 0;
        var height = 0;
        var width = 0;
        var pos_x = 0;
        var pos_y = 0;
      }
      var new_transformation = element
        .getAttributeNS(null, "transform")
        .replace(
          `rotate(0 0 0)`,
          `rotate(${element_rotation} ${pos_x} ${pos_y})`,
        );
      element.setAttributeNS(null, "transform", new_transformation);
      return {
        rotate: parseFloat(
          element
            .getAttributeNS(null, "transform")
            .split("rotate(")[1]
            .split(")")[0]
            .split(" ")[0],
        ),
        fwidth: width,
        height: parseFloat(height),
        width: parseFloat(width),
        fheight: height,
        rectwidth: element.getBoundingClientRect().width,
        rectheight: element.getBoundingClientRect().height,
        positionY: positionY,
        positionX: positionX,
        RelativepositionX: RelativepositionX || 0,
        BoundingX: BoundingX || 0,
        BoundingY: BoundingY || 0,
        Relleft: Relleft || 0,
        Reltop: Reltop || 0,
      };
    } else if (
      element.tagName == "g" || element.tagName == "path") {
      var transformation = element.style.transform.split(" ");
      var element_rotation = parseFloat(
        element
          .getAttributeNS(null, "transform")
          .split("rotate(")[1]
          .split(")")[0]
          .split(" ")[0],
      );
      //
      var old_val = element
        .getAttributeNS(null, "transform")
        .split("rotate(")[1]
        .split(")")[0];
      var set_null_t = element
        .getAttributeNS(null, "transform")
        .replace(`rotate(${old_val})`, `rotate(0 0 0)`);
      element.setAttributeNS(null, "transform", set_null_t);
      var stored_transformation = BoxContainer.elem().style.transform
      BoxContainer.elem().style.transform = "none"
      var positionY =
        element.getBoundingClientRect().top -
        element.parentNode.getBoundingClientRect().top;
      var positionX =
        element.getBoundingClientRect().left -
        element.parentNode.getBoundingClientRect().left;
      var height = element.getBoundingClientRect().height;
      var width = element.getBoundingClientRect().width;
      var pos_x =
        element.getBoundingClientRect().x -
        element.parentNode.getBoundingClientRect().x +
        element.getBoundingClientRect().width / 2;
      var pos_y =
        element.getBoundingClientRect().y -
        element.parentNode.getBoundingClientRect().y +
        element.getBoundingClientRect().height / 2;
      var new_transformation = element
        .getAttributeNS(null, "transform")
        .replace(
          `rotate(0 0 0)`,
          `rotate(${element_rotation} ${pos_x} ${pos_y})`,
        );
      element.setAttributeNS(null, "transform", new_transformation);
      BoxContainer.elem().style.transform = stored_transformation
      return {
        rotate: parseFloat(
          element
            .getAttributeNS(null, "transform")
            .split("rotate(")[1]
            .split(")")[0]
            .split(" ")[0],
        ),
        width: parseFloat(width),
        height: parseFloat(height),
        fwidth: width,
        fheight: height,
        rectwidth: element.getBoundingClientRect().width,
        rectheight: element.getBoundingClientRect().height,
        positionY: positionY,
        positionX: positionX,
        RelativepositionX:
          element.getBoundingClientRect().left -
          element.parentNode.getBoundingClientRect().left,
        BoundingX: element.getBoundingClientRect().left,
        BoundingY: element.getBoundingClientRect().top,
        Relleft:
          element.getBoundingClientRect().left -
          element.parentNode.getBoundingClientRect().left,
        Reltop:
          element.getBoundingClientRect().top -
          element.parentNode.getBoundingClientRect().top,
      };
    } else if (element.tagName == "text") {
      // element = BoxContainer.svg().querySelector(`#${element.children[0].getAttribute('textpath')}`)
      // console.log(element)

      var pathel = BoxContainer.svg().querySelector(`#${element.children[0].getAttribute("textpath")}`);
      pathel.style.display = "block"
      var transformation = element.style.transform.split(" ");
      var element_rotation = parseFloat(
        element
          .getAttributeNS(null, "transform")
          .split("rotate(")[1]
          .split(")")[0]
          .split(" ")[0],
      );
      //
      var old_val = element
        .getAttributeNS(null, "transform")
        .split("rotate(")[1]
        .split(")")[0];
      var set_null_t = element
        .getAttributeNS(null, "transform")
        .replace(`rotate(${old_val})`, `rotate(0 0 0)`);
      element.setAttributeNS(null, "transform", set_null_t);
      var positionY =
        element.getBoundingClientRect().top -
        BoxContainer.svg().getBoundingClientRect().top;
      var positionX =
        element.getBoundingClientRect().left -
        BoxContainer.svg().getBoundingClientRect().left;
      var height = element.getBoundingClientRect().height;
      var width = element.getBoundingClientRect().width;
      var pos_x =
        element.getBoundingClientRect().x -
        BoxContainer.elem().getBoundingClientRect().x +
        element.getBoundingClientRect().width / 2;
      var pos_y =
        element.getBoundingClientRect().y -
        BoxContainer.elem().getBoundingClientRect().y +
        element.getBoundingClientRect().height / 2;
      var new_transformation = element
        .getAttributeNS(null, "transform")
        .replace(
          `rotate(0 0 0)`,
          `rotate(${element_rotation} ${pos_x} ${pos_y})`,
        );
      element.setAttributeNS(null, "transform", new_transformation);
      pathel.style.display = "none"
      return {
        rotate: parseFloat(
          element
            .getAttributeNS(null, "transform")
            .split("rotate(")[1]
            .split(")")[0]
            .split(" ")[0],
        ),
        width: width,
        height: height,
        rectwidth: element.getBoundingClientRect().width,
        rectheight: element.getBoundingClientRect().height,
        positionY: positionY,
        positionX: positionX,
        RelativepositionX:
          element.getBoundingClientRect().left -
          BoxContainer.svg().getBoundingClientRect().left,
        BoundingX: element.getBoundingClientRect().left,
        BoundingY: element.getBoundingClientRect().top,
        Relleft:
          element.getBoundingClientRect().left -
          BoxContainer.svg().getBoundingClientRect().left,
        Reltop:
          element.getBoundingClientRect().top -
          BoxContainer.svg().getBoundingClientRect().top,
      };
      //???faltu
    } else {
      var transformation = element.style.transform.split(" ");
      var store_rotation = parseFloat(
        transformation[2].match(/\(([^)]+)\)/)[1],
      );
      transformFunc.updateValue(element, "rotate", "0deg");
      var positionY =
        element.getBoundingClientRect().top -
        element.parentNode.getBoundingClientRect().top;
      var positionX =
        element.getBoundingClientRect().left -
        element.parentNode.getBoundingClientRect().left;
      var height = element.getBoundingClientRect().height;
      var width = element.getBoundingClientRect().width;
      transformFunc.updateValue(element, "rotate", store_rotation + "deg");

      return {
        translateX: parseFloat(transformation[0].match(/\(([^)]+)\)/)[1]),
        translateY: parseFloat(transformation[1].match(/\(([^)]+)\)/)[1]),
        rotate: parseFloat(transformation[2].match(/\(([^)]+)\)/)[1]),
        width: width,
        height: height,
        fwidth: width,
        fheight: height,
        rectwidth: element.getBoundingClientRect().width,
        rectheight: element.getBoundingClientRect().height,
        positionY: positionY,
        positionX: positionX,
      };
    }

  },
  updateValue: function (element, prop, value) {
    // console.log(BoxContainer)
    var stored_transformation = BoxContainer.elem().style.transform
    BoxContainer.elem().style.transform = "none"
    // console.log(BoxContainer.elem().style.transform)
    // !!
    if (element.tagName == "text") {
      if (prop == "position-x") {
        var element_rotation = transformFunc.getValue(element).rotate
        transformFunc.updateValue(element, 'rotate', '0deg')
        var pathel = BoxContainer.svg().querySelector(`#${element.children[0].getAttribute("textpath")}`);
        pathel.style.display = "block";
        var path_elx = pathel.parentNode.getBoundingClientRect().x - pathel.getBoundingClientRect().x
        var elx = element.parentNode.getBoundingClientRect().x - element.getBoundingClientRect().x
        var path_el_diff = elx - path_elx;
        var translation = (parseFloat(value) - transformFunc.getValue(element).positionX)
        // var translation = parseFloat(value) - path_el_diff
        pathel.setAttribute("d", SVGPath(pathel.getAttribute("d")).translate(translation, 0).toString());
        transformFunc.updateValue(element, 'rotate', element_rotation)
        pathel.style.display = "none"
      }
      else if (prop == "position-y") {
        var element_rotation = transformFunc.getValue(element).rotate
        transformFunc.updateValue(element, 'rotate', '0deg')
        var pathel = BoxContainer.svg().querySelector(`#${element.children[0].getAttribute("textpath")}`);
        pathel.style.display = "block";
        var path_elx = pathel.parentNode.getBoundingClientRect().y - pathel.getBoundingClientRect().y
        var elx = element.parentNode.getBoundingClientRect().y - element.getBoundingClientRect().y
        var path_el_diff = elx - path_elx;
        var translation = (parseFloat(value) - transformFunc.getValue(element).positionY)
        // var translation = parseFloat(value) - path_el_diff
        pathel.setAttribute("d", SVGPath(pathel.getAttribute("d")).translate(0, translation).toString());
        transformFunc.updateValue(element, 'rotate', element_rotation)
        pathel.style.display = "none"
      }
      else if (prop == "rotate") {
        var pathel = BoxContainer.svg().querySelector(`#${element.children[0].getAttribute("textpath")}`);
        pathel.style.display = "block";
        // transformFunc.updateValue(pathel,"rotate",value)
        // var element = pathel
        var old_val = element
          .getAttributeNS(null, "transform")
          .split("rotate(")[1]
          .split(")")[0];
        var set_null_t = element
          .getAttributeNS(null, "transform")
          .replace(`rotate(${old_val})`, `rotate(0 0 0)`);
        element.setAttributeNS(null, "transform", set_null_t);

        var pos_x =
          element.getBoundingClientRect().x -
          element.parentNode.getBoundingClientRect().x +
          element.getBoundingClientRect().width / 2;
        var pos_y =
          element.getBoundingClientRect().y -
          element.parentNode.getBoundingClientRect().y +
          element.getBoundingClientRect().height / 2;
        var new_transformation = element
          .getAttributeNS(null, "transform")
          .replace(
            `rotate(0 0 0)`,
            `rotate(${parseFloat(value) || 0} ${pos_x} ${pos_y})`,
          );
        element.setAttributeNS(null, "transform", new_transformation);
        pathel.style.display = "none"
      }









    } else if (element.tagName == "path") {
      if (prop == "width") {
        var scalewidth = parseFloat(value) / transformFunc.getValue(element).width;
        //
        var pos_x =
          element.getBoundingClientRect().x -
          element.parentNode.getBoundingClientRect().x +
          element.getBoundingClientRect().width / 2;
        var pos_y =
          element.getBoundingClientRect().y -
          element.parentNode.getBoundingClientRect().y +
          element.getBoundingClientRect().height / 2;
        //
        var r = transformFunc.getValue(element).rotate;
        transformFunc.updateValue(element, "rotate", 0);
        element.setAttribute(
          "d",
          SVGPath(element.getAttribute("d"))
            .translate(pos_x, pos_y)
            .scale(scalewidth, 1)
            .translate(-pos_x, -pos_y)
            .toString(),
        );
        transformFunc.updateValue(element, "rotate", r);
      } else if (prop == "height") {
        var scalewidth = parseFloat(value) / transformFunc.getValue(element).height;
        var pos_x =
          element.getBoundingClientRect().x -
          element.parentNode.getBoundingClientRect().x +
          element.getBoundingClientRect().width / 2;
        var pos_y =
          element.getBoundingClientRect().y -
          element.parentNode.getBoundingClientRect().y +
          element.getBoundingClientRect().height / 2;
        var r = transformFunc.getValue(element).rotate;
        transformFunc.updateValue(element, "rotate", 0);
        element.setAttribute(
          "d",
          SVGPath(element.getAttribute("d"))
            .translate(pos_x, pos_y)
            .scale(1, scalewidth)
            .translate(-pos_x, -pos_y)
            .toString(),
        );
        transformFunc.updateValue(element, "rotate", r);
      }

      if (prop == "position-x") {
        var element_rotation = transformFunc.getValue(element).rotate;
        transformFunc.updateValue(element, "rotate", "0deg");
        // console.log(value);
        var translation =
          parseFloat(value) - transformFunc.getValue(element).positionX;
        // console.log(translation);
        // console.log(transformFunc.getValue(element).positionX);
        // console.log(element.getBoundingClientRect().left);
        // console.log(element.parentNode);
        element.setAttribute(
          "d",
          SVGPath(element.getAttribute("d"))
            .translate(translation, 0)
            .toString(),
        );
        transformFunc.updateValue(element, "rotate", element_rotation);
      }
      if (prop == "position-y") {
        var element_rotation = transformFunc.getValue(element).rotate;
        transformFunc.updateValue(element, "rotate", "0deg");
        var translation =
          parseFloat(value) - transformFunc.getValue(element).positionY;
        element.setAttribute(
          "d",
          SVGPath(element.getAttribute("d"))
            .translate(0, translation)
            .toString(),
        );
        transformFunc.updateValue(element, "rotate", element_rotation);
      }
      if (prop == "rotate") {
        var old_val = element
          .getAttributeNS(null, "transform")
          .split("rotate(")[1]
          .split(")")[0];
        var set_null_t = element
          .getAttributeNS(null, "transform")
          .replace(`rotate(${old_val})`, `rotate(0 0 0)`);
        element.setAttributeNS(null, "transform", set_null_t);

        var pos_x =
          element.getBoundingClientRect().x -
          element.parentNode.getBoundingClientRect().x +
          element.getBoundingClientRect().width / 2;
        var pos_y =
          element.getBoundingClientRect().y -
          element.parentNode.getBoundingClientRect().y +
          element.getBoundingClientRect().height / 2;
        var new_transformation = element
          .getAttributeNS(null, "transform")
          .replace(
            `rotate(0 0 0)`,
            `rotate(${parseFloat(value) || 0} ${pos_x} ${pos_y})`,
          );
        element.setAttributeNS(null, "transform", new_transformation);
      }
    } else if (element.tagName == "foreignObject") {
      var el_settings = getJsonAttr(element, "settings");

      if (prop == "position-x") {
        var store_rot = transformFunc.getValue(element).rotate;
        transformFunc.updateValue(element, "rotate", "0");
        element.setAttribute("x", parseFloat(value));
        transformFunc.updateValue(element, "rotate", store_rot);
      } else if (prop == "position-y") {
        var store_rot = transformFunc.getValue(element).rotate;
        transformFunc.updateValue(element, "rotate", "0");
        element.setAttribute("y", parseFloat(value));
        transformFunc.updateValue(element, "rotate", store_rot);
      } else if (prop == "height") {
        // console.log(getJsonAttr(element, 'settings', ))
        // console.log(el_settings.scrollHeight)
        // console.log(el_settings.scrollWidth)
        // console.log(getJsonAttr(element, 'settings').scrollHeight)
        // console.log(parseInt(getJsonAttr(element, 'settings').scrollHeight))
        if (element.getAttribute("primary-element-type") == "Container") {
          // for (var el of element.querySelector('svg').children) {
          //     var px = transformFunc.getValue(el).positionX
          //     var py = transformFunc.getValue(el).positionY
          //     transformFunc.updateValue(el, 'height', transformFunc.getValue(el).height + (value - transformFunc.getValue(element).height))
          //     transformFunc.updateValue(el, 'position-x', px)
          //     transformFunc.updateValue(el, 'position-y', py)

          // }
          var cont_R = transformFunc.getValue(element).rotate;
          
              transformFunc.updateValue(
                element,
                "rotate",
                0,
              );
          var element_h = transformFunc.getValue(element).fheight;

          if (el_settings.relativeSizingHeight) {
            for (var el of element.querySelectorAll(`[primary-element-type]`)) {
              
              
              var cs_R = transformFunc.getValue(el).rotate;

              transformFunc.updateValue(
                element,
                "rotate",
                0,
              );
              var el_y = transformFunc.getValue(el).positionY;
              
              var el_h = transformFunc.getValue(el).fheight;

              var ratioyh = element_h / el_y;
              var ratiohh = element_h / el_h;
              // console.log(ratioxw)
              // console.log(ratioww)
              // console.log(parseFloat(value) / ratioww)
              // console.log(parseFloat(value) / ratioxw)
              // var py = transformFunc.getValue(el).positionY
              transformFunc.updateValue(
                el,
                "height",
                parseFloat(value) / ratiohh,
              );
              // transformFunc.updateValue(el, 'width', transformFunc.getValue(el).width + (value - transformFunc.getValue(element).width))
              transformFunc.updateValue(
                el,
                "position-y",
                parseFloat(value) / ratioyh,
              );
              transformFunc.updateValue(
                el,
                "rotate",
               cs_R,
              );
             
              // transformFunc.updateValue(el, 'position-y', py)
            }
          }
        }

        element.style.height = parseFloat(value) + "px";

        transformFunc.updateValue(
          element,
          "rotate",
          cont_R,
        );

        if (element.getAttribute("primary-element-type") == "Container") {
          if (el_settings.scrollHeight == "0") {
            element.querySelector(
              "[secondary-element-type=Container-div]",
            ).style.height = "100%";
          } else {
            element.querySelector(
              "[secondary-element-type=Container-div]",
            ).style.height =
              parseInt(element.style.height) +
              parseFloat(el_settings.scrollHeight) +
              "px";
          }
        }
      } else if (prop == "width") {
        if (element.getAttribute("primary-element-type") == "Container") {
          var cont_R = transformFunc.getValue(element).rotate;
          
              transformFunc.updateValue(
                element,
                "rotate",
                0,
              );
          
              var element_w = transformFunc.getValue(element).fwidth;

          
          if (el_settings.relativeSizingWidth) {
            for (var el of element.querySelectorAll(`[primary-element-type]`)) {
              
              var cs_R = transformFunc.getValue(el).rotate;

              transformFunc.updateValue(
                element,
                "rotate",
                0,
              );
              
              var el_x = transformFunc.getValue(el).positionX;
              var el_w = transformFunc.getValue(el).fwidth;
              var ratioxw = element_w / el_x;
              var ratioww = element_w / el_w;
              // console.log(ratioxw)
              // console.log(ratioww)
              // console.log(parseFloat(value) / ratioww)
              // console.log(parseFloat(value) / ratioxw)
              // var py = transformFunc.getValue(el).positionY
              transformFunc.updateValue(
                el,
                "width",
                parseFloat(value) / ratioww,
              );
              // transformFunc.updateValue(el, 'width', transformFunc.getValue(el).width + (value - transformFunc.getValue(element).width))
              transformFunc.updateValue(
                el,
                "position-x",
                parseFloat(value) / ratioxw,
              );

              transformFunc.updateValue(
                el,
                "rotate",
               cs_R,
              );
              // transformFunc.updateValue(el, 'position-y', py)
            }
          }
        }

        element.style.width = parseFloat(value) + "px";

        transformFunc.updateValue(
          element,
          "rotate",
          cont_R,
        );


        if (element.getAttribute("primary-element-type") == "Container") {
          if (el_settings.scrollWidth == "0") {
            element.querySelector(
              "[secondary-element-type=Container-div]",
            ).style.width = "100%";
          } else {
            element.querySelector(
              "[secondary-element-type=Container-div]",
            ).style.width =
              parseFloat(element.style.width) +
              parseInt(el_settings.scrollWidth) +
              "px";
          }
        }
      } else if (prop == "rotate") {
        var old_val = element
          .getAttributeNS(null, "transform")
          .split("rotate(")[1]
          .split(")")[0];
        var set_null_t = element
          .getAttributeNS(null, "transform")
          .replace(`rotate(${old_val})`, `rotate(0 0 0)`);
        element.setAttributeNS(null, "transform", set_null_t);
        try {

          var pos_x =
            element.getBoundingClientRect().x -
            element.parentNode.getBoundingClientRect().x +
            element.getBoundingClientRect().width / 2 || 0;
          var pos_y =
            element.getBoundingClientRect().y -
            element.parentNode.getBoundingClientRect().y +
            element.getBoundingClientRect().height / 2 || 0;


          // var pos_x =
          //   adjustedBoundingRect(element).x -
          //   adjustedBoundingRect(element.parentNode).x +
          //   adjustedBoundingRect(element).width / 2 || 0;
          // var pos_y =
          // adjustedBoundingRect(element).y -
          // adjustedBoundingRect(element.parentNode).y +
          //     adjustedBoundingRect(element).height / 2 || 0;
        } catch (err) {
          var pos_x = 0;
          var pos_y = 0;
        }
        var new_transformation = element
          .getAttributeNS(null, "transform")
          .replace(
            `rotate(0 0 0)`,
            `rotate(${parseFloat(value) || 0} ${pos_x} ${pos_y})`,
          );
        element.setAttributeNS(null, "transform", new_transformation);
      }
    } else if (
      (element.tagName == "IMG" ||
        element.tagName == "DIV" ||
        element.tagName == "P") &&
      prop != "rotate"
    ) {
      if (prop == "position-x") {
        element.style.left = parseFloat(value) + "px";
      } else if (prop == "position-y") {
        element.style.top = parseFloat(value) + "px";
      } else if (
        prop == "height" &&
        element.getAttribute("primary-element-type") == "Container"
      ) {
        element.style.height = parseFloat(value) + "px";
        if (getJsonAttr(element, "settings", "scroll-height") == "0") {
          element.children[0].style.height = "100%";
        } else {
          element.children[0].style.height =
            parseFloat(element.style.height) +
            parseFloat(getJsonAttr(element, "settings", "scroll-height")) +
            "px";
        }
      } else if (
        prop == "width" &&
        element.getAttribute("primary-element-type") == "Container"
      ) {
        element.style.width = parseFloat(value) + "px";
        if (getJsonAttr(element, "settings", "scroll-width") == "0") {
          element.children[0].style.width = "100%";
        } else {
          element.children[0].style.width =
            parseFloat(element.style.width) +
            parseInt(getJsonAttr(element, "settings", "scroll-width")) +
            "px";
        }
      } else if (prop == "height") {
        element.style.height = parseFloat(value) + "px";
      } else if (prop == "width") {
        element.style.width = parseFloat(value) + "px";
      }
      // else if (element.getAttribute('primary-element-type') == "Container") {
      //     element.style.height = value + "px"
      //     element.querySelector().style.height = gettJsonAttr(element, settings, 'scroll-height') + parseFloat(element.style.height) + 'px'
      // }
    } else if (element.tagName == "g") {
      // if (prop == "position-x") {
      //     var g_x = transformFunc.getValue(element).positionX
      //     var dist = value - g_x
      //     for (var paths of element.children) {
      //         // console.log(paths.tagName, transformFunc.getValue(paths).positionX)
      //         transformFunc.updateValue(paths, prop, transformFunc.getValue(paths).positionX + parseFloat(value))
      //     }
      // } else if (prop == "position-y") {
      //     var g_y = transformFunc.getValue(element).positionY
      //     var dist = value - g_y
      //     for (var paths of element.children) {
      //         // console.log(paths.tagName, transformFunc.getValue(paths).positionX)
      //         transformFunc.updateValue(paths, prop, transformFunc.getValue(paths).positionY + parseFloat(value))
      //     }
      // }
      // var g_y = transfromFunc.getValue(element).positionY
      // for (var paths of element.children) {
      //     // console.log(paths.tagName, transformFunc.getValue(paths).positionX)
      //     var nw = parseFloat(value) - (transformFunc.getValue(paths).positionX - transformFunc.getValue(element).positionX)
      //     transformFunc.updateValue(paths, prop, nw)
      // }
      // if (el.tagName == "polyline") {
      //     transformFunc.updateValue(el, prop, value)
      // } else if (el.tagName == "path") {
      //     transformFunc.updateValue(el, prop, value)
      // }
      // }
    } else {
      var transformation = element.style.transform;
      const start = `${prop}(`;
      const end = `)`;
      const middleText = transformation.split(start)[1].split(end)[0];
      // console.log(middleText)
      var new_transformation = transformation.replace(
        `${prop}(${middleText})`,
        `${prop}(${value})`,
      );
      element.style.transform = new_transformation;
    }
    // console.log(stored_transformation)
    BoxContainer.elem().style.transform = stored_transformation

    // console.log(new_transformation)
  },
  defaultTransform: function (element) {
    if (
      element.tagName == "g" ||
      element.tagName == "path" ||
      element.tagName == "text"
    ) {
      element.setAttributeNS(
        null,
        "transform",
        `translate(0 0) rotate(${0} ${0} ${0}) translate(${0} ${0}) skewX(${0}) translate(${-0} -${-0}) translate(${0} ${0}) skewY(${0}) translate(-${0} -${0}) translate(${0} ${0}) scale(${1} ${1}) translate(-${0} -${0})`,
      );
    } else if (element.tagName == "foreignObject") {
      element.setAttributeNS(
        null,
        "transform",
        `translate(0 0) rotate(${0} ${0} ${0}) translate(${0} ${0}) skewX(${0}) translate(${-0} -${-0}) translate(${0} ${0}) skewY(${0}) translate(-${0} -${0}) translate(${0} ${0}) scale(${1} ${1}) translate(-${0} -${0})`,
      );
    } else {
      element.style.transform = `translateX(0px) translateY(0px) rotate(0deg) skewX(0deg) skewY(0deg) scaleX(1) scaleY(1)`;
    }
  },
};
export const CreateStyleDiv = {
  UpdateRangeValueDiv: function (json) {
    json.div.querySelector('input[type="range"]').value = parseFloat(json.val)
    json.div.querySelector('.range_value').value = parseFloat(json.val)
    var range_value_slider = json.div.querySelector('input[type="range"]')
    var percent = (range_value_slider.value - range_value_slider.min) / (range_value_slider.max - range_value_slider.min) * 100
    range_value_slider.style.background = 'linear-gradient(to right, #191e2b 0%, rgb(15 34 60)' + percent + '%, #fff ' + percent + '%, white 100%)'
  },
  GetRangeValueDiv: function (div) {
    return div.querySelector('.range_value').value
  },
  CreateBrushStyleDiv: function () {
    var styleDiv = BrushStyleDiv.cloneNode(true)
    styleDiv.append(CreateRangeValueTemplate({ prop: "stroke-width", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "stroke-width" }))
    return styleDiv
  },
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
  CreateTextpathStyleDiv: function () {
    var styleDiv = TextpathStyleDiv.cloneNode(true);

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
    styleDiv.append(CreateRangeValueTemplate({ prop: "letter-spacing", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "letter-spacing" }))
    styleDiv.append(CreateRangeValueTemplate({ prop: "word-spacing", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "word-spacing" }))


    for (var el of styleDiv.querySelectorAll('.divninput_hover')) {
      el.classList.remove('divninput_hover')
      el.classList.add('divninput')

    }
    return styleDiv;
  },

  CreateBorderStyleDiv: function () {
    var styleDiv = BorderStyleDiv.cloneNode(true);
    styleDiv
      .querySelector("input[type=checkbox]")
      .addEventListener("input", function () {
        if (this.checked) {
          styleDiv.querySelector(".diff_borders_div").style.display = "none";
          styleDiv.querySelector(".same_borders_div").style.display = "grid";
        } else {
          styleDiv.querySelector(".diff_borders_div").style.display = "grid";
          styleDiv.querySelector(".same_borders_div").style.display = "none";
        }
      });
    return styleDiv;
  },
  CreateTransformStyleDiv: function () {
    var TransformStyleDiv = document.createElement('div');
    TransformStyleDiv.setAttribute('StyleDivFor', 'TransformStyleDiv');
    TransformStyleDiv.append(CreateRangeValueTemplate({ prop: "Height", val: 0, icon: `<i class="bi bi-arrows-expand"></i>`, attr: "Main-style", attrval: "height" }))
    TransformStyleDiv.append(CreateRangeValueTemplate({ prop: "Width", val: 0, icon: `<i class="bi bi-arrows-expand" style="transform: rotate(90deg);"></i>`, attr: "Main-style", attrval: "width" }))
    TransformStyleDiv.append(CreateRangeValueTemplate({ prop: "Position", val: 0, icon: `<i class="bi bi-arrow-left-right"></i>`, suffex: "X", attr: "Main-style", attrval: "position-x" }))
    TransformStyleDiv.append(CreateRangeValueTemplate({ prop: "Position", val: 0, icon: `<i class="bi bi-arrow-down-up"></i>`, suffex: "Y", attr: "Main-style", attrval: "position-y" }))
    TransformStyleDiv.append(CreateRangeValueTemplate({ prop: "Rotate2d", val: 0, icon: `<i class="bi bi-arrow-repeat"></i>`, suffex: "deg", attr: "Main-style", attrval: "rotate" }))
    // 
    // var styleDiv = TransformStyleDiv.cloneNode(true);
    // customrangeinput(styleDiv);
    // return styleDiv;
    for (var el of TransformStyleDiv.querySelectorAll('.divninput_hover')) {
      el.classList.remove('divninput_hover')
      el.classList.add('divninput')

    }
    return TransformStyleDiv
  },
  CreateBorderRadiusStyleDiv: function () {
    var styleDiv = BorderRadiusStyleDiv.cloneNode(true);

    // EVENTLISTENER
    styleDiv
      .querySelector(".border_styling_switcher")
      .addEventListener("input", function () {
        if (this.checked) {
          styleDiv.querySelector(".diff_borders_div").style.display = "none";
          styleDiv.querySelector(".same_borders_div").style.display = "grid";
        } else {
          styleDiv.querySelector(".diff_borders_div").style.display = "grid";
          styleDiv.querySelector(".same_borders_div").style.display = "none";
        }
      });
    //
    for (el of styleDiv.querySelectorAll(".border_radius_style_switcher")) {
      el.addEventListener("input", function () {
        if (this.checked) {
          this.parentNode.previousElementSibling.disabled = false;
        } else {
          this.parentNode.previousElementSibling.disabled = true;
        }
      });
    }
    return styleDiv;
  },

  CreateTextShadowStyleDiv: function (textshadow) {
    var styleDiv = TextShadowStyleDiv.cloneNode(true);

    styleDiv
      .querySelector(".add_textshadowbox")
      .addEventListener("click", function () {
        // this.parentNode.insertBefore(TextShadowStyleBox.cloneNode(true), this)
        CreateStyleDiv.AddTextShadowDiv(
          styleDiv.querySelector(".add_textshadowbox"), "6", "7", "red", "7");
      });
    styleDiv.addEventListener("click", function () {
      styleDiv.setAttribute("text-shadow", getTextshadowfromStyleDiv(styleDiv));
    });
    styleDiv.addEventListener("input", function () {
      styleDiv.setAttribute("text-shadow", getTextshadowfromStyleDiv(styleDiv));
    });
    // console.log(textshadow)
    if (textshadow != "" && textshadow != undefined && textshadow != "none") {
      var regex = /\(([^)]+)\)/g;
      var result;
      var got_text_shadow = textshadow;
      while ((result = regex.exec(got_text_shadow)) !== null) {
        var rgb_code = result[1];
        var hex_color = tinycolor("rgb(" + `${rgb_code}` + ")").toHexString();
        got_text_shadow = got_text_shadow.replace(
          "rgb(" + `${rgb_code}` + ")",
          hex_color,
        );
      }
      var shadow_arr = got_text_shadow.split("#");
      shadow_arr.shift();
      for (var arr of shadow_arr) {
        var arr_splited = arr.split(" ");
        if (arr_splited[arr_splited.length - 1] == " ") {
          arr_splited.pop();
        }
        var color = "#" + arr_splited[0];
        var offsetX = parseInt(arr_splited[1]);
        var offsetY = parseInt(arr_splited[2]);
        var blur = parseInt(arr_splited[3]);
        // console.log(styleDiv.querySelector(".add_textshadowbox"));
        CreateStyleDiv.AddTextShadowDiv(
          styleDiv.querySelector(".add_textshadowbox"),
          offsetX,
          offsetY,
          color,
          blur,
        );
      }
    }
    return styleDiv;
  },
  AddTextShadowDiv: function (addbtn, offsetX, offsetY, color, blur) {
    var styleDiv = TextShadowStyleBox.cloneNode(true);
    styleDiv.querySelector(".shadow_count").innerHTML =
      addbtn.parentNode.querySelectorAll(".shadow_count").length + 1;
    styleDiv
      .querySelector(".delete_shadow")
      .addEventListener("click", function () {
        this.parentNode.remove();
        let i = 0;
        for (el of addbtn.parentNode.querySelectorAll(".shadow_count")) {
          el.innerHTML = i + 1;
          i = i + 1;
        }
      });
    styleDiv.querySelector(".text_shadow_h_shadow").value = offsetX || "0";
    styleDiv.querySelector(".text_shadow_v_shadow").value = offsetY || "0";
    styleDiv.querySelector(".text_shadow_color").value = color || "#000000";
    styleDiv.querySelector(".text_shadow_blur").value = blur || "0";
    customrangeinput(styleDiv);

    addbtn.parentNode.insertBefore(styleDiv, addbtn);
  },
  CreateDropShadowStyleDiv: function (dropshadow) {
    // console.log(dropshadow)
    var styleDiv = DropShadowStyleDiv.cloneNode(true);
    styleDiv
      .querySelector(".add_dropshadowbox")
      .addEventListener("click", function () {
        // this.parentNode.insertBefore(TextShadowStyleBox.cloneNode(true), this)
        CreateStyleDiv.AddDropShadowDiv(
          styleDiv.querySelector(".add_dropshadowbox"),
          "5",
          "5",
          "#000000",
          "3",
        );
      });
    if (dropshadow != "" && dropshadow != undefined && dropshadow != "none") {
      // dropshadow = dropshadow.match(/drop-shadow\(([^)]+)\)/g).toString().replace(/drop-shadow/g, "").replace(/[()]/g, '')
      // console.log(dropshadow)
      var regex = /\(([^)]+)\)/g;
      var result;
      var got_text_shadow = dropshadow;
      while ((result = regex.exec(got_text_shadow)) !== null) {
        var rgb_code = result[1];
        var hex_color = tinycolor("rgb(" + `${rgb_code}` + ")").toHexString();
        got_text_shadow = got_text_shadow.replace(
          "rgb(" + `${rgb_code}` + ")",
          hex_color,
        );
      }
      var shadow_arr = got_text_shadow.split("#");
      shadow_arr.shift();
      for (var arr of shadow_arr) {
        var arr_splited = arr.split(" ");
        if (arr_splited[arr_splited.length - 1] == " ") {
          arr_splited.pop();
        }
        var color = "#" + arr_splited[0];
        var offsetX = parseInt(arr_splited[1]);
        var offsetY = parseInt(arr_splited[2]);
        var blur = parseInt(arr_splited[3]);
        CreateStyleDiv.AddDropShadowDiv(
          styleDiv.querySelector(".add_dropshadowbox"),
          offsetX,
          offsetY,
          color,
          blur,
        );
      }
    }
    return styleDiv;
  },
  AddDropShadowDiv: function (addbtn, offsetX, offsetY, color, blur) {
    var styleDiv = DropShadowStyleBox.cloneNode(true);
    styleDiv.querySelector(".shadow_count").innerHTML =
      addbtn.parentNode.querySelectorAll(".shadow_count").length + 1;
    styleDiv
      .querySelector(".delete_shadow")
      .addEventListener("click", function () {
        this.parentNode.remove();
        let i = 0;
        for (el of addbtn.parentNode.querySelectorAll(".shadow_count")) {
          el.innerHTML = i + 1;
          i = i + 1;
        }
      });
    styleDiv.querySelector(".drop_shadow_h_shadow").value = offsetX || "0";
    styleDiv.querySelector(".drop_shadow_v_shadow").value = offsetY || "0";
    styleDiv.querySelector(".drop_shadow_color").value = color || "#000000";
    styleDiv.querySelector(".drop_shadow_blur").value = blur || "0";
    customrangeinput(styleDiv);

    addbtn.parentNode.insertBefore(styleDiv, addbtn);
  },
  CreateBackgroundStyleDiv: function () {
    var styleDiv = BackgroundStyleDiv.cloneNode(true);
    styleDiv
      .querySelector("input[type=checkbox]")
      .addEventListener("input", function () {
        if (this.checked) {
          this.previousElementSibling.disabled = true;
        } else {
          this.previousElementSibling.disabled = false;
        }
      });
    styleDiv
      .querySelector(".bar_holder_")
      .addEventListener("click", function (e) {
        for (el of styleDiv.querySelectorAll("[clickshow]")) {
          el.style.display = "none";
        }
        styleDiv.querySelector(
          `[clickshow=${e.target.getAttribute("clickbtn")}]`,
        ).style.display = "grid";
      });
    styleDiv.querySelector(
      ".background_image_previewer",
    ).style.backgroundRepeat = "round";
    styleDiv
      .querySelector(".background_image_previewer")
      .setAttribute("background_image_previewer", getUniqueid("__"));
    styleDiv
      .querySelector(".choose-image")
      .addEventListener("click", function () {
        BackgroundSelectorModal.style.display = "grid";
        BackgroundSelectorModal.setAttribute(
          "modal_on_for",
          styleDiv
            .querySelector(".background_image_previewer")
            .getAttribute("background_image_previewer"),
        );

        // MediaSelectorModal.querySelector('#set_uploaded_image').onclick = (e) => {

        //     // styleDiv.querySelector('.background_image_previewer').style.backgroundImage = MediaSelectorModal.querySelector('#preview_uploaded_image').style.backgroundImage
        styleDiv
          .querySelector(".remove_background_image")
          .addEventListener("click", function () {
            styleDiv.querySelector(
              ".background_image_previewer",
            ).style.backgroundImage = "none";
          });
        // }
      });

    return styleDiv;
  },
};

// export function UpdateTransformStyleDiv() {
//   var styleDiv = activeel_Transform;
//   var element = getactiveel()
//   // setmaxminForinput(styleDiv.querySelector("[main-style=height]"))
//   // setmaxminForinput(styleDiv.querySelector("[main-style=width]"))
//   // setmaxminForinput(styleDiv.querySelector("[main-style=rotate]"))
//   // setmaxminForinput(styleDiv.querySelector("[main-style=position-x]"))
//   // setmaxminForinput(styleDiv.querySelector("[main-style=position-y]"))
//   try {
//     var height = parseInt(transformFunc.getValue(element.parentNode).height);
//     var width = parseInt(transformFunc.getValue(element.parentNode).width);
//     var positionx = parseInt(
//       transformFunc.getValue(element.parentNode).positionX,
//     );
//     var positiony = parseInt(
//       transformFunc.getValue(element.parentNode).positionY,
//     );
//     var rotate = parseInt(transformFunc.getValue(element.parentNode).rotate);
//   } catch (err) {
//     var height = parseInt(transformFunc.getValue(element).height);
//     var width = parseInt(transformFunc.getValue(element).width);
//     var positionx = parseInt(transformFunc.getValue(element).positionX);
//     var positiony = parseInt(transformFunc.getValue(element).positionY);
//     var rotate = parseInt(transformFunc.getValue(element).rotate);
//   }
//   CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[Main-style=height]"), val: height })
//   CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[Main-style=width]"), val: width })
//   CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[Main-style=rotate]"), val: rotate })
//   CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[Main-style=position-x]"), val: positionx })
//   CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[Main-style=position-y]"), val: positiony })
// }

// export function UpdateOriginalStyleDivs(PassedElement) {

//   for(var el of document.querySelector('#style_div').querySelectorAll('.divninput')){
//     console.log(el)
//     try{
//     setmaxminForinput(el)}
//     catch (err){}
//   }

//   if(getactiveel().getAttribute('primary-element-type') !="Path" && getactiveel().getAttribute('primary-element-type') !="TextPath" ){
//   var styleDiv = activeel_Border_Radius;
//   var element = getactiveel()
//   var element = element.children[0] || element;
//   // var bre = (element.style.borderRadius.replace(/%/g, "").split(' / ')[1] || "").split(' ') || "0";
//   // var brc = (element.style.borderRadius.replace(/%/g, "").split(' / ')[0] || "").split(' ') || "0";
//   var btlr = window
//     .getComputedStyle(element)
//     .getPropertyValue("border-top-left-radius")
//     .replace(/%/g, "");
//   var btrr = window
//     .getComputedStyle(element)
//     .getPropertyValue("border-top-right-radius")
//     .replace(/%/g, "");
//   var bblr = window
//     .getComputedStyle(element)
//     .getPropertyValue("border-bottom-left-radius")
//     .replace(/%/g, "");
//   var bbrr = window
//     .getComputedStyle(element)
//     .getPropertyValue("border-bottom-right-radius")
//     .replace(/%/g, "");

//   // var btlr = styleDiv.querySelector('[style-attr=border-top-left-radius]');
//   // var btrr = styleDiv.querySelector('[style-attr=border-top-right-radius]');
//   // var bblr = styleDiv.querySelector('[style-attr=border-bottom-left-radius]');
//   // var bbrr = styleDiv.querySelector('[style-attr=border-bottom-right-radius]');
//   // var btlre = styleDiv.querySelector('[style-attr=border-top-left-radius-elliptic]');
//   // var btrre = styleDiv.querySelector('[style-attr=border-top-right-radius-elliptic]');
//   // var bblre = styleDiv.querySelector('[style-attr=border-bottom-left-radius-elliptic]');
//   // var bbrre = styleDiv.querySelector('[style-attr=border-bottom-right-radius-elliptic]');
//   // var btlrc = styleDiv.querySelector('[style-attr=border-top-left-radius]');
//   // var btrrc = styleDiv.querySelector('[style-attr=border-top-right-radius]');
//   // var bblrc = styleDiv.querySelector('[style-attr=border-bottom-left-radius]');
//   // var bbrrc = styleDiv.querySelector('[style-attr=border-bottom-right-radius]');
//   //

//   if (btlr == btrr && btlr == bblr && btlr == bbrr) {
//     styleDiv.querySelector("input[type=checkbox]").checked = true;

//     styleDiv.querySelector(".diff_borders_div").style.display = "none";
//     styleDiv.querySelector(".same_borders_div").style.display = "grid";
//     if (btlr.split(" ").length == 2) {
//       styleDiv
//         .querySelector("[Main-style=border-radius]")
//         .querySelector("input[type=checkbox]").checked = true;
//       styleDiv.querySelector("[style-attr=border-radius]").value =
//         btlr.split(" ")[0];
//       styleDiv.querySelector("[style-attr=border-radius-elliptic]").value =
//         btlr.split(" ")[1];
//       styleDiv.querySelector(
//         "[style-attr=border-radius-elliptic]",
//       ).disabled = false;
//     } else {
//       styleDiv
//         .querySelector("[Main-style=border-radius]")
//         .querySelector("input[type=checkbox]").checked = false;
//       styleDiv.querySelector("[style-attr=border-radius]").value =
//         btlr.split(" ")[0];
//       styleDiv.querySelector(
//         "[style-attr=border-radius-elliptic]",
//       ).disabled = true;
//     }
//   } else {
//     styleDiv.querySelector(".diff_borders_div").style.display = "grid";
//     styleDiv.querySelector(".same_borders_div").style.display = "none";
//     styleDiv.querySelector("input[type=checkbox]").checked = false;

//     if (btlr.split(" ").length == 2) {
//       styleDiv
//         .querySelector("[Main-style=border-top-left-radius]")
//         .querySelector("input[type=checkbox]").checked = true;
//       styleDiv.querySelector("[style-attr=border-top-left-radius]").value =
//         btlr.split(" ")[0];
//       styleDiv.querySelector(
//         "[style-attr=border-top-left-radius-elliptic]",
//       ).value = btlr.split(" ")[1];
//       styleDiv.querySelector(
//         "[style-attr=border-top-left-radius-elliptic]",
//       ).disabled = false;
//     } else {
//       styleDiv
//         .querySelector("[Main-style=border-top-left-radius]")
//         .querySelector("input[type=checkbox]").checked = false;
//       styleDiv.querySelector("[style-attr=border-top-left-radius]").value =
//         btlr.split(" ")[0];
//       styleDiv.querySelector(
//         "[style-attr=border-top-left-radius-elliptic]",
//       ).disabled = true;
//     }
//     //
//     if (btrr.split(" ").length == 2) {
//       styleDiv
//         .querySelector("[Main-style=border-top-right-radius]")
//         .querySelector("input[type=checkbox]").checked = true;
//       styleDiv.querySelector("[style-attr=border-top-right-radius]").value =
//         btrr.split(" ")[0];
//       styleDiv.querySelector(
//         "[style-attr=border-top-right-radius-elliptic]",
//       ).value = btrr.split(" ")[1];
//       styleDiv.querySelector(
//         "[style-attr=border-top-right-radius-elliptic]",
//       ).disabled = false;
//     } else {
//       styleDiv
//         .querySelector("[Main-style=border-top-right-radius]")
//         .querySelector("input[type=checkbox]").checked = false;
//       styleDiv.querySelector("[style-attr=border-top-right-radius]").value =
//         btrr.split(" ")[0];
//       styleDiv.querySelector(
//         "[style-attr=border-top-right-radius-elliptic]",
//       ).disabled = true;
//     }
//     //
//     if (bblr.split(" ").length == 2) {
//       styleDiv
//         .querySelector("[Main-style=border-bottom-left-radius]")
//         .querySelector("input[type=checkbox]").checked = true;
//       styleDiv.querySelector("[style-attr=border-bottom-left-radius]").value =
//         bblr.split(" ")[0];
//       styleDiv.querySelector(
//         "[style-attr=border-bottom-left-radius-elliptic]",
//       ).value = bblr.split(" ")[1];
//       styleDiv.querySelector(
//         "[style-attr=border-bottom-left-radius-elliptic]",
//       ).disabled = false;
//     } else {
//       styleDiv
//         .querySelector("[Main-style=border-bottom-left-radius]")
//         .querySelector("input[type=checkbox]").checked = false;
//       styleDiv.querySelector("[style-attr=border-bottom-left-radius]").value =
//         bblr.split(" ")[0];
//       styleDiv.querySelector(
//         "[style-attr=border-bottom-left-radius-elliptic]",
//       ).disabled = true;
//     }
//     //
//     if (bbrr.split(" ").length == 2) {
//       styleDiv
//         .querySelector("[Main-style=border-bottom-right-radius]")
//         .querySelector("input[type=checkbox]").checked = true;
//       styleDiv.querySelector("[style-attr=border-bottom-right-radius]").value =
//         bbrr.split(" ")[0];
//       styleDiv.querySelector(
//         "[style-attr=border-bottom-right-radius-elliptic]",
//       ).value = bbrr.split(" ")[1];
//       styleDiv.querySelector(
//         "[style-attr=border-bottom-right-radius-elliptic]",
//       ).disabled = false;
//     } else {
//       styleDiv
//         .querySelector("[Main-style=border-bottom-right-radius]")
//         .querySelector("input[type=checkbox]").checked = false;
//       styleDiv.querySelector("[style-attr=border-bottom-right-radius]").value =
//         bbrr.split(" ")[0];
//       styleDiv.querySelector(
//         "[style-attr=border-bottom-right-radius-elliptic]",
//       ).disabled = true;
//     }
//   }
//   //
//   // if (bre.length == 1 && bre[0] != "" && brc.length == 1 && brc[0] != "") {
//   //     console.log(brc[0])
//   //     styleDiv.querySelector('.diff_borders_div').style.display = 'none';
//   //     styleDiv.querySelector('.same_borders_div').style.display = 'grid';

//   //     styleDiv.querySelector('[Main-style=border-radius]').querySelector('input[type=checkbox]').checked = true;

//   //     styleDiv.querySelector('[style-attr=border-radius]').value = brc[0]
//   //     styleDiv.querySelector('[style-attr=border-radius-elliptic]').disabled = false;
//   //     styleDiv.querySelector('[style-attr=border-radius-elliptic]').value = bre[0]
//   // } else if (brc.length == 1 && brc[0] != "" && bre.length == 1 && bre[0] == "") {
//   //     console.log(brc[0])
//   //     styleDiv.querySelector('.diff_borders_div').style.display = 'none';
//   //     styleDiv.querySelector('.same_borders_div').style.display = 'grid';

//   //     styleDiv.querySelector('[Main-style=border-radius]').querySelector('input[type=checkbox]').checked = false;
//   //     styleDiv.querySelector('[style-attr=border-radius]').value = brc[0]
//   //     styleDiv.querySelector('[style-attr=border-radius-elliptic]').disabled = true;
//   // } else {
//   //     styleDiv.querySelector('.diff_borders_div').style.display = 'grid';
//   //     styleDiv.querySelector('.same_borders_div').style.display = 'none';

//   //     var btlr = styleDiv.querySelector('[style-attr=border-top-left-radius]')
//   //     var btlre = styleDiv.querySelector('[style-attr=border-top-left-radius-elliptic]')
//   //     var btlrc = styleDiv.querySelector('[Main-style=border-top-left-radius]').querySelector('input[type=checkbox]')
//   //         //
//   //     var btrr = styleDiv.querySelector('[style-attr=border-top-right-radius]')
//   //     var btrre = styleDiv.querySelector('[style-attr=border-top-right-radius-elliptic]')
//   //     var btrrc = styleDiv.querySelector('[Main-style=border-top-right-radius]').querySelector('input[type=checkbox]')
//   //         //
//   //     var bbrr = styleDiv.querySelector('[style-attr=border-bottom-right-radius]')
//   //     var bbrre = styleDiv.querySelector('[style-attr=border-bottom-right-radius-elliptic]')
//   //     var bbrrc = styleDiv.querySelector('[Main-style=border-bottom-right-radius]').querySelector('input[type=checkbox]')
//   //         //
//   //     var bblr = styleDiv.querySelector('[style-attr=border-bottom-left-radius]')
//   //     var bblre = styleDiv.querySelector('[style-attr=border-bottom-left-radius-elliptic]')
//   //     var bblrc = styleDiv.querySelector('[Main-style=border-bottom-left-radius]').querySelector('input[type=checkbox]')

//   //     if (brc.length == 1) {
//   //         btlr.value = brc[0]
//   //         bbrr.value = brc[0]
//   //         btrr.value = brc[0]
//   //         bblr.value = brc[0]
//   //     } else if (brc.length == 2) {
//   //         btlr.value = brc[0]
//   //         bbrr.value = brc[0]
//   //         btrr.value = brc[1]
//   //         bblr.value = brc[1]
//   //     } else if (brc.length == 3) {
//   //         btlr.value = brc[0]
//   //         btrr.value = brc[1]
//   //         bblr.value = brc[1]
//   //         bbrr.value = brc[2]
//   //     } else if (brc.length == 4) {
//   //         btlr.value = brc[0]
//   //         btrr.value = brc[1]
//   //         bblr.value = brc[2]
//   //         bbrr.value = brc[3]
//   //     }

//   //     //
//   //     console.log(bre)
//   //     if (bre.length == 1 && bre[0] != "" && bre[0] != brc[0]) {
//   //         btlre.value = bre[0]
//   //         bbrre.value = bre[0]
//   //         btrre.value = bre[0]
//   //         bblre.value = bre[0]
//   //         btlrc.checked = true;
//   //         btrrc.checked = true;
//   //         bblrc.checked = true;
//   //         bbrrc.checked = true;
//   //     } else if (bre.length == 1 && bre[0] == "" && bre[0] == brc[0]) {
//   //         btlrc.checked = false;
//   //         btrrc.checked = false;
//   //         bblrc.checked = false;
//   //         bbrrc.checked = false;
//   //         btlre.disabled = true
//   //         bbrre.disabled = true
//   //         btrre.disabled = true
//   //         bblre.disabled = true
//   //     }

//   //     if (bre.length == 2) {
//   //         btlre.value = bre[0]
//   //         bbrre.value = bre[0]
//   //         btrre.value = bre[1]
//   //         bblre.value = bre[1]
//   //     } else if (bre.length == 3) {
//   //         btlre.value = bre[0]
//   //         btrre.value = bre[1]
//   //         bblre.value = bre[1]
//   //         bbrre.value = bre[2]
//   //     } else if (bre.length == 4) {
//   //         btlre.value = bre[0]
//   //         btrre.value = bre[1]
//   //         bblre.value = bre[2]
//   //         bbrre.value = bre[3]
//   //     }

//   // }
//   var styleDiv = activeel_Border;
//   var element = getactiveel().children[0]
//   var bst = styleDiv
//     .querySelector("[Main-style=border-top]")
//     .querySelector("[style-attr=border-style]");
//   var bsr = styleDiv
//     .querySelector("[Main-style=border-right]")
//     .querySelector("[style-attr=border-style]");
//   var bsb = styleDiv
//     .querySelector("[Main-style=border-bottom]")
//     .querySelector("[style-attr=border-style]");
//   var bsl = styleDiv
//     .querySelector("[Main-style=border-left]")
//     .querySelector("[style-attr=border-style]");

//   var bwt = styleDiv
//     .querySelector("[Main-style=border-top]")
//     .querySelector("[style-attr=border-width]");
//   var bwr = styleDiv
//     .querySelector("[Main-style=border-right]")
//     .querySelector("[style-attr=border-width]");
//   var bwb = styleDiv
//     .querySelector("[Main-style=border-bottom]")
//     .querySelector("[style-attr=border-width]");
//   var bwl = styleDiv
//     .querySelector("[Main-style=border-left]")
//     .querySelector("[style-attr=border-width]");

//   var bct = styleDiv
//     .querySelector("[Main-style=border-top]")
//     .querySelector("[style-attr=border-color]");
//   var bcr = styleDiv
//     .querySelector("[Main-style=border-right]")
//     .querySelector("[style-attr=border-color]");
//   var bcb = styleDiv
//     .querySelector("[Main-style=border-bottom]")
//     .querySelector("[style-attr=border-color]");
//   var bcl = styleDiv
//     .querySelector("[Main-style=border-left]")
//     .querySelector("[style-attr=border-color]");

//   var bs = styleDiv
//     .querySelector("[Main-style=border]")
//     .querySelector("[style-attr=border-style]");
//   var bw = styleDiv
//     .querySelector("[Main-style=border]")
//     .querySelector("[style-attr=border-width]");
//   var bc = styleDiv
//     .querySelector("[Main-style=border]")
//     .querySelector("[style-attr=border-color]");
//   // var bs = element.style.borderStyle.split(' ')
//   // var bw = element.style.borderWidth.replace(/px/g, "").split(' ')
//   // var bc = element.style.borderColor.replace(/, /g, ",").split(' ')
//   try {
//     var computedBorders = {
//       bst: getComputedValue(element, "border-top-style"),
//       bsr: getComputedValue(element, "border-right-style"),
//       bsb: getComputedValue(element, "border-bottom-style"),
//       bsl: getComputedValue(element, "border-left-style"),
//       bwt: parseInt(getComputedValue(element, "border-top-width")),
//       bwr: parseInt(getComputedValue(element, "border-right-width")),
//       bwb: parseInt(getComputedValue(element, "border-bottom-width")),
//       bwl: parseInt(getComputedValue(element, "border-left-width")),
//       bct: tinycolor(getComputedValue(element, "border-top-color")).toHexString(),
//       bcr: tinycolor(
//         getComputedValue(element, "border-right-color"),
//       ).toHexString(),
//       bcb: tinycolor(
//         getComputedValue(element, "border-bottom-color"),
//       ).toHexString(),
//       bcl: tinycolor(
//         getComputedValue(element, "border-left-color"),
//       ).toHexString(),
//     };
//     // console.log(bs)
//     // console.log(bst.value)
//     // console.log(bs.length)
//     bst.value = computedBorders.bst;
//     bsr.value = computedBorders.bsr;
//     bsl.value = computedBorders.bsl;
//     bsb.value = computedBorders.bsb;

//     bct.value = computedBorders.bct;
//     bcr.value = computedBorders.bcr;
//     bcl.value = computedBorders.bcl;
//     bcb.value = computedBorders.bcb;

//     bwt.value = computedBorders.bwt;
//     bwr.value = computedBorders.bwr;
//     bwl.value = computedBorders.bwl;
//     bwb.value = computedBorders.bwb;

//     bw.value = computedBorders.bwt;
//     bc.value = computedBorders.bct;
//     bs.value = computedBorders.bst;

//     styleDiv.querySelector(".same_borders_div").style.display = "none";
//     styleDiv.querySelector(".diff_borders_div").style.display = "grid";
//     styleDiv.querySelector("input[type=checkbox]").checked = false;

//     if (
//       computedBorders.bwt == computedBorders.bwr &&
//       computedBorders.bwt == computedBorders.bwl &&
//       computedBorders.bwt == computedBorders.bwb
//     ) {
//       if (
//         computedBorders.bct == computedBorders.bcr &&
//         computedBorders.bct == computedBorders.bcl &&
//         computedBorders.bct == computedBorders.bcb
//       ) {
//         if (
//           computedBorders.bst == computedBorders.bsr &&
//           computedBorders.bst == computedBorders.bsl &&
//           computedBorders.bst == computedBorders.bsb
//         ) {
//           styleDiv.querySelector(".same_borders_div").style.display = "grid";
//           styleDiv.querySelector(".diff_borders_div").style.display = "none";
//           styleDiv.querySelector("input[type=checkbox]").checked = true;
//         }
//       }
//     }
//   }
//   catch (err) { }

//   // if (bs.length == 1 && bw.length == 1 && bc.length == 1) {
//   //     styleDiv.querySelector('.same_borders_div').style.display = "grid";
//   //     styleDiv.querySelector('.diff_borders_div').style.display = "none";
//   //     styleDiv.querySelector('input[type=checkbox]').checked = true;
//   //     styleDiv.querySelector('[Main-style=border]').querySelector('[style-attr=border-style]').value = bs[0];
//   //     styleDiv.querySelector('[Main-style=border]').querySelector('[style-attr=border-width]').value = bw[0]
//   //     styleDiv.querySelector('[Main-style=border]').querySelector('[style-attr=border-color]').value = tinycolor(bc[0]).toHexString();

//   // } else {
//   //     styleDiv.querySelector('.same_borders_div').style.display = "none";
//   //     styleDiv.querySelector('.diff_borders_div').style.display = "grid";
//   //     styleDiv.querySelector('input[type=checkbox]').checked = false;
//   //     if (bs.length == 1) {
//   //         bst.value = bs[0]
//   //         bsb.value = bs[0]
//   //         bsr.value = bs[0]
//   //         bsl.value = bs[0]
//   //     } else if (bs.length == 2) {
//   //         bst.value = bs[0]
//   //         bsb.value = bs[0]
//   //         bsr.value = bs[1]
//   //         bsl.value = bs[1]
//   //     } else if (bs.length == 3) {
//   //         bst.value = bs[0]
//   //         bsb.value = bs[2]
//   //         bsr.value = bs[1]
//   //         bsl.value = bs[1]
//   //     } else if (bs.length == 4) {
//   //         bst.value = bs[0]
//   //         bsb.value = bs[1]
//   //         bsr.value = bs[2]
//   //         bsl.value = bs[3]
//   //     }
//   //     //
//   //     if (bw.length == 1) {
//   //         bwt.value = bw[0] || '0'
//   //         bwb.value = bw[0] || '0'
//   //         bwr.value = bw[0] || '0'
//   //         bwl.value = bw[0] || '0'
//   //     } else if (bw.length == 2) {
//   //         bwt.value = bw[0] || '0'
//   //         bwb.value = bw[0] || '0'
//   //         bwr.value = bw[1] || '0'
//   //         bwl.value = bw[1] || '0'
//   //     } else if (bw.length == 3) {
//   //         bwt.value = bw[0] || '0'
//   //         bwb.value = bw[2] || '0'
//   //         bwr.value = bw[1] || '0'
//   //         bwl.value = bw[1] || '0'
//   //     } else if (bw.length == 4) {
//   //         bwt.value = bw[0] || '0'
//   //         bwb.value = bw[1] || '0'
//   //         bwr.value = bw[2] || '0'
//   //         bwl.value = bw[3] || '0'
//   //     }
//   //     //
//   //     console.log(tinycolor(bs[0]).toHexString())
//   //     if (bc.length == 1) {
//   //         bct.value = tinycolor(bc[0]).toHexString();
//   //         bcb.value = tinycolor(bc[0]).toHexString()
//   //         bcr.value = tinycolor(bc[0]).toHexString()
//   //         bcl.value = tinycolor(bc[0]).toHexString()
//   //     } else if (bw.length == 2) {
//   //         bct.value = tinycolor(bc[0]).toHexString()
//   //         bcb.value = tinycolor(bc[0]).toHexString()
//   //         bcr.value = tinycolor(bc[1]).toHexString()
//   //         bcl.value = tinycolor(bc[1]).toHexString()
//   //     } else if (bw.length == 3) {
//   //         bct.value = tinycolor(bc[0]).toHexString()
//   //         bcb.value = tinycolor(bc[2]).toHexString()
//   //         bcr.value = tinycolor(bc[1]).toHexString()
//   //         bcl.value = tinycolor(bc[1]).toHexString()
//   //     } else if (bw.length == 4) {
//   //         bct.value = tinycolor(bc[0]).toHexString()
//   //         bcb.value = tinycolor(bc[1]).toHexString()
//   //         bcr.value = tinycolor(bc[2]).toHexString()
//   //         bcl.value = tinycolor(bc[3]).toHexString()
//   // }

//   // }


// }

// // Transaform

//   // console.log(activeel_Transform)
//   UpdateTransformStyleDiv()


//   // styleDiv.querySelector("[style-attr=height]").value = height || 0;
//   // styleDiv
//   //   .querySelector("[Main-style=height]")
//   //   .querySelector(".range_value").innerHTML = height || 0;
//   // styleDiv.querySelector("[style-attr=width]").value = width || 0;
//   // styleDiv
//   //   .querySelector("[Main-style=width]")
//   //   .querySelector(".range_value").innerHTML = width || 0;
//   // styleDiv.querySelector("[style-attr=position-x]").value = positionx || 0;
//   // styleDiv
//   //   .querySelector("[Main-style=position-x]")
//   //   .querySelector(".range_value").innerHTML = positionx || 0;
//   // styleDiv.querySelector("[style-attr=position-y]").value = positiony || 0;
//   // styleDiv
//   //   .querySelector("[Main-style=position-y]")
//   //   .querySelector(".range_value").innerHTML = positiony || 0;
//   // styleDiv.querySelector("[style-attr=rotate]").value = rotate || 0;
//   // styleDiv
//   //   .querySelector("[Main-style=rotate]")
//   //   .querySelector(".range_value").innerHTML = rotate || 0;
//   // ****


//   // styleDiv.querySelector('[style-attr=skewX]').value = skewX || 0;
//   // styleDiv.querySelector('[Main-style=skewX]').querySelector('.range_value').innerHTML = skewX || 0;
//   // styleDiv.querySelector('[style-attr=skewY]').value = skewY || 0;
//   // styleDiv.querySelector('[Main-style=skewY]').querySelector('.range_value').innerHTML = skewY || 0;


//   // TEXT
//   if(getactiveel().getAttribute('primary-element-type') == "Text")
//   {
//   var styleDiv = activeel_Text;
//   var element = getactiveel()
//   for (el of activeel_Text.querySelectorAll("[Main-style=textAlign]")) {
//     el.style.background = "none";
//   }
//   try {
//     styleDiv.querySelector(
//       `[align=${element.children[0].style.textAlign}]`,
//     ).style.background = "#03a9f4";
//   } catch (err) { }
//   try {
//     if (element.children[0].style.fontWeight == "bold") {
//       styleDiv.querySelector("[Main-style=fontWeight]").style.background =
//         "#03a9f4";
//     } else {
//       styleDiv.querySelector("[Main-style=fontWeight]").style.background =
//         "none";
//     }
//     if (element.children[0].style.textDecoration == "underline") {
//       styleDiv.querySelector("[Main-style=textDecoration]").style.background =
//         "#03a9f4";
//     } else {
//       styleDiv.querySelector("[Main-style=textDecoration]").style.background =
//         "none";
//     }
//     if (element.children[0].style.fontStyle == "italic") {
//       styleDiv.querySelector("[Main-style=fontStyle]").style.background =
//         "#03a9f4";
//     } else {
//       styleDiv.querySelector("[Main-style=fontStyle]").style.background =
//         "none";
//     }


//     // for (var propes of text_props) {
//     //     console.log(propes)
//     //     try {
//     //         console.log(InteracStyles.getValue({ element: getactiveel(), prop: propes, }))
//     //         styleDiv.querySelector(`[style-attr=${propes}]`).value = InteracStyles.getValue({ element: getactiveel(), prop: propes, });
//     //         styleDiv.querySelector(`[Main-style=${propes}]`).querySelector('.range_value').innerHTML = InteracStyles.getValue({ element: getactiveel(), prop: propes });
//     //     }
//     //     catch (err) {
//     //         console.log(InteracStyles.getValue({ element: getactiveel(), prop: propes, }))

//     //     }
//     // }
//     console.log("ASs")
//     styleDiv.querySelector("[style-attr=color]").value = tinycolor(element.children[0].style.color).toHexString();
//     styleDiv.querySelector("[style-attr=font-size]").value = parseFloat(InteracStyles.getValue({ element: getactiveel(), prop: "font-size" }))
//     styleDiv.querySelector("[style-attr=font-family]").value = InteracStyles.getValue({ element: getactiveel(), prop: "font-family" })
//     styleDiv.querySelector("[style-attr=font-family]").style.fontFamily = InteracStyles.getValue({ element: getactiveel(), prop: "font-family" })
//     styleDiv.querySelector("[style-attr=-webkit-text-stroke-color]").value = InteracStyles.getValue({ element: getactiveel(), prop: "-webkit-text-stroke-color" })
//     // console.log(InteracStyles.getValue({ element: getactiveel(),prop: "font-family" }),InteracStyles.getValue({ element: getactiveel(),prop: "font-size" }))
//     console.log("ASs")
//     CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=line-height]"), val: InteracStyles.getValue({ element: getactiveel(), prop: "line-height" }) })
//     CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=word-spacing]"), val: InteracStyles.getValue({ element: getactiveel(), prop: "word-spacing" }) })
//     CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=letter-spacing]"), val: InteracStyles.getValue({ element: getactiveel(), prop: "letter-spacing" }) })
//     CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=padding-left]"), val: InteracStyles.getValue({ element: getactiveel(), prop: "padding-left" }) })
//     CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=padding-right]"), val: InteracStyles.getValue({ element: getactiveel(), prop: "padding-right" }) })
//     CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=padding-top]"), val: InteracStyles.getValue({ element: getactiveel(), prop: "padding-top" }) })
//     CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=padding-bottom]"), val: InteracStyles.getValue({ element: getactiveel(), prop: "padding-bottom" }) })
//     CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=-webkit-text-stroke-width]"), val: InteracStyles.getValue({ element: getactiveel(), prop: "-webkit-text-stroke-width" }) })
//     console.log("ASs")
//     console.log(InteracStyles.getValue({ element: getactiveel(), prop: "-webkit-text-stroke-width" }))

//   } catch (err) { 
//     console.log(err)
//   }
//   // styleDiv.querySelector("[style-attr=line-height]").value =
//   //   parseInt(element.children[0].style.lineHeight) ||
//   //   parseInt(getComputedValue(element.children[0], "line-height"));
//   // styleDiv
//   //   .querySelector("[Main-style=line-height]")
//   //   .querySelector(".range_value").innerHTML =
//   //   parseInt(element.children[0].style.lineHeight) ||
//   //   parseInt(getComputedValue(element.children[0], "line-height"));
//   // //
//   // styleDiv.querySelector("[style-attr=word-spacing]").value =
//   //   parseInt(element.children[0].style.wordSpacing) || "0";
//   // styleDiv
//   //   .querySelector("[Main-style=word-spacing]")
//   //   .querySelector(".range_value").innerHTML =
//   //   parseInt(element.children[0].style.wordSpacing) || "0";

//   // styleDiv.querySelector("[style-attr=letter-spacing]").value =
//   //   parseInt(element.children[0].style.letterSpacing) || "0";
//   // styleDiv
//   //   .querySelector("[Main-style=letter-spacing]")
//   //   .querySelector(".range_value").innerHTML =
//   //   parseInt(element.children[0].style.letterSpacing) || "0";
//   // //
//   // styleDiv.querySelector("[style-attr=-webkit-text-stroke-width]").value =
//   //   parseInt(element.children[0].style.webkitTextStrokeWidth) || 0;
//   // styleDiv
//   //   .querySelector("[Main-style=text-stroke]")
//   //   .querySelector(".range_value").innerHTML =
//   //   parseInt(element.children[0].style.webkitTextStrokeWidth) || 0;
//   // styleDiv.querySelector("[style-attr=-webkit-text-stroke-color]").value =
//   //   tinycolor(element.children[0].style.webkitTextStrokeColor).toHexString();
//   // //

//   // styleDiv.querySelector("[style-attr=padding-right]").value = parseInt(
//   //   getComputedValue(element.children[0], "padding-right"),
//   // );
//   // styleDiv.querySelector("[style-attr=padding-top]").value = parseInt(
//   //   getComputedValue(element.children[0], "padding-top"),
//   // );
//   // styleDiv.querySelector("[style-attr=padding-bottom]").value = parseInt(
//   //   getComputedValue(element.children[0], "padding-bottom"),
//   // );
//   // styleDiv.querySelector("[style-attr=padding-left]").value = parseInt(
//   //   getComputedValue(element.children[0], "padding-left"),
//   // );

//   // styleDiv
//   //   .querySelector("[Main-style=padding-left]")
//   //   .querySelector(".range_value").innerHTML = parseInt(
//   //   getComputedValue(element.children[0], "padding-left"),
//   // );
//   // styleDiv
//   //   .querySelector("[Main-style=padding-top]")
//   //   .querySelector(".range_value").innerHTML = parseInt(
//   //   getComputedValue(element.children[0], "padding-top"),
//   // );
//   // styleDiv
//   //   .querySelector("[Main-style=padding-right]")
//   //   .querySelector(".range_value").innerHTML = parseInt(
//   //   getComputedValue(element.children[0], "padding-right"),
//   // );
//   // styleDiv
//   //   .querySelector("[Main-style=padding-bottom]")
//   //   .querySelector(".range_value").innerHTML = parseInt(
//   //   getComputedValue(element.children[0], "padding-bottom"),
//   // );


//   // for (el of styleDiv.querySelectorAll("input[type='range']")) {
//   //   var value = ((el.value - el.min) / (el.max - el.min)) * 100;
//   //   el.style.background =
//   //     "linear-gradient(to right, #191e2b 0%, rgb(15 34 60)" +
//   //     value +
//   //     "%, #fff " +
//   //     value +
//   //     "%, white 100%)";
//   // }

//   // TEXT END
//   // TEXTSHADOW

//   var styleDiv = activeel_Text_Shadow;

//   try {
//     styleDiv.querySelector("[StyleDivFor]").remove();
//   } catch (err) { }
//   styleDiv.append(
//     CreateStyleDiv.CreateTextShadowStyleDiv(InteracStyles.getValue({ element: getactiveel(), prop: "text-shadow" })),
//   );
//   }

//   if(getactiveel().getAttribute('primary-element-type') == "Textpath"){

//     var styleDiv = activeel_Textpath;
//     var element = getactiveel()

//     try {
//       if (element.children[0].style.fontWeight == "bold") {
//         styleDiv.querySelector("[Main-style=fontWeight]").style.background =
//           "#03a9f4";
//       } else {
//         styleDiv.querySelector("[Main-style=fontWeight]").style.background =
//           "none";
//       }
//       if (element.children[0].style.textDecoration == "underline") {
//         styleDiv.querySelector("[Main-style=textDecoration]").style.background =
//           "#03a9f4";
//       } else {
//         styleDiv.querySelector("[Main-style=textDecoration]").style.background =
//           "none";
//       }
//       if (element.children[0].style.fontStyle == "italic") {
//         styleDiv.querySelector("[Main-style=fontStyle]").style.background =
//           "#03a9f4";
//       } else {
//         styleDiv.querySelector("[Main-style=fontStyle]").style.background =
//           "none";
//       }




//       styleDiv.querySelector("[style-attr=color]").value = InteracStyles.getValue({ element: getactiveel(), prop: "color" })
//       styleDiv.querySelector("[style-attr=font-size]").value = parseFloat(InteracStyles.getValue({ element: getactiveel(), prop: "font-size" }))
//       styleDiv.querySelector("[style-attr=font-family]").value = InteracStyles.getValue({ element: getactiveel(), prop: "font-family" })
//       styleDiv.querySelector("[style-attr=font-family]").style.fontFamily = InteracStyles.getValue({ element: getactiveel(), prop: "font-family" })
//       styleDiv.querySelector("[style-attr=-webkit-text-stroke-color]").value = InteracStyles.getValue({ element: getactiveel(), prop: "-webkit-text-stroke-color" })
//       CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=word-spacing]"), val: InteracStyles.getValue({ element: getactiveel(), prop: "word-spacing" }) })
//       CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=letter-spacing]"), val: InteracStyles.getValue({ element: getactiveel(), prop: "letter-spacing" }) })
//       CreateStyleDiv.UpdateRangeValueDiv({ div: styleDiv.querySelector("[main-style=-webkit-text-stroke-width]"), val: InteracStyles.getValue({ element: getactiveel(), prop: "-webkit-text-stroke-width" }) })


//     } catch (err) { 
//       console.log(err)
//     }
//     var styleDiv = activeel_Text_Shadow;

//     try {
//       styleDiv.querySelector("[StyleDivFor]").remove();
//     } catch (err) { }
//     styleDiv.append(
//       CreateStyleDiv.CreateTextShadowStyleDiv(InteracStyles.getValue({ element: getactiveel(), prop: "text-shadow" })),
//     );

//   }



//   // DROPSHADOW

//   var styleDiv = activeel_Drop_Shadow;

//   try {
//     styleDiv.querySelector("[StyleDivFor]").remove();
//   } catch (err) { }
//   styleDiv.append(
//     CreateStyleDiv.CreateDropShadowStyleDiv(
//       InteracStyles.getValue({ element: getactiveel(), prop: "drop-shadow" }),
//     ),
//   );


//   var styleDiv = activeel_Background;
//   if (
//     InteracStyles.getValue({ element: getactiveel(), prop: "background-color" }) == "transparent" ||
//     InteracStyles.getValue({ element: getactiveel(), prop: "background-color" }) == ""
//     // element.style.backgroundColor == "" ||
//     // element.style.backgroundColor == "transparent"
//   ) {
//     styleDiv.querySelector("input[type=checkbox]").checked = true;
//     styleDiv.querySelector("input[type=color]").disabled = true;
//   } else {
//     styleDiv.querySelector("input[type=color]").disabled = false;
//     styleDiv.querySelector("input[type=checkbox]").checked = false;
//     styleDiv.querySelector("input[type=color]").value = InteracStyles.getValue({ element: getactiveel(), prop: "background-color" })
//   }

//   if (InteracStyles.getValue({ element: getactiveel(), prop: "background-image" }) == "") {
//     styleDiv.querySelector(
//       ".background_image_previewer",
//     ).style.backgroundImage = "";
//   } else {
//     styleDiv.querySelector(
//       ".background_image_previewer",
//     ).style.backgroundImage = InteracStyles.getValue({ element: getactiveel(), prop: "background-image" });
//   }
// }

// SHOW STYLING PROPS
activeel_Text.style.display = "none";
activeel_Textpath.style.display = "none";
activeel_Border_Radius.style.display = "none";
activeel_Border.style.display = "none";
activeel_Transform.style.display = "none";
activeel_Text_Shadow.style.display = "none";
activeel_Drop_Shadow.style.display = "none";
activeel_Background.style.display = "none";
activeel_Brush.style.display = "none";
activeel_Box_Shadow.style.display = "none";
export function show_styling_properties(element) {
  activeel_Text.style.display = "none";
  activeel_Textpath.style.display = "none";
  activeel_Border_Radius.style.display = "none";
  activeel_Border.style.display = "none";
  activeel_Transform.style.display = "none";
  activeel_Text_Shadow.style.display = "none";
  activeel_Drop_Shadow.style.display = "none";
  activeel_Background.style.display = "none";
  activeel_Brush.style.display = "none";
  try {
    switch (element.getAttribute("primary-element-type") || "") {
      case "Text":
        activeel_Border_Radius.style.display = "inline-block";
        activeel_Border.style.display = "inline-block";
        activeel_Transform.style.display = "inline-block";
        activeel_Text_Shadow.style.display = "inline-block";
        activeel_Drop_Shadow.style.display = "inline-block";
        activeel_Background.style.display = "inline-block";
        activeel_Text.style.display = "inline-block";
        break;
      case "Image":
      case "Container":
        activeel_Border_Radius.style.display = "inline-block";
        activeel_Border.style.display = "inline-block";
        activeel_Transform.style.display = "inline-block";
        activeel_Drop_Shadow.style.display = "inline-block";
        activeel_Background.style.display = "inline-block";
        break;
      case "Path":
        activeel_Brush.style.display = "inline-block";
        activeel_Transform.style.display = "inline-block";
        activeel_Drop_Shadow.style.display = "inline-block";
        activeel_Background.style.display = "inline-block";
        break
      case "Video":
      case "Audio":
      case "YoutubeVideo":
        activeel_Transform.style.display = "inline-block";
        activeel_Drop_Shadow.style.display = "inline-block";
        activeel_Border_Radius.style.display = "inline-block";
        activeel_Border.style.display = "inline-block";
        activeel_Background.style.display = "inline-block";
        break
      case "Textpath":
        activeel_Transform.style.display = "inline-block";
        activeel_Text_Shadow.style.display = "inline-block";
        activeel_Textpath.style.display = "inline-block";
        activeel_Drop_Shadow.style.display = "inline-block";
        break
    }
  }
  catch (Err) {

  }
  // if (element.getAttribute('element-type') == "Image_Cover") {
  //     activeel_Text.style.display = "none"
  //     activeel_Border_Radius.style.display = "inline-block"
  //     activeel_Border.style.display = "inline-block"
  //     activeel_Transform.style.display = "inline-block";
  //     activeel_Text_Shadow.style.display = "inline-none"
  //     activeel_Drop_Shadow.style.display = "inline-block";
  //     activeel_Background.style.display = "none"
  // } else if (element.getAttribute('element-type') == 'Text_Cover') {
  //     activeel_Text.style.display = "inline-block"
  //     activeel_Border_Radius.style.display = "inline-block"
  //     activeel_Border.style.display = "inline-block"
  //     activeel_Transform.style.display = "inline-block";
  //     activeel_Text_Shadow.style.display = "inline-block"
  //     activeel_Drop_Shadow.style.display = "inline-block";
  //     activeel_Background.style.display = "inline-block"
  // }
}
// const activeel_Transform = document.querySelector('#Interact_activeel_Transform');

export function getDropshadowfromStyleDiv(div) {
  var drop_shadow_h_shadow = div.querySelectorAll(".drop_shadow_h_shadow");
  var drop_shadow_v_shadow = div.querySelectorAll(".drop_shadow_v_shadow");
  var drop_shadow_color = div.querySelectorAll(".drop_shadow_color");
  var drop_shadow_blur = div.querySelectorAll(".drop_shadow_blur");
  var dropshadowdiv = div.querySelectorAll(".dropshadowdiv");
  var shadow_drop;
  if (dropshadowdiv.length == "0") {
    shadow_drop = "";
  } else {
    shadow_drop = `drop-shadow(${drop_shadow_h_shadow[0].value}px ${drop_shadow_v_shadow[0].value}px ${drop_shadow_blur[0].value}px ${drop_shadow_color[0].value})`;
    if (dropshadowdiv.length > 1) {
      for (var i = 1; i < dropshadowdiv.length; i++) {
        shadow_drop += ` drop-shadow(${drop_shadow_h_shadow[i].value}px ${drop_shadow_v_shadow[i].value}px ${drop_shadow_blur[i].value}px ${drop_shadow_color[i].value})`;
      }
    }
    // console.log(shadow_drop)
    // getactiveel().style.filter = shadow_drop
  }
  return shadow_drop;
}
export function getTextDropShaodw(div) {
  var drop_shadow_h_shadow = div.querySelectorAll(".drop_shadow_h_shadow");
  var drop_shadow_v_shadow = div.querySelectorAll(".drop_shadow_v_shadow");
  var drop_shadow_color = div.querySelectorAll(".drop_shadow_color");
  var drop_shadow_blur = div.querySelectorAll(".drop_shadow_blur");
  var dropshadowdiv = div.querySelectorAll(".dropshadowdiv");
  var shadow_drop;
  if (dropshadowdiv.length == "0") {
    shadow_drop = "";
  } else {
    shadow_drop = `${tinycolor(drop_shadow_color[0].value).toRgbString()} ${drop_shadow_h_shadow[0].value
      }px ${drop_shadow_v_shadow[0].value}px ${drop_shadow_blur[0].value}px`;
    if (dropshadowdiv.length > 1) {
      for (var i = 1; i < dropshadowdiv.length; i++) {
        shadow_drop += `${tinycolor(
          drop_shadow_color[i].value,
        ).toRgbString()}  ${drop_shadow_h_shadow[i].value}px ${drop_shadow_v_shadow[i].value
          }px ${drop_shadow_blur[i].value}px`;
      }
    }
    // console.log(shadow_drop)
    // getactiveel().style.filter = shadow_drop
  }
  return shadow_drop;
}
export function getTextshadowfromStyleDiv(Div) {
  var text_shadow_h_shadow = Div.querySelectorAll(".text_shadow_h_shadow");
  var text_shadow_v_shadow = Div.querySelectorAll(".text_shadow_v_shadow");
  var text_shadow_color = Div.querySelectorAll(".text_shadow_color");
  var text_shadow_blur = Div.querySelectorAll(".text_shadow_blur");
  var textshadowdiv = Div.querySelectorAll(".textshadowdiv");
  var shadow_text;
  if (textshadowdiv.length == "0") {
    // getactiveel().style.textShadow = ""
    shadow_text = "none";
  } else {
    shadow_text = `${text_shadow_h_shadow[0].value}px ${text_shadow_v_shadow[0].value}px ${text_shadow_blur[0].value}px ${text_shadow_color[0].value}`;
    if (textshadowdiv.length > 1) {
      for (var i = 1; i < textshadowdiv.length; i++) {
        shadow_text += `,${text_shadow_h_shadow[i].value}px ${text_shadow_v_shadow[i].value}px ${text_shadow_blur[i].value}px ${text_shadow_color[i].value}`;
      }
    }
    // console.log(shad)
    // getactiveel().style.textShadow = shadow_text
  }
  return shadow_text;
}

export function styleDivOninputUpdate() {

  activeel_Border_Radius.addEventListener("input", function () {
    var same_borders_div =
      activeel_Border_Radius.querySelector(".same_borders_div");
    if (same_borders_div.style.display == "grid") {
      if (
        same_borders_div.querySelector("input[type=checkbox]").checked == true
      ) {
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          prop: "border-radius",
          layer: true,
          value: `${same_borders_div.querySelector("[style-attr=border-radius]")
            .value || 0
            }% ${same_borders_div.querySelector(
              "[style-attr=border-radius-elliptic]",
            ).value || 0
            }%`,
        });
        // getactiveel().style.borderRadius = `${same_borders_div.querySelector('[style-attr=border-radius]').value || 0}% ${same_borders_div.querySelector('[style-attr=border-radius-elliptic]').value || 0}%`
      } else {
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          prop: "border-radius",
          layer: true,
          value: `${same_borders_div.querySelector("[style-attr=border-radius]")
            .value || 0
            }%`,
        });

        // getactiveel().style.borderRadius = `${same_borders_div.querySelector('[style-attr=border-radius]').value || 0}%`
      }
    } else {
      // getactiveel().style.borderRadius = "0"
      var diff_borders_div =
        activeel_Border_Radius.querySelector(".diff_borders_div");
      if (
        diff_borders_div
          .querySelector("[Main-style=border-top-right-radius]")
          .querySelector("input[type=checkbox]").checked == true
      ) {
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          prop: "borderTopRightRadius",
          layer: true,
          value:
            `${diff_borders_div.querySelector(
              "[style-attr=border-top-right-radius]",
            ).value
            }% ${diff_borders_div.querySelector(
              "[style-attr=border-top-right-radius-elliptic]",
            ).value
            }%` || 0,
        });

        // getactiveel().style.borderTopRightRadius = `${diff_borders_div.querySelector('[style-attr=border-top-right-radius]').value}% ${diff_borders_div.querySelector('[style-attr=border-top-right-radius-elliptic]').value}%`
      } else {
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          prop: "borderTopRightRadius",
          layer: true,
          value:
            `${diff_borders_div.querySelector(
              "[style-attr=border-top-right-radius]",
            ).value
            }%` || 0,
        });

        // getactiveel().style.borderTopRightRadius = `${diff_borders_div.querySelector('[style-attr=border-top-right-radius]').value}%`
      }
      //
      if (
        diff_borders_div
          .querySelector("[Main-style=border-top-left-radius]")
          .querySelector("input[type=checkbox]").checked == true
      ) {
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          prop: "borderTopLeftRadius",
          layer: true,
          value:
            `${diff_borders_div.querySelector(
              "[style-attr=border-top-left-radius]",
            ).value
            }% ${diff_borders_div.querySelector(
              "[style-attr=border-top-left-radius-elliptic]",
            ).value
            }%` || 0,
        });

        // getactiveel().style.borderTopLeftRadius = `${diff_borders_div.querySelector('[style-attr=border-top-left-radius]').value}% ${diff_borders_div.querySelector('[style-attr=border-top-left-radius-elliptic]').value}%`
      } else {
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          prop: "borderTopLeftRadius",
          layer: true,
          value:
            `${diff_borders_div.querySelector(
              "[style-attr=border-top-left-radius]",
            ).value
            }%` || 0,
        });

        // getactiveel().style.borderTopLeftRadius = `${diff_borders_div.querySelector('[style-attr=border-top-left-radius]').value}%`
      }
      //
      if (
        diff_borders_div
          .querySelector("[Main-style=border-bottom-left-radius]")
          .querySelector("input[type=checkbox]").checked == true
      ) {
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          prop: "borderBottomLeftRadius",
          layer: true,
          value:
            `${diff_borders_div.querySelector(
              "[style-attr=border-bottom-left-radius]",
            ).value
            }% ${diff_borders_div.querySelector(
              "[style-attr=border-bottom-left-radius-elliptic]",
            ).value
            }%` || 0,
        });

        // getactiveel().style.borderBottomLeftRadius = `${diff_borders_div.querySelector('[style-attr=border-bottom-left-radius]').value}% ${diff_borders_div.querySelector('[style-attr=border-bottom-left-radius-elliptic]').value}%`
      } else {
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          prop: "borderBottomLeftRadius",
          layer: true,
          value:
            `${diff_borders_div.querySelector(
              "[style-attr=border-bottom-left-radius]",
            ).value
            }%` || 0,
        });

        // getactiveel().style.borderBottomLeftRadius = `${diff_borders_div.querySelector('[style-attr=border-bottom-left-radius]').value}%`
      }
      //
      if (
        diff_borders_div
          .querySelector("[Main-style=border-bottom-right-radius]")
          .querySelector("input[type=checkbox]").checked == true
      ) {
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          prop: "borderBottomRightRadius",
          layer: true,
          value:
            `${diff_borders_div.querySelector(
              "[style-attr=border-bottom-right-radius]",
            ).value
            }% ${diff_borders_div.querySelector(
              "[style-attr=border-bottom-right-radius-elliptic]",
            ).value
            }%` || 0,
        });

        // getactiveel().style.borderBottomRightRadius = `${diff_borders_div.querySelector('[style-attr=border-bottom-right-radius]').value}% ${diff_borders_div.querySelector('[style-attr=border-bottom-right-radius-elliptic]').value}%`
      } else {
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          prop: "borderBottomRightRadius",
          layer: true,
          value:
            `${diff_borders_div.querySelector(
              "[style-attr=border-bottom-right-radius]",
            ).value
            }%` || 0,
        });

        // getactiveel().style.borderBottomRightRadius = `${diff_borders_div.querySelector('[style-attr=border-bottom-right-radius]').value}%`
      }
    }
  });

  // !!TRansform!!
  function transformlistener() {
    var styleDiv = activeel_Transform;
    var height = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=height]"))
    var width = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=width]"))
    var rotate = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=rotate]"))
    var positiony = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=position-y]"))
    var positionx = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=position-x]"))

    InteracStyles.UpdateStyles({
      element: getactiveel(),
      prop: "rotate",
      value: rotate + "deg",
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      prop: "height",
      value: height,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      prop: "width",
      value: width,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      prop: "position-y",
      value: positiony + "px",
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      prop: "position-x",
      value: positionx + "px",
    });
  }
  activeel_Transform.addEventListener("input", function () {
    transformlistener()
  });
  activeel_Transform.addEventListener("click", function () {
    transformlistener()
  });
  // var styleDiv = activeel_Transform;
  // var height = styleDiv.querySelector("[style-attr=height]").value || 0;
  // var width = styleDiv.querySelector("[style-attr=width]").value || 0;
  // var positionx = parseInt(
  //   styleDiv.querySelector("[style-attr=position-x]").value,
  // );
  // var positiony = parseInt(
  //   styleDiv.querySelector("[style-attr=position-y]").value,
  // );
  // var rotate = styleDiv.querySelector("[style-attr=rotate]").value || 0;


  // var skewX = styleDiv.querySelector('[style-attr=skewX]').value || 0;
  // var skewY = styleDiv.querySelector('[style-attr=skewY]').value || 0;
  // getactiveel().style.height = height + "px"
  // getactiveel().style.width = width + "px"


  // transformFunc.updateValue(getactiveel(), 'rotate', rotate + "deg")
  // transformFunc.updateValue(getactiveel(), 'height', height + "px")
  // transformFunc.updateValue(getactiveel(), 'width', width + "px")
  // transformFunc.updateValue(getactiveel(), 'position-x', positionx + "px")
  // transformFunc.updateValue(getactiveel(), 'position-y', positiony + "px")
  // !!!
  // transformFunc.updateValue(getactiveel(), 'skewX', skewX + "deg")
  // transformFunc.updateValue(getactiveel(), 'skewY', skewY + "deg")
  // transformFunc.updateValue(getactiveel(), 'translateX', skewY + "deg")
  // transformFunc.updateValue(getactiveel(), 'skewY', skewY + "deg")
  // transformFunc.updateValue(getactiveel(), 'translateX', positionx + "px")
  // transformFunc.updateValue(getactiveel(), 'translateY', positiony + "px")
  // });

  // !!TRANSFORM END
  activeel_Text.addEventListener("input", UpdateTextStyleDiv)
  activeel_Text.addEventListener("click", UpdateTextStyleDiv)
  function UpdateTextStyleDiv() {
    var styleDiv = activeel_Text;
    var fontFamily = styleDiv.querySelector("[style-attr=font-family]").value || "arial";
    var fontSize = styleDiv.querySelector("[style-attr=font-size]").value + "px";
    var color = styleDiv.querySelector("[style-attr=color]").value;
    var lineHeight = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=line-height]")) + "px"
    var wordSpacing = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=word-spacing]")) + "px"
    var letterSpacing = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=letter-spacing]")) + "px"
    var paddingLeft = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=padding-left]")) + "px"
    var paddingRight = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=padding-right]")) + "px"
    var paddingTop = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=padding-top]")) + "px"
    var paddingBottom = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=padding-bottom]")) + "px"
    var webkitTextStrokeColor = styleDiv.querySelector("[style-attr=-webkit-text-stroke-color]").value
    var webkitTextStrokeWidth = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=-webkit-text-stroke-width]")) + "px"
    console.log(paddingTop)
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "fontFamily",
      val: fontFamily,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "fontSize",
      val: fontSize,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "paddingRight",
      val: paddingRight,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "paddingBottom",
      val: paddingBottom,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "paddingTop",
      val: paddingTop,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "paddingLeft",
      val: paddingLeft,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "-webkitTextStrokeColor",
      val: webkitTextStrokeColor,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "-webkitTextStrokeWidth",
      val: webkitTextStrokeWidth,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "letterSpacing",
      val: letterSpacing,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "wordSpacing",
      val: wordSpacing,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "lineHeight",
      val: lineHeight,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "color",
      val: color,
    });
  }
  activeel_Text
    .querySelector("[Main-style=fontStyle]")
    .addEventListener("click", function () {
      console.log(this.style.background);
      if (this.style.background != "none") {
        this.style.background = "none";
        // getactiveel().style.fontStyle = 'normal'.
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "fontStyle",
          val: "normal",
        });
      } else {
        this.style.background = "#03a9f4";
        // getactiveel().style.fontStyle = 'italic'
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "fontStyle",
          val: "italic",
        });
      }
    });
  activeel_Text
    .querySelector("[Main-style=fontWeight]")
    .addEventListener("click", function () {
      if (this.style.background != "none") {
        this.style.background = "none";
        // getactiveel().style.fontWeight = 'normal'
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "fontWeight",
          val: "normal",
        });
      } else {
        this.style.background = "#03a9f4";
        // getactiveel().style.fontWeight = 'bold'
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "fontWeight",
          val: "bold",
        });
      }
    });

  activeel_Text
    .querySelector("[Main-style=textDecoration]")
    .addEventListener("click", function () {
      if (this.style.background != "none") {
        this.style.background = "none";
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "textDecoration",
          val: "none",
        });
      } else {
        this.style.background = "#03a9f4";
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "textDecoration",
          val: "underline",
        });
      }
    });

  for (el of activeel_Text.querySelectorAll("[Main-style=textAlign]")) {
    el.addEventListener("click", function () {
      if (this.style.background != "none") {
        this.style.background = "none";
        // getactiveel().style.textAlign = 'left';
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "textAlign",
          val: "left",
        });
      } else {
        for (el of activeel_Text.querySelectorAll("[Main-style=textAlign]")) {
          el.style.background = "none";
        }
        this.style.background = "#03a9f4";
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "textAlign",
          val: this.getAttribute("align"),
        });
      }
    });
  }
  // !! TExtEnd


  //?Textpathstart

  activeel_Textpath.addEventListener("input", UpdateTextpathStyleDiv)
  activeel_Textpath.addEventListener("click", UpdateTextpathStyleDiv)
  function UpdateTextpathStyleDiv() {
    var styleDiv = activeel_Textpath;
    var fontFamily = styleDiv.querySelector("[style-attr=font-family]").value || "arial";
    var fontSize = styleDiv.querySelector("[style-attr=font-size]").value + "px";
    var color = styleDiv.querySelector("[style-attr=color]").value;
    var wordSpacing = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=word-spacing]")) + "px"
    var letterSpacing = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=letter-spacing]")) + "px"
    var webkitTextStrokeColor = styleDiv.querySelector("[style-attr=-webkit-text-stroke-color]").value
    var webkitTextStrokeWidth = CreateStyleDiv.GetRangeValueDiv(styleDiv.querySelector("[main-style=-webkit-text-stroke-width]")) + "px"

    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "fontFamily",
      val: fontFamily,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "fontSize",
      val: fontSize,
    });

    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "-webkitTextStrokeColor",
      val: webkitTextStrokeColor,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "-webkitTextStrokeWidth",
      val: webkitTextStrokeWidth,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "letterSpacing",
      val: letterSpacing,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "wordSpacing",
      val: wordSpacing,
    });

    InteracStyles.UpdateStyles({
      element: getactiveel(),
      layer: true,
      prop: "color",
      val: color,
    });
  }
  activeel_Textpath
    .querySelector("[Main-style=fontStyle]")
    .addEventListener("click", function () {
      console.log(this.style.background);
      if (this.style.background != "none") {
        this.style.background = "none";
        // getactiveel().style.fontStyle = 'normal'.
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "fontStyle",
          val: "normal",
        });
      } else {
        this.style.background = "#03a9f4";
        // getactiveel().style.fontStyle = 'italic'
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "fontStyle",
          val: "italic",
        });
      }
    });
  activeel_Textpath
    .querySelector("[Main-style=fontWeight]")
    .addEventListener("click", function () {
      if (this.style.background != "none") {
        this.style.background = "none";
        // getactiveel().style.fontWeight = 'normal'
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "fontWeight",
          val: "normal",
        });
      } else {
        this.style.background = "#03a9f4";
        // getactiveel().style.fontWeight = 'bold'
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "fontWeight",
          val: "bold",
        });
      }
    });

  activeel_Textpath
    .querySelector("[Main-style=textDecoration]")
    .addEventListener("click", function () {
      if (this.style.background != "none") {
        this.style.background = "none";
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "textDecoration",
          val: "none",
        });
      } else {
        this.style.background = "#03a9f4";
        InteracStyles.UpdateStyles({
          element: getactiveel(),
          layer: true,
          prop: "textDecoration",
          val: "underline",
        });
      }
    });



  var styleDiv = activeel_Border;
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
  var bc = styleDiv
    .querySelector("[Main-style=border]")
    .querySelector("[style-attr=border-color]");
  var bw = styleDiv
    .querySelector("[Main-style=border]")
    .querySelector("[style-attr=border-width]");

  activeel_Border.addEventListener("input", function () {
    if (styleDiv.querySelector("input[type=checkbox]").checked == true) {
      InteracStyles.UpdateStyles({
        element: getactiveel(),
        prop: "border-style",
        value: `${bs.value || "none"}`,
        layer: true,
      });
      InteracStyles.UpdateStyles({
        element: getactiveel(),
        prop: "border-width",
        value: `${bw.value}px`,
        layer: true,
      });
      InteracStyles.UpdateStyles({
        element: getactiveel(),
        prop: "border-color",
        value: `${bc.value}`,
        layer: true,
      });
      // getactiveel().style.borderStyle = `${bs.value || 'none'}`
      // getactiveel().style.borderWidth = `${bw.value}px`
      // getactiveel().style.borderColor = `${bc.value}`
    } else {
      InteracStyles.UpdateStyles({
        element: getactiveel(),
        prop: "border-style",
        value: `${bst.value || "none"} ${bsr.value || "none"} ${bsb.value || "none"
          } ${bsl.value || "none"}`,
        layer: true,
      });
      InteracStyles.UpdateStyles({
        element: getactiveel(),
        prop: "border-width",
        value: `${bwt.value || 0}px ${bwr.value || 0}px ${bwb.value || 0}px ${bwl.value || 0
          }px`,
        layer: true,
      });
      InteracStyles.UpdateStyles({
        element: getactiveel(),
        prop: "border-color",
        value: `${bct.value} ${bcr.value} ${bcb.value} ${bcl.value}`,
        layer: true,
      });
      console.log(
        `${bwt.value || 0}px ${bwr.value || 0}px ${bwb.value || 0}px ${bwl.value || 0
        }px`,
      );
      // getactiveel().style.borderStyle = `${bst.value || 'none'} ${bsr.value || 'none'} ${bsb.value || 'none'} ${bsl.value || 'none'}`
      // getactiveel().style.borderWidth = `${bwt.value}px ${bwr.value}px ${bwb.value}px ${bwl.value}px`
      // getactiveel().style.borderColor = `${bct.value} ${bcr.value} ${bcb.value} ${bcl.value}`
    }
  });

  activeel_Text_Shadow.addEventListener("input", function () {
    // getactiveel().style.textShadow = getTextshadowfromStyleDiv(activeel_Text_Shadow)
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      prop: "textShadow",
      value: getTextshadowfromStyleDiv(activeel_Text_Shadow),
      layer: true,
    });
  });
  activeel_Text_Shadow.addEventListener("click", function () {
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      prop: "textShadow",
      value: getTextshadowfromStyleDiv(activeel_Text_Shadow),
      layer: true,
    });

    // getactiveel().style.textShadow = getTextshadowfromStyleDiv(activeel_Text_Shadow)
  });
  // !!!!
  activeel_Drop_Shadow.addEventListener("input", function () {
    var dropShadow = `${getDropshadowfromStyleDiv(activeel_Drop_Shadow,)}&&&${getTextDropShaodw(activeel_Drop_Shadow)}`;
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      prop: "dropShadow",
      value: dropShadow,
      layer: true,
    });

    // getactiveel().style.filter = getDropshadowfromStyleDiv(activeel_Drop_Shadow)
    // getactiveel().setAttribute('drop-shadow', getTextDropShaodw(activeel_Drop_Shadow))
  });
  activeel_Drop_Shadow.addEventListener("click", function () {
    var dropShadow = `${getDropshadowfromStyleDiv(
      activeel_Drop_Shadow,
    )}&&&${getTextDropShaodw(activeel_Drop_Shadow)}`;
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      prop: "dropShadow",
      value: dropShadow,
      layer: true,
    });
    // getactiveel().style.filter = getDropshadowfromStyleDiv(activeel_Drop_Shadow)
    // getactiveel().setAttribute('drop-shadow', getTextDropShaodw(activeel_Drop_Shadow))
  });
  // activeel_Drop_Shadow.addEventListener('input', function() {
  //     getDropshadowfromStyleDiv()
  // })
  // activeel_Drop_Shadow.addEventListener('click', function() {
  //     getDropshadowfromStyleDiv()
  // })

  activeel_Background.querySelector("input[type=color]").oninput = (e) => {
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      prop: "backgroundColor",
      value: activeel_Background.querySelector("input[type=color]").value,
      layer: true,
    });
    InteracStyles.UpdateStyles({
      element: getactiveel(),
      prop: "backgroundImage",
      value: "none",
      layer: true,
    });

    // getactiveel().style.backgroundColor = activeel_Background.querySelector('input[type=color]').value;
    // getactiveel().style.backgroundImage = "none"
    activeel_Background.querySelector(
      ".background_image_previewer",
    ).style.backgroundImage = "none";
  };
  activeel_Background.querySelector("input[type=checkbox]").oninput = (e) => {
    if (e.target.checked) {
      // getactiveel().style.backgroundColor = 'transparent';
      InteracStyles.UpdateStyles({
        element: getactiveel(),
        prop: "backgroundColor",
        value: "transparent",
        layer: true,
      });
      InteracStyles.UpdateStyles({
        element: getactiveel(),
        prop: "backgroundImage",
        value: "none",
        layer: true,
      });

      // getactiveel().style.backgroundImage = "none"
      activeel_Background.querySelector(
        ".background_image_previewer",
      ).style.backgroundImage = "none";
    } else {
      InteracStyles.UpdateStyles({
        element: getactiveel(),
        prop: "backgroundColor",
        value: activeel_Background.querySelector("input[type=color]").value,
        layer: true,
      });

      // getactiveel().style.backgroundColor = activeel_Background.querySelector('input[type=color]').value;
    }
  };
  // activeel_Background.addEventListener('input', function() {
  //     if (activeel_Background.querySelector('input[type=checkbox]').checked) {
  //         getactiveel().style.backgroundColor = 'transparent';

  //     } else {
  //         getactiveel().style.backgroundColor = activeel_Background.querySelector('input[type=color]').value;
  //     }
  //     getactiveel().style.backgroundImage = activeel_Background.querySelector('.background_image_previewer').style.BackgroundImage

  // })
}

// // ? BORDER RADIUS VARS
// const btlr = document.querySelector('.border_top_left_radius');
// const btlre = document.querySelector('.border_top_left_radius_eliptic');
// const btrr = document.querySelector('.border_top_right_radius');
// const btrre = document.querySelector('.border_top_right_radius_eliptic');
// const bbrr = document.querySelector('.border_bottom_right_radius');
// const bbrre = document.querySelector('.border_bottom_right_radius_eliptic');
// const bblr = document.querySelector('.border_bottom_left_radius');
// const bblre = document.querySelector('.border_bottom_left_radius_eliptic');
// const br = document.querySelector('.border_radius');
// const bre = document.querySelector('.border_radius_eliptic');
// // !!! REMEMBER TO JUST CHANGE T,B,L,R WHILE EDITING THE FUNC IN FUTURE"""""""
// export function style_activeel_borderRadius() {
//     var style_activeel_borderRadius = document.querySelector('#style_activeel_borderRadius');

// getchild(style_activeel_borderRadius, 'diff_borders_div').oninput = () => {

//     if (btlre.disabled == true) {
//         getactiveel().style.borderTopLeftRadius = btlr.value + "%"
//     } else {
//         getactiveel().style.borderTopLeftRadius = `${btlr.value}% ${btlre.value}%`
//     }
//     //     if (btrre.disabled == true) {
//     //         getactiveel().style.borderTopRightRadius = btrr.value + "%"
//     //     } else {
//     //         getactiveel().style.borderTopRightRadius = `${btrr.value}% ${btrre.value}%`
//     //     }
//     //     if (bbrre.disabled == true) {
//     //         getactiveel().style.borderBottomRightRadius = bbrr.value + "%"
//     //     } else {
//     //         getactiveel().style.borderBottomRightRadius = `${bbrr.value}% ${bbrre.value}%`
//     //     }
//     //     if (bblre.disabled == true) {
//     //         getactiveel().style.borderBottomLeftRadius = bblr.value + "%"
//     //     } else {
//     //         getactiveel().style.borderBottomLeftRadius = `${bblr.value}% ${bblre.value}%`
//     //     }
//     // }
//     // getchild(style_activeel_borderRadius, 'same_borders_div').oninput = () => {
//     //     if (bre.disabled == true) {
//     //         getactiveel().style.borderRadius = br.value + "%"
//     //     } else {
//     //         getactiveel().style.borderRadius = `${br.value}% / ${bre.value}%`
//     //     }
//     // }

// }

// export function activeel_borderRadius_updater() {
//     // var cbtlr = window.getComputedStyle(getactiveel()).getPropertyValue('border-top-left-radius');
//     // var cbtrr = window.getComputedStyle(getactiveel()).getPropertyValue('border-top-right-radius');
//     // var cbblr = window.getComputedStyle(getactiveel()).getPropertyValue('border-bottom-left-radius');
//     // var cbbrr = window.getComputedStyle(getactiveel()).getPropertyValue('border-bottom-right-radius');

//     // var btlrs = document.querySelector('#border_top_left_radius_switcher')
//     // var btrrs = document.querySelector('#border_top_right_radius_switcher')
//     // var bblrs = document.querySelector('#border_bottom_left_radius_switcher')
//     // var bbrrs = document.querySelector('#border_bottom_right_radius_switcher')
//     // var brs = document.querySelector('#border_radius_switcher')

//     // // console.log(btlr)
//     // // console.log(btlr.split(' '))
//     // // console.log(btlr.split(' ')[0])
//     // // console.log(btlr.split(' ')[1])

//     // btlr.value = parseInt(cbtlr.split(' ')[0])
//     // btlre.value = parseInt(cbtlr.split(' ')[1] || 0)
//     // if (btlre.value == '0') {
//     //     btlre.disabled = true
//     //     btlrs.checked ==false
//     // } else {
//     //     btlrs.checked ==true
//     //     btlre.disabled = false

//     // }

//     // btrr.value = parseInt(cbtrr.split(' ')[0])
//     // btrre.value = parseInt(cbtrr.split(' ')[1] || 0)
//     // if (btrre.value == '0') {
//     //     btrre.disabled = true
//     //     btrrs.checked ==false
//     // } else {
//     //     btrrs.checked ==true
//     //     btrre.disabled = false

//     // }

//     // bbrr.value = parseInt(cbbrr.split(' ')[0])
//     // bbrre.value = parseInt(cbbrr.split(' ')[1] || 0)
//     // if (bbrre.value == '0') {
//     //     bbrre.disabled = true
//     //     bbrrs.checked ==false
//     // } else {
//     //     bbrrs.checked ==true
//     //     bbrre.disabled = false

//     // }

//     // bblr.value = parseInt(cbblr.split(' ')[0])
//     // bblre.value = parseInt(cbblr.split(' ')[1] || 0)
//     // if (bblre.value == '0') {
//     //     bblre.disabled = true
//     //     bblrs.checked ==false
//     // } else {
//     //     bblrs.checked ==true
//     //     bblre.disabled = false

//     // }

//     // // ?SAME BORDER
//     // if (bbrr.value == btlr.value && btrr.value == bblr.value && btrr.value == bbrr.value) {
//     //     br.value = bbrr.value
//     // } else {
//     //     br.value = ""
//     // }

//     // if (bbrre.value != "0" && bbrre.value == btlre.value && btrre.value == bblre.value && btrre.value == bbrre.value) {
//     //     bre.value = bbrre.value
//     //     bre.disabled = false
//     //     brs.checked ==true
//     // } else {
//     //     bre.value = ""
//     //     bre.disabled = true
//     //     brs.checked ==false

//     // }
//     // console.log(brs)

// }

export const InteracStyles = {
  // json = {el,incdecsign,prop,value,layer}
  UpdateStyles: function (json) {
    var elements;
    //console.log(Array.isArray(json.element))
    if (NodeList.prototype.isPrototypeOf(json.element)) {
      elements = json.element
    } else {
      elements = []
      elements.push(json.element)
    }
    console.log(elements)
    for (var element of elements) {
      //?***
      var element = element;
      var prop = json.prop || json.property;
      var value = json.value || json.val;
      var layer = json.layer || false;
      var incdecsign = json.incdecsign;
      var border_el = element.children[0]
      var element_type = element.getAttribute("primary-element-type");
      var SvgEl = element_type == "Path";
      var TextEl = element_type == "Text";
      var TextpathEl = element_type == "Textpath";
      if (TextEl) {
        var Text_stylel = element.children[0]
      }
      if (TextpathEl) {
        var Textpath_stylel = element.children[0]
      }

      var HtmlEl = element_type == "Image" || element_type == "Text";
      // if (element_type == "Text") {
      var text_element = element.children[0];
      // }
      // console.log(element, prop, value, layer, incdecsign)
      var layer_element = document.querySelector(
        `[layer_element_name=${element.getAttribute("element_name")}]`,
      );
      var textpaddingelem = element.children[0].children[0]
      // console.log(CamelToHypehn(prop))\
      // console.log(prop)
      switch (CamelToHypehn(prop)) {
        case "border-style":
        case "border-color":
        case "background-image":
          // console.log(element.children[0])
          // console.log([snakeToCamel(prop)])
          if (layer) {
            // layer_element.style[snakeToCamel(prop)] = value;
          }
          element.children[0].style[snakeToCamel(prop)] = value || "";

          break;
        case "inner-text":
          if (element_type == "Text") {
            element.children[0].children[0].innerHTML = value;
            if (layer) {
              layer_element.innerText = value;
            }
          } else if (element_type == "Textpath") {
            element.children[0].innerHTML = value;
          }
          break;
        // !!!!
        case "height":
        case "width":
        case "position-y":
        case "position-x":
        case "rotate":
          if (incdecsign == undefined) {
            transformFunc.updateValue(element, prop, value);
          } else {
            if (incdecsign == "+") {
              transformFunc.updateValue(
                element,
                prop,
                transformFunc.getValue(element)[prop] + parseFloat(value),
              );
            } else if (incdecsign == "-") {
              transformFunc.updateValue(
                element,
                prop,
                transformFunc.getValue(element)[prop] - parseFloat(value),
              );
            }
          }
          break;

        case "border-top-width":
        case "border-left-width":
        case "border-right-width":
        case "border-bottom-width":
          if (incdecsign == undefined) {
            text_element.style[snakeToCamel(prop)] = value;
            if (layer) {
              layer_element.style[snakeToCamel(prop)] = value;
            }
          } else {
            if (incdecsign == "+") {
              // text_element.style[snakeToCamel(prop)] = parseInt(text_element.style[snakeToCamel(prop)]) + parseFloat(value) + "px"
              text_element.style[snakeToCamel(prop)] =
                parseInt(getComputedValue(text_element, prop)) +
                parseFloat(value) +
                "px";
            } else if (incdecsign == "-") {
              // text_element.style[snakeToCamel(prop)] = parseInt(text_element.style[snakeToCamel(prop)]) - parseFloat(value) + "px"
              text_element.style[snakeToCamel(prop)] =
                parseInt(getComputedValue(text_element, prop)) -
                parseFloat(value) +
                "px";
            }
          }
          break;
        case "font-family":
        case "text-shadow":
        case "font-size":
        case "letter-spacing":
        case "word-spacing":
        case "line-height":
        case "font-weight":
        case "font-style":
        case "text-align":
        case "text-decoration":
          // element.children[0].children[0].style[snakeToCamel(prop)] = value;
          element.children[0].style[snakeToCamel(prop)] = value;
          break;
        case "color":
          if (TextEl) {
            Text_stylel.style.color = value
          } else if (TextpathEl) {
            Textpath_stylel.style.fill = value
          }
          break
        case "-webkit-text-stroke-width":
          if (TextEl) {
            Text_stylel.style[prop] = value
          } else if (TextpathEl) {
            Textpath_stylel.style.strokeWidth = value
          }
          break
        case "-webkit-text-stroke-color":
          if (TextEl) {
            Text_stylel.style[prop] = value
          } else if (TextpathEl) {
            Textpath_stylel.style.stroke = value
          }
          break


        case "drop-shadow":
          if (SvgEl) {
            element.style.filter = value.split("&&&")[0];
            element.setAttribute("dropShadow", value.split("&&&")[1]);
          } else {
            element.children[0].style.filter = value.split("&&&")[0];
            element.children[0].setAttribute("dropShadow", value.split("&&&")[1]);
          }
          break;

        case "link":
          var a = document.createElement("a");
          a.classList.add("Interact_link");
          element.insertBefore(a.element.children[0]);
          break;

        case "display":
          console.log([snakeToCamel(prop)]);
          element.style[snakeToCamel(prop)] = value;
          break;
        case "border-top-left-radius":
        case "border-top-right-radius":
        case "border-bottom-left-radius":
        case "border-bottom-right-radius":
          if (incdecsign != true) {
            element.children[0].style[snakeToCamel(prop)] = value;
            if (layer) {
              // layer_element.style[snakeToCamel(prop)] = value;
            }
          } else {
            var prev_val = getComputedValue(element.children[0], prop).split(" ");
            if (incdecsign == "+") {
              if (prev_val.length == 2) {
                element.children[0].style[snakeToCamel(prop)] = `${parseInt(prev_val[0]) + parseFloat(value)
                  }% ${parseInt(prev_val[1]) + parseFloat(value)}%`;
              } else {
                element.children[0].style[snakeToCamel(prop)] = `${parseInt(prev_val[0]) + parseFloat(value)
                  }%`;
              }
              element.children[0].style[snakeToCamel(prop)] =
                parseInt(getComputedValue(text_element, prop)) +
                parseFloat(value) +
                "px";
            } else if (incdecsign == "-") {
              if (prev_val.length == 2) {
                element.children[0].style[snakeToCamel(prop)] = `${parseInt(prev_val[0]) - parseFloat(value)
                  }% ${parseInt(prev_val[1]) + parseFloat(value)}%`;
              } else {
                element.children[0].style[snakeToCamel(prop)] = `${parseInt(prev_val[0]) - parseFloat(value)
                  }%`;
              }
            }
          }
          break;
        case "border-radius":
          InteracStyles.UpdateStyles({
            element: element,
            prop: "border-top-left-radius",
            value: value,
            layer: layer,
          });
          InteracStyles.UpdateStyles({

            element: element,
            prop: "border-top-right-radius",
            value: value,
            layer: layer,
          });
          InteracStyles.UpdateStyles({
            element: element,
            prop: "border-bottom-left-radius",
            value: value,
            layer: layer,
          });
          InteracStyles.UpdateStyles({
            element: element,
            prop: "border-bottom-right-radius",
            value: value,
            layer: layer,
          });
          break;
        case "border-width":
          element.children[0].style.borderWidth = value;
          break;
        case "background-color":
          if (SvgEl) {
            element.style.fill = value;
          } else {
            element.children[0].style.backgroundColor = value;
          }
          break;
        case "border-top-color":
          border_el.style.borderColor = `${value} ${getComputedValue(border_el, "border-right-color")} ${getComputedValue(border_el, "border-bottom-color")} ${getComputedValue(border_el, "border-left-color")}`
          break
        case "border-left-color":
          border_el.style.borderColor = `${getComputedValue(border_el, "border-top-color")} ${getComputedValue(border_el, "border-right-color")} ${getComputedValue(border_el, "border-bottom-color")} ${value}`
          break
        case "border-bottom-color":
          border_el.style.borderColor = `${getComputedValue(border_el, "border-top-color")} ${getComputedValue(border_el, "border-right-color")} ${value} ${getComputedValue(border_el, "border-left-color")}`
          break
        case "border-right-color":
          border_el.style.borderColor = `${getComputedValue(border_el, "border-top-color")} ${value} ${getComputedValue(border_el, "border-bottom-color")} ${getComputedValue(border_el, "border-left-color")}`
          break
        case "border-top-style":
          border_el.style.borderTopStyle = `${value} ${getComputedValue(border_el, "border-right-style")} ${getComputedValue(border_el, "border-bottom-style")} ${getComputedValue(border_el, "border-left-style")}`
          break
        case "border-left-style":
          border_el.style.borderLeftStyle = `${getComputedValue(border_el, "border-top-style")} ${getComputedValue(border_el, "border-right-style")} ${getComputedValue(border_el, "border-bottom-style")} ${value}`
          break
        case "border-bottom-style":
          border_el.style.borderBottomStyle = `${getComputedValue(border_el, "border-top-style")} ${getComputedValue(border_el, "border-right-style")} ${value} ${getComputedValue(border_el, "border-left-style")}`
          break
        case "border-right-style":
          border_el.style.borderRightStyle = `${getComputedValue(border_el, "border-top-style")} ${value} ${getComputedValue(border_el, "border-bottom-style")} ${getComputedValue(border_el, "border-left-style")}`
          break
        case "border-top-width":
          if (incdecsign == undefined) {
            border_el.style.borderColor = `${parseInt(value)}px ${getComputedValue(border_el, "border-right-width")} ${getComputedValue(border_el, "border-bottom-width")} ${getComputedValue(border_el, "border-left-width")}`
          }
          else {
            if (incdecsign == "+") {
              border_el.style.borderColor = `${parseInt(getComputedValue(border_el, "border-top-width")) + parseInt(value)}px ${getComputedValue(border_el, "border-right-width")} ${getComputedValue(border_el, "border-bottom-width")} ${getComputedValue(border_el, "border-left-width")}`

            } else if (incdecsign == "-") {
              border_el.style.borderColor = `${parseInt(getComputedValue(border_el, "border-top-width")) - parseInt(value)}px ${getComputedValue(border_el, "border-right-width")} ${getComputedValue(border_el, "border-bottom-width")} ${getComputedValue(border_el, "border-left-width")}`

            }
          }
          break
        case "padding-top":
          console.log(value)
          if (incdecsign == undefined) {
            textpaddingelem.style.padding = `${parseInt(value)}px ${getComputedValue(textpaddingelem, "padding-right")} ${getComputedValue(textpaddingelem, "padding-bottom")} ${getComputedValue(textpaddingelem, "padding-left")}`

            console.log(`${parseInt(value)}px ${getComputedValue(textpaddingelem, "padding-right")} ${getComputedValue(textpaddingelem, "padding-bottom")} ${getComputedValue(textpaddingelem, "padding-left")}`)
            console.log(textpaddingelem)
          }
          else {
            if (incdecsign == "+") {
              border_el.style.borderColor = `${parseInt(getComputedValue(border_el, "border-top-width")) + parseInt(value)}px ${getComputedValue(border_el, "border-right-width")} ${getComputedValue(border_el, "border-bottom-width")} ${getComputedValue(border_el, "border-left-width")}`

            } else if (incdecsign == "-") {
              border_el.style.borderColor = `${parseInt(getComputedValue(border_el, "border-top-width")) - parseInt(value)}px ${getComputedValue(border_el, "border-right-width")} ${getComputedValue(border_el, "border-bottom-width")} ${getComputedValue(border_el, "border-left-width")}`

            }
          }
          break
        case "padding-left":
          if (incdecsign == undefined) {
            textpaddingelem.style.padding = `${getComputedValue(textpaddingelem, "padding-top")} ${getComputedValue(textpaddingelem, "padding-right")} ${getComputedValue(textpaddingelem, "padding-bottom")} ${parseInt(value)}px`
          }
          else {
            if (incdecsign == "+") {
              border_el.style.borderColor = `${parseInt(getComputedValue(border_el, "border-top-width")) + parseInt(value)}px ${getComputedValue(border_el, "border-right-width")} ${getComputedValue(border_el, "border-bottom-width")} ${getComputedValue(border_el, "border-left-width")}`

            } else if (incdecsign == "-") {
              border_el.style.borderColor = `${parseInt(getComputedValue(border_el, "border-top-width")) - parseInt(value)}px ${getComputedValue(border_el, "border-right-width")} ${getComputedValue(border_el, "border-bottom-width")} ${getComputedValue(border_el, "border-left-width")}`

            }
          }
          break
        case "padding-right":
          if (incdecsign == undefined) {
            textpaddingelem.style.padding = `${getComputedValue(textpaddingelem, "padding-top")} ${parseInt(value)}px ${getComputedValue(textpaddingelem, "padding-bottom")} ${getComputedValue(textpaddingelem, "padding-left")}`
          }
          else {
            if (incdecsign == "+") {
              border_el.style.borderColor = `${parseInt(getComputedValue(border_el, "border-top-width")) + parseInt(value)}px ${getComputedValue(border_el, "border-right-width")} ${getComputedValue(border_el, "border-bottom-width")} ${getComputedValue(border_el, "border-left-width")}`

            } else if (incdecsign == "-") {
              border_el.style.borderColor = `${parseInt(getComputedValue(border_el, "border-top-width")) - parseInt(value)}px ${getComputedValue(border_el, "border-right-width")} ${getComputedValue(border_el, "border-bottom-width")} ${getComputedValue(border_el, "border-left-width")}`

            }
          }
          break
        case "padding-bottom":
          textpaddingelem = textpaddingelem.parentNode
          if (incdecsign == undefined) {
            textpaddingelem.style.padding = `${getComputedValue(textpaddingelem, "padding-top")} ${getComputedValue(textpaddingelem, "padding-right")} ${parseInt(value)}px  ${getComputedValue(textpaddingelem, "padding-left")}`
          }
          else {
            if (incdecsign == "+") {
              border_el.style.borderColor = `${parseInt(getComputedValue(border_el, "border-top-width")) + parseInt(value)}px ${getComputedValue(border_el, "border-right-width")} ${getComputedValue(border_el, "border-bottom-width")} ${getComputedValue(border_el, "border-left-width")}`

            } else if (incdecsign == "-") {
              border_el.style.borderColor = `${parseInt(getComputedValue(border_el, "border-top-width")) - parseInt(value)}px ${getComputedValue(border_el, "border-right-width")} ${getComputedValue(border_el, "border-bottom-width")} ${getComputedValue(border_el, "border-left-width")}`

            }
          }
          break
        case "stroke-width":
          element.style[prop] = parseFloat(value) + "px"
        case "stroke":
          element.style[prop] = value
        case "src":
          BoxContainer.ChangeSrc(element, value)
          break
        // if (element_type == "Audio" || element_type == "YoutubeVideo" || ) {
        //   var json =  { src: value,element_name:element.getAttribute('element_name'),element_stake : element.getAttribute('element_stake') }
        //   BoxContainer.Add(element,json)

        //   //BoxContainer.delete(element)
        //   // element.remove()
        // }
        // if (element_type == "YoutubeVideo") {
        //   BoxContainer.ChangeSrc(element,value)
        //   //var json =  { src: value,element_name:element.getAttribute('element_name'),element_stake : element.getAttribute('element_stake'),return:true }
        //   //BoxContainer.Add(element, json)
        //   //element.remove()
        //   //BoxContainer.delete(element)
        //   // element.remove()
        // }
        // if (element_type == "Video") {
        //   var json =  { src: value,element_name:element.getAttribute('element_name'),element_stake : element.getAttribute('element_stake') }
        //   BoxContainer.Add(element, json)
        //   BoxContainer.delete(element)
        //   // element.remove()
        // }
        // case "border-bottom-right-radius":
        //   if (incdecsign == undefined) {
        //     border_el.style.borderBottomRightRadius = `${parseInt(value)}px`}         
        //     else{
        //       if (incdecsign == "+") {
        //     border_el.style.borderBottomRightRadius = `${parseInt(value)}px`

        //       } else if (incdecsign == "-"){
        //     border_el.style.borderColor = `${parseInt(getComputedValue(border_el,"border-top-width")) - parseInt(value)}px ${getComputedValue(border_el,"border-right-width")} ${getComputedValue(border_el,"border-bottom-width")} ${getComputedValue(border_el,"border-left-width")}`       

        // }
        // }

        // break
      }
    }
  },

  getValue: function (json) {
    var element = json.element;
    var prop = json.prop;
    var element_type = element.getAttribute("primary-element-type");
    var SvgEl = element_type == "Path";
    var TextEl = element_type == "Text";
    var TextpathEl = element_type == "Textpath";
    if (TextEl) {
      var Text_stylel = element.children[0]
    }
    if (TextpathEl) {
      var Textpath_stylel = element.children[0]
    }
    var textpaddingelem = element.children[0].children[0]
    switch (CamelToHypehn(prop)) {
      case "inner-text":
        if (element_type == "Textpath") {
          return element.children[0].innerHTML || "";
        } else if (element_type == "Text") {
          return element.children[0].children[0].innerHTML || "";
        }
        break;
      case "drop-shadow":
        if (SvgEl) {
          if (element.style.filter != "") {
            return `${element.style.filter}&&&${element.getAttribute("dropShadow")}`;
          }
        } else {
          if (element.children[0].style.filter != "") {
            return `${element.children[0].style.filter}&&&${element.children[0].getAttribute("dropShadow")}`;
          }
        }
        break;
      case "src":
        if (element_type == 'Audio' || element_type == 'Video') {
          return element.querySelector('source').src
        } else if (element_type == 'Image') {
          return element.querySelector('img').src
        } else if (element_type == 'YoutubeVideo') {
          return element.getAttribute('yt-id')
        }
        break
      case "background-color":
        if (SvgEl) {
          if (element.style.fill != "" && element.style.fill != "transparent") {
            return tinycolor(element.style.fill).toHexString()
          }
          else {
            return element.style.fill
          }
          // return tinycolor(element.style.fill).toHexString() || "transparent";
        } else {
          if (element.children[0].style.backgroundColor != "" && element.children[0].style.backgroundColor != "transparent") {
            return tinycolor(element.children[0].style.backgroundColor).toHexString()
          }
          else {
            return element.children[0].style.backgroundColor
          }
        }
        break;
      case "background-image":
        if (SvgEl) {
          return element.style.fill || "none";
        } else {
          return element.children[0].style.backgroundImage || "none";
        }
        break;
      case "height":
      case "width":
      case "position-x":
      case "position-y":
      case "rotate":
        return transformFunc.getValue(element)[snakeToCamel(prop)] || "";
        break;
      case "border-style":
      case "border-color":
      case "border-width":
      case "border-radius":
        return element.children[0].style[snakeToCamel(prop)];
        break;
      case "color":
        if (TextEl) {
          if (Text_stylel.style[prop] != "") {
            return tinycolor(Text_stylel.style[prop]).toHexString()
          }
          else {
            return "#000000"
          }
        } else if (TextpathEl) {
          //console.log(Textpath_stylel.style.fill)
          if (Textpath_stylel.style.fill != "") {
            return tinycolor(Textpath_stylel.style.fill).toHexString()
          }
          else {
            return "#000000"
          }

        }
        break
      case "-webkit-text-stroke-color":
        if (TextEl) {
          if (Text_stylel.style[prop] != "") {
            return tinycolor(Text_stylel.style[prop]).toHexString()
          }
          else {
            return Text_stylel.style[prop]
          }
        } else if (TextpathEl) {
          if (Textpath_stylel.style.fill != "") {
            return tinycolor(Textpath_stylel.style.stroke).toHexString()
          }
          else {
            return "none"
          }

        }
        // if (!SvgEl) {
        //   return tinycolor(element.children[0].style[prop]).toHexString() || "none";
        // }
        break
      case "-webkit-text-stroke-width":
        if (TextEl) {
          return Text_stylel.style[prop]
        } else if (TextpathEl) {
          return Textpath_stylel.style.strokeWidth || 0
        }
        break
      case "padding-right":
      case "padding-top":
      case "padding-left":
        if (TextEl) {
          if (getComputedValue(textpaddingelem, prop) == "") {
            BoxContainer.svg().append(element);
            var data = getComputedValue(textpaddingelem, prop);
            element.remove();
            console.log(data)
            return data;
          } else {
            // console.log(getComputedValue(element.children[0], prop));
            return getComputedValue(textpaddingelem, prop);
          }
        }

        break
      case "padding-bottom":
        if (TextEl) {
          textpaddingelem = textpaddingelem.parentNode
          if (getComputedValue(textpaddingelem, prop) == "") {
            BoxContainer.svg().append(element);
            var data = getComputedValue(textpaddingelem, prop);
            element.remove();
            console.log(data)
            return data;
          } else {
            // console.log(getComputedValue(element.children[0], prop));
            return getComputedValue(textpaddingelem, prop);
          }
        }

        break

      case "text-shadow":
      case "word-spacing":
      case "line-height":
      case "font-size":
      case "text-shadow":
        if (!SvgEl) {
          if (getComputedValue(element.children[0], prop) == "") {
            BoxContainer.svg().append(element);
            var data = getComputedValue(element.children[0], prop);
            element.remove();
            console.log(data)
            return data;
          } else {
            // console.log(getComputedValue(element.children[0], prop));
            return getComputedValue(element.children[0], prop);
          }
        }
        break

      // if (getComputedValue(element.children[0].children[0], prop) == "") {
      //   console.log(true);
      //   BoxContainer.svg().append(element);
      //   var data = getComputedValue(element.children[0].children[0], prop);
      //   element.remove();

      //   return data;
      // } else {
      //   console.log(false);
      //   console.log(getComputedValue(element.children[0].children[0], prop));
      //   return getComputedValue(element.children[0].children[0], prop);
      // }
      case "font-weight":
        return element.children[0].style[prop] || "normal"
        break
      case "font-style":
        return element.children[0].style[prop] || "normal"
        break
      case "text-decoration":
        return element.children[0].style[prop] || "none"
        break
      case "text-align":
        return element.children[0].style[prop] || "left"
        break

      case "font-family":
        // console.log(getComputedValue(element.children[0], prop))
        if (getComputedValue(element.children[0], prop) == "") {
          BoxContainer.svg().append(element);
          var data = getComputedValue(element.children[0], prop);
          element.remove();
          // console.log(getComputedValue(element.children[0], prop).replace(/['"]+/g, ''))
          return data.replace(/['"]+/g, '')
        } else {
          return getComputedValue(element.children[0], prop).replace(/['"]+/g, '')

        }
        break

      case "letter-spacing":
        if (getComputedValue(element.children[0], prop) == "") {
          BoxContainer.svg().append(element);
          var data = getComputedValue(element.children[0], prop);
          element.remove();
          // console.log(getComputedValue(element.children[0], "letter-spacing"))
          if (data == "normal") {
            return 0
          } else {
            // console.log(getComputedValue(element.children[0], "letter-spacing"))
            return data
          }
        } else {
          var data = getComputedValue(element.children[0], prop);
          // console.log(getComputedValue(element.children[0], "letter-spacing"))
          if (data == "normal") {
            return 0
          } else {
            // console.log(getComputedValue(element.children[0], "letter-spacing"))
            return data
          }
        }
        break
    }
  },
};

// if (iSnonSvg) {
//     if (json.incdecsign == undefined) {
//         el.style[snakeToCamel(prop)] = parseInt(el.style[snakeToCamel(prop)]) + parseFloat(value) + "px" }
//         else{

//         }
// }
// export const border_radius_style_switcher = () => {
//     var border_radius_style_switcher_ = document.querySelectorAll('.border_radius_style_switcher');
//     for (el of border_radius_style_switcher_)
//         el.onclick = (e) => {
//             if (e.target.checked) {
//                 e.target.parentNode.previousElementSibling.disabled = false
//             } else {
//                 e.target.parentNode.previousElementSibling.disabled = true

//             }
//         }

// }

// export const border_style_switcher = () => {
//     var border_style_switcher_ = document.querySelectorAll('.border_style_switcher');
//     for (el of border_style_switcher_) {
//         el.oninput = (e) => {
//             if (e.target.checked) {
//                 console.log(el)
//                 console.log(e.target.parentNode.parentNode.parentNode)
//                 console.log(getchild(el.parentNode.parentNode.parentNode, "same_borders_div"))
//                 getchild(e.target.parentNode.parentNode.parentNode, "same_borders_div").style.display = "block";
//                 getchild(e.target.parentNode.parentNode.parentNode, "diff_borders_div").style.display = "none";

//             } else {
//                 getchild(e.target.parentNode.parentNode.parentNode, "same_borders_div").style.display = "none";
//                 getchild(e.target.parentNode.parentNode.parentNode, "diff_borders_div").style.display = "block";
//             }
//         }
//     }

// }

export function refresh_style_div() {
  var textshadowdiv = document.querySelectorAll(".textshadowdiv");
  for (var el of textshadowdiv) {
    el.remove();
  }
  var boxshadowdiv = document.querySelectorAll(".boxshadowdiv");
  for (var el of boxshadowdiv) {
    el.remove();
  }
}

export function style_textShadow_updater() {
  if (
    window.getComputedStyle(getactiveel()).getPropertyValue("text-shadow") !==
    "none"
  ) {
    var got_text_shadow = window
      .getComputedStyle(getactiveel())
      .getPropertyValue("text-shadow");
    const regex = /\(([^)]+)\)/g;
    // //var result = regex.exec(got_text_shadow)
    var result;
    while ((result = regex.exec(got_text_shadow)) !== null) {
      //             // var result = regex.exec(got_text_shadow)
      var rgb_code = result[1];
      //             console.log(rgb_code)
      var hex_color = tinycolor("rgb(" + `${rgb_code}` + ")").toHexString();
      //             console.log(hex_color)
      got_text_shadow = got_text_shadow.replace(
        "rgb(" + `${rgb_code}` + ")",
        hex_color,
      );
    }
    //                 // console.log(got_text_shadow)

    var shadow_arr = got_text_shadow.split("#");
    shadow_arr.shift();
    for (var arr of shadow_arr) {
      var arr_splited = arr.split(" ");
      if (arr_splited[arr_splited.length - 1] == " ") {
        arr_splited.pop();
      }
      var color = "#" + arr_splited[0];
      var offsetX = parseInt(arr_splited[1]);
      var offsetY = parseInt(arr_splited[2]);
      var blur = parseInt(arr_splited[3]);
      add_textshadow(
        color,
        offsetX,
        offsetY,
        blur,
        document.querySelector("#add_textshadow"),
      );
    }
  }
}

export function style_boxShadow_updater() {
  if (
    window.getComputedStyle(getactiveel()).getPropertyValue("box-shadow") !==
    "none"
  ) {
    //         // var got_text_shadow = getactiveel().style.textShadow;
    var got_box_shadow = window
      .getComputedStyle(getactiveel())
      .getPropertyValue("box-shadow");
    //             // rgb(17, 30, 41) 2px 2px 2px, rgb(25, 37, 4) 9px -1px 10px
    const regex = /\(([^)]+)\)/g;
    //             // var result = regex.exec(got_text_shadow)
    var result;
    while ((result = regex.exec(got_box_shadow)) !== null) {
      //             // var result = regex.exec(got_text_shadow)
      var rgb_code = result[1];
      //                 // console.log(rgb_code)
      var hex_color = tinycolor("rgb(" + `${rgb_code}` + ")").toHexString();
      // console.log(hex_color)
      got_box_shadow = got_box_shadow.replace(
        "rgb(" + `${rgb_code}` + ")",
        hex_color,
      );
      //                 // console.log(got_text_shadow)

      //         }

      var shadow_arr = got_box_shadow.split("#");
      //         // console.log(shadow_arr)
      shadow_arr.shift();
      // console.log("box_shadw", shadow_arr)

      for (var arr of shadow_arr) {
        var arr_splited = arr.split(" ");
        // console.log(arr_splited[5])

        if (arr_splited[arr_splited.length - 1] == " ") {
          arr_splited.pop();
        }
      }
      var color = "#" + arr_splited[0];
      var offsetX = parseInt(arr_splited[1]);

      var offsetY = parseInt(arr_splited[2]);
      var blur = parseInt(arr_splited[3]);
      var spread = parseInt(arr_splited[4]);
      console.log(arr_splited[5]);
      if (arr_splited[5] !== undefined) {
        arr_splited[5] = arr_splited[5].replace(",", "");
      }
      if (arr_splited[5] == "inset") {
        // console.log(arr_splited[5])
        var inset = true;
      } else {
        var inset = false;
      }
      add_boxshadow(color, offsetX, offsetY, blur, spread, inset);
    }
  }
}

export function cancel_shadow() {
  var cancel_shadow = document.querySelectorAll(".delete_myprnt");
  for (el of cancel_shadow) {
    el.addEventListener("click", function () {
      this.parentNode.remove();

      applying_text_shadow();
      applying_box_shadow();
    });
  }
}

export function box_shadow_type_switcher() {
  // console.log('switcher')
  var box_shadow_inset = document.querySelectorAll(".boxshadow_inset");
  var box_shadow_outset = document.querySelectorAll(".boxshadow_outset");
  // console.log(box_shadow_inset)
  for (el of box_shadow_inset) {
    el.onclick = (e) => {
      target = e.target;
      if (target.classList.contains("boxshadow_inset")) {
        target.style.background = "blue";
        target.nextElementSibling.style.background = "none";
      } else {
        target.parentNode.style.background = "blue";
        target.parentNode.nextElementSibling.style.background = "none";
      }
    };
  }
  for (elem of box_shadow_outset) {
    elem.onclick = (e) => {
      target = e.target;
      if (target.classList.contains("boxshadow_outset")) {
        target.style.background = "blue";
        target.previousElementSibling.style.background = "none";
      } else {
        target.parentNode.style.background = "blue";
        target.parentNode.previousElementSibling.style.background = "none";
      }
    };
  }
}

// ! REMOVED
export function applying_box_shadow() {
  var boxshadow_x = document.querySelectorAll(".boxshadow_x");
  var boxshadow_y = document.querySelectorAll(".boxshadow_y");
  var boxshadow_blur = document.querySelectorAll(".boxshadow_blur");
  var boxshadow_spread = document.querySelectorAll(".boxshadow_spread");
  var boxshadow_color = document.querySelectorAll(".boxshadow_color");
  var boxshadow_inset = document.querySelectorAll(".boxshadow_inset");
  // var boxshadow_inset_false = document.querySelectorAll('.boxshadow_inset_false')
  var boxshadowdiv = document.querySelectorAll(".boxshadowdiv");
  // console.log(getactiveel().style.boxShadow)
  // boxshadow_color.forEach(el => {
  //     var hex_color = tinycolor(el.value).toHexString()
  //     el.value = hex_color
  // })
  if (boxshadowdiv.length == "0") {
    getactiveel().style.boxShadow = "none";
  } else {
    var shadow = `${boxshadow_x[0].value}px ${boxshadow_y[0].value}px ${boxshadow_blur[0].value}px ${boxshadow_spread[0].value}px ${boxshadow_color[0].value}`;
    if (boxshadow_inset[0].style.background == "blue") {
      shadow += " inset";
    }
    if (boxshadowdiv.length > 1) {
      for (var i = 1; i < boxshadowdiv.length; i++) {
        shadow += `,${boxshadow_x[i].value}px ${boxshadow_y[i].value}px ${boxshadow_blur[i].value}px ${boxshadow_spread[i].value}px ${boxshadow_color[i].value}`;

        if (boxshadow_inset[i].style.background == "blue") {
          shadow += " inset";
        }
      }
    }
    getactiveel().style.boxShadow = shadow;
    // console.log(shadow)
  }
}

// !oninput
export function apply_box_shadow() {
  var boxshadow_x = document.querySelectorAll(".boxshadow_x");
  var boxshadow_y = document.querySelectorAll(".boxshadow_y");
  var boxshadow_blur = document.querySelectorAll(".boxshadow_blur");
  var boxshadow_spread = document.querySelectorAll(".boxshadow_spread");
  var boxshadow_color = document.querySelectorAll(".boxshadow_color");
  var boxshadow_inset = document.querySelectorAll(".boxshadow_inset");
  // var boxshadow_inset_false = document.querySelectorAll('.boxshadow_inset_false')
  var boxshadowdiv = document.querySelectorAll(".boxshadowdiv");
  // console.log(getactiveel().style.boxShadow)
  // boxshadow_color.forEach(el => {
  //     var hex_color = tinycolor(el.value).toHexString()
  //     el.value = hex_color
  // })
  for (el of boxshadowdiv) {
    el.oninput = () => {
      // correct_value()
      // boxshadow_color.forEach(el => {
      //     console.log(el.value)
      //     var hex_color = tinycolor(el.value).toHexString()
      //     el.value = hex_color
      //     console.log(el.value)
      // })
      var shadow = `${boxshadow_x[0].value}px ${boxshadow_y[0].value}px ${boxshadow_blur[0].value}px ${boxshadow_spread[0].value}px ${boxshadow_color[0].value}`;
      if (boxshadow_inset[0].style.background == "blue") {
        shadow += " inset";
      }
      // console.log(shadow)
      if (boxshadowdiv.length > 1) {
        for (var i = 1; i < boxshadowdiv.length; i++) {
          shadow += `,${boxshadow_x[i].value}px ${boxshadow_y[i].value}px ${boxshadow_blur[i].value}px ${boxshadow_spread[i].value}px ${boxshadow_color[i].value}`;
          if (boxshadow_inset[i].style.background == "blue") {
            shadow += " inset";
          }
        }
      }
      // console.log(shadow)
      getactiveel().style.boxShadow = shadow;
      // console.log(getactiveel().style.boxShadow)
    };
  }
}

export function add_boxshadow(color, offsetX, offsetY, blur, spread, inset) {
  var new_box_shadow_div = boxshadowdiv_clone.cloneNode(true);
  for (var i = 0; i < new_box_shadow_div.children.length; i++) {
    // console.log(new_box_shadow_div.children[i].classList.contains("text_shadow_h_shadow"))
    if (new_box_shadow_div.children[i].classList.contains("boxshadow_x")) {
      new_box_shadow_div.children[i].value = offsetX;
    }
    if (new_box_shadow_div.children[i].classList.contains("boxshadow_y")) {
      new_box_shadow_div.children[i].value = offsetY;
    }
    if (new_box_shadow_div.children[i].classList.contains("boxshadow_color")) {
      new_box_shadow_div.children[i].value = color;
    }
    if (new_box_shadow_div.children[i].classList.contains("boxshadow_blur")) {
      new_box_shadow_div.children[i].value = blur;
    }
    if (new_box_shadow_div.children[i].classList.contains("boxshadow_spread")) {
      new_box_shadow_div.children[i].value = spread;
    }
    if (inset == true) {
      getchild(new_box_shadow_div, "boxshadow_inset").style.background = "blue";
    } else {
      getchild(new_box_shadow_div, "boxshadow_outset").style.background =
        "blue";
    }
  }
  add_boxshadow_btn.parentNode.insertBefore(
    new_box_shadow_div,
    add_boxshadow_btn,
  );
}
// ! triggers when a textshadow div is removed"""
export function applying_text_shadow() {
  var text_shadow_h_shadow = document.querySelectorAll(".text_shadow_h_shadow");
  var text_shadow_v_shadow = document.querySelectorAll(".text_shadow_v_shadow");
  var text_shadow_color = document.querySelectorAll(".text_shadow_color");
  var text_shadow_blur = document.querySelectorAll(".text_shadow_blur");
  var textshadowdiv = document.querySelectorAll(".textshadowdiv");
  if (textshadowdiv.length == "0") {
    getactiveel().style.textShadow = "";
  } else {
    var shadow_text = `${text_shadow_h_shadow[0].value}px ${text_shadow_v_shadow[0].value}px ${text_shadow_blur[0].value}px ${text_shadow_color[0].value}`;
    if (textshadowdiv.length > 1) {
      for (var i = 1; i < textshadowdiv.length; i++) {
        shadow_text += `,${text_shadow_h_shadow[i].value}px ${text_shadow_v_shadow[i].value}px ${text_shadow_blur[i].value}px ${text_shadow_color[i].value}`;
      }
    }
    // console.log(shad)
    getactiveel().style.textShadow = shadow_text;
  }
}

// !ONINPUT
export function apply_text_shadow() {
  var text_shadow_h_shadow = document.querySelectorAll(".text_shadow_h_shadow");
  var text_shadow_v_shadow = document.querySelectorAll(".text_shadow_v_shadow");
  var text_shadow_color = document.querySelectorAll(".text_shadow_color");
  var text_shadow_blur = document.querySelectorAll(".text_shadow_blur");
  var textshadowdiv = document.querySelectorAll(".textshadowdiv");
  if (textshadowdiv.length == "0") {
    getactiveel().style.textShadow = "";
  } else {
    for (el of textshadowdiv) {
      el.oninput = () => {
        console.log("text_shadow_va");
        var shadow_text = `${text_shadow_h_shadow[0].value}px ${text_shadow_v_shadow[0].value}px ${text_shadow_blur[0].value}px ${text_shadow_color[0].value}`;
        if (textshadowdiv.length > 1) {
          for (var i = 1; i < textshadowdiv.length; i++) {
            shadow_text += `,${text_shadow_h_shadow[i].value}px ${text_shadow_v_shadow[i].value}px ${text_shadow_blur[i].value}px ${text_shadow_color[i].value}`;
          }
        }
        // console.log(shad)
        getactiveel().style.textShadow = shadow_text;
      };
    }
  }
}

export function add_textshadow(color, offsetX, offsetY, blur, btn) {
  var new_text_shadow_div = textshadowdiv_clone.cloneNode(true);

  // console.log(new_text_shadow_div.children[i].classList.contains("text_shadow_h_shadow"))
  new_text_shadow_div.querySelector(".text_shadow_h_shadow").value = offsetX;
  new_text_shadow_div.querySelector(".text_shadow_v_shadow").value = offsetY;
  new_text_shadow_div.querySelector(".text_shadow_color").value = color;
  new_text_shadow_div.querySelector(".text_shadow_blur").value = blur;
  console.log(
    add_textshadow_btn.parentNode.querySelectorAll(".textshadowdiv").length,
  );
  new_text_shadow_div.querySelector(".shadow_count").innerHTML =
    parseInt(btn.parentNode.querySelectorAll(".textshadowdiv").length) + 1;
  new_text_shadow_div.querySelectorAll(".range_value")[0].innerHTML = offsetX;
  new_text_shadow_div.querySelectorAll(".range_value")[1].innerHTML = offsetY;
  new_text_shadow_div.querySelectorAll(".range_value")[2].innerHTML = blur;

  // if (new_text_shadow_div.children[i].classList.contains("text_shadow_h_shadow")) {
  //     new_text_shadow_div.children[i].value = offsetX
  // }
  // if (new_text_shadow_div.children[i].classList.contains("text_shadow_v_shadow")) {
  //     new_text_shadow_div.children[i].value = offsetY
  // }
  // if (new_text_shadow_div.children[i].classList.contains("text_shadow_color")) {
  //     new_text_shadow_div.children[i].value = color
  // }
  // if (new_text_shadow_div.children[i].classList.contains("text_shadow_blur")) {
  //     new_text_shadow_div.children[i].value = blur
  // }

  btn.parentNode.insertBefore(new_text_shadow_div, btn);
  // console.log(new_text_shadow_div.querySelector(".text_shadow_h_shadow"), new_text_shadow_div.querySelectorAll(".range_value")[0])
  // new_text_shadow_div.querySelector(".text_shadow_h_shadow").oninput = (e) => {
  //     console.log("hjbbh")
  //     new_text_shadow_div.querySelectorAll(".range_value")[0].innerHTML = e.target.value
  // }
  // new_text_shadow_div.querySelector(".text_shadow_v_shadow").oninput = (e) => {
  //     new_text_shadow_div.querySelectorAll(".range_value")[1].innerHTML = e.target.value
  // }
  // new_text_shadow_div.querySelector(".text_shadow_blur").oninput = (e) => {
  //     new_text_shadow_div.querySelectorAll(".range_value")[2].innerHTML = e.target.value
  // }
}

// new add_textshadow listner
export function add_textshadow_btn_listner() {
  console.log(document.querySelectorAll(".add_textshadow"));
  for (el of document.querySelectorAll(".add_textshadow")) {
    el.onclick = (e) => {
      console.log("hihh");
      add_textshadow("#111e29", "0", "0", "0", gettarget(e, "add_textshadow"));
    };
  }
}

function duke(btlr, btrr, bblr, bbrr) {
  const styleDiv = BorderRadiusStyleDiv.cloneNode(true);
  console.log(styleDiv);
  console.log(1);
  if (btlr.split(" ").length == 2) {
    styleDiv
      .querySelector("[Main-style=border-top-left-radius]")
      .querySelector("input[type=checkbox]").checked == true;
    styleDiv.querySelector("[style-attr=border-top-left-radius]").value =
      btlr.split(" ")[0];
    styleDiv.querySelector("[style-attr=border-top-left-elliptic]").value =
      btlr.split(" ")[1];
  } else {
    styleDiv
      .querySelector("[Main-style=border-top-left-radius]")
      .querySelector("input[type=checkbox]").checked == false;
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
      .querySelector("input[type=checkbox]").checked == true;
    styleDiv.querySelector("[style-attr=border-top-right-radius]").value =
      btrr.split(" ")[0];
    styleDiv.querySelector(
      "[style-attr=border-top-right-radius-elliptic]",
    ).value = btrr.split(" ")[1];
  } else {
    styleDiv
      .querySelector("[Main-style=border-top-right-radius]")
      .querySelector("input[type=checkbox]").checked == false;
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
      .querySelector("input[type=checkbox]").checked == true;
    styleDiv.querySelector("[style-attr=border-bottom-left-radius]").value =
      bblr.split(" ")[0];
    styleDiv.querySelector(
      "[style-attr=border-bottom-left-radius-elliptic]",
    ).value = bblr.split(" ")[1];
  } else {
    styleDiv
      .querySelector("[Main-style=border-bottom-left-radius]")
      .querySelector("input[type=checkbox]").checked == false;
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
      .querySelector("input[type=checkbox]").checked == true;
    styleDiv.querySelector("[style-attr=border-bottom-right-radius]").value =
      bbrr.split(" ")[0];
    styleDiv.querySelector(
      "[style-attr=border-bottom-right-radius-elliptic]",
    ).value = bbrr.split(" ")[1];
  } else {
    styleDiv
      .querySelector("[Main-style=border-bottom-right-radius]")
      .querySelector("input[type=checkbox]").checked == false;
    styleDiv.querySelector("[style-attr=border-bottom-right-radius]").value =
      bbrr.split(" ")[0];
    styleDiv.querySelector(
      "[style-attr=border-bottom-right-radius-elliptic]",
    ).disabled = true;
  }
  //
  // sibling disabled
  for (el of styleDiv.querySelectorAll(".border_radius_style_switcher")) {
    el.addEventListener("input", function (e) {
      if (e.target.checked) {
        e.target.parentNode.previousElementSibling.disabled = false;
      } else {
        e.target.parentNode.previousElementSibling.disabled = true;
      }
    });
  }
  //style_switch
  styleDiv
    .querySelector(".border_styling_switcher")
    .addEventListener("input", function (e) {
      if (e.target.checked) {
        styleDiv.querySelector(".same_borders_div").style.display = "grid";
        styleDiv.querySelector(".diff_borders_div").style.display = "none";
      } else {
        styleDiv.querySelector(".diff_borders_div").style.display = "grid";
        styleDiv.querySelector(".same_borders_div").style.display = "none";
      }
    });

  // ONINPUT REturn
  // styleDiv.addEventListener('input', function() {

  // })
  console.log(styleDiv);
  return styleDiv;
}

// CREATING TEXT PATH
// var CreateTextPathBtn =
document.querySelector("#CreateTextPathBtn").onclick = (e) => {

  if (e.target.classList.contains("collapsed_div") == true) {
    e.target.classList.remove("collapsed_div");
    console.log(e.target.classList.contains("collapsed_div"));
    BoxContainer.svg().style.cursor = "auto";
    BoxContainer.svg().onmousedown = (e) => { };
  } else {

    BoxContainer.svg().style.cursor = "crosshair";

    e.target.classList.add("collapsed_div");


    BoxContainer.svg().onmousedown = (e) => {

      var Created = BoxContainer.CreateTextPathElement({ return: true });
      var path = Created.path;
      var textpath = Created.textpath;
      var svg_text = Created.svg_text;
      BoxContainer.set_stake(svg_text);
      InteractMessage("textpath Added", "lightgreen")
      layerDiv.Add(svg_text);
      // var points = `M${e.clientX},${e.clientY}`
      var ex = e.x - parseFloat(BoxContainer.svg().getBoundingClientRect().left);
      var ey = e.y - parseFloat(BoxContainer.svg().getBoundingClientRect().top);
      var points = `M${ex},${ey}`;
      path.setAttributeNS(null, "d", points);
      BoxContainer.svg().onmousemove = (e) => {
        points = points.concat(
          ` ${e.x - BoxContainer.svg().getBoundingClientRect().left},${e.y - BoxContainer.svg().getBoundingClientRect().top
          }`,
        );

        path.setAttributeNS(null, "d", points);
        textpath.innerHTML = textpath.innerHTML + "Text_here";


      };
      BoxContainer.svg().onmouseup = (e) =>
        (BoxContainer.svg().onmousemove = (e) => { });

    };
  }
  //
};

// CreateStyleDiv.CreateBorderRadiusStyleDiv('', '', '', '');
// var c = CreateStyleDiv.CreateBorderRadiusStyleDiv();
// activeel_Border_Radius.append(c)

function adjustedBoundingRect(el) {
  var rect = el.getBoundingClientRect();
  var style = getComputedStyle(el);
  var tx = style.transform;

  if (tx) {
    var sx, sy, dx, dy;
    if (tx.startsWith('matrix3d(')) {
      var ta = tx.slice(9, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[5];
      dx = +ta[12];
      dy = +ta[13];
    } else if (tx.startsWith('matrix(')) {
      var ta = tx.slice(7, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[3];
      dx = +ta[4];
      dy = +ta[5];
    } else {
      return rect;
    }

    var to = style.transformOrigin;
    var x = rect.x - dx - (1 - sx) * parseFloat(to);
    var y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(' ') + 1));
    var w = sx ? rect.width / sx : el.offsetWidth;
    var h = sy ? rect.height / sy : el.offsetHeight;
    return {
      x: x, y: y, width: w, height: h, top: y, right: x + w, bottom: y + h, left: x
    };
  } else {
    return rect;
  }
}

