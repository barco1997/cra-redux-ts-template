/* eslint-disable no-useless-computed-key */
const localisedText = {
  ["en-GB"]: {
    pages: {
      about: "About",
      projects: "Projects",
      partners: "Partners",
      news: "News",
      contact: "Contact",
    },
    mainPage: {
      title: "Implement your ideas into reality",
      buttonText: "Learn more",
    },
    about: {
      title: "What we do",
      services: [
        {
          title: "Hardware/IoT",
          description:
            "We design, develop, manufacture, and perfect custom bleeding-edge IoT hardware tailored to your needs.",
          buttonText: "Find out more",
        },
        {
          title: "Cloud Systems                         & DevOps",
          description:
            "We support your digital transformation and imbue your cloud infrastructure with flexibility and data safety.",
          buttonText: "Find out more",
        },
        {
          title: "Web Platforms for Management and Analytics",
          description:
            "We enable actionable insights in your data with customised dashboards and analytics.",
          buttonText: "Find out more",
        },
      ],
    },
    projects: {
      title: "Projects",
      projectsList: [
        {
          link: "https://tele2iot.com/",
          title: "5G IoT Gateway",

          buttonText: "More",
          description: [
            "The Intelliventory IoT Gateway is a 5G-capable Edge Computing device for industrial data collection and control applications designed for the modern era. It can be used whenever the customer needs to process data directly at the edge, reduce latency, and relieve connectivity networks.",
            "The gateway boasts a multi-core ARM64 processor and provides full Linux compatibility for easy deployment, integration, and maintenance, and is designed and tested to be a tough industry-grade product for use in mission-critical applications requiring operating temperatures between -40°C and +85°C.",
            "In addition to 5G connectivity, it also comes with other modern connectivity standards such as WiFi 6 (802.11ax), Bluetooth Low Energy (BLE) 5.1, LTE, Narrowband-IoT (NB-IoT), LTE Cat. M1, Global Positional System (GPS/GNSS), and can fallback to legacy networks including EGPRS. Physical connectivity such as Gigabit Ethernet, USB 3.0, RS232, RS485, and HDMI are also available.",
            "Deploy your applications our gateway as fast as possible with support for Docker-based deployment platforms such as EdgeXFoundry and Azure IoT Edge.",
            "The Intelliventory 5G IoT Gateway is the first 5G gateway to be proudly designed, manufactured, assembled, and tested in Poland.",
          ],
        },
        {
          link: "http://verifis.pl/",
          title: "Smart Retail",

          buttonText: "More",
          description: [
            "Smart Retail solution, implemented for retail stores and FMCG chains, allows for real-time monitoring of the amount of products on the shelves. The system notifies the user when runnung low on stock, let’s automaticly place the order to top up preventively, to never have empty shelves.",
            "Smart cabinets are equiped with specialised sensors for accurate mesurments, and a low-power NB-IoT-capable gateway, that allows for edge computing and transfer of data.",
            "The main goal is to improve logistics and sales efficiencies of fast-moving products. First there is the sales front – monitoring goods on shop floors to understood how they move in real time. Then, the building blocks we use allow us to not just monitor them, but to also gain insight on the amount of goods that should be produced or ordered. So, the information at the sales-end impacts the whole value chain, including the production process.",
            "The Intelliventory Smart Retail platform provides data for everything from stock levels to viability of perishable goods. The data is collected by sensors on the shelves. Analytics helps user build a picture of how the goods are moving and assists in analysing trends, whether it’s on the shop floor or at the warehouse.",
            "Intelliventory is a fully plug-and-play solution that can be shipped globally, and the system can be adapted to any locale and language.",
          ],
        },
        {
          link: "https://www.nid.design/",
          title: "Smart Manhole",

          buttonText: "More",
          description: [
            "We are working on a project for NID to equipt manhole covers with a variety of sensors to enable preventative maintanance and minimize the need for physical attention. The system will also include mechanical equipment to perform remote maintenance and management. This solution allows our client to drasticly decrease costs of operation.",
            `Here’s the challenge that this partnership is solving:
      “Historically, manhole covers have been made of cast iron. But it is not possible to send a signal through a cast iron cover. Therefore, we investigate the possibilities of building in level meters in composite covers. This will provide suppliers with a proactive solution, where they do not have to wait for areas to flood. By using ultrasound and sensor technology as well as an app that sends push messages at elevated water levels, we will be able to secure a sustainable solution that will save the society large amounts of money in flood damage”.`,
          ],
        },
        {
          link: "https://www.valmont.com/",
          title: "Clasp",

          buttonText: "More",
          description: [
            "Clasp is a project we are implementing for Valmont to increase logistics efficiency and optimise production. The aim is to help employees easily navigate the campus site and find the required inventory or assets as fast as possible. Functionality includes localisation of assets, equipment, and  people, and communication between them, to ensure fast and easy operations.",
            "In addition, the highly accurate and battery-operated beacons utilise technologies that promise localisation accuracy that can be as good as 1 metre and boast long battery life. Moreover, beacons are equipped with NFC for easy asset tagging and identification, and a button that can be customised by the customer for contexual operations (for instance, based on location). ",
            "The vision of the solution is to combine capabilities of short range wireless beacons and sensors with long range cellular technologies (LTE-M, NB-IoT and even 5G sub-6GHz).",
          ],
        },
        {
          link: "https://fpspoznan.pl/en/",
          title: "Digital Twin",

          buttonText: "More",
          description: [
            "We are working on creation of a Digital Twin of a train for FPS, train production company. Digital Twin is an online representation of a train illustraiting real-time data collected from the train. Such an approach allows for an easy navigation of a big amount of data, and allows the operator effectively see the state of the train at each given moment.",
            "Digital Twin covers the entire lifecycle of an asset givin the real connection to an object and a process. Digital Twin is a link that connects physical and digital words. Data gathered from varios sencors represents a real-time status, working condition and position of an object. The components are connected to a cloud-based system that receives and processes all the data the sensors monitor. This input is analyzed against business and other contextual data.",
          ],
        },
        {
          link: "http://spin-robotics.com/",
          title: "5G Ai BOX",

          buttonText: "More",
          description: [
            "The IIoT (Industrial IoT) AI BOX is an innovative and customised device with dedicated high performance MPU for edge computing of machine learning algorithms. The device has an industrial interlink with the COBOT (Cooperative Robots) and also connectivity capabilities to send data over cellular technologies: LTE-CA and/or 5G sub-6GHz.",
            "Edge Computing enables to perform pre-processing of raw data pulled from robots and its’ sensors. This allows AI algorithms to react almost instantly on security threats and operational malfunctions. This approach tremendously increases safety for the operators and the machine itself. Moreover, real-time reaction to conditions and reparametrisation of machine’s settings increases productivity and also lowers costs of usage. Selecting 5G sub-6GHz technology for the backhaul link to the cloud application is leveraging the low latency and high bandwidth nature of the communication. Thanks to that online backend system that receives data in quasi-real-time, heavy data analytics algorithms for advanced processing is also included",
          ],
        },
      ],
    },
    partners: {
      title: "We proudly work with",
      desire: "and look forward to work with you",
    },
    boldIdea: {
      title: ["You have ", "a bold idea ", "We turn it into reality"],
      description: [
        "In today’s fast-paced environment, especially in the world of the Internet of Things, it’s essential to go with the ebb and flow of the ever-changing industry, while still defining the status quo.",
        "We are a team with a passion for the Internet of Things. We possess the drive to recognise the thrill of the new era and have what’s needed to connect all the dots.",
      ],
    },
    news: {
      title: "News",
      description: [
        "Zarząd spółki CTHINGS.CO sp. z o.o. z siedzibą w Siedlcach (dalej jako „Spółka”) informuje o uzgodnieniu w dniu 20 kwietnia 2020 r. planu połączenia Spółki (jako spółki przejmującej) ze spółką: 1 CTHINGS.CO SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ SPÓŁKA KOMANDYTOWA z siedzibą w Siedlcach (dalej jako „Spółka przejmowana”);",
        "Połączenie nastąpi poprzez przejęcie Spółek Przejmowanych przez Spółkę Przejmującą, tj. przez przeniesienie całego majątku Spółek Przejmowanych na Spółkę Przejmującą. W wyniku połączenia Spółka Przejmująca wstąpi z dniem połączenia we wszystkie prawa i obowiązki Spółek Przejmowanych, w tym przejmie ich aktywa i pasywa.",
      ],
      buttonText: ["sp. z o.o.", "Sp. komandytowa"],
    },
    featuredIn: {
      title: "featured in",
      articles: [
        {
          title: "Rewolucja w handlu",
          source: "Forbes.pl",
          date: "July 19, 2020",
          link:
            "https://content.cthings.co/static/docs/intelliventory.rewolucja.w.handlu.pdf",
        },
        {
          title:
            "Realdania Announces 5 New Technology Partnerships to Disrupt the Construction",
          source: "prnewswire.co.uk",
          date: "July 10, 2020",
          link:
            "https://www.prnewswire.co.uk/news-releases/realdania-announces-5-new-technology-partnerships-to-disrupt-the-construction-industry-816906169.html",
        },
        {
          title: "Intelliventory: Keeping Track of Your Entire Supply Chain",
          source: "tele2iot.com",
          date: "June 12, 2020",
          link:
            "https://tele2iot.com/case/intelliventory-keeping-track-of-your-entire-supply-chain/?fbclid=IwAR1xZ7krqS2WibvBsFGh20pHC-MY5wZkqWdPRuFQdf-Nd6rszebpXX83ec4",
        },
      ],
    },
    contact: {
      title: "Get in touch",
      desire: "Shoot us a message",
      input_1: {
        placeholder: "Company name",
      },
      input_2: {
        placeholder: "Website",
      },
      input_3: {
        placeholder: "First name",
      },
      input_4: {
        placeholder: "Last name",
      },
      input_5: {
        placeholder: "Email*",
      },
      input_6: {
        placeholder: "Massage",
      },
      checkbox_1: `I agree to receive communications from cthings.co sp. z o.o. to
      discuss further cooperation.`,
      checkbox_2: [
        `I agree to allow cthings.co sp. z o.o. to store and process my
      personal data according to `,
        ".*",
      ],
      privacyPolicy: "Privacy Policy",
      buttonText: "Send",
    },
    footer: {
      officeAddress: "ul. Zygmunta Słomińskiego 15/44, 00-195 Warszawa, Poland",
      phoneNumber: "+48 664 000 706",
      email: "contact@cthings.co",
      companyName: "© 2020 | cthings.co sp. z.o.o.",
      dataPrivacyPolicy: "Data Privacy Policy",
    },
  },
};

const get = (p: any, o: any) =>
  p.reduce((xs: any, x: any) => (xs && xs[x] ? xs[x] : null), o);

export const getText = (path: string[]) => {
  return get(path, (localisedText as any)["en-GB"]);
};
