import { queryOptions } from '@tanstack/react-query'

import { api } from './client'

export const auctionQueries = {
  all: () => ['auctions'] as const,

  // Запрос списка с параметрами
  list: (params?: { page?: number; limit?: number }) =>
    queryOptions({
      queryKey: [...auctionQueries.all(), 'list', params],
      queryFn: async ({ signal }) => {
        // openapi-fetch сам подскажет эндпоинты и query-параметры!
        const { data, error } = await api.POST('/auctions/list', {
          signal, // Поддержка отмены запроса при размонтировании
        })

        if (error) throw error
        return data // Тип ответа выводится автоматически из OpenAPI!
      },
    }),

  // Запрос одного аукциона по ID
  detail: (auctionUuid: string) =>
    queryOptions({
      queryKey: [...auctionQueries.all(), 'detail', auctionUuid],
      queryFn: async ({ signal }) => {
        const { data, error } = await api.GET('/auctions/{auctionUuid}', {
          params: { path: { auctionUuid } },
          signal,
        })

        if (error) throw error
        return data
      },
    }),
}
