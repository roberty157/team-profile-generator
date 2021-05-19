const { expect, it } = require('@jest/globals');
const Intern = require('../lib/intern');

describe('intern', () =>{
    describe('Initialization', () =>{
        it('should create an object with name,id,email,school if provided', () =>{
            const intern = new Intern('robert', 12345,'robert@example.com','UCI');
    
            expect(intern.name).toEqual('robert');
            expect(intern.id).toEqual(12345);
            expect(intern.email).toEqual('robert@example.com');
            expect(intern.school).toEqual('UCI');
        });
    

        it('should return school', () =>{
            const intern = new Intern('robert', 12345, 'robert@example.com', 'UCI');
    
            expect(intern.getSchool()).toEqual('UCI');
        });

        it('should return "Intern"', () =>{
            const intern = new Intern('robert', 12345, 'robert@example.com', 'UCI');
    
            expect(intern.getRole()).toEqual('Intern');
        });
    })
    

    
})