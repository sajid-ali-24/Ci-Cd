import { useEffect, useState } from "react";
import Note from "./Note";

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const resp = await fetch("http://localhost:5000/notes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      if (resp.ok) {
        setNotes(data.notes);
      } else {
        console.error("Error creating note:", data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div className="flex-1">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3>Notes</h3>
          {notes.map((note) => {
            return <Note key={note.id} note={note} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Notes;
