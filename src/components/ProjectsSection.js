import Card from "./Card";
import Image from "next/image";

export default function ProjectsSection({ data }) {
  if (!data || data.length === 0) {
    return (
      <section id="projects" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-5xl font-bold text-center text-black">
            Projects
          </h2>
          <p className="text-center text-black">No project details found.</p>
        </div>
      </section>
    );
  }
  return (
    <section id="projects">
      <div className="container mx-auto py-20">
        <h2 className="text-5xl font-bold text-center text-black">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 content-center max-w-6xl mx-auto text-black text-left">
          {data.map((project, index) => (
            <Card
              key={index}
              title={project.Title}
              className="ml-10 mr-10"
              titleClassName="mb-0 text-center"
            >
              <div className="relative w-full h-64 sm:h-56 md:h-64 overflow-hidden mb-4">
                <Image
                  src={project.mediaSource}
                  alt={project.Title || "Image/gif of project"}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
              <div className="flex-grow h-40 overflow-y-auto text-black pt-2 pr-2 mb-4">
                {project.Description}
              </div>

              {project.Link && (
                <div className="mt-auto text-center">
                  <a
                    href={project.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white border border-black hover:bg-slate-300 text-black font-bold py-2 px-4 rounded transition duration-300"
                  >
                    View Project
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
