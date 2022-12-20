import { makeNotifications } from '@test/factory/notification-factory';
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipients notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getRecipientNotifications = new GetRecipientNotifications(notificationRepository);

    await notificationRepository.create(
      makeNotifications({recipientId: 'recipient-1'})
    );

    await notificationRepository.create(
      makeNotifications({recipientId: 'recipient-1'})
    );

    await notificationRepository.create(
      makeNotifications({recipientId: 'recipient-2'})
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-1'
    })    

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1'}),
        expect.objectContaining({ recipientId: 'recipient-1'})
      ])
    );
  })
})