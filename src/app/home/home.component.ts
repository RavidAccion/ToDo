import { Component,OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  taskform: any = FormGroup;
  taskdata = [''];
  sessiondata :any='';
  nodata: boolean=false;
  taskinfo: any;
  sessionupdate: any=[];
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.taskformBuild();
    this.session();
    
  }
 
  taskformBuild(): void {
    this.taskform = this.formBuilder.group({
      Task: new FormControl('', [
        Validators.required,

      ]
      ),

    },)
  }
  task() {
  
    sessionStorage.setItem('name',JSON.stringify(this.sessionupdate) );
    this.sessionupdate.push(this.taskform.value.Task);
    console.log("yes")
    console.log(this.taskform.value.Task)
    this.taskdata = this.taskform.value.Task;
    //sessionStorage.setItem('name1', JSON.stringify(this.taskdata));
    //  sessionStorage.setItem('name', this.taskform.value.Task);
     this.ngOnInit();
  }
  session(){
    this.sessiondata = sessionStorage.getItem("name");
    console.log(this.sessiondata)
    console.log( this.sessiondata)
    if(this.sessiondata==null){
      this.nodata=true;
    }else if(this.sessiondata!=null){
      this.nodata=false;
      
      this.taskinfo=this.sessiondata;
    }
   
  }

}
