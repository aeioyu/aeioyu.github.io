import Header from '../Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #f0f0f0;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }
`;

interface Props {
  children: any;
}

function Layout({ children }: Props) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      {children}
    </div>
  );
}

export default Layout;

// Solution 1
// const Layout: FunctionComponent<{ children: any }> = ({ children }) => {
//   return (
//     <div>
//       <p>this is layout</p>
//       {children}
//     </div>
//   );
// };
