import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_aZmHnZZG.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Content - this is just text</p>";

				const frontmatter = {"title":"Second Post","pubDate":"2024-02-28T00:00:00.000Z","author":"author","image":"image","tags":["tech","dancing","parenting","music"],"slug":"second-post"};
				const file = "C:/Users/rsegura/github/contemplador/src/content/blog/second-post.md";
				const url = undefined;
				function rawContent() {
					return "\r\nContent - this is just text";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
