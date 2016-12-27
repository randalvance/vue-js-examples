Vue.component('my-component', {
    props: ['message', 'subTitle'],
    template: 
    `<div>
        <h1>{{message}}</h1>
        <h2>{{subTitle}}</h2>
     </div>`

});

new Vue({
    el: "#app"
});