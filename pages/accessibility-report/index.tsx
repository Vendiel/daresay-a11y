import Head from "next/head";

export default function ReportPage() {
  return (
    <>
      <Head>
        <title>Daresay Accessibility Checklist - Accessibility report</title>
      </Head>

      <div className={"colored-bg"}>
        <section className={"wrapper"}>
          <h1>Accessibility report</h1>
          <p className={"ingress"}>
            This website is run by Daresay. We want as many people as possible to be able to use this website,
            and this document describes how Daresay Accessibility Checklist complies with the accessibility
            regulations, any known accessibility issues, and how you can report problems so that we can fix
            them.
          </p>
        </section>
      </div>

      <div className={"wrapper "}>
        <section className={"card"}>
          <h2>How accessible is website?</h2>

          <p>We know some parts of this website aren’t fully accessible.</p>
          <p>
            The links below lead to detailed information about the accessibility problems you may encounter in
            various usage situations.
          </p>

          <ul>
            <li>
              <a href="#usage-1">Usage without vision</a>
            </li>
            <li>
              <a href="#usage-2">Usage with limited vision</a>
            </li>
            <li>
              <a href="#usage-8">Usage without hearing</a>
            </li>
            <li>
              <a href="#usage-10">Usage with limited hearing</a>
            </li>
          </ul>
        </section>

        <section className={"card"}>
          <h2>What to do if you can’t access parts of this website?</h2>

          <p>
            If you need content from this website that is not accessible for you, but is not within the scope
            of the accessibility regulations as described below, please{" "}
            <a href="https://daresay.co">contact us</a>.
          </p>

          <p>Our normal response time is 2 working days.</p>

          <p>You can also contact us in the following ways:</p>
          <ul>
            <li>
              email <a href="mailto:info@daresay.co">info@daresay.co</a>
            </li>
            <li>
              call <a href="tel:+46-8123123123">08123123123</a>
            </li>
          </ul>
        </section>

        <section className={"card"}>
          <h2>Reporting accessibility problems with this website</h2>

          <p>
            We’re always looking to improve the accessibility of this website. If you find any problems that
            aren’t listed on this page or if we’re not meeting the requirements of the accessibility
            regulations, <a href="https://daresay.co">contact us</a> and let us know about the problem.
          </p>
        </section>

        <section className={"card"}>
          <h2>Enforcement procedure</h2>

          <p>
            The Agency for Digital Government is responsible for enforcing the accessibility regulations. If
            you’re not happy with how we respond to your complaint about web accessibility or your request to
            make content accessible, you can{" "}
            <a href="https://www.digg.se/tdosanmalan">
              submit a complaint to the Agency for Digital Government
            </a>
            .
          </p>
        </section>

        <section className={"card"}>
          <h2>Technical information about this website’s accessibility</h2>

          <p>
            This website is not compliant with the Swedish accessibility regulations. The non-accessible
            sections are listed below.
          </p>
        </section>

        <section className={"card"}>
          <h2>Non accessible content</h2>

          <p>The content described below is, in one way or another, not fully accessible.</p>

          <h3>Non compliance with the accessibility regulations</h3>
          <h4>Issues with usage without vision</h4>
          <ul>
            <li>
              <p>Needs to fix aria-live stuff.</p>
            </li>
          </ul>
          <h4>Issues with usage with limited vision</h4>
          <ul>
            <li>
              <p>Need to fix yada yada.</p>
            </li>
          </ul>
          <h4>Issues with usage without hearing</h4>
          <ul>
            <li>
              <p>No known issues.</p>
            </li>
          </ul>
          <h4>Issues with usage with limited hearing</h4>
          <ul>
            <li>
              <p>No known issues.</p>
            </li>
          </ul>

          <p>It is our ambition to fix all known accessibility problems by 31st of March, 2021.</p>

          <h3>Disproportionate burden</h3>

          <p>
            Daresay invokes an exemption for disproportionate burden in accordance with §&#160;12 in the
            accessibility regulations for the content described below.
          </p>

          <p>Lorem ipsum dolor sit amet.</p>
        </section>

        <section className={"card"}>
          <h2>How we tested this website</h2>
          <p>We have performed a self-assessment (internal testing) of Daresay Accessibility Checklist.</p>

          <p>The last assessment was made on 2&#160;December, 2020.</p>

          <p>
            <a href="https://daresay.co">Assessment method</a>
          </p>

          <p>
            <a href="https://daresay.co">Evaluation report</a>
          </p>

          <p>The statement was last updated on 3&#160;December, 2020.</p>
        </section>
      </div>
    </>
  );
}
