import Head from "next/head";
import Link from "next/link";
import { LinkButton } from "../components/general/LinkButton/LinkButton";
import { MainCard } from "../components/general/MainCard/MainCard";
import {
  RelatedCardType,
  RelatedInformation,
} from "../components/general/RelatedInformation/RelatedInformation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daresay Accessibility Checklist - Home</title>
      </Head>

      <div className={"colored-bg"}>
        <section className={"wrapper"}>
          <div>
            <h1>
              Hi <span aria-hidden="true">👋</span>
            </h1>
            <p className={"ingress"}>
              Accessibility (a11y) is the practice of making your digital service, experience and information
              understandable and usable for everyone. It's also about treating everyone the same, giving
              everyone equal opportunity, no matter ability or circumstances.
            </p>
            <p className={"ingress"}>
              At Daresay we incorporate this mindset in everything we do and by sharing this checklist with
              you, we hope to make it easier for other to do it as well.
            </p>
            <LinkButton url="/checklist" linktext="Go to checklist" />
          </div>
        </section>
      </div>

      <div className={"wrapper zero-padding-bottom"}>
        <MainCard
          icon="🤔"
          header="What is this?"
          content={
            <>
              <p>
                The checklist summarises the accessibility requirements with focus on level A and AA that has
                been stated in{" "}
                <Link href="https://www.w3.org/WAI/WCAG21/quickref/">
                  <a>Web Content Accessibility Guidelines (WCAG) 2.1</a>
                </Link>
                , but in a more graspable, easier way.
              </p>
            </>
          }
        />

        <MainCard
          icon="🚀"
          header="Purpose"
          content={
            <>
              <p>
                This checklist is developed to support our daily work at Daresay, making it easier to
                understand how to design and develop more accessible products and services.
              </p>
            </>
          }
        />

        <MainCard
          icon="🎨"
          header="How to use"
          bottomMargin={false}
          content={
            <>
              <p>
                The checklist is good to use before, during and after the design phase or development phase.
                It's dividing it into the different elements you use when creating an online experience.
              </p>
              <ol>
                <li>
                  <Link href="/checklist">
                    <a>Go to the checklist</a>
                  </Link>
                </li>
                <li>Find one or several categories that’s relevant for you</li>
                <li>Read up on the requirements you need to cover for what you've selected</li>
                <li>Design or code to meet the requirements one at the time</li>
                <li>Check the requirement off the checklist once you’ve done it</li>
              </ol>
            </>
          }
        />
      </div>

      <div className={"wrapper"}>
        <RelatedInformation
          relatedCardTypes={[
            RelatedCardType.LAW,
            RelatedCardType.USER,
            RelatedCardType.ROLE,
            RelatedCardType.TOOLS,
          ]}
        />
      </div>
    </>
  );
}
