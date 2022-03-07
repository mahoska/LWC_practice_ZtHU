/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-04-2022
 * @last modified by  : Anna Makhovskaya
**/
public with sharing class MapControllerLwc {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
       return [SELECT Id, Name, Description, BillingStreet, BillingCountry, BillingCity, BillingState, BillingPostalCode 
       FROM Account 
       ORDER BY Name LIMIT 10];
    }
}
