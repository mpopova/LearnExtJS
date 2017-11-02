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
            text: 'Location',
            dataIndex: 'name',
            flex: 1
        },
        {
            text:'Image', 
            dataIndex:'image',
            cell: {
                encodeHtml: false
            },
            renderer: function (value) {
                return '<img src="' + value + '" />'
            },
            width: 80
        },
        {
            text: 'Info',
            dataIndex: 'weatherInfo',
            flex: 1
        },
        {
            text: 'Temperature',
            dataIndex: 'temp',
            flex: 1
        }
        ]
    }]  
});
