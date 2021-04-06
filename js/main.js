function initVue() {

    new Vue({
        el: '#app',
        data: {
            'text': 'Hello World!!',
            'image': 'img/boat.jpg'
        },
        methods: {
            changeImg: function(){
                if (this.image == 'img/boat.jpg') {
                    this.image = 'img/boat2.JPG'
                }else if (this.image == 'img/boat2.JPG'){
                    this.image = 'img/boat3.JPG'
                }else{
                    this.image = 'img/boat.jpg'
                }
            }
        }
        
    });
}

function init() {
    initVue();
}

$(init);