import Head from "next/head";
import Link from "next/link";
import { MainCard } from "../components/general/MainCard/MainCard";
import {
  ColorTheme,
  RelatedCard,
} from "../components/general/RelatedCard/RelatedCard";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    title: string;
    id: string;
  }[];
}) {
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
              Accessibility (<abbr>a11y</abbr>) is the practice of making your
              digital service, experience and information understandable and
              usable for everyone. It's also about treating everyone the same,
              giving everyone equal opportunity, no matter ability or
              circumstances.
            </p>
            <p className={"ingress"}>
              At Daresay we incorporate this mindset in everything we do and by
              sharing this checklist with you, we hope to make it easier for
              other to do it as well.
            </p>
            <Link href={`/checklist`}>
              <a>Go to checklist</a>
            </Link>
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
                The checklist summarises the accessibility requirements with
                focus on level A and AA that has been stated in{" "}
                <Link href="/">
                  <a>Content Accessibility Guidelines (WCAG) 2.1</a>
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
                This checklist is developed to support our daily work at
                Daresay, making it easier to understand how to design and
                develop more accessible products and services.
              </p>
            </>
          }
        />

        <MainCard
          icon="🎨"
          header="How to use"
          content={
            <>
              <p>
                The checklist is good to use before, during and after the design
                phase or development phase. It's dividing it into the different
                elements you use when creating an online experience.
              </p>
              <ol>
                <li>
                  <Link href="/checklist">
                    <a>Go to the checklist</a>
                  </Link>
                </li>
                <li>Find one or several categories that’s relevant for you</li>
                <li>
                  Read up on the requirements you need to cover for what you've
                  selected
                </li>
                <li>Design or code to meet the requirements one at the time</li>
                <li>
                  Check the requirement off the checklist once you’ve done it
                </li>
              </ol>
            </>
          }
        />
      </div>

      <div className={"wrapper related-info"}>
        <h2>Related information</h2>
        <div className={"flex-row margin-bottom-3x"}>
          <RelatedCard
            icon="🖋"
            linkText="About the law"
            url="/about-the-law"
            colorTheme={ColorTheme.COLOR1}
          />
          <RelatedCard
            icon="👩‍🦼"
            linkText="Understanding the user"
            url="/understanding-the-user"
            colorTheme={ColorTheme.COLOR2}
          />
        </div>
        <div className={"flex-row"}>
          <RelatedCard
            icon="🎖"
            linkText="Your role and responsibility"
            url="/roles-and-responsibility"
            colorTheme={ColorTheme.COLOR3}
          />
          <RelatedCard
            icon="📐"
            linkText="Helpful tools"
            url="/helpful-tools"
            colorTheme={ColorTheme.COLOR4}
          />
        </div>
      </div>
    </>
  );
}
