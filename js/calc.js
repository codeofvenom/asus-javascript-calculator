var btn = document.querySelector(".container-button");
var screen = document.querySelector("#screen");
var resetscreen = false;
var calculate = false;
btn.addEventListener("click",function(e){

    var btnClick = e.target
    var valuebtn = btnClick.innerText;

    // alert(valuebtn);
    // screen.value = valuebtn
    if (valuebtn == "C"){
        screen.value = "";
    }
    else if(valuebtn == "Bkspc"){
        screen.value = screen.value.slice(0,-1);
    }
    else if(valuebtn == "="){
        if(calculate == true){
            screen.value = eval(tmpval + operator + screen.value);
            calculate = false;
        }else if (calculate == false && screen.value == "" ){
            alert("You don't insert any number or insert any operation");
            resetscreen = True;
        }
        screen.value = eval(screen.value);
    }
    else if(btnClick.classList.contains('operator')){
        if(calculate == true){
            screen.value = eval(tmpval + operator + screen.value);
        }
        tmpval = screen.value;
        operator = valuebtn;
        resetscreen = True
    }else{
        if(resetscreen == true){
            screen.value = valuebtn;
        }
        screen.value = screen.value + valuebtn;
    }

});