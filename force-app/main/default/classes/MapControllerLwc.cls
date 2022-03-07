/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-07-2022
 * @last modified by  : Anna Makhovskaya
**/
public with sharing class MapControllerLwc {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
       return [SELECT Id, Name, Description, BillingStreet, BillingCountry, BillingCity, BillingState, BillingPostalCode 
       FROM Account 
       WHERE BillingStreet!='' AND BillingCountry!='' AND BillingCity!=''
       ORDER BY Name LIMIT 10];
    }
}
