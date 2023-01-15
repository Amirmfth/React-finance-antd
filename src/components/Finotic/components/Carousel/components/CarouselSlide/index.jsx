import { Carousel } from "@mantine/carousel";
import { Container, Stack, Text, Title } from "@mantine/core";

export function CarouselSlide(Props) {
  return (
    <Carousel.Slide >
      <Title order={3}>FINOTIC</Title>
      <Container h={300}></Container>
      <Stack mb={30} spacing={"xs"}>
        <Title order={1}>Welcome back!</Title>
        <Text c={"dimmed"}>Start managing your finance faster and better</Text>
        <Text c={"dimmed"}>Start managing your finance faster and better</Text>
      </Stack>
    </Carousel.Slide>
  );
}
