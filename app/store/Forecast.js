Ext.define('QuickStart.store.Forecast',{
    extend: 'Ext.data.Store',
    alias: 'store.forecast',
    proxy: {
        type: 'ajax',
        url: 'data/forecast.json',
        reader: {
            type: 'json',
            rootProperty: 'data',
            
//           rootProperty: 'requests',
//            totalProperty: 'totalRequests'
            implicitIncludes: true
         }
    },
    model: "QuickStart.model.Forecast"
});