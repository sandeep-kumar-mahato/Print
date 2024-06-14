const Footer = () => {
  return (
    <footer className="bg-[#dad3c1] text-[#353229] p-8 pt-16 mt-auto font-serif">
      <div className="flex-col lg:flex lg:flex-row flex-wrap justify-between">
        {/* Column 1 */}
        <div className="my-6">
          <ul className="tracking-wider leading-9">
            <li className="underline font-medium">Shop All</li>
            <li>Kitchen</li>
            <li>Bath</li>
            <li>On the Go</li>
            <li>New In</li>
            <li>Best Sellers</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        {/* Column 2 */}
        <div className="my-6">
          <ul className="tracking-wider leading-9">
            <li className="underline font-medium">Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Accessibility Statement</li>
            <li>FAQ</li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className="my-6">
          <ul className="tracking-wider leading-9">
            <li className="underline font-medium">Social</li>
            <li>
              Facebook{" "}
              <a href="#" className="mr-2">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              Instagram <i className="fab fa-instagram"></i>
            </li>
            <li>
              X <i className="fab fa-twitter"></i>
            </li>
            <li>Pinterest</li>
          </ul>
        </div>
        {/* Column 4 */}
        <div className="w-full sm:w-1/2 my-6 lg:px-4">
          <h5 className="uppercase mb-4 font-bold text-3xl">
            Stay inspired and eco-friendly
          </h5>
          <p className="mb-4">
            Join us in our journey towards sustainable living and conscious
            consumption.
          </p>
          <label htmlFor="Email">Email*</label>
          <div className="flex mb-4">
            <input
              type="email"
              className="w-full p-2 mr-2 bg-transparent border-b-2 border-[#353229]"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                className="mr-2"
              />
              <label htmlFor="newsletter">Subscribe to our newsletter</label>
            </div>
            <button className="px-10 py-2 bg-transparent rounded-3xl border-2 border-[#353229] hover:bg-[#353229] hover:text-[#dbd3c3]">
              Submit
            </button>
          </div>
          <div className="flex mt-4"></div>
        </div>
      </div>
      <div className="flex-col lg:flex lg:flex-row justify-between text-center items-baseline">
        <h1 className="text-6xl lg:text-9xl">PrintFusion</h1>
        <p>
          &copy; {new Date().getFullYear()} Printing Company. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
