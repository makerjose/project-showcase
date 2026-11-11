
import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const newProject = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
    };

    onAddProject(newProject);

    setTitle("");
    setDescription("");
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <label htmlFor="title">Project Title</label>
      <input
        type="text"
        id="title"
        placeholder="Enter project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="description">Project Description</label>
      <textarea
        id="description"
        placeholder="Enter project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
