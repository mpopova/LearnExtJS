Ext.define('QuickStart.view.main.Main',{
    extend: 'Ext.grid.Grid',
    title: 'Simpsons',
    xtype: 'grid',
    store:{
       type: 'simpsons',
       autoLoad: true
    },
    columns: [
       {
           text: 'Name',
           dataIndex: 'name',
           flex: 1,
       },
       {
           text: 'Email',
           dataIndex: 'email',
           flex: 1,
       },
       {
           text: 'Phone',
           dataIndex: 'phone',
           flex: 1,
       }
   ]
})