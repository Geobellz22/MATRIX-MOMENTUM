function Services() {
  const services = [
    {
      imgURL: "src/assets/images/services-img/1-dark.png",
      heading: "Strategy Consulting",
      text: "A social assistant that's flexible can accommodate your schedule and needs, making life easier",
    },
    {
      imgURL: "src/assets/images/services-img/2-dark.png",
      heading: "Financial Advisory",
      text: "Modules transform smart trading by automating processes and improving decision-making",
    },
    {
      imgURL: "src/assets/images/services-img/3-dark.png",
      heading: "Management",
      text: "There, it's me, your friendly neighborhood reporter's news analyst processes and improving",
    },
    {
      imgURL: "src/assets/images/services-img/4-dark.png",
      heading: "Supply Optimization",
      text: "Hey, have you checked out that new cryptocurrency platform? It's pretty cool and easy to use!",
    },
    {
      imgURL: "src/assets/images/services-img/5-dark.png",
      heading: "HR Consulting",
      text: "Hey guys, just a quick update on exchange orders. There have been some changes in currency!",
    },
    {
      imgURL: "src/assets/images/services-img/6-dark.png",
      heading: "Marketing Consulting",
      text: "Hey! Just wanted to let you know that the price notification module processes is now live!",
    },
  ];
  return (
    <section className="my-20 text-center w-9/12 lg:w-11/12 xl:w-9/12 mx-auto">
      <h1 className="text-capitalize text-white xl:text-5xl text-center text-3xl lg:text-5xl font-main font-semibold mb-12">
        Services We Offer
      </h1>
      <p className="text-white font-sub lg:w-1/2 mx-auto md:w-3/4 md:text-md">
        We offer the best services around - from installations to repairs,
        maintenance, and more!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-10">
        {services.map((service) => (
          <article
            key={service.heading}
            className="py-10 px-6 md:py-10 md:px-2 lg:p-10 rounded-xl text-white text-center bg-[#061A14] transition-all duration-500 border-2 border-[#273833] hover:-translate-y-3 hover:border-[#00D094]"
          >
            <div className="w-20 lg:w-24 h-20 lg:h-24 rounded-full bg-[#273833] mx-auto flex justify-center items-center mb-7 border-2 border-[#273833]">
              <img src={service.imgURL} alt="" className="md:w-10" />
            </div>
            <h1 className="font-main font-semibold text-2xl md:text-xl lg:text-2xl mb-3">
              {service.heading}
            </h1>
            <p className="font-sub md:text-sm">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
