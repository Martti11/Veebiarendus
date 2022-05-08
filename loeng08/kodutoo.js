let kasutajaNimi = prompt("Mis on sinu lemmik värv?")

let tervitusElement = document.getElementById("tervitus")

if (kasutajaNimi === "Sinine") {
    tervitusElement.innerHTML = "<h2>Oi kui tore, meil on sama lemmikvärv </h2>"

}

else if (!kasutajaNimi) {
    tervitusElement.innerHTML = `<p>Sa pole öelnud oma lemmik värvi</p>`

}

else {
    tervitusElement.innerHTML = `<p> Tore kuulda aga minu lemmik värv on sinine`
    for (let index = 1; index <=5; index += 1) {           
    tervitusElement.innerHTML += `${kasutajaNimi} `
 

}

}

