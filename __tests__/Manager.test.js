const { expect, it } = require('@jest/globals');
const Manager = require('../lib/manager');

describe('manager', () =>{
    describe('Initialization', () =>{
        it('should create an object with name,id,email,officeNumber if provided', () =>{
            const manager= new Manager('robert', 12345,'robert@example.com',2058);
    
            expect(manager.name).toEqual('robert');
            expect(manager.id).toEqual(12345);
            expect(manager.email).toEqual('robert@example.com');
            expect(manager.officeNumber).toEqual(2058);
        });
    
        

        it('should return "Manager"', () =>{
            const manager = new Manager('robert', 12345, 'robert@example.com', 2058);
    
            expect(manager.getRole()).toEqual('Manager');
        });
    })
    

    
})