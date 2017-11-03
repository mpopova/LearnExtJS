Ext.define('QuickStart.model.Forecast', {
    extend: 'Ext.data.Model',
    fields: [
        {   
            name: 'forecastDate', 
            type: 'date',
            convert: null,
            mapping: function(data) {
                return data.date;
            }
        },
        {
            name: 'minT', 
            type: 'number',
            convert: null,
            mapping: function(data) {
                return data.day.mintemp_c;
            }
        },    
        {
            name: 'maxT', 
            type: 'number',
            convert: null,
            mapping: function(data) {
                return data.day.maxtemp_c;
            }
        }
    ]
});