import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
      box-shadow:0 0 3px rgba(0,0,0,0.25);
      ul{
        display: flex;
        li{
        width:33.3333%;
        padding:2px;
          div{
            display: flex;
            flex-direction: column;
            align-items: center;
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
          <Link to="/tags">
            <div>
              <Icon name="labels"/>
              标签
            </div>
          </Link>
        </li>
        <li>
          <Link to="/money">
            <div>
              <Icon name="money"/>
              记一笔
            </div>
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <div>
              <Icon name="statistics"/>
              统计
            </div>
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;