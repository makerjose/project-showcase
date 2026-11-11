
import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar";

function ProjectList({
  projects,
  searchTerm,
  onSearchChange,
}) {
  return (
    <section className="project-list">
      <h2>Projects</h2>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
      />

      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))
      )}
    </section>
  );
}

export default ProjectList;
