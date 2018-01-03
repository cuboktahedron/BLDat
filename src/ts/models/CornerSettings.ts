import PartData from '../models/PartData'
import PartsSettings from '../models/PartsSettings'

export default class CornerSettings implements PartsSettings {
  ulb: PartData;
  urb: PartData;
  ulf: PartData;
  urf: PartData;
  ful: PartData;
  fur: PartData;
  fdl: PartData;
  fdr: PartData;
  drf: PartData;
  dlf: PartData;
  drb: PartData;
  dlb: PartData;
  bul: PartData;
  bur: PartData;
  bdl: PartData;
  bdr: PartData;
  lub: PartData;
  luf: PartData;
  ldb: PartData;
  ldf: PartData;
  rub: PartData;
  ruf: PartData;
  rdb: PartData;
  rdf: PartData;

  parts: {};

  constructor(corners: Object) {
    this.parts = {};
    for (let p in corners) {
      let pd = corners[p];
      this[p] = new PartData(pd.no, pd.letter, pd.group, pd.isBuffer);
    }

    this.parts = {};
    this.parts[this.ulb.no] = this.ulb;
    this.parts[this.urb.no] = this.urb;
    this.parts[this.ulf.no] = this.ulf;
    this.parts[this.urf.no] = this.urf;
    this.parts[this.lub.no] = this.lub;
    this.parts[this.luf.no] = this.luf;
    this.parts[this.ldb.no] = this.ldb;
    this.parts[this.ldf.no] = this.ldf;
    this.parts[this.ful.no] = this.ful;
    this.parts[this.fur.no] = this.fur;
    this.parts[this.fdl.no] = this.fdl;
    this.parts[this.fdr.no] = this.fdr;
    this.parts[this.ruf.no] = this.ruf;
    this.parts[this.rub.no] = this.rub;
    this.parts[this.rdf.no] = this.rdf;
    this.parts[this.rdb.no] = this.rdb;
    this.parts[this.bur.no] = this.bur;
    this.parts[this.bul.no] = this.bul;
    this.parts[this.bdr.no] = this.bdr;
    this.parts[this.bdl.no] = this.bdl;
    this.parts[this.dlf.no] = this.dlf;
    this.parts[this.drf.no] = this.drf;
    this.parts[this.dlb.no] = this.dlb;
    this.parts[this.drb.no] = this.drb;
  }

  get groups(): string[] {
    return ['fdr', 'ldb', 'ldf', 'rdb', 'ulb', 'ulf', 'urb', 'urf'];
  }

  get nextCandidates(): string[] {
    return ['rdf', 'rub', 'rdb', 'ruf', 'luf', 'fdl', 'ulb'];
  }

  get bufferParts(): PartData {
    for (let p in this.parts) {
      if (this.parts[p].isBuffer) {
        return this.parts[p];
      }
    }

    return null;
  }
}
