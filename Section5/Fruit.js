'use strict';
const FruitBase = require('./FruitBase');

/**
 * @class
 * @classdesc Fruit Class
 * @extends FruitBase
 */
class Fruit extends FruitBase{

    constructor(input) {
        super(input);
        this.fruitMap = {};
        this.fruitCounts = [];
        this.totalWeight = 0;
    }

    /**
     * Get Total Weight of all fruits
     */
    getTotalWeight() {
        this.getFruits().map((fruit) => {
            this.totalWeight += fruit.weight;
        });
        return this.totalWeight;
    }

    /**
     * Create Fruit HashMap 
     {
         apple: 2,
         pear: 1
     }
     */
    getFruitMap() {
        this.getFruits().map((fruit) => {
            if(this.fruitMap[fruit.type]) {
                this.fruitMap[fruit.type] += 1; 
            }
            else {
                this.fruitMap = {
                    ...this.fruitMap,
                    [fruit.type]: 1
                }
            }
        });
        return this.fruitMap;
    }

    /**
     * Get Fruit Counts
     */
    getFruitCounts() {
        this.getFruitMap();
        Object.entries(this.fruitMap).map((fruit) => {
            this.fruitCounts.push({
                type: fruit[0],
                count: fruit[1]
            })
        });
        return this.fruitCounts;
    }
};

/**
 * @type {FruitBase}
 */
module.exports = Fruit;


