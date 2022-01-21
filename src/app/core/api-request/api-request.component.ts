import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-api-request',
  templateUrl: './api-request.component.html',
  styleUrls: ['./api-request.component.scss']
})
export class ApiRequestComponent implements OnInit {

  singleResObject: any;
  MultipleResObjectArr!: any[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getSingleTodo();
    this.getMutipleTodos();
  }

  getSingleTodo(){
    this.api.getTodo(1).subscribe((res:any)=>{
      console.log(res);
      this.singleResObject = res
    })
  }

  getMutipleTodos(){
    this.api.getMultipleTodos(2, 3, 4)
   .subscribe((res: any[]) => {
     console.log(res);
     this.MultipleResObjectArr = res;
   })}

}
