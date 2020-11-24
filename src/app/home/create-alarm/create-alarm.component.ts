import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AlarmService} from '../service/alarm.service';
import {AlarmData} from '../model/IAlarm';

@Component({
    selector: 'app-create-alarm',
    templateUrl: './create-alarm.component.html',
    styleUrls: ['./create-alarm.component.scss'],
})
export class CreateAlarmComponent implements OnInit {

    modelData: AlarmData = new AlarmData([''], '', '', true);

    constructor(public modalController: ModalController, public service: AlarmService) {
    }

    ngOnInit() {

    }

    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }

    save() {
        console.log(this.modelData);
        const dateformat = new Date(this.modelData.hours);
        this.modelData.hours = dateformat.toLocaleTimeString();
        console.log(this.modelData.hours);
        this.service.createAlarm(this.modelData);
        this.dismiss();
    }

}
