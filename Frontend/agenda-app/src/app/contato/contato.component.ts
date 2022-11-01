import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from '../contato.service';
import { Contato } from './contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formulario!:FormGroup ;
  contatos:Contato[]=[]
  colunas = ['id','nome','email','favorito']
  constructor(
    private service: ContatoService,
    private formB : FormBuilder

  ) { }

  ngOnInit(): void {
this.MontarFormulario();
this.listarContatos();

  }

  MontarFormulario(){
    this.formulario = this.formB.group({
      nome:['',Validators.required],
      email:['',[Validators.email,Validators.required] ]
    })
  }


  listarContatos(){
    this.service.list().subscribe(response=>{
      this.contatos = response;
    })
  }

  favoritar(contato: Contato){
    this.service.favorite(contato).subscribe(response=>{
    contato.favorito =!contato.favorito;
  })
  }

  submit(){
    const formValues = this.formulario.value
    const contato:Contato = new Contato(formValues.nome, formValues.email);
    
   this.service.save(contato).subscribe(resposta=>{
    let lista: Contato[] =[... this.contatos,resposta]
    this.contatos = lista;
   })
    
  }



}
