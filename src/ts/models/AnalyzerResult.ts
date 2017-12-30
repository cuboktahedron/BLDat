import CubeColor from '../models/CubeColor'
import PartState from '../models/PartState'

export default class AnalyzerResult {
  scramble: string = '';
  edges: Array<string> = [];
  corners: Array<string> = [];
  states: Array<PartState> = [];

  get hasParity(): boolean {
    const edgeLength = this.edges.map(edge => edge.length).reduce((prev, current) => {
      return prev + current;
    }, 0);
    return (edgeLength % 2 == 1);
  }
}
