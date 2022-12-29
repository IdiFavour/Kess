import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  SimpleGrid,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import HeroGrid from "./widgets/HeroGrid";

const useStyles = createStyles((theme) => ({
  cover: {
    background: "linear-gradient(to right, #feeeb6 70%, #000000 30%)",
    [theme.fn.smallerThan("sm")]: {
      background: "linear-gradient(to bottom, #feeeb6 70%, #000000 30%)",
    },
  },
  inner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
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

const HeroBanner = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.cover}>
      <Container size="lg" pt={70}>
        <div className={classes.inner}>
          <SimpleGrid
            cols={2}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            <div className={classes.content}>
              <Title className={classes.title}>
                <span className={classes.highlight}>Bimzhua</span> Multi-Global{" "}
                <br /> Nigeria limited
              </Title>
              <Text color="dimmed" mt="md">
                Build fully functional accessible web applications faster than
                ever – Mantine includes more than 120 customizable components
                and hooks to cover you in any situation
              </Text>

              <Group mt={30}>
                <Button
                  className={classes.control}
                  variant="white"
                  radius="md"
                  size="md"
                  color="dark"
                  style={{ backgroundColor: "#f8cbc3" }}
                >
                  Learn More
                </Button>
              </Group>
            </div>
            <div className={classes.image}>
              <HeroGrid />
            </div>
          </SimpleGrid>
        </div>
      </Container>
    </div>
  );
};
export default HeroBanner;