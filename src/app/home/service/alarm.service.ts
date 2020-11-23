import {Injectable} from '@angular/core';
import {Alarm} from '../model/Alarm';

@Injectable({
    providedIn: 'root'
})
export class AlarmService {

    constructor() {
    }

    alarmList: Alarm[] = [
        {day: 'Saturday', hours: '030:40', title: 'Alarm for medicine', isEnable: false},
        {day: 'Sunday', hours: '040:40', title: 'Alarm for XYZ', isEnable: false},
        {day: 'Monday', hours: '040:40', title: 'Alarm for abcs', isEnable: false},
        {day: 'Friday', hours: '12:40', title: 'Alarm for Namaj', isEnable: true},
        {day: 'Friday', hours: '12:40', title: 'Alarm for Namaj', isEnable: true},
        {day: 'Friday', hours: '12:40', title: 'Alarm for Namaj', isEnable: true},
        {day: 'Friday', hours: '12:40', title: 'Alarm for Namaj', isEnable: false},
    ];


    getList(): Alarm[] {
        return this.alarmList;
    }

    createAlarm(payload: Alarm) {
        this.alarmList.push(payload);
    }
}
