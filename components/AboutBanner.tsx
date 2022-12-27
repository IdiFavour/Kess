import {
  createStyles,
  Text,
  SimpleGrid,
  Container,
  ThemeIcon,
  Center,
  Title,
} from "@mantine/core";
import {
  IconTruck,
  IconCertificate,
  IconCoin,
  TablerIcon,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  feature: {
    position: "relative",
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: "absolute",
    height: 100,
    width: 160,
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: TablerIcon;
  title: string;
  description: string;
}

function Feature({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.content}>
        <ThemeIcon variant="outline" size={60} radius={40}>
          <Icon size={38} className={classes.icon} stroke={1.5} />
        </ThemeIcon>
        <Text weight={700} size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text color="#495057" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconTruck,
    title: "Business Idea",
    description: "What you want your business to be",
  },
  {
    icon: IconCertificate,
    title: "Planning",
    description: "A business plan helps formalize your idea",
  },
  {
    icon: IconCoin,
    title: "Develop",
    description: "Ideation, prototyping, costing of your project",
  },
  {
    icon: IconCoin,
    title: "Business Structure",
    description: "Key parts of your business",
  },
];

const AboutBanner = () => {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={50} mb={30} size="lg">
      <Center>
        <Title order={1}>The process we follow</Title>
      </Center>
      <SimpleGrid
        cols={4}
        breakpoints={[{ maxWidth: "sm", cols: 2 }]}
        spacing={40}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
};

export default AboutBanner;
