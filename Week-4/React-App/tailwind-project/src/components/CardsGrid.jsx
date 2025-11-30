import Card from "./Card";

function CardsGrid() {
  const cards = [
    {
      id: 1,
      title: "React Basics",
      text: "Understanding components and JSX is the first step."
    },
    {
      id: 2,
      title: "Tailwind CSS",
      text: "Utility-first CSS that makes styling super fast."
    },
    {
      id: 3,
      title: "Routing",
      text: "Create multi-page feel with React Router."
    },
    {
      id: 4,
      title: "State & Props",
      text: "Manage and share data between components."
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        📚 My Learning Cards
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} text={card.text} />
        ))}
      </div>
    </div>
  );
}

export default CardsGrid;
