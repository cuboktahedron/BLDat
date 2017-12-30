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

  parts: {};
  
  constructor() {
    this.ub = new PartData( 1, 'あ', 'ub', false);
    this.ul = new PartData( 3, 'か', 'ul', false);
    this.ur = new PartData( 5, 'さ', 'ur', false);
    this.uf = new PartData( 7, 'え', 'uf', false);
    this.lu = new PartData(10, 'な', 'ul', false);
    this.lb = new PartData(12, 'に', 'lb', false);
    this.lf = new PartData(14, 'ね', 'lf', false);
    this.ld = new PartData(16, 'ぬ', 'ld', false);
    this.fu = new PartData(19, 'て', 'uf', false);
    this.fl = new PartData(21, 'け', 'lf', false);
    this.fr = new PartData(23, 'せ', 'fr', false);
    this.fd = new PartData(25, 'つ', 'fd', false);
    this.ru = new PartData(28, 'ら', 'ur', false);
    this.rf = new PartData(30, 'れ', 'fr', false);
    this.rb = new PartData(32, 'り', 'rb', false);
    this.rd = new PartData(34, 'る', 'rd', false);
    this.bu = new PartData(37, 'た', 'ub', false);
    this.br = new PartData(39, 'し', 'rb', false);
    this.bl = new PartData(41, 'き', 'lb', false);
    this.bd = new PartData(43, 'ち', 'bd', false);
    this.df = new PartData(46, 'う', 'fd', true);
    this.dl = new PartData(48, 'く', 'ld', false);
    this.dr = new PartData(50, 'す', 'rd', false);
    this.db = new PartData(52, 'い', 'bd', false);

    this.parts = {};
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
