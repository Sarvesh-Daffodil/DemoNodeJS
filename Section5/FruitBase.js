'use strict';

/**
 * @class
 * @classdesc FruitBase Class
 */
class FruitBase {
    
    constructor(input) {
        this.input = input;
        this.id = input.id;
        this.maxWeight = input.max_weight;
        this.weight = 0;
        this.fruits = [];
        this.setFruits(input.contents);
    };

    /**
     * Set Fruits
     * @param {array} contents 
     */
    setFruits(contents) {
        contents.map((fruit) => {
            this.weight += fruit.weight;
        });
        if(!contents.length) {
            throw Error('No Fruit is available');
        }
        else if(this.weight > this.maxWeight) {
            throw Error('Weight Max permissible limit cross');    
        }
        this.fruits = contents;
    }

    /**
     * Get Fruit Id
     */
    getFruitId() {
        return this.id;
    };

    /**
     * Get Fruit Max Weight
     */
    getFruitMaxWeight() {
        return this.maxWeight;
    };

    /**
     * Get All Fruits
     */
    getFruits() {
        return this.fruits;
    };

    /**
     * Get Total Fruits 
     */
    getTotalFruits() {
        return this.fruits.length;
    };
};

/**
 * @type {FruitBase}
 */
module.exports = FruitBase;


