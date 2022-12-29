import {
  SimpleGrid,
  Skeleton,
  Container,
  Stack,
  useMantineTheme,
  Image,
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
    <div>
      <SimpleGrid my="md" cols={2} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
        <div>
          <Image
            src="https://media.istockphoto.com/id/1383117081/photo/happy-mature-couple-meeting-investments-and-financial-advisor-at-home.jpg?b=1&s=170667a&w=0&k=20&c=bYp670IfV0E5WayAKmNm3ydWoToaXrc76_T1u8fQvlo="
            alt="Norway"
            height={BASE_HEIGHT}
            radius="md"
          />
        </div>
        <Stack>
          <div>
            <Image
              src="https://media.istockphoto.com/id/1346006192/photo/portrait-of-a-contractor-filling-out-paperwork-at-a-construction-site.jpg?b=1&s=170667a&w=0&k=20&c=OD5xcLy4yzoTftL7m3NkM6kaJYuvSHlj3IHRR0cPl-g="
              alt="Norway"
              height={172}
              radius="md"
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1586206670130-4c6d8e646c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJhbnNwb3J0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
              alt="Norway"
              height={172}
              radius="md"
            />
          </div>
        </Stack>
      </SimpleGrid>
    </div>
  );
};
export default HeroGrid;
