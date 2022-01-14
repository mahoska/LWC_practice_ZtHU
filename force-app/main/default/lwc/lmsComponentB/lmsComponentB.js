import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import { MessageContext, subscribe, unsubscribe, APPLICATION_SCOPE  } from 'lightning/messageService';

export default class LmsComponentB extends LightningElement {

    receivedMessage;

    @wire(MessageContext)
    context;

    connectedCallback(){
        this.subscribeMessage();
    }

    subscribeMessage(){
        //subscribe(messageContext, messageChannel, listener, subscribeOptions);
        this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : "NO Message published";
    }

    unsubscribeMessage(){
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}