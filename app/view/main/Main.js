Ext.define('QuickStart.view.main.Main',{
    extend: 'Ext.grid.Grid',
    xtype: 'grid',
    title: 'Simpsons',
    baseCls: 'mainGrid',
    height: 200,
    layout: 'fit',
    fullscreen: true,
 
    store: "QuickStart.store.Store",
    
    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            sortable: false,  // column cannot be sorted
            width: 250,
        },
        {
            text: 'Email',
            dataIndex: 'email',
            hidden: false  // column is initially hidden
        },
        {
            text: 'Phone',
            dataIndex: 'phone',
            width: 100
        }
    ],
    autoload: true
})