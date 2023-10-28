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
          <div className="w-screen h-screen bg-[#004757] flex justify-center items-center flex-wrap pb-1">
            <div className="text-white text-5xl text-center">
              <p className="font-bold underline">hack the sound</p>
              <br />
              <p>december 2nd-3rd, 2023</p>
              <br />
              <p>tacoma, wa</p>
              <br />
              <Link target="_blank" href="https://forms.gle/iCPw3qu8XkxeqoHG9">
                <Button className="rounded-md bg-white px-4 py-3 text-sm font-mono text-[#004757] shadow-sm hover:[#005757]">
                  register
                </Button>
              </Link>
            </div>
          </div>
          <div className="h-20 w-screen bg-[#004757]" />
          <div>
            <div className="bg-[#004757] text-white font-mono pt-9 pl-9 flex justify-left items-left flex-wrap pb-1">
              <p className="text-3xl font-bold">about</p>
              <div className="h-[100%] w-screen" />
              <p className="pt-3">
                a hackathon is a social event where developers, designers,
                engineers, and makers band together to hang out, build projects,
                and have fun! our hackathon is aimed at 12-18 year olds in the
                puget sound area, no matter their prior tech experience.
              </p>
            </div>
            <div className="h-20 w-screen bg-[#004757]" />
          </div>
          <div className="bg-[#004757] text-white pl-9 pr-9 font-mono">
            <p className="text-3xl font-bold pb-10">faqs</p>
            <Accordion showDivider={false} variant="shadow">
              <AccordionItem
                key="1"
                aria-label="Hacking? isn’t that illegal?"
                title="Hacking? isn’t that illegal?"
                className="pb-5"
              >
                no! in our case, it’s a synonym for “creating” or “making”, not
                “breaking into computers and robbing people’s data”.
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="is this event free?"
                title="is this event free?"
                className="pb-5 pt-5"
              >
                yes! thanks to our very generous sponsors below, this event is
                free for all attendees. we'll have plenty of snacks, swag and
                we'll also cover dinner!
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="what should i bring?"
                title="what should i bring?"
                className="pb-5 pt-5"
              >
                a form of identification, laptop, charger(s), power brick (if
                you have it), and lunch or lunch money to use at local food
                spots. please also create{" "}
                <Link className="underline" href="https://github.com">
                  a free github account
                </Link>{" "}
                if you don’t already have one.
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="do i need a team?"
                title="do i need a team?"
                className="pb-5 pt-5"
              >
                forming a team isn’t mandatory - if you’d rather fly solo,
                that’s ok! there is a limit of 4 people per team.
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="can i submit past projects?"
                title="can i submit past projects?"
                className="pb-5 pt-5"
              >
                any project that you submit should have been made during the
                hackathon, not previously.
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="is there a specific language i should use?"
                title="is there a specific language i should use?"
                className="pb-5 pt-5"
              >
                nope! you can use anything from scratch to java, even figma
                prototypes if thats your jam (get it?)! whatever you’d prefer to
                work with.
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="can i use ai to create my project?"
                title="can i use ai to create my project?"
                className="pb-5 pt-5"
              >
                you can use ai to improve your code, but not create your
                project.
              </AccordionItem>
              <AccordionItem
                key="8"
                aria-label="i have another question!"
                title="i have another question!"
                className="pb-5 pt-5"
              >
                please email us at us@hackthesound.net with any questions you
                have.
              </AccordionItem>
            </Accordion>
          </div>
          <div className="h-20 w-screen bg-[#004757]" />
          <div className="bg-[#004757] text-white pl-9 pr-9 font-mono">
            <p className="text-3xl font-bold pb-2">sponsors</p>
            <p className="text-l text-gray-200 pb-5">We need your support for running a high quality event. Contact us at <Link className="underline" href="mailto:us@hackthesound.net">us@hackthesound.net</Link> if you are open to sponsoring us.</p>
          </div>
          <div className="bg-[#004757] font-mono">
            <Link href="https://mypcls.org/"><Image src="/piercecountylibrary.png" alt="Pierce County Library System" width={300} height={300}></Image></Link>
            <Link href="https://freehumans.com/"><Image src="/freehumans.svg" alt="FreeHumans" width={300} height={300}></Image></Link>
          </div>
          <div className="bg-[#004757] text-center flex justify-center items-center flex-wrap text-white font-mono">
            <p className="text-2xl">Hope to see you there! :)</p>
          </div>
          <div className="h-20 w-screen bg-[#004757]" />
          <div className="bg-[#004757] text-center flex justify-center items-center flex-wrap text-white font-mono">
            <p>made with love | © 2023 hack the sound</p>
          </div>
        </Container>
      </Layout>
    </>
  );
}
