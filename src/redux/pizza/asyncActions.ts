import axios from 'axios'
import identity from 'lodash/identity'
import pickBy from 'lodash/pickBy'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Pizza, SearchPizzaParams } from './types'

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params
    console.log(params, 4444)
    const { data } = await axios.get<Pizza[]>(`https://6380ae3a8efcfcedac0bed13.mockapi.io/items`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 12,
          category,
          sortBy,
          order,
          search
        },
        identity
      )
    })

    return data
  }
)
