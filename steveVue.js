new Vue({
	el: '#app',
  data: {
  	title: 'Hello World!'
  },
  methods: {
    // took me ages to reaslise that a sexy => wouldn't blady work here!! haha
    changeTitle: function (e) {
      this.title = e.target.value
    }
  }
})