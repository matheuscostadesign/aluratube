import styled from "styled-components";
import config from "../config.json";
import Menu from "../src/components/Menu";
import { CSSReset } from "../src/components/CSSReset";
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
        <Timeline playlists={config.playlists} favoritos={config.favoritos}>
          Conteudo (Children)
        </Timeline>
      </div>
    </>
  );
}

export default HomePage;

// styled component que irá renderizar uma div (poderia ser uma section, por ex)
const StyledHeader = styled.div`
  .banner {
    margin-top: 56px;
    width: 100%;
    height: 230px;
    object-fit: cover;
  }
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
    margin-top: 24px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img
        className="banner"
        src={`https://source.unsplash.com/${config.banner}`}
      />
      <section className="user-info">
        <img
          className="avatar"
          src={`https://github.com/${config.github}.png`}
        />
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

  const favoritosNames = props.favoritos;

  //console.log(favoritosNames[0].title);

  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos = props.playlists[playlistName];
        //console.log(playlistName);
        //console.log(videos);
        return (
          <>
            <section key={index}>
              <h2>{playlistName}</h2>
              <div>
                {videos.map((video, index) => {
                  return (
                    <a href={video.url} key={index} target="_blank">
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
              </div>
            </section>
          </>
        );
      })}
    </StyledTimeline>
  );
}
