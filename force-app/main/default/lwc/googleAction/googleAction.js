/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-28-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, api } from 'lwc';

export default class GoogleAction extends LightningElement {
    @api recordId;
    @api invoke() {
        console.log("invoked", this.recordId);
        window.open("https://google.com", "_blank");
    }
}