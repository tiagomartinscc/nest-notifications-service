import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification";

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a notification',
      recipientId: 'example-recipient-id'
    })

    console.log(notificationRepository.notifications);

    expect(notificationRepository.notifications).toBeTruthy();
    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  })
})