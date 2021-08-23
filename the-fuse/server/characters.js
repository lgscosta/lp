function Character(tag, attribute1, attribute2, attribute3, attribute4, exceptions) {
    this.tag = tag;
    this.attribute1 = attribute1;
    this.attribute2 = attribute2;
    this.attribute3 = attribute3;
    this.attribute4 = attribute4;
    this.exceptions = exceptions;
}

var characters = [
    // 1
    new Character("The Mother", 65, 20, 100, 85, [18]),

    // 2
    new Character("The Noise", 50, 60, 10, 45, [3,12,20]),
    
    // 3
    new Character("The Surfer", 40, 60, 15, 90, [3,17,20]),
    
    // 4
    new Character("The Dancer", 75, 40, 60, 75, [3,20]),
    
    // 5
    new Character("The Optimizer", 80, 90, 80, 70, []),
    
    // 6
    new Character("The Rookie", 50, 100, 70, 80, []),
    
    // 7
    new Character("The Whisper", 60, 80, 90, 45, [9]),
    
    // 8
    new Character("The Transformer", 80, 70, 90, 50, [8,19]),
    
    // 9
    new Character("The Intruder", 80, 70, 70, 40, [12,18]),
    
    // 10
    new Character("The Oracle", 60, 95, 100, 70, [9]),
    
    // 11
    new Character("The Witcher", 85, 75, 100, 65, [10]),
    
    // 12
    new Character("The Hunter", 60, 30, 30, 70, [4]),
    
    // 13
    new Character("The Boss", 75, 70, 50, 40, [3]),
    
    // 14
    new Character("The Aunt", 60, 70, 95, 85, [1]),
    
    // 15
    new Character("The Poisson", 80, 35, 65, 80, []),
    
    // 16
    new Character("The WHO", 50, 50, 50, 50, [22,23]),
    
    // 17
    new Character("The Ruler", 45, 35, 75, 90, []),
    
    // 18
    new Character("The Virtual Machine", 85, 70, 75, 75, []),
    
    // 19
    new Character("The Silk Touch", 40, 70, 60, 50, [1]),
    
    // 20
    new Character("The Preppy", 75, 70, 65, 85, []),
    
    // 21
    new Character("The Runaway", 85, 35, 90, 80, [3]),
    
    // 22
    new Character("The Siren", 100, 60, 80, 70, [2,5,8,12,15,18,22]),
    
    // 23
    new Character("The Guardian", 70, 95, 65, 80, [2,5,6,8,9,12,15,18,22]),
    
    // 24
    new Character("The SadBoy", 70, 70, 90, 50, [5,6,12,15,18,19,22])
]

