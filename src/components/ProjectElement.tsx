const ProjectElement: React.FC<{ element: string }> = ({ element }) => {
  return (
    <div className="border p-1 bg-slate-200 text-slate-500 text-sm font-medium rounded-md hover:cursor-pointer hover:scale-105 hover:text-slate-600">
      {element}
    </div>
  );
};

export default ProjectElement;
