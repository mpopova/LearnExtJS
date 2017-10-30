Ext.define('QuickStart.model.location', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name',  type: 'string', mapping: function(data) {
		    return data.location.name;
		}},
        {name: 'region',   type: 'string', mapping: function(data) {
		    return data.location.region;
		}},
        {name: 'country', type: 'string', mapping: function(data) {
		    return data.location.country;
		}}
    ]
});