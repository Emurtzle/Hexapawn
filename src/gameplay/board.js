class pawn {
    constructor(id, xCoord, yCoord) {
        this.id = id
        this.dead = false
        this.xCoord = xCoord
        this.yCoord = yCoord
    }
}

class square {
    constructor(id, xCoord, yCoord, pawnID) {
        this.id = id
        this.xCoord = xCoord
        this.yCoord = yCoord
        this.pawnID = pawnID
    }

    getID() {
        return this.id
    }

    getCoord() {
        return [this.xCoord, this.yCoord]
    }

    getPawn() {
        return this.pawnID
    }
}

//   Y 0 1 2 
// X 0[0,1,2] row0
// X 1[3,4,5] row1
// X 2[6,7,8] row2
// 9 = empty square

// Player Pawns = 0,1,2
// Enemy Pawns = 3,4,5


class grid {
    constructor() {
        this.squares = []
        this.pPawns = []
        this.ePawns = []

        this.initSquares()
        this.initPawns()
    }

    initSquares() {
        let row0 = []
        let row1 = []
        let row2 = []

        row0.push(new square(0, 0, 0, 9))
        row0.push(new square(1, 1, 0, 9))
        row0.push(new square(2, 2, 0, 9))

        row1.push(new square(3, 0, 1, 9))
        row1.push(new square(4, 1, 1, 9))
        row1.push(new square(5, 2, 1, 9))

        row2.push(new square(6, 0, 2, 9))
        row2.push(new square(7, 1, 2, 9))
        row2.push(new square(8, 2, 2, 9))
    }

    initPawns() {
        this.pPawns.push(new pawn(0, 0, 2))
        this.pPawns.push(new pawn(1, 1, 2))
        this.pPawns.push(new pawn(2, 2, 2))

        this.ePawns.push(new pawn(3, 0, 0))
        this.ePawns.push(new pawn(4, 0, 1))
        this.ePawns.push(new pawn(5, 0, 2))
    }

    // Player Pawns = 0,1,2
    // Enemy Pawns = 3,4,5
    printGrid() {
        let row = 0
        let col = 0
        let str = ""

        console.log("Printing Grid...")

        for (row; row <= 2; row++) {
            str = ""
            for (col; col <=2; col++) {
                
            }
        }


    }
}

class Board {
    constructor() {
        // this.grid = 
        this.win = false
        this.lose = false
        this.pTurn = true
    }
}