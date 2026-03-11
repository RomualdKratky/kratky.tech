import { Github, Linkedin, Mail } from "lucide-react";
import { FaXing } from "react-icons/fa";
import { siteConfig } from "@/data/site";

const linkClass = "text-muted hover:text-foreground transition-colors";

interface SocialLinksProps {
  /** Icon size in pixels. Defaults to 18. */
  size?: number;
  /** Show the email icon linking to the personal email address. */
  showEmail?: boolean;
  /** Show the XING icon. Useful on DE-locale pages. */
  showXing?: boolean;
}

export function SocialLinks({
  size = 18,
  showEmail = false,
  showXing = false,
}: SocialLinksProps) {
  return (
    <div className="flex items-center gap-4">
      <a
        href={siteConfig.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="GitHub"
      >
        <Github size={size} />
      </a>
      <a
        href={siteConfig.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="LinkedIn"
      >
        <Linkedin size={size} />
      </a>
      {showEmail && (
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className={linkClass}
          aria-label="Email"
        >
          <Mail size={size} />
        </a>
      )}
      {showXing && (
        <a
          href={siteConfig.social.xing}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label="XING"
        >
          <FaXing size={size} />
        </a>
      )}
    </div>
  );
}
