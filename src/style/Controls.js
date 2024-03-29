import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  padding: 10px 20px;
  bottom: 0px;
  height: 12%;
  left: 2%;
  opacity: 0.8;
  width: 75.5%;
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
    justify-content: space-between;
    > .volume {
      display: flex;
      align-items: center;
      > label {
        margin-right: 5px;
        height: fit-content;
      }
      > input {
        background-color: red;
      }
    }
    > nav {
      width: 300px;
      display: flex;
      justify-content: space-between;
      > button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        background-color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        &:active {
          background-color: lightblue;
        }
      }
    }
    > .speed {
      display: flex;
      align-items: center;
    }
  }
`;

export default Wrapper;
