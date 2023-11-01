import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// export default ({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");
//   console.log(env)
//   return defineConfig({
//     define: {
//       "process.env": env,
//       "process.env.VITE_SERVER_SERVICE_ING":process.env.VITE_SERVER_SERVICE_ING,
//     },
//     plugins: [react()],    
//   });
// }



export default defineConfig(({ mode }) => {

  const env = loadEnv(
    'all',
    process.cwd(),
    ''
  )
  console.log("env", env)
  const processEnvValues = {
    'process.env': Object.entries(env).reduce(
      (prev, [key, val]) => {
        return {
          ...prev,
          [key]: val,
        }
      },
      {},
    )
  }

  return {
    plugins: [react()],
    define: processEnvValues
  }
})