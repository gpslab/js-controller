var Controller = function() {
    this._controls = []; // private
};

Controller.prototype.addControl = function(name, control) {
    if (control instanceof ControllerControl) {
        control.setController(this);
        this._controls[name] = control;
    }
};

Controller.prototype.bindControl = function(target) {
    var name = target.data('control');
    if (this._controls[name] instanceof ControllerControl) {
        this._controls[name].bind(target);
    }
};

Controller.prototype.bind = function(target) {
    target = $(target || 'body');

    if (target.data('control')) {
        this.bindControl(target);
    } else {
        var that = this;
        target.find('[data-control]').each(function () {
            that.bindControl($(this));
        });
    }
};
