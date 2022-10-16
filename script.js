// SEMANA1 - criar variaveis e itens

// const titulo = "Pai rico pai pobre"
// const anoDaPublicacao = 2018
// const autorBrasileiro = false
// const caracteristicas = ["capa comum ", "finanças pessoais e Economia"]

// const titulo2 = "O corpo fala"
// const anoDaPublicacao2 = 2018
// const autorBrasileiro2 = false
// const caracteristicas2 = ["capa comum ", "psicologia e saúde mental"]

// const titulo3 = "Tecnicas de invasão"
// const anoDaPublicacao3 = 2019
// const autorBrasileiro3 = true
// const caracteristicas3 = ["capa comum ", "tecnolgias e segurança"] //SEMANA2 - cria uma caracteristica um objetos

// console.log(`${titulo.toUpperCase()} \nAno da publicação: ${anoDaPublicacao} \nAutor Brasileiro: ${autorBrasileiro} \nDescrição: ${caracteristicas}`
// ); 

// console.log(`${titulo2.toUpperCase()} \nAno da publicação: ${anoDaPublicacao2} \nAutor Brasileiro: ${autorBrasileiro2} \nDescrição: ${caracteristicas2}`

// ); 

// console.log(`${titulo3.toUpperCase()} \nAno da publicação: ${anoDaPublicacao3} \nAutor Brasileiro: ${autorBrasileiro3} \nDescrição: ${caracteristicas3}`
// ); 






/*Calculando media entre valores

const mediaAnoPublicacao = (anoDaPublicacao1+ anoDaPublicaca2 + anoDaPublicacao3) / 3;
console.log(mediaAnoPublicacao)

const verificaSeAutorBrasileiro = autorBrasileiro1 && autorBrasileiro2 && autorBrasileiro3
console.log(verificaSeAutorBrasileiro)

console.log( titulo1.toUpperCase() + 
"\nAno de pubilcação: " + anoDaPublicacao1 + 
"\nAutor é brasileiro: " + autorBrasileiro1 + 
"\nCaracteristicas: " + caracteristicas1) */



//SEMANA3 - transformar os intens em objetos
const objeto1 = {

titulo :"Pai rico pai pobre",
anoDaPublicacao : 2018,
autorBrasileiro : "Não",
caracteristicas : ["capa comum", " finanças pessoais e Economia"],
String : "imagens/pai-rico-pai-pobre.png",
link: "https://www.jacalculei.com.br/contabilidade-online/pai-rico-pai-pobre-resumo-do-livro/"

}

const objeto2 = {

titulo :"O corpo fala",
anoDaPublicacao : 2015,
autorBrasileiro : "Não",
caracteristicas : ["capa comum", " psicologia e saúde mental"],
String : "imagens/o-corpo-fala.png",
link: "https://www.estantedovini.com.br/post/o-corpo-fala-resenha"

}

const objeto3 = {

titulo : "Tecnicas de invasão",
anoDaPublicacao : 2019,
autorBrasileiro : "Sim",
caracteristicas : ["capa comum", " tecnolgias e segurança"],
String : "imagens/tecnicas-de-invasao.png",
link: "https://tecnicasdeinvasao.com/livro-tdi/"

}

const objeto4 = {

    titulo : "Sapiens",
    anoDaPublicacao : 2020,
    autorBrasileiro : "Não",
    caracteristicas : ["capa comum", " historia da civilização"],
    String : "imagens/sapiens.jpg",
    link: "https://www.lpm.com.br/site/default.asp?Template=../livros/layout_produto.asp&ID=544407"
    
    }


//Antes os objetos estavam sendo adiconados assim de forma manual dentro no objetos vazio

const objetos = [];
objetos.push(objeto1, objeto2, objeto3, objeto4)



// Para que seja adicionado os livros no objetos deve ter o valor do objeto boleano "TRUE"
// Por isso é feito esta verificação antes do "PUSH"


// SEMANA4 - criar verificação e adiconar ao objetos somente se booleano true( if, else, alert)

// const objetos = [];

//  if (objeto1.autorBrasileiro){

//     objetos.push(objeto1);

// }else {

//     alert("Objeto não foi adicionado: " + objeto1.titulo);
// }

// if (objeto2.autorBrasileiro){

//     objetos.push(objeto2);

// }else {

//     alert("Objeto não foi adicionado: " + objeto2.titulo);
// }

// if (objeto3.autorBrasileiro){

//     objetos.push(objeto3);

// }else {

//     alert("Objeto não foi adicionado: " + objeto3.titulo);
// }

// console.log(objetos)

//SEMANA5 - reescrevendo o relatorio da semana2(modificação la em cima na semana 2)



let string = ""
for(let i in objetos){

    string = `Titulo: ${objetos[i].titulo.toUpperCase()} \nAno de publicação: ${objetos[i].anoDaPublicacao} \nAutor brasileiro: ${objetos[i].autorBrasileiro} \nCaracterisitcas: ${objetos[i].caracteristicas.toString()} `

    // let string = objetos[i].caracteristicas.toString()

    
    // console.log(string)   
}

//SEMANA 6 - criando função que recebe objetos

const recebeObjStr = (objeto) => {
    
    console.log(`Titulo: ${objeto.titulo.toUpperCase()} \nAno de publicação: ${objeto.anoDaPublicacao} \nAutor brasileiro: ${objeto.autorBrasileiro} \nCaracterisitcas: ${objeto.caracteristicas.toString()} `)
    return resultado

}

// recebeObjStr(objeto2)

let retornaObjeto = (livro) =>{
    
    let titulo = objetos.filter((objeto)=> {return objeto.titulo.toUpperCase() === livro.toUpperCase()})
  
    
    if(titulo.length >=1) {

        return titulo
        
     } else{
        alert("Nenhum item foi encontrado")
        return objetos
     }
     
    }
    


// console.log(retornaObjeto(objetos, "Tecnicas de invasão"))

//Da semana 7 a 10 foram usados flex, grid, estilização e responsividade

//Agora segue semana 11 - Manipulação atraves do DOM

     
    // let criarObjetos = (objetos)=>{
    
    // for(let i = 0; i <objetos.length; i++){

    //     let contener = document.getElementById("local")
    //     let novaSection = document.createElement("section")
    //     novaSection.innerHTML = ""
    //     novaSection.classList.add("bloco")
    //     contener.insertAdjacentElement("beforeend", novaSection)
        
    //     novaSection.innerHTML += `

    // <img class="imagensDisplay" src="${objetos[i].String}"alt="imagem do livro"></img>

    // <ul class="organizar">
       
    //         <a class="texto" href='${objetos[i].link}' target="_blank" >${objetos[i].titulo}</a> 
    //         <li>Ano:${objetos[i].anoDaPublicacao}</li>
    //         <li>Autor Brasileiro: ${objetos[i].autorBrasileiro}</li>
    //         <li>Caracteristicas: ${objetos[i].caracteristicas }</li>

    // </ul> `

    // }
    
            
    // }

        let contener = document.getElementById("site")
        let novaDiv = document.createElement("div")
        novaDiv.classList.add("conteudo")
        novaDiv.setAttribute("id", "local")
        contener.insertAdjacentElement("beforeend", novaDiv)

    let criarObjetos = (objetos)=>{
        let novoElemento = document.getElementById("local")
       
        novoElemento.innerHTML = ""
       
    for(let i = 0; i <objetos.length; i++){
             
        

        novoElemento.innerHTML+= `

        <section class="bloco">
    
                <img class="imagensDisplay" src="${objetos[i].String}"alt="imagem do livro"></img>
    
        <ul class="organizar">
           
                <a class="texto" href='${objetos[i].link}' target="_blank" >${objetos[i].titulo}</a> 
                <li>Ano:${objetos[i].anoDaPublicacao}</li>
                <li>Autor Brasileiro: ${objetos[i].autorBrasileiro}</li>
                <li>Caracteristicas: ${objetos[i].caracteristicas }</li>
    
        </ul> 
        <section/>
        `
    
        }
        
                
        }

criarObjetos(objetos)






// let mostrarLivro = ()=>{
    
//     let livroPraLer = document.getElementById("procurar")
//     let livroEscolhido = livroPraLer.value;

//     let livroSelecionado = retornaObjeto(objetos, livroEscolhido)
//     if(livroSelecionado){

    
//     let novoLivro = document.getElementById("local")
//     novoLivro.innerHTML = 
//     criarObjetos(livroSelecionado)
    
//     }
// }
       
let buscarLivro = ()=>{
    let livroEscolhido = document.getElementById("procurar").value
    let livroDisplay = retornaObjeto(livroEscolhido)
    if(livroDisplay){
  
    }
    livroEscolhido.innerHTML = criarObjetos(livroDisplay)
}


let mostrarEntrada = ()=>{
    let livroEscolhido = document.getElementById("procurar").value
    
   
}


