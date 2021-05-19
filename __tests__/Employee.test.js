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
    
      

        it('should return name', () =>{
            const employee = new Employee('robert', 12345, 'robert@example.com');
    
            expect(employee.getName()).toEqual('robert');
        });

        it('should return email', () =>{
            const employee = new Employee('robert', 12345, 'robert@example.com');
    
            expect(employee.getEmail()).toEqual('robert@example.com');
        });

        it('should return id', () =>{
            const employee = new Employee('robert', 12345, 'robert@example.com');
    
            expect(employee.getId()).toEqual(12345);
        });

        it('should return "Employee"', () =>{
            const employee = new Employee('robert', 12345, 'robert@example.com');
    
            expect(employee.getRole()).toEqual('Employee');
        });
    })
    

    
})