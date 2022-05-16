console.log("Matkad");

const matk1 = {
    nimetus: "Kevadine matk ümber Pühajärve",
    kuupaev: "20.05.2022",
    kohtadeArv: 25,
    pildiUrl: "./pildid/sunrise_at_the_well_derrick_by_monkeystyle3000_de41rqg.jpg"


}

const matk2 = {
    nimetus: "Kevadine rattamatk Kõrvemaal",
    kuupaev: "25.05.2022",
    kohtadeArv: 20,
    pildiUrl: "./pildid/real_life_by_ilcsab_dcudylw.jpg"


}

const matk3 = {
    nimetus: "Kepikõnnimatk Pärnus",
    kuupaev: "30.05.2022",
    kohtadeArv: 10,
    pildiUrl: "./pildid/neowise___4k_by_abdelrahman_de1lvum.jpg"


}

const matk4 = {
    nimetus: "Süstamatk ümber Hiiumaa",
    kuupaev: "30.05.2022",
    kohtadeArv: 10656,
    pildiUrl: "./pildid/negotiations_by_abdelrahman_de4bjwk.jpg"


}

const matkad = [
    matk1,
    matk2,
    matk3,
    matk4

] 

function matkaTervitus(matk) {

    console.log(`Tere tulemast matkale "${matk.nimetus}" mis algab ${matk.kuupaev}`)
    console.log(`Kokku saab matkale tulla ${matk.kohtadeArv} osalejat`)
    const matkadElement = document.getElementById("matkad")
    matkadElement.innerHTML += `
    <div>
        <h2> ${matk.nimetus}</h2>
        <div>Matka Toimusmisaeg: ${matk.kuupaev}</div>
        <div>Kohtade arv: ${matk.kohtadeArv}</div>
        <img src="${matk.pildiUrl}" width="300">
    </div>
    ` 
}



//matkaTervitus(matk1)
//matkaTervitus(matk2)
//matkaTervitus(matk3)

for (let matkaObjekt of matkad) {   //vabavalik mis nimetus let-i järgi 
    matkaTervitus(matkaObjekt)
}

function lisaMatk() {
    const uusMatk = {
        nimetus: document.getElementById("matka_nimetus").value,
        kuupaev: document.getElementById("matka_kuupaev").value,
        kohtadeArv: document.getElementById("matka_osalejad").value,
        pildiUrl: "./pildid/negotiations_by_abdelrahman_de4bjwk.jpg"
        
        
    }

    
    matkad.push(uusMatk)
    console.log(matkad)
    matkaTervitus(uusMatk)
}