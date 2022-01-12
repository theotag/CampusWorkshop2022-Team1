let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

window.addEventListener("load", function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".wrapper").style. 
            display = "block";
        },
        1000
    )
});

document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".wrapper").style.display = "none";
});