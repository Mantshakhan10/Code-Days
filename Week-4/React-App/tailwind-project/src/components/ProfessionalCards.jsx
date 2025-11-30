function ProfessionalCards() {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      desc: "Build responsive, modern web interfaces using React & Tailwind.",
      tag: "React / UI"
    },
    {
      id: 2,
      title: "Backend API Development",
      desc: "RESTful API development with Node.js & Express.",
      tag: "Node / Express"
    },
    {
      id: 3,
      title: "Full Stack Projects",
      desc: "End-to-end application development with MERN stack.",
      tag: "MERN Stack"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        My Professional Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">

        {services.map((card) => (
          <div
            key={card.id}
            className="
            bg-white rounded-xl shadow-md p-6
            hover:shadow-xl hover:-translate-y-2
            transition-all duration-300 border border-transparent hover:border-primary
          "
          >
            <span className="text-sm font-semibold text-secondary">{card.tag}</span>

            <h3 className="text-xl font-bold mt-2">{card.title}</h3>
            <p className="text-gray-600 mt-2 mb-4">{card.desc}</p>

            <button
              className="
              bg-primary text-white px-4 py-2 rounded-lg
              hover:bg-blue-700 transition-all duration-300
            "
            >
              Learn More
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}

export default ProfessionalCards;
