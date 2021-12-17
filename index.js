/* global Vue */

var App = {
  data: function () {
    return {
      notes: [
        { id: 1, body: "This is a first test", timestamp: Date.now() - 2000000 },
        { id: 2, body: "This is a second test", timestamp: Date.now() - 1000000 },
        { id: 3, body: "This is a third test", timestamp: Date.now() },
        { id: 4, body: "", timestamp: Date.now() + 1000000 },
      ],
    };
  },
  computed: {
    transformedNotes: function () {
      return this.notes.slice().sort(function (a, b) {
        return b.timestamp - a.timestamp;
      });
    },
  },
  methods: {
    formatTitle: function (body) {
      var maxLength = 20;
      if (body.length > maxLength) {
        return body.substring(0, maxLength - 3) + "...";
      } else if (body.length === 0) {
        return "New note";
      } else {
        return body;
      }
    },
    formatTimestamp: function (timestamp) {
      return new Date(timestamp).toUTCString();
    },
  },
};

Vue.createApp(App).mount("#app");
