import { Carousel } from "@mantine/carousel";
import { Container, Image, Stack, Text, Title } from "@mantine/core";
import { IconCircleDashed } from "@tabler/icons";
export function CarouselSlide(props) {
  const { image, title, subtitle } = props.slide;
  return (
    <Carousel.Slide>
      <Title fs={"italic"} variant="gradient" gradient={{from: 'indigo.9' , to: 'yellow.9', deg: 45}} order={3}>FINOTIC</Title>
      <Container>
        <Image my={20} src={image} width={330} />
      </Container>
      <Stack mb={30} spacing={"xs"}>
        <Title   order={2}>{title}</Title>
        <Text c={"dimmed"}>{subtitle}</Text>
      </Stack>
    </Carousel.Slide>
  );
}
