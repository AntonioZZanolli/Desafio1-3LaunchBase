const usuarios = [
    {
        nome: "Marcos",
        receitas: [123, 41, 32.42],
        despesas: [24, 31.97, 65.12]
    },
    {
        nome: "Lucas",
        receitas: [1323, 141, 132.42],
        despesas: [924, 331.97, 65.12]
    },
    {
        nome: "Gean",
        receitas: [945, 63.23, 73.85],
        despesas: [843.12, 296.43, 54.32]
    }
]


 function calculaSaldo(receitas, despesas){
     const somaReceitas = somaNumeros(receitas)
     const somaDespesas = somaNumeros(despesas)

     return somaReceitas - somaDespesas
  }

function somaNumeros(numeros){
    let soma = 0

    for (let numero of numeros){
        soma = soma + numero
    }

    return soma
}

for (let usuario of usuarios){
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0){
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}