import PartData from '../models/PartData'

export default interface PartsSettings {
  parts: Object;
  groups: string[];
  bufferParts: PartData;
  nextCandidates: string[];
}
