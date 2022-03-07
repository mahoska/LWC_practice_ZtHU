/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-07-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/MapControllerLwc.getAccounts';

export default class MapInLWC extends LightningElement {

    mapMarkers = [];
    markerTitle = "Account Location";
    selectedMarker = '';

    @wire(getAccounts)
    wireHandler({ data, error }) {
        if (data) {
            console.log(data);
            this.formatResponse(data);
        }
        if (error) {
            console.error(error);
        }
    }

    formatResponse(data) {
        this.mapMarkers = data.map(item => {

            return {
                location: {
                    Street: item.BillingStreet || '',
                    City: item.BillingCity || '',
                    PostalCode: item.BillingPostalCode || '',
                    State: item.BillingState || '',
                    Country: item.BillingCountry || ''
                },
                icon: 'utility:salesforce1',
                title: item.Name,
                value: item.Name,
                description: item.Description || ''
            }

        })
        console.log(this.mapMarkers);
        this.selectedMarker = this.mapMarkers.length && this.mapMarkers[0].value
    }

    callMarkerHandler(event) {
        this.selectedMarker = event.details.selectedMarkerValue
    }

}