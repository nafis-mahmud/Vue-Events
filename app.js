const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  methods: {
    setName(event){
      this.name = event.target.value;
    },
    add(num){
      this.counter = this.counter +num;
    },
    reduce(num){
      this.counter = this.counter -num;
    },
    reset(){
      this.counter = 0;
    }
  }
});

app.mount('#events');


