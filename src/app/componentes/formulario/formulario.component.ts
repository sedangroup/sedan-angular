import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  addColaborador:any = {
    _id:'',
    username:'',
    tweet:'',
    updated:''
  };

  constructor(private colaboradorService:UsersService) { }

  ngOnInit(): void {
  }

  addTweet(){
    this.colaboradorService.guardar(this.addColaborador).subscribe({
      next:(tweet) => {
        console.log('guardado con exito')
      }
    });
  }

  //este le toca a daniel

}
