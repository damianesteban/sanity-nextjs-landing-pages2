export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6000e399e49a4521128aa1fc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-63ys68iu',
                  apiId: '110a3575-39f1-42cf-acb1-547e2ccea09d'
                },
                {
                  buildHookId: '6000e399497efd1dc5593b01',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-whx37hhi',
                  apiId: '8d081269-0b99-49e9-b6dd-365508b59c55'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/damianesteban/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-whx37hhi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
