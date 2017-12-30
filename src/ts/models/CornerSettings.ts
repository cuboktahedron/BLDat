import PartData from '../models/PartData'

export default class CornerSettings {
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

  constructor() {
    this.ulb = new PartData( 0, 'あ', 'ulb', true);
    this.urb = new PartData( 2, 'た', 'urb', false);
    this.ulf = new PartData( 6, 'え', 'ulf', false);
    this.urf = new PartData( 8, 'て', 'urf', false);
    this.lub = new PartData( 9, 'な', 'ulb', false);
    this.luf = new PartData(11, 'ね', 'ulf', false);
    this.ldb = new PartData(15, 'に', 'ldb', false);
    this.ldf = new PartData(17, 'ぬ', 'ldf', false);
    this.ful = new PartData(18, 'け', 'ulf', false);
    this.fur = new PartData(20, 'せ', 'urf', false);
    this.fdl = new PartData(24, 'く', 'ldf', false);
    this.fdr = new PartData(26, 'す', 'fdr', false);
    this.ruf = new PartData(27, 'れ', 'urf', false);
    this.rub = new PartData(29, 'ら', 'urb', false);
    this.rdf = new PartData(33, 'る', 'fdr', false);
    this.rdb = new PartData(35, 'り', 'rdb', false);
    this.bur = new PartData(36, 'さ', 'urb', false);
    this.bul = new PartData(38, 'か', 'ulb', false);
    this.bdr = new PartData(42, 'し', 'rdb', false);
    this.bdl = new PartData(44, 'き', 'ldb', false);
    this.dlf = new PartData(45, 'う', 'ldf', false);
    this.drf = new PartData(47, 'つ', 'fdr', false);
    this.dlb = new PartData(51, 'い', 'ldb', false);
    this.drb = new PartData(53, 'ち', 'rdb', false);

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
}
