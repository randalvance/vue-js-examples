var data = {
        name: '',
        greeting: ''
    };

var methods = {
        greet: function() {
            this.greeting = `Hello ${this.name}!`;
        }
    };

var ButtonComponent = Vue.extend({
    data: function() {
        return data;
    },
    template: '<button type="button" @click="greeting = \'Hello \' + name + \'!\'" class="btn btn-default">Greet</button>'
});

var NameInputComponent = Vue.extend({
    data: function() {
        return data;
    },
    template: '<input type="text" class="form-control" placeholder="Enter a name!" v-model="name" />'
});

var NameButtonGroupComponent = Vue.extend({
    data: function() {
        return data;
    },
    template: 
        '<div class="input-group">' +
        '   <name-input />' +
        '   <span class="input-group-btn">' +
        '       <button-component />' +
        '   </span>' +
        '</div>'
});

var DisplayComponent = Vue.extend({
    data: function() {
        return data;
    },
    template: '<h2>{{greeting}}</h2>'
});

Vue.component('button-component', ButtonComponent);
Vue.component('name-input', NameInputComponent);
Vue.component('greet-display', DisplayComponent);
Vue.component('name-button-group', NameButtonGroupComponent);

new Vue({
    el: '#app',
    data: data
});