const nome = 'Antônio'
const peso = 95
const altura = 1.77

IMC = peso / (altura * altura)

if(IMC >= 30){
    console.log(`${nome} você está acima do peso`)
}
else{
    console.log(`${nome} você não está acima do peso`)
}