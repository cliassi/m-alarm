import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CreateAlarmComponent} from './create-alarm/create-alarm.component';
import {AlarmService} from './service/alarm.service';
import {Alarm} from './model/Alarm';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

    alarmList: Alarm[] = [];
    myValue = true;
    currentModal: any;


    classes: any = {
        display: 'flex', 'justify-content': 'space-around', 'align-items': 'center',
        'border-bottom': '2px solid white'
    };

    constructor(public modalController: ModalController, public service: AlarmService) {
    }

    ngOnInit(): void {
        this.alarmList = this.service.getList();
    }

    myChange(value: boolean, i: any) {
        /*  event.stopImmediatePropagation();
          event.stopPropagation();
          event.preventDefault();*/
        console.log(i);
        this.myValue = !this.myValue;
        this.alarmList[i].isEnable = value;
        this.ngOnInit();
    }


    async presentModal() {
        const modal = await this.modalController.create({
            component: CreateAlarmComponent,
            cssClass: 'my-custom-class',
            componentProps: {
                modal: this.currentModal,
                asdsd: 'asdasdasda'
            }
        });
        this.currentModal = modal;
        return await modal.present();
    }
}
