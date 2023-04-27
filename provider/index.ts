import { ethers } from 'ethers'
import { start, end, wait } from '../utils'

const runner = async (rpc_url: string) => {

    const provider = new ethers.providers.JsonRpcProvider(rpc_url);
    const ADDRESSES = process.env.ADDRESSES?.split(',')
    const times: any = []

    for(let i = 0; i < ADDRESSES!.length; i++){
        for(let j = 0; j < 10; j++){
            start()
            Number(await provider.getBalance(ADDRESSES![i]))
            times.push(end())
            console.log(`${i},${j}`)
            await wait(1000)
        }
    }

    const sum = times.reduce((accumulator: any, currentValue: any) => {
        return accumulator + currentValue;
    });
      
    const average = sum / times.length;
 
    return average
}

export {
    runner
}