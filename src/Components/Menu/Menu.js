import React from 'react';
import styled from 'styled-components';
//import dbMenu from '../DBMenu';
import ListItem from './ListItem';
import bannerImg from '../../img/banner.png';
import { useFetch } from '../Hooks/useFetch';

const MenuStyled = styled.main`
  background-color: #ccc;
  min-height: 100vh;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const MenuBanner = styled.div`
  width: 100%;
  height: 210px;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
`;

const SkRotatingPlane = styled.div`
    width: 4rem;
    height: 4rem;
    margin: auto;
    background-color: #299B01;
    animation: sk-rotating-plane 1.2s infinite ease-in-out;

  @keyframes sk-rotating-plane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
`;

const Menu = ({ setOpenItem }) => {

    const res = useFetch();
    const dbMenu = res.response;

  return (
    <MenuStyled>
      <MenuBanner/>
      { res.response ?
        <>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
          </SectionMenu>
          <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
          </SectionMenu>
        </> : res.error ?
        <div>Sorry, we'll fix it soon...</div> :
        <section>
          <SkRotatingPlane className='sk-rotating-plane'/>
        </section>
      }
    </MenuStyled>
  );
};

export default Menu;
