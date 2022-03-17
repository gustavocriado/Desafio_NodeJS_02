class Aluno
{
    // Properties
     public nome: string;
     public idade: number;
     public nota: number;
     public peso: number;
     public altura: number;
     public ehDev: boolean;

    constructor(nome : string, idade : number, nota: number, peso:number, altura : number, ehDev: boolean  )
    {
        this.nome = nome; 
        this.idade = idade; 
        this.nota = nota;
        this.peso = peso;
        this.altura = altura;
        this.ehDev = ehDev;
    }
}

export {Aluno}