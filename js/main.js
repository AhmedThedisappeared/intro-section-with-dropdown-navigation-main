let closer =document.getElementById("close");
let navToggler = document.getElementById("icon-menu");
let nav =document.querySelector("nav");
navToggler.addEventListener("click", function(e){
    nav.classList.add("open");
    let overlay=document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
});
closer.addEventListener("click", function(e){
    nav.classList.remove("open");
    document.querySelector(".overlay").remove();
});

let featuresItem =document.getElementById("features");
let companyItem = document.getElementById("company");

let downFeatures =document.querySelector(".features");
let downCompany =document.querySelector(".company");

featuresItem.addEventListener("click" ,function(e){
    if(downFeatures.getAttribute("data-display")=== "true") {
        this.children[0].src="images/icon-arrow-up.svg";
        downFeatures.style.display="block"
        downFeatures.setAttribute("data-display" ,"false");
    } else {
        this.children[0].src="images/icon-arrow-down.svg";
        downFeatures.style.display="none"
        downFeatures.setAttribute("data-display" ,"true");
    }
}); 
companyItem.addEventListener("click" ,function(e){
    if(downCompany.getAttribute("data-display")=== "true") {
        this.children[0].src="images/icon-arrow-up.svg";
        downCompany.style.display="block"
        downCompany.setAttribute("data-display" ,"false");
    } else {
        this.children[0].src="images/icon-arrow-down.svg";
        downCompany.style.display="none"
        downCompany.setAttribute("data-display" ,"true");
    }
});