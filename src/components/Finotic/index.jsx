import { Container, Grid } from "@mantine/core";
import { CarouselMain } from "./components/Carousel";
import { Login } from "./components/Login";

export function Finotic() {
  return (
    <Grid h={"100vh"}>
      <Grid.Col   span={5} style={{backgroundColor: "#F5F7F9"}}>
        <Container >
            <CarouselMain />
        </Container>
      </Grid.Col>
      <Grid.Col  span={7} >
        <Container h={"100%"}>
          <Login  />
        </Container>
      </Grid.Col>
    </Grid>
  );
}
