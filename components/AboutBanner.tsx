import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  Text,
  Title,
} from "@mantine/core";
import Process from "./Process";

const PRIMARY_COL_HEIGHT = 300;

const AboutBanner = () => {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container size="lg" mb={50} mt={100}>
      <Process />
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid gutter="md" m={20}>
          <Title order={2}>About Us</Title>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};
export default AboutBanner;
