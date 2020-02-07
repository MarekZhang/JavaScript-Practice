function ById(id) {
    return typeof(id) === "string"?document.getElementById(id):id;
}


var index = 0,
    banner = ById("banner"),
    slides = banner.getElementsByTagName("div"),
    length = slides.length,
    timer = null,
    Dots = ById("Dots").getElementsByTagName("span"),
    Prev = ById("prev"),
    Next = ById("next"),
    Menu_Content = ById("menu-content").getElementsByClassName("classification"),
    sub_menu = ById("sub-menu"),
    sub_inner = sub_menu.getElementsByClassName("sub"),
    main_menu = ById("main-menu");

function windowSliding(){
    var main = ById("main");
    main.onmouseover = function(){
        //鼠标划过执行的操作
        if(timer) clearInterval(timer);
    }

    main.onmouseout = function(){
        timer = setInterval(function(){
            index++;
            if(index >= length ){
                index = 0;
            }
            slidingImage();
        },3000);
    }
    // trigger onmouseout event automatically
    main.onmouseout();

    for(var i = 0; i < length; i++){
        Dots[i].id = i;// add id to three spans.
        Dots[i].onclick = function(){
            index = this.id;
            slidingImage();
        }
    }

    // sliding pictures by cliking prev and next 
    Next.onclick = function(){
        index ++;
        if(index >= length)
            index = 0;
        slidingImage();
    }

    Prev.onclick = function(){
        index --;
        if(index < 0)
            index = 2;
        slidingImage();
    }
    //sliding over sub-menu
    for(var i = 0; i < Menu_Content.length; i++){
        Menu_Content[i].setAttribute("data-index", i);
        Menu_Content[i].onmouseover = function(){
            var ind = this.getAttribute("data-index");
            sub_menu.className = "sub-menu";
            for(var i = 0; i < sub_inner.length; i++){
                sub_inner[i].style.display = "none";
                Menu_Content[i].style.background = "none";
            }
            this.style.background = "rgba(0,0,0,0.2)";
            sub_inner[ind].style.display = "block";
        }

        main_menu.onmouseout = function(){
            sub_menu.className = "sub-menu hide";
        }

        sub_menu.onmouseover = function(){
            sub_menu.className = "sub-menu";
        }

        
    }
 }

function slidingImage(){
    for(var i = 0; i < length; i++){
        slides[i].style.display = "none";
        Dots[i].className = "";
    }
    slides[index].style.display = "block";
    Dots[index].className="active";
}

windowSliding();
