import {
  createStyles,
  Button,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from "@mantine/core";
import {
  IconGauge,
  IconUser,
  IconCookie,
  IconArrowBadgeRight,
  IconBrandTwitter,
} from "@tabler/icons";

const mockdata = [
  {
    title: "Real Estate",
    bg: "#feeeb6",
    btnbg: "#fff",
    description:
      "Providing excellent housing accommodation in a well-planned and developed integrated community.",
  },
  {
    title: "Transportation",
    bg: "#b4e0c5",
    btnbg: "#fff",

    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
  },
  {
    title: "IT Services",
    bg: "#f8cbc3",
    btnbg: "#fff",

    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
  },
  {
    title: "Agricultural Farming",
    bg: "#f8cbc3",
    btnbg: "#fff",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
  },
  {
    title: "Purchase of Machineries",
    bg: "#feeeb6",
    btnbg: "#fff",

    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
  },
  {
    title: "Construction Services",
    bg: "#b4e0c5",
    btnbg: "#fff",
    description:
      "Actively seek out the use of creative construction methods and materials for the delivery of affordable quality projects.",
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: "#fff",
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

const Services = () => {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
      style={{ backgroundColor: feature.bg }}
    >
      <Text size="lg" weight={600} className={classes.cardTitle}>
        {feature.title}
      </Text>
      <Text size="sm" fw={400} color="#495057" mt="sm">
        {feature.description}
      </Text>
      <Button
        fullWidth
        style={{ backgroundColor: feature.btnbg }}
        rightIcon={<IconArrowBadgeRight size={20} />}
        mt={10}
        c="dark"
      >
        Get Started
      </Button>
    </Card>
  ));
  return (
    <Container size="lg" py="xl" mt={100}>
      <Title order={2} className={classes.title} align="center" mt="sm">
        Services we provide
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default Services;
