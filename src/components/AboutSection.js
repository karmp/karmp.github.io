import Card from "./Card";

export default function AboutSection({ data }) {
  return (
    <section id="about">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-black">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 ml-4 mr-4 content-center">
          <Card title="Education" className="text-left text-black mb-4">
            {data.Education.length > 0 ? (
              data.Education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <p className="text-lg font-bold">
                    {edu["University Name"]}
                  </p>
                  <p className="">{edu["Degree"]}</p>
                  <p className="">GPA: {edu["GPA"]}</p>
                  {edu["Other Info"] && edu["Other Info"].length > 0 && (
                    <ul className="list-disc list-inside text-sm mt-1">
                      {edu["Other Info"].map((info, infoIndex) => (
                        <li key={infoIndex}>{info}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <p>No education details available yet.</p>
            )}
          </Card>
          <Card title="Skills" className="text-left text-black mb-4">
            {Object.keys(data.Skills).length > 0 ? (
              Object.keys(data.Skills).map((category, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <p className="text-lg font-bold">{category}:</p>
                  <p className=""> {data.Skills[category].join(", ")} </p>
                </div>
              ))
            ) : (
              <p>No skills details available yet.</p>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
