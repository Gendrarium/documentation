import { E } from '@endo/eventual-send';
import bundleSource from '@endo/bundle-source';

import url from 'url';
import { resolve as importMetaResolve } from 'import-meta-resolve';

import { makeZoeKit } from '@agoric/zoe';
import { makeFakeVatAdmin } from '@agoric/zoe/tools/fakeVatAdmin.js';

export const setupZCFTest = async (issuerKeywordRecord, terms) => {
  const contractUrl = await importMetaResolve(
    './zcfTesterContract.js',
    import.meta.url,
  );
  const contractRoot = url.fileURLToPath(contractUrl);
  /** @type {ContractFacet} */
  let zcf;
  const setZCF = jig => {
    zcf = jig.zcf;
  };
  // The contract provides the `zcf` via `setTestJig` upon `start`.
  const { zoeService } = makeZoeKit(makeFakeVatAdmin(setZCF).admin);
  const feePurse = E(zoeService).makeFeePurse();
  const zoe = E(zoeService).bindDefaultFeePurse(feePurse);
  const bundle = await bundleSource(contractRoot);
  const installation = await E(zoe).install(bundle);
  const { creatorFacet, instance } = await E(zoe).startInstance(
    installation,
    issuerKeywordRecord,
    terms,
  );
  return { zoe, zcf, instance, installation, creatorFacet };
};
