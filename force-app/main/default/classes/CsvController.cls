/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-18-2022
 * @last modified by  : Anna Makhovskaya
**/
public with sharing class CsvController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Phone, AnnualRevenue, Industry FROM Account];
    } 
}
