
//npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

function SocialButton({ icon }) {
  let iconComponent;

  switch (icon) {
    case 'linkedin':
      iconComponent = <FontAwesomeIcon icon={faLinkedin} />;
      break;
    case 'github':
      iconComponent = <FontAwesomeIcon icon={faGithub} />;
      break;
    case 'google':
      iconComponent = <FontAwesomeIcon icon={faGoogle} />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <div>
      {iconComponent}
    </div>
  );
}

export default SocialButton;
