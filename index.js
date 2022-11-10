

let prev = document.getElementById("prev");
let next = document.getElementById("next");
let arr = ["imagees/img1.jpg", "imagees/img2.jpg", "imagees/img3.jpg", "imagees/img4.jpg", "imagees/img5.jpg", "imagees/img6.jpg"]
let i = 0;
next.addEventListener("click", function () {
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    document.getElementById("image").src = arr[i];
})
prev.addEventListener("click", function (){
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    document.getElementById("image").src = arr[i];
})
function slides() {
    
    document.getElementById("image").src = arr[i]; 
    if (i < arr.length - 1) {
        i++;
    } 
    else {
        i = 0;
        }
}
setInterval(slides, 2000);