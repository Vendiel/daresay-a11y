import Head from "next/head";
import Link from "next/link";
import { ColorTheme, RelatedCard } from "../../components/general/RelatedCard/RelatedCard";

export default function RolesPage() {
  return (
    <>
      <Head>
        <title>Daresay Accessibility Checklist - Roles and Responsibilities</title>
      </Head>

      <div className={"colored-bg3 ingress"}>
        <section className={"wrapper"}>
          <div>
            <h1>Your role and responsibility</h1>
            <p>
              Accessibility consists of several dimensions, like design, technology, cognition, content,
              support. This means that when it comes to making sure a product or service is acessibility, the
              responsibility is not solely on one certain role but a team effort.
            </p>
          </div>
        </section>
      </div>

      <div className={"wrapper zero-padding-bottom"}>
        <section className={"card"}>
          <h2>Product owner</h2>
          <p>
            Making a product or service accessible should never be an afterthought. As a product owner it's
            your responsibility to make sure that accessibility is something that is included from the
            beginning, when a new project is about to start.
          </p>
          <p>
            Make sure you have a clear understanding what the rules and guidelines are about and see to it
            that every new feature comes with an acessibility requirement.
          </p>
          <p>
            Building an fully accessible product or service will take extra time, so make sure the team get
            the right prerequisites to do a good job.
          </p>
        </section>

        <section className={"card"}>
          <h2>Designers and copywriters</h2>
          <p>
            As a designer or copywriter its important to make sure that accessibility becomes a given part of
            the user experience and that you are considering a wide and varied target group when creating your
            user interface.
          </p>
          <p>
            <Link href="{`/understanding-the-user`}">
              <a>Get a basic understanding of the users</a>
            </Link>{" "}
            and always make sure your design works as intended for everyone by included users with
            disabilities when doing user tests.
          </p>
          <p>
            When designing there are a lot of details to consider so{" "}
            <Link href="{`/checklist`}">
              <a>check out the checklist</a>
            </Link>{" "}
            to make sure you don't miss anything, like giving all the colors good enough contrast, creating a
            logical layout and writing clear instructions or help texts. You can also check out this page with{" "}
            <Link href="{`/helpful-tools`}">
              <a> helpful tools</a>
            </Link>{" "}
            to see if there's something that might help you out when working on the user interface.
          </p>
        </section>

        <section className={"card"}>
          <h2>Developer</h2>
          <p>
            As a developer it's important to make sure that accessibility works on a technical level, cause if
            it doesn't the product or service will end up unusable.
          </p>
          <p>
            It's important to understand how the user will be affected by the choices you do when implementing
            a feature. By using the wrong kind of semantic element some users might not understand what they
            shall do or even miss the element all together.
          </p>
          <p>
            When implementing a design there is a lot of technical details to consider so{" "}
            <Link href="{`/checklist`}">
              <a>check out the checklist</a>
            </Link>{" "}
            to make sure you don't miss anything. For instance, make sure you follow coding guidelines, write
            semantic HTML, support keyboard navigation and use landmarks and correct hierarchy of the
            headlines so users get a logical structure of the page.
          </p>
          <p>
            There are some automatical tools you can use to make sure you've covered the basic things when it
            comes to accessibility. Just remember that there's no automated tool out there today that will
            cover every aspect that needs to be considered so it's important that you get a good grasp of what
            needs to be done. For tips on different tools, you can check out this page with{" "}
            <Link href="{`/helpful-tools`}">
              <a> helpful tools</a>
            </Link>{" "}
            .
          </p>
        </section>

        <section className={"card zero-margin-bottom"}>
          <h2>Tester</h2>
          <p>
            As a tester it's your job to quality assure that the design and implementation of the product or
            service is accessible. You're the last gatekeeper before it ends up in the hands of the user. This
            makes it important that you understand the accessibility requirements.
          </p>
          <p>
            Learning how to use the same tools as people with disabilities use is key so make sure you learn
            how to navigate the user interface with a screen reader and test out the entire flow using only
            keyboard navigation. Check out this page with{" "}
            <Link href="{`/helpful-tools`}">
              <a> helpful tools</a>
            </Link>{" "}
            .
          </p>
          <p>It's also recommended that you include accessibility in ordinarey test cases.</p>
        </section>
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
            icon="📐"
            linkText="Helpful tools"
            url="/helpful-tools"
            colorTheme={ColorTheme.COLOR4}
          />
          <RelatedCard
            icon="✔"
            linkText="Accessibility checklist"
            url="/checklist"
            colorTheme={ColorTheme.COLOR5}
          />
        </div>
      </div>
    </>
  );
}
