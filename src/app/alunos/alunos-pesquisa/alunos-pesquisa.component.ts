import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-alunos-pesquisa',
  templateUrl: './alunos-pesquisa.component.html',
  styleUrls: ['./alunos-pesquisa.component.scss']
})
export class AlunosPesquisaComponent implements OnInit {

  queryField = new FormControl();
  results$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.queryField.value);
  }

}
