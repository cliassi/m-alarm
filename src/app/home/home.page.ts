import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CreateAlarmComponent} from './create-alarm/create-alarm.component';
import {AlarmService} from './service/alarm.service';
import {IAlarm, AlarmData} from './model/IAlarm';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

    alarmList: IAlarm[] = [];
    currentModal: any;

    //css
    classes: any = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottom: '2px solid white'
    };

    constructor(public modalController: ModalController, public service: AlarmService) {
    }

    ngOnInit(): void {
        this.alarmList = this.service.getList();
    }

    myChange(value: boolean, i: any) {
        this.alarmList[i].isEnable = value;
        this.ngOnInit();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: CreateAlarmComponent,
            cssClass: 'my-custom-class',
        });
        return await modal.present();
    }
}
