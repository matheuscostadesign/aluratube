import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  // const estilosdaHomePage = {
  //     backgroundColor: "red"
  // };

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>Conteudo (Children)</Timeline>
      </div>
    </>
  );
}

export default HomePage;

// styled component que irá renderizar uma div (poderia ser uma section, por ex)
const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 64px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="" /> */}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props) {
  //console.log("Dentro do componente", props.playlists);
  const playlistNames = Object.keys(props.playlists);

  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos = props.playlists[playlistName];
        //console.log(playlistName);
        console.log(videos);
        return (
          <section key={index}>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video, index) => {
                return (
                  <a href={video.url} key={index}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
