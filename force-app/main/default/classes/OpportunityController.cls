/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-31-2022
 * @last modified by  : Anna Makhovskaya
**/
public with sharing class OpportunityController {
   
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(){
       return [SELECT StageName FROM Opportunity];
    }
}
