import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../../../../../core/category/category.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
})
export class ControlPanelComponent implements OnInit {

  @Output()
  private clickResetEvent = new EventEmitter();
  @Output()
  private clickFilterEvent = new EventEmitter();

  private rForm: FormGroup;
  private keyword: string;
  // private categories: string [];
  private category: string [];
  private date: string;
  private input: string[];

  constructor(private formBuilder: FormBuilder,
              private categoryService: CategoryService) {
  }

  public ngOnInit(): void {
    this.getAllCategories();
    this.rForm = this.formBuilder.group({
      keyword: [null],
      category: [null],
      date: [null],
    });
  }

  private submit(rForm: object): void {
    this.clickFilterEvent.emit(rForm);
  }

  private reset(): void {
    this.clickResetEvent.emit(null);
    this.rForm.reset();
  }

  private getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe((res) => {
      console.log('!!! get All categories res !!!', res.categories);
      this.input = res.categories;
    });
  }
}
