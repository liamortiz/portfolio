import React from 'react';
import github_logo from '../images/github-logo.svg';

const Footer : React.FC = () => {
  return (
    <footer>
      <a href = "" title = "visit github" target = "_blank"><img alt = "visit github" src = {github_logo}/></a>
      <p>Thank you for viewing my portfolio</p>
    </footer>
  )
}
export default Footer;
