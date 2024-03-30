import styled from "styled-components";

const Wrapper = styled.div`
  > .top {
    display: flex;
    height: 5%;
    > .time {
      margin-right: 20px;
    }
    > input {
      flex: 1;
    }
  }
  > .bottom {
    height: 10%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
    > .volume {
      display: flex;
      align-items: center;
      > label {
        margin-right: 5px;
        height: fit-content;
      }
      > input {
        width: 100%;
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
      > label {
        margin-right: 5px;
      }
      > select {
        border-radius: 10px;
        padding-left: 5px;
      }
    }
    > .full-screen {
      height: 5%;
      > button {
        cursor: pointer;
        font-size: 22px;
        color: white;
        background: transparent;
        border: none;
      }
    }
  }

  @media only screen and (max-width: 660px) {
    > .bottom {
      > nav {
        width: 200px;
        margin: 0 10px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    > .bottom {
      > nav {
        > button {
          width: 30px;
          height: 30px;
          font-size: 15px;
        }
      }
    }
  }
`;

export default Wrapper;
