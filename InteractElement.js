


UpdateStyle = function (element) {
  
    return{
      height : function (value) {
        //for(var)
      },
      
    }
  }


function InteractElement(element) {
    
    return{
      
        UpdateStyle : UpdateStyle(element),
        Delete :element.remove(),
        GetValue: "",
        name: function (element) {return element.getAttribute('element_name')},
        groups : function (element) {return element.getAttribute('element_groups')},
        type : function (element) {return element.getAttribute('element_type')},

        }

      
      
}
