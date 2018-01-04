import CubeColor from '../models/CubeColor'
import AnalyzerResult from '../models/AnalyzerResult'
import PartState from '../models/PartState'
import Settings from '../models/Settings'
import Scrambler from '../models/Scrambler';
import CubeUtils from '../models/CubeUtils';
import PartData from '../models/PartData';
import PartsSettings from '../models/PartsSettings';

export default class Analyzer {
  constructor(public settings: Settings) {
  }

  analyze(scramble: string): AnalyzerResult {
    const result = new AnalyzerResult();

    result.states = this.scrambleParts(scramble);
    result.scramble = scramble;
    result.edges = this.analyzeParts(result.states, this.settings.edges);
    result.corners = this.analyzeParts(result.states, this.settings.corners);

    return result;
  }

  private scrambleParts(scramble: string): PartState[] {
    const completeStates: PartState[] = [];
    ['u', 'l', 'f', 'r', 'b', 'd'].forEach((face, index) => {
      for (let i = 0; i < 9; i++) {
        const state = new PartState(index * 9 + i, this.settings.colors[face]);
        completeStates.push(state);
      }
    });

    const scrambler = new Scrambler<PartState>();
    let states: PartState[] = scrambler.scramble(completeStates, scramble);

    // correct u-face center parts position
    while (true) {
      const uCenter = states[4];
      if (uCenter.no === 4) { // 4 is u-center parts
        break;
      }

      if (uCenter.no === 22) { // 22 is f-center parts
        states = scrambler.scramble(states, "z");
      } else {
        states = scrambler.scramble(states, "x");
      }
    }

    // correct f-face center parts position
    while (true) {
      const fCenter = states[22];
      if (fCenter.no === 22) {
        break;
      }

      states = scrambler.scramble(states, "y");
    }

    return states;
  }

  private analyzeParts(states: PartState[], settings: PartsSettings): string[] {
    const analyzedParts: {} = this.analyzeAlreadyCorrectParts(states, settings);
    analyzedParts[settings.bufferParts.group] = true;
    const results: string[] = [];
    let result = "";
    let state = states[settings.bufferParts.no];
    let partData: PartData = settings.parts[state.no];

    while(true) {
      if (analyzedParts[partData.group]) {
        // loop end
        
        if (result.length > 0) {
          results.push(result);
          result = "";
        }
        
        const nextCandidates: string[] = settings.nextCandidates.filter((parts) => {
          const nextCandidate: PartData = settings[parts];
          return !analyzedParts[nextCandidate.group];
        });

        if (nextCandidates.length === 0) {
          break;
        } else {
          // other loop exists
          const firstPartDataOfLoop: PartData = settings[nextCandidates[0]];
          state = states[firstPartDataOfLoop.no];
          result += firstPartDataOfLoop.letter;
          partData = settings.parts[state.no];
        }
      } else {
        result += partData.letter;
        analyzedParts[partData.group] = true;
        state = states[partData.no];
        partData = settings.parts[state.no];
      }
    }

    return results;
  }

  private analyzeAlreadyCorrectParts(states: {}, settings: PartsSettings): {} {
    const analyzedParts = {};

    settings.groups.forEach((group) => {
      const from: PartData = settings[group];
      const to: PartData = settings.parts[states[from.no].no];
      if (from.no === to.no) {
        analyzedParts[from.group] = true;
      }
    });

    return analyzedParts;
  }
}
