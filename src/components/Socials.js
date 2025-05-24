import Image from 'next/image';

export default function Socials({ linkedin, github }) {
  return (
    <div className="flex justify-center md:justify-start gap-4 mt-6">
      <Image
        src="/LI-In-Bug.png" // Path assuming directly in public/
        alt="My LinkedIn profile"
        width={32}
        height={32}
        className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110"
        onClick={() => window.open(linkedin, '_blank')}
      />
      <Image
        src="/github-mark.png" // Path assuming directly in public/
        alt="My Github profile"
        width={32}
        height={32}
        className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110"
        onClick={() => window.open(github, '_blank')}
      />
    </div>
  );
}