
import { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import initialProjects from "./data/projects";
import "./App.css";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects((prevProjects) => [
      ...prevProjects,
      newProject,
    ]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <main className="app">
      <h1>Personal Project Showcase App</h1>

      <ProjectForm onAddProject={addProject} />

      <ProjectList
        projects={filteredProjects}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </main>
  );
}

export default App;
