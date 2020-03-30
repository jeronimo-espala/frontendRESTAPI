import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-alunos-pesquisa',
  templateUrl: './alunos-pesquisa.component.html',
  styleUrls: ['./alunos-pesquisa.component.scss']
})
export class AlunosPesquisaComponent implements OnInit {

  queryField = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.queryField.value);
  }

}
