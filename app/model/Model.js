Ext.define('QuickStart.model.Model', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name',     type: 'string', 
            mapping: function(data) {
                debugger;
		return data.name;
            }
        },
        { name: 'email',    type: 'string',
            mapping: function(data) {
		return data.email;
            }
        },
        { name: 'phone',    type: 'string',
            mapping: function(data) {
		return data.phone;
            }
        },
    ],
    
    changeName: function() {
        debugger;
        var oldName = this.get('name'),
            newName = oldName + " The Barbarian";

        this.set('name', newName);
    }
});