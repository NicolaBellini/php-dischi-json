const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "loco",
      discList: [],
      apiUrl: "server.php",
      newDisc: {
        title: "",
        author: "",
        year: null,
        poster: "",
        genre: "",
      },
    };
  },
  methods: {
    getApi(apiUrl) {
      axios.get(apiUrl).then((res) => {
        this.discList = res.data;
      });
    },

    // qui faccio la funzione per inviare i dati a php sotto forma di formdata
    sendData() {
      // prima trasformo i dati
      const data = new FormData();
      data.append("newTitle", this.newDisc.title);
      data.append("genre", this.newDisc.author);
      data.append("newYear", this.newDisc.year);
      data.append("newPoster", this.newDisc.poster);
      data.append("newGenre", this.newDisc.genre);
      // ora faccio la chiamata axios in .post
      axios.post(this.apiUrl, data).then((res) => {
        this.discList = res.data;
        console.log(res.data);
      });
    },
  },
  mounted() {
    this.getApi(this.apiUrl);
  },
}).mount("#app");
