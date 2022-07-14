function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color !== '';
  }
  

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#submitButton").addEventListener("click", () => {

        let colorText = document.querySelector("#color");

        if (!colorText.value || !isColor(colorText.value)) {
            alert("Error! Please submit a valid color name!");
            return;
        }
        
        document.body.style.backgroundColor = colorText.value;
        colorText.value = "";

    });

});
