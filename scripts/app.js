
new Vue({
    el: '#app1',
    data: {
        title: 'Hello World',
        x: 0,
        y: 0
    },
    methods: {
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
    
});