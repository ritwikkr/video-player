import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "poppins";
  display: flex;
  background-color: #181818;
  height: 100vh;
  color: white;
  overflow: hidden;
  > main {
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    > .title {
      z-index: 1;
      height: 5%;
    }
    > .video {
      height: 80%;
      > video {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
    > .controls {
      height: 15%;
    }
  }
  > aside {
    width: 20%;
  }

  @media only screen and (max-width: 850px) {
    flex-direction: column;
    > main {
      width: 100%;
      height: 70%;
    }
    > aside {
      width: 100%;
    }
  }

  @media only screen and (max-width: 400px) {
    > main {
      height: 70%;
    }
  }
`;

export default Wrapper;
