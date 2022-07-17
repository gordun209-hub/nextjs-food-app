import 'tailwindcss/tailwind.css'
import { withTRPC } from '@trpc/next'

import { AppType } from 'next/dist/shared/lib/utils'
import { AppRouter } from '@backend/routers/_app.router'

import { ChakraProvider } from '@chakra-ui/react'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `http://localhost:3000/api/trpc`
    return {
      url,
    }
  },
  ssr: false,
})(MyApp)
