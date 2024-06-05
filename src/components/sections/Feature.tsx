import Image from "next/image";

const featureItems = [
  {
    title: "Since",
    bigText: "2010",
    desc: "Providing the same level of quality service",
  },
  {
    title: "Operate",
    bigText: "3",
    desc: "Trucks for fast & reliable cleaning service",
  },
  {
    title: "Over",
    bigText: "8000+",
    desc: "Home & Businesses trust us for cleaning services",
  },
  {
    title: "4.9 star,",
    bigText: "1200+",
    desc: "Homeowners reviewed us on internet.",
  },
];

const Feature = () => {
  return (
    <section className="feature">
      <div className="container">
        <div className="flex flex-col-reverse gap-10 py-12 items-center lg:flex-row">
          <div className="w-full text-center grid grid-cols-1 lg:w-2/3 md:grid-cols-2 gap-x-6 gap-y-14 lg:text-left">
            {featureItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 items-center lg:items-start md:gap-4"
              >
                <h3 className="text-sm">{item.title}</h3>
                <h1 className="text-[40px] font-bold text-dark-100blue lg:text-[50px] xl:text-[80px]">
                  {item.bigText}
                </h1>
                <p className="max-w-[220px] lg:text-lg">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="aspect-[3/4] max-w-[500px] w-full lg:w-1/3">
            <Image
              src="/herovideo.gif"
              width={900}
              height={1600}
              alt="jif"
              className="w-full h-full object-cover rounded-lg lg:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
