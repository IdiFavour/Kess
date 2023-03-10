import {
  createStyles,
  Text,
  SimpleGrid,
  Container,
  ThemeIcon,
  Center,
  Title,
  Skeleton,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { David_Libre } from "@next/font/google";
import {
  IconSettings,
  IconClockHour3,
  IconCoin,
  TablerIcon,
  IconNotes,
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
  process: {
    marginBottom: 100,
    marginTop: 50,
  },

  content: {
    position: "relative",
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: "light", color: theme.black }).color,
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  sectiontitle: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 50,
    fontWeight: 800,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },
  //   about
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: TablerIcon;
  title: string;
  iconcolor: any;
  description: string;
}

function Feature({
  icon: Icon,
  title,
  iconcolor,
  description,
  className,
  ...others
}: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div
      style={{ textAlign: "center" }}
      className={cx(classes.feature, className)}
      {...others}
    >
      <div className={classes.content}>
        <ThemeIcon variant="filled" color={iconcolor} size={50} radius={40}>
          <Icon size={28} color="#000" className={classes.icon} stroke={1.5} />
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
    icon: IconNotes,
    title: "Business Idea",
    iconcolor: "#b4e0c5",
    description: "What you want your business to be",
  },
  {
    icon: IconClockHour3,
    title: "Planning",
    iconcolor: "#feeeb6",
    description: "A business plan helps formalize your idea",
  },
  {
    icon: IconSettings,
    title: "Develop",
    iconcolor: "#f8cbc3",
    description: "Ideation, prototyping, costing of your project",
  },
  {
    icon: IconCoin,
    title: "Business Structure",
    iconcolor: "#feeeb6",
    description: "Key parts of your business",
  },
];

const getChild = (height: number) => (
  <Skeleton height={height} radius="md" animate={false} />
);
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

const Process = () => {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.process}>
      <>
        <Title
          align="center"
          mb={10}
          className={classes.sectiontitle}
          order={1}
        >
          The process we follow
        </Title>
        <div>
          <Text color="#495057" size="sm" fw={500} mb={20} align="center">
            As a academy of business, we are going through <br /> the
            development cycle.
          </Text>
        </div>
      </>
      <SimpleGrid
        cols={4}
        breakpoints={[{ maxWidth: "sm", cols: 2 }]}
        spacing={40}
      >
        {items}
      </SimpleGrid>
    </div>
  );
};

export default Process;
