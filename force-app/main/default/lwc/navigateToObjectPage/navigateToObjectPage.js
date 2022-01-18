/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-18-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
//for record with default values
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {

    navigateToNewRecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        })
    }

    navigateToNewRecWithDefVal() {
        const defaultValue = encodeDefaultFieldValues({
            FirstName: 'Zero',
            LastName: 'Hero',
            LeadSource: 'Other'
        });

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValue
            }
        })
    }

    //navigate to List View
    navigateToListView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        })
    }

    //navigation to Files
    navigateToFiles() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        })
    }

}