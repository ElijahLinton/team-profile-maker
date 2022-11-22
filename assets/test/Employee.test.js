
const Employee = require('../Employee')
describe('Employee', () => {
    it('should return have three parameters that hold strings', () =>{
        const obj = new Employee(id, email);
    
        expect( id , email in obj).toBe('');
    })
    it('should be able to take values and store in the three parameter',() => {
              const id = 'id'
          const email = 'email'
          expect(  id).toEqual('id')
          expect( email).toEqual('email')
    })
})
