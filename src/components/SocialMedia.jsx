import React from "react";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href={"https://github.com/KHALID-AGHA"}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          {" "}
          <BsGithub />
        </div>
      </a>
      <a
        href={"https://www.linkedin.com/in/khalid-agha/"}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
