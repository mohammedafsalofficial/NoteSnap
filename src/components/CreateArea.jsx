import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

const CreateArea = ({ addNote }) => {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <form className="create-note">
      {isExpanded && (
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
      )}
      <textarea
        name="content"
        onClick={expand}
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
        onChange={handleChange}
        value={note.content}
      />
      <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
};

export default CreateArea;
