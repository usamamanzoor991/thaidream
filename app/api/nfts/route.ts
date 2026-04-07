import { NextRequest, NextResponse } from 'next/server';

const MASTER_COLLECTION_ADDRESS = "7wo5gGbsmiETqW3o575KHJBBtCpqfA1stnwBXbfT7Hb5";

export async function POST(req: NextRequest) {
  const { address } = await req.json();

  // DAS API — getAssetsByOwner
  const res = await fetch(process.env.HELIUS_RPC_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'get-assets',
      method: 'getAssetsByOwner',
      params: {
        ownerAddress: address,
        page: 1,
        limit: 100,
      },
    }),
  });

  const { result } = await res.json();

  console.log("Result : ",result);
  

  if(result.items.length === 0){
    return NextResponse.json({ nfts: [] });
  }

  // Filter only your collection's NFTs
  const myAgents = result.items.filter(
    (asset: any) => asset.grouping?.find(
      (g: any) => g.group_key === 'collection' && g.group_value === MASTER_COLLECTION_ADDRESS
    )
  );

  const nfts = myAgents.map((asset: any) => ({
    address:     asset.id,
    name:        asset.content?.metadata?.name,
    image:       asset.content?.links?.image,
    description: asset.content?.metadata?.description,
    attributes:  asset.content?.metadata?.attributes,
  }));

  return NextResponse.json({ nfts });
}