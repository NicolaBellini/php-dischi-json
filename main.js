const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "loco",
      discList: [],
      apiUrl: "server.php",
      newDisc: {
        text: "",
        year: "",
      },
    };
  },
  methods: {
    getApi(apiUrl) {
      axios.get(apiUrl).then((res) => {
        this.discList = res.data;
      });
    },
  },
  mounted() {
    this.getApi(this.apiUrl);
  },
}).mount("#app");
