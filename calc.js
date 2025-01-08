function verificar() {
    var pes = document.getElementById('peso')
    var alt = document.getElementById('altura')
    var res = document.getElementById('res')

    var pes1 = Number(pes.value)
    var alt1 = Number(alt.value)

    if(isNaN(pes1) || isNaN(alt1) || pes1==0 || alt1==0){
        res.innerHTML = 'Verifique os dados e tente novamente!'
        res.style.color = 'red'
        
    }
    else{
    calci = pes1/(alt1*alt1)
    res.innerHTML = `O seu peso é ${pes1} kg e a sua altura é ${alt1}m, portanto o seu IMC é ${calci.toFixed(2)}. `
    res.style.color= 'green'
    }

}
