import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { CommonModule } from '../../../../../shared/modules/shared/shared.module';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  @Output()
  private clickResetEvent = new EventEmitter();
  @Output()
  private clickFilterEvent = new EventEmitter();

  private rForm: FormGroup;
  private keyword: string;
  private select: string;
  private date: string;
  
  private categories: string[] = [
    'cat A',
    'cat B',
    'cat C',
    'cat D',
  ];

  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.rForm = this.formBuilder.group({
      keyword: [null],
      select: [null],
      date: [null],
    });
  }

  private submit(rForm: object): void {
    this.clickFilterEvent.emit(rForm);
  }

  private reset(): void {
    this.keyword = null;
    this.select = null;
    this.date = null;
    this.clickResetEvent.emit(null);
  }

  private getCategories(): void {
  }

}
