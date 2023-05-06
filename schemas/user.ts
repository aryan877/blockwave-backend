export const userSchema = {
  name: 'users',
  type: 'document',
  title: 'Users',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'walletAddress',
      type: 'string',
      title: 'Wallet Address',
    },
    {
      name: 'profileImage',
      type: 'string',
      title: 'Profile Image',
    },
    {
      name: 'nftId',
      title: 'NFT Id For Profile Image',
      type: 'number',
    },
    {
      name: 'coverImage',
      type: 'string',
      title: 'Cover Image',
    },
    {
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'posts'}],
        },
      ],
    },
  ],
}
