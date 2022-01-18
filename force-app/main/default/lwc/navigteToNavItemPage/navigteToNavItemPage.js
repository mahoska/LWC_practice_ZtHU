/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-18-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigteToNavItemPage extends NavigationMixin(LightningElement) {

    navigateToTab() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Memory_Game_In_Lwc',
            }
        })
    }
}