const fs = require('fs');

const Fruit = require('./Fruit');
const input = require('./input.json');

try {
    const output = input.map((i) => {
        const id = new Fruit(i).getFruitId();
        const totalFruits = new Fruit(i).getTotalFruits();
        const totalWeights = new Fruit(i).getTotalWeight();
        const fruitCounts = new Fruit(i).getFruitCounts();        
        return {
            id: id,
            total_fruits: totalFruits,
            total_weights: totalWeights,
            fruit_counts: fruitCounts
        };
    });

    const json = JSON.stringify(output);

    fs.writeFileSync('o.json', json, 'utf8');
}
catch(err) {
    console.log('err', err);
};