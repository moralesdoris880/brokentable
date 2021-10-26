document.getElementById("button").addEventListener("click",change);

function change(){
    let img = document.getElementById("table")
    img.src = "./tablebroken.png"
    let audio = new Audio('./sound.mp3');
    audio.play();
}
