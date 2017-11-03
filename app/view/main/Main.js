Ext.define('QuickStart.view.main.Main', {
    extend: 'Ext.tab.Panel',
    controller: 'listview',
    
    items: [{
        title: 'Current weather in Sofia',
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
            text: 'imageAndTxt',
            dataIndex: 'imageAndTxt',
             cell: {
                encodeHtml: false
            },
             renderer: function (value) {
                    var str = value;
                    var res = str.split(",");
                    var url = res[0];
                    var txt = res[1];   
                    var result = '<img src="' + url + '" />' + '<span> ' + txt + '</span>';
                    return result;
                },
            flex: 1
        },
        {
            text: 'Temperature',
            dataIndex: 'temp',
            flex: 1
        }
        ]
    },
    {
        title: 'Forecast for Sofia',
        xtype: 'grid',
        iconCls: 'x-fa fa-chevron-right',
         store: {
            type: 'forecast',
            autoLoad: true
        },
        columns: [{
            text: 'Date',
            dataIndex: 'forecastDate',
            flex: 1
        },
        {
            text: 'Min temp',
            dataIndex: 'minT',
            flex: 1
        },
        {
            text: 'Max temp',
            dataIndex: 'maxT',
            flex: 1
        }
        ]
    }
    ]  
});
