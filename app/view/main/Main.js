Ext.define('QuickStart.view.main.Main', {
    extend: 'Ext.tab.Panel',
    controller: 'listview',
       requires: [
        'Ext.data.proxy.Direct'
    ],
    items: [{
        title: 'Current weather in Sofia',
        extend: 'Ext.Component',
        singleton: true,
        xtype: 'component',
        id: 'ariTest',
        html:'test',
        
//         listeners: {
//             staterestore: function() {
//                 console.log(this);
// //                console.log(state)
//             }
//         },

        handler: function(){
                    var treeStore = Ext.getStore('Weather');
                    var bla;
                    console.log(treeStore);
                    // treeStore.sync();
                },
        
//        store: {
//            type: 'weather',
//            autoLoad: true
//        },
//        
//            
//         initComponent: function() {
//                this.on('afterrender', this.onAfterRender);
//            },
//
//            onAfterRender: function() {
//                 var store = Ext.data.StoreManager.lookup("weatherStore"); 
//       
//                    console.log(store);
//            },
//        listeners: {
//            initComponent: function() {
//                 var store = Ext.data.StoreManager.lookup("weatherStore"); 
//       
//                    console.log(store);
//            }
//        },

//        tpl: new Ext.Template([
//    '<div name="sss">',
//        '<span class="sdd">sss</span>',
//    '</div>',
//        
//        ]),
//        compile: true,
        iconCls: 'x-fa fa-sun-o',

//        columns: [{
//            text: 'Location',
//            dataIndex: 'name',
//            flex: 1
//        },
//        {
//            text: 'imageAndTxt',
//            dataIndex: 'imageAndTxt',
//             cell: {
//                encodeHtml: false
//            },
//             renderer: function (value) {
//                    var str = value;
//                    var res = str.split(",");
//                    var url = res[0];
//                    var txt = res[1];   
//                    var result = '<img src="' + url + '" />' + '<span> ' + txt + '</span>';
//                    return result;
//                },
//            flex: 1
//        },
//        {
//            text: 'Temperature',
//            dataIndex: 'temp',
//            flex: 1
//        }
//        ]
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
    },
    {
        title: 'Ships from DB',
        xtype: 'grid',
        iconCls: 'x-fa fa-chevron-right',
         store: {
            type: 'ships',
            autoLoad: true
        },
        columns: [{
            text: 'Ship name',
            dataIndex: 'ship_name',
            flex: 1
        },
        {
            text: 'Ship type',
            dataIndex: 'ship_type',
            flex: 1
        },
        {
            text: 'Flag',
            dataIndex: 'ship_flag',
            flex: 1
        }
        ]
    }
    ]  
});

