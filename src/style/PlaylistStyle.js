import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  > .title {
    background-color: #181818;
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
    > .search {
      display: flex;
      padding: 0 5px;
      align-items: center;
      background-color: white;
      > .search-icon {
        color: black;
      }
      > input {
        width: 90%;
        height: 30px;
        outline: none;
        padding-left: 5px;
        border: none;
      }
    }
    > .titles {
      > button {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 3px;
        cursor: pointer;
      }
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
    height: 30%;
    position: relative;
    > .title {
      text-align: left;
      width: fit-content;
    }
    > .playlist-container {
      flex-direction: row;
      > .search {
        position: absolute;
        top: 8%;
        right: 0%;
        background-color: transparent;
        > .search-icon {
          color: white;
          margin-top: 8px;
        }
        border-bottom: 2px solid white;
        > input {
          background-color: transparent;
          color: white;
        }
      }
      &::-webkit-scrollbar {
        height: 5px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    position: absolute;
    height: 30%;
  }
`;

export default Wrapper;
