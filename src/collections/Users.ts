import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "lastName",
          type: "text",
        },
      ],
    },
    {
      name: "roles",
      type: "select",
      label : "User Role(s)", 
      hasMany: true,
      defaultValue: ["public"],
      required: true,
      access: {
        read: () => true,
        update: () => true ,
        create: () => true,
      },
      options: ["admin", "editor" ],
    },
  ],
};

export default Users;
