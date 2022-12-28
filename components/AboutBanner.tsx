import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import HeroGrid from "./widgets/HeroGrid";
import Process from "./Process";
const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginLeft: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginLeft: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 55,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

const AboutBanner = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Process />
      <Container size="lg">
        <div className={classes.inner}>
          <Image
            className={classes.image}
            src="https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg"
            alt="svg"
            height={350}
          />
          <div className={classes.content}>
            <Title className={classes.title}>
              <span className={classes.highlight}>Bimzhua</span> Multi-Global{" "}
              <br /> Nigeria limited
            </Title>
            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <Group mt={30}>
              <Button radius="md" size="md" className={classes.control}>
                Learn More
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default AboutBanner;
