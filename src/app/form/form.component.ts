import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  testForm: any=  FormGroup;
  submitted: boolean = false;
  stateList : any = [
    {id: 1, name:'Maharastra'},
    {id: 1, name:'Bihar'},
    {id: 1, name:'Rajasthan'},
    {id: 1, name:'Gujarat'},
    {id: 1, name:'MP'}
  ];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {

    this.testForm = this.fb.group({
        name: new FormControl('',[Validators.required]),
        job: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required]),
        phone: new FormControl('',[Validators.required]),
        stateId: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {

  }

  submitForm(){

    this.submitted = true;
    console.log(this.testForm.valid);
    if(this.testForm.valid){
      let data = this.testForm.value;
      this.http.post('https://reqres.in/api/users', data ).subscribe(res=>{
        console.log(res);
        alert(res);
      })

    }
  }

}
