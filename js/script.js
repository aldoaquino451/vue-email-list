
const  { createApp } = Vue;

createApp({

  data() {
    return {
      booleanAPI: 'https://flynn.boolean.careers/exercises/api/random/mail', // endpoint
      mails: [],
      limit: 200,
    }
  },
  
  methods: {

    getAPI() {
      axios.get(this.booleanAPI)
      .then( (risultato) => {
        console.log(risultato.data.response);
        this.mails.push(risultato.data.response)
      })
    },

    generateMail() {
      for (let i = 0; i < this.limit; i++) {
        this.getAPI();
      }
    }

  },

  mounted() {
    this.generateMail();
  }

}).mount('#app')
