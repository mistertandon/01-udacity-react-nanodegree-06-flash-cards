import React from 'react'
import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

import { FontAwesome } from '@expo/vector-icons'
import { FLASH_CARDS_NOTIFICATION_KEY } from './../utils/constants'
import { DeepSkyBlue } from './../utils/colors'

export const clearNotificationObject = () => {

  return AsyncStorage.removeItem(FLASH_CARDS_NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export const getNotificationObject = () => {

  return {
    title: 'Hi Folk',
    body: 'Do not forget to play quiz today.',
    android: {
      vibrate: true,
      sound: true,
      sticky: false,
      priority: 'max',
      color: DeepSkyBlue
    }
  }
}

export const setNotification = () => {

  AsyncStorage.getItem(FLASH_CARDS_NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {

      if (data === null) {

        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(
            ({ status }) => {

              if (status === 'granted') {

                Notifications.cancelAllScheduledNotificationsAsync();

                let todayDate = new Date();
                todayDate.setDate(todayDate.getDate() + 1);
                todayDate.setHours(20);

                Notifications.scheduleLocalNotificationAsync(
                  getNotificationObject(),
                  {
                    time: todayDate,
                    repeat: 'day'
                  }
                );

                AsyncStorage.setItem(FLASH_CARDS_NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
      }
    })
}