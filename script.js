
function setError(message){
    let newElement = document.createElement("div")

    newElement.textcontent = message

    errorM.appendChild(newElement);
}

let formData = document.querySelector("form");
formData.addEventListener("submit", () => {

let errorM = document.getElementsByClassName("errorM");

let fodselsdatoData = formData.fodselsdato.value
let isKvinne  = formData.isKvinne.value
let wowRace = formData.wowRace.value
let antallGangerRettetGeirSinProg = formData.antallGangerRettetGeirSinProg.value
let  treningPerUke = formData.treningPerUke.value
let  McTjukkasPerManed = formData.McTjukkasPerManed .value
let hasFrokostForSkole = formData.hasFrokostForSkole.value 
let hasDrivingFemalePartner = formData.hasDrivingFemalePartner.value 
let  hasMaleDrivingPartner = formData.hasMaleDrivingPartner.value 
let  isSpillerItimen = formData.isSpillerItimen.value 


if(fodselsdatoDat != '') setError("Du har ikke oppgit riktig informasjon om datoen du er født")
if(isKvinne != "") setError("Du har ikke oppgit riktig ")
if (antallGangerRettetGeirSinProg === isNaN )
if (treningPerUke != isNaN) 
if (McTjukkasPerManed != isNaN)
if (hasFrokostForSkole != "") setError("")
})










function calculateAge(
    isKvinne, wowRace, antallGangerRettetGeirSinProg,
    treningPerUke, McTjukkasPerManed,  
    hasFrokostForSkole, hasDrivingFemalePartner, hasMaleDrivingPartner,
    isSpillerItimen){
        let calculatedAge;
        if(isKvinne){
            calculatedAge = 81.7;
        } else {
            calculatedAge = 76.1;
        }

        if(wowRace) calculatedAge -=10.2; //To much sitting still..
        calculatedAge -= (McTjukkasPerManed*4.666);
        calculatedAge = calculatedAge - antallGangerRettetGeirSinProg*1.2
        calculatedAge = calculatedAge + treningPerUke * 1.2;
        calculatedAge += (hasFrokostForSkole * 4.19);
        calculatedAge -= (isSpillerItimen * 4.21);
        calculatedAge += (hasDrivingFemalePartner * 3.75);
        calculatedAge -= (hasMaleDrivingPartner * 3.71); 
        calculatedAge -= (isSpillerItimen * 4.62)


        return calculatedAge;
    }

    //Complete the formulae
    //You are supposed to calculate time and date of death, down to the minute!
    function calculateExactTimeOfDeath(
        fodselsdato, isKvinne, wowRace, antallGangerRettetGeirSinProg,
        treningPerUke, McTjukkasPerManed,  
        hasFrokostForSkole, hasDrivingFemalePartner, hasMaleDrivingPartner,
        isSpillerItimen){
        let achievedAge = calculateAge(isKvinne, wowRace, antallGangerRettetGeirSinProg,
            treningPerUke, McTjukkasPerManed,  
            hasFrokostForSkole, hasDrivingFemalePartner, hasMaleDrivingPartner,
            isSpillerItimen);



        return null;//f
    }