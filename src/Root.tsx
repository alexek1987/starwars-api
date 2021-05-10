import React from 'react'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { API_URL } from '@config/api'
import { AppClientProvider } from '@client/useAppClient'
import { Client } from '@client/Client'

import { App } from './App'

const queryClient = new QueryClient()

const appClient = new Client(axios.create({ baseURL: API_URL }))

const Root = () => (
  <QueryClientProvider client={queryClient}>
    <AppClientProvider client={appClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppClientProvider>
  </QueryClientProvider>
)
export default Root
