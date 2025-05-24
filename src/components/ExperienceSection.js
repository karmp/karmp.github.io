import Card from "./Card";

export default function ExperienceSection({ data }) {
  if (!data || data.length === 0) {
    return (
      <section id="experience" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-5xl font-bold text-center text-black">
            Experience
          </h2>
          <p className="text-center text-black">
            No experience details found.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section id="experience">
      <div className="container mx-auto py-20">
        <h2 className="text-5xl font-bold text-center text-black">
          Experience
        </h2>

        <div className="grid grid-cols-1 gap-8 pt-10 content-center max-w-4xl mx-auto text-black text-left">
          {data.map((experience, index) => (
            <Card
              key={index}
              title={experience.Title}
              className="ml-10 mr-10 "
              titleClassName="mb-0"
            >
              <div key={index} className="text-slate-600">
                <h3 className="text-lg">{experience.Company}</h3>
                <h4 className="text-med">({experience.Dates})</h4>
                <ul className="text-black list-disc list-inside">
                  {experience.Highlights.length > 0 ? (
                    experience.Highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))
                  ) : (
                    <li>No highlight details found</li>
                  )}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* <Card title="Education" className="text-left text-black mb-4"></Card> */
}
