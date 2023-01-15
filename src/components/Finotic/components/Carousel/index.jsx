import { Center } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import { CarouselSlide } from "./components/CarouselSlide";

export function CarouselMain() {
  const carouselSlides = [
    {
      image: "https://img.freepik.com/free-vector/manage-money-concept-illustration_114360-8059.jpg?w=900&t=st=1673753158~exp=1673753758~hmac=7fdb1b0692a72db23a31791bcb4148002bc63eca239ff9bd3b0ff679b39da1c9",
      title: "Welcome back!",
      subtitle: "Start managing your finance faster and better",
    },
    {
      image: "https://img.freepik.com/free-vector/personal-finance-concept-illustration_114360-5523.jpg?t=st=1673753412~exp=1673754012~hmac=70675c28c395098a0eaa3a0912adb50e7dc3a90d50392e9d093df82cc82e6c33",
      title: "Amazing features",
      subtitle: "Handle your financial task fast and organized ",
    },
    {
      image: "https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8053.jpg?w=900&t=st=1673753835~exp=1673754435~hmac=295805174bcaec40130812f85becf12853a8e815ec147c81a658042d0df546e8",
      title: "Make your way with numbers",
      subtitle: "User friendly environment with beautiful UI design ",
    },
    {
      image: "https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg?w=900&t=st=1673756701~exp=1673757301~hmac=818f4cd8a66044020d01e4c99c49b0dae37c8379ea4790321b14313868e9e597",
      title: "Best choice for organizations ",
      subtitle: "You can communicate with your co-workers and stay tuned all the time ",
    },
  ];
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
      py={"15%"}
      align={"start"}
      slideGap="md"
      withIndicators
    >
      <CarouselSlide slide={carouselSlides[0]} />
      <CarouselSlide slide={carouselSlides[1]} />
      <CarouselSlide slide={carouselSlides[2]} />
      <CarouselSlide slide={carouselSlides[3]} />
    </Carousel>
  );
}
