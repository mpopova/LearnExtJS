Ext.define('QuickStart.store.Store',{
    extend: 'Ext.data.Store',
    alias: 'store.simpsons',

    proxy: {
        type: 'memory',
        reader: 'json',
        data: [
            { "name": "Lisa",  "email": "lisa@simpsons.com",  "phone":"555-111-1224"  },
            { "name": "Bart",  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
            { "name": "Homer", "email":"home@simpsons.com",  "phone":"555-222-1244"  },
            { "name": "Marge", "email":"marge@simpsons.com", "phone":"555-222-1254"  }
        ],
    },
    
    model: "QuickStart.model.Model",
    autoLoad: true 
})