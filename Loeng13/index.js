

let ylesanne1 = {kirjeldus: `tee hommikuvõimlemist`, kasTehtud: true, tahtsus: 8, tahtaeg: `enne kella 8-t`}
let ylesanne2 = {kirjeldus: `jaluta koeraga`, kasTehtud: false, tahtsus: 8, tahtaeg: `enne kella 8-t`}



console.log(ylesanne1, ylesanne2)

//koonda ylesanded massiivi

let ylesanded = [ylesanne1, ylesanne2]

ylesanded.push({kirjeldus: `tee hommmikusöök`, kasTehtud: true, tahtsus: 8, tahtaeg: `enne kella 8-t`})

//koosta ühe ülesande kirjelduse html element
function tagastaYlesanneHtml(i) {  //(i) see võib olla ükskõik mis aga peab olema igalpool sama
    let tehtud = ``
    let tehtudKlass = ``
    if (ylesanded[i].kasTehtud){
        tehtud = `checked`
        tehtudKlass = `class="tehtud"`
    }
    return `
        <div ${tehtudKlass}>
        <input type="checkbox" ${tehtud}>
        Oluline ülesanne: ${ylesanded[i].kirjeldus} ${ylesanded[i].tahtaeg}
    </div>`
    //ülemine template tagastab sarnase väärtuse:                                                                                                  
    //return `<div><input type="checkbox">Oluline ülesanne: ` + ylesanded[i].kirjeldus + `` + ylesanded[i].tahtaeg + `</div>`
}

// tee tsükkel mis väljastaks kõik objektid massiivist

const ylesandedElement = document.getElementById(`ylesanded`)
for (let i = 0; i < ylesanded.length; i++) {
    ylesandedElement.innerHTML += tagastaYlesanneHtml(i)
}


//funktsioon ülesanded andmete lugemiseks ja massiivi lisamiseks

function lisaYlesanne () {
    const ylesanne = document.getElementById(`kirjeldus`)
    const tahtaeg = document.getElementById(`aeg`)
    const uusYlesanne = {kirjeldus: ylesanne.value, kasTehtud: false, tahtsus: 8, tahtaeg: tahtaeg.value}
    ylesanded.push(uusYlesanne)
    ylesandedElement.innerHTML += tagastaYlesanneHtml(ylesanded.length -1)
    ylesanne.value = ``
    tahtaeg.value = ``
}