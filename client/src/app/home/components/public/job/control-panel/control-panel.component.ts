import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { CommonModule } from '../../../../../shared/modules/shared/shared.module';
@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  rForm: FormGroup;
  keyword: string;
  select: string;
  date: string;
  
  categories = [
    'cat A',
    'cat B',
    'cat C',
    'cat D',
  ]

  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.rForm= this.formBuilder.group({
      keyword: [null,],
      select: [null],
      date: [null],
    })
    
  }

  submit(rForm){
   console.log('filter submit');
  }

}
