import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Pagination, Navigation } from "swiper";
import { Stack, Typography, IconButton } from "@mui/material";
import models from "../../utilities/models";
import KCImage from "../reusable/KCImage";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function CarouselItem() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const styles = {
    selectedImage: {
      ml: [6, 4, 0],
      mr: [6, 4, 0],
    },
    image: {
      mx: [7, 4, 0],
    },
    icon: {
      fontSize: 26,
    },
    IconButton: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      backgroundColor: "#08C0B4",
      "&:hover": {
        backgroundColor: "#08C0B4",
      },
      display: ["none", "flex", "flex"],
    },
  };

  const handlePrev = () => {
    swiperRef?.slidePrev();
  };

  const handleStart = () => {
    swiperRef?.slideTo(6);
  };
  const handleEnd = () => {
    swiperRef?.slideTo(1);
  };

  const handleNext = () => {
    swiperRef?.slideNext();
  };

  useEffect(() => {
    if (swiperRef) {
      swiperRef.on("slideChange", () => {
        setCurrentIndex(swiperRef.activeIndex);
        console.log("Current Index:", swiperRef.activeIndex);
      });
    }
  }, [swiperRef]);

  useEffect(() => {
    swiperRef?.slideNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        slidesPerGroup={1}
        initialSlide={1}
        spaceBetween={40}
        allowTouchMove={[true, false, false]}
        centeredSlides={true}
        navigation={false}
        modules={[Pagination, Navigation]}
        effect="coverflow"
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ width: 0, height: 0 }}></div>
        </SwiperSlide>

        {models.map((card, index) => (
          <SwiperSlide>
            <Stack key={index} spacing={[5, 5, 1]}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={["10px", "20px", "10px"]}
                sx={
                  currentIndex === card.id ? styles.selectedImage : styles.image
                }
              >
                {currentIndex - 1 === card.id && (
                  <IconButton
                    id="prev-slide"
                    sx={styles.IconButton}
                    onClick={currentIndex - 1 === 0 ? handleStart : handlePrev}
                  >
                    <ArrowLeftIcon sx={styles.icon} />
                  </IconButton>
                )}
                <KCImage
                  src={card.image}
                  alt={"doctorAI"}
                  sx={{
                    width:
                      currentIndex - 1 === card.id
                        ? ["40vw", "44vw", "35vw"]
                        : ["35vw", "36vw", "28vw"],
                  }}
                  blur={currentIndex - 1 !== card.id}
                  displayIcon={currentIndex - 1 === card.id}
                ></KCImage>

                {currentIndex - 1 === card.id && (
                  <IconButton
                    id="next-slide"
                    sx={styles.IconButton}
                    onClick={
                      currentIndex === models.length ? handleEnd : handleNext
                    }
                  >
                    <ArrowRightIcon sx={styles.icon} />
                  </IconButton>
                )}
              </Stack>
              {currentIndex - 1 === card.id && (
                <Stack
                  justifyContent="flex-start"
                  alignItems="center"
                  pt={5}
                  pb={3}
                  sx={{ textAlign: "center", height: "10rem" }}
                  gap={2}
                >
                  <Stack direction="row" alignItems="self-start">
                    <Typography color="primary" variant="h5">
                      {card.title}
                    </Typography>
                    {/* <IconButton id="prev-slide">
                      <DownloadForOfflineIcon
                        sx={{ fontSize: 22 }}
                        color="primary"
                      ></DownloadForOfflineIcon>
                    </IconButton> */}
                  </Stack>

                  <Typography
                    sx={{
                      width: ["90%", "60%", "80%"],
                      textShadow: "5px 5px 16px rgb(0 0 0 / 24%)",
                    }}
                  >
                    {card.description}
                  </Typography>
                </Stack>
              )}
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
