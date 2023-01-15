import { Center } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import { CarouselSlide } from "./components/CarouselSlide";

export function CarouselMain() {
  return (
    <Carousel
      styles={{
        indicator: {
        backgroundColor: "black",
          width: 12,
          height: 4,
          transition: "width 250ms ease",
          "&[data-active]": { width: 40 },
        },
      }}
      px={50}
      py={40}
      align={"start"}
      slideGap="md"
      h={"100%"}
      withIndicators
    >
      <CarouselSlide />
      <CarouselSlide />
      <CarouselSlide />
      <CarouselSlide />
    </Carousel>
  );
}
