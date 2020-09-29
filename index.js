function ChangeColour(){
    let color = Math.floor(Math.random()*16777215).toString(16);
    let hex = document.getElementsByClassName("hex");
    console.log(hex)
    hex[0].innerHTML = `#${color}`;
    document.body.style.backgroundColor = color;
}
function Default(color){
    let hex = document.getElementsByClassName("hex");
    console.log(hex)
    hex[0].innerHTML = `#${color}`;
    document.body.style.backgroundColor = color;
}
