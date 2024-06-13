package com.crmbackend.backend.utils;

import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

    @Value("${TWILIO_PHONE_NUMBER}")
    private String twilioPhoneNumber;

    public void sendSms(String to, String body) {
        PhoneNumber toNumber = new PhoneNumber(to);
        PhoneNumber fromNumber = new PhoneNumber(twilioPhoneNumber);
        Message message = Message.creator(toNumber, fromNumber, body).create();
        System.out.println("SMS sent successfully! SID: " + message.getSid());
    }
}
