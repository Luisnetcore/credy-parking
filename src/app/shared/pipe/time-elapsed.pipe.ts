import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timelapsed'
})
export class TimeElapsedPipe implements PipeTransform {
  transform(dateAdmission: string): number {
    const dateAdmissionMs = new Date(dateAdmission).getTime();
    console.log(1, dateAdmission);
    const currentMs = new Date().getTime();
    const differenceInMs = currentMs - dateAdmissionMs;
    const differenceInHours = differenceInMs / (1000 * 60 * 60);
    console.log(3, differenceInHours);

    return Math.floor(differenceInHours);
  }
}