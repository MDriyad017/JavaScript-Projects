function changeBG(color){
document.body.style.backgroundColor = color;

let txt = document.getElementsByClassName("text");
if(color == "#000000"){
    for(let elm of txt){
        elm.style.color = "white";
    }
}

// else if(color == "#eb0e20"){
//     for(let red of txt){
//         red.style.color = "white"
//     }
// }

else{
    for(let elm of txt){
        elm.style.color = "black";
    } 
}

};
