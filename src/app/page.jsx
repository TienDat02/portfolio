import Avatar from "@/components/ui/Avatar";
import Stats from "@/components/ui/Stat";
import GradientButton from "@/components/ui/GradientButton";
// Add these imports
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

const Home = () => {
  return(
    <section className="mt-8 h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-between items-center text-center md:flex-row md:text-left">
        <div className="order-2 md:order-none">
          <h2>Xin chào!</h2>
          <h1>I&apos;m <span className="text-5xl text-accent md:text-7xl">Đạt</span>,</h1>
          <p className="max-lg:max-w-[450px] lg:max-w-[600px] md:text-lg my-4"> a recent IT graduate with a passion for developing modern, elegant solutions that drive efficiency and innovation. With a strong foundation in software development and system analysis, I am eager to apply my skills to create impactful and scalable technologies.</p>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-y-0 md:space-x-4">
            <GradientButton href="/resume">View Resume</GradientButton>
            <div className="flex space-x-4 gap-4">
              <Link href="https://github.com/TienDat02" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl transition-colors hover:text-accent" />
              </Link>
              <Link href="https://www.linkedin.com/in/%C4%91%E1%BA%A1t-tr%E1%BA%A7n-ti%E1%BA%BFn-82781a327/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl transition-colors hover:text-accent" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100012269743634" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl transition-colors hover:text-accent" />
              </Link>
            </div>
          </div>
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