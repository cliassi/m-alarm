import {Injectable} from '@angular/core';
import {IAlarm} from '../model/IAlarm';

@Injectable({
    providedIn: 'root'
})
export class AlarmService {

    constructor() {
    }

    alarmList: IAlarm[] = [
        {day: ['Saturday', 'Sunday', 'Monday'], hours: '1:31:04 AM', title: 'Alarm for medicine', isEnable: false},
        {day: ['Saturday', 'Sunday', 'Monday'], hours: '1:31:04 AM', title: 'Alarm for XYZ', isEnable: false},
        {day: ['Saturday', 'Sunday', 'Monday'], hours: '1:31:04 AM', title: 'Alarm for abcs', isEnable: false},
        {day: ['Saturday', 'Sunday', 'Monday'], hours: '1:31:04 AM', title: 'Alarm for Namaj', isEnable: true},
        {day: ['Saturday', 'Sunday', 'Monday'], hours: '1:31:04 AM', title: 'Alarm for Namaj', isEnable: true},
        {day: ['Saturday', 'Sunday', 'Monday'], hours: '1:31:04 AM', title: 'Alarm for Namaj', isEnable: true},
        {day: ['Saturday', 'Sunday', 'Monday'], hours: '1:31:04 AM', title: 'Alarm for Namaj', isEnable: false},
    ];


    getList(): IAlarm[] {
        return this.alarmList;
    }

    createAlarm(payload: IAlarm) {
        this.alarmList.push(payload);
    }
}
