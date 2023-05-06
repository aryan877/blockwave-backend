export const postSchema = {
  name: 'posts',
  type: 'document',
  title: 'Posts',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'users'}],
    },
    {
      name: 'postImage',
      type: 'string',
      title: 'Post Image',
    },
    {
      name: 'likes',
      type: 'array',
      title: 'Likes',
      of: [
        {
          type: 'reference',
          title: 'User',
          to: [{type: 'users'}],
        },
      ],
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Comment',
          fields: [
            {
              name: 'commenter',
              type: 'reference',
              to: [{type: 'users'}],
              title: 'Commenter',
            },
            {
              name: 'content',
              type: 'text',
              title: 'Content',
            },
            {
              name: 'createdAt',
              type: 'datetime',
              title: 'Created At',
              options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                calendarTodayLabel: 'Today',
              },
            },
          ],
        },
      ],
    },
  ],
}
