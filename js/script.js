let next = document.getElementById('next');
let previous = document.getElementById('previous');
let img = document.getElementById('img');
let dots = document.getElementsByClassName("dot");

let num = 1;
next.addEventListener('click', function() {
    num += 1;
    if (num > 4) {
        num = 1;
        img.setAttribute("src", `./img/img${num}.jpg`);
    } else {
        img.setAttribute("src", `./img/img${num}.jpg`);

    }
})

previous.addEventListener('click', function() {
    if (num <= 0) {
        num = 4;
        img.setAttribute("src", `./img/img${num}.jpg`);

    } else {
        img.setAttribute("src", `./img/img${num}.jpg`);
    }
    num -= 1;

    //console.log("yes"+num);
})

function scroll(){

for(let i = 1; i <= 1; i++){

    if (num <= 0) {
        num = 4;
        //img.setAttribute("src", `./img/img${num}.jpg`);
    }
    
    img.setAttribute("src", `./img/img${num}.jpg`);
    num++;
    
    console.log(num);

    if (num >= 5){
        num = 1;
    }

}

//setTimeout(scroll,4000);
}


setInterval(scroll,3000);
//scroll();