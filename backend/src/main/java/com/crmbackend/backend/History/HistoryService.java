package com.crmbackend.backend.History;

import com.crmbackend.backend.History.dto.HistoryDTORequest;
import com.crmbackend.backend.History.dto.HistoryDTOResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class HistoryService {

    private final HistoryRepository historyRepository;
    private final HistoryMapper historyMapper;

    public List<HistoryDTOResponse> getAllHistory() {
        return historyRepository.findAll().stream().map(historyMapper::mapEntityToDTO).collect(Collectors.toList());
    }

    public void addHistory(HistoryDTORequest historyDTORequest) {
        historyRepository.save(historyMapper.mapDTOToEntity(historyDTORequest));
    }

    public void deleteHistory(Long id) {
        historyRepository.deleteById(id);
    }
}
