package com.crmbackend.backend.SupportRequest;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SupportRequestService {

    private final SupportRepository supportRepository;
}
