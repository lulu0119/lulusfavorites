import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";
import customElements from "./customElements.json";
import sidebar from "./sidebar.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Lulu's Favorites",
	description: `Welcome to "Lulu's Favorites"! Explore the tech wonders from my browser favorites - coding, hardware, and more. Let's embark on this tech journey together!`,
	head: [["link", { rel: "icon", href: "/1F31F.svg" }]],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		// logo: '/1F31F.svg',
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Favorites", link: "/welcome" },
		],
		search: {
			provider: "local",
		},
		sidebar,
		socialLinks: [
			{ icon: "github", link: "https://github.com/lulu0119" },
			{ icon: "twitter", link: "https://twitter.com/LuluInBloom" },
		],
		footer: {
			message: `Content on "Lulu's Favorites" is under CC BY-NC-SA 4.0.`,
			copyright: "© 2023-present Lulu All Rights Reserved.",
		},
		editLink: {
			pattern: "https://github.com/lulu0119/lulusfavorites/tree/master/docs/:path",
			text: "Edit this page on GitHub",
		},
	},
	lastUpdated: true,
	markdown: {
		config: (md) => {
			md.use(mathjax3);
		},
	},
	vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => customElements.includes(tag),
			},
		},
	},
});
