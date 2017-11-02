Ext.define('QuickStart.store.Forecast',{
    extend: 'Ext.data.Store',
    alias: 'store.forecast',
    proxy: {
        type: 'ajax',
        url: 'data/forecast.json',
        root: 'forecastday',
        reader: {
            type: 'json',
            rootProperty: 'forecastday',
//          rootProperty: function(raw) {
//                console.log(raw);
//                return raw.forecast
//            },
            implicitIncludes: true
         }
    },
    model: "QuickStart.model.Forecast"
});