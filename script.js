let spinner = document.getElementsByClassName("my-spinner")[0];
let convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click",function(){
    document.getElementById("finalUrl").innerHTML = "";
    convertBtn.value = "Pretvaram...";
    spinner.setAttribute("style","display: block;");
    setTimeout(convert,2000);
    
});
// setTimeout(convert,5000);

function convert(){
    spinner.setAttribute("style","display: none;");
    convertBtn.value = "Napravi link bez reklama";

    let url = document.getElementById("url").value;
    let element = document.getElementById("finalUrl");
    console.log(url);
    let finalUrl;

    let ampersandPos = url.indexOf("&");
    // let watchPos = url.indexOf("watch");
    // let equalsPos = url.indexOf("=");
    // console.log("watchPos",watchPos);
    // console.log("equalsPos",equalsPos);
    // console.log("& Pos", ampersandPos);
    let replacedWatch = url.replace("watch?v=","embed/");

    
    if(ampersandPos < 0){
        // console.log("replacedWatch", replacedWatch);
        finalUrl = replacedWatch;
    } else {
        let cutRest = replacedWatch.slice(ampersandPos-2,replacedWatch.length);
        // console.log("cutRest", cutRest);
        let completeUrl = replacedWatch.replace(cutRest,"");
        // console.log("completeUrl", completeUrl);
        finalUrl = completeUrl;
    }

    let href = element.setAttribute("href",finalUrl);
    element.innerHTML = finalUrl;
    console.log(finalUrl);

}