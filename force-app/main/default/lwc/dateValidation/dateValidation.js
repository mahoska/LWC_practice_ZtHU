/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-18-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {

    startDate;
    endDate;
    error;

    dateHandler(event) {
        const { name, value } = event.target;
        this[name] = value; //this['startDate'] = value
    }

    submitHandler() {
        if (this.validateDate(this.startDate, this.endDate)) {
            console.log("Data is valid");
        } else {
            this.error = "End Date cannot be greater than Start Date";
        }
    }

    validateDate(startDate, endDate) {
        return new Date(startDate).getTime() < new Date(endDate).getTime()
    }

}