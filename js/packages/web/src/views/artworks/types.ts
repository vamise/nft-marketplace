import { Metadata, ParsedAccount } from '@oyster/common';
import { SafetyDepositDraft } from '../../actions/createAuctionManager';
import { ExtendedPack } from '../../types/packs';

export type Item = ExtendedPack | SafetyDepositDraft | ParsedAccount<Metadata>;

export enum ArtworkViewState {
  NFT marketplace = '0',
  Owned = '1',
  Created = '2',
}
