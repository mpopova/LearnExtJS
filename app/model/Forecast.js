Ext.define('QuickStart.model.Forecast', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'forecastDate', type: 'string', 
            convert: function(value, record){
                //this function is to convert the value/record that come
//                console.log(value);
//                console.log(record);
//                console.log( record.get("forecastday"));
            },
            mapping: function(data) {
//                console.log(data);
                return data.forecast.forecastday[0].date;
            }
        }
    ]
});