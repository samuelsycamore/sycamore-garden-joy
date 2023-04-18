import Layout from "../components/Layout";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";

const contactList = [
  {
    name: "Email",
    url: "sam@sycamore.garden",
    icon: <EmailIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/samuelsycamore",
    icon: <LinkedInIcon />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/tanoaksam",
    icon: <TwitterIcon />,
  },
  {
    name: "GitHub",
    url: "https://github.com/samuelsycamore",
    icon: <GitHubIcon />,
  },
];

export default function Contact() {
  return (
    <Layout>
      <Typography level="h2" sx={{ mb: "1rem" }}>
        Contact
      </Typography>
      Here's how you can get in touch with me:
      <List>
        {contactList.map(({ name, url, icon }) => (
          <ListItem key={url}>
            <ListItemDecorator>{icon}</ListItemDecorator>
            <ListItemContent>
              <a href={url}>{name}</a>
            </ListItemContent>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
}
