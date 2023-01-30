import { Component, OnChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  taskform: any = FormGroup;
  taskstatus: any = FormGroup;
  taskdata = [''];
  i: any;
  sessiondata: any = '';
  nodata: boolean = false;
  completed: boolean = true;
  progress: boolean = false;
  pending: boolean = false;
  taskinfo: any;
  text: any;
  sessionupdate: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) // private snackBar: MatSnackBar
  {}
  ngOnInit(): void {
    this.taskformBuild();
    this.session();
  }

  taskformBuild(): void {
    this.taskform = this.formBuilder.group({
      Task: new FormControl('', [Validators.required]),
    });
  }
  taskstatusForm() {
    this.taskstatus = this.formBuilder.group({
      status: ['', Validators.required],
    });
  }
  statusUpdate() {
    this.taskstatusForm();
    console.log(this.taskstatus.value);
  }
  // openSuccesssSnackBar() {
  //   this._snackBar.open('Added Successfully', '', {});
  // }
  task() {
    this.sessionupdate.push(this.taskform.value.Task);
    sessionStorage.setItem('name', JSON.stringify(this.sessionupdate));

    console.log('yes');
    console.log(this.taskform.value.Task);
    this.taskdata = this.taskform.value.Task;

    this.ngOnInit();
  }
  session() {
    this.sessiondata = sessionStorage.getItem('name');

    if (this.sessiondata == null) {
      this.nodata = true;
    } else if (this.sessiondata != null) {
      this.nodata = false;

      this.taskinfo = JSON.parse(this.sessiondata);

      console.log(this.taskinfo);
      console.log(this.sessiondata);
      // for(let i of this.taskinfo) { console.log(i); }
    }
  }
  Completed() {
    this.completed = true;
    this.progress = false;
    this.pending = false;
    console.log(this.completed);
  }
  Progress() {
    this.progress = true;
    this.pending = false;
    this.completed = false;
  }
  Pending() {
    this.progress = false;
    this.completed = false;
    this.pending = true;
  }
}
