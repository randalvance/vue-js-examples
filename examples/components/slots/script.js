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

new Vue({
    el: '#app'
});