import { Header } from "~/components/Header";
import { BreadCrumbList } from "~/components/BreadCrumbList";
import { Main } from "~/components/styled/Main";
import { ContentCard } from "~/components/pages/ContentCard";

const Home = () => (
  <>
    <Header />
    <BreadCrumbList breadCrumbs={[{ name: "Home", url: "/" }]} />
    <Main>
      <ContentCard
        href="/articles"
        icon="/article_icon.png"
        description="ためにならない技術系の記事"
      />
    </Main>
  </>
);

export default Home;
