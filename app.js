const app = Vue.createApp({
    data(){
        return {
            message: '',
            secondMessage: '',
            confirmedSecondMessage: ''
        }
    },
    methods: {
        showAlert(){
            alert("Button clicked")
        },
        setMessage(event){
           this.message = event.target.value
        },
        setSecondMessage(event){
            this.secondMessage = event.target.value
        },
        confirmSecondMessage(){
            this.confirmedSecondMessage = this.secondMessage
        }
    }
}).mount("#assignment")