import CubeColor from '../models/CubeColor'
import AnalyzerResult from '../models/AnalyzerResult'
import PartState from '../models/PartState'
import Settings from '../models/Settings'
import Scrambler from '../models/Scrambler';
import CubeUtils from 'ts/models/CubeUtils';
import PartData from 'ts/models/PartData';

export default class Analyzer {
  constructor(public settings: Settings) {
  }

  analyze(scramble: string): AnalyzerResult {
    const result = new AnalyzerResult();

    result.states = this.scrambleParts(scramble);
    result.scramble = scramble;
    result.edges = this.analyzeEdges(result.states);
    result.corners = this.analyzeCorners(result.states);

    return result;
  }

  private scrambleParts(scramble: string): PartState[] {
    const states: PartState[] = [];
    ['u', 'l', 'f', 'r', 'b', 'd'].forEach((face, index) => {
      for (let i = 0; i < 9; i++) {
        const state = new PartState(index * 9 + i, this.settings.colors[face]);
        states.push(state);
      }
    });

    const scrambler = new Scrambler<PartState>();
    return scrambler.scramble(states, scramble);
  }

  private analyzeEdges(states: PartState[]): string[] {
    const analyzedParts: {} = this.analyzeAlreadyCorrectEdgeParts(states);
    analyzedParts['fd'] = true;
    const edgess: string[] = [];
    let edges = "";
    let state = states[46];
    let partData: PartData = this.settings.edges.parts[state.no];
    
    if (partData.no !== 25 && partData.no !== 46) { // 25 adn 46 are buffer parts
      analyzedParts[partData.group] = true;
      edges += partData.letter;
      state = states[partData.no];
      partData = this.settings.edges.parts[state.no];
    }

    while(true) {
      if (analyzedParts[partData.group]) {
        // buffer
        if (edges.length > 0) {
          edgess.push(edges);
          edges = "";
        }
        
        const nextCandidates: string[] = [
          'ub', 'ul', 'ur', 'uf',
          'fu', 'fl', 'fr',
          'lb', 'lf', 'ld', 'ru',
          'rb', 'rf', 'rd', 'rb',
          'db', 'dl', 'dr',
          'bu', 'bl', 'br', 'bd',
        ].filter((parts) => {
          const nextCandidate: PartData = this.settings.edges[parts];
          return !analyzedParts[nextCandidate.group];
        });

        if (nextCandidates.length === 0) {
          break;
        } else {
          const firstPartDataOfLoop: PartData = this.settings.edges[nextCandidates[0]];
          state = states[firstPartDataOfLoop.no];
          edges += firstPartDataOfLoop.letter;
          partData = this.settings.edges.parts[state.no];
        }
      } else {
        edges += partData.letter;
        analyzedParts[partData.group] = true;
        state = states[partData.no];
        partData = this.settings.edges.parts[state.no];
      }
    }

    return edgess;
  }

  analyzeAlreadyCorrectEdgeParts(states: {}): {} {
    const analyzedParts = {};

    ['bd', 'fd', 'fr', 'lb', 'ld', 'lf', 'rb', 'rd', 'ub', 'uf', 'ul', 'ur'].forEach((group) => {
      const from: PartData = this.settings.edges[group];
      const to: PartData = this.settings.edges.parts[states[from.no].no];

      if (from.no === to.no) {
        analyzedParts[from.group] = true;
      }
    });

    return analyzedParts;
  }

  private analyzeCorners(states: PartState[]): string[] {
    const analyzedParts: {} = this.analyzeAlreadyCorrectCornerParts(states);
    analyzedParts['ulb'] = true;
    const cornerss: string[] = [];
    let corners = "";
    let state = states[0];
    let partData: PartData = this.settings.corners.parts[state.no];
    
    if (partData.no !== 0 && partData.no !== 9 && partData.no !== 38) { // 0 adn 9 and 38 are buffer parts
      analyzedParts[partData.group] = true;
      corners += partData.letter;
      state = states[partData.no];
      partData = this.settings.corners.parts[state.no];
    }

    while(true) {
      if (analyzedParts[partData.group]) {
        // buffer
        if (corners.length > 0) {
          cornerss.push(corners);
          corners = "";
        }
        
        const nextCandidates: string[] = [
          'rdf', 'rub', 'rdb', 'ruf', 'luf', 'fdl', 'ulb',
        ].filter((parts) => {
          const nextCandidate: PartData = this.settings.corners[parts];
          return !analyzedParts[nextCandidate.group];
        });

        if (nextCandidates.length === 0) {
          break;
        } else {
          const firstPartDataOfLoop: PartData = this.settings.corners[nextCandidates[0]];
          state = states[firstPartDataOfLoop.no];
          corners += firstPartDataOfLoop.letter;
          partData = this.settings.corners.parts[state.no];
        }
      } else {
        corners += partData.letter;
        analyzedParts[partData.group] = true;
        state = states[partData.no];
        partData = this.settings.corners.parts[state.no];
      }
    }

    return cornerss;
  }

  analyzeAlreadyCorrectCornerParts(states: {}): {} {
    const analyzedParts = {};

    ['fdr', 'ldb', 'ldf', 'rdb', 'ulb', 'ulf', 'urb', 'urf'].forEach((group) => {
      const from: PartData = this.settings.corners[group];
      const to: PartData = this.settings.corners.parts[states[from.no].no];

      if (from.no === to.no) {
        analyzedParts[from.group] = true;
      }
    });

    return analyzedParts;
  }
}
