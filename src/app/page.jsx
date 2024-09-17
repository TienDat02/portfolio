import Avatar from "@/components/ui/Avatar";
import Stats from "@/components/ui/Stat";
import GradientButton from "@/components/ui/GradientButton";

const Home = () => {
  return(
    <section className="mt-8 h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-between items-center text-center md:flex-row md:text-left">
        <div className="order-2 md:order-none">
          <h2>Xin chào!</h2>
          <h1>I'm <span className="text-5xl text-accent md:text-7xl">Đạt</span>,</h1>
          <p className="max-lg:max-w-[450px] lg:max-w-[600px] md:text-lg my-4"> a recent IT graduate with a passion for developing modern, elegant solutions that drive efficiency and innovation. With a strong foundation in software development and system analysis, I am eager to apply my skills to create impactful and scalable technologies.</p>
          <GradientButton href="/resume">View Resume</GradientButton>

        </div>
        <div className="order-1 md:order-none max-md:mb-8">
          <Avatar />
        </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;