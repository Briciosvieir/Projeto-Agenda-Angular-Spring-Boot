export class Contato{
    id:number | undefined;
    nome:string | undefined;
    email:string | undefined;
    favorito:boolean | undefined;


    constructor(nome:string, email:string){
        this.nome= nome
        this.email = email
    }
}