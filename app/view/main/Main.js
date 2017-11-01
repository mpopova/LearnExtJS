Ext.define('QuickStart.view.main.Main',{
    extend: 'Ext.grid.Grid',
    title: 'Simpsons',
    cls: 'mainGrid',
//    xtype: 'grid',

    style: 'background: transparent',
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