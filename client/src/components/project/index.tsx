import { Project } from "../../models/project";

interface ProjectProps {
  project: Project;
}

const index = ({ project }: ProjectProps) => {
  return (
    <div>
      <div>
        <div>Client Info</div>
        <span>{project.client.name}</span>
        <span>{project.client.email}</span>
        <span>{project.client.phone}</span>
      </div>

      <div>
        <div>Project Info</div>
        <span>{project.name}</span>
        <span>{project.status}</span>
        <span>{project.description}</span>
      </div>
    </div>
  );
};

export default index;
