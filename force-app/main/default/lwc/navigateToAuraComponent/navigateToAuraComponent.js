/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-18-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToAuraComponent extends NavigationMixin(LightningElement) {

    navigateToAura() {
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__AuraNavigation'
            },
            state: {
                "c__id": '0031X00000mahisQAA'
            }
        })
    }
}