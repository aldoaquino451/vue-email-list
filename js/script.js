
const  { createApp } = Vue;

createApp({

  data() {
    return {
      booleanAPI: 'https://flynn.boolean.careers/exercises/api/random/mail', // endpoint
      mails: [],
      max: 10,
    }
  },
  
  methods: {
    generateMail() {
      for (let i = 0; i < this.max; i++) {
        axios.get(this.booleanAPI)
        .then( (risultato) => {
          this.mails.push(risultato.data.response)
        })
      }
    },
  },

  mounted() {
    this.generateMail();
  }

}).mount('#app')
