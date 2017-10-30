Ext.define('QuickStart.view.main.Main', {
    extend: 'Ext.tab.Panel',
    controller: 'listview',

    items: [{
        title: 'Weather in Sofia',
        xtype: 'grid',
        iconCls: 'x-fa fa-sun-o',
        listeners: {
            itemtap: 'onPopupFormWeather'
        },
         store: {
            type: 'weather',
            autoLoad: true
        },
        columns: [{
            text: 'Location name',
            dataIndex: 'name',
            flex: 1
        },{
            text: 'Location name',
            dataIndex: 'country',
            flex: 1
        },{
            text: 'Location name',
            dataIndex: 'region',
            flex: 1
        }]
    }]  
});
