import {Component, OnInit} from '@angular/core';

interface Alarm {
    day: string;
    hours: string;
    title: string;
    isEnable: boolean;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

    alarmList: Alarm[] = [
        {day: 'Saturday', hours: '030:40', title: 'Alarm for medicine', isEnable: false},
        {day: 'Sunday', hours: '040:40', title: 'Alarm for XYZ', isEnable: false},
        {day: 'Monday', hours: '040:40', title: 'Alarm for abcs', isEnable: false},
        {day: 'Friday', hours: '12:40', title: 'Alarm for Namaj', isEnable: true},
        {day: 'Friday', hours: '12:40', title: 'Alarm for Namaj', isEnable: true},
        {day: 'Friday', hours: '12:40', title: 'Alarm for Namaj', isEnable: true},
        {day: 'Friday', hours: '12:40', title: 'Alarm for Namaj', isEnable: false},
    ];
    myValue = true;


    classes: any = {
        display: 'flex', 'justify-content': 'space-around', 'align-items': 'center',
        'border-bottom': '2px solid white'
    };

    constructor() {
    }

    /* <ion-toggle [(ngModel)]="myValue" (ionChange)="myChange($event)"/>
*/
    baba: any = {
        color: 'red'
    };

    myChange(value: boolean, i: any) {
        /*  event.stopImmediatePropagation();
          event.stopPropagation();
          event.preventDefault();*/
        console.log(i);
        this.myValue = !this.myValue;
        this.alarmList[i].isEnable = value;
        this.ngOnInit();
    }

    ngOnInit(): void {
        console.log(this.alarmList);
    }
}
