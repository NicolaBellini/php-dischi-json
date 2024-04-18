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
      data.append("newAuthor", this.newDisc.author);
      data.append("newYear", this.newDisc.year);
      data.append("newPoster", this.newDisc.poster);
      data.append("newGenre", this.newDisc.genre);
      // ora faccio la chiamata axios in .post
      axios.post(this.apiUrl, data).then((res) => {
        this.discList = res.data;
        console.log(res.data);
        // una volta inviato i dati e aver riscritto la lista devo resettare i campi di input se no continua a stamparmi card
      });
      this.newDisc.title = "";
      this.newDisc.author = "";
      this.newDisc.year = "";
      this.newDisc.poster = "";
      this.newDisc.genre = "";
    },

    // funzione per la rimozione di un disco
    deleteDisc(index) {
      // passo l' indice dell' elemento da eliminare ottenuto con il ciclo v-for
      const data = new FormData();
      data.append("indexToDelete", index);

      // invio i dati al server e riscrivo la lista con i dati aggiornati
      axios.post(this.apiUrl, data).then((res) => {
        this.discList = res.data;
        console.log(res.data);
      });
    },

    addLike(index) {
      // passo l' indice dell' elemento da eliminare ottenuto con il ciclo v-for
      const data = new FormData();
      data.append("indexToLike", index);

      // invio i dati al server e riscrivo la lista con i dati aggiornati
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
