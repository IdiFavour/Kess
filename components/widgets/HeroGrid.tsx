import {
  SimpleGrid,
  Skeleton,
  Container,
  Stack,
  useMantineTheme,
} from "@mantine/core";

const getChild = (height: number) => (
  <Skeleton height={height} radius="md" animate={false} />
);
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

const HeroGrid = () => {
  const theme = useMantineTheme();
  return (
    <Container my="md">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
        {getChild(BASE_HEIGHT)}
        <Stack>
          {getChild(getSubHeight(2, theme.spacing.md))}
          {getChild(getSubHeight(2, theme.spacing.md))}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
export default HeroGrid;
