const { expect, it } = require('@jest/globals');
const Engineer = require('../lib/engineer');

describe('engineer', () =>{
    describe('Initialization', () =>{
        it('should create an object with name,id,email,github if provided', () =>{
            const engineer = new Engineer('robert', 12345,'robert@example.com','roberty157');
    
            expect(engineer.name).toEqual('robert');
            expect(engineer.id).toEqual(12345);
            expect(engineer.email).toEqual('robert@example.com');
            expect(engineer.github).toEqual('roberty157');
        });
    
        

        it('should return github', () =>{
            const engineer = new Engineer('robert', 12345, 'robert@example.com', 'roberty157');
    
            expect(engineer.getGithub()).toEqual('roberty157');
        });

        it('should return "Engineer"', () =>{
            const engineer = new Engineer('robert', 12345, 'robert@example.com', 'roberty157');
    
            expect(engineer.getRole()).toEqual('Engineer');
        });

    })
    

    
})