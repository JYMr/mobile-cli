/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


// declare module "vue/types/vue" {
//   interface Vue{
//     $router: {
//       currentRoute: {
//         meta: any // This should be set to my new Meta interface rather than the default meta?: any type within vue-router/types/router.d.ts
//       }
//     }
//   }
// }

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
