import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-black">
          Contact Me
        </h2>
        <p className="text-lg text-center text-slate-700 italic mb-8">
          To form my email, replace the info in brackets with their
          corresponding symbol
        </p>

        <div className="bg-white p-8 rounded-3xl border border-black max-w-lg mx-auto">
          <div className="flex items-center justify-center">
            <Image
              src="/email.png" 
              alt="Email icon"
              width={40}
              height={40}
              className="mr-3"
            />
            <p className="text-lg text-black">karm [dot] patel0315 [at] gmail [dot] com</p>
          </div>
        </div>
      </div>
    </section>
  );
}