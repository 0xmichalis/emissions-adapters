import { manualCliff, manualLinear } from "../adapters/manual";
import { Protocol } from "../types/adapters";
import { periodToSeconds } from "../utils/time";

const start = 1658491200;
const gmx: Protocol = {
  "XVIX and Gambit migration": manualCliff(start, 6000000),
  //"Uniswap liquidity seed": manualCliff(start, 2000000),
  //"vesting from Escrowed GMX rewards": manualCliff(start, 2000000),
  //"floor price fund": manualCliff(start, 2000000),
  // "marketing, partnerships and community developers": manualCliff(
  //   start,
  //   1000000,
  // ),
  contributors: manualLinear(start, start + periodToSeconds.year * 2, 250000),
  meta: {
    notes: [
      "Uniswap liquidity seed, vesting from Escrowed GMX rewards, floor price fund and marketing, partnerships and community developer allocations are all released depending on requirements at the time. Here we have excluded them from analytics.",
    ],
    sources: ["https://gmxio.gitbook.io/gmx/tokenomics"],
    token: "arbitrum:0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
    protocolIds: ["337"],
  },
  sections: {
    // TBC
  },
};
export default gmx;
