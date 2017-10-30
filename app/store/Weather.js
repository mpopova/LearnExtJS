Ext.define('QuickStart.store.Weather',{
    extend: 'Ext.data.Store',
    alias: 'store.weather',
    proxy: {
        type: 'ajax',
        url: 'data/weather.json',
    },

    listeners: {

        update: function(store, record , operation , modifiedFieldNames) {
            if (!modifiedFieldNames) {
                return;
            }

            // Ensure that select field is being set to a value, not the entire record
            var modField = modifiedFieldNames.toString(),
                mod = record.get(modField);

            if (mod && mod.isModel) {
                record.set(modField, mod.get('text'));
            }
        }
    }

});