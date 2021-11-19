import { BoxContainer } from "./Interac_BoxContainer.js";

// !!!  ==== ======================================================= SVG  =====================!!!!!!!!!!!!!!! 
// const PencilBrushbtn = document.querySelector("#PencilBrush");
// const LineBrushbtn = document.querySelector("#LineBrush");
// const Add_drawing_to_page = document.querySelector('#add_drawing_to_page');
// const Draw_svg_toolbar = document.querySelector('#draw_svg_toolbar')
// const Clear_drawing = document.querySelector('#clear_drawing')
// const Drag_or_draw = document.querySelector('#drag_or_draw')
// const Drawsvg = document.querySelector('#Draw_svg');
// var PB_color;
// var PB_width;
// var PB_blur;
// var PB_stroke;
// var PB_fill;
// var PB_linejoin;
// var PB_linecap;
// var LB_color;
// var LB_width;
// var LB_blur;
// var new_cursor;
// var DrawsvgCursor;


// const PencilBrushStylings = {
//     fill : 'black',
//     stroke : 'black'
// }


// PencilBrushbtn.addEventListener('click', function() {
//     if (this.innerHTML == `<i class="bi bi-brush"></i><span>selected</span>`) {
//         this.innerHTML = `<i class="bi bi-brush"></i><span>select</span>`;
//         this.style.border = "none";
//         Drawsvg.style.display = "none"
//         Draw_svg_toolbar.style.display = "none"
//         Drawsvg.onmousedown = () => { "" };
//     } else {
//         this.innerHTML = `<i class="bi bi-brush"></i><span>selected</span>`;
//         LineBrushbtn.innerHTML = `<i class="bi bi-brush"></i><span>select</span>`;
//         this.style.border = "2px #4444a2 double";
//         Drawsvg.innerHTML = ""
//         Drawsvg.style.display = "block"
//         Draw_svg_toolbar.style.display = "block"
//         LineBrushbtn.style.border = "";
//         PencilBrush()
//     }
// })
// LineBrushbtn.addEventListener('click', function() {
//     if (this.innerHTML == `<i class="bi bi-brush"></i><span>selected</span>`) {
//         this.innerHTML = `<i class="bi bi-brush"></i><span>select</span>`;
//         this.style.border = "none";
//         Drawsvg.onmousedown = () => { "" };
//     } else {
//         this.innerHTML = `<i class="bi bi-brush"></i><span>selected</span>`;
//         PencilBrushbtn.innerHTML = `<i class="bi bi-brush"></i><span>select</span>`;
//         this.style.border = "2px #4444a2 double";
//         PencilBrushbtn.style.border = "";
//         LineBrush()
//     }
// })

// // 
// Add_drawing_to_page.addEventListener('click', function() {
//     if (Drawsvg.childElementCount == 0) {

//     } else {
//         var gtag = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//         console.log(Drawsvg.innerHTML)
//             // for (el of Drawsvg.children) {
//             //     gtag.append(el)
//             // }
//         gtag.innerHTML = Drawsvg.innerHTML
//         gtag.classList.add('draggable')
//         transformFunc.defaultTransform(gtag)
//         boxSvg.append(gtag)

//     }
// })

// Clear_drawing.addEventListener('click', function() {
//     Drawsvg.innerHTML = ""
// })
// Drag_or_draw.addEventListener('click', function() {
//         if (this.innerHTML == "Move Drawings") {
//             for (var drawings of Drawsvg.children) {
//                 drawings.classList.add('draggable')
//                 transformFunc.defaultTransform(drawings)
//                 this.innerHTML == "Select Brush"
//             }
//         } else {
//             for (var drawings of Drawsvg.children) {
//                 drawings.classList.remove('draggable')
//                 this.innerHTML == "Move Drawings"
//             }
//         }
//     })
//     // PB_stroke = 'url(#transformedPattern)'
// PB_stroke = 'black'
// PB_fill = "none"


// document.querySelector('#divbar_draw').oninput = () => {
//     PencilBrushSettings()
//     LineBrushSettings()
// }
// document.querySelector('#PB_stroke-color').oninput = (e) => {
//     PB_stroke = e.target.value
// }
// document.querySelector('#PB_fill-color').oninput = (e) => {
//     PB_fill = e.target.value
// }
// document.querySelector('#PB_fill-transparent').oninput = (e) => {
//     if (e.target.checked) {
//         PB_fill = "none"
//     } else {
//         PB_fill = e.target.previousElementSibling.value
//     }
// }

// function PencilBrushSettings() {
//     PB_width = document.querySelector('#PB_width').value || '5';
//     PB_blur = document.querySelector('#PB_blur').value || '0';
//     PB_linejoin = document.querySelector('#PB_stroke-linejoin').value || 'round';
//     PB_linecap = document.querySelector('#PB_stroke-linecap').value || 'round';
//     // var cursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='0' cy='0' r='5' stroke='black' stroke-width='3' fill='red' /%3E%3C/svg%3E ")`


//     var cursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Cpolyline points='50,50 51,51' stroke-linejoin='round' stroke-linecap='round' fill='none' stroke='black' stroke-width='5' /%3E%3C/svg%3E")`
//     var swc = cursor.split('stroke-width=')[1].split(' ')[0].replace(/['"]+/g, '')
//     var sc = cursor.split('stroke=')[1].split(' ')[0].replace(/['"]+/g, '')
//     var fc = cursor.split('fill=')[1].split(' ')[0].replace(/['"]+/g, '')
//     var slcc = cursor.split('stroke-linecap=')[1].split(' ')[0].replace(/['"]+/g, '')
//     var sljc = cursor.split('stroke-linejoin=')[1].split(' ')[0].replace(/['"]+/g, '')
//     var pc = cursor.split('points=')[1].split('s')[0].replace(/['"]+/g, '').trim()


//     new_cursor = cursor.replace(`stroke-width='${swc}'`, `stroke-width='${PB_width}'`)
//     new_cursor = new_cursor.replace(`fill='${fc}'`, `fill='${PB_fill}'`)
//     new_cursor = new_cursor.replace(`stroke='${sc}'`, `stroke='${tinycolor(PB_stroke).toRgbString()}'`)
//     new_cursor = new_cursor.replace(`stroke-linejoin='${sljc}'`, `stroke-linejoin='${PB_linejoin}'`)
//     new_cursor = new_cursor.replace(`stroke-linecap='${slcc}'`, `stroke-linecap='${PB_linecap}'`)
//     PB_width = parseInt(PB_width)
//         // console.log(pc)
//         // console.log(`points='${pc}'`)
//         // console.log(`points='${PB_width/2},${PB_width/2} ${PB_width/2 + 1},${PB_width/2 + 1}'`)
//     new_cursor = new_cursor.replace(`points='${pc}'`, `points='${PB_width/2},${PB_width/2} ${PB_width/2},${PB_width/2}'`)
//     new_cursor = new_cursor.replace(`points='${pc}'`, `points='${5},${5} ${5},${5}'`)
//     DrawsvgCursor = `${new_cursor} ${PB_width/2} ${PB_width/2}, auto`
//     Drawsvg.style.cursor = DrawsvgCursor


//     // new_cursor = cursor.replace(`stroke-width='3'`, `stroke-width='1'`)
//     // return PB_width, PB_blur, PB_stroke
// }
// var cursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='0' cy='0' r='5' stroke='black' stroke-width='3' fill='red' /%3E%3C/svg%3E ")`
// var strokeC = cursor.split('stroke-width=')[1].split(' ').replace(/['"]+/g, '')
// var new_cursor = cursor.replace(`stroke-width='${strokeC}'`, `stroke-width='${PB_width}'`)

// function PencilBrush() {
//     var preview_svg_elems = "";

//     // console.log(new_cursor)
//     PencilBrushSettings()
//         // console.log(new_cursor)
//     Drawsvg.style.cursor = DrawsvgCursor
//     Drawsvg.onmousedown = (e) => {
//         var polyline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//         // polyline.classList.add('draggable')
//         Drawsvg.append(polyline)
//         transformFunc.defaultTransform(polyline)
//         var ex = e.x - parseInt(box.getBoundingClientRect().left)
//         var ey = e.y - parseInt(box.getBoundingClientRect().top)
//         var points = `M${ex},${ey} ${ex + 1},${ey + 1}`
//         console.log(points)
//         polyline.setAttributeNS(null, "d", points)
//         polyline.setAttributeNS(null, "stroke-width", PB_width)
//             // polyline.setAttributeNS(null, "fill", 'none')
//         polyline.setAttributeNS(null, "stroke", PB_stroke)
//         polyline.setAttributeNS(null, "fill", PB_fill)
//         polyline.setAttributeNS(null, "stroke-linecap", PB_linecap)
//         polyline.setAttributeNS(null, "stroke-linejoin", PB_linejoin)
//         polyline.setAttributeNS(null, "filter", `blur(${PB_blur}px)`)
//         Drawsvg.onmousemove = (e) => {
//             Drawsvg.style.cursor = DrawsvgCursor

//             points = points.concat(` ${e.x - box.getBoundingClientRect().left},${e.y -box.getBoundingClientRect().top}`)
//                 // points.concat(` ${e.x - box.getBoundingClientRect().left},${e.y -box.getBoundingClientRect().top}`)
//                 // polyline.setAttributeNS(null, "points", points.concat(` ${e.x - box.getBoundingClientRect().left},${e.y -box.getBoundingClientRect().top}`))
//             polyline.setAttributeNS(null, "d", points)
//                 // console.log(PB_width.value)
//             polyline.setAttributeNS(null, "stroke-width", PB_width)
//                 // polyline.setAttributeNS(null, "fill", 'none')
//             polyline.setAttributeNS(null, "stroke", PB_stroke)
//             polyline.setAttributeNS(null, "fill", PB_fill)
//             polyline.setAttributeNS(null, "stroke-linecap", PB_linecap)
//             polyline.setAttributeNS(null, "stroke-linejoin", PB_linejoin)
//             polyline.setAttributeNS(null, "filter", `blur(${PB_blur}px)`)
//                 // polyline.style.filter = `blur${PB_blur}px`

//             polyline.id = "dekho"
//         }

//         Drawsvg.onmouseup = (e) => {
//             // var svg_text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//             // var textpath = document.createElementNS('http://www.w3.org/2000/svg', 'textpath');
//             // textpath.setAttribute('href', '#dekho')
//             // textpath.innerHTML = "hello bacjass"
//             // boxSvg.append(svg_text)
//             // svg_text.append(textpath)
//             var json = { d: polyline.getAttribute('d'), }
//             BoxContainer.CreateTextPathElement(json)
//             Drawsvg.onmousemove = (e) => {
//                 ""
//             }
//         }
//     }
// }

// function LineBrush() {
//     var preview_svg_elems = "";
//     LineBrushSettings()
//     Drawsvg.onmousedown = (e) => {
//         var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
//         line.classList.add('draggable')
//         Drawsvg.append(line)
//         var startX = e.x
//         var startY = e.y
//         line.setAttributeNS(null, 'x1', startX - box.getBoundingClientRect().left)
//         line.setAttributeNS(null, 'y1', startY - box.getBoundingClientRect().top)
//         Drawsvg.onmousemove = (e) => {

//             if (e.x - startX < 0) {
//                 var posX = startX - e.x;
//             } else {
//                 var posX = e.x - startX
//             }
//             if (e.y - startY < 0) {
//                 var posY = startY - e.y;
//             } else {
//                 var posY = e.y - startY;
//             }
//             line.setAttributeNS(null, "stroke-width", LB_width)
//             line.setAttributeNS(null, "fill", 'none')
//             line.setAttributeNS(null, "stroke", LB_color)
//             line.setAttributeNS(null, "filter", `blur(${LB_blur}px)`)
//                 // console.log(`blur${PB_blur}px`)
//             line.setAttributeNS(null, 'x2', e.x - box.getBoundingClientRect().left)
//             line.setAttributeNS(null, 'y2', e.y - box.getBoundingClientRect().top)


//         }

//         Drawsvg.onmouseup = (e) => {
//             Drawsvg.onmousemove = (e) => {
//                 ""
//             }
//         }
//     }
// }

// function LineBrushSettings() {
//     LB_color = document.querySelector('#LB_color').value;
//     LB_width = document.querySelector('#LB_width').value;
//     LB_blur = document.querySelector('#LB_blur').value;
//     return LB_color, LB_width, LB_blur
// }


// !!!SVG!!!!!!!!!!!!!!!!!!!!!!!!
const InteracDrawing = {
    svg: document.querySelector('#Draw_svg'),
    Add_drawing_to_pageBtn: document.querySelector('#add_drawing_to_page'),
    //  Draw_svg_toolbar : document.querySelector('#draw_svg_toolbar'),
    Clear_drawingBtn: document.querySelector('#clear_drawing'),
    DragorDrawBtn: document.querySelector('#drag_or_draw'),
    //  CreateTextPathElement: function(){

    //  },
    StartMode: function(mode) {
        if (mode == 'default') {
            for (var el of InteracDrawing.children[0].children) {
                el.classList.add('draggable')
            }
            InteracDrawing.svg.onclick = (e) => {

                if (e.target.tagName == 'path') {
                    target.classList.add('active')

                }
            }
        }
        //  !!PENCIL!!
        else if (mode == 'Pencil') {
            InteracDrawing.svg.onmousedown = (e) => {
                var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                InteracDrawing.svg.append(path)
                transformFunc.defaultTransform(path)
                var ex = e.x - parseInt(box.getBoundingClientRect().left)
                var ey = e.y - parseInt(box.getBoundingClientRect().top)
                var points = `M${ex},${ey} ${ex + 1},${ey + 1}`
                path.setAttributeNS(null, "d", points)
                polyline.setAttributeNS(null, "stroke-width", PencilBrushStylings.width)
                path.setAttributeNS(null, "stroke", PencilBrushStylings.stroke)
                path.setAttributeNS(null, "fill", PencilBrushStylings.fill)
                path.setAttributeNS(null, "stroke-linecap", PencilBrushStylings.linecap)
                path.setAttributeNS(null, "stroke-linejoin", PencilBrushStylings.linejoin)
                path.setAttributeNS(null, "filter", `blur(${PencilBrushStylings.blur}px)`)
                InteracDrawing.svg.onmousemove = (e) => {
                    InteracDrawing.svg.style.cursor = 'crosshair'
                    points = points.concat(` ${e.x - box.getBoundingClientRect().left},${e.y -box.getBoundingClientRect().top}`)
                    path.setAttributeNS(null, "d", points)


                }
                InteracDrawing.svg.onmousemove.onmouseup = (e) => {
                    InteracDrawing.svg.onmousemove = () => {

                    }
                }
            }
        } else if (mode == 'Line') {

        }
    },
    //  default = drag
    //  pencil
    //  line
    //  activeDrawModeshower : .
    On: function() {
        InteracDrawing.svg.style.display = "block";
        InteracDrawing.svg.style.height = BoxContainer.svg().getBoundingClientRect().height + 'px'
        InteracDrawing.svg.style.width = BoxContainer.svg().getBoundingClientRect().width + 'px'
        InteracDrawing.svg.style.top = BoxContainer.svg().getBoundingClientRect().top + 'px'
        InteracDrawing.svg.style.left = BoxContainer.svg().getBoundingClientRect().left + 'px'
        InteracDrawing.Add_drawing_to_pageBtn.style.display = "block"
        InteracDrawing.Clear_drawingBtn.style.display = "block"
        InteracDrawing.DragorDrawBtn.style.display = "block";
        // InteracDrawing.svg.onmousedown=()=>{
        //     if(InteracDrawing.Mode == 'default'){
        //         for(var el of InteracDrawing.children[0].children ){
        //             el.classList.add('draggable')
        //         }
        //     }
        // }
    },
    off: function() {
        InteracDrawing.svg.style.display = "none";
        InteracDrawing.Add_drawing_to_pageBtn.style.display = "none"
        InteracDrawing.Clear_drawingBtn.style.display = "none"
        InteracDrawing.DragorDrawBtn.style.display = "none"
        InteracDrawing.svg.onmousedown = (e) => {

        }
    },
    add
}