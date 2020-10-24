import Head from "next/head";
import Link from "next/link";

export default function ReportPage() {
  return (
    <>
      <Head>
        <title>Daresay Accessibility Checklist - Accessibility report</title>
      </Head>

      <div className={"colored"}>
        <section className={"wrapper"}>
          <h1>Accessibility report</h1>
          <p className={"ingress"}>Lorem ipsum.</p>
          <p className={"ingress"}>Dolor set.</p>
        </section>
      </div>
    </>
  );
}
