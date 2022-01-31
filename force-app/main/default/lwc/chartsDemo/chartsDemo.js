/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-31-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities';

export default class ChartsDemo extends LightningElement {
    pieChartLabels = []
    pieChartData = []

    @wire(getOpportunities)
    opportunityHandler({ data, error }) {
        if (data) {
            console.log(data)
            const result = data.reduce((json, val) => ({ ...json, [val.StageName]: (json[val.StageName] | 0) + 1 }), {})
            //Close Won:18
            //Needs Analysis:1....
            //keys - Close Won,Needs Analysis; values - 18,1...
            console.log(result)
            if (Object.keys(result).length) {
                this.pieChartLabels = Object.keys(result)
                console.log(this.pieChartLabels)
                this.pieChartData = Object.values(result)
            }

        }
        if (error) {
            console.error(error)
        }
    }

}