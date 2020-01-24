function init(){
    var res = document.getElementById("res");
    res.value = 0; //初始值显示为0
    res.disabled = true; //禁用键盘输入；
    var objButton = document.getElementsByTagName("input");
    for(var i = 0; i < objButton.length; i++){
        //相当于objButton[i].function()...  而
        // func(p1, p2) 等价于
        // func.call(undefined, p1, p2)

        // obj.child.method(p1, p2) 等价于
        // obj.child.method.call(obj.child, p1, p2)
        objButton[i].onclick = function(){
            if(isNumber(this.value)){
                res.value = Number(res.value + this.value);
            }else{
                 var btn_value = this.value;
                 switch(btn_value){
                    case "+":
                        arithmetics("+");
                        break;
                    case "-":
                        arithmetics("-");;
                         break;
                    case "*":
                        arithmetics("*");
                        break;
                    case "/":
                        arithmetics("/");
                        break;
                    case "=":
                        switch(arithmetics_sign){
                            case "+":
                                res.value = tempt + Number(res.value);
                                break;
                            case "-":
                                res.value = tempt - Number(res.value);
                                break;
                            case "*":
                                res.value = tempt * Number(res.value);
                                break;
                            case "/":
                                if(Number(res.value) == 0){
                                    alert("cannot divide zero");
                                    res.value = 0;
                                }else{
                                    res.value = tempt / Number(res.value);
                                }
                                break;

                        }
                        break;
                    case ".": 
                        res.value = decimal_num(res.value);
                        break;
                    case "←": 
                        res.value = back_delete(res.value);
                        break;
                    case "+/-":
                        res.value = (res.value) * -1;
                        break;
                    case "C":
                        clear();
                        break;
                 }
            }
        }
    }
}

var tempt = 0;
var arithmetics_sign;


function arithmetics(sign){
    var res = document.getElementById("res");
    tempt = Number(res.value);
    res.value = 0;
    arithmetics_sign = sign;
}

function decimal_num(n){
    if(n.indexOf(".") == -1)
        n = n + ".";
    return n;
}

function isNull(n){
    if( n == "0" || n.length == 0)
        return true;
    return false;
}

function back_delete(n){
    n = n.substring(0, n.length-1);
    if(isNull(n))
        n = 0;
    return n;
}

function isNumber(n){
    return !isNaN(n)
}

function clear(){
    var res = document.getElementById("res");
    res.value = 0;
}

function btn_m(){
    var res = document.getElementById("hyperlink");
    res.onclick = function(){
        window.location.href = "http://www.google.com";
    }
}