const SomeApp = {
    data() {
      return {
        result: {},
        list: [5,6,7,8],
        message: "Waiting ..."
      }
    },
    created() {
        //Method 1:
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((json) => {
            console.log("Got json back:", json);
            this.result = json.results[0];
            console.log("C");
        })
        .catch( (error) => {
            console.error(error);
        });
        console.log("B");
    }

}

Vue.createApp(SomeApp).mount('#someApp');
