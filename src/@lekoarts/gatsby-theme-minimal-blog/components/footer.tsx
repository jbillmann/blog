/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import useSiteMetadata from "../hooks/use-site-metadata";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`
      }}
    >
      <div>
        &copy; {new Date().getFullYear()}, {siteTitle}.
        <Styled.a href="https://www.amazon.com/Rise-Fall-Dinosaurs-History-World-ebook/dp/B0727TN8H6">
          🦖🦕
        </Styled.a>
      </div>
    </footer>
  );
};

export default Footer;
