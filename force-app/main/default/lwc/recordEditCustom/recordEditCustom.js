/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-21-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordEditCustom extends LightningElement {

    objectName = ACCOUNT_OBJECT;
    inputValue = ''

    handleChange(event) {
        this.inputValue = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
        const inputCmp = this.template.querySelector('lightning-input');
        const value = inputCmp.value;
        if (!value.includes('Australia')) {
            inputCmp.setCustomValidity("Theaccount name must include 'Australia'");
        } else {
            inputCmp.setCustomValidity("");
            const fields = event.detail.fields;
            fields.Name = this.inputValue;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }

        inputCmp.reportValidity();

    }

    successHandler(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

    errorHandler(event) {
        const toastEvent = new ShowToastEvent({
            title: "Error creating Account",
            message: event.detail.message,
            variant: "error"
        });
        this.dispatchEvent(toastEvent);
    }

}