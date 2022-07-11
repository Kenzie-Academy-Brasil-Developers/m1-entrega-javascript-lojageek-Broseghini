let vitrineActions   = document.querySelector(".Actions")
let vitrineFrames        = document.querySelector(".Frames")



function listarProdutos(listaProdutos, departamentoVitrine, vitrine){

    
    for(let i = 0; i<listaProdutos.length; i++){
        
        let produto             = listaProdutos[i]
        let departamentoProduto = produto.departamento
        
        
        if(departamentoProduto == departamentoVitrine){
            let cardProduto    = criarCardProduto(produto)
            vitrine.appendChild(cardProduto)
        }
    }
   
}
listarProdutos(produtos, "Actions", vitrineActions)
listarProdutos(produtos, "Frames", vitrineFrames)


function criarCardProduto(produto){

     
    let nome            = produto.nome
    let preco           = produto.preco
    let imgeUrl         = produto.imgeUrl
  
    
    let tagLi       = document.createElement("li")
    let tagImge     = document.createElement("img")
    let tagNome     = document.createElement("h2")
    let tagPreco    = document.createElement("p")
    let btnComprar  = document.createElement("button")
    
    tagImge.classList.add("imagemProduto")

     
    tagImge.src          = `/img/${imgeUrl}`
    tagImge.alt          = nome
    tagNome.innerText    = nome
    tagPreco.innerText   = `R$ ${preco}`
  
    
    tagLi.appendChild(tagImge)
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)

    return tagLi
}

