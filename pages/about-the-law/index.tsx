import Head from "next/head";
import Link from "next/link";
import {
  RelatedCardType,
  RelatedInformation,
} from "../../components/general/RelatedInformation/RelatedInformation";

export default function AboutLawPage() {
  return (
    <>
      <Head>
        <title>Daresay Accessibility Checklist - About the law</title>
      </Head>

      <div className={"colored-bg1 ingress"}>
        <section className={"wrapper"}>
          <div>
            <h1>About the law</h1>
            <p>
              Daresay is an agency located in Sweden and we work with a number of clients within the public
              sector.
            </p>
            <p>
              Like other countries in EU, all digital services provided by the public sector must comply with
              EU's Web Accessibility Directive.
            </p>
          </div>
        </section>
      </div>

      <div className={"wrapper zero-padding-bottom color1"}>
        <section className={"card"}>
          <h2>Web Accessibility Directive</h2>
          <p>
            The Web Accessibility Directive, also known as Directive (EU) 2016/2102, is a legislation act that
            set objectives related to accessibility within the public sector which all member states of the EU
            was needed to turn into national law by September 23, 2018.
          </p>
          <p>
            The goal of the directive is to ensure that all public sector organizations are accessible for
            citizens with disabilities in the EU. The Directive in short:
          </p>

          <ul>
            <li>covers websites and apps of public sector organizations</li>
            <li>refers to specific standards to make websites and mobile apps more accessible</li>
            <li>requires a publication of an accessibility statement for each website and mobile app</li>
            <li>
              calls for a feedback mechanism for users to flag accessibility problems or to ask for the
              information contained in a non-accessible content
            </li>
            <li>
              expects regular monitoring of public sector websites and apps by the member states. The results
              of the reports have to be communicated to the Commission and made public for the first time by
              23 December 2021.
            </li>
          </ul>
          <p>
            Every member state in the EU must reach and translate a directive into their national legislation.
            However, they are free to add stricter requirements and as a consequence, the directive may be
            enforced in different manners in the EU member states.
          </p>
        </section>

        <section className={"card"}>
          <h2>In Sweden</h2>
          <p>
            Sweden realised the directive through Law (2018:1937) regarding accessibility for digital public
            service, which was applied the 1st of January, 2019.
          </p>
          <p>
            Includes the entire public sector, including government and communal companies that meet certain
            requirements. It affects web sites, apps and documents. And as far as it's possible, also content
            that is spread by third parties such as social media.
          </p>
          <p>
            The digital service must fulfil accessibility requirements listed in the{" "}
            <Link
              href={`https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf`}
            >
              <a>European Standard EN 301 549</a>
            </Link>
            :
          </p>
          <ul>
            <li>At least level A+AA in version 2.1 of WCAG.</li>
            <li>Additional requirements on top of WCAG.</li>
            <li>Offer the users a way to give feedback on issues and request for it to be fixed.</li>
            <li>
              Regularly publish an accessibility statement (<span lang="se">tillgänglighetsredogörelse</span>)
            </li>
          </ul>
          <p>
            If you don't fulfil the requirements and haven't fixed the issues that has been presented you will
            need to pay a fine.
          </p>
        </section>

        <section className={"card"}>
          <h2>When to comply</h2>

          <ul>
            <li>September 23, 2019 - all new public sector websites must conform</li>
            <li>September 23, 2020 - all public sector websites must conform</li>
            <li>June 23, 2021 - all mobile apps must conform</li>
            <li>
              Existing intranets and extranets published before the 23rd of September 2018 has no time limit,
              but must be done with the next comprehensive review.
            </li>
            <li>Documents, like PDF has the same date as the site or app they are part of.</li>
            <li>
              Older documents (published before the 23rd of September 2018) is excluded from the requirement
              unless it's a document needed to do administrative task, like a paper form.
            </li>
          </ul>
        </section>

        <section className={"card"}>
          <h2>The requirements</h2>
          <p>
            Chapter 9 in the European Standard EN 301 549 contains all WCAG 2.1 requirements on level A and
            AA. In annex A additional requirements that needs to be fulfilled are declared.
          </p>
          <h3>WCAG 2.1</h3>
          <p>
            The Web Content Accessibility Guidelines (WCAG) 2.1 is a global standard regarding accessibility
            that's been written by accessibility specialists, volunteers and disabled people at the World Wide
            Web Consortium, W3C.
          </p>
          <p>
            The 2.1 version was released the 5th of June 2018 and included 17 new criteria, which was focused
            on including more regarding mobile technology, low vision and cognitive disabilities.
          </p>
          <h3>Additional requirements</h3>
          <p>
            Compared to the WCAG requirements the ones mentioned in annex A, does not contain any guidance on
            how they shall be interpreted whereas the WCAG requirements are illustrated with examples to help
            understand them.
          </p>
          <p>
            The additional requirements covers things like biometrics, different means of operation, key
            repeat, simultaneous user actions, audio bandwidth for speech, real time text (RTT), video
            communication, user controls for captions and audio description, etc.
          </p>
          <h3>Accessibility statement</h3>
          <p>The accessibility statement shall include: </p>
          <ul>
            <li>How accessibility is fulfilled.</li>
            <li>Link to where it's possible to give feedback and comments.</li>
            <li>
              Link to the authority responsible for inspection, which in Sweden is{" "}
              <span lang="se">Myndigheten för Digital Förvaltning</span>, DIGG.
            </li>
          </ul>
          <p>
            Go check out{" "}
            <Link href="https://www.digg.se/om-oss/om-webbplatsen/tillganglighet">
              <a>DIGG's accessibility statement</a>
            </Link>{" "}
            as an example.
          </p>
        </section>

        <section className={"card zero-margin-bottom"}>
          <h2>What about the private sector?</h2>
          <p>
            The European Accessibility Act is a <abbr title="European Union">EU</abbr> Directive that became
            law in 2019. It complements the Web Accessibility Directive and applies to the private sector,
            thus impacting a much larger number of people.
          </p>
          <p>
            This directive aims to improve the trade between members of the{" "}
            <abbr title="European Union">EU</abbr> for accessible products and services, by removing country
            specific rules. It covers:
            <ul>
              <li>Smartphones, tablets and computers (hardware and software)</li>
              <li>ATMS, ticketing machines and check-in machines</li>
              <li>Televisions and TV programmes</li>
              <li>Banking services</li>
              <li>E-books</li>
              <li>E-commerce (online shopping websites and mobile applications)</li>
              <li>Services related to the transport sector (flights, bus, train, boat)</li>
            </ul>
          </p>
          <p>
            Member states have until 28 June 2022 to implement the Directive, meaning to turn it into national
            law. Three years later, 28 June 2025, most of the products and services covered by the law must
            meet the requirements.
          </p>
        </section>
      </div>

      <div className={"wrapper"}>
        <RelatedInformation
          relatedCardTypes={[
            RelatedCardType.USER,
            RelatedCardType.ROLE,
            RelatedCardType.TOOLS,
            RelatedCardType.CHECKLIST,
          ]}
        />
      </div>
    </>
  );
}
