const countPairs = (n, ar) => {
    // return socks by color
    const socksByColor = ar.reduce((item , color) => {
        console.log(item, "item");
        console.log(color, "color");
        if(!item[color]){
            item[color] = 0;
        }
        item[color] = item[color] + 1;
        return item;
    }, {});

    // count total pairs of socks
    const totalPairsNum = Object.keys(socksByColor).reduce((count, sockColor) => {
        const sockCount = socksByColor[sockColor];
        const pairsCount = Math.floor(sockCount/2);
        return count + pairsCount;
    }, 0);
    console.log(totalPairsNum)
    return totalPairsNum;
}

// logika pertama mencari warna yang sama dan kita jadikan sepasang exp [10, 10, 20, 20, 30, 20]
// hasil nya = ada 2 pasang 10 dan 10, 20 dan 20 jadi sisa warna yg tdk sepasang adalah 30 dan 20
// lalu di solved menggunakan method javascript yaitu reduce

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(`pairs counted : ${countPairs(n, ar)}`);