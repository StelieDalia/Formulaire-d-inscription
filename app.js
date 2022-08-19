const formBtn1 = document.querySelector("#btn-1")
const formBtnPrev2 = document.querySelector("#btn-2-prev")
const formBtnNext2 = document.querySelector("#btn-2-next")
const formBtn3 = document.querySelector("#btn-3")

function soumission(){

  event.preventDefault()
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var classe = document.getElementById("classe").value;
  var age = document.getElementById("age").value;
  var genre = document.getElementById("genre").value;

  const eleve = {
    Nom : nom,
    Prenom : prenom,
    classe : classe, 
  }

formBtn1.addEventListener("click", function(e) {
    gotoNextForm(formBtn1, formBtnNext2, 1, 2)
    e.preventDefault()
  })
  
  formBtnNext2.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext2, formBtn3, 2, 3)
    e.preventDefault()
  })
  
  formBtnPrev2.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext2, formBtn1, 2, 1)
    e.preventDefault()
  })
  
  const gotoNextForm = (prev, next, stepPrev, stepNext) => {
    const prevForm = prev.parentElement
    const nextForm = next.parentElement
    const nextStep = document.querySelector(`.step--${stepNext}`)
    const prevStep = document.querySelector(`.step--${stepPrev}`)
    
    nextForm.classList.add("form-active")
    nextForm.classList.add("form-active-animate")
    prevForm.classList.add("form-inactive")
    
    prevStep.classList.remove("step-active")
    nextStep.classList.add("step-active")
  
    setTimeout(() => {
      prevForm.classList.remove("form-active")
      prevForm.classList.remove("form-inactive")
      nextForm.classList.remove("form-active-animate")
    }, 1000)
}



  