import { NextRequest, NextResponse } from 'next/server';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { generateSigner, keypairIdentity, publicKey } from '@metaplex-foundation/umi';
import { mplCore, create, fetchCollection } from '@metaplex-foundation/mpl-core';
import bs58 from 'bs58';
import { registerIdentityV1 } from '@metaplex-foundation/mpl-agent-registry/dist/src/generated/identity/instructions/registerIdentityV1';
import { fetchAgentIdentityV1FromSeeds } from '@metaplex-foundation/mpl-agent-registry/dist/src/generated/identity/accounts/agentIdentityV1';

export async function POST(req: NextRequest) {
  const { address , AGENT_REGISTRATION_URI , assetUri , name} = await req.json();  // ← comes from Reown

  const secretKey = bs58.decode(process.env.SOLANA_SECRET_KEY!);
  const umi = createUmi(process.env.RPC_URL!).use(mplCore());
  const myKeypair = umi.eddsa.createKeypairFromSecretKey(secretKey);
  umi.use(keypairIdentity(myKeypair));

  const MASTER_COLLECTION_ADDRESS = "7wo5gGbsmiETqW3o575KHJBBtCpqfA1stnwBXbfT7Hb5";

  const collectionData = await fetchCollection(
    umi, 
    publicKey("7wo5gGbsmiETqW3o575KHJBBtCpqfA1stnwBXbfT7Hb5")
  );

  const agentSigner = generateSigner(umi);

  await create(umi, {
    asset:      agentSigner,
    name:       name,
    uri:        assetUri,
    collection: collectionData,
    owner:      publicKey(address),  // ← NFT goes here
  }).sendAndConfirm(umi, { confirm: { commitment: 'finalized' } });

  console.log("[ 3/4 ] Registering Agent Identity...");
  await new Promise(r => setTimeout(r, 5000));

  await registerIdentityV1(umi, {
    asset:                agentSigner.publicKey,
    collection:           publicKey(MASTER_COLLECTION_ADDRESS),
    agentRegistrationUri: AGENT_REGISTRATION_URI,
  }).sendAndConfirm(umi, { confirm: { commitment: 'finalized' } });
  console.log("        Identity registered ✓\n");

  console.log("[ 4/4 ] Verifying...");
  await new Promise(r => setTimeout(r, 3000));

  const identity = await fetchAgentIdentityV1FromSeeds(umi, {
    asset: agentSigner.publicKey,
  });
  console.log(`        Agent registered : ${identity !== null ? 'YES ✓' : 'NO ✗'}\n`);

  console.log("✅ Factory Agent Minted Successfully!\n");

  return NextResponse.json({
    success: true,
    agentAddress: agentSigner.publicKey,
    explorerUrl: `https://explorer.solana.com/address/${agentSigner.publicKey}?cluster=devnet`,
  });
}