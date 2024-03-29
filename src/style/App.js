import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "poppins";
  display: flex;
  background-color: #181818;
  height: 100vh;
  color: white;
  > main {
    width: 80%;
    padding: 10px 20px;
    > .title {
      position: absolute;
      top: 0;
      left: 2%;
      width: fit-content;
    }
    > video {
      width: 100%;
      height: 88%;
    }
  }
  > aside {
    width: 20%;
  }

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export default Wrapper;
