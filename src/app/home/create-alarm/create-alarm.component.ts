import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AlarmService} from '../service/alarm.service';
import {AlarmData} from '../model/Alarm';

@Component({
    selector: 'app-create-alarm',
    templateUrl: './create-alarm.component.html',
    styleUrls: ['./create-alarm.component.scss'],
})
export class CreateAlarmComponent implements OnInit {

    modelData: AlarmData = new AlarmData('', '', '', true);

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
        // this.service.createAlarm(this.modelData);
    }

}
