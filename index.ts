import { config as loadEnv } from 'dotenv';

loadEnv();

import { ethers } from 'ethers'
import Table from 'cli-table';

import { runner } from './provider'

(async () => {

    const balanceApis = [
        'Sequence', 
        'Alchemy', 
        'Infura', 
        'Quicknode',
        'Polygon',
        'Ankr'
    ];

    var balanceTable = new Table({
        head: ['API', 'Time (ms)']
    , colWidths: [30, 30]
    });

    try {
        // **** uncomment below table for testing

        balanceTable.push(
               [balanceApis[0], `${await runner(process!.env!.SEQUENCE_RPC!)}`]
            ,  [balanceApis[1], `${await runner(process!.env!.ALCHEMY_RPC!)}`]
            ,  [balanceApis[2], `${await runner(process!.env!.INFURA_RPC!)}`]
            ,  [balanceApis[3], `${await runner(process!.env!.QUICKNODE_RPC!)}`]
            ,  [balanceApis[4], `${await runner(process!.env!.POLYGON_RPC!)}`]
            ,  [balanceApis[5], `${await runner(process!.env!.ANKR_RPC!)}`]
        );

        console.log(balanceTable.toString());
    }catch(e){
        console.log(e)
    }
})();
