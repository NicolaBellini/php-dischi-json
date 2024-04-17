const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "loco",
      discList: [],
      apiUrl: "server.php",
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
