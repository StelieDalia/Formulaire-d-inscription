$(".tab").css("display", "none");
$("#tab-1").css("display", "block");

function run(hideTab, showTab){
  if(hideTab < showTab){
    
    var currentTab = 0;
    x = $('#tab-'+hideTab);
    y = $(x).find("input")
    for (i = 0; i < y.length; i++){
      if (y[i].value == ""){
        $(y[i]).css("background", "#ffdddd");
        return false;
      }
    }
  }


  for (i = 1; i < showTab; i++){
    $("#step-"+i).css("opacity", "1");
  }

  $("#tab-"+hideTab).css("display", "none");
  $("#tab-"+showTab).css("display", "block");
  $("input").css("background", "#fff");
}



let nomEleve = document.getElementById("Enom"),
prenomEleve = document.getElementById("Eprenom"),
selectSexe = document.getElementById("sexe"),
dateEleve = document.getElementById("Edate"),
lieuEleve = document.getElementById("lieuNaiss"),
selectClasse = document.getElementById("classe");


let nomTuteur = document.getElementById("Tnom"),
prenomTuteur = document.getElementById("Tprenom"),
ProfessionTuteur = document.getElementById("TProfession"),
contactTuteur = document.getElementById("Tcontact"),
emailTuteur = document.getElementById("Temail");



let post = document.getElementById("regForm");

post.addEventListener("submit", function(event){
event.preventDefault()

console.log(nomEleve.value);
console.log(prenomEleve.value);
console.log(selectClasse.options[selectClasse.selectedIndex].value);
console.log(dateEleve.value);
console.log(lieuEleve.value);
console.log(selectSexe.options[selectSexe.selectedIndex].value);


console.log(nomTuteur.value);
console.log(prenomTuteur.value);
console.log(ProfessionTuteur.value);
console.log(contactTuteur.value);
console.log(emailTuteur.value);

run(2, 1)
});

