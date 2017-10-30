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
                autoLoad: true,
                sorters: ['name', 'temp_c', 'country'],
            },
            columns: [{
                text: 'Location name',
                dataIndex: 'name',
                flex: 1
            }, {
                text: 'Current temp',
                dataIndex: 'temp_c',
                flex: 1
            }, {
                text: 'Location country',
                dataIndex: 'country',
                flex: 1
            }]
        },{
        title: 'Employee Directory',
        xtype: 'grid',
        iconCls: 'x-fa fa-users',
        grouped: true,
        listeners: {
            itemtap: 'onPopupForm'
        },
        store: {
            type: 'employees',
            autoLoad: true,
            sorters: ['firstName', 'lastName', 'officeLocation'],
            grouper: 'officeLocation'
        },
        columns: [{
            text: 'First Name',
            dataIndex: 'firstName',
            flex: 1
        }, {
            text: 'Last Name',
            dataIndex: 'lastName',
            flex: 1
        }, {
            text: 'Phone Number',
            dataIndex: 'phoneNumber',
            flex: 1
        }]
    }]
});
