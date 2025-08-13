import React from 'react';

interface ProjectsViewProps {
  projects: any[];
  navigateTo: any;
  onDeleteProject: any;
  onToggleProjectPublication: any;
}

const ProjectsView: React.FC<ProjectsViewProps> = ({ projects }) => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">المشاريع</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 6).map((project) => (
          <div key={project.id} className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{project.status}</span>
              <span className="text-sm text-primary">{project.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;