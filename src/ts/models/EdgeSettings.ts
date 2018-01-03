import PartData from '../models/PartData'

export default class CornerSettings {
  ub: PartData;
  ul: PartData;
  ur: PartData;
  uf: PartData;
  fu: PartData;
  fl: PartData;
  fr: PartData;
  fd: PartData;
  df: PartData;
  dl: PartData;
  dr: PartData;
  db: PartData;
  bu: PartData;
  bl: PartData;
  br: PartData;
  bd: PartData;
  lu: PartData;
  lb: PartData;
  lf: PartData;
  ld: PartData;
  ru: PartData;
  rb: PartData;
  rf: PartData;
  rd: PartData;

  parts: Object;
  
  constructor(edges: Object) {
    this.parts = {};
    for (let p in edges) {
      let pd = edges[p];
      this[p] = new PartData(pd.no, pd.letter, pd.group, pd.isBuffer);
    }

    this.parts[this.ub.no] = this.ub;
    this.parts[this.ul.no] = this.ul;
    this.parts[this.ur.no] = this.ur;
    this.parts[this.uf.no] = this.uf;
    this.parts[this.lu.no] = this.lu;
    this.parts[this.lb.no] = this.lb;
    this.parts[this.lf.no] = this.lf;
    this.parts[this.ld.no] = this.ld;
    this.parts[this.fu.no] = this.fu;
    this.parts[this.fl.no] = this.fl;
    this.parts[this.fr.no] = this.fr;
    this.parts[this.fd.no] = this.fd;
    this.parts[this.ru.no] = this.ru;
    this.parts[this.rb.no] = this.rb;
    this.parts[this.rf.no] = this.rf;
    this.parts[this.rd.no] = this.rd;
    this.parts[this.bu.no] = this.bu;
    this.parts[this.bl.no] = this.bl;
    this.parts[this.br.no] = this.br;
    this.parts[this.bd.no] = this.bd;
    this.parts[this.df.no] = this.df;
    this.parts[this.dl.no] = this.dl;
    this.parts[this.dr.no] = this.dr;
    this.parts[this.db.no] = this.db;
  }
}
