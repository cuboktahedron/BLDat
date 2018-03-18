import { expect } from 'chai';
import Analyzer from '../../../src/ts/models/Analyzer';
import AnalyzerResult from '../../../src/ts/models/AnalyzerResult';
import Settings from '../../../src/ts/models/Settings';

describe('Analyzer', function () {
  const settings = new Settings();

  describe('#analyze', function () {
    it(`can analyze edges only and has no loop`, function () {
      const analyzer = new Analyzer(settings);
      const result = analyzer.analyze("B2UB2L2UB2R2B2D'UFLUL'B2RF'U'B'F2");

      expect(result.scramble).to.equal("B2UB2L2UB2R2B2D'UFLUL'B2RF'U'B'F2");
      expect(result.edges).to.eql(["いらかえありるきれく"]);
      expect(result.corners).to.eql([]);
      expect(result.hasParity).to.be.false;
    });

    it(`can analyze edges only and has loop`, function () {
      const analyzer = new Analyzer(settings);
      const result = analyzer.analyze("R2D2U'B2R2DB2R2B2DB'FD'R'DU'FR'U'R2");

      expect(result.scramble).to.equal("R2D2U'B2R2DB2R2B2DB'FD'R'DU'FR'U'R2");
      expect(result.edges).to.eql(["ちか", "ありけせさた", "えにくえ"]);
      expect(result.corners).to.eql([]);
      expect(result.hasParity).to.be.false;
    });

    it(`can analyze corners only and has no loop`, function () {
      const analyzer = new Analyzer(settings);
      const result = analyzer.analyze("B2D'L2UR2B2U'B2F2L'U'L2DL2R2UL'");

      expect(result.scramble).to.equal("B2D'L2UR2B2U'B2F2L'U'L2DL2R2UL'");
      expect(result.edges).to.eql([]);
      expect(result.corners).to.eql(["きえたすりて"]);
      expect(result.hasParity).to.be.false;
    });

    it(`can analyze corners only and has loop`, function () {
      const analyzer = new Analyzer(settings);
      const result = analyzer.analyze("L2F2D'R2F2DL2D2B2U2L'DLR2DUR'B2R'U'");

      expect(result.scramble).to.equal("L2F2D'R2F2DL2D2B2U2L'DLR2DUR'B2R'U'");
      expect(result.edges).to.eql([]);
      expect(result.corners).to.eql(["ねつれさくい", "りし"]);
      expect(result.hasParity).to.be.false;
    });

    it(`can analyze edges and corners and has no parity`, function () {
      const analyzer = new Analyzer(settings);
      const result = analyzer.analyze("U2L2D2L2F2D'R2F2R2D2BDR2UR'BL2U2B'U2F'");

      expect(result.scramble).to.equal("U2L2D2L2F2D'R2F2R2D2BDR2UR'BL2U2B'U2F'");
      expect(result.edges).to.eql(["すちたかにえせ", "さけしぬら"]);
      expect(result.corners).to.eql(["りけ", "るぬさきてす"]);
      expect(result.hasParity).to.be.false;
    });

    it(`can analyze edges and corners and has parity`, function () {
      const analyzer = new Analyzer(settings);
      const result = analyzer.analyze("DR2UB2UR2UF2D'F'U'B'FDL'F'UB2F'U");

      expect(result.scramble).to.equal("DR2UB2UR2UF2D'F'U'B'FDL'F'UB2F'U");
      expect(result.edges).to.eql(["くちにえれし", "かさか"]);
      expect(result.corners).to.eql(["る", "りぬねり", "れらきせ"]);
      expect(result.hasParity).to.be.true;
    });

    it(`corrects u-f face`, function () {
      const analyzer = new Analyzer(settings);
      const result = analyzer.analyze("xyz");

      expect(result.scramble).to.equal("xyz");
      expect(result.edges).to.eql([]);
      expect(result.corners).to.eql([]);
      expect(result.hasParity).to.be.false;
    });

  });
});
