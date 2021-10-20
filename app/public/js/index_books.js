const SomeApp = {
    data() {
      return {
      "books": {
            id: {},
            title: {},
            author: {},
            yearpub: {},
            publisher: {},
            pages: {},
            msrp: {},
        },
        "bookForm": {}
      }
    },
    computed: {

    },
    methods: {
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBooksData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        postNewBook(evt) {

            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                console.log("Returned from post", json);
                this.books = json;
                this.bookForm={};
            });
        }
    },
    created() {
        this.fetchBooksData();
    }

}

Vue.createApp(SomeApp).mount('#someApp');
