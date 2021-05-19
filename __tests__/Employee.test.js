const { expect, it } = require('@jest/globals');
const Employee = require('../lib/employee');

describe('employee', () =>{
    describe('Initialization', () =>{
        it('should create an object with name,id, and email if provided', () =>{
            const employee = new Employee('robert', 12345,'robert@example.com');
    
            expect(employee.name).toEqual('robert');
            expect(employee.id).toEqual(12345);
            expect(employee.email).toEqual('robert@example.com');
        });
    
        it('should throw an error if provided no arguments', () =>{
            const cb = () => new Employee();
    
            expect(cb).toThrow();
        });


    })
    

    
})