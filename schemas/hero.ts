


const hero = {
  name: "hero",
  title: "hero",
  type: "document",
  fields: [
    {
        name: "welcomeMessage",
        title: "Welcome Message",
        type: "string",
      },
      {
        name: "heroImage",
        title: "Hero Image",
        type: "image",
        description: "Upload a hero picture",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      },
  ],
};

export default hero;