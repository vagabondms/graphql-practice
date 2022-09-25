import { useQuery } from "@apollo/client";
import Project from "../components/project";
import { Project as ProjectType } from "../models/project";
import { GET_PROJECTS } from "../queries/projects";

const Home = () => {
  const { loading, error, data } = useQuery<{ projects: ProjectType[] }>(
    GET_PROJECTS
  );

  if (loading) {
    return <div> isLoading</div>;
  }
  if (error) {
    return <div>error occurred</div>;
  }

  return (
    <div>
      {data?.projects?.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Home;
