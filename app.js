const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },

  methods: {
    outputFullname(){
      if (this.name === ''){
        return '';
      }
      return this.name +  ' ' + 'mahmud';
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
    formSubmit(){
      alert("Submitted");
    },
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
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');


