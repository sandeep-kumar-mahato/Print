import sample from "../assets/sample.jpg";
import sample4 from "../assets/sample4.jpg";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <div className="container mx-auto text-[#353229]">
      <section className="flex flex-col lg:flex-row justify-between items-center py-10">
        <div className="text-center lg:w-1/2 lg:p-4">
          <h1 className="text-2xl lg:text-5xl my-4">
            Welcome to Our Printing Company
          </h1>
          <div className="w-64 h-auto m-auto my-4">
            <Carousel />
          </div>
          <p className="text-xl my-8">
            We offer the best printing services for your needs.
          </p>
          <a
            href="#services"
            className="bg-[#17110d] hover:bg-[#2f2117] text-[#fef8ed] font-bold py-2 px-4 rounded"
          >
            Our Services
          </a>
        </div>
        <div className="w-full lg:w-1/2 mt-4">
          <img src={sample} alt="sample" className="w-full p-4" />
        </div>
      </section>

      <main className="text-center p-10  bg-[#dad3c1]">
        <p className="text-2xl mb-4">Express Printing Solutions</p>
        <h1 className="text-xl lg:text-4xl font-medium py-4">
          Quick, reliable, and affordable printing services <br /> for all your
          needs
        </h1>
        <button
          type="submit"
          className="bg-[#17110d] hover:bg-[#2f2117] text-[#fef8ed] font-bold py-2 px-4 rounded mt-4"
        >
          Order Now
        </button>
      </main>

      <section className="lg:w-4/5 m-auto text-center mt-8">
        <h1 className="text-2xl font-semibold my-4">Why Choose undefined</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="card p-4">
              <img src={sample} alt="sample" />
              <h1 className="my-3 text-xl">Title</h1>
              <p className="text-slate-700 text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis sequi ex facilis ut debitis deleniti eveniet est
                cumque commodi, modi ad neque ullam eligendi, minus, blanditiis
                fugit vel alias. Accusantium mollitia magni nesciunt sequi
                cumque illum fugiat earum enim ab.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-left lg:my-10 py-8 lg:py-16 px-2 lg:px-10 bg-[#fbebc4] font-serif">
        <div className="lg:flex  items-center lg:my-5">
          <h1 className="lg:w-1/2 m-auto text-3xl lg:text-6xl pb-4">
            Best Sellers
          </h1>
          <h2 className="lg:w-1/2 m-auto lg:text-2xl">
            When quality is eco-friendly. <br /> Explore our top picks.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:flex gap-4 py-5">
          <div className="item-1 p-1 lg:p-2 w-44 lg:w-1/4">
            <img src={sample4} alt="sample" className="w-full pt-4" />
            <p className="pt-2">Bamboo Cutlery Set</p>
            <p>$12.00</p>
          </div>
          <div className="item-2 p-1 lg:p-2 w-44 lg:w-1/4">
            <img src={sample4} alt="sample" className="w-full pt-4" />
            <p className="pt-2">Bamboo Cutlery Set</p>
            <p>$12.00</p>
          </div>
          <div className="item-3 p-1 lg:p-2 w-44 lg:w-1/4">
            <img src={sample4} alt="sample" className="w-full pt-4" />
            <p className="pt-2">Bamboo Cutlery Set</p>
            <p>$12.00</p>
          </div>
          <div className="item-4 p-1 lg:p-2 w-44 lg:w-1/4">
            <img src={sample4} alt="sample" className="w-full pt-4" />
            <p className="pt-2">Bamboo Cutlery Set</p>
            <p>$12.00</p>
          </div>
        </div>
      </section>

      <section className="lg:w-4/5 m-auto text-center my-10">
        <h1 className="text-xl my-8 px-4">
          Prints That Speak Volumes: An Exhibition of Our High-Quality Printing
          Services
        </h1>
        <div className="flex flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <img
              key={index}
              src={sample}
              alt="sample"
              className="w-full lg:w-[33.33%] p-4 lg:p-1"
            />
          ))}
        </div>
      </section>

      <section className="lg:w-4/5 m-auto text-center my-10">
        <h1 className="my-4 text-xl">Professional Printing Solutions</h1>
        <p className="px-8 lg:px-64">
          Welcome to PrintFusion, your one-stop-shop for all your printing
          needs. We specialize in providing professional printing solutions for
          individuals and businesses alike. From digital to offset printing, we
          have the expertise to deliver top-notch quality every time.
        </p>
        <button
          type="submit"
          className="bg-[#17110d] hover:bg-[#2f2117] text-[#fef8ed] font-bold py-2 px-4 rounded mt-4"
        >
          Find out more
        </button>
      </section>
    </div>
  );
}
