/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
 Ext.require([ 'Ext.direct.*'])
Ext.define('QuickStart.Application', {
    extend: 'Ext.app.Application',

    name: 'QuickStart',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },


    // The application is launched using the mainView config in app.js
    //
    // launch: function () {
    //     Implement this method to do a custom launch.
    // },

    // launch: function () {
    //    Ext.direct.Manager.addProvider(Ext.REMOTING_API);
    // },


    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
