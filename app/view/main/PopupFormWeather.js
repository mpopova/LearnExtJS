Ext.define('QuickStart.view.main.PopupFormWeather', {
    extend: 'Ext.form.Panel',
    xtype: 'popupform',
    controller: 'popupformweather',

    title: 'Update Record',

    floating: true,
    centered: true,
    modal: true,

    items: [{
        xtype: 'textfield',
        name: 'name',
        label: 'Location name',
        bind: '{weather.name}'
    }, {
        xtype: 'textfield',
        name: 'country',
        label: 'weather.country',
        bind: '{weather.country}'

    }, {
        xtype: 'textfield',
        name: 'temp_c',
        label: 'temp_c',
        bind: '{weather.temp_c}'

    },{
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            text: 'Submit',
            iconCls: 'x-fa fa-check',
            handler: 'submitUpdate'
        }, {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            handler: 'cancelUpdate'
        }]
    }]
});
