import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-yellow-300 to-orange-500 text-white">
            <div className="text-center space-y-6">
                <h1 className="text-5xl font-extrabold">Power Your Future with Solar Energy</h1>
                <p className="text-lg">Sustainable. Affordable. Efficient</p>
                <div className="relative w-full h-full flex justify-center">
                    <Image
                      src="/images/solar-energy.jpeg"
                      alt="Solar Energy"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                </div>
                <button className="px-6 py-3 bg-secondary text-white rounded-lg mt-6">Get a Free Quote</button>
            </div>
        </section>
    );
};

export default Hero;