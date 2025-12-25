import React, { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, updateTodoTitle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editTitle.trim()) {
      updateTodoTitle(todo._id, editTitle.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={handleCancel} className="cancel-button">Cancel</button>
        </div>
      ) : (
        <>
          <span onClick={() => toggleTodo(todo._id)} className="todo-text">
            {todo.title}
          </span>
          <div className="button-group">
            <button onClick={() => toggleTodo(todo._id)} className="done-button">
              {todo.completed ? 'Undo' : 'Mark as Done'}
            </button>
            <button onClick={handleEdit} className="edit-button">Edit</button>
            <button onClick={() => deleteTodo(todo._id)} className="delete-button">Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;