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
        label: 'Location',
        bind: '{weather.name}'
    },
    {
        xtype: 'textfield',
        name: 'temp',
        label: 'Current temperature',
        bind: '{weather.temp}'
    },
    {
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