Ext.define('QuickStart.store.Forecast',{
    extend: 'Ext.data.Store',
    alias: 'store.forecast',

    proxy: {
        type: 'direct',
        reader:{rootProperty: 'ships'},
        api: {
                read: 'QueryDatabase.getResults',
            }
    },

    autoLoad: true

});