Ext.define('QuickStart.view.main.PopupFormWeatherController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.popupformweather',

    cancelUpdate: function () {
        var view = this.getView(),
            record = view.getRecord();

        view.destroy();
        record.reject();
    },

    submitUpdate: function(me) {
        var view = this.getView(),
            record = view.getRecord();

        view.destroy();
        record.commit();
    },
    
    deleteUpdate: function () {
        var view = this.getView(),
            record = view.getRecord();

        view.destroy();
        record.drop();
    },
});