const Services = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Service 1</h3>
          <p className="text-gray-700">Description of service 1.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Service 2</h3>
          <p className="text-gray-700">Description of service 2.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Service 3</h3>
          <p className="text-gray-700">Description of service 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
