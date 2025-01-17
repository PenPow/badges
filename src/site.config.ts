export type SiteConfig = {
	author: string;
	title: string;
	description: string;
	lang: string;
	ogLocale: string;
};

export const siteConfig: SiteConfig = {
	author: "Joshua Clements",
	title: "Fancy Badges",
	description: "A maintained fork of Devin's badges",
	lang: "en-GB",
	ogLocale: "en_GB",
};

export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Badges",
		path: "/badges/",
	},
	{
		title: "Contributing",
		path: "/contributing/",
	},
];
