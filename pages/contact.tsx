import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  Container,
} from "@mantine/core";
// import { ContactIconsList } from "../ContactIcons/ContactIcons";
import FooterBanner from "../components/FooterBanner";
const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg - 2,
      backgroundSize: "cover",
      backgroundColor: "#feeeb6",
      backgroundPosition: "center",
      border: "1px solid transparent",
      padding: theme.spacing.xl,
      flex: "0 0 280px",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

const Contact = () => {
  const { classes } = useStyles();
  const linkData = [
    {
      title: "About",
      links: [{ label: "About BIMZHUA", link: "/" }],
    },
    {
      title: "Contact Us",
      links: [{ label: "Contact us via mail", link: "/contact" }],
    },
    {
      title: "Community",
      links: [
        { label: "Follow on Twitter", link: "/" },
        { label: "Follow on Instagram", link: "/" },
      ],
    },
  ];
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sbwzpee",
        "template_4rpps53",
        form.current,
        "ZqAojjSwAkFbZ1vCQ"
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
  };
  return (
    <>
      <Container mt={90}>
        <Paper shadow="md" radius="lg">
          <div className={classes.wrapper}>
            <div className={classes.contacts}>
              <Text
                size="lg"
                weight={700}
                className={classes.title}
                sx={{ color: "#000" }}
              >
                Contact information
              </Text>

              {/* <ContactIconsList variant="white" /> */}
            </div>

            <form className={classes.form} ref={form} onSubmit={sendEmail}>
              <Text size="lg" weight={700} className={classes.title}>
                Get in touch
              </Text>

              <div className={classes.fields}>
                <SimpleGrid
                  cols={2}
                  breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                >
                  <TextInput
                    label="Your name"
                    placeholder="Your name"
                    name="user_name"
                  />
                  <TextInput
                    label="Your email"
                    placeholder="johndoe@gmail.com"
                    required
                    name="user_email"
                  />
                </SimpleGrid>

                {/* <TextInput
                  mt="md"
                  label="Subject"
                  placeholder="Subject"
                  required
                /> */}

                <Textarea
                  mt="md"
                  label="Your message"
                  placeholder="Please include all relevant information"
                  minRows={3}
                  required
                  name="message"
                />

                <Group position="right" mt="md">
                  <Button
                    type="submit"
                    color="dark"
                    style={{ backgroundColor: "#000" }}
                    className={classes.control}
                    value="Send"
                  >
                    Send message
                  </Button>
                </Group>
              </div>
            </form>
          </div>
        </Paper>
      </Container>
      <FooterBanner data={linkData} />
    </>
  );
};
export default Contact;
