// const darkModeButton = document.querySelector('.navbar .outer');
// let theme = document.styleSheets[2];
// console.log(theme);

const darkModeButton = document.querySelector('.darkmode');

let dark = false;
// let moon = document.getElementById("svgClass");

// moon.styles.stroke = "red";



darkModeButton.addEventListener('click',()=>{
    console.log(document.getElementById("theme").href);
    if(dark){
        console.log('Enabling lightmode');
        document.getElementById("theme").href = "styles.css";
        dark = false;
    }else{
        console.log('Enabling darkmode');
        document.getElementById("theme").href = "darkmode.css";
        dark = true;
    }
});


window.onload = ()=>{
    console.log("window loaded and darkmode is ",dark);
    if(dark){
        console.log('Enabling lightmode');
        document.getElementById("theme").href = "styles.css";
        dark = false;
    }else{
        console.log('Enabling darkmode');
        document.getElementById("theme").href = "darkmode.css";
        dark = true;
    }
};