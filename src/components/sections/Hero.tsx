import Image from "next/image";

const Hero = () => {
    return (
        <section className="flex flex-col items-center bg-[#FFF] px-5 py-20 justify-center text-[#000]">
            <div className="text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold">Power Your Future with <span className="text-sky-500">Solar Energy</span></h1>
                <p className="text-lg">Sustainable. Affordable. Efficient</p>
                <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/solar-energy.jpeg"
                      alt="Solar Energy"
                      width={600}
                      height={600}
                      className="rounded-lg"
                      priority
                    />
                </div>
                <button className="px-6 py-3 bg-amber-600 text-[#fff] rounded-lg mt-6">Get a Free Quote</button>
            </div>
        </section>
    );
};

export default Hero;