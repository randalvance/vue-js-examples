Vue.component('my-component', {
    template: `
        <div>
            <header>
                <h2><slot name="header">Fallback Title</slot></h2>
            </header>
            <main>
                <slot>
                    Fallback Content
                </slot>
            </main>
            <footer>
                <slot name="footer">
                    Fallback Footer
                </slot>
            </footer>
        </div>
    `
});

Vue.component('my-awesome-list', {
    props: ['items'],
    template: `
        <ul>
            <slot name="item" v-for="item in items" :text="item">
                <li>{{item}}</li> <!-- Defualt -->
            </slot>
        </ul>
    `
});

new Vue({
    el: '#app',
    data: {
        items: [ 'Apple', 'Orange', 'Grapes' ]
    }
});