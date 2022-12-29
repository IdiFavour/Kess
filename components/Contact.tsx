import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Container,
  Image,
  Card,
  Badge,
  Group,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.dark,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "light" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

const Contact = () => {
  const { classes } = useStyles();
  return (
    <Container mb={100} style={{ backgroundColor: "dark" }}>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>
            Enough Talk, Let&apos;s Build Something
          </Title>
          <Text weight={500} size="lg" mb={5}></Text>
          <Text size="sm" color="dimmed">
            Send a line here and get updated
          </Text>

          <div className={classes.controls}>
            <Button
              className={classes.control}
              variant="white"
              color="dark"
              style={{ backgroundColor: "#f8cbc3" }}
            >
              Contact Us
            </Button>
          </div>
        </div>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section component="a" href="https://mantine.dev/">
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={360}
              alt="Norway"
            />
          </Card.Section>
        </Card>
      </div>
    </Container>
  );
};

export default Contact;
