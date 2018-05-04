import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategorieService } from '../../../../../core/categorie/categorie.service';

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
  private categories: object [];
  private date: string;

  constructor(private formBuilder: FormBuilder,
    private categorieService: CategorieService ) {
   }

  public ngOnInit(): void {
    this.getAllCategories();
    this.rForm = this.formBuilder.group({
      keyword: [null],
      categories: [null],
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
    this.categorieService.getAllCategories().subscribe((res) => {
      this.categories = res.categories.map((el)=>{
        return el.name;
      });
      console.log('!!! get All categories res !!!', this.category);
      // res=res.categories;
      // const temp = res.categories.map( (el) => {
      //   return el.name;
      // });
    });
  }
}
