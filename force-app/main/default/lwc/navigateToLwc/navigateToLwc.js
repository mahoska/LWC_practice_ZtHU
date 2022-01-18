/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-18-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToLwc extends NavigationMixin(LightningElement) {

    navigateToLwc() {
        var definition = {
            componentDef: 'c:quizApp'
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: "/one/one.app#" + btoa(JSON.stringify(definition))
            }
        })
    }

    navigateToLwcWithSendData() {
        var definition = {
            componentDef: 'c:navigationLwcTarget',
            attributes: {
                recordId: '0011X00000wViIQQA0'
            }
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: "/one/one.app#" + btoa(JSON.stringify(definition))
            }
        })
    }
}