import Head from "next/head";
import Link from "next/link";
import { ColorTheme, RelatedCard } from "../../components/general/RelatedCard/RelatedCard";

export default function AboutUserPage() {
  return (
    <>
      <Head>
        <title>Daresay Accessibility Checklist - Understanding the user</title>
      </Head>

      <div className={"colored-bg2 ingress"}>
        <section className={"wrapper"}>
          <div>
            <h1>Understanding the user</h1>
            <p>
              Accessibility is not about laws and requirements but about people. By making things accessible
              you make the experience open to all, independent of what their situation is.
            </p>
            <p>
              When thinking about accessibility it's normal to picture those with permanent disabilities such
              as loss of limbs or visually impaired, but in truth, everyone benefits from en accessible
              product or serivce.
            </p>
          </div>
        </section>
      </div>

      <div className={"wrapper zero-padding-bottom color2"}>
        <section className={"card"}>
          <h2>Consider different human abilities</h2>
          <p>
            Start off by considering the different kinds of human abilities, this gives a basic understanding
            of the what kinds of limitations that can affect people. For instance:
          </p>
          <ul>
            <li>Sight – Limitations: blindness, low-vision, color blind</li>
            <li>Hearing – Limitations: deaf and hard of hearing</li>
            <li>Motor skills – Limitations: not having the use of certain limbs and paralysis</li>
            <li>Speech – Limitations: people who are not able to speak or who have a speech impediment</li>
            <li>
              Cognitive – Limitations: dyslexia, autism, ADHD. These problems include difficulty with
              understanding content, remembering how to complete tasks, and confusion caused by inconsistent
              or non-traditional web page layouts.
            </li>
          </ul>
        </section>

        <section className={"card"}>
          <h2>Limitations aren't always permanent</h2>
          <p>
            Everyone will at some point in their life experience limitations regarding their abilities. When
            taking about disabilities you usually think of permanent ones but they can just as easily be
            temporary or situational. By making your product or service accessibility you will help out many
            people in different stages in their lives.
          </p>
          <ul>
            <li>Permanent - those who have a disability such as loss of limb, sight, hearing or speech.</li>
            <li>
              Temporary - when a person has short-term injury or context affects the way they interact for a
              short time. This includes wearing a cast or trying to browse in bright light where reflections
              can impact readability.
            </li>
            <li>
              Situational - when people move through different environments. For example in a large crowd
              people can’t hear well, if you’re a new parent many tasks need to be completed one-handed or an
              overwhelming day can cause sensory overload.
            </li>
          </ul>
          <img
            src="/images/ms-persona-spectrum.png"
            alt="Illustration: A chart of permanent, temporary, and situational disabilities. For touch, a person could have one arm, an arm injury, or be a new parent holding an infant. For sight, a person could be blind, have cataracts, or be a distracted driver. For hearing, the person might be deaf, have an ear infection, or be a bartender in a loud bar. When speaking, a person might be non-verbal, have laryngitis, or speak with a heavy accent."
          />
        </section>

        <section className={"card"}>
          <h2>Talk to users</h2>
          <p>
            The best way to get a deeper understanding regarding certain disabilities is of course to talk to
            people affected by it and see them trying to use your product or service. So make sure to invite
            them. No experience is more humbling.
          </p>
        </section>

        <section className={"card"}>
          <h2>Learn through online videos</h2>
          <p>
            Sometimes there might not be time to invite and talk to all those people you would need to to get
            an understanding of their daily lives and problems they have with your product or serivce.
          </p>
          <p>To still get an understanding about their struggles you can check out videos online</p>
          <ul className={"zero-margin-bottom"}>
            <li>
              <Link href="https://www.youtube.com/watch?v=TiP7aantnvE">
                <a>Molly Burke using technology</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?v=B3PfVK_fXiY&feature=youtu.be&t=155">
                <a>Molly Burke trying to shop online</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?time_continue=170&v=WveJjhwaEDI&feature=emb_logo">
                <a>A panel of people talking about their different disabilities</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?v=cSSgndQ5mVs">
                <a>A boy celebral palsry showing how he uses his computer</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?v=gK4R0A20sOw&list=PL9138ACBCD69DF92A">
                <a>A boy celebral palsry showing how he uses his computer 2</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?v=g95TO20hnmo&list=PLMe9zDtTPTVe62Gb6b9Dkk_IPBUTGQHoD&index=3&t=0s">
                <a>A girl celebral palsry showing how she uses her computer</a>
              </Link>
            </li>
            <li className={"zero-margin-bottom"}>
              <Link href="https://www.youtube.com/watch?v=cL5tHylZKBs&list=PLMe9zDtTPTVe62Gb6b9Dkk_IPBUTGQHoD&index=8">
                <a>11 year boy with dyslexia</a>
              </Link>
            </li>
          </ul>
        </section>

        <section className={"card"}>
          <h2>Learn by using their tools</h2>
          <p>
            There are many different accessibility tools out there. Try them out them to get a better
            understanding how navigating and using your product or service is like. Also use them to test your
            product or service to make sure it's actually usable by everyone.
          </p>
          <ul>
            <li>
              Try out navigating the user interface by using only your keyboard. The basics of keyboard
              testing is simple — make sure you can navigate to every interactive control using the Tab key
              and then use enter, (sometimes spacebar) to select an element and the arrow keys for in control
              navigation. If you're interested you can{" "}
              <Link href="https://webaim.org/techniques/keyboard/">
                <a>learn more about keyboard navigation</a>
              </Link>
            </li>
            <li>
              Try out navigating the user interface with a screen reader. Both Android and iOS phones comes
              with their own build-in screen readers - TalkBack and VoiceOver - that you find in the settings
              menu. Mac computers also has a build-in screen reader.
            </li>
            <li>
              Some users are using a magnifying glass to zoom in on different sections of the user interface,
              which has an affect on how you should layout your design. Get a better understanding by watching
              this{" "}
              <Link href="https://www.youtube.com/watch?v=S1j6CYT3kWA&feature=youtu.be">
                <a>video on how zooming affect layout choices</a>
              </Link>
              . Windows 10, mac OS, Android and iOS comes with magnifying tools that you can try out.
            </li>
          </ul>
        </section>

        <section className={"card"}>
          <h2>Try out some simulations</h2>
          <p>
            There are also simulators and tools you can try out that can give small insights on how it is to
            use an UI with different impairments.
          </p>
          <ul>
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

        <section className={"card zero-margin-bottom"}>
          <h2>Statistics</h2>
          <p>Different types of disabilities and numbers, for Sweden:</p>
          <ul>
            <li>1.5 million state that they are suffering from mental illness</li>
            <li>600 000 with dyslexia</li>
            <li>500 000 children are calculated to have ADHD</li>
            <li>250 000 adults are calculated to have ADHD</li>
            <li>120 000 with impaired vision</li>
            <li>50 000 with an intellectual disability</li>
            <li>30 000 with severe visual impairments</li>
            <li>30 000 are deaf or have impaired hearing</li>
            <li>515 000 with motor impairments</li>
            <li>25% have reading and writing disabilities</li>
            <li>Many suffering from rheumatism, but many are never diagnosed</li>
            <li>Not to mention: many in society are not particular computer savvy or interested.</li>
          </ul>
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
            icon="🎖"
            linkText="Your role and responsibility"
            url="/roles-and-responsibility"
            colorTheme={ColorTheme.COLOR3}
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
