import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height:100vh;
`;
const Main = styled.div`
  flex-grow:1;
  overflow: auto;
`;

type Props = {
  className?: string;
  scrollTop?: number;
}
const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = props.scrollTop!;
    }
  }, [props.scrollTop]);
  Layout.defaultProps = {
    scrollTop: 9999
  };
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};
export default Layout;