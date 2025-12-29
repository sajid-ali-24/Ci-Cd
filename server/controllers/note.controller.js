import Note from "../models/Note.js";

// CREATE - Insert a new user
export const createNote = async (title, description, completed) => {
  try {
    const result = await Note.create({ title, description, completed });
    return result;
  } catch (err) {
    console.error("Error creating note:", err);
    throw err;
  }
};

// READ - Get all users
export const getAllNotes = async () => {
  try {
    const result = await Note.find();
    return result;
  } catch (err) {
    console.error("Error getting notes:", err);
    throw err;
  }
};

// READ - Get user by ID
export const getNoteById = async (id) => {
  try {
    const result = await Note.findById(id);
    return result;
  } catch (err) {
    console.error("Error getting note:", err);
    throw err;
  }
};

// UPDATE - Update user by ID
export const updateNote = async (id, title, description, completed) => {
  try {
    const result = await Note.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );
    return result;
  } catch (err) {
    console.error("Error updating note:", err);
    throw err;
  }
};

// DELETE - Delete user by ID
export const deleteNote = async (id) => {
  try {
    const result = await Note.findByIdAndDelete(id);
    return result;
  } catch (err) {
    console.error("Error deleting note:", err);
    throw err;
  }
};
