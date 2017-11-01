Ext.define('QuickStart.view.main.PopupFormWeather', {
    extend: 'Ext.form.Panel',
    xtype: 'popupform',
    controller: 'popupformweather',

    title: 'Update Record',

    floating: true,
    centered: true,
    modal: true,
    zIndex: 9,
    
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
        name: 'region',
        label: 'region',
        bind: '{weather.region}'

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
        },{
            xtype: 'button',
            text: 'Delete',
            iconCls: 'x-fa fa-trash-o',
            handler: 'deleteUpdate'
        }]
    }]
});