import Head from "next/head";
import Navbar from "@/components/navbar";
import ProfileSection from "../components/ProfileSection";
import { useState, useEffect } from "react";
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';


export default function Home() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const response = await fetch("my_info.json");
        if (!response.ok) {
          throw new Error("Trouble loading my_info JSON");
        }
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyInfo();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Karm Patel Portfolio</title>
        <link rel="icon" type="image/x-icon" href="favicon-16x16.png" />
      </Head>
      <Navbar></Navbar>
      <main className="min-h-screen text-center">
        <ProfileSection data={info} />
        <AboutSection data={info["About Me"]} />
        <ExperienceSection data={info["Experience"]} />
        {/* <ProjectsSection data={info} /> */}
        {/* <ContactSection data={info} /> */}
      </main>
    </div>
  );
}
