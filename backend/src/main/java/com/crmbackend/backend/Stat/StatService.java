package com.crmbackend.backend.Stat;

import com.crmbackend.backend.Stat.dto.StatDTORequest;
import com.crmbackend.backend.Stat.dto.StatDTOResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StatService {

    private final StatRepository statRepository;
    private final StatMapper statMapper;
    public void addStat(StatDTORequest statDTORequest) {
        StatModel statModel = statMapper.mapDTOToEntity(statDTORequest);
        statRepository.save(statModel);
    }

    public void deleteStat(Long id) {
        statRepository.deleteById(id);
    }

    public List<StatDTOResponse> getAllStats() {
        List<StatModel> statModels = statRepository.findAll();
        List<StatDTOResponse> statDTOResponses = statModels.stream().map(statMapper::mapEntityToDTO).collect(Collectors.toList());
        return statDTOResponses;
    }
}
