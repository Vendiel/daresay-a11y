import Head from "next/head";
import { ColorTheme, RelatedCard } from "../../components/general/RelatedCard/RelatedCard";

export default function ToolsPage() {
  return (
    <>
      <Head>
        <title>Daresay Accessibility Checklist - Helpful tools</title>
      </Head>

      <div className={"colored-bg4"}>
        <section className={"wrapper"}>
          <div>
            <h1>Helpful tools</h1>
            <p className={"ingress"}>Lorem ipsum.</p>
            <p className={"ingress"}>Dolor set.</p>
          </div>
        </section>
      </div>

      <div className={"wrapper zero-padding-bottom"}>
        <section className={"card"}>
          <h2>Situationsbaserad </h2>
        </section>

        <section className={"card"}>
          <h2>Categories</h2>
        </section>

        <section className={"card"}>
          <h2>Talk to users</h2>
        </section>

        <section className={"card"}>
          <h2>Check out material online</h2>
        </section>

        <section className={"card"}>
          <h2>Try using their tools</h2>
        </section>

        <section className={"card"}>
          <h2>Numbers</h2>
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
