import Layout from "../components/Layout";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import { siteMetaData } from "../lib/siteMetaData";

export default function About() {
  return (
    <Layout>
      <Typography level="h2" sx={{ mb: "1rem" }}>
        About me
      </Typography>
      <Avatar
        sx={{
          "--Avatar-size": "100px",
          mb: "1rem",
        }}
        alt="this person does not exist"
        src={siteMetaData.image}
      >
        SS
      </Avatar>
      <Typography sx={{ mb: "1rem" }}>
        I'm Sam Sycamore, a writer and editor with over ten years of
        professional experience across multiple industries.
      </Typography>
      <Typography sx={{ mb: "1rem" }}>
        I help tech startups and digital agencies clearly communicate the value
        of their products and services to their target users. I especially enjoy
        writing educational content for tech products, because I believe that
        strong docs are the best marketing materials you can present to a
        tech-savvy audience.
      </Typography>
      <Typography sx={{ mb: "1rem" }}>
        In my free time I enjoy reading, writing, making music, gardening,
        traveling, and exploring the great outdoors.
      </Typography>
    </Layout>
  );
}
