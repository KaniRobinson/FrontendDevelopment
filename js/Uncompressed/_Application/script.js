// global namespace
var Application = Application || {};

// Common Methods and Properties
Application.Common = {

}

// Object together with the method declarations
Application.Functions = {
    
    Intiailize: function(firstName_Arg){
    	this.firstName = firstName_Arg;
    },

    alertfirstName: function(){
 		alert(this.firstName);
    }
} 

// Call the Constructor Function
Application.Functions.Intiailize("Kani");
