import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about software development
Building modern web applications
Solving real-world problems through code`;
  const aboutText = `
Hi! I am Adarsh Kumar, a final-year B.Tech student in Engineering and Computational Mechanics at MNNIT Allahabad. My interests span software development, data analytics, machine learning, and Generative AI, with a strong foundation in data structures and problem-solving. I enjoy building real-world applications and working across the stack, from developing full-stack web applications to building ML and RAG-based AI systems. My projects include Srijan AI, an AI-powered website builder with authentication, live code editing, deployment, and Stripe-powered credit management; Loopr, a full-stack social networking platform; DocuChat AI, a RAG-based PDF question-answering application using LangChain, ChromaDB, HuggingFace embeddings, and Mistral AI; PeerPrep, a real-time interview preparation platform; Smart Bathroom Cleaning Tracker, an IoT-based monitoring system; and Urban Traffic Flow Optimization, a data analytics project.
`
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Learn, Build, Improve"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpeg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
