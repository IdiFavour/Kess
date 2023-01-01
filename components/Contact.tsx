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
import Link from "next/link";
const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.light,
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
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
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
    <Container mb={100}>
      <div
        className={classes.wrapper}
        style={{
          backgroundColor: "light",
          border: "1px solid #000000",
          borderRadius: "10px",
        }}
      >
        <div className={classes.body}>
          <Title className={classes.title}>
            Enough Talk, Let&apos;s Build Something
          </Title>
          <Text weight={500} size="lg" mb={5}></Text>
          <Text size="sm" color="dimmed">
            Send a line here and get updated
          </Text>

          <div className={classes.controls}>
            <Link href="/contact">
              <Button
                variant="white"
                color="dark"
                radius="sm"
                style={{ backgroundColor: "#f8cbc3" }}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <Card
          p="lg"
          radius="md"
          style={{
            boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.65)",
            borderRadius: "8px",
          }}
        >
          <Card.Section component="a">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZlbWFsZSUyMG9mZmljZSUyMHBvdHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                height={360}
                alt="Norway"
              />
            </div>
          </Card.Section>
        </Card>
      </div>
    </Container>
  );
};

export default Contact;
