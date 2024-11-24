export const queryKeys = {
  todos: {
    all: ["todos"] as const,
    lists: () => [...queryKeys.todos.all, "list"] as const,
    list: (id: string) => [...queryKeys.todos.lists(), id] as const,
    details: () => [...queryKeys.todos.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.todos.details(), id] as const,
  },
  users: {
    all: ["users"] as const,
    lists: () => [...queryKeys.users.all, "list"] as const,
    list: (id: string) => [...queryKeys.users.lists(), id] as const,
    details: () => [...queryKeys.users.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.users.details(), id] as const,
  },
} as const;

// 타입 추론을 위한 헬퍼 타입
type QueryKeys = typeof queryKeys;

// 사용 예시:
/*
// 모든 할일 목록 조회
useQuery({ 
  queryKey: queryKeys.todos.all,
  queryFn: () => api.get('/todos')
})

// 특정 할일 상세 조회
useQuery({ 
  queryKey: queryKeys.todos.detail('123'),
  queryFn: () => api.get(`/todos/123`)
})

// 유저 목록 조회
useQuery({ 
  queryKey: queryKeys.users.lists(),
  queryFn: () => api.get('/users')
})
*/
