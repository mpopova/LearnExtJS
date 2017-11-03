Ext.define('QuickStart.store.Forecast',{
    extend: 'Ext.data.Store',
    alias: 'store.forecast',
    proxy: {
        type: 'ajax',
        url: 'data/forecast.json',
        reader: {
            type: 'json',
            rootProperty: 'data',
            implicitIncludes: true
         }
    },
    model: "QuickStart.model.Forecast"
});