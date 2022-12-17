import { Content } from "./content";
import { Notification } from "./notification"

describe('Notification', () => {

  it('should be able to create notification', () =>{
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade!'),
      category: 'social',
      recipientId: '123456789'
    });
    expect(notification).toBeTruthy();
  })
  
})