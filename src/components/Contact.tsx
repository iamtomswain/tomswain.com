import { site } from "../data/site";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section className="contact" id="contact">
      <h2 className="display contact__name">Tom&nbsp;Swain</h2>
      <div className="contact__divider" />
      <div className="wrap">
        <div className="contact__grid">
          <div className="contact__lead">
            <h3>Let&rsquo;s work together.</h3>
            <p>
              Open to full-time, contract, and freelance opportunities in
              product design, UX leadership, and design engineering.
            </p>
          </div>
          <div className="contact__columns">
            <div>
              <h5>Contact</h5>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <h5>Connect</h5>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div>
              <h5>Location</h5>
              <span>{site.location}</span>
            </div>
          </div>
        </div>
        <div className="contact__footer">
          <span>
            © {year} {site.name}
          </span>
          <span>Designed and built in Chandler, AZ</span>
        </div>
      </div>
    </section>
  );
}
