/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 01-18-2022
 * @last modified by  : Anna Makhovskaya
**/
({
    onload: function (component) {
        var myPageRef = component.get("v.pageReference");
        var id = myPageRef.state.c__id;
        component.set("v.id", id);
    }
})
