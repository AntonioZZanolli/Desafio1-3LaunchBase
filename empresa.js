const empresa = {
    Nome: "Rocketseat",
    Cor: "Roxo",
    Foco: "Programação",
    Endereço: {
        Rua: "Rua Guilherme Gembala",
        Número: 260
    },
}

console.log(`A empresa ${empresa.Nome} está localizada em ${empresa.Endereço.Rua}, ${empresa.Endereço.Número}`)

const programador = {
    nome: 'Lucas',
    idade: 23,
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'Desktop',
        },
        {
            nome: 'Python',
            especialidade: 'Data Science',
        },
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile',
        },
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)