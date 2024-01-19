import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timelapsed'
})
export class TimeElapsedPipe implements PipeTransform {
  transform(dateAdmission: string): number {
    const dateAdmissionMs = new Date(dateAdmission).getTime();
    const hourMs = new Date().getTime();
    const diference = (hourMs - dateAdmissionMs) / (1000 * 60 * 60);
    return Math.floor(diference);
  }
}