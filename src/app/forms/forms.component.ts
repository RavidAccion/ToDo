import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

  myform: any = FormGroup;
  paspat = " ^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$. ";
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myformBuild();
  }

  myformBuild(): void {
    this.myform = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]
      ),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        // Validators.pattern(this.paspat)
      ]
      )
    },)
  }


  subData() {
    console.log(this.myform.value.email)
    console.log(this.myform.value.Password)
    // if (this.myform.value.email = "ravid@gmail.com" && this.myform.value.Password == 1234567) {
    //   console.log("ok")
    //   this.router.navigate([`/home`]);
    // } else {
    //   console.log("no")
    // }
    if (this.myform.valid) {
      console.log("ok")
      this.router.navigate([`/home`]);
    } else {
      console.log("no")
    }
  }

}
