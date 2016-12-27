Vue.component('button-counter', {
    template: `<button type="button" @click="increment(val)">{{val}}</button>`,
    props: [ 'val' ],
    methods: {
        increment: function(val) {
            this.$emit('increment', val);
        }
    }
});

new Vue({
    el: "#app",
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function(val) {
            this.total += val;
        }
    }
});