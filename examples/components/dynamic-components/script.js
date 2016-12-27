Vue.component('main-component', {
    template: `
        <div>
            <navigation v-on:buttonClicked="buttonClicked"></navigation>
            <component v-bind:is="currentView">

            </component>
        </div>
    `,
    data: function() {
        return {
            currentView: 'apple'
        };
    },
    components: {
        'apple': {
            template: '<div>This is the page for Apple</div>'
        },
        'samsung': {
            template: '<div>This is the page for Samsung</div>'
        },
        'sony': {
            template: '<div>This is the page for Sony</div>'
        }
    },
    methods: {
        buttonClicked: function(newView) {
            this.currentView = newView;
        }
    }
});

Vue.component('navigation', {
    template: `
        <div class="btn-group">
            <button type="button" class="btn btn-primary" @click="select('apple')">Apple</button>
            <button type="button" class="btn btn-primary" @click="select('samsung')">Samsung</button>
            <button type="button" class="btn btn-primary" @click="select('sony')">Sony</button>
        </div>
    `,
    methods: {
        select: function(newView) {
            this.$emit('buttonClicked', newView);
        }
    }
});

new Vue({
    el: '#app'
});
