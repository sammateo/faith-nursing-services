export default function sitemap() {
	return [
		{
			url: "https://faithnursingservicesinc.com",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://faithnursingservicesinc.com/aboutus",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			url: "https://faithnursingservicesinc.com/contactus",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
	];
}
