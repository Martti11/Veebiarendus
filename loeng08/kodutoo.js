let arvatudVarvid = []


function valjastaTeade(teade) {
    let tervitusEl = document.getElementById("tervitus")
    console.log(teade)
    tervitusEl.innerHTML += "<div>" + teade + "</div>"
}

function valjastaArvamisteAjalugu() {
    let valjundEl = document.getElementById("tervitus")
    valjundEl.innerHTML = "<h3> Värvide arvamise ajalugu</h3>"
    for (let index = 0; index < arvatudVarvid.length; index++){
        valjundEl.innerHTML += `
        <div>
        ${index}. arvamine - ${arvatudVarvid[index]}
        </div>`
    }

}

function varviarvamine() {
    console.log("Programm alustab tööd")
    
    let sisendElement =document.getElementById("sisend")
    let sisendTekst = sisendElement.value
    let tervitusElement = document.getElementById("tervitus")
    tervitusElement.innerHTML = ``    
    arvatudVarvid.push(sisendTekst)
    valjastaArvamisteAjalugu()
    const lemmikVarvid = [
        "roheline",
        "sinine",
        "punane",
        "roosa"
    ]

    if (lemmikVarvid.includes(sisendTekst)) {
        valjastaTeade("Õnnitlused - arvasid ära minu lemmik värvi " + sisendTekst)
        tervitusElement.innerHTML += `<img src="real_life_by_ilcsab_dcudylw.jpg" width="300px" alt="pilt">`
    }

    else if (!sisendTekst) {
       valjastaTeade("Sisesta värv")

    }

    else {
        tervitusElement.innerHTML = `<p> Tore kuulda aga minu lemmik värv on sinine</p>`
        for (let index = 1; index <= 5; index += 1) {
            tervitusElement.innerHTML += `<p>${sisendTekst}</p> `


        }

    }

    console.log("Programm lõpetab oma töö")

}

function valjastaRuut(x) {
    console.log(x * x)
}


