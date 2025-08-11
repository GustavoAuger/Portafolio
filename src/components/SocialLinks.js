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
          href="https://drive.google.com/drive/u/0/folders/1IL5utr5RDDrFZzc2OIoTSRoMvowcSLvH"
          target="_blank"
          rel="noopener noreferrer"
          className="fas fa-file-pdf"
          aria-label="CV"  
          aria-hidden="true"
          title="Ver mi CV" 
        > </a>
      </div>

    </div>
  );
};

export default SocialLinks;
