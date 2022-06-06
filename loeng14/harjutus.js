function esimeneTervitus() {
    document.getElementById(`demo`).innerHTML += `
    <div>
        <h2>Esimene Tervitus</h2>
    </div>
    `
}

function teineTervitus() {
    document.getElementById(`demo`).innerHTML += `
    <div>
        <h2>Teine Tervitus</h2>
    </div>
    `
}

setTimeout(esimeneTervitus, 5000)
teineTervitus()
setTimeout(() => {
    document.getElementById(`demo`).innerHTML += `
    <div>
        <h2>Kolmas Tervitus</h2>
    </div>
    `  
},3000)