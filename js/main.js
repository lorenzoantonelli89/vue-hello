function initVue() {

    new Vue({
        el: '#app',
        data: {
            'text': 'Hello World!!',
            'image': 'boat.jpg'
        },
        
    });
}

function init() {
    initVue();
}

$(init);