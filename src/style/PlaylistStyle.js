import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  > .title {
    z-index: 1;
    background-color: black;
    width: 100%;
    > h1 {
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 2px solid white;
    }
  }
  > .playlist-container {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;
    overflow-y: scroll;
    height: 90vh;
    > button {
      padding: 4vw;
      border-radius: 3px;
      cursor: pointer;
      margin-right: 10px;
    }
    &::-webkit-scrollbar {
      width: 5px;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  @media only screen and (max-width: 850px) {
    width: 100vw;
    overflow-x: scroll;
    > .playlist-container {
      flex-direction: row;
    }
  }
`;

export default Wrapper;
