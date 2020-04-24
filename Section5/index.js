const fs = require('fs');

const Fruit = require('./Fruit');
const input = require('./input.json');

try {
    const output = input.map((input) => {
        const id = new Fruit(input).getFruitId();
        const totalFruits = new Fruit(input).getTotalFruits();
        const totalWeights = new Fruit(input).getTotalWeight();
        const fruitCounts = new Fruit(input).getFruitCounts();        
        return {
            id: id,
            total_fruits: totalFruits,
            total_weights: totalWeights,
            fruit_counts: fruitCounts
        };
    });

    const json = JSON.stringify(output);

    fs.writeFileSync('output.json', json, 'utf8');
}
catch(err) {
    console.log('err', err);
};