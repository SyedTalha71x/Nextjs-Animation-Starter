import Image from "next/image";
import Homepage from '../app/Homepage/page'
import Animation from '../app/Particles/page'
import Cursor from '../app/Customcursor/page'
import Hero from '../app/Hero/page'

export default function Home() {
  return (
    <>
      <Cursor />
      <Animation />
      <Hero />
    </>
  );
}
