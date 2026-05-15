import bannerImg from "../../assets/bannerBook.png";

const Banner = () => {
  return (
    <div className=" mx-1 md:mx-auto mt-10 bg-gray-100 rounded-3xl px-3 md:px-16 py-6 md:py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      
      {/* Left Content */}
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-black">
          Books to freshen up <br className="hidden md:block" />
          your bookshelf
        </h1>

        <button className="px-6 py-2 md:px-8 md:py-4 text-base font-semibold md:text-lg text-white transition duration-500 bg-green-500 border-2 border-green-500 hover:bg-white hover:text-green-500 hover:border-green-600 rounded-xl">
          View The List
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src={bannerImg}
          alt="Book"
          className="w-44 sm:w-46 md:w-72"
        />
      </div>
    </div>
  );
};

export default Banner;