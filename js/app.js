(function() {

    var Person = {

        init: function() {
            this.form = $('#form');
            this.bindEvents();
        },

        bindEvents: function() {
            this.form.on('submit', this.showName);
        },

        showName: function(e) {

            e.preventDefault();

            alert(this.form.find('input[type=text]').val());

        }
    }

    Person.init();

})();