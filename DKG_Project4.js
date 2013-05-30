//alert("JavaScript works!");

// Devon Gildark
// Project 4
// 1305

// String Fucntion 1
var Lib = function(){
    
    var Phone = function(val) {
        if (Number(val)) {
           return true;
        } else {
            return false;
        }
    }
        return {
            Phone : Phone
        }
}
var NLib = new Lib();
    console.log("I have a phonenumber " + NLib.Phone(7751112233));
//String 1 over
// String 2