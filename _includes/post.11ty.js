const html = String.raw;

exports.data = {
  layout: "base",
};

exports.render = ({title, content, description, draft}) => {
  return html`<article>
      <h1>${title}</h1>
      ${description ? html`<strong>${description}</strong></br></br>` : ""}

    ${content}
  </article>`;
};
