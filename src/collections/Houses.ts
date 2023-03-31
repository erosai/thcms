import { CollectionConfig } from "payload/types";

const Houses: CollectionConfig = {
  slug: "houses",
  admin: {
    useAsTitle: "projectName",
  },
  fields: [
    {
      name: "projectName",
      type: "text",
      label: "Project Name",
      required: true,
    },
    {
      name: "projectDescription",
      type: "richText",
      label: "Project Description",
      required: true,
    },
    {
      name: "size",
      type: "number",
      label: "Size",
      required: true,
    },
    {
      name: "numberOfRooms",
      type: "number",
      label: "Number of Rooms",
      required: true,
    },
    {
      name: "numberOfBathrooms",
      type: "number",
      label: "Number of Bathrooms",
      required: true,
    },
    {
      name: "image",
      label: "Main Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "galleryImages",
      type: "array",
      label: "Gallery Images",
      minRows: 1,
      maxRows: 10,
      admin: {
        position: "sidebar",
      },
      labels: {
        singular: "Image",
        plural: "Images",
      },
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "alt",
          type: "text",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

export default Houses;
