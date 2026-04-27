const addBtn = document.getElementById("addBtn");
const noteInput = document.getElementById("noteInput");
const notesContainer = document.getElementById("notesContainer");


window.onload = function () {
  showNotes();
};

addBtn.onclick = function () {
  if (noteInput.value.trim() === "") {
    alert("Write something!");
    return;
  }

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(noteInput.value);

  localStorage.setItem("notes", JSON.stringify(notes));

  noteInput.value = "";
  showNotes();
};


function showNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notesContainer.innerHTML = "";

  notes.forEach(function (note, index) {
    const div = document.createElement("div");
    div.classList.add("note");

    div.innerHTML = `
      <p>${note}</p>
      <button onclick="editNote(${index})">Edit</button>
      <button class="deleteBtn" onclick="deleteNote(${index})">Delete</button>
    `;

    notesContainer.appendChild(div);
  });
}


function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function editNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  let newNote = prompt("Edit your note:", notes[index]);

  if (newNote !== null) {
    notes[index] = newNote;
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
  }
}