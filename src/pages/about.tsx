import AboutAdvantages from "@/components/About/AboutAdvantages";
import AboutComponent from "@/components/About/AboutComponent";
import TitlePanel from "@/layout/TitlePanel";

export default function About() {
  return (
    <>
      <TitlePanel titleText="O nas" />
      <AboutComponent />
      <AboutAdvantages />
    </>
  );
}
