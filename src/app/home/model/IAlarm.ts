export interface IAlarm {
    day:string[];
    hours: string;
    title: string;
    isEnable: boolean;
}

export class AlarmData implements IAlarm {
    day: string[];
    hours: string;
    title: string;
    isEnable: boolean;

    constructor(day: string[],
                hours: string,
                title: string,
                isEnable: boolean) {
        this.day = day;
        this.hours = hours;
        this.title = title;
        this.isEnable = isEnable;
    }
}
