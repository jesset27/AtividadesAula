 class Carro{
    constructor(marca, modelo, ano, cor, kilometragem, valor_fipe){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.kilometragem = kilometragem;
    this.valor_fipe = valor_fipe;
    };

    anosUtilizacao(){
        const anoAtual = new Date().getFullYear();
        const anos = anoAtual - this.ano;
        return anos;
    }
    
    valorMercado(){
        if(this.kilometragem <= 30000){
            return this.valor_fipe * 1.1;
        } else if(this.kilometragem > 30000 && this.kilometragem <= 50000){
            return this.valor_fipe;
        } else {
            return this.valor_fipe * 0.9;
        }
    }
    mostrarDado() {
        const res = document.querySelector('#res');
        res.innerHTML =  Carro.prototype.constructor.name + ': Marca: ' + this.marca + 
        " Modelo: " + this.modelo + 
        " Ano: " + this.ano + ' Cor: ' + this.cor + 
        ' Kilometragem: ' + this.kilometragem + 
        ' Valor da fipe: ' + this.valor_fipe + " Idade do veiculo: " + this.anosUtilizacao() + 
        " Valor de Mercado: " + this.valorMercado();
    }
    
}


const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    const marca = document.querySelector('#marca').value;
    const modelo = document.querySelector('#modelo').value;
    const ano = document.querySelector('#ano').value;
    const cor = document.querySelector('#cor').value;
    const kilometragem = document.querySelector('#kilometragem').value;
    const valor_fipe = document.querySelector('#valor_fipe').value;
    const carro = new Carro(marca, modelo, ano, cor, kilometragem, valor_fipe);
    carro.mostrarDado();
    
});