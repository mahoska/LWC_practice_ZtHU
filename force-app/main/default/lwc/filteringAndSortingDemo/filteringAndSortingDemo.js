/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-10-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'

export default class FilteringAndSortingDemo extends LightningElement {
    headings = ["Id", "Name", "Title", "Email"];
    filteredData = [];
    fullTableData = [];
    filterBy = "Name";
    timer;

    sortedBy = "Name";
    sortDirection = 'asc';

    headingsLT = [
        { label: "Id", fieldName: 'Id', sortable: true },
        { label: 'Name', fieldName: 'Name', sortable: true },
        { label: 'Title', fieldName: 'Title', sortable: true },
        { label: 'Email', fieldName: 'Email', sortable: true }
    ]
    sortByLT;
    sortDirectionLT;
    filteredDataLT = [];

    @wire(getContactList)
    contactHandler({ data, error }) {
        if (data) {
            console.log(data)
            this.fullTableData = data
            this.filteredData = [...this.sortBy(data)]

            this.filteredDataLT = [...this.sortContactData(this.sortDirectionLT, this.sortByLT, data)]
        }
        if (error) {
            console.log(error)
        }
    }

    get FilterByOptions() {
        return [
            { label: "All", value: 'All' },
            { label: "Id", value: 'Id' },
            { label: 'Name', value: 'Name' },
            { label: 'Title', value: 'Title' },
            { label: 'Email', value: 'Email' }
        ]
    }

    get SortByOptions() {
        return [
            { label: "Id", value: 'Id' },
            { label: 'Name', value: 'Name' },
            { label: 'Title', value: 'Title' },
            { label: 'Email', value: 'Email' }
        ]
    }

    filterbyHandler(event) {
        this.filterBy = event.target.value
    }

    filterHandler(event) {
        const { value } = event.target
        window.clearTimeout(this.timer)
        if (value) {
            this.timer = window.setTimeout(() => {
                console.log(value)
                this.filteredData = this.fullTableData.filter(eachObj => {
                    if (this.filterBy === 'All') {
                        /**Below logic will filter each and every property of object */
                        return Object.keys(eachObj).some(key => {
                            return eachObj[key].toLowerCase().includes(value)
                        })
                    } else {
                        /**Below logic will filter only selected fields */
                        const val = eachObj[this.filterBy] ? eachObj[this.filterBy] : ''
                        return val.toLowerCase().includes(value)
                    }
                })
            }, 500)

        } else {
            this.filteredData = [...this.fullTableData]
        }

    }


    sortbyHandler(event) {
        this.sortedBy = event.target.value;
        this.filteredData = [...this.sortBy(this.filteredData)];
    }


    sortBy(data) {
        const cloneData = [...data];
        cloneData.sort((a, b) => {
            if (a[this.sortedBy] === b[this.sortedBy]) {
                return 0;
            }
            return this.sortDirection === 'desc' ?
                a[this.sortedBy] > b[this.sortedBy] ? -1 : 1 :
                a[this.sortedBy] < b[this.sortedBy] ? -1 : 1
        })
        return cloneData;
    }

    sortbyHandlerLT(event) {
        this.sortedByLT = event.detail.fieldName;
        this.sortDirectionLT = event.detail.sortDirection;
        this.sortContactData(event.detail.fieldName, event.detail.sortDirection, this.filteredDataLT);
    }

    sortContactData(fieldname, direction, data) {

        let parseData = [...data];

        let keyValue = (a) => {
            return a[fieldname];
        };


        let isReverse = direction === 'asc' ? 1 : -1;


        parseData.sort((x, y) => {
            x = keyValue(x) ? keyValue(x) : '';
            y = keyValue(y) ? keyValue(y) : '';

            return isReverse * ((x > y) - (y > x));
        });

        this.filteredDataLT = parseData;


    }


}