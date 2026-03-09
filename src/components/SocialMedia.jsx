import { BsLinkedin, BsGithub } from 'react-icons/bs/index';
const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://github.com/KHALID-AGHA"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit my GitHub profile"
      >
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/khalid-agha"
        target="_blank"
        rel="noreferrer"
        aria-label="Connect with me on LinkedIn"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
