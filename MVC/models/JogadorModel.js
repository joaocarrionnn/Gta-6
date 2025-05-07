
class Produto {
    nome;
    preco;
    precoOriginal;

    constructor(nome, preco) {
        this.nome = nome;//nome do produto
        this.preco = preco;//preço do produto que será aplicado o desconto
        this.precoOriginal = preco;//preço original
    }

    aplicarDesconto(percentual) {
        const desconto = (this.precoOriginal * percentual) / 100;//preço original * o percenrual / por 100
        this.preco = this.precoOriginal - desconto; //preço original - o resultado da conta a cima
    }

    mostrarResumo() {
        console.log(`Produto: ${this.nome}`);// imprime o nome do produto
        console.log(`Preço original: R$ ${this.precoOriginal}`);// imprime o preço original do produto
        console.log(`Preço com desconto: R$ ${this.preco}`);//imprime o preço do produto após o valor do desconto aplicado
    }
}


const produto = new Produto("Camiseta", 200);//exemplo de nome de um produto e do preço dele
produto.aplicarDesconto(20);// % de desconto do produto 
produto.mostrarResumo();//imprime
