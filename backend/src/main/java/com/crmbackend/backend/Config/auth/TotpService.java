package com.crmbackend.backend.Config.auth;
import com.crmbackend.backend.User.UserModel;
import org.apache.commons.codec.binary.Base32;


import org.jboss.aerogear.security.otp.Totp;
import org.springframework.stereotype.Service;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;

@Service
public class TotpService {

    private static final String QR_PREFIX = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

    public String generateSecret() {
        Base32 base32 = new Base32();
        byte[] bytes = new byte[10];
        new SecureRandom().nextBytes(bytes);
        return base32.encodeAsString(bytes);
    }

    public String generateQRUrl(UserModel userModel) {
        return QR_PREFIX + URLEncoder.encode(String.format("otpauth://totp/%s:%s?secret=%s&issuer=%s", "SpringSecurity",
                userModel.getUsername(), userModel.getSecret2FA(), "SpringSecurity"), StandardCharsets.UTF_8);
    }

    public boolean verifyCode(String secret, int code) {
        Totp totp = new Totp(secret);
        return totp.verify(String.valueOf(code));
    }
}
