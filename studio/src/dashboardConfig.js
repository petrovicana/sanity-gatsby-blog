export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6110eac2217563182a6a0158",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-jwoe824r",
                  apiId: "e779fefe-9bcf-4c07-b2da-db61714e29a6",
                },
                {
                  buildHookId: "6110eac21ec726a430b9c406",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5siqqecm",
                  apiId: "7ccafa33-3ccb-4498-afe0-9f82181d1bc0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/petrovicana/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-5siqqecm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
