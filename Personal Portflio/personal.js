document.querySelector("#riyad").style.display = 'none';
document.querySelector('.ham').addEventListener('click', function(){
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        document.querySelector(".dot").style.display = "inline";
        document.querySelector("#riyad").style.display = "none";
    }
    else{
        document.querySelector(".dot").style.display = "none";

        setTimeout(function(){
        document.querySelector("#riyad").style.display = "inline";
        }, 300)

    }

})
