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




/**section partenaire */

let navLinks = document.querySelector(".nav");
let htmlcssArrow = document.querySelector(".arrow");
htmlcssArrow.onclick = function() {
navLinks.classList.toggle("show1");
}

/**section json partenaire */

const sub_menu = document.querySelector('.sub-menu');
var requestURL = 'json.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var partenaire = request.response;
    populateHeader(partenaire);
    showHeroes(partenaire);
  }
  function populateHeader(jsonObj) {
    let partenaire = jsonObj['partenaire']
    for (let i = 0; i < partenaire.length;i++){
        var myH1 = document.createElement('li');
        myH1.textContent = partenaire[i];
        sub_menu.appendChild(myH1);
    }

  }
