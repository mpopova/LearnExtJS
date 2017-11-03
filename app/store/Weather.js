Ext.define('QuickStart.store.Weather',{
    extend: 'Ext.data.Store',
    alias: 'store.weather',
    storeId: 'weatherStore',
    proxy: {
        type: 'ajax',
        url: 'data/weather.json',
        reader: {
            type: 'json',
            rootProperty: 'data',

            // Do not attempt to load orders inline.
            // They are loaded through the proxy
            implicitIncludes: false
         }
    },
    model: "QuickStart.model.location"

    // listeners: {

    //     update: function(store, record , operation , modifiedFieldNames) {
    //         if (!modifiedFieldNames) {
    //             return;
    //         }

    //         // Ensure that select field is being set to a value, not the entire record
    //         var modField = modifiedFieldNames.toString(),
    //             mod = record.get(modField);

    //         if (mod && mod.isModel) {
    //             record.set(modField, mod.get('text'));
    //         }
    //     }
    // }

});
