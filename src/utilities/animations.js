import { keyframes } from "@emotion/react";

const animations = {
  slideInBl: keyframes`
 30% {
    -webkit-transform: translateY(-50px) translateX(-30px);
            transform: translateY(-50px) translateX(-30px);
    opacity: 0.3;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }
`,
  slideInTl: keyframes`
 30% {
    -webkit-transform: translateY(50px) translateX(-30px);
            transform: translateY(50px) translateX(-30px);
    opacity: 0.3;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }
    0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`,
  slideInBr: keyframes`
 30% {
    -webkit-transform: translateY(-50px) translateX(30px);
            transform: translateY(-50px) translateX(30px);
    opacity: 0.3;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }`,
  slideInTlRev: keyframes`
    30% {
    -webkit-transform: translateY(50px) translateX(-30px);
            transform: translateY(50px) translateX(-30px);
    opacity: 0.3;
  }
    100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }

`,
  slideInBrRev: keyframes`
    30% {
    -webkit-transform: translateY(-50px) translateX(-30px);
            transform: translateY(-50px) translateX(-30px);
    opacity: 0.3;
  }
    100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }

`,

  slideInTr: keyframes`
 30% {
    -webkit-transform: translateY(50px) translateX(30px);
            transform: translateY(50px) translateX(30px);
    opacity: 0.3;
  }
  100% {
    -webkit-transform: translateY(0) translateX(0);
            transform: translateY(0) translateX(0);
    opacity: 1;
  }

  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  40% {
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }


`,
  fade: keyframes`
 30% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
}
`,
  slideInFw: keyframes`
 30% {
    -webkit-transform: translateZ(-1400px);
            transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }`,
  slideLeft: keyframes`
   0% {
    -webkit-transform: translateY(0px) translateX(0px);
            transform: translateY(0px) translateX(0px);

    opacity: 1;
  }
     40% {
    -webkit-transform: translateY(10px) translateX(-30px) scale(1);
            transform: translateY(10px) translateX(-30px) scale(1);
     -webkit-filter: blur(3px);
            filter: blur(3px);
    opacity: 0.8;
  }
  80%{
        -webkit-transform: translateY(20px) translateX(-50px) scale(1.1);
            transform: translateY(20px) translateX(-50px) scale(1.1);
                 -webkit-filter: blur(0px);
            filter: blur(0px);
  }
  90% {
    -webkit-transform: translateY(23px) translateX(-70px) scale(1);
            transform: translateY(23px) translateX(-70px) scale(1);
     -webkit-filter: blur(5px);
            filter: blur(5px);
    opacity: 0.2;
  }
    100% {
    -webkit-transform: translateY(0px) translateX(0px);
            transform: translateY(0px) translateX(0px);

    opacity: 1;
  }`,
  slideRight: keyframes`
     0% {
    -webkit-transform: translateY(0px) translateX(0px);
            transform: translateY(0px) translateX(0px);

    opacity: 1;
  }
     40% {
    -webkit-transform: translateY(10px) translateX(30px) scale(1);
            transform: translateY(10px) translateX(30px) scale(1);
     -webkit-filter: blur(3px);
            filter: blur(3px);
    opacity: 0.8;
  }
  80%{
        -webkit-transform: translateY(20px) translateX(50px) scale(1.1);
            transform: translateY(20px) translateX(50px) scale(1.1);
                 -webkit-filter: blur(0px);
            filter: blur(0px);
  }
  90% {
    -webkit-transform: translateY(23px) translateX(70px) scale(1);
            transform: translateY(23px) translateX(70px) scale(1);
     -webkit-filter: blur(5px);
            filter: blur(5px);
    opacity: 0.2;
  }
    100% {
    -webkit-transform: translateY(0px) translateX(0px);
            transform: translateY(0px) translateX(0px);

    opacity: 1;
  }`,
};

export default animations;
