/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-18-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToVfpage extends NavigationMixin(LightningElement) {

    navigateToVfPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: "/apex/navigateVfpage"
            }
        }).then(generateUrl => {
            //window.open(generateUrl, "blank")
            window.open(generateUrl);
            console.log(generateUrl);
        })
    }
}