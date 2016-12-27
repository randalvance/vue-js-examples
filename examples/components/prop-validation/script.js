Vue.component('example', {
    props: {
        // basic type check (`null` means accept any type)
        propA: Number,
        // multiple possible types
        propB: [String, Number],
        // a required String
        propC: {
            type: String,
            required: true
        },
        // a number with default value
        propD: {
            type: Number,
            default: 100
        },
        // object/array defaults should be returned from a factory function
        propE: {
            type: Object,
            default: function() {
                return { message: 'hello' }
            }
        },
        // custom validator function
        propF: {
            validator: function(value) {
                return value > 10;
            }
        }
    },
    template: '<div>{{propA}}</div>'
});

new Vue({
    el: "#app"
});

