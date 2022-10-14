import { useState } from "react";
import SVG from "react-inlinesvg";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShareButtons = {
  facebook: FacebookShareButton,
  twitter: TwitterShareButton,
  linkedin: LinkedinShareButton,
};

const ShareButton = ({ social }) => {
  const [isCopied, setIsCopied] = useState(false)
  const ShareIcon = ShareButtons[social];
  const shareLink = window.location.href;

  if (social === "link") {
    return (
      <CopyToClipboard text={shareLink} onCopy={() => setIsCopied(true)}>
        <button className="btn__share-link">
          <SVG
            src="/modules/custom/motional_greenhouse/app/build/images/icons/link.svg"
          />
          <span>{isCopied ? "Copied!" : "Click to Copy"}</span>
        </button>
      </CopyToClipboard>
    );
  } else {
    return (
      <ShareIcon url={shareLink}>
        <SVG
          src={`/modules/custom/motional_greenhouse/app/build/images/icons/${social}.svg`}
          title={`Share on ${social}`}
        />
      </ShareIcon>
    );
  }
};

export default ShareButton;
