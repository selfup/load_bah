
const socket = io.connect("http://localhost:8080", { reconnect: true });

socket.on("updateLoadBars", message => {
  Vue.set(vm.$data, "loadBars", message);
});

const vm = new Vue({
  el: "#app",
  data() {
    return {
      loadBars: {},
    };
  },
  created() {
    socket.send('loaded');
  },
  methods: {
    widthPercentage(percentage) {
      return {
        width: `${percentage}%`
      };
    },
  },
  computed: {
    loadBarArray() {
      const loadMap = Object
        .keys(this.loadBars)
        .map((key, i) => this.loadBars[key]);

      return loadMap.map((bar) => {
        const {
          id,
          current,
          total,
        } = bar;

        return {
          id, 
          percentage: Math.floor((current / total) * 100),
        };
      });
    },
  },
});
