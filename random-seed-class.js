//seed random is not import compatible, but we still need to use it
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const rand = require("seed-random");
export class Random{
    constructor(options={}){
        this.options = options;
        this.rnd = rand(options.seed || 'default');
    }
    
    ratio(){
        return this.rnd();
    }
    
    float(upperBound=Number.MAX_VALUE, lowerBound=0){
        const delta = upperBound - lowerBound;
        return lowerBound + delta * this.rnd();
    }
    
    integer(upperBound=Math.floor(Number.MAX_VALUE), lowerBound=0){
        return Math.floor(this.float(upperBound, lowerBound));
    }
    
    array(array){
        return array[this.integer(array.length)];
    }
    
    string(parts, max){
        const numParts = this.integer(max);
        let lcv=0;
        let result = '';
        for(;lcv < numParts; lcv++){
            result += this.array(parts);
        }
        return result;
    }
    
}