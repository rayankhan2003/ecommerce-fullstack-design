export default function ExtraServices() {
  const services = [
    {
      id: 1,
      title: "Source from Industry hubs",
      icon: "🏭",
      image: "/images/services/warehouse-worker.png",
    },
    {
      id: 2,
      title: "Customize Your Products",
      icon: "🎨",
      image: "/images/services/color-swatches.png",
    },
    {
      id: 3,
      title: "Fast, reliable shipping by ocean or air",
      icon: "✈️",
      image: "/images/services/air-freight.png",
    },
    {
      id: 4,
      title: "Product monitoring and inspection",
      icon: "🔍",
      image: "/images/services/shipping-boxes.png",
    },
  ]

  return (
    <div className="bg-white rounded-md p-6 shadow-sm" style={{ width: "1180px" }}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Our extra services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <div key={service.id} className="relative rounded-md overflow-hidden group h-48">
            <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span>{service.icon}</span>
              </div>
              <p className="text-white text-center font-medium px-4">{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
