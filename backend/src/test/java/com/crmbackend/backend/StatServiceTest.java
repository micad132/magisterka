package com.crmbackend.backend;

import com.crmbackend.backend.History.HistoryModel;
import com.crmbackend.backend.History.HistoryRepository;
import com.crmbackend.backend.History.dto.HistoryDTOResponse;
import com.crmbackend.backend.Stat.*;
import com.crmbackend.backend.Stat.dto.StatDTORequest;
import com.crmbackend.backend.Stat.dto.StatDTOResponse;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.TestPropertySource;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
@TestPropertySource(properties = {
        "TWILIO_ACCOUNT_SID=xjs",
        "TWILIO_AUTH_TOKEN=fdsfds",
        "TWILIO_PHONE_NUMBER=+747"
})
public class StatServiceTest {

    @Autowired
    private StatService statService;

    @MockBean
    private StatRepository statRepository;

    @MockBean
    private StatMapper statMapper;
    @Autowired
    private HistoryRepository historyRepository;

    @Test
    void shouldAddAndDisplayStat() {

        StatDTORequest statDTORequest = StatDTORequest.builder()
                .statCategory(StatCategory.SUPPORT)
                .statType(StatType.DOUGHNUT)
                .creatorId(1L)
                .description("Testowy wykres")
                .chartData("Test")
                .build();

        StatModel statModel = new StatModel();
        when(statMapper.mapDTOToEntity(statDTORequest)).thenReturn(statModel);
        when(statRepository.save(any(StatModel.class))).thenReturn(statModel);
        when(statRepository.findAll()).thenReturn(Collections.singletonList(statModel));

        statService.addStat(statDTORequest);

        verify(statRepository, times(1)).save(statModel);


        List<StatDTOResponse> allStats = statService.getAllStats();
        assertEquals(1, allStats.size());
    }

    @Test
    void shouldDeleteStat() {
        StatDTORequest statDTORequest = StatDTORequest.builder()
                .statCategory(StatCategory.SUPPORT)
                .statType(StatType.DOUGHNUT)
                .creatorId(1L)
                .description("Testowy wykres")
                .chartData("Test")
                .build();

        StatModel statModel = new StatModel();
        statModel.setId(1L);
        when(statMapper.mapDTOToEntity(statDTORequest)).thenReturn(statModel);
        when(statRepository.save(any(StatModel.class))).thenReturn(statModel);
        when(statRepository.findAll()).thenReturn(Collections.singletonList(statModel));

        statService.addStat(statDTORequest);
        verify(statRepository, times(1)).save(statModel);

        List<StatDTOResponse> allStats = statService.getAllStats();
        assertEquals(1, allStats.size());

        statService.deleteStat(statModel.getId());
        verify(statRepository, times(1)).deleteById(statModel.getId());

        when(statRepository.findAll()).thenReturn(Collections.emptyList());

        allStats = statService.getAllStats();
        assertEquals(0, allStats.size());
    }


}
