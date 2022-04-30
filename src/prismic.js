import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'demowillageio'

export const client = prismic.createClient(repositoryName, {
  // If your repo is private, add an access token
  accessToken: 'MC5ZbXloVXhjQUFDWUFWR1Ay.77-977-9Phfvv705ciQ-77-977-9aibvv71UVC5F77-977-9AjXvv70aLVTvv73vv73vv73vv700QA',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'index',
      path: '/pages/',
    },
  ],
})