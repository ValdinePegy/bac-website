import AboutIntro from "../components/About/AboutIntro";
import CGAInfo from "../components/About/CGAInfo";
import MissionVision from "../components/About/MissionVision";
import TeamSection from "../components/About/TeamSection";
import ContactInfo from "../components/About/ContactInfo";

export default function AboutPage() {
  return (
    <div className="p-6 space-y-6">
      <AboutIntro />
      <CGAInfo />
      <MissionVision />
      <TeamSection />
      <ContactInfo />
    </div>
  );
}

