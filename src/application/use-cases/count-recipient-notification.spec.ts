import { makeNotifications } from '@test/factory/notification-factory';
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(notificationRepository);

    // await notificationRepository.create(
    //   new Notification({
    //     category: 'social',
    //     content: new Content('Nova solicitação de amizade'),
    //     recipientId: 'recipient-1',
    //   })
    // );

    await notificationRepository.create(
      makeNotifications({recipientId: 'recipient-1'})
    );

    await notificationRepository.create(
      makeNotifications({recipientId: 'recipient-1'})
    );

    await notificationRepository.create(
      makeNotifications({recipientId: 'recipient-2'})
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1'
    })    

    expect(count).toEqual(2);
  })
})