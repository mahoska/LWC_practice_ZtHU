/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-18-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToWebPage extends NavigationMixin(LightningElement) {

    navigateToWeb() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: "https://www.salesforcetroop.com"
            }
        })
    }
}