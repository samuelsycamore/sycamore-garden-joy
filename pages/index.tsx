import Link from "next/link";
import Layout from "../components/Layout";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";

export default function Index() {
  return (
    <Layout>
      <Typography>
        Welcome to Sycamore Garden! This is where I've gathered together all of
        my little projects on the internet. Some things you could do here:
      </Typography>
      <List>
        <ListItem>
          check out my&nbsp;
          <a href="https://work.sycamore.garden">professional portfolio</a>
        </ListItem>
        <ListItem>
          read my&nbsp;
          <a href="https://tech.sycamore.garden)">tech and career blog</a>
        </ListItem>
        <ListItem>
          read my&nbsp;<Link href="/blog">short fiction and memoirs</Link>
        </ListItem>
        <ListItem>
          browse the&nbsp;
          <a href="https://foraging.sycamore.garden">
            edible wild plant database
          </a>
        </ListItem>
        <ListItem>
          read my&nbsp;
          <a href="https://shop.sycamore.garden">
            book on foraging for beginners
          </a>
        </ListItem>
        <ListItem>
          buy my&nbsp;
          <a href="https://thegoodliferevival.com/shop/fna">
            course on the botany of edible wild plants
          </a>
        </ListItem>
        <ListItem>
          listen to my demos on&nbsp;
          <a href="https://soundcloud.com/samsycamore">SoundCloud</a>
        </ListItem>
        <ListItem>
          listen to my albums on&nbsp;
          <a href="https://tidal.com/browse/artist/31976823">Tidal</a>
          &nbsp;/&nbsp;
          <a href="https://music.apple.com/us/artist/sam-sycamore/1622286944">
            Apple Music
          </a>
          &nbsp;/&nbsp;
          <a href="https://open.spotify.com/artist/1AuQfJvltKqsx3vtHoZUkq">
            Spotify
          </a>
        </ListItem>
        <ListItem>
          listen to my&nbsp;
          <a href="https://thegoodliferevival.com/podcast">
            old podcast on foraging, homesteading, sustainability
          </a>
        </ListItem>
      </List>
    </Layout>
  );
}
