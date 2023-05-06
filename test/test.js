import * as chai from 'chai';
const should = (chai.should?chai:window.chai).should();
import { Random } from '../random-seed-class.js';


const testArrayValues = [
    'foo', 'bar', 'baz', 'baz,', 'qux', 'quux', 'corge', 'grault', 
    'garply', 'waldo', 'fred', 'plugh', 'xyzzy', 'thud'
];
const testCases = {
    foo : {
        integer: {
            max: 35,
            value: 14
        },
        ratio: { value: 0.4174901960276851 },
        float: {
            max: 20,
            value: 8.349803920553702
        },
        string: {
            max: testArrayValues,
            min: 10,
            value: 'bazfooplughfred'
        },
        array: {
            max: testArrayValues,
            value: 'quux'
        }
    }
};

describe('random-seed-class', ()=>{
    Object.keys(testCases).forEach((seed)=>{
        const testCase = testCases[seed];
        describe('random-seed-class', ()=>{
            Object.keys(testCase).forEach((type)=>{
                const config = testCase[type];
                it(`generates ${type}`, ()=>{
                    const random = new Random(seed);
                    const value = random[type](config.max, config.min);
                    value.should.equal(config.value);
                });
            });
        });
    });
});
