import './App.css';
import { useState } from 'react';
import Note from './Note';
import MDEditor from '@uiw/react-md-editor';

function App() {
  const [notes, setNotes] = useState([{
    title: '# your Heading',
    content: '# your heading'
  }]);

  const [currentNote, setCurrentNote] = useState(0);

  const addNotes = () => {
    setNotes([...notes, {
      title: '# enter title Here',
      content: '# Enter Content Here'
    }]);
    setCurrentNote(notes.length); // Set to the newly added note
  };

  const deleteNote = (index) => {
    const temp = [...notes];
    temp.splice(index, 1);
    setNotes(temp);
    if (temp.length === 0) {
      setCurrentNote(0);
    } else if (currentNote >= temp.length) {
      setCurrentNote(temp.length - 1);
    }
  };

  const changeCurrent = (index) => {
    setCurrentNote(index);
  };

  const modify = (text) => {
    let temp = [...notes];
    temp[currentNote].content = text;
    temp[currentNote].title = text.split('\n')[0];
    setNotes(temp);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
        <div style={{ width: '20%' }}>
          <h1>Notes</h1>
          <button className="icon-button add-button" onClick={addNotes}>
            <i className="fas fa-plus"></i> Add Notes
          </button>
          {notes.length === 0 ? (
            <p>No notes available. Add a note.</p>
          ) : (
            notes.map((item, index) => (
              <Note
                key={index}
                title={item.title}
                index={index}
                changeCurrent={changeCurrent}
                delNote={deleteNote}
              />
            ))
          )}
        </div>
        <div style={{ flexGrow: '1', height: '500px' }}>
          {notes.length > 0 && (
            <MDEditor
              onChange={(value) => modify(value || '')}
              value={notes[currentNote].content}
              height='100%'
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;