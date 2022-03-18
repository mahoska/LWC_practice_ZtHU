/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-18-2022
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {

    closeModal() {
        this.dispatchEvent(new CustomEvent('close'));
    }

    handleSlotFooterChange() {
        const footerElement = this.template.querySelector('.slds-modal__footer');
        if (footerElement) {
            footerElement.classList.remove('slds-hide');
        }
    }

    handleSlotHeaderChange() {
        const titleElement = this.template.querySelector('.slds-modal__header');
        if (titleElement) {
            titleElement.classList.remove('remove_header');
        }
    }
}