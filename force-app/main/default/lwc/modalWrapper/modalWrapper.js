/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-18-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';

export default class ModalWrapper extends LightningElement {

    isOpen = false;
    isOpenSecond = false;

    openHandler() {
        this.isOpen = true;
    }

    closeHandler() {
        this.isOpen = false;
    }


    openSecondHandler() {
        this.isOpenSecond = true;
    }

    secondCloseHandler() {
        this.isOpenSecond = false;
    }
}