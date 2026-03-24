export function createClient() {
  const chain = {
    select: () => chain,
    insert: () => chain,
    update: () => chain,
    delete: () => chain,
    eq: () => chain,
    order: () => chain,
    limit: () => chain,
    single: async () => ({ data: {}, error: null }),
    then: (resolve: any) => resolve({ data: [], error: null })
  };

  return {
    auth: {
      getUser: async () => {
         const token = document.cookie?.split('gymbruh-token=')[1]?.split(';')[0];
         if (!token) return { data: { user: null }, error: null };
         return { data: { user: { id: 'authenticated' } }, error: null };
      },
      getSession: async () => ({ data: { session: null }, error: null }),
      signOut: async () => {
          document.cookie = 'gymbruh-token=; path=/; max-age=0';
          return { error: null };
      },
      signInWithPassword: async ({ email, password}: any) => {
          // Mock login success
          document.cookie = `gymbruh-token=mock-token; path=/; max-age=604800`;
          return { error: null };
      },
      signUp: async ({ email, password}: any) => {
          // Mock signup success
          document.cookie = `gymbruh-token=mock-token; path=/; max-age=604800`;
          return { data: { user: { identities: [{}] } }, error: null };
      }
    },
    from: (table: string) => chain
  } as any;
}
