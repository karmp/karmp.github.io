import Image from "next/image";
import Socials from "./Socials";

export default function ProfileSection({ data }) {
    return (
    <section
      id="profile"
      className="flex flex-col md:flex-row justify-center items-center gap-10 min-h-screen px-8"
    >
      <div className="flex justify-center items-center h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] my-0 mx-auto overflow-hidden rounded-full">
        <Image
          src="/about_pic_me.jpg"
          alt="Picture of Karm"
          width={400} 
          height={400}
          className="w-full h-full object-cover"
          priority // Prioritize loading for LCP (Largest Contentful Paint)
        />
      </div>
      <div className="self-center text-center md:text-left max-w-2xl">
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
          {data.Introduction}
        </p>
        <Socials linkedin={data.LinkedIn} github={data.GitHub} />
      </div>
    </section>
  );
}
