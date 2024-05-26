package com.crmbackend.backend.SupportRequest;

import com.crmbackend.backend.SupportRequest.dto.SupportRequestEditRequest;
import com.crmbackend.backend.SupportRequest.dto.SupportRequestRequest;
import com.crmbackend.backend.SupportRequest.dto.SupportRequestResponse;
import com.crmbackend.backend.SupportRequest.mappers.SupportMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class SupportRequestService {

    private final SupportRepository supportRepository;

    private final SupportMapper supportMapper;

    public void addSupportRequest(SupportRequestRequest supportRequestRequest) {
        SupportRequestModel supportRequestModel = supportMapper.mapDTOToEntity(supportRequestRequest);
        supportRepository.save(supportRequestModel);
    }

    public void deleteSupportRequest(Long id) {
        supportRepository.deleteById(id);
    }

    public List<SupportRequestResponse> getAllSupportRequests() {
        return supportRepository.findAll().stream().map(supportMapper::mapEntityToDTO).collect(Collectors.toList());
    }

    public void editSupportRequest(SupportRequestEditRequest supportRequestRequest) {
        SupportRequestModel supportRequestModel = supportRepository.findById(supportRequestRequest.getId()).orElseThrow();
        supportRequestModel.setSupportCategory(supportRequestRequest.getSupportCategory());
        supportRequestModel.setDescription(supportRequestRequest.getDescription());
        supportRepository.save(supportRequestModel);
    }
}
