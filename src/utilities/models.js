import breastCancerImage from "../assets/carousel/breast-cancer.webp";
import chestImage from "../assets/carousel/chest.webp";
import malariaImage from "../assets/carousel/malaria.webp";
import leukemiaImage from "../assets/carousel/leukemia.webp";
import mammographyImage from "../assets/carousel/mammography.webp";
import healthTipsImage from "../assets/carousel/health-tips.webp";
const models = [
  {
    id: 0,
    title: "DoctorAI Assistant",
    image: healthTipsImage,
    description:
      "The DoctorAI Assistant serves as our central intelligence framework, integrating a comprehensive array of specialized models to deliver actionable recommendations to healthcare professionals. Engineered as the linchpin of our ecosystem, all other DoctorAI models function as integral components of this advanced platform.",
  },
  {
    id: 1,
    title: "Chest X-RAY Analyzer",
    image: chestImage,
    description:
      "Chest X-ray Analyzer is a specialized module within the DoctorAI Assistant ecosystem. Utilizing advanced AI algorithms, this analyzer is capable of distinguishing between normal and 18 different pathological features by localizing them on a chest X-ray image. Among its array of diagnostic capabilities, it boasts a highly sophisticated pneumothorax detection mechanism.",
  },
  {
    id: 2,
    title: "Mammogram Analyzer",
    image: mammographyImage,
    description:
      "The Mammogram Analyzer is an essential component within the DoctorAI Assistant ecosystem, designed with state-of-the-art AI algorithms. This advanced module excels in detecting and localizing a range of abnormal features in mammographic images.",
  },

  //   {
  //     id: 3,
  //     title: "DoctorAI Diagnoser",
  //     image: breastCancerImage,
  //     description:
  //       "it is an AI agent that has the ability to answer medical and health related questions.",
  //   },
];

export default models;
