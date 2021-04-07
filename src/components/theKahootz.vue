<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="(kahoot, index) in kahoots" :key="index">
  <div style="padding-top: 50px; padding-bottom:10px; font-weight: bold" v-html="kahoot.question"> Spørsmål: {{kahoot.question}}</div>
  <div v-html="kahoot.correct_answer">{{kahoot.correct_answer}} - V</div>
  <div style="color:red" v-for="wrong in kahoot.incorrect_answers" :key="wrong" v-html="wrong">{{wrong}}</div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'theKahootz',
  data() {
    return {
      msg: 'Let the Kahoots COMMENCE!'
    }
  },
  computed: {
    kahoots() {
    return this.$store.state.kahoots
    },
   
  },
  methods: {
    txtCleaner(txt){
        console.log(JSON.stringify(txt))
     let div = document.createElement('div');
    div.innerText = txt;
    return div.innerHTML;
    
    }
  },
  mounted() {
    this.$store.dispatch("getKahoots");
  }
}
</script>