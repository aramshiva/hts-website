import Container from "./components/container";
import Layout from "./components/layout";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout>
        <Container>
            <div className="w-screen h-screen bg-[#004757] flex justify-center items-center flex-wrap pb-1 font-mono text-3xl">
                <p>~ Rules ~
- AI can be used to improve your code, but not write it.
- Projects must be submitted to the hackthesound repository with your name on it.
- Teams must have no more than 4 people.
- Your submission should have been made during the hackathon. Crossposting is not allowed.
- You must only submit one project, which will be submitted into every prize category.
- All projects must follow the Code of Conduct, found here: https://hackclub.com/conduct/

~ Good to Know ~
- Your project can be made in anything from scratch to java, even figma prototypes if thats your jam (get it?)!
- Categories for judging: Best design, best execution of theme, Most Creative, Best Overall
- Anyone aged 12-18 can register, no prior coding experience necessary
- Participants need to bring a laptop, charger(s), power brick (if available), and lunch or money for food
- A limited number of library-provided laptops are available for those who dont have one</p>
            </div>
        </Container>
      </Layout>
    </>
  );
}
