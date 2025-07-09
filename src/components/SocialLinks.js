import React from 'react';


const SocialLinks = () => {
  return (
    <div className="red">
      <div id="linkedin">
        <a
          href="https://www.linkedin.com/in/gustavo-auger-gac/"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-linkedin"
          aria-label="LinkedIn"  
          aria-hidden="true" 
        > </a>
      </div>
      <div id="github">
        <a
          href="https://www.github.com/gustavoauger/"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-github"
          aria-label="GitHub" 
          aria-hidden="true" 
        > </a>
      </div>
      <div id="instagram">
        <a
          href="https://www.instagram.com/nivel11_cl/"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-instagram"
          aria-label="Instagram"  
          aria-hidden="true" 
        > </a>
      </div>
      <div id="twitter">
        <a
          href="https://twitter.com/"  
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-twitter"
          aria-label="Twitter"  
          aria-hidden="true" 
        > </a>
      </div>
    </div>
  );
};

export default SocialLinks;
