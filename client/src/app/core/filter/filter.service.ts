import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

  constructor() {
   }

  public tableData(initialData, filterData): object[] {
    const finalChar = 10;
    const keyword = filterData.keyword !== null ? filterData.keyword.toLowerCase().trim() : null;
    const category = filterData.category !== null ? filterData.category.toLowerCase().trim() : null;
    const date = filterData.date !== null ? this.formatDate(filterData.date) : null;
    const result = initialData.filter((job) => {
      let isSuccess = true;
      if (keyword) {
        if (!job.title.toLowerCase().trim().includes(keyword) &&
         !job.description.toLowerCase().trim().includes(keyword)) {
          // break;
          isSuccess = false;
        }
      }
      if (category) {
        if (job.JobCategory.name.toLowerCase().trim() !== category) {
          // break;
          isSuccess = false;
        }
      }
      if (date) {
        if (date !== ('' + job.createdAt).substring(0, finalChar)) {
          // break;
          isSuccess = false;
        }
      }

      return isSuccess === true;
    });
    return result;
  }

  private formatDate(date: string): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) { month = '0' + month };
    if (day.length < 2) { day = '0' + day };

    return [year, month, day].join('-');
}

}
