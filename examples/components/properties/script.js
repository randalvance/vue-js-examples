Vue.component('parent-component', {
    data: function() {
        return {
            message: 'Hello There!'
        };
    },
    template: `
        <div>
            <input type="text" class="form-control" v-model="message" /> <br />
            <child-component :child-message="message"></child-component>
        </div>
    `
});

Vue.component('child-component', {
    props: ['childMessage'],
    template: `<div><i>{{childMessage}}</i></div>`
});

new Vue({
    el: "#app"
});