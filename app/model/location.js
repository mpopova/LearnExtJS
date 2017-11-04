Ext.define('QuickStart.model.location', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name',  type: 'string', 
            mapping: function(data) {
                var location = data.location.name + ', ' + data.location.country;
		return location;
            }
        },
        {name: 'imageAndTxt',  type: 'string', 
//            convert (value, record){         
//               if(record.data.current.condition == null){
//                console.log(this);
//                var returnValue = record.get('current');
//                console.log(returnValue);
//                return returnValue;
//               }
//            }
            mapping: function(data) {
                var result = data.current.condition.icon + ', ' + data.current.condition.text;
		return result;
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