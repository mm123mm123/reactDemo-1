import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

require('icons/money.svg');
require('icons/labels.svg');
require('icons/statistics.svg');
const NavWrapper = styled.nav`
      box-shadow:0 0 3px rgba(0,0,0,0.25);
      ul{
        display: flex;
        li{
        width:33.3333%;
        padding:2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        svg{
          height:2em;
          width:2em;
        }
        }
      }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg>
            <use xlinkHref='#labels'/>
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg >
            <use xlinkHref='#money'/>
          </svg>
          <Link to="/money">记一笔</Link>
        </li>
        <li>
          <svg>
            <use xlinkHref='#statistics'/>
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;