import { readFileSync } from "fs";
const file = readFileSync("./input", "utf-8");

type CubeColor = "red" | "green" | "blue";

const MAX_RED_CUBES = 12;
const MAX_GREEN_CUBES = 13;
const MAX_BLUE_CUBES = 14;

function solve1(): void {
    let sum_of_game_ids = 0;

    gameLoop: for (const game of file.split("\n")) {
        if (game === "") continue;
        const gameId = game.split(":")[0].replace("Game ", "");
        const subsetsList = game.split(":")[1].split(";");

        for (const subset of subsetsList) {
            const _subset = subset.split(",");
            const redCubes: number = getCubeCount("red", _subset);
            const greenCubes: number = getCubeCount("green", _subset);
            const blueCubes: number = getCubeCount("blue", _subset);

            if (!isValidSubset(redCubes, greenCubes, blueCubes)) {
                continue gameLoop;
            }
        }

        sum_of_game_ids += parseInt(gameId);
    }
   console.log("part 1:", sum_of_game_ids);
}

function isValidSubset(
    redCubes: number,
    greenCubes: number,
    blueCubes: number
): boolean {
    return (
        redCubes <= MAX_RED_CUBES &&
        greenCubes <= MAX_GREEN_CUBES &&
        blueCubes <= MAX_BLUE_CUBES
    );
}

function getCubeCount(color: CubeColor, subset: any): number {
    return parseInt(
        subset
            .filter((cube: string) => cube.includes(color))
            .join("")
            .split(" ")[1] || 0
    );
}

function solve2(): void {
    const contents = file.split("\n").reduce((acc, line) => {
    if (line === "") {
        return acc;
    }

    const max = {
        red: 0,
        blue: 0,
        green: 0,
    }

    line.split(":")[1].split(";").forEach((game) => {
        game.split(",").forEach(dice => {
            const color = dice.trim().split(" ")[1]
            const count = +dice.trim().split(" ")[0]
            max[color] = Math.max(max[color], count);
        });
    });

    const newMax = max['red'] * max['green'] * max['blue'];    
    return newMax  + acc;
    }, 0);

    console.log("part 2:", contents);
}



solve1();
solve2();
