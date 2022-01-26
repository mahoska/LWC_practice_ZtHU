/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-25-2022
 * @last modified by  : Anna Makhovskaya
**/

import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecordGetFieldDemo extends LightningElement {
    name;
    owner;
    annualRevenue;
    displayName;
    displayOwner;
    displayAnnualRevenue;

    @api recordId;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [NAME_FIELD, OWNER_NAME_FIELD, ANNUAL_REVENUE_FIELD]
    })
    accountHandler({ data }) {
        if (data) {
            console.log(data)
            this.name = getFieldValue(data, NAME_FIELD);
            this.annualRevenue = getFieldValue(data, ANNUAL_REVENUE_FIELD);
            this.owner = getFieldValue(data, OWNER_NAME_FIELD);

            this.displayName = getFieldDisplayValue(data, NAME_FIELD);
            this.displayAnnualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD);
            this.displayOwner = getFieldDisplayValue(data, OWNER_NAME_FIELD);
        }
    }
}