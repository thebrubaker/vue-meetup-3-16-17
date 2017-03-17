import catalog from './catalog'

export default [
  {
    path: '/catalog',
    name: 'catalog',
    component: require('layouts/base.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: require('pages/products/index.vue'),
      },
      {
        path: 'products/:id',
        name: 'product.edit',
        props: true,
        component: require('pages/products/edit.vue')
      },
      {
        path: 'categories',
        name: 'categories',
      }
    ]
  }
]
