/* global Vue */

var App = {
  data: function () {
    return {
      notes: [],
      selectedNote: {},
      searchNoteText: "",
    };
  },
  computed: {
    transformedNotes: function () {
      var searchLower = this.searchNoteText.toLowerCase();
      return this.notes
        .filter(function (note) {
          var bodyLower = note.body.toLowerCase();
          return bodyLower.indexOf(searchLower) !== -1;
        })
        .sort(function (a, b) {
          return b.timestamp - a.timestamp;
        });
    },
  },
  created: function () {
    this.notes = [
      { id: 1, body: "This is a first test", timestamp: Date.now() - 2000000 },
      { id: 2, body: "This is a second test", timestamp: Date.now() - 1000000 },
      { id: 3, body: "This is a third test", timestamp: Date.now() },
    ];
    this.selectedNote = this.notes[0];
  },
  methods: {
    createNote: function () {
      var newNote = {
        id: Date.now(),
        body: "",
        timestamp: Date.now(),
      };
      this.notes.push(newNote);
      this.selectedNote = newNote;
    },
    selectNote: function (note) {
      this.selectedNote = note;
    },
    selectVisibleNote: function () {
      if (this.transformedNotes.length === 0) {
        this.selectedNote = {};
      } else if (this.transformedNotes.indexOf(this.selectedNote) === -1) {
        this.selectedNote = this.transformedNotes[0];
      }
    },
    updateNoteTimestamp: function (note) {
      note.timestamp = Date.now();
    },
    deleteNote: function (note) {
      var index = this.notes.indexOf(note);
      if (index !== -1) {
        this.notes.splice(index, 1);
        this.selectVisibleNote();
      }
    },
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
