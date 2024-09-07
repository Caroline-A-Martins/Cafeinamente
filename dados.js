let dados = [
    {
        id: 1,
        titulo: "Café Preto",
        descricao:
            "O café preto, na sua forma mais pura, é a infusão dos grãos de café moídos em água quente. Sem adição de leite, açúcar ou outros ingredientes, ele revela o sabor mais autêntico do café, com suas nuances de amargor, acidez e corpo.",
        imagem:
            "https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredientes: [
            "1 colher de sopa de pó de café (para cada 200 ml de água)",
            "200 ml de água filtrada"
        ],
        preparo: [
            "Aqueça a água: Coloque a água para esquentar, mas não deixe ferver completamente. O ideal é que a água atinja cerca de 90°C, antes de formar bolhas grandes de fervura.",
            "Prepare o filtro: Coloque o filtro de papel no coador (ou utilize um coador de pano) e adicione o pó de café.",
            "Faça a infusão: Despeje a água quente lentamente sobre o pó de café, em movimentos circulares. Isso ajuda a extrair todos os sabores do café de maneira uniforme."
        ],
      
    },
    {
        id: 2,
        titulo: "Café au Lait",
        descricao:
            "O café au lait é uma bebida francesa que combina café filtrado com uma quantidade igual de leite vaporizado, criando um equilíbrio perfeito entre café e leite.",
        imagem:
            "https://images.unsplash.com/photo-1544787219-2c5077fcfcf1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredientes: [
            "1 xícara de café filtrado",
            "1 xícara de leite vaporizado"
        ],
        preparo: [
            "Prepare o café filtrado e coloque em uma xícara.",
            "Aqueça o leite e adicione-o ao café, criando um equilíbrio entre café e leite."
        ]
    },
    {
        id: 3,
        titulo: "Capuccino",
        descricao:
            "Uma bebida clássica e apreciada em todo o mundo, o capuccino é a combinação perfeita entre café espresso, leite vaporizado e espuma cremosa.",
        imagem:
            "https://images.unsplash.com/photo-1462917882517-e150004895fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredientes: [
            "1 dose de café espresso",
            "150 ml de leite vaporizado",
            "50 ml de espuma de leite"
        ],
        preparo: [
            "Prepare o café espresso e coloque em uma xícara.",
            "Adicione o leite vaporizado.",
            "Cubra com espuma de leite."
        ]
    },
    {
        id: 4,
        titulo: "Tiramisu",
        descricao:
            "Com camadas alternadas de biscoitos macios embebidos em café forte e um creme leve e cremoso feito com mascarpone, ovos e açúcar, essa sobremesa oferece uma combinação perfeita de sabores e texturas.",
        imagem:
            "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ingredientes: [
            "200g de biscoitos champagne",
            "250g de mascarpone",
            "3 ovos",
            "100g de açúcar",
            "200ml de café forte"
        ],
        preparo: [
            "Prepare o café e deixe esfriar.",
            "Separe as gemas das claras e bata as claras em neve.",
            "Misture as gemas com o açúcar até obter um creme claro.",
            "Adicione o mascarpone à mistura de gemas e açúcar.",
            "Incorpore as claras em neve delicadamente à mistura.",
            "Mergulhe os biscoitos no café e coloque uma camada no fundo de uma travessa.",
            "Cubra com uma camada do creme de mascarpone.",
            "Repita as camadas e finalize com o creme.",
            "Refrigere por pelo menos 4 horas antes de servir."
        ]
    },
    {
        id: 5,
        titulo: "Frapuccino",
        descricao:
            "Essa mistura deliciosa de café, leite, gelo e diversos sabores é perfeita para se refrescar nos dias quentes ou para quem busca uma opção energizante.",
        imagem:
            "https://images.unsplash.com/photo-1637178036667-11e73cf094b7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredientes: [
            "1 xícara de café forte",
            "1/2 xícara de leite",
            "1/2 xícara de gelo",
            "3 colheres de sopa de açúcar (ou a gosto)"
        ],
        preparo: [
            "Bata todos os ingredientes no liquidificador até obter uma mistura homogênea e cremosa.",
            "Sirva imediatamente em um copo."
        ]
    },
    {
        id: 6,
        titulo: "Mocha",
        descricao:
            "O mocha é uma bebida quente que combina café expresso, chocolate e leite vaporizado, criando uma experiência saborosa e reconfortante.",
        imagem:
            "https://images.unsplash.com/photo-1561882468-9110e03e0f78?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredientes: [
            "1 dose de café espresso",
            "100g de chocolate meio amargo",
            "150 ml de leite vaporizado"
        ],
        preparo: [
            "Derreta o chocolate em banho-maria ou no micro-ondas.",
            "Prepare o café espresso e misture com o chocolate derretido.",
            "Adicione o leite vaporizado e mexa bem.",
            "Sirva quente."
        ]
    },
    {
        id: 7,
        titulo: "Latte",
        descricao:
            "O latte é uma bebida à base de espresso e leite vaporizado, conhecido por sua textura suave e cremosa.",
        imagem:
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredientes: [
            "1 dose de café espresso",
            "200 ml de leite vaporizado"
        ],
        preparo: [
            "Prepare o café espresso e coloque em uma xícara.",
            "Aqueça o leite e adicione-o ao café espresso.",
            "Misture bem e sirva."
        ]
    },
    {
        id: 8,
        titulo: "Macchiato",
        descricao:
            "O macchiato é um espresso com um toque de leite, perfeito para quem gosta de um café mais forte com um toque cremoso.",
        imagem:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbYxxHiqaEpEjJdfHH2lrIA-z05OtzbSyyg&s",
        ingredientes: [
            "1 dose de café espresso",
            "1 colher de sopa de leite vaporizado"
        ],
        preparo: [
            "Prepare o café espresso e coloque em uma xícara.",
            "Adicione uma colher de sopa de leite vaporizado sobre o espresso.",
            "Sirva imediatamente."
        ]
    },
    {
        id: 9,
        titulo: "Affogato",
        descricao:
            "O affogato é uma sobremesa simples e deliciosa que consiste em uma bola de sorvete coberta com espresso quente.",
        imagem:
            "https://img.freepik.com/fotos-gratis/close-up-de-um-delicioso-chocolate-quente_23-2148799161.jpg?ga=GA1.1.1216350477.1725581398&semt=ais_hybrid",
        ingredientes: [
            "1 bola de sorvete (sabor de sua preferência)",
            "1 dose de café espresso quente"
        ],
        preparo: [
            "Coloque a bola de sorvete em um copo ou taça.",
            "Despeje o café espresso quente sobre o sorvete.",
            "Sirva imediatamente."
        ]
    },
    {
        id: 10,
        titulo: "Café Gelado",
        descricao:
            "O café gelado é uma opção refrescante feita com café preparado e resfriado, servido com gelo e, frequentemente, adoçado com leite ou creme.",
        imagem:
            "https://images.unsplash.com/photo-1562878424-0da674456d33?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredientes: [
            "1 xícara de café forte",
            "1/2 xícara de leite ou creme",
            "Gelo a gosto",
            "Açúcar a gosto"
        ],
        preparo: [
            "Prepare o café e deixe esfriar.",
            "Coloque o café frio em um copo com gelo.",
            "Adicione leite ou creme e açúcar a gosto.",
            "Misture bem e sirva."
        ]
    },
    {
        id: 11,
        titulo: "Milk Shake de Café",
        descricao:
            "O Milk Shake de Café é uma bebida refrescante que combina a cremosidade do sorvete com o sabor intenso do café. Perfeito para os dias quentes, ele oferece uma mistura equilibrada de doçura e amargor, com uma textura suave e gelada.",
        imagem:
            "https://images.unsplash.com/photo-1603903631623-3a1f769e45cf?q=80&w=1094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredientes: [
            "1 xícara de café forte",
            "1/2 xícara de sorvete de baunilha",
            "1/2 xícara de leite",
            "1 colher de sopa de açúcar"
        ],
        preparo: [
            "Coloque todos os ingredientes no liquidificador.",
            "Bata até obter uma mistura cremosa e homogênea.",
            "Sirva imediatamente em um copo."
        ]
    }
];
