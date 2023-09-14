import React from "react";

const styles = {
  div: {
    "& > a": {
      color: "primary",
    },
    "& > *": {
      fontSize: "18px",
      lineHeight: 1.4,
    },
    "& > div": {
      "& > p": {
        color: "#5f5f5f",
        fontSize: "18px",
        lineHeight: 1.5,
        "& > a": {
          color: "#015C57",
        },
      },
      "& > ul": {
        "& > li": { color: "#5f5f5f", fontSize: "16px", lineHeight: 2 },
      },
    },

    "& > h1": {
      textAlign: "center",
      color: "#038078 !important",
    },
    "& > h2": {
      textAlign: "center",
    },
    "& > h3": {
      textAlign: "center",
    },
    "& > h5": {
      mb: "500px",
      color: "#038078 !important",
    },
  },
};

function PrivacyPolicy() {
  return (
    <main id="main" class="snipcss-7URT9">
      <style>{`
          @import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap');
          @media all{
            * {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }

            #wrapper {
              background-color: #fff;
              position: relative;
            }

            body {
              margin:    0;
              color:   #777;
              scroll-behavior:   smooth;
              -webkit-font-smoothing:   antialiased;
              -moz-osx-font-smoothing:   grayscale;
              width:  100%;
              margin-left:  auto;
              margin-right:  auto;
              line-height: 1.6;
            }
          }

          body {
              font-family:   "Lato", sans-serif;
              font-weight:  400;
              --wp--preset--font-size--medium: 20px;
          }

          @media all{
            .full-width {
              width: 100% !important;
              max-width: 100% !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              display: block;
            }

            html {
              font-family:    sans-serif;
              -ms-text-size-adjust:    100%;
              -webkit-text-size-adjust:    100%;
              -webkit-box-sizing:   border-box;
              box-sizing:   border-box;
              background-attachment:   fixed;
              -webkit-tap-highlight-color:   transparent;
              overflow-x:  hidden;
              background-color: #5b5b5b;
            }
          }

          html {
              background-color: #000000;
          }

          :root {
              --wp--preset--font-size--normal:  16px;
          }

          @media all{
            main {
              display: block;
            }

            #main {
              background-color: #fff;
              position: relative;
            }

            *,:before,:after {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }

            .row {
              display: flex;
              display: -ms-flexbox;
              display: -webkit-box;
              width:  100%;
              margin-left:   auto;
              margin-right:   auto;
              max-width:  1080px;
              -js-display: flex;
              -webkit-box-orient: horizontal;
              -webkit-box-direction: normal;
              -ms-flex-flow: row wrap;
              flex-flow: row wrap;
            }

            .page-wrapper {
              padding-top: 30px;
              padding-bottom: 30px;
            }

            .container:after,.row:after,.clearfix:after,.clear:after {
              content: "";
              display: table;
              clear: both;
            }

            .col {
              position: relative;
              margin: 0;
              padding: 0 15px 30px;
              width: 100%;
            }
          }

          @media screen and (min-width: 850px){
            .large-12 {
              max-width: 100%;
              -ms-flex-preferred-size: 100%;
              flex-basis: 100%;
            }
          }

          @media all{
            header {
              display: block;
            }

            .text-center {
              text-align: center;
            }

            .entry-content {
              padding-top: 1.5em;
              padding-bottom: 1.5em;
            }

            h1 {
              color:  #555;
              width:  100%;
              margin-top:  0;
              margin-bottom:  .5em;
              text-rendering:  optimizeSpeed;
              font-size: 1.7em;
              line-height: 1.3;
            }
          }

          h1 {
              font-family:  "Lato", sans-serif;
              font-weight: 700;
          }

          @media all{
            .is-divider {
              height: 3px;
              display: block;
              background-color: rgba(0,0,0,.1);
              margin: 1em 0 1em;
              width: 100%;
              max-width: 30px;
            }

            .text-center > div ,.text-center .is-divider  {
              margin-left: auto;
              margin-right: auto;
            }

            p {
              margin-bottom:  1.3em;
              margin-top: 0;
            }
          }

          .has-medium-font-size {
              font-size: var(--wp--preset--font-size--medium) !important;
          }

          @media all{
            ul {
              list-style:   disc;
              margin-top:  0;
              padding:  0;
              margin-bottom: 1.3em;
            }
          }

          ul {
              box-sizing: border-box;
          }

          .has-normal-font-size {
              font-size: var(--wp--preset--font-size--normal);
          }

          @media all{
            p:empty {
              display: none;
            }

            strong {
              font-weight:  bolder;
            }

            li {
              margin-bottom: .6em;
            }

            .entry-content ul li  {
              margin-left: 1.3em;
            }

            a {
              background-color:   transparent;
              -ms-touch-action:  manipulation;
              touch-action:  manipulation;
              color: #334862;
              text-decoration: none;
            }
          }

          a {
              color: #26c39f;
          }

          @media all{
            a:active,a:hover {
              outline-width: 0;
            }

            a:hover {
              color: #000;
            }
          }

          a:hover {
              color: #111111;
          }


          /* These were inline style tags. Uses id+class to override almost everything */
          #style-HFbmQ.style-HFbmQ {
             font-size:18px;
          }
          #style-aVkPc.style-aVkPc {
             font-size:18px;
          }
          #style-zk3Lg.style-zk3Lg {
             font-size:18px;
          }
          #style-5E7z1.style-5E7z1 {
             font-size:18px;
          }
`}</style>
      <div class="row page-wrapper">
        <div id="content" class="large-12 col" role="main">
          <header class="entry-header text-center">
            <h1 class="entry-title">Privacy Policy</h1>
            <div class="is-divider medium"></div>
          </header>
          <div class="entry-content">
            <p>
              Last updated: 25
              <sup>th</sup>
              -June-2023.
            </p>
            <p class="has-medium-font-size">
              <strong>Chapter 1: Legal Note</strong>
            </p>
            <p>
              DoctorAI is providing services, and products to all its users
              under “Terms and conditions” and this “Privacy policy” discussed
              below.
            </p>
            <p>
              We also recommend you to read our “terms and conditions of
              service”; terms and stipulations by which you are bound before you
              use DoctorAI’s platforms, products, and services.
            </p>
            <p>
              This privacy policy relates to all of DoctorAi’s services and
              products.
            </p>
            <p class="has-medium-font-size">
              <strong>Chapter 2: Data collected.</strong>
            </p>
            <p>
              DoctorAI will collect a few data in order to run, adapt, and
              enhance its platforms; this happens when you install the app on
              your device using mobile stores (Apple store and Playstore) or
              when you are visiting our website at www.doctoraicompany.com.
            </p>
            <p>
              Depending on your device (IOS or Android), you may restrict us to
              access some data, but notice that some permissions will be
              required as condicio sine qua non in order to use our platform
              through services and products such as your login credentials.
            </p>
            <p>
              Note that to explore all features available through the app, you
              will need to grant all the required permissions thus allowing us
              to collect data.
            </p>
            <p id="style-HFbmQ" class="style-HFbmQ">
              <strong>User information</strong>
            </p>
            <ul class="has-normal-font-size">
              <li>
                <strong>Your date of birth:</strong>
                DoctorAI will require your birth date as its services and
                products are restricted to all those under the age of 16 (an age
                which may vary and dependent on the user’s country of residency
                by the definition of a “pediatric patient”), you will not access
                services and products if you don’t provide your birth date. Read
                more on “Terms and Conditions of use”, Chapter 4: Age
                restriction.
              </li>
            </ul>
            <ul>
              <li>
                <strong>
                  <strong>Your gender:</strong>
                </strong>
                DoctorAI offers a diversified range of products and services
                some tailored specifically to the male or the female gender, you
                will need to provide your gender to be offered a seamless
                navigation through services and products, not providing your
                gender may not restrict you from using DoctoAI’s application but
                consider that some services and products are gender-specific
                <strong>.</strong>
              </li>
            </ul>
            <p></p>
            <ul>
              <li>
                <strong>Your account</strong>: In order to start using
                DoctorAI’s services or products, you must provide elementary
                information such as your current country of residency, your
                email, and a profile picture all for identification. Please note
                that if you don’t share this information, you won’t be able to
                create an account through DoctorAI.
              </li>
            </ul>
            <p></p>
            <ul>
              <li>
                <strong>Your payment data:</strong>
                When using DoctorAI’s premium features, you will need to provide
                your payment card. DoctorAI will collect payment card
                information in order to secure payments made through the
                platform, note information related to your payment card is not
                stored on our servers.
              </li>
            </ul>
            <p></p>
            <ul>
              <li>
                <strong>Cookies:</strong>
                As DoctorAI provides also web-based services and products, we
                are using cookies to ensure a seamless experience is given to
                all our users. Such cookies on our web-based services help us
                understand how you interact with DoctorAI, thus DoctorAI will
                customize your interactions and provide a personalized and
                convenient experience on your next visit.
              </li>
            </ul>
            <p></p>
            <p></p>
            <p class="has-medium-font-size">
              <strong>Chapter 3: Data not collected.</strong>
            </p>
            <p>
              DoctorAI is strictly bound to respecting, preserving, and
              protecting its users’ privacy by avoiding collecting, and tracking
              users’ data through the interactions with its services and
              products as mentioned below:
            </p>
            <p id="style-aVkPc" class="style-aVkPc">
              <strong>Your interactions:</strong>
            </p>
            <ul>
              <li>
                <strong>Medical notes:</strong>
                With DoctorAI you may record your notes or recommendation given
                by your physician, such notes are conserved on your device, they
                are not stored in our servers.
              </li>
            </ul>
            <ul>
              <li>
                <strong>Blood pressure notes:</strong>
                DoctorAI allows you to record your blood pressure daily, and
                statistical graphics are immediately made; you may share these
                recordings with your doctor. DoctorAI doesn’t collect your blood
                pressure notes. Please note that they are conserved on your
                device, and not stored in our servers.
              </li>
            </ul>
            <ul>
              <li>
                <strong>Medication reminder:</strong>
                DoctorAi has a section where you will note all your current
                medications and the time you need to take them, the medication
                reminder will pop up as a notification on your device, the
                notification which may vary from vibration to tune. DoctorAI
                will never access the list of your medications, DoctorAi will
                never store your list of medications on its servers, it is
                conserved on your device.
              </li>
            </ul>
            <ul>
              <li>
                <strong>Screening tools:</strong>
                DoctorAI uses a series of screening tools for diseases, tools
                which work by asking you a few closed-ended questions; your
                choices and results are surveyed by these tools and a response
                is given to you with a personalized recommendation. In order to
                be surveyed by these tools, you will need to provide information
                by answering the questions, information which is not collected
                nor conserved by the tool.
              </li>
            </ul>
            <ul>
              <li>
                <strong>Diagnostic tools:</strong>
                DoctorAi uses another series of screening and diagnostic tools
                called Artificial intelligence models e.g.: Teleradiology,
                Telemammography, Telepathology, and Tele-auscultation. They need
                to access images and sounds stored on your device in order to
                function properly and provide a diagnostic conclusion to the
                related problems. Note that we don’t collect such images and
                sounds, they are only processed by the AI models online to
                provide answer and not stored on our servers.
              </li>
            </ul>
            <ul>
              <li>
                <strong>Assistant:</strong>
                DoctorAI provides an Assistant tool to answer your medical
                related questions. Your messages are not collected nor even
                stored on our servers, They stored local in your device.
              </li>
            </ul>
            <p></p>
            <p class="has-medium-font-size">
              <strong>Chapter 4: Third-party service data.</strong>
            </p>
            <p id="style-zk3Lg" class="style-zk3Lg">
              <strong>-Service providers:</strong>
            </p>
            <p>
              DoctorAI works with third-party service providers as payment
              channels, DoctorAi only collects payment card info as stated above
              in the “Data collected” section.
            </p>
            <p>
              By collecting payment card info, DoctorAi is ensuring that the
              payment process is secure, not misused, and knowing the right user
              to which we provide payment services.
            </p>
            <p>
              DoctorAI encourages its third-party service providers to ensure
              that such information is accurate and the modus operandi is
              conformed to the applicable law.
            </p>
            <p class="has-medium-font-size">
              <strong>
                Chapter 5: Changes of Executive &amp; Acquisition.
              </strong>
            </p>
            <p>
              In any context that drives DoctorAi to change its executive
              through acquisition, merging, or bankruptcy; we will take the
              responsibility to inform you about these changes and the
              information you have shared with DoctorAI in the contexts said
              early will be transferred to the new executive.
            </p>
            <p class="has-medium-font-size">
              <strong>Chapter 6: Updates &amp; Changes.</strong>
            </p>
            <p>
              As DoctorAI grows and expands, these stipulations may be prone to
              updates or modifications, we will take the responsibility to
              notify widely our users in these contexts.
            </p>
            <p>
              We do encourage our users to review when possible our privacy
              policies, the last date of modifications will be noted at the top
              of the page “Last updated + Date”.
            </p>
            <p class="has-medium-font-size">
              <strong>Chapter 7: Customer support &amp; feedback.</strong>
            </p>
            <p>
              For any inquiry, you will contact us via
              <a href="mailto:support@doctorAI.com">suppor</a>
              <a
                href="mailto:support@doctorAI.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                t@doctoraicompany.com
              </a>
              . we recommend you to provide us your names, your query related or
              not to the DoctorAI, and contact info by which we will reply to
              you.
            </p>
            <p id="style-5E7z1" class="style-5E7z1">
              <strong>Contact us:</strong>
            </p>
            <p>DoctorAI</p>
            <p>
              <a href="mailto:info@doctorAI.com">support@doctorcompany.com</a>
            </p>
            <p>
              <a
                href="https://doctoraicompany.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                www.doctoraicompany.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
