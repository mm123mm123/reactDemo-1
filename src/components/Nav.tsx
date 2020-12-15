import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
      box-shadow:0 0 3px rgba(0,0,0,0.25);
      ul{
        display: flex;
        li{
        width:33.3333%;
        padding:2px;
          a{
            display: flex;
            flex-direction: column;
            align-items: center;
            &.selected{
              color:red;
              svg{
                fill:red;
              }
            }
              svg{
              height:2em;
              width:2em;
            }
          }
        }
      }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName={'selected'}>
            <Icon name="labels"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName={'selected'}>
            <Icon name="money"/>
            记一笔
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName={'selected'}>
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;