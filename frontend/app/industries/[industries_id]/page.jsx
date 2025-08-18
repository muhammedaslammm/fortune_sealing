import industries from "@/data/industries";

export default function IndustryPage({ params }) {
  const { industries_id } = params;
  const industry = industries.find(
    (item) => item.id === parseInt(industries_id, 10)
  );

  if (!industry) {
    return (
      <div className="p-10 text-center text-xl font-semibold text-red-600">
        Industry not found
      </div>
    );
  }

  return (
    // Use the same class as the product page for consistent styling
    <section className="page--product">
      <div className="w-[90%] mx-auto py-10 grid md:grid-cols-2 gap-8 items-start">
        {/* LEFT: Industry Image */}
        <div className="w-full">
          <img
            src={industry.url}
            alt={industry.image_attribute}
            className="rounded-lg shadow-md w-full max-h-[400px] object-cover bg-gray-100"
          />
        </div>

        {/* RIGHT: Industry Details */}
        <div className="space-y-6">
          <div>
            {/* Use the same heading class as the product page */}
            <h1 className="section_head--secondary">{industry.title}</h1>
            <p className="text-gray-700 mt-2">{industry.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
