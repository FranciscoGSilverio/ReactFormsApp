export default class NotesCollection {
  constructor() {
    this.notes = [];
    this._inscribers = [];
  }

  addNote(title, text, category) {
    const newNote = new Note(title, text, category);
    this.notes.push(newNote);
    this.notify();
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notify();
  }

  inscribe(func) {
    this._inscribers.push(func);
  }

  uninscribe(func) {
    this._inscribers = this._inscribers.filter((f) => f !== func);
  }

  notify() {
    this._inscribers.forEach((func) => {
      func(this.notes);
    });
  }
}

class Note {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }
}
