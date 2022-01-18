/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-18-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {

    navigateToRecordInViewMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0031X00000mahisQAA',
                objectApiName: 'Contact',
                actionName: 'view'
            }
        })
    }

    navigateToRecordInEditMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0031X00000mahisQAA',
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        })
    }
}