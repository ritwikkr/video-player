import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  > main {
    border: 2px solid red;
    > video {
      width: 100%;
      height: 100%;
    }
    > .controls {
      position: absolute;
      bottom: 0px;
      left: 0;
      background-color: lightgray;
      width: 100%;
      > .top {
        display: flex;
        > .time {
          margin-right: 20px;
        }
        > input {
          flex: 1;
        }
      }
      > .bottom {
        display: flex;
        justify-content: center;
      }
    }
  }
  > aside {
    border: 2px solid blue;
    min-width: 300px;
  }
`;

export default Wrapper;
