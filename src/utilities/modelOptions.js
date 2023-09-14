import chestImage from "../assets/carousel/chest.webp";
import mammographyImage from "../assets/carousel/mammography.webp";
import healthTipsImage from "../assets/carousel/health-tips.webp";

const options = [
  {
    id: 0,
    value: "DOCTORAI Intelligent Framework",
    image: healthTipsImage,
    label: "DOCTORAI Intelligent Framework",
    accuracy: "98%",
    description:
      "DoctorAI Assistant is the cornerstone of our AI-powered healthcare solutions, encompassing a suite of specialized sub-models that aid medical professionals in decision-making and error reduction",
    showAccuracy: true,
  },
  {
    id: 1,
    value: "Chest X-Ray Analyzer",
    image: chestImage,
    label: "Chest X-Ray Analyzer",
    accuracy: "94%",
    showAccuracy: true,
  },
  {
    id: 2,
    value: "Mammogram Analyzer",
    image: mammographyImage,
    label: "Mammogram Analyzer",
    accuracy: "97%",
    showAccuracy: true,
  },
  //   {
  //     id: 3,
  //     value: "DoctorAI Diagnoser",
  //     image: breastCancerImage,
  //     label: "DoctorAI Diagnoser",
  //     accuracy: "97%",
  //     showAccuracy: false,
  //   },
];

export default options;
