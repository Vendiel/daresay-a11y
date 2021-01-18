import Head from "next/head";
import Link from "next/link";
import { ColorTheme, RelatedCard } from "../../components/general/RelatedCard/RelatedCard";
import {
  RelatedCardType,
  RelatedInformation,
} from "../../components/general/RelatedInformation/RelatedInformation";

export default function ToolsPage() {
  return (
    <>
      <Head>
        <title>Daresay Accessibility Checklist - Helpful tools</title>
      </Head>

      <div className={"colored-bg4 ingress"}>
        <section className={"wrapper"}>
          <div>
            <h1>Helpful tools</h1>
            <p>
              There are many different kinds of accessibility tools that can help you out when creating a
              digital product or service. Here we've added a few tips here but since new tools always enters
              the market we recommend that you take a look around.
            </p>
          </div>
        </section>
      </div>

      <div className={"wrapper zero-padding-bottom color4"}>
        <section className={"card"}>
          <h2>Screen readers</h2>
          <p>
            Navigate your product with a screen reader to ensure that even if the user can't see your
            interface they still get an equally understandable experience with a screen reader. There are
            different screen readers on the market - some are free and some are not - and they differ when it
            comes to functionality and support.
          </p>
          <p>
            If you are building an Android or iOS app we recommend you to use Androids and iOS own build-in
            screen readers - TalkBack and VoiceOver. You find them in the settings menu. Please note that it
            might take some time getting use to.
          </p>
          <p>
            If you need to test on a computer you can try out VoiceOver on Mac OSX or NVDA - NonVisual Desktop
            Access . If you're building a website and you can access it on your phone, you can of course use
            TalkBack or VoiceOver on your Android or iOS phone too.
          </p>
        </section>
        <section className={"card"}>
          <h2>Tabbing through the UI</h2>
          <p>
            Always try out navigating your product using only your keyboard. The basics of keyboard testing is
            simple — make sure you can navigate to every interactive control using the Tab key and then use
            enter, (sometimes spacebar) to select an element and the arrow keys for in control navigation. If
            you're interested you can learn more about{" "}
            <Link href="https://webaim.org/techniques/keyboard/">
              <a>keyboard navigation</a>
            </Link>
            .
          </p>
          <p>
            You can also use{" "}
            <Link href="https://accessibilityinsights.io/downloads/">
              <a>Accessibility insights for web</a>
            </Link>{" "}
            to get a visual indication and order of your tab order (found under their Ad hoc tools).
          </p>
          <p>
            While testing this out, make sure that every interactive control that gets focus has a visble
            focus state that fulfills contrast requirements.
          </p>
        </section>
        <section className={"card"}>
          <h2>Contrast checking</h2>
          <p>
            As a visual designer art director, product designer, UI designer it's important to make sure to
            fulfill the needed contrast for texts and different elements. To do this you can use for instance{" "}
            <Link href="https://developer.paciellogroup.com/resources/contrastanalyser/">
              <a>Color Contrast Analyzer</a>
            </Link>
            . It works for Windows and Mac OSX so you're not bound to the browser or any specific application.
          </p>
          <p>
            If you use Sketch, Figma or Adobe XD when doing your design you can use the{" "}
            <Link href="https://www.getstark.co/">
              <a> Stark plugin</a>
            </Link>{" "}
            if you prefer.
          </p>
          <p>
            You can also find contrast checkers online if you can't or feel like installing a software or
            plugin. There are many examples out there so just find your favorite.
          </p>
        </section>

        <section className={"card"}>
          <h2>Layout</h2>
          <p>
            When developing and testing it's important to check that you layout has been implemented in a
            manner that will make sense for everyone.
          </p>
          <p>
            With{" "}
            <Link href="https://accessibilityinsights.io/downloads/">
              <a>Accessibility Insights for Web</a>
            </Link>{" "}
            it is possible to get visual aid to see that the correct levels of headers (h1, h2, h3 etc) is set
            and that you've added all the appropriate landmarks (found under their Ad hoc tools).
          </p>
        </section>

        <section className={"card"}>
          <h2>Simulators</h2>
          <p>
            There are simulators and tools out there that you can use to get a better understanding on how
            people will experience your product, especially when it comes to visual impairments and limited
            motor skills. These tools might not be something you use on a daily basis when designing,
            implementing or testing our your products but they can be helpful to use when making decision
            regarding layout, color and size.
          </p>
          <p>Below are some examples listed.</p>
          <ul>
            <li>
              Simulate dyslexia, color blindness, blurry vision, loss of peripheral or central vision with{" "}
              <Link href="https://chrome.google.com/webstore/detail/silktide-website-accessib/okcpiimdfkpkjcbihbmhppldhiebhhaf/related">
                <a>Silktide - website accessibility simulator</a>
              </Link>
              . This is a free extension to Chrome.
            </li>
            <li>
              Simulate color blindness with{" "}
              <Link href="https://colororacle.org/">
                <a>Color Oracle</a>
              </Link>
            </li>
            <li>
              Simulate color blindness, far-sightedness, Parkinsons or dyslexia with{" "}
              <Link href="https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla">
                <a>Web Disability Simulator</a>
              </Link>
              . This is a free extensions for Chrome.
            </li>
            <li>
              Simulate different kinds of affects on vision, like color deficiency, contrast loss, blurry
              vision, blocked visual field, etc, with{" "}
              <Link href="https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl">
                <a>No coffee Vision Simulator</a>
              </Link>
              . This is a free extensions for Chrome.
            </li>
            <li>
              Simulate different kinds of color deficiencies with{" "}
              <Link href="https://chrome.google.com/webstore/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg">
                <a>Colorblindly</a>
              </Link>
              . This is a free extensions for Chrome.
            </li>
            <li>
              Simulate different kinds of things like color deficiencies, blurry vision, dyslexia, tremors,
              partial vision, etc with{" "}
              <Link href="https://www.funkify.org/">
                <a>Funkify</a>
              </Link>
              . This is an extensions for Chrome, you can test out a limited set of options for free but you
              need to pay to get the whole set.
            </li>
          </ul>
        </section>

        <section className={"card"}>
          <h2>Magnifying glass</h2>
          <p>
            Some people with limited vision use magnifying glass to zoom in on different parts of the screen.
            This can have implications on how you for instance should layout different elements so users can
            find them more easily when using the magnifying glass.
          </p>
          <p>
            Windows 10, mac OS, Android and iOS comes with magnifying tools that you can try out. You find
            them in the settings menu.
          </p>
        </section>

        <section className={"card zero-margin-bottom"}>
          <h2>Automated tools</h2>
          <p>
            If you're building a web site or application there are some automated tools that can be used that
            will check your site and flag if they find any accessibility issues. Please note that these kinds
            of tools does not cover every aspect of accessibility. They are however a good option to make sure
            you haven't made any basic accessibility mistakes in your code.
          </p>
          <p>Below are some examples.</p>
          <ul>
            <li>
              <Link href="https://developers.google.com/web/tools/lighthouse/">
                <a>Google Lighthouse</a>
              </Link>
              - can be used either in the Chrome browser (in DevTools) or as an Chrome extension. Also
              possible to run automatically in{" "}
              <Link href="https://github.com/GoogleChrome/lighthouse-ci">
                <a>continous integration</a>
              </Link>{" "}
              and fail your builds if score drops below certain level.
            </li>

            <li>
              <Link href="https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US">
                <a>axe - Web Accessibility Testing</a>
              </Link>{" "}
              - can be used as a Chrome extension.
            </li>
            <li>
              <Link href="https://wave.webaim.org/">
                <a>WAVE Web Accessibility Tool</a>
              </Link>{" "}
              - a site where you can write the URL of your own site to make an audit. Can also be added as an
              extension to Chrome and Firefox.
            </li>
            <li>
              <Link href="https://accessibilityinsights.io/downloads/">
                <a>Accessibility Insights for Web</a>
              </Link>{" "}
              - can be used as an extension in Chrome, Edge or Android.
            </li>
            <li>
              <Link href="https://www.npmjs.com/package/cypress-axe">
                <a>Cypress-axe</a>
              </Link>{" "}
              - A plugin for the Cypress, a Javascript testing framework, that runs accessibility checks at
              any given moment, and fails tests if it finds any issues.
            </li>
            <li>
              <Link href="https://validator.w3.org/">
                <a>W3 validator</a>
              </Link>{" "}
              - validates the syntax of your code to make sure it's correct so assistive technologies can
              present the content correctly to the user.
            </li>
          </ul>
          <p>
            There are also linters that can be used to help you write more accessible code. Like this{" "}
            <Link href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y">
              <a>eslint</a>
            </Link>{" "}
            that checks accessibility rules for javascript elements.
          </p>
          <p>
            The number of tools are always growing so we recommend that you do some research from time to
            time.
          </p>
        </section>
      </div>

      <div className={"wrapper"}>
        <RelatedInformation
          relatedCardTypes={[
            RelatedCardType.LAW,
            RelatedCardType.USER,
            RelatedCardType.ROLE,
            RelatedCardType.CHECKLIST,
          ]}
        />
      </div>
    </>
  );
}
