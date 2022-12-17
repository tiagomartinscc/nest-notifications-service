import { Content } from "./content"

describe('Notification content', () => {

  test('it should be able to create a notification content', () =>{
    const content = new Content('Você recebeu uma notificção de amizade!');
    expect(content).toBeTruthy();
  })
  
  test('it should not be able to create a notification content with less than 5 characters', () =>{
    expect(() => new Content('Você')).toThrowError();
  })
  
  test('it should not be able to create a notification content with more than 240 characters', () =>{
    expect(() => new Content('a'.repeat(241))).toThrowError();
  })

})