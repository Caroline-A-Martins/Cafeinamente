let dados = [
    {
        titulo: "Café Preto",
        descricao:
            "O café preto, na sua forma mais pura, é a infusão dos grãos de café moídos em água quente. Sem adição de leite, açúcar ou outros ingredientes, ele revela o sabor mais autêntico do café, com suas nuances de amargor, acidez e corpo.",
        imagem:
            "https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pagina: "receitas/cafe-preto.html", // Adicione o nome da página para a receita
    },
    {
        titulo: "Café au Lait",
        descricao:
            "O café au lait é uma bebida francesa que combina café filtrado com uma quantidade igual de leite vaporizado, criando um equilíbrio perfeito entre café e leite.",
        imagem:
            "https://images.unsplash.com/photo-1544787219-2c5077fcfcf1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pagina: "cafe-au-lait.html", // Adicione o nome da página para a receita
    },
    {
        titulo: "Capuccino",
        descricao:
            "Uma bebida clássica e apreciada em todo o mundo, o capuccino é a combinação perfeita entre café espresso, leite vaporizado e espuma cremosa.",
        imagem:
            "https://images.unsplash.com/photo-1462917882517-e150004895fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pagina: "capuccino.html", // Adicione o nome da página para a receita
    },
    {
        titulo: "Tiramisu",
        descricao:
            "Com camadas alternadas de biscoitos macios embebidos em café forte e um creme leve e cremoso feito com mascarpone, ovos e açúcar, essa sobremesa oferece uma combinação perfeita de sabores e texturas.",
        imagem:
            "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        pagina: "tiramisu.html", // Adicione o nome da página para a receita
    },
    {
        titulo: "Frapuccino",
        descricao:
            "Essa mistura deliciosa de café, leite, gelo e diversos sabores é perfeita para se refrescar nos dias quentes ou para quem busca uma opção energizante.",
        imagem:
            "https://images.unsplash.com/photo-1637178036667-11e73cf094b7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pagina: "frapuccino.html", // Adicione o nome da página para a receita
    },
    {
        titulo: "Mocha",
        descricao:
            "O mocha é uma bebida quente que combina café expresso, chocolate e leite vaporizado, criando uma experiência saborosa e reconfortante.",
        imagem:
            "https://images.unsplash.com/photo-1561882468-9110e03e0f78?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pagina: "mocha.html", // Adicione o nome da página para a receita
    },
    {
        titulo: "Latte",
        descricao:
            "O latte é uma bebida à base de espresso e leite vaporizado, conhecido por sua textura suave e cremosa.",
        imagem:
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pagina: "latte.html", // Adicione o nome da página para a receita
    },
    {
        titulo: "Macchiato",
        descricao:
            "O macchiato é um espresso com um toque de leite, perfeito para quem gosta de um café mais forte com um toque cremoso.",
        imagem:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbYxxHiqaEpEjJdfHH2lrIA-z05OtzbSyyg&s",
        pagina: "macchiato.html", // Adicione o nome da página para a receita
    },
    {
        titulo: "Affogato",
        descricao:
            "O affogato é uma sobremesa simples e deliciosa que consiste em uma bola de sorvete coberta com espresso quente.",
        imagem:
            "https://img.freepik.com/fotos-gratis/close-up-de-um-delicioso-chocolate-quente_23-2148799161.jpg?ga=GA1.1.1216350477.1725581398&semt=ais_hybrid",
        pagina: "affogato.html", // Adicione o nome da página para a receita
    },
    {
        titulo: "Café Gelado",
        descricao:
            "O café gelado é uma opção refrescante feita com café preparado e resfriado, servido com gelo e, frequentemente, adoçado com leite ou creme.",
        imagem:
            "https://images.unsplash.com/photo-1562878424-0da674456d33?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pagina: "cafe-gelado.html", // Adicione o nome da página para a receita
    },

    {
        titulo: "Espresso",
        descricao:
            "O espresso é um café forte e concentrado, preparado por meio da passagem de água quente sob alta pressão através de grãos de café moídos finamente.",
        imagem:
            "https://images.unsplash.com/photo-1558416165-5fb04b79b0e7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pagina: "espresso.html", // Adicione o nome da página para a receita
    },
    {
        titulo: "Milk Shake de Café",
        descricao:
            "O Milk Shake de Café é uma bebida refrescante que combina a cremosidade do sorvete com o sabor intenso do café. Perfeito para os dias quentes, ele oferece uma mistura equilibrada de doçura e amargor, com uma textura suave e gelada. Ideal para quem busca um toque energizante, o milk shake de café é uma excelente opção para quem quer desfrutar do sabor do café de uma forma mais indulgente e refrescante.",
        imagem:
            "https://images.unsplash.com/photo-1603903631623-3a1f769e45cf?q=80&w=1094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pagina: "milk-shake-cafe.html", // Adicione o nome da página para a receita
    },
];
