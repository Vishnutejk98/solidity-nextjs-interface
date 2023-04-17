import Typewriter from "typewriter-effect";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>Developer's Note</title>
        <meta name="description" content="Developer's Note" />
      </Head>
      <div className="container">
        <h1 className="display-4">Hi!</h1>
        <p class="lead">
          <blockquote class="blockquote">
            <p class="mb-0">
              As developers who have built the interface and smart contracts for
              blockchain technology, we are excited to introduce you to the
              potential of this revolutionary technology. Blockchain has the
              ability to transform the way we conduct transactions and
              communicate in the digital world. Our mission is to make
              blockchain technology accessible to everyone, regardless of their
              background or level of expertise. We understand that learning
              about blockchain can be challenging, which is why we have
              developed custom interfaces that make it easier for anyone to
              interact with smart contracts. Our goal is to help you understand
              how blockchain technology works and how it can be used to create
              innovative solutions. We believe that education is the key to
              unlocking the potential of blockchain technology, and we are
              committed to sharing our knowledge with you. Whether you are a
              student, a developer, a business owner, or anyone interested in
              blockchain technology, we encourage you to explore its
              possibilities. We hope to inspire you to use blockchain to create
              new opportunities and improve existing systems. <br />
              Thank you for your interest in blockchain technology, and we look
              forward to working with you to build a better future.
            </p>
            <br />
            <footer class="blockquote-footer">
              <br />
              Sincerely,
              <br />
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(" The Blockchain Development Team - V2Soft!")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(2500)
                    .start();
                }}
              />
            </footer>
          </blockquote>
        </p>
      </div>
    </>
  );
}
export default About;
