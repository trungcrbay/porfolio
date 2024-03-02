import Projects from "@/components/projects";


const ProjectsPage = async () => {
  const getProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/v1/projects`, {
      method: "GET",
    });
    return res.json();
  }

  const data = await getProjects();

  console.log("check data: ",data);
  return (
    <div className="min-h-screen ">
      <Projects dataProject={data.data}/>

    </div>
  );
};

export default ProjectsPage;
