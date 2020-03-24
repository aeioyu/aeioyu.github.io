import Link from 'next/link';
import styled from 'styled-components';
import Container from '../Container';

const HeaderWrapper = styled.header`
  background: #ffffff;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  line-height: 50px;

  h1 {
    font-size: 18px;
    line-height: 50px;
    margin: 0;
  }

  ${Container} {
    display: flex;
  }
`;

const Logo = styled.a`
  width: 150px;
  cursor: pointer;
`;

interface IHeaderProps {}

function Header({ ...rest }: IHeaderProps) {
  return (
    <HeaderWrapper {...rest}>
      <Container>
        <Link href="/">
          <Logo>Time Checker</Logo>
        </Link>
        <Link href="/about">
          <a title="about page">About Page</a>
        </Link>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
