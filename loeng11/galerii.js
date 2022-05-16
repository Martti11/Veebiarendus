const pildid = [
    `./pildid/real_life_by_ilcsab_dcudylw.jpg`,
    `./pildid/neowise___4k_by_abdelrahman_de1lvum.jpg`,
    `./pildid/sunrise_at_the_well_derrick_by_monkeystyle3000_de41rqg.jpg`,
]

let puuviljadeGalerii = ``

for (let puuvili of pildid) {
    
    puuviljadeGalerii += `<img src="${puuvili}" width="300">`
    console.log(puuviljadeGalerii)
}

document.getElementById("galerii").innerHTML = puuviljadeGalerii         // see ja järgmine on samad

//let galeriiElement = document.getElementById("galerii")
//galeriiElement.innerHTML = puuviljadeGalerii