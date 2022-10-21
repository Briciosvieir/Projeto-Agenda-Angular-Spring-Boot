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

  constructor(
    private service: ContatoService,
    private formB : FormBuilder

  ) { }

  ngOnInit(): void {
this.formulario = this.formB.group({
  nome:['',Validators.required],
  email:['',Validators.email ]
})

  }

  submit(){
    console.log(this.formulario.value)
    /*
    const c: Contato = new Contato();
    c.nome ='jose'
    c.email='123'
    c.favorito=false
    this.service.save(c).subscribe(response=>{
      console.log(response);
    })
    */
  }



}
