/// <reference path="../index/node.d.ts"/>
/// <reference path="../index/jasmine.d.ts"/>

import options = require('../src/options');

options.provides = 'test/symbols.tsv';

import parser = require('../src/parser');
import combine = require('../src/combine');
import generate = require('../src/generate');

function parse(fileName: string): generate.Modules {
    var file = parser.jsdoc(fileName);
    var symbols = combine.members(file);
    var result = generate.defs(symbols).modules;

    Object.keys(result).forEach(moduleName => {
        Object.keys(result[moduleName]).forEach(memberName => {
            var text = result[moduleName][memberName];
            var noComments = text.replace(/\/\*\*[^]*?\*\//g, '');
            var simpleSpace = noComments.replace(/\s+/g, ' ');

            result[moduleName][memberName] = simpleSpace.trim();
        });
    });

    return result;
}

describe('generate', () => {

    it('class', () => {
        expect(parse('test/class.js')).toEqual({
            "example": {
                "Class": "class Class extends Class.__Class { } module Class { class __Class implements example.Interface { constructor(x: number); constructor(x: string); overloadedMethod(x: number): void; overloadedMethod(x: string): void; } }"
            }
        });
    });

    it('interface', () => {
        expect(parse('test/interface.js')).toEqual({
            "example": {
                "Interface": "interface Interface { interfaceMethod(x: number): void; interfaceMethod(x: string): void; }"
            }
        });
    });

    it('function with missing @param', () => {
        expect(parse('test/missing_params.js')).toEqual({
            "example": {
                "missingParams": "function missingParams(x: any /* jsdoc error */, y: any /* jsdoc error */): void;"
            }
        });
    });

    it('function with no arguments', () => {
        expect(parse('test/no_params.js')).toEqual({
            "example": {
                "noParams": "function noParams(): void;"
            }
        });
    });

    it('overloaded function', () => {
        expect(parse('test/overloaded_function.js')).toEqual({
            "example": {
                "overloadedFunction": "function overloadedFunction(x: number): void; function overloadedFunction(x: string): void;"
            }
        });
    });

    it('subclass', () => {
        expect(parse('test/subclass.js')).toEqual({
            "example": {
                "SubClass": "class SubClass extends SubClass.__Class { } module SubClass { class __Class extends example.Class.__Class { constructor(); } }"
            }
        });
    });

    it('subinterface', () => {
        expect(parse('test/subinterface.js')).toEqual({
            "example": {
                "SubInterface": "interface SubInterface extends example.Interface { }"
            }
        });
    });

    it('typedef union', () => {
        expect(parse('test/typedef_union.js')).toEqual({
            "example": {
                "UnionType": "interface UnionType { /*any (string|number)*/ }",
                "unionFunction": "function unionFunction(x: example.UnionType): void;",
                "genericUnionFunction": "function genericUnionFunction(x: example.UnionType<any>): void;"
            }
        });
    });
});