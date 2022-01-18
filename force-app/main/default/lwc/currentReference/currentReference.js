/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-18-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
export default class CurrentReference extends LightningElement {
    @wire(CurrentPageReference)
    pageRef;

    get pageReference() {
        return this.pageRef ? JSON.stringify(this.pageRef, null, 2) : '';
    }
}