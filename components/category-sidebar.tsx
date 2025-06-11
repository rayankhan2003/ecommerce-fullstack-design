export default function CategorySidebar() {
  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ]

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm" style={{ width: "250px", height: "360px" }}>
      <ul className="h-full">
        {categories.map((category, index) => (
          <li key={index} className={index === 0 ? "bg-blue-50" : ""} style={{ height: "40px" }}>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors h-full flex items-center"
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
