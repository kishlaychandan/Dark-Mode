let main=document.getElementsByClassName("main")[0];
let body=document.querySelector("body");
let slider=document.querySelector(".slider");
let text=document.querySelector("h1");
let svgtext=document.getElementsByTagName("text")[0];
console.log(svgtext);
// console.log("svgtext",svgtext.getAttribute("stroke"));
slider.classList.add('left')
console.log(slider);
body.style.backgroundImage="url('day.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center center";

main.addEventListener("click",(eve)=>{
    console.log("hii",eve);
    let slider=document.querySelector(".slider");
    
    if(slider.classList.contains('left')){
        slider.classList.remove('left');
        slider.classList.add('right');
        console.log("right");
        body.style.backgroundImage="url('night.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        body.style.backgroundColor="black";
        main.style.backgroundColor="#222222";
        text.style.color="white";
        svgtext.setAttribute("stroke","white");
    }
    else{
        console.log("left")
        slider.classList.add('left');
        slider.classList.remove('right');
        body.style.backgroundImage="url('day.jpg')"
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        
        body.style.backgroundColor="white";
        main.style.backgroundColor="black";
        text.style.color="black";
        svgtext.setAttribute("stroke","red");
    }
})