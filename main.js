let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let theme = document.querySelector("#theme");
let toggleBtn = document.querySelector(".toggle-btn");
let innerCircle = document.querySelector(".inner-circle");
let about = document.querySelector(".about");
let share = document.querySelector(".share");
let preloader = document.querySelector(".preloader");
let tl = gsap.timeline();


setTimeout(() => {
    preloader.classList.toggle("disappear");
   tl.from("body", {opacity:0, y:50, duration:1, ease:Power2.easeInOut});
}, 5000)




document.addEventListener("mousemove", (e) => {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

innerCircle.addEventListener("click", () => {
    
    if (theme.classList.contains("light")) {
        
        toggleBtn.style.backgroundColor = "green";
        innerCircle.style.transform = "translateX(18px)";

        theme.classList.remove("light");
        theme.classList.add("dark");
        about.style.color = "white";
        share.style.color = "white";
        cursor.style.border = "1px solid white";
        cursor2.style.border = "1px solid white";

    }
    else {
        toggleBtn.style.backgroundColor = "grey";
        innerCircle.style.transform = "translateX(0px)";

        theme.classList.remove("dark");
        theme.classList.add("light");
        about.style.color = "black";
        share.style.color = "black";
    }
    
});