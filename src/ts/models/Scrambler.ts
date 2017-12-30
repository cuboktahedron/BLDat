import CubeUtils from '../models/CubeUtils'

export default class Scrambler<T> {
  static initialize() {
    Scrambler.initializeRotationPattern();
  }

  scramble(states: T[], scramble: string): T[] {
    const result = states.concat();
    const paths = CubeUtils.pathsToArray(scramble);
    paths.forEach((path) => {
      this.rotate(result, path);
    })

    return result;
  }

  private rotate(states, path): void {
    const movePatterns = Scrambler.RotationTable[path];
    const prevStatus = states.concat();
    const movePatternsLength = movePatterns.length;
    for (let i = 0; i < movePatternsLength; i++) {
      const movePattern = movePatterns[i];
      states[movePattern.to] = prevStatus[movePattern.from];
    }
  }

  private static RotationTable: object;
  private static initializeRotationPattern(): void {
    Scrambler.RotationTable =
      {
        "U": [
          { "from": 0, "to": 2 },
          { "from": 1, "to": 5 },
          { "from": 2, "to": 8 },
          { "from": 3, "to": 1 },
          { "from": 4, "to": 4 },
          { "from": 5, "to": 7 },
          { "from": 6, "to": 0 },
          { "from": 7, "to": 3 },
          { "from": 8, "to": 6 },
          { "from": 9, "to": 36 },
          { "from": 10, "to": 37 },
          { "from": 11, "to": 38 },
          { "from": 18, "to": 9 },
          { "from": 19, "to": 10 },
          { "from": 20, "to": 11 },
          { "from": 27, "to": 18 },
          { "from": 28, "to": 19 },
          { "from": 29, "to": 20 },
          { "from": 36, "to": 27 },
          { "from": 37, "to": 28 },
          { "from": 38, "to": 29 },
        ],

        "D": [
          { "from": 45, "to": 47 },
          { "from": 46, "to": 50 },
          { "from": 47, "to": 53 },
          { "from": 48, "to": 46 },
          { "from": 49, "to": 49 },
          { "from": 50, "to": 52 },
          { "from": 51, "to": 45 },
          { "from": 52, "to": 48 },
          { "from": 53, "to": 51 },
          { "from": 15, "to": 24 },
          { "from": 16, "to": 25 },
          { "from": 17, "to": 26 },
          { "from": 24, "to": 33 },
          { "from": 25, "to": 34 },
          { "from": 26, "to": 35 },
          { "from": 33, "to": 42 },
          { "from": 34, "to": 43 },
          { "from": 35, "to": 44 },
          { "from": 42, "to": 15 },
          { "from": 43, "to": 16 },
          { "from": 44, "to": 17 },
        ],

        "R": [
          { "from": 27, "to": 29 },
          { "from": 28, "to": 32 },
          { "from": 29, "to": 35 },
          { "from": 30, "to": 28 },
          { "from": 31, "to": 31 },
          { "from": 32, "to": 34 },
          { "from": 33, "to": 27 },
          { "from": 34, "to": 30 },
          { "from": 35, "to": 33 },
          { "from": 2, "to": 42 },
          { "from": 5, "to": 39 },
          { "from": 8, "to": 36 },
          { "from": 20, "to": 2 },
          { "from": 23, "to": 5 },
          { "from": 26, "to": 8 },
          { "from": 47, "to": 20 },
          { "from": 50, "to": 23 },
          { "from": 53, "to": 26 },
          { "from": 42, "to": 47 },
          { "from": 39, "to": 50 },
          { "from": 36, "to": 53 }
        ],

        "L": [
          { "from": 9, "to": 11 },
          { "from": 10, "to": 14 },
          { "from": 11, "to": 17 },
          { "from": 12, "to": 10 },
          { "from": 13, "to": 13 },
          { "from": 14, "to": 16 },
          { "from": 15, "to": 9 },
          { "from": 16, "to": 12 },
          { "from": 17, "to": 15 },
          { "from": 0, "to": 18 },
          { "from": 3, "to": 21 },
          { "from": 6, "to": 24 },
          { "from": 18, "to": 45 },
          { "from": 21, "to": 48 },
          { "from": 24, "to": 51 },
          { "from": 45, "to": 44 },
          { "from": 48, "to": 41 },
          { "from": 51, "to": 38 },
          { "from": 44, "to": 0 },
          { "from": 41, "to": 3 },
          { "from": 38, "to": 6 },
        ],

        "F": [
          { "from": 18, "to": 20 },
          { "from": 19, "to": 23 },
          { "from": 20, "to": 26 },
          { "from": 21, "to": 19 },
          { "from": 22, "to": 22 },
          { "from": 23, "to": 25 },
          { "from": 24, "to": 18 },
          { "from": 25, "to": 21 },
          { "from": 26, "to": 24 },
          { "from": 6, "to": 27 },
          { "from": 7, "to": 30 },
          { "from": 8, "to": 33 },
          { "from": 27, "to": 47 },
          { "from": 30, "to": 46 },
          { "from": 33, "to": 45 },
          { "from": 47, "to": 17 },
          { "from": 46, "to": 14 },
          { "from": 45, "to": 11 },
          { "from": 17, "to": 6 },
          { "from": 14, "to": 7 },
          { "from": 11, "to": 8 }
        ],

        "B": [
          { "from": 36, "to": 38 },
          { "from": 37, "to": 41 },
          { "from": 38, "to": 44 },
          { "from": 39, "to": 37 },
          { "from": 40, "to": 40 },
          { "from": 41, "to": 43 },
          { "from": 42, "to": 36 },
          { "from": 43, "to": 39 },
          { "from": 44, "to": 42 },
          { "from": 0, "to": 15 },
          { "from": 1, "to": 12 },
          { "from": 2, "to": 9 },
          { "from": 15, "to": 53 },
          { "from": 12, "to": 52 },
          { "from": 9, "to": 51 },
          { "from": 53, "to": 29 },
          { "from": 52, "to": 32 },
          { "from": 51, "to": 35 },
          { "from": 29, "to": 0 },
          { "from": 32, "to": 1 },
          { "from": 35, "to": 2 }
        ],

        "E": [
          { "from": 21, "to": 30 },
          { "from": 22, "to": 31 },
          { "from": 23, "to": 32 },
          { "from": 30, "to": 39 },
          { "from": 31, "to": 40 },
          { "from": 32, "to": 41 },
          { "from": 39, "to": 12 },
          { "from": 40, "to": 13 },
          { "from": 41, "to": 14 },
          { "from": 12, "to": 21 },
          { "from": 13, "to": 22 },
          { "from": 14, "to": 23 },
        ],

        "M": [
          { "from": 1, "to": 19 },
          { "from": 4, "to": 22 },
          { "from": 7, "to": 25 },
          { "from": 19, "to": 46 },
          { "from": 22, "to": 49 },
          { "from": 25, "to": 52 },
          { "from": 46, "to": 43 },
          { "from": 49, "to": 40 },
          { "from": 52, "to": 37 },
          { "from": 43, "to": 1 },
          { "from": 40, "to": 4 },
          { "from": 37, "to": 7 },
        ],

        "S": [
          { "from": 3, "to": 28 },
          { "from": 4, "to": 31 },
          { "from": 5, "to": 34 },
          { "from": 28, "to": 50 },
          { "from": 31, "to": 49 },
          { "from": 34, "to": 48 },
          { "from": 50, "to": 16 },
          { "from": 49, "to": 13 },
          { "from": 48, "to": 10 },
          { "from": 16, "to": 3 },
          { "from": 13, "to": 4 },
          { "from": 10, "to": 5 },
        ],
      }

      const tbl = Scrambler.RotationTable;
      for (let p in Scrambler.RotationTable) {
        tbl[p + "'"] = Scrambler.RotationTable[p].map((d) => {
        return {
          "from": d.to,
          "to": d.from,
        }
      });
    }

    tbl["Uw"] = tbl["U"].concat(tbl["E'"]);
    tbl["Dw"] = tbl["D"].concat(tbl["E"]);
    tbl["Rw"] = tbl["R"].concat(tbl["M'"]);
    tbl["Lw"] = tbl["L"].concat(tbl["M"]);
    tbl["Fw"] = tbl["F"].concat(tbl["S"]);
    tbl["Bw"] = tbl["B"].concat(tbl["S'"]);
    tbl["Uw'"] = tbl["U'"].concat(tbl["E"]);
    tbl["Dw'"] = tbl["D'"].concat(tbl["E'"]);
    tbl["Rw'"] = tbl["R'"].concat(tbl["M"]);
    tbl["Lw'"] = tbl["L'"].concat(tbl["M'"]);
    tbl["Fw'"] = tbl["F'"].concat(tbl["S'"]);
    tbl["Bw'"] = tbl["B'"].concat(tbl["S"]);
    tbl["x"] = tbl["L'"].concat(tbl["M'"], tbl["R"]);
    tbl["y"] = tbl["U"].concat(tbl["E'"], tbl["D'"]);
    tbl["z"] = tbl["F"].concat(tbl["S"], tbl["B'"]);
    tbl["x'"] = tbl["L"].concat(tbl["M"], tbl["R'"]);
    tbl["y'"] = tbl["U'"].concat(tbl["E"], tbl["D"]);
    tbl["z'"] = tbl["F'"].concat(tbl["S'"], tbl["B"]);
  }
}

Scrambler.initialize();
