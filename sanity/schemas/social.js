export default {
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Platform for the socialMedia",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress of the skill from 0% to 100%",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
  ],
}