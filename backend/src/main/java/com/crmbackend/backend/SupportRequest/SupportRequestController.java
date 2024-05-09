package com.crmbackend.backend.SupportRequest;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class SupportRequestController {

    private final SupportRequestService supportRequestService;
}
