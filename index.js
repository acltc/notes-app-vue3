/* global Vue */

var App = {
  data: function () {
    return {
      notes: [
        { id: 1, body: "This is a first test", timestamp: Date.now() - 2000000 },
        { id: 2, body: "This is a second test", timestamp: Date.now() - 1000000 },
        { id: 3, body: "This is a third test", timestamp: Date.now() },
      ],
    };
  },
};

Vue.createApp(App).mount("#app");
