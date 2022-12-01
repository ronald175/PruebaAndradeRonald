import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit{
  title = " Lista de Productos";

  lstPersons = new Array()
  persons: any;

  constructor(private router: Router, private personsService: PersonsService) { }

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(){
    //this.lstProducts = this.productService.getProducts();
    this.persons = this.personsService.getPersonFire()
  }

  goListPersons(){
    console.log("llamando listado")
    this.router.navigate(['listPersonas'])
  }

  eliminarPersons(persons: any){
    console.log("Vamos eliminar la persona de la BD", persons )
    this.personsService.deletePersonsFire(persons)
  }
}
