Ext.define('QuickStart.model.Model', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name',     type: 'string'},
        { name: 'email',    type: 'string'},
        { name: 'phone',    type: 'string'},
    ],
    
//    changeName: function() {
//        debugger;
//        var oldName = this.get('name'),
//            newName = oldName + " The Barbarian";
//
//        this.set('name', newName);
//    }
});