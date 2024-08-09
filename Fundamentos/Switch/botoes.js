function changeColor(corEmIngles){
    let colorBox = document.getElementById('colorBox');
    let backGroundColor;

    switch(corEmIngles){
        case "red":
            backGroundColor = "red";
            break;
        case "green":
                backGroundColor = "green";
            break;
        case "blue":
            backGroundColor = "blue";
            break;
        case "yellow":
            backGroundColor = "yellow";
            break;
        case "purple":
            backGroundColor = "purple";
            break;
        case "orange":
            backGroundColor = "orange";
            break;
        case "black":
            backGroundColor = "black";
            break;
        default:
            backGroundColor = "white";
    }
    colorBox.style.backGroundColor = backGroundColor;
}