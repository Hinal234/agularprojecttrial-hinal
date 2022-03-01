import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveformmodule',
  templateUrl: './reactiveformmodule.component.html',
  styleUrls: ['./reactiveformmodule.component.css']
})
export class ReactiveformmoduleComponent implements OnInit {
  myForm:any;
  constructor(private fb:FormBuilder) { }



  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   name: new FormControl('Hinal'),
    //   email: new FormControl(''),
    //   message: new FormControl('')
    // });
    this.myForm = this.fb.group({
      name:['Hinal', Validators.required],
      email:['',[Validators.required, Validators.email]],
      message:['',[Validators.required,Validators.minLength(10)]]
    })
    

  }

  onSubmit(form: FormGroup){
    console.log('valid',form.valid);
    console.log('Name', form.value.name);
    console.log('email', form.value.email);
    console.log('message', form.value.message);
  }

}
