// console.log();
export const property_selector_container = document.createElement('div');
property_selector_container.classList.add('property_selector_container');
property_selector_container.innerHTML = `<i class="bi bi-file-excel property_selector_delete delete_myprnt"></i>
<div class="border property_selector two_grid">
    <div tyle="position: absolute;width: 100%;"><div>Select property <i class="bi bi-caret-down-fill" style="position: absolute;right: 5%;"></i></div> </div>
    <div class="property_selector-prop-modal">
        <!--  -->
        <!-- <div class="property_selector-prop"> <i class="bi bi-fonts bi-main-prop"> </i> Drop Shadow </div>
        <div class="property_selector-prop property_selector-prop-container"> <div> <i class="bi bi-arrow-move"> </i> Transform <i class="bi bi-caret-down-fill arrow_dwn-right"></i> </div>
        <div class="property_selector-subprops_container">
            <div class="divninput" Main-style="height">
                <div class="rangeinputdiv textnval" > <span>Height</span> <span class="range_value">0</span></div>
                <input type="range" style-attr="height" class="border three_grid rotate" placeholder="" name="" min="0" max="400" step="1">
            </div> -->
            <!--  -->
            <!-- <div class="divninput" Main-style="width">
                <div class="rangeinputdiv textnval">  <span>Width</span> <span class="range_value">0</span></div>
                <input type="range" class="border three_grid rotate" style-attr="width" placeholder="" name="" min="0" max="400" step="1">
            </div> -->
        </div>
        </div>
    <!--  -->
    </div>
    <!--  -->
   
<!--  -->
</div>
<!-- <select name="" class="border property_selector two_grid" id="">
<option value="none"> Property</option>
<option value="fontSize">Font-size</option>
<option value="backgroundColor">BackgroundColor</option>
<option value="color">Font-color</option>
<option value="height"> height</option>
<option value="opacity"> Opacity</option>
<option value="display"> display</option>
<option value="width"> width</option>
<option value="font-family"> Font-family</option>
<option value="border">Border</option>
</select> -->
<!-- <input type="text" class="border two_grid property_selector_value" placeholder="value"> -->
<!-- <i class="bi bi-eye-fill property_selector_preview"></i> -->`


export const functions_transitions_controller_div = document.createElement('div');
functions_transitions_controller_div.style.display = "none";
functions_transitions_controller_div.classList.add('functions_transitions_controller')
functions_transitions_controller_div.innerHTML = `<div style="display:flex">
<div class="functiontags">Function</div> <div class="functiontags">Transitions</div></div>
<div id="" class="function_tagcontent"  container_div_for="functions">
                   
                    <div class="function_typo_dialouge">
                    <span class="tile-small" style="font-size: small;border-radius: 0px 15px 15px 0px;width: 30%;">Type</span>
                        <div class="tile-small" props_container_tile="change" >Change</div>
                        <div class="tile-small" props_container_tile="incdec" >Inc/dec</div>
                        
                    </div>
                    <!-- <div class="property_selector_container"></div> -->
                    <div class="Function_editor-change_props" props_container="change">
<i class="bi bi-plus-circle-dotted add_property_selector_container" "></i>

                    </div>
                    <div class="Function_editor-incdec_props" props_container="incdec" style="display: none;">
<i class="bi bi-plus-circle-dotted add_incdecproperty_selector_container" "></i>

                    </div>

                </div>

<div  class="function_tagcontent container_for_transitions" style="display: block;background: rgb(21 22 26);" container_div_for="transitions">

<i class="bi bi-plus-circle-dotted add_transitions_controller"></i>
<hr class="style_hr">
</div>`



export const InteractFunctionEditor = document.createElement('div');
InteractFunctionEditor.classList.add('InteractFunctionEditor')
InteractFunctionEditor.innerHTML = `<i class="bi bi-x-square delete_function"></i> <input type="text" class="property border three_grid function_name" style="width:75%" placeholder="function name">
<i class="bi bi-arrow-up-square InteractFunctionEditor_height_btn" style="display:inline-block"></i>
<hr class="style_hr">
<label for="" style="font-family: monospace;font-size: large;">Event : </label>
<select name="" id="" class="function_event">
    <option value="click">click/tap</option>
    <option value="hover">hover/tap</option>
    <option value="mouseover">Mouseover/tap</option>
    <option value="dblclick">double click/tap</option>
    <option value="">hold</option>
</select>
<hr class="style_hr">
<label for="">Trigerer</label>
<br>
<div class="triggerers_container">
<i class="bi bi-plus-square-dotted add_triggerer_selector"></i> </div>

    
    <label for="">Effectors</label>
            <br>
            <div class="effectors_container">
            
            <i class="bi bi-plus-square-dotted add_effector_selector"></i>
               
        </div>
        <div class="enable_function">Enable</div>
        <hr class="end_hr">`
    //<div class="functions_transitions_controller_div"></div>
export const CustomSelectTag = document.createElement('div');
CustomSelectTag.classList.add("selectTag", "two_grid", 'element_select_list')
CustomSelectTag.innerHTML = `
<i class="bi bi-x-square-fill delete_effector_selector"></i><span class="selectTag_value">Select</span> <i class="bi bi-caret-down-fill selectTagOptionShow" style="position:absolute;right:1%"></i>
    <div class="selectTag_options_div">
</div>
`










export const transitions_controller = document.createElement('div');
transitions_controller.setAttribute('div_for', 'transitions')
transitions_controller.innerHTML = `<i class="bi bi-x-circle delete_myprnt"></i>
<div class="munch">  <label class="two_grid pulse" for=""> For </label> <select name="" id="" class="two_grid transition-for"> 
<option value="all"> all </option> 
<option value="heigt"> height </option> 
<option value="width"> width </option> 
<option value="background-color"> background-color</option> 
<option value="top"> position-x </option> 
<option value="left"> position-y </option> 
<option value="transform"> rotate </option> 
<option value="opacity"> display </option> 
<option value="color"> font-color </option> 
<option value="font-size"> font-size </option> 
<option value="letter-spacing"> letter-spacing </option> 
<option value="word-spacing"> word-spacing </option> 
<option value="text-shadow"> text-shadow </option> 
<option value="padding-left"> padding-left </option> 
<option value="padding-right"> padding-right </option> 
<option value="padding-bottom"> padding-bottom </option> 
<option value="padding-top"> padding-top </option> 
<option value="border-radius"> border-radius </option> 
<option value="border-radius-top-left"> border-radius-top-left </option> 
<option value="border-radius-top-right"> border-radius-top-right </option> 
<option value="border-radius-bottom-right"> border-radius-bottom-right </option> 
<option value="border-radius-bottom-left"> border-radius-bottom-left </option> 

</select>
</div> 
<div class="munch"> <label class="two_grid pulse" for="">Delay</label> <input type="number" class="property border two_grid transition-delay" value="0"> <span style="font-size: x-small;" >sec</span></div> 
<div class="munch">  <label class="two_grid pulse" for=""> Duration </label> <input type="number" value="0" class="property border two_grid  transition-duration"><span style="font-size: x-small;">sec</span></div> 
<div class="munch">  <label class="two_grid pulse" for="">Effect</label> 
<select name="" id="" class="two_grid  transition-timing-function">
    <option value="ease-in">ease-in</option>
    <option value="ease-in-out">ease-in-out</option>
    <option value="liiner">linear</option>
    
</select>  </div>     <hr class="style_hrTwo">`

export const BorderStyleSelect = document.createElement('select');
BorderStyleSelect.innerHTML =  `<option selected value="none">  </option>
<option class="border" value="solid">_______</option>
<option class="border" value="double">=====</option>
<option class="border" value="dashed">----</option>
<option class="border" value="dotted">.....</option>
<option class="border" value="ridge">ridge</option>
<option class="border" value="groove">groove</option>
<option class="border" value="none">none</option>`

export const FontFamilySelect = document.createElement('select');
FontFamilySelect.innerHTML = `<option  class="" value="arial" selected>arial</option>
<option class="border" value="fantasy">fantasy</option>
<option class="border" value="monospace">monospace</option>
<option class="border" value="serif">serif</option>
<option class="border" value="sans-serif">sans-serif</option>
<option class="border" value="cursive">cursive</option>
<option class="border" value="Caveat">Caveat</option>
<option class="border" value="Amatic SC">Amatic SC</option>
<option class="border" value="Patrick Hand">Patrick Hand</option>
<option class="border" value="Yomogi">Yomogi</option>
<option class="border" value="Bangers">Bangers</option> 
<option class="border" value="Fuggles">Fuggles</option>
<option class="border" value="Handlee">Handlee</option>
<option class="border" value="Tangerine">Tangerine</option>
<option class="border" value="Rock Salt">Rock Salt</option>
<option class="border" value="Markazi Text">Markazi Text</option>
<option class="border" value="Gruppo">Gruppo</option>
<option class="border" value="Black Han Sans">Black Han Sans</option>
<option class="border" value="Zen Tokyo Zoo">Zen Tokyo Zoo</option>`

FontFamilySelect.addEventListener('input', function() {
    this.style.fontFamily = this.value || 'arial'
})
for (var el of FontFamilySelect.children) {
    el.style.fontFamily = el.value
}
export const BackgroundStyleDiv = document.createElement('div');
BackgroundStyleDiv.setAttribute('StyleDivFor', 'BackgroundStyleDiv');
BackgroundStyleDiv.innerHTML = `<div class="bar_holder_">
<div class="bar" clickbtn="background-color">Color</div>
<div class="bar" clickbtn="background-image">Image</div>
<!-- <div class="bar" clickbtn="background-pattern">pattern</div> -->
</div>
<div clickshow="background-color" style="display:grid;grid-auto-flow: column;padding: 5px;justify-content: space-between;align-items: center;"> <input type="color" name="" class="two_grid colorpicker prop" id="background-color"> <input type="checkbox" name="" id=""><span>transparent</span> </div>
<div clickshow="background-image" style="display:none;">
<div style="height:50px;background-repeat:round;border:1px white solid;" class="background_image_previewer"></div>
<div class="remove_background_image orange"> remove image</div>
<div class="choose-image orange" id="frfr">Chose image</div>
</div>
<div clickshow="background-pattern" style="display:none;">

<div class="background_pattern_previewer" style="height: 50px;background: #4caf4c;margin: 5px;"></div>
<div><div class="grid_row_two"><span class="pulse">Background-color</span> <span><input class="three_grid" type="color"></span></div>
<div class="grid_row_two"><span class="pulse">foreground-color</span> <span><input class="three_grid" type="color"></span></div>
<div class="grid_row_two"><span class="pulse">opacity</span> <span><input class="three_grid" type="range"></span></div></div>
<div class="choose-pattern">Browse pattern </div>
 </div>
`


const textShadowdiv = document.createElement('div');
// textShadowdiv.innerHTML =
export const TextShadowStyleDiv = document.createElement('div');
TextShadowStyleDiv.setAttribute('StyleDivFor', 'TextShadowStyleDiv')
TextShadowStyleDiv.innerHTML = `<ion-icon name="add-circle-outline" class="add_textshadowbox" style="font-size: 25px;"></ion-icon>`
export const TextShadowStyleBox = document.createElement('div');
TextShadowStyleBox.classList.add('textshadowdiv')
TextShadowStyleBox.innerHTML = `<span class="shadow_count">1</span>

<ion-icon name="close-circle-outline" class="delete_shadow"></ion-icon>
<!-- <ion-icon name="eye-outline"></ion-icon> -->

<div class="divninput">
    <div class="rangeinputdiv  textnval"> <span>offset-x</span> <span class="range_value">0</span> </div>
    <input type="range" class="border two_grid text_shadow_h_shadow" id="text_shadow_h_shadow" placeholder="" name="" min="-50" max="150" step="1">

</div>

<div class="divninput">
    <div class="rangeinputdiv textnval"> <span>offset-y</span> <span class="range_value">0</span> </div>

    <input type="range" class="border two_grid text_shadow_v_shadow" id="text_shadow_v_shadow" placeholder="" name="" min="-50" max="150" step="1">
</div>
<div class="">
    <!-- <div class="rangeinputdiv"> <span>color</span> </div> -->

    <input type="color" class="border two_grid text_shadow_color" value="#111e29" name="" id="text_shadow_color">

</div>

<div class="divninput">
    <div class="rangeinputdiv textnval"> <span>blur</span> <span class="range_value">0</span> </div>

    <input type="range" class="border two_grid text_shadow_blur" id="text_shadow_blur" placeholder="" name="" value="0" min="0" max="10" step="1">
</div>`
    // 
const dropShadowdiv = document.createElement('div');
// textShadowdiv.innerHTML =
export const DropShadowStyleDiv = document.createElement('div');
DropShadowStyleDiv.setAttribute('StyleDivFor', 'DropShadowStyleDiv')
DropShadowStyleDiv.innerHTML = `<ion-icon name="add-circle-outline" class="add_dropshadowbox" style="font-size: 25px;"></ion-icon>`
export const DropShadowStyleBox = document.createElement('div');
DropShadowStyleBox.classList.add('dropshadowdiv')
DropShadowStyleBox.innerHTML = `<span class="shadow_count">1</span>

<ion-icon name="close-circle-outline" class="delete_shadow"></ion-icon>
<!-- <ion-icon name="eye-outline"></ion-icon> -->

<div class="divninput">
    <div class="rangeinputdiv textnval"> <span>offset-x</span> <span class="range_value">0</span> </div>
    <input type="range" class="border two_grid drop_shadow_h_shadow"  placeholder="" name="" min="-50" max="150" step="1">

</div>

<div class="divninput">
    <div class="rangeinputdiv textnval"> <span>offset-y</span> <span class="range_value">0</span> </div>

    <input type="range" class="border two_grid drop_shadow_v_shadow"  placeholder="" name="" min="-50" max="150" step="1">
</div>
<div class="">
    <!-- <div class="rangeinputdiv"> <span>color</span> </div> -->

    <input type="color" class="border two_grid drop_shadow_color" value="#111e29" name="" >

</div>

<div class="divninput">
    <div class="rangeinputdiv textnval"> <span>blur</span> <span class="range_value">0</span> </div>

    <input type="range" class="border two_grid drop_shadow_blur"  placeholder="" name="" min="0" max="10" step="1">
</div>`
    // 
export const TransformStyleDiv = document.createElement('div');
TransformStyleDiv.setAttribute('StyleDivFor', 'TransformStyleDiv');
TransformStyleDiv.innerHTML = ` <div  StyleDivFor="TransformStyleDiv">

    <div class="divninput" Main-style="position-x">
        <div class="rangeinputdiv iconntextnvalnsuffex"><i class="bi bi-arrow-left-right"></i> <span>Position</span> <span class="range_value">0</span> <span>X</span> </div>
        <input type="range" class="border three_grid rotate" style-attr="position-x" placeholder="" name="" min="0" max="360" step="1">
    </div>
    <div class="divninput" Main-style="position-y">
        <div class="rangeinputdiv iconntextnvalnsuffex"><i class="bi bi-arrow-down-up"></i> <span>Position</span> <span class="range_value">0</span> <span>Y</span> </div>
        <input type="range" class="border three_grid rotate" style-attr="position-y" placeholder="" name="" min="0" max="360" step="1">
    </div>
    <!--  -->
    <div class="divninput" Main-style="height">
        <div class="rangeinputdiv iconntextnval" ><i class="bi bi-arrows-expand"></i> <span>Height</span> <span class="range_value">0</span></div>
        <input type="range" style-attr="height" class="border three_grid rotate" placeholder="" name="" min="0" max="400" step="1">
    </div>
    <!--  -->
    <div class="divninput" Main-style="width">
        <div class="rangeinputdiv iconntextnval"> <i class="bi bi-arrows-expand" style="transform: rotate(90deg);"></i> <span>Width</span> <span class="range_value">0</span></div>
        <input type="range" class="border three_grid rotate" style-attr="width" placeholder="" name="" min="0" max="400" step="1">
    </div>
    <div class="divninput" Main-style="rotate">
        <div class="rangeinputdiv iconntextnvalnsuffex"><i class="bi bi-arrow-repeat"></i> <span>Rotate2d</span> <span class="range_value">0</span> <span>deg</span> </div>
        <input type="range" class="border three_grid rotate" style-attr="rotate" placeholder="" name="" min="-360" max="360" step="1">
    </div>
    <!--  -->
    <!-- <div class="divninput">
        <div class="rangeinputdiv textnvalntext"> <span>scale-X</span> <span class="range_value">0</span> <span>deg</span> </div>
        <input type="range" class="border three_grid scaleX" placeholder="" name="" min="-360" max="360" step="1">
    </div> -->
    <!--  -->
    <!-- <div class="divninput">
        <div class="rangeinputdiv textnvalntext"> <span>scale-Y</span> <span class="range_value">0</span> <span>deg</span> </div>
        <input type="range" class="border three_grid scaleY" placeholder="" name="" min="-360" max="360" step="1">
    </div> -->
    <!--  -->
    <!-- <div class="divninput" Main-style="skewX">
        <div class="rangeinputdiv textnvalntext"> <span>skew-X</span> <span class="range_value">0</span> <span>deg</span> </div>
        <input type="range" class="border three_grid" style-attr="skewX" placeholder="" name="" min="-360" max="360" step="1">
    </div>
    <div class="divninput" Main-style="skewY">
        <div class="rangeinputdiv textnvalntext"> <span>skew-Y</span> <span class="range_value">0</span> <span>deg</span> </div>
        <input type="range" class="border three_grid" style-attr="skewY" placeholder="" name="" min="-360" max="360" step="1">
    </div> -->
    <!-- -->
</div>`




export const BorderRadiusStyleDiv = document.createElement('div');
BorderRadiusStyleDiv.setAttribute('StyleDivFor', 'BorderRadiusStyleDiv');
BorderRadiusStyleDiv.innerHTML =
    `<div class="border_style_label"> <span class="form-check form-switch" style="display: block;z-index: 1;position: relative;right: -5px;">
<input class="form-check-input border_styling_switcher" checked="true" id="" type="checkbox" id="flexSwitchCheckDefault"></span>
    <span class="border_prop one_grid tile">circle</span>
    <span class="border_prop one_grid tile" style="width:fit-content">eliptical</span> </div>
<div class="diff_borders_div">
   <div Main-style="border-top-left-radius" class="borderstyledivstyle"> <span class="material-icons border_icon" style="transform:translate(0px, 0px) rotate(270deg)">rounded_corner</span>
    <input type="number" class="border"  style-attr="border-top-left-radius"  placeholder="" name="" min="0" value="0" max="50" step="1" id=""> /
    <input type="number" class="border" placeholder="" style-attr="border-top-left-radius-elliptic"  min="0" value="0" max="50" step="1" id="" disabled>
    <span class="form-check form-switch" style="display: inline-flex;z-index: 1;position: relative;right: -5px;">
<input class="form-check-input border_radius_style_switcher" id=""  type="checkbox" ></span>
</div>
<!--  -->
   <div Main-style="border-top-right-radius" class="borderstyledivstyle"> <span class="material-icons border_icon" style="transform:translate(0px, 0px) rotate(360deg)">rounded_corner</span>
    <input type="number" class="border"  style-attr="border-top-right-radius"  placeholder="" name="" min="0" value="0" max="50" step="1" id=""> /
    <input type="number" class="border" placeholder="" style-attr="border-top-right-radius-elliptic"  min="0" value="0" max="50" step="1" id="" disabled>
    <span class="form-check form-switch" style="display: inline-flex;z-index: 1;position: relative;right: -5px;">
<input class="form-check-input border_radius_style_switcher" id=""  type="checkbox" ></span>
</div>
<!--  -->
<div Main-style="border-bottom-left-radius" class="borderstyledivstyle"> <span class="material-icons border_icon" style="transform:translate(0px, 0px) rotate(180deg)">rounded_corner</span>
    <input type="number" class="border"  style-attr="border-bottom-left-radius"  placeholder="" name="" min="0" value="0" max="50" step="1" id=""> /
    <input type="number" class="border" placeholder="" style-attr="border-bottom-left-radius-elliptic"  min="0" value="0" max="50" step="1" id="" disabled>
    <span class="form-check form-switch" style="display: inline-flex;z-index: 1;position: relative;right: -5px;">
<input class="form-check-input border_radius_style_switcher" id=""  type="checkbox" ></span>
</div>
<!--  -->
<div Main-style="border-bottom-right-radius" class="borderstyledivstyle"> <span class="material-icons border_icon" style="transform:translate(0px, 0px) rotate(90deg)">rounded_corner</span>
    <input type="number" class="border"  style-attr="border-bottom-right-radius"  placeholder="" name="" min="0" value="0" max="50" step="1" id=""> /
    <input type="number" class="border" placeholder="" style-attr="border-bottom-right-radius-elliptic"  min="0" value="0" max="50" step="1" id="" disabled>
    <span class="form-check form-switch" style="display: inline-flex;z-index: 1;position: relative;right: -5px;">
<input class="form-check-input border_radius_style_switcher" id=""  type="checkbox" ></span>
</div>
<!--  -->
</div>


    <!--  -->
    
<div class="same_borders_div" class="borderstyledivstyle" style="display: none;" >
    <div Main-style="border-radius" class="borderstyledivstyle"><span class="material-icons">crop_free</span> 
        <input type="number" class="border"  style-attr="border-radius"  placeholder="" name="" min="0" value="0" max="50" step="1" id=""> /
        <input type="number" class="border" placeholder="" style-attr="border-radius-elliptic"  min="0" value="0" max="50" step="1" id="" disabled>
        <span class="form-check form-switch" style="display: inline-flex;z-index: 1;position: relative;right: -5px;">
            <input class="form-check-input border_radius_style_switcher" id=""  type="checkbox" ></span>
</div>`




export const TextpathStyleDiv = document.createElement('div');
TextpathStyleDiv.setAttribute('StyleDivFor', 'TextStyleDiv');
TextpathStyleDiv.innerHTML = `<div class="fontstyleDiv" >
    <div main-style="font" style="gap: 5px;">  <select class="border" style-attr="font-family" style="height: 5vh; width: 100%; font-family: arial;">
    ${FontFamilySelect.innerHTML}
    </select>

  <div style="display: grid;grid-template-columns: 1fr 4fr 3fr;height: 4vh;gap: 10px;"> <span class="material-icons">format_size</span>
      <input type="number" class="dark-num-inp" style-attr="font-size" placeholder="size" name="" min="0" max="1000" step="1" style="height: 100%;">
      <input type="color" class="colorpicker" value="#0000ff" style-attr="color" style="height: 100%;">
  </div>
</div>
  <div Main-style="text-decoration" style="display: grid;grid-auto-columns: 1fr;grid-template-columns: 33% 33% 33%;grid-template-rows: max-content max-content;gap: 5px 2px;justify-items: center;">
      <div   Main-style="fontWeight" class="clckbox" name="" ><i class="fas fa-bold"></i></div>
      <div class="clckbox" name="" Main-style="fontStyle" ><i class="fas fa-italic"></i></div>
      <div class="clckbox" name="" Main-style="textDecoration"><i class="fas fa-underline"></i></div>
  </div>

  <!--  -->
  <!-- <div class="divninput" Main-style="letter-spacing">
      <div class="rangeinputdiv iconntextnval"> <span class="tile">a<i class="bi bi-arrow-left-right"></i>b </span><span class="">letter-spacing
      </span> <span class="range_value">1</span></div>
      <input type="range" name="" style-attr="letter-spacing" class="three_grid" min="-10" max="50" value="1">

  </div> -->
  <!-- line height -->
  <!-- <div class="divninput" Main-style="line-height">
    <div class="rangeinputdiv iconntextnval"> <span class="tile">ab<i class="bi bi-arrows-collapse"></i>ab</span> <span class="">line-height
    </span><span class="range_value">100%</span></div>

    <input type="range" name="" style-attr="line-height"  class="three_grid" value="100" min="0" max="500"></div>
     -->

 
  <!--  -->
  <!-- <div class="divninput" Main-style="word-spacing">
    <div class="rangeinputdiv iconntextnval"> <span class="tile">ab<i class="bi bi-arrow-left-right"></i>ab</span> <span class="">word-spacing
    </span> <span class="range_value">1</span></div>
    <input type="range" style-attr="word-spacing" name="" class="three_grid" id="" value="1" min="-10" max="50">
    
</div> -->


  <!-- <span class="tile">Text decorations</span>
  <br>
  <div class="border prop clckprop one_grid underline" name="" id="textDecoration"><i class="fas fa-underline"></i></div>
  <div class="border prop clckprop one_grid line-through" name="" id="textDecoration"><i class="fas fa-underline"></i></div>
  <div class="border prop clckprop one_grid overline" name="" id="textDecoration"><i class="fas fa-underline"></i></div>
  <br> <select name="" class="border" id="text-decoration-style">
  <option value="wavy"> ~~~~</option>
  <option value="dashed"> -----</option>
  <option value="solid"> _____</option>
  <option value="double"> ======</option>
  <option value="dotted">.....</option>
</select>
  <input type="number" class="border px" placeholder="thickness" id="text-decoration-thickness">
  <input type="color" class="border colorpicker" id="text-decoration-color"> -->

  <!-- Stroke text -->
  <div class="divninput" Main-style="text-stroke">
      <div class="rangeinputdiv" style="grid-template-columns: 2fr 6fr 2fr;">
          <span class="material-icons">font_download</span> <span class="">stroke-color</span>
           <!-- <span class="range_value">0</span> -->
          <input type="color" class="border colorpicker" style-attr="-webkit-text-stroke-color" id="-webkit-text-stroke-color"></div>
        
               <!-- <input type="range" class="border" style="width:95%" style-attr="-webkit-text-stroke-width" placeholder="stroke" name="" value="0" min="0" max="10" step="0.1"> -->
        
    </div>
<!--  -->
<!-- <div class="divninput" Main-style="padding-top">
    <div class="rangeinputdiv iconntextnval">
    <i class="bi bi-layout-text-sidebar" style="transform:rotate(270deg);"></i> <span class="">Padding-top</span> <span class="range_value">0</span></div>
    
    <input type="range" class="border three_grid rotate" style-attr="padding-top" placeholder="" name="" min="0" max="50" step="1">
</div> -->
<!--  -->
<!-- <div class="divninput" Main-style="padding-left">
    <div class="rangeinputdiv iconntextnval">
    <i class="bi bi-layout-text-sidebar" style="transform:rotate(180deg);"></i> <span class="">Padding-left</span> <span class="range_value">0</span></div>
    
    <input type="range" class="border three_grid rotate" style-attr="padding-left" placeholder="" name="" min="0" max="50" step="1">
</div> -->
<!--  -->
<!-- <div class="divninput" Main-style="padding-right">
    <div class="rangeinputdiv iconntextnval">
    <i class="bi bi-layout-text-sidebar"></i></span> <span class="">Padding-right</span> <span class="range_value">0</span></div>
    
    <input type="range" class="border three_grid rotate" style-attr="padding-right" placeholder="" name="" min="0" max="50" step="1">
</div> -->
<!--  -->
<!-- <div class="divninput" Main-style="padding-bottom">
    <div class="rangeinputdiv iconntextnval">
        <i class="bi bi-layout-text-sidebar" style="transform:rotate(90deg);"></i> <span class="">Padding-bottom</span> <span class="range_value">0</span></div>
    
    <input type="range" class="border three_grid rotate" style-attr="padding-bottom" placeholder="" name="" min="0" max="50" step="1">
</div> -->
<!--  -->
</div>`

export const TextStyleDiv = document.createElement('div');
TextStyleDiv.setAttribute('StyleDivFor', 'TextStyleDiv');
TextStyleDiv.innerHTML = `<div class="fontstyleDiv" >
    <div main-style="font" style="gap: 5px;">  <select class="" style-attr="font-family" style="height: 5vh; width: 100%; font-family: arial;">
    ${FontFamilySelect.innerHTML}
    </select>

  <div style="display: grid;grid-template-columns: 1fr 4fr 3fr;height: 4vh;gap: 10px;"> <span class="material-icons">format_size</span>
      <input type="number" class="dark-num-inp" style-attr="font-size" placeholder="size" name="" min="0" max="1000" step="1" style="height: 100%;">
      <input type="color" class="colorpicker" value="#0000ff" style-attr="color" style="height: 100%;">
  </div>
</div>
  <div Main-style="text-decoration" style="display: grid;grid-auto-columns: 1fr;grid-template-columns: 33% 33% 33%;grid-template-rows: max-content max-content;gap: 5px 2px;justify-items: center;">
      <div   Main-style="fontWeight" class="clckbox" name="" ><i class="fas fa-bold"></i></div>
      <div class="clckbox" name="" Main-style="fontStyle" ><i class="fas fa-italic"></i></div>
      <div class="clckbox" name="" Main-style="textDecoration"><i class="fas fa-underline"></i></div>

      <div class="clckbox" Main-style="textAlign" align="left"><i class="fas fa-align-left"></i> </div>
      <div class="clckbox" Main-style="textAlign" align="center"> <i class="fas fa-align-center"> </i> </div>
      <div class="clckbox" Main-style="textAlign" align="right"><i class="fas fa-align-right"> </i> </div>
  </div>

  <!--  -->
  <!-- <div class="divninput" Main-style="letter-spacing">
      <div class="rangeinputdiv iconntextnval"> <span class="tile">a<i class="bi bi-arrow-left-right"></i>b </span><span class="">letter-spacing
      </span> <span class="range_value">1</span></div>
      <input type="range" name="" style-attr="letter-spacing" class="three_grid" min="-10" max="50" value="1">

  </div> -->
  <!-- line height -->
  <!-- <div class="divninput" Main-style="line-height">
    <div class="rangeinputdiv iconntextnval"> <span class="tile">ab<i class="bi bi-arrows-collapse"></i>ab</span> <span class="">line-height
    </span><span class="range_value">100%</span></div>

    <input type="range" name="" style-attr="line-height"  class="three_grid" value="100" min="0" max="500"></div>
     -->

 
  <!--  -->
  <!-- <div class="divninput" Main-style="word-spacing">
    <div class="rangeinputdiv iconntextnval"> <span class="tile">ab<i class="bi bi-arrow-left-right"></i>ab</span> <span class="">word-spacing
    </span> <span class="range_value">1</span></div>
    <input type="range" style-attr="word-spacing" name="" class="three_grid" id="" value="1" min="-10" max="50">
    
</div> -->


  <!-- <span class="tile">Text decorations</span>
  <br>
  <div class="border prop clckprop one_grid underline" name="" id="textDecoration"><i class="fas fa-underline"></i></div>
  <div class="border prop clckprop one_grid line-through" name="" id="textDecoration"><i class="fas fa-underline"></i></div>
  <div class="border prop clckprop one_grid overline" name="" id="textDecoration"><i class="fas fa-underline"></i></div>
  <br> <select name="" class="border" id="text-decoration-style">
  <option value="wavy"> ~~~~</option>
  <option value="dashed"> -----</option>
  <option value="solid"> _____</option>
  <option value="double"> ======</option>
  <option value="dotted">.....</option>
</select>
  <input type="number" class="border px" placeholder="thickness" id="text-decoration-thickness">
  <input type="color" class="border colorpicker" id="text-decoration-color"> -->

  <!-- Stroke text -->
  <div class="divninput" Main-style="text-stroke">
      <div class="rangeinputdiv" style="grid-template-columns: 2fr 6fr 2fr;">
          <span class="material-icons">font_download</span> <span class="">stroke-color</span>
           <!-- <span class="range_value">0</span> -->
          <input type="color" class="border colorpicker" style-attr="-webkit-text-stroke-color" id="-webkit-text-stroke-color"></div>
        
               <!-- <input type="range" class="border" style="width:95%" style-attr="-webkit-text-stroke-width" placeholder="stroke" name="" value="0" min="0" max="10" step="0.1"> -->
        
    </div>
<!--  -->
<!-- <div class="divninput" Main-style="padding-top">
    <div class="rangeinputdiv iconntextnval">
    <i class="bi bi-layout-text-sidebar" style="transform:rotate(270deg);"></i> <span class="">Padding-top</span> <span class="range_value">0</span></div>
    
    <input type="range" class="border three_grid rotate" style-attr="padding-top" placeholder="" name="" min="0" max="50" step="1">
</div> -->
<!--  -->
<!-- <div class="divninput" Main-style="padding-left">
    <div class="rangeinputdiv iconntextnval">
    <i class="bi bi-layout-text-sidebar" style="transform:rotate(180deg);"></i> <span class="">Padding-left</span> <span class="range_value">0</span></div>
    
    <input type="range" class="border three_grid rotate" style-attr="padding-left" placeholder="" name="" min="0" max="50" step="1">
</div> -->
<!--  -->
<!-- <div class="divninput" Main-style="padding-right">
    <div class="rangeinputdiv iconntextnval">
    <i class="bi bi-layout-text-sidebar"></i></span> <span class="">Padding-right</span> <span class="range_value">0</span></div>
    
    <input type="range" class="border three_grid rotate" style-attr="padding-right" placeholder="" name="" min="0" max="50" step="1">
</div> -->
<!--  -->
<!-- <div class="divninput" Main-style="padding-bottom">
    <div class="rangeinputdiv iconntextnval">
        <i class="bi bi-layout-text-sidebar" style="transform:rotate(90deg);"></i> <span class="">Padding-bottom</span> <span class="range_value">0</span></div>
    
    <input type="range" class="border three_grid rotate" style-attr="padding-bottom" placeholder="" name="" min="0" max="50" step="1">
</div> -->
<!--  -->
</div>`

export const BrushStyleDiv = document.createElement('div')
BrushStyleDiv.setAttribute('StyleDivFor', 'BrushStyleDiv');
BrushStyleDiv.innerHTML = `<div class="divninput" Main-style="text-stroke">
<div class="rangeinputdiv" style="grid-template-columns: 2fr 6fr 2fr;">
    <span class="material-icons">font_download</span> <span class="">stroke</span>
     <!-- <span class="range_value">0</span> -->
    <input type="color" class="border colorpicker" style-attr="stroke" id="stroke"></div>
  
         <!-- <input type="range" class="border" style="width:95%" style-attr="-webkit-text-stroke-width" placeholder="stroke" name="" value="0" min="0" max="10" step="0.1"> -->
  
</div>`



export const BorderStyleDiv = document.createElement('div');
BorderStyleDiv.setAttribute('StyleDivFor', 'BorderStyleDiv');
BorderStyleDiv.innerHTML = `<div class="">

<div class="border_style_label"> <span class="form-check form-switch" style="display: block;z-index: 1;position: relative;right: -5px;">
<input class="form-check-input border_style_switcher" id="" type="checkbox" id="flexSwitchCheckDefault"></span>
    <span class="tile">style</span>
    <span class="tile">width</span>
    <span class="tile">color</span> </div>

<div class="diff_borders_div">
  <div class="borderstyledivstyle" Main-style="border-top" > 
    <span class="material-icons border_icon ">border_top</span>
      <select class="" style-attr="border-style" >
<option selected value="none">  </option>
<option class="" value="solid">_______</option>
<option class="" value="double">=====</option>
<option class="" value="dashed">----</option>
<option class="" value="dotted">.....</option>
<option class="" value="ridge">ridge</option>
<option class="" value="groove">groove</option>
<option class="" value="none">none</option>
</select>
    <input type="number" class="dark-num-inp" name=""  style-attr="border-width"   value="0" min="0" max="100">
    <input type="color" class="" name=""  style-attr="border-color" >
</div>
  <div class="borderstyledivstyle" Main-style="border-right" > 
    <span class="material-icons border_icon ">border_right</span>
      <select class="" style-attr="border-style" >
<option selected value="none" >  </option>
<option class="" value="solid">_______</option>
<option class="" value="double">=====</option>
<option class="" value="dashed">----</option>
<option class="" value="dotted">.....</option>
<option class="" value="ridge">ridge</option>
<option class="" value="groove">groove</option>
<option class="" value="none">none</option>
</select>
    <input type="number" class="dark-num-inp" name=""  style-attr="border-width" value="0" min="0" max="100">
    <input type="color" class="" name=""  style-attr="border-color" >
</div>
  <div class="borderstyledivstyle"  Main-style="border-left"> 
    <span class="material-icons border_icon ">border_left</span>
      <select class="" style-attr="border-style">
<option selected value="none" > </option>
<option class="" value="solid">_______</option>
<option class="" value="double">=====</option>
<option class="" value="dashed">----</option>
<option class="" value="dotted">.....</option>
<option class="" value="ridge">ridge</option>
<option class="" value="groove">groove</option>
<option class="" value="none">none</option>
</select>
    <input type="number" class="dark-num-inp" name="" style-attr="border-width" value="0" min="0" max="100">
    <input type="color" class="" name=""  style-attr="border-color">
</div>
  <div class="borderstyledivstyle" Main-style="border-bottom" > 
    <span class="material-icons border_icon ">border_bottom</span>
      <select class="" style-attr="border-style" >
<option selected value="none" > </option>
<option class="" value="solid">_______</option>
<option class="" value="double">=====</option>
<option class="" value="dashed">----</option>
<option class="" value="dotted">.....</option>
<option class="" value="ridge">ridge</option>
<option class="" value="groove">groove</option>
<option class="" value="none">none</option>
</select>
    <input type="number" class="dark-num-inp" name="" style-attr="border-width" value="0" min="0" max="100">
    <input type="color" class="" name="" style-attr="border-color" >
</div>
    


</div>
<div class="same_borders_div" style="display: none;">
    <div class="borderstyledivstyle" Main-style="border" > 
    <i class="bi bi-border-inner"></i>
          <select class="" style-attr="border-style" >
    <option selected value="none" > </option>
    <option class="" value="solid">_______</option>
    <option class="" value="double">=====</option>
    <option class="" value="dashed">----</option>
    <option class="" value="dotted">.....</option>
    <option class="" value="ridge">ridge</option>
    <option class="" value="groove">groove</option>
    <option class="" value="none">none</option>
    </select>
        <input type="number" class="dark-num-inp" name="" style-attr="border-width" value="0" min="0" max="100">
        <input type="color" class="" name="" style-attr="border-color" >
    </div>

</div>
</div>
`


// document.querySelector('#layers_div').append(functions_transitions_controller)