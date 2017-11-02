Ext.define('QuickStart.model.location', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name',  type: 'string', 
            mapping: function(data) {
                var location = data.location.name + ', ' + data.location.country;
		return location;
            }
        },
        {name: 'image',  type: 'string', 
            mapping: function(data) {
		return data.current.condition.icon;
            }
        },
        {name: 'weatherInfo',  type: 'string', 
            mapping: function(data) {
		return data.current.condition.text;
            }
        },
        {name: 'temp', type: 'int', 
            mapping: function(data) {
                return data.current.temp_c;
            }
        }
    ]
});