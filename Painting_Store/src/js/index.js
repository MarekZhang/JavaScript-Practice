
var MenuFlag = true;
function ShowMenu(){
    var Cla_List = document.getElementById("Cla_List");
    if(MenuFlag)
        Cla_List.style.display = "block";
    else
        Cla_List.style.display = "none";

    MenuFlag = !MenuFlag;
}

function HiddeMenu(){
    var Cla_List = document.getElementById("Cla_List");
    Cla_List.style.display = "none";
    MenuFlag = true;
}