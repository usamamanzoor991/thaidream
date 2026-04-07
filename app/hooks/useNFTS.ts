import { useQuery } from '@tanstack/react-query';

export function useAgentNFTs(address: string) {
  return useQuery({
    queryKey: ['nfts', address],
    enabled: !!address,
    queryFn: async () => {
      const res = await fetch('/api/nfts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });
      const data = await res.json();

      return data.nfts;
    },
  });
}