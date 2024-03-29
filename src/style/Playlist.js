import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 1vw;
  width: 100%;
  flex-direction: column;
  > h1 {
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid white;
  }
  .playlist-container {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;
  }
  > .playlist-container > button {
    padding: 4vw;
    border-radius: 3px;
    cursor: pointer;
  }

  @media only screen and (max-width: 850px) {
    background-color: blue;
    width: fit-content;
    > .playlist-container {
      flex-direction: row;
    }
  }
`;

export default Wrapper;
