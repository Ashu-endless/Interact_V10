export function InteractPage(InteractPage) {
    return {
        funcinfo : function(){
            return "Pass an InteractPage"
        },
        UpdateProp : UpdateProp(InteractPage),
        GetValue : GetValue(InteractPage),
        querySelector  : function(query){
            if(query.startsWith('##')){
                return InteractPage.querySelector(`[element_name=${query.split('##')[1]}]`)
            }

        }
    }
}


function UpdateProp(InteractPage) {
    return{
        height : function (value) {
            InteractPage.style.height = value
            return UpdateProp(InteractPage)
        },
        width : function (value) {
            InteractPage.style.width = value
            return UpdateProp(InteractPage)
        },
        backgrground : function (value) {
            InteractPage.style.backgrground = value
            return UpdateProp(InteractPage)
        },
    }
}

function GetValue(InteractPage) {
    return{
        height : InteractPage.style.height,
        width : InteractPage.style.width,
        backgrground :InteractPage.style.backgrground,
           
        
    }
}