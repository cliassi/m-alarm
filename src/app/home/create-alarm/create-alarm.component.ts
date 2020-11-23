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

    @Input() modal: any;
    @Input() asdsd: any;

    modelData: AlarmData = new AlarmData('', '', '', true);

    constructor(public modalController: ModalController, public service: AlarmService) {
        console.log(this.asdsd);
    }

    ngOnInit() {
    }

    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true
        }).then(() => this.modal = null);
    }

    save() {
        console.log(this.modelData);
        // this.service.createAlarm(this.modelData);
    }

}
