import styled from 'styled-components';

const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-start;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.15rem 1.75rem 0 rgb(58 59 69 / 15%);
  background: #ffffff;
  margin: 0;
  div.toolBar {
    width: 100%;
    justify-content: space-between;
  }
  .mainHeaderLeft {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padidng: 0 1rem 0 0;
  }
  .logo {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    img {
      margin-right: 1rem;
    }
    span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 130%;
      /* identical to box height, or 42px */
      display: flex;
      align-items: center;
      text-align: center;
      color: #ffffff;
    }
  }
  .mainHeaderRight {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0.75rem 0 1.8rem;
    min-height: 54px;
    position: relative;
    &:before {
      content: '';
      display: block;
      background: #e3e6f0;
      position: absolute;
      height: 38px;
      left: 0;
      top: 9px;
      width: 1px;
    }
    @media screen and (max-width: 531px) {
      padding: 0 0.75rem;
      &:before {
        display: none;
      }
    }
    .userBtn {
      border: 0;
      padding: 0;
      background: none;
      font-size: 12.8px;
      color: #858796;
      span {
        @media screen and (max-width: 993px) {
          display: none;
        }
      }
      img {
        margin: 0 0 0 0.5rem;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
      }
    }
  }
  .btnToggleMenu {
    border: 0;
    background: none;
    margin: 0 20px 0 0;
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
`;

export default HeaderStyle;
