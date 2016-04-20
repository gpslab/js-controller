# js-controller
Micro framework for JavaScript

## How to

Create control
```js
// FormDate.js
var FormDate = function() {
};

extend(FormDate, ControllerControl);

FormDate.prototype.bind = function(target) {
    target.datepicker({dateFormat: 'yy-mm-dd'});
};
```

Add new control to controller

```js
// common.js
var Container = {};

$(function(){
    Container.FormToken = new FormToken();

    Container.Controller = new Controller();
    Container.Controller.addControl('form-date', new FormDate());
    Container.Controller.bind();
});
```

Use in HTML

```html
<!-- ... -->

<script src="js/controller.min.js"></script>
<script src="js/FormDate.js"></script>
<script src="js/common.js"></script>

<!-- ... -->

<form>
    <input type="date" name="date" data-control="form-date" />
    <button type="submit"></button>
</form>
```
