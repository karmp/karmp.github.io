import Image from "next/image";
import Socials from "./Socials";

export default function ProfileSection({ data }) {
    console.log(data);
    return (
    <section
      id="profile"
      className="flex flex-col md:flex-row justify-center items-center gap-20 min-h-screen px-8 py-16 md:py-0"
    >
      <div className="flex justify-center items-center h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] my-0 mx-auto overflow-hidden rounded-full shadow-lg">
        <Image
          src="/about_pic_me.jpg"
          alt="PFicture of Karm"
          width={400} // Max width to pre-render for Next/Image
          height={400} // Max height to pre-render for Next/Image
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
