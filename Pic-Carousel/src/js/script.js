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
    Next = ById("next");

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
